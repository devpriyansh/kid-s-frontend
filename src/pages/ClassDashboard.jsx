import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useClass } from '../contexts/ClassContext';
import { useKid } from '../contexts/KidContext';
import { getClass } from '../data/curriculum';
import ModuleCard from '../components/class/ModuleCard';
import Mascot from '../components/common/Mascot';
import ClassBadge from '../components/common/ClassBadge';
import { CardSkeleton } from '../components/common/Skeletons';
import { useProgress } from '../hooks/useProgress';
import { useDashboard } from '../hooks/useKids';
import { BookOpen, Palette, Gamepad2, Brain, HandMetal, Puzzle, Sparkles, Bot, PlayCircle, CheckCircle2 } from 'lucide-react';

const getGradientClasses = (colorName) => {
  switch (colorName) {
    case 'kid-primary': return 'from-kid-primary to-kid-primary-dark';
    case 'kid-secondary': return 'from-kid-secondary to-kid-secondary-dark';
    case 'kid-yellow': return 'from-kid-yellow to-kid-yellow-dark';
    case 'kid-yellow-dark': return 'from-kid-yellow to-kid-yellow-dark';
    case 'kid-purple': return 'from-kid-purple to-kid-purple-dark';
    case 'kid-green': return 'from-kid-green to-kid-green-dark';
    case 'kid-pink': return 'from-kid-secondary to-kid-secondary-dark';
    default: return 'from-kid-primary to-kid-primary-dark';
  }
};

const PremiumGameCard = ({ title, icon, colorClass, onClick, isImage = false, isPlayed = false }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative glass-card overflow-hidden cursor-pointer group flex flex-col aspect-[4/5] shadow-[0_12px_40px_rgba(0,0,0,0.12)] border-4 border-white"
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-white/60 to-${colorClass}/20 pointer-events-none`} />
      
      {isPlayed && (
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-3 right-3 z-30 bg-kid-green text-white p-1 rounded-full shadow-md"
        >
          <CheckCircle2 size={24} strokeWidth={3} />
        </motion.div>
      )}

      <div className="flex-1 flex items-center justify-center relative z-10 p-6">
        {isImage ? (
          <img src={icon} alt={title} className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" />
        ) : (
          <div className="text-[6rem] sm:text-[8rem] drop-shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 leading-none">
            {icon}
          </div>
        )}
      </div>

      <div className="bg-white/95 backdrop-blur-xl p-4 sm:p-5 text-center border-t-4 border-white relative z-10 shadow-[0_-8px_20px_rgba(0,0,0,0.08)]">
        <h3 className="text-xl sm:text-2xl font-black font-baloo text-kid-text truncate drop-shadow-sm">{title}</h3>
      </div>

      <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center z-20">
        <div className={`btn-chunky bg-gradient-to-b ${getGradientClasses(colorClass)} shadow-[0_10px_25px_rgba(0,0,0,0.4),inset_0_4px_8px_rgba(255,255,255,0.4)] scale-75 group-hover:scale-100 transition-transform duration-300 pointer-events-none text-2xl px-6 py-3 border-2 border-white/60`}>
          <PlayCircle size={36} strokeWidth={3} /> Play!
        </div>
      </div>
    </motion.div>
  );
};

const ClassDashboard = () => {
  const { selectedClass } = useClass();
  const { selectedKid } = useKid();
  const navigate = useNavigate();
  const { getModuleProgress } = useProgress();
  const { data: dashboardData } = useDashboard();
  const [quizzes, setQuizzes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('learning');

  const playedQuizIds = useMemo(() => {
    if (!dashboardData?.gameProgress) return new Set();
    const kidProgress = dashboardData.gameProgress.filter(g => String(g.child_id) === String(selectedKid?.id));
    return new Set(kidProgress.map(g => g.quiz_id));
  }, [dashboardData, selectedKid]);

  useEffect(() => {
    if (!selectedClass || !selectedKid) {
      navigate('/child-profiles');
      return;
    }

    const fetchQuizzes = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem('token');
        const _envUrl = import.meta.env.VITE_API_BASE_URL;
        const API_BASE_URL = _envUrl ? (_envUrl.endsWith('/api/v1') ? _envUrl : _envUrl.replace(/\/$/, '') + '/api/v1') : 'https://kid-s-backend.onrender.com/api/v1';
        const res = await fetch(`${API_BASE_URL}/quiz/list/${selectedKid?.age || 'nursery'}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const resData = await res.json();
        if (res.ok && resData.data?.result?.quizzes) {
          setQuizzes(resData.data.result.quizzes);
        }
      } catch (err) {
        console.error("Failed to fetch quizzes", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuizzes();
  }, [selectedClass, navigate, selectedKid]);

  const classData = getClass(selectedClass);

  // Calculate overall progress
  const totalLessons = useMemo(() => {
    if (!classData) return 0;
    return classData.modules.reduce((sum, mod) => sum + (mod.lessons?.length || 0), 0);
  }, [classData]);

  const completedLessons = useMemo(() => {
    if (!classData) return 0;
    return classData.modules.reduce((sum, mod) => {
      const prog = getModuleProgress(mod.id, mod.lessons?.length || 0);
      return sum + prog.completed;
    }, 0);
  }, [classData, getModuleProgress]);

  const totalStars = useMemo(() => {
    return selectedKid?.stars || 0;
  }, [selectedKid]);

  const overallProgress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  if (!selectedClass) return null;
  if (!classData) return <div>Class not found</div>;

  // Determine available tabs based on quizzes
  const availableTabs = [
    { id: 'learning', label: 'Learning', icon: BookOpen, color: 'kid-primary' },
    { id: 'coloring', label: 'Coloring', icon: Palette, color: 'kid-purple' }
  ];

  if (quizzes.some(q => !q.title.match(/\[(Memory|DragDrop|Puzzle|Rainbow|Letter|Shadow|Fishing|Story)\]/))) {
    availableTabs.push({ id: 'quizzes', label: 'Quizzes', icon: Gamepad2, color: 'kid-yellow-dark' });
  }
  if (quizzes.some(q => q.title.includes('[Memory]'))) {
    availableTabs.push({ id: 'memory', label: 'Memory', icon: Brain, color: 'kid-secondary' });
  }
  if (quizzes.some(q => q.title.includes('[DragDrop]'))) {
    availableTabs.push({ id: 'dragdrop', label: 'Drag & Drop', icon: HandMetal, color: 'kid-primary' });
  }
  if (quizzes.some(q => q.title.includes('[Puzzle]'))) {
    availableTabs.push({ id: 'puzzle', label: 'Puzzles', icon: Puzzle, color: 'kid-pink' });
  }
  if (quizzes.some(q => q.title.match(/\[(Rainbow|Letter|Shadow|Fishing|Story)\]/))) {
    availableTabs.push({ id: 'minigames', label: 'Mini-Games', icon: Sparkles, color: 'kid-green' });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-full flex flex-col hide-scrollbar"
    >
      {/* Minimal Header */}
      <div className="flex-none mb-4">
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white/60 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/80 shadow-sm">
          <div className="flex items-center gap-3">
            <ClassBadge classId={selectedClass} size="sm" />
            <h1 className="text-xl sm:text-2xl font-baloo font-black text-kid-primary-dark">
              {classData.label}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-kid-yellow/20 px-3 py-1.5 rounded-xl text-kid-yellow-dark font-bold text-sm sm:text-base border border-kid-yellow/30 shadow-inner">
              <Sparkles size={18} className="fill-kid-yellow-dark" /> {totalStars} Stars
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-xl font-bold text-kid-text shadow-sm text-sm sm:text-base border border-slate-100">
              <span className="drop-shadow-sm">{selectedKid?.avatar || '👦'}</span> <span className="hidden sm:inline">{selectedKid?.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex-none mb-4 relative z-20">
        <div className="flex overflow-x-auto hide-scrollbar gap-3 pb-2 px-1">
          {availableTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-baloo font-black text-lg transition-all border whitespace-nowrap overflow-hidden relative focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 ${isActive
                    ? `bg-gradient-to-b ${getGradientClasses(tab.color)} text-white border-white/40 shadow-[0_8px_16px_rgba(0,0,0,0.1),inset_0_4px_8px_rgba(255,255,255,0.4)]`
                    : 'bg-white/60 backdrop-blur-sm text-slate-500 hover:text-slate-700 hover:bg-white/80 border-white/80 shadow-[0_4px_8px_rgba(0,0,0,0.05)]'
                  }`}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} /> {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content Area */}
      <div className="flex-1 overflow-y-auto hide-scrollbar pb-12 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            {/* Learning Modules */}
            {activeTab === 'learning' && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 px-2 pt-4">
                {isLoading ? (
                  [...Array(10)].map((_, i) => <CardSkeleton key={i} />)
                ) : (
                  classData.modules.map((module) => {
                    const total = module.lessons?.length || 0;
                    const prog = getModuleProgress(module.id, total);
                    return (
                      <ModuleCard
                        key={module.id}
                        module={module}
                        progress={prog}
                        onSelect={() => {
                          if (total > 0) navigate(`/lesson/${module.id}/0`);
                        }}
                      />
                    );
                  })
                )}
              </div>
            )}

            {/* Coloring Games */}
            {activeTab === 'coloring' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 px-2 pt-4">
                <PremiumGameCard
                  title="Coloring Book"
                  icon="🎨"
                  colorClass="kid-purple"
                  isPlayed={dashboardData?.gameProgress?.some(g => String(g.child_id) === String(selectedKid?.id) && g.quiz?.title?.includes('[Coloring]'))}
                  onClick={() => navigate('/coloring')}
                />
              </div>
            )}

            {/* Quizzes */}
            {activeTab === 'quizzes' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 px-2 pt-4">
                {isLoading ? (
                  [...Array(5)].map((_, i) => <CardSkeleton key={i} />)
                ) : (
                  quizzes.filter(q => !q.title.match(/\[(Memory|DragDrop|Puzzle|Rainbow|Letter|Shadow|Fishing|Story)\]/)).map((quiz) => (
                    <PremiumGameCard
                      key={quiz.id}
                      title={quiz.title}
                      icon={quiz.image_url || '✨'}
                      colorClass="kid-yellow"
                      isPlayed={playedQuizIds.has(quiz.id)}
                      onClick={() => navigate(`/quiz/${quiz.id}`)}
                    />
                  ))
                )}
              </div>
            )}

            {/* Memory Games */}
            {activeTab === 'memory' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 px-2 pt-4">
                {isLoading ? (
                  [...Array(5)].map((_, i) => <CardSkeleton key={i} />)
                ) : (
                  quizzes.filter(q => q.title.includes('[Memory]')).map((quiz) => (
                    <PremiumGameCard
                      key={quiz.id}
                      title={quiz.title.replace('[Memory] ', '')}
                      icon={quiz.image_url || '🃏'}
                      colorClass="kid-secondary"
                      isPlayed={playedQuizIds.has(quiz.id)}
                      onClick={() => navigate(`/memory/${quiz.id}`)}
                    />
                  ))
                )}
              </div>
            )}

            {/* Drag & Drop */}
            {activeTab === 'dragdrop' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 px-2 pt-4">
                {isLoading ? (
                  [...Array(5)].map((_, i) => <CardSkeleton key={i} />)
                ) : (
                  quizzes.filter(q => q.title.includes('[DragDrop]')).map((quiz) => (
                    <PremiumGameCard
                      key={quiz.id}
                      title={quiz.title.replace('[DragDrop] ', '')}
                      icon={quiz.image_url || '🖐️'}
                      colorClass="kid-primary"
                      isPlayed={playedQuizIds.has(quiz.id)}
                      onClick={() => navigate(`/dragdrop/${quiz.id}`)}
                    />
                  ))
                )}
              </div>
            )}

            {/* Puzzles */}
            {activeTab === 'puzzle' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 px-2 pt-4">
                {isLoading ? (
                  [...Array(5)].map((_, i) => <CardSkeleton key={i} />)
                ) : (
                  quizzes.filter(q => q.title.includes('[Puzzle]')).map((quiz) => (
                    <PremiumGameCard
                      key={quiz.id}
                      title={quiz.title.replace('[Puzzle] ', '')}
                      icon={quiz.image_url}
                      isImage={true}
                      colorClass="kid-pink"
                      isPlayed={playedQuizIds.has(quiz.id)}
                      onClick={() => navigate(`/puzzle/${quiz.id}`)}
                    />
                  ))
                )}
              </div>
            )}

            {/* Mini-Games */}
            {activeTab === 'minigames' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 px-2 pt-4">
                {isLoading ? (
                  [...Array(5)].map((_, i) => <CardSkeleton key={i} />)
                ) : (
                  quizzes.filter(q => q.title.match(/\[(Rainbow|Letter|Shadow|Fishing|Story)\]/)).map((quiz) => {
                    let path = '';
                    if (quiz.title.includes('[Rainbow]')) path = `/sorting/${quiz.id}`;
                    if (quiz.title.includes('[Letter]')) path = `/letter/${quiz.id}`;
                    if (quiz.title.includes('[Shadow]')) path = `/shadow/${quiz.id}`;
                    if (quiz.title.includes('[Fishing]')) path = `/fishing/${quiz.id}`;
                    if (quiz.title.includes('[Story]')) path = `/story/${quiz.id}`;

                    return (
                      <PremiumGameCard
                        key={quiz.id}
                        title={quiz.title.replace(/\[.*?\]\s*/, '')}
                        icon={quiz.image_url}
                        colorClass="kid-green"
                        isPlayed={playedQuizIds.has(quiz.id)}
                        onClick={() => navigate(path)}
                      />
                    );
                  })
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Mascot */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-none drop-shadow-2xl">
        <Mascot className="w-24 h-24 animate-float" />
      </div>

      {/* AI Voice Tutor FAB (Mobile friendly) */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate('/ai-tutor')}
        className="fixed bottom-6 left-6 z-50 bg-white/80 backdrop-blur-md border border-kid-primary/40 rounded-full p-4 shadow-[0_8px_20px_rgba(96,165,250,0.3),inset_0_2px_4px_rgba(255,255,255,0.8)] flex items-center justify-center text-kid-primary-dark hover:bg-white transition-colors"
      >
        <Bot size={36} strokeWidth={2.5} />
      </motion.button>
    </motion.div>
  );
};

export default ClassDashboard;