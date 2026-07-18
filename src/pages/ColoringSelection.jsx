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

  const playedColoringTitles = React.useMemo(() => {
    if (!dashboardData?.gameProgress) return new Set();
    const kidProgress = dashboardData.gameProgress.filter(g => String(g.child_id) === String(selectedKid?.id));
    // Filter coloring games that have been completed
    const played = kidProgress.filter(g => g.quiz?.title?.includes('[Coloring]')).map(g => g.quiz.title.replace('[Coloring] ', '').replace(' 🎨', '').trim());
    return new Set(played);
  }, [dashboardData, selectedKid]);

  const handlePageClick = (e, index) => {
    const isGuest = !selectedKid;
    const isLocked = isGuest && index >= 2; // only first two are free for guests

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

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full flex flex-col max-w-7xl mx-auto z-10 pt-10 sm:pt-0">
        <div className="flex-none text-center mb-10 relative z-10 flex flex-col items-center">
          <div className="glass-panel px-10 py-4 inline-block mb-4 border-white/60">
            <h1 className="text-5xl md:text-6xl font-baloo font-black gradient-text drop-shadow-sm">🖍️ Coloring Games!</h1>
          </div>
          <p className="text-2xl text-slate-500 font-bold glass-panel inline-block px-8 py-3 border-white/60 font-nunito drop-shadow-sm">
            Choose a picture to color!
          </p>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto hide-scrollbar px-4 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
            {coloringPages.map((page, index) => {
              const isGuest = !selectedKid;
              const isLocked = isGuest && index >= 2;
              
              return (
                <Link 
                  to={`/coloring/${page.id}`} 
                  key={page.id}
                  onClick={(e) => handlePageClick(e, index)}
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
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ColoringSelection;
