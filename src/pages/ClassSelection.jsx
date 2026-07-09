import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useClass } from '../contexts/ClassContext';
import { CLASSES } from '../data/curriculum';
import ProgressRing from '../components/common/ProgressRing';
import Mascot from '../components/common/Mascot';
import { GraduationCap, PlayCircle, Star } from 'lucide-react';

const ClassSelection = () => {
  const navigate = useNavigate();
  const { setSelectedClass } = useClass();

  // For demo progress, we can compute from localStorage or keep static
  const getProgress = (classId) => {
    // In real app, fetch from localStorage per kid
    return { completed: 18, total: 120, stars: 40, level: 2 };
  };

  const handleSelect = (classId) => {
    setSelectedClass(classId);
    navigate('/class-dashboard');
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-full flex flex-col hide-scrollbar">
      <div className="flex-none mb-6 mt-4 text-center">
        <h1 className="text-3xl md:text-4xl font-fredoka font-black text-kid-primary-dark flex items-center gap-2 justify-center drop-shadow-sm">
          <GraduationCap size={36} className="text-kid-primary" strokeWidth={2.5} /> Choose Your Class!
        </h1>
        <p className="text-slate-500 font-bold mt-2 text-base">Select a level to start your learning adventure.</p>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar w-full px-4 sm:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-5xl mx-auto place-items-center pt-2 sm:pt-6">
          {Object.values(CLASSES).map((cls) => {
            const progress = getProgress(cls.id);
            return (
              <motion.div
                key={cls.id}
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.95 }}
                className="w-full max-w-[280px] glass-card p-5 flex flex-col items-center text-center cursor-pointer border-[3px] border-white transition-all duration-300 relative group overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.15)]"
                onClick={() => handleSelect(cls.id)}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${cls.color} opacity-[0.08] group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <div className="text-[5rem] mt-2 drop-shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 z-10 leading-none">
                  {cls.icon}
                </div>
                
                <h2 className="text-3xl font-fredoka font-black text-kid-text mt-5 z-10 drop-shadow-sm">
                  {cls.label}
                </h2>
                <span className="bg-white/90 backdrop-blur-sm text-slate-500 font-bold px-4 py-1 rounded-full text-sm mt-1.5 mb-6 z-10 border border-white shadow-sm">
                  Ages {cls.age}
                </span>

                <div className="flex items-center justify-center gap-4 bg-white/60 p-3 sm:p-4 rounded-[1.5rem] border border-white shadow-inner w-full z-10 mb-6 group-hover:-translate-y-1 transition-transform duration-300">
                  <ProgressRing progress={(progress.completed / progress.total) * 100} size={50} />
                  <div className="text-left space-y-0.5">
                    <p className="font-black text-kid-text text-sm">{progress.completed} / {progress.total} Lessons</p>
                    <div className="flex gap-2">
                      <p className="font-bold text-kid-yellow-dark text-xs flex items-center gap-1"><Star size={12} className="fill-kid-yellow-dark"/> {progress.stars}</p>
                      <p className="font-bold text-slate-400 text-xs">Lvl {progress.level}</p>
                    </div>
                  </div>
                </div>
                
                <div className="w-full z-10">
                  <button className="btn-chunky w-full bg-gradient-to-b from-kid-green to-kid-green-dark shadow-[0_8px_16px_rgba(110,231,183,0.3),inset_0_4px_8px_rgba(255,255,255,0.4)] text-xl py-3 border-2 border-white/40">
                    <PlayCircle size={28} strokeWidth={3} />
                    {progress.completed > 0 ? 'Continue' : 'Start'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <Mascot className="fixed bottom-6 right-6 w-24 h-24 animate-bounce-slow pointer-events-none drop-shadow-2xl z-50" />
    </motion.div>
  );
};

export default ClassSelection;