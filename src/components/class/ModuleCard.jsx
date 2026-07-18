import React from 'react';
import { motion } from 'framer-motion';
import ProgressRing from '../common/ProgressRing';

const getTailwindGradient = (colorName) => {
  switch (colorName) {
    case 'kid-primary': return 'from-blue-400 via-sky-400 to-indigo-500';
    case 'kid-secondary': return 'from-cyan-400 via-teal-400 to-emerald-500';
    case 'kid-yellow': return 'from-amber-400 via-yellow-400 to-orange-500';
    case 'kid-purple': return 'from-fuchsia-400 via-purple-400 to-pink-500';
    case 'kid-green': return 'from-emerald-400 via-green-400 to-teal-500';
    case 'kid-pink': return 'from-pink-400 via-rose-400 to-red-400';
    default: return 'from-blue-400 via-indigo-400 to-purple-500';
  }
};

const ModuleCard = ({ module, progress, onSelect }) => {
  const { title, icon, color } = module;
  const { completed, total, stars, locked = false } = progress;
  const percent = total > 0 ? (completed / total) * 100 : 0;
  const hasLessons = total > 0;

  return (
    <motion.div
      onClick={!locked && hasLessons ? onSelect : undefined}
      className={`glass-card-premium bg-gradient-to-br ${getTailwindGradient(color)} group text-center aspect-[4/5] ${
        locked || !hasLessons ? 'opacity-50 grayscale cursor-not-allowed' : ''
      }`}
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      
      {/* Floating Blobs */}
      <div className="absolute top-[-20%] right-[-20%] w-32 h-32 rounded-full bg-white/20 blur-xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

      {locked && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-30">
          <span className="text-5xl">🔒</span>
        </div>
      )}
      {!hasLessons && !locked && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm z-30">
          <span className="text-xl text-white font-black bg-slate-900/50 px-4 py-2 rounded-full border border-white/20">Coming Soon</span>
        </div>
      )}

      <div className="flex-1 flex flex-col items-center justify-center relative z-10 p-2">
        <motion.div 
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-[4rem] sm:text-[6rem] drop-shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 leading-none mb-2"
        >
          {icon}
        </motion.div>
        <h3 className="font-baloo font-black text-xl md:text-2xl text-white drop-shadow-md leading-tight">{title}</h3>
      </div>
      
      <div className="flex justify-center my-2 relative z-10">
        <div className="bg-white/90 rounded-full p-1 shadow-inner inline-block">
          <ProgressRing progress={percent} size={60} />
        </div>
      </div>
      
      <div className="flex justify-between items-center text-xs font-black text-white px-1 mt-auto relative z-10 drop-shadow-sm">
        <span className="bg-white/20 backdrop-blur-md border border-white/40 px-2 py-1 rounded-lg">{completed}/{total}</span>
        <span className="bg-white/20 backdrop-blur-md border border-white/40 px-2 py-1 rounded-lg">⭐ {stars}</span>
      </div>

      {!locked && hasLessons && (
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
          <div className="bg-white text-kid-primary-dark rounded-full px-5 py-2 font-black text-sm shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            ▶️ START
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ModuleCard;