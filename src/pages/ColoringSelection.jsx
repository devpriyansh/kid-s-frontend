import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { coloringPages } from '../data/coloringPages';
import { useDashboard } from '../hooks/useKids';
import { useKid } from '../contexts/KidContext';
import { useAuth } from '../contexts/AuthContext';
import { CheckCircle2, Lock, ArrowLeft } from 'lucide-react';
import GuestUnlockModal from '../components/common/GuestUnlockModal';

const ColoringSelection = () => {
  const { data: dashboardData } = useDashboard();
  const { selectedKid } = useKid();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('easy');

  const playedColoringTitles = React.useMemo(() => {
    if (!dashboardData?.gameProgress) return new Set();
    const kidProgress = dashboardData.gameProgress.filter(g => String(g.child_id) === String(selectedKid?.id));
    // Filter coloring games that have been completed
    const played = kidProgress.filter(g => g.quiz?.title?.includes('[Coloring]')).map(g => g.quiz.title.replace('[Coloring] ', '').replace(' 🎨', '').trim());
    return new Set(played);
  }, [dashboardData, selectedKid]);

  const handlePageClick = (e, pageId) => {
    const isGuest = !selectedKid;
    const isLocked = isGuest && pageId > 2; // only first two are free for guests

    if (isLocked) {
      e.preventDefault();
      setModalOpen(true);
    }
  };

  return (
    <div className="h-full w-full bg-transparent relative overflow-hidden flex flex-col p-4 md:p-8">
      {/* Guest registration dialog */}
      <GuestUnlockModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        title="Unlock Coloring Book! 🖍️"
      />

      {/* Back Button */}
      <button
        onClick={() => navigate(selectedKid ? '/class-dashboard' : '/play')}
        className="absolute top-4 left-4 z-[60] bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] font-bold text-slate-600 flex items-center gap-2 border-2 border-slate-200 hover:bg-white transition-colors"
      >
        <ArrowLeft size={18} strokeWidth={2.5} />
        <span>Back</span>
      </button>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full max-w-7xl mx-auto z-10 pt-16 sm:pt-4 overflow-y-auto hide-scrollbar">
        <div className="text-center mb-6 relative z-10 flex flex-col items-center">
          <div className="glass-panel px-8 py-3 inline-block mb-3 border-white/60">
            <h1 className="text-4xl md:text-5xl font-baloo font-black gradient-text drop-shadow-sm">🖍️ Coloring Games!</h1>
          </div>
          <p className="text-lg md:text-xl text-slate-500 font-bold glass-panel inline-block px-6 py-2 border-white/60 font-nunito drop-shadow-sm">
            Choose a picture to color!
          </p>
        </div>
          
        {/* Tabs */}
        <div className="sticky top-4 z-40 flex justify-center mb-8 px-4">
          <div className="flex gap-2 sm:gap-4 p-1.5 sm:p-2 glass-panel bg-white/70 backdrop-blur-lg border-white/80 rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.05)]">
            <button
              onClick={() => setActiveTab('easy')}
              className={`relative px-4 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-bold font-baloo transition-colors z-10 ${
                activeTab === 'easy' ? 'text-white' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {activeTab === 'easy' && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-kid-primary rounded-full shadow-md z-[-1]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              Easy
            </button>
            <button
              onClick={() => setActiveTab('portrait')}
              className={`relative px-4 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-bold font-baloo transition-colors z-10 ${
                activeTab === 'portrait' ? 'text-white' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {activeTab === 'portrait' && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-kid-purple rounded-full shadow-md z-[-1]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              Portrait
            </button>
            <button
              onClick={() => setActiveTab('learning')}
              className={`relative px-4 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-bold font-baloo transition-colors z-10 ${
                activeTab === 'learning' ? 'text-white' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {activeTab === 'learning' && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-kid-green rounded-full shadow-md z-[-1]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              Learning
            </button>
          </div>
        </div>

        <div className="px-4 pb-12">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8"
          >
            {coloringPages.filter(page => page.category === activeTab).map((page) => {
              const isGuest = !selectedKid;
              const isLocked = isGuest && page.id > 2;
              
              return (
                <Link 
                  to={`/coloring/${page.id}`} 
                  key={page.id}
                  onClick={(e) => handlePageClick(e, page.id)}
                >
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }} 
                    whileTap={{ scale: 0.95 }}
                    className={`glass-panel p-6 cursor-pointer text-center border-white/60 hover:border-white transition-all duration-300 relative ${isLocked ? 'opacity-85' : ''}`}
                  >
                    {isLocked && (
                      <div className="absolute top-3 right-3 z-30 bg-slate-400 text-white p-1.5 rounded-full shadow-md">
                        <Lock size={18} strokeWidth={2.5} />
                      </div>
                    )}
                    {!isLocked && playedColoringTitles.has(page.title) && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-3 right-3 z-30 bg-kid-green text-white p-1 rounded-full shadow-md"
                      >
                        <CheckCircle2 size={24} strokeWidth={3} />
                      </motion.div>
                    )}
                    <div 
                      className={`w-full aspect-square bg-white/60 rounded-2xl p-4 shadow-[inset_0_4px_12px_rgba(0,0,0,0.05)] border-[3px] border-white/80 mb-6 pointer-events-none ${isLocked ? 'blur-[1px]' : ''}`}
                      dangerouslySetInnerHTML={{ __html: page.referenceSvgContent }} 
                    />
                    <h3 className="text-2xl font-black font-baloo text-kid-primary-dark drop-shadow-sm">{page.title}</h3>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ColoringSelection;
