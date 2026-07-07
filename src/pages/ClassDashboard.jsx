import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useClass } from '../contexts/ClassContext';
import { useKid } from '../contexts/KidContext';
import { getClass } from '../data/curriculum';
import ModuleCard from '../components/class/ModuleCard';
import ClassBadge from '../components/common/ClassBadge';
import Mascot from '../components/common/Mascot';
import { useProgress } from '../hooks/useProgress';

const ClassDashboard = () => {
  const { selectedClass } = useClass();
  const { selectedKid } = useKid();
  const navigate = useNavigate();
  const { getModuleProgress } = useProgress();
  const [quizzes, setQuizzes] = useState([]);
  const [activeTab, setActiveTab] = useState('learning');

  useEffect(() => {
    if (!selectedClass || !selectedKid) {
      navigate('/child-profiles');
      return;
    }

    const fetchQuizzes = async () => {
      try {
        const token = localStorage.getItem('token');
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1';
        const res = await fetch(`${API_BASE_URL}/quiz/list/${selectedKid?.age || 'nursery'}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const resData = await res.json();
        if (res.ok && resData.data?.result?.quizzes) {
          setQuizzes(resData.data.result.quizzes);
        }
      } catch (err) {
        console.error("Failed to fetch quizzes", err);
      }
    };

    fetchQuizzes();
  }, [selectedClass, navigate, selectedKid]);

  if (!selectedClass) return null;

  const classData = getClass(selectedClass);
  if (!classData) return <div>Class not found</div>;

  // Calculate overall progress
  const totalLessons = useMemo(() => {
    return classData.modules.reduce((sum, mod) => sum + (mod.lessons?.length || 0), 0);
  }, [classData]);

  const completedLessons = useMemo(() => {
    return classData.modules.reduce((sum, mod) => {
      const prog = getModuleProgress(mod.id, mod.lessons?.length || 0);
      return sum + prog.completed;
    }, 0);
  }, [classData, getModuleProgress]);

  const totalStars = useMemo(() => {
    return selectedKid?.stars || 0;
  }, [selectedKid]);

  const overallProgress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  // Determine available tabs based on quizzes
  const availableTabs = [
    { id: 'learning', label: '📚 Learning', color: 'bg-kid-primary text-white' },
    { id: 'coloring', label: '🎨 Coloring', color: 'bg-kid-purple text-white' }
  ];

  if (quizzes.some(q => !q.title.match(/\[(Memory|DragDrop|Puzzle|Rainbow|Letter|Shadow|Fishing|Story)\]/))) {
    availableTabs.push({ id: 'quizzes', label: '🎮 Quizzes', color: 'bg-kid-yellow text-white text-shadow-sm' });
  }
  if (quizzes.some(q => q.title.includes('[Memory]'))) {
    availableTabs.push({ id: 'memory', label: '🧠 Memory', color: 'bg-kid-secondary text-white' });
  }
  if (quizzes.some(q => q.title.includes('[DragDrop]'))) {
    availableTabs.push({ id: 'dragdrop', label: '🖐️ Drag & Drop', color: 'bg-kid-primary text-white' });
  }
  if (quizzes.some(q => q.title.includes('[Puzzle]'))) {
    availableTabs.push({ id: 'puzzle', label: '🧩 Puzzles', color: 'bg-kid-pink text-white' });
  }
  if (quizzes.some(q => q.title.match(/\[(Rainbow|Letter|Shadow|Fishing|Story)\]/))) {
    availableTabs.push({ id: 'minigames', label: '🌟 Mini-Games', color: 'bg-gradient-to-r from-kid-primary to-kid-purple text-white' });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-[100dvh] flex flex-col pb-20 max-w-7xl mx-auto px-4"
    >
      {/* Hero Header */}
      <div className="relative glass-card p-6 md:p-8 mb-6 overflow-hidden flex-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-kid-yellow/20 to-kid-pink/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-kid-purple/10 to-kid-primary/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 flex flex-wrap items-center gap-4">
          <ClassBadge classId={selectedClass} size="lg" />
          <h1 className="text-3xl md:text-4xl font-fredoka font-bold gradient-text">
            {classData.label} Dashboard
          </h1>
          <span className="ml-auto text-xl font-semibold text-gray-700 flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full shadow-sm">
            👤 {selectedKid?.name}
          </span>
        </div>

        {/* Stats Row */}
        <div className="relative z-10 mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center shadow-sm">
            <p className="text-3xl font-bold text-kid-purple">{completedLessons}</p>
            <p className="text-sm text-gray-600 font-bold">Lessons Done</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center shadow-sm">
            <p className="text-3xl font-bold text-kid-yellow">⭐ {totalStars}</p>
            <p className="text-sm text-gray-600 font-bold">Stars Earned</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center shadow-sm">
            <p className="text-3xl font-bold text-kid-primary">{Math.round(overallProgress)}%</p>
            <p className="text-sm text-gray-600 font-bold">Overall Progress</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center shadow-sm">
            <p className="text-3xl font-bold text-kid-secondary">🏅 Lvl {selectedKid?.level || 1}</p>
            <p className="text-sm text-gray-600 font-bold">Current Level</p>
          </div>
        </div>

        {/* AI Voice Tutor CTA */}
        <div className="relative z-10 mt-6 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/ai-tutor')}
            className="bg-gradient-to-r from-kid-primary to-kid-purple text-white px-8 py-3 rounded-full font-bold text-xl shadow-lg flex items-center gap-3 border-4 border-white animate-bounce-slow"
          >
            <span className="text-3xl">🦉</span> Talk to Hootie the AI Tutor!
          </motion.button>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="w-full overflow-x-auto hide-scrollbar mb-8 flex-none py-2 px-2 -mx-2">
        <div className="flex gap-3 min-w-max">
          {availableTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 shadow-md whitespace-nowrap ${
                activeTab === tab.id 
                  ? `${tab.color} scale-105 ring-4 ring-offset-2 ring-kid-primary/30` 
                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:scale-105'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content Area */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {/* Learning Modules */}
            {activeTab === 'learning' && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                {classData.modules.map((module) => {
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
                })}
              </div>
            )}

            {/* Coloring Games */}
            {activeTab === 'coloring' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card p-6 text-center cursor-pointer hover:shadow-2xl transition border-4 border-kid-purple/30 bg-gradient-to-br from-white to-kid-purple/10"
                  onClick={() => navigate('/coloring')}
                >
                  <div className="text-6xl mb-4">🎨</div>
                  <h3 className="text-xl font-bold text-gray-800">Coloring Book</h3>
                  <p className="text-sm text-gray-600 mt-2">15 amazing pictures to color! Unleash your creativity.</p>
                  <div className="mt-4 inline-block bg-kid-primary text-white px-6 py-2 rounded-full text-lg font-bold shadow-md">
                    Start Coloring!
                  </div>
                </motion.div>
              </div>
            )}

            {/* Quizzes */}
            {activeTab === 'quizzes' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {quizzes.filter(q => !q.title.match(/\[(Memory|DragDrop|Puzzle|Rainbow|Letter|Shadow|Fishing|Story)\]/)).map((quiz) => (
                  <motion.div
                    key={quiz.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-card p-6 text-center cursor-pointer hover:shadow-2xl transition border-4 border-kid-yellow/30 bg-white/80"
                    onClick={() => navigate(`/quiz/${quiz.id}`)}
                  >
                    <div className="text-6xl mb-4">{quiz.image_url || '✨'}</div>
                    <h3 className="text-xl font-bold text-gray-800">{quiz.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{quiz.description}</p>
                    <div className="mt-4 inline-block bg-kid-purple text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                      Play Now!
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Memory Games */}
            {activeTab === 'memory' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {quizzes.filter(q => q.title.includes('[Memory]')).map((quiz) => (
                  <motion.div
                    key={quiz.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-card p-6 text-center cursor-pointer hover:shadow-2xl transition border-4 border-kid-secondary/30 bg-white/80"
                    onClick={() => navigate(`/memory/${quiz.id}`)}
                  >
                    <div className="text-6xl mb-4">{quiz.image_url || '🃏'}</div>
                    <h3 className="text-xl font-bold text-gray-800">{quiz.title.replace('[Memory] ', '')}</h3>
                    <p className="text-sm text-gray-600 mt-2">{quiz.description}</p>
                    <div className="mt-4 inline-block bg-kid-secondary text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                      Play Match!
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Drag & Drop */}
            {activeTab === 'dragdrop' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {quizzes.filter(q => q.title.includes('[DragDrop]')).map((quiz) => (
                  <motion.div
                    key={quiz.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-card p-6 text-center cursor-pointer hover:shadow-2xl transition border-4 border-kid-primary/30 bg-white/80"
                    onClick={() => navigate(`/dragdrop/${quiz.id}`)}
                  >
                    <div className="text-6xl mb-4">{quiz.image_url || '🖐️'}</div>
                    <h3 className="text-xl font-bold text-gray-800">{quiz.title.replace('[DragDrop] ', '')}</h3>
                    <p className="text-sm text-gray-600 mt-2">{quiz.description}</p>
                    <div className="mt-4 inline-block bg-kid-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                      Play!
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Puzzles */}
            {activeTab === 'puzzle' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {quizzes.filter(q => q.title.includes('[Puzzle]')).map((quiz) => (
                  <motion.div
                    key={quiz.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-card p-6 text-center cursor-pointer hover:shadow-2xl transition border-4 border-kid-pink/30 bg-white/80"
                    onClick={() => navigate(`/puzzle/${quiz.id}`)}
                  >
                    <div className="text-6xl mb-4 h-16 w-16 mx-auto rounded-md overflow-hidden shadow-sm">
                      <img src={quiz.image_url} alt="Puzzle Thumbnail" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{quiz.title.replace('[Puzzle] ', '')}</h3>
                    <p className="text-sm text-gray-600 mt-2">{quiz.description}</p>
                    <div className="mt-4 inline-block bg-kid-pink text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                      Solve Puzzle!
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Mini-Games */}
            {activeTab === 'minigames' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {quizzes.filter(q => q.title.match(/\[(Rainbow|Letter|Shadow|Fishing|Story)\]/)).map((quiz) => {
                  let path = '';
                  if (quiz.title.includes('[Rainbow]')) path = `/sorting/${quiz.id}`;
                  if (quiz.title.includes('[Letter]')) path = `/letter/${quiz.id}`;
                  if (quiz.title.includes('[Shadow]')) path = `/shadow/${quiz.id}`;
                  if (quiz.title.includes('[Fishing]')) path = `/fishing/${quiz.id}`;
                  if (quiz.title.includes('[Story]')) path = `/story/${quiz.id}`;

                  return (
                    <motion.div
                      key={quiz.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="glass-card p-6 text-center cursor-pointer hover:shadow-2xl transition border-4 border-kid-primary/30 bg-gradient-to-br from-white to-gray-50"
                      onClick={() => navigate(path)}
                    >
                      <div className="text-5xl mb-4 drop-shadow-md">{quiz.image_url}</div>
                      <h3 className="text-xl font-bold text-gray-800 whitespace-pre-wrap">{quiz.title.replace(/\[.*?\]\s*/, '')}</h3>
                      <p className="text-sm text-gray-600 mt-2 h-10 overflow-hidden">{quiz.description}</p>
                      <div className="mt-4 inline-block bg-kid-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                        Play Now!
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Mascot */}
      <Mascot className="fixed bottom-6 right-6 w-20 h-20 animate-bounce-slow z-50 pointer-events-none" />
      
      {/* Hide scrollbar styles */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.div>
  );
};

export default ClassDashboard;