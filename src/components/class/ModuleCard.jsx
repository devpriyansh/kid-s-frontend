import React from 'react';
import { motion } from 'framer-motion';
import ProgressRing from '../common/ProgressRing';

const ModuleCard = ({ module, progress, onSelect }) => {
  const { title, icon, color } = module;
  const { completed, total, stars, locked = false } = progress;
  const percent = total > 0 ? (completed / total) * 100 : 0;
  const hasLessons = total > 0;

  return (
    <motion.div
      whileHover={{ scale: hasLessons ? 1.05 : 1, y: hasLessons ? -5 : 0 }}
      whileTap={{ scale: hasLessons ? 0.95 : 1 }}
      className={`relative glass-card p-5 text-center cursor-pointer transition-all duration-300 ${
        locked || !hasLessons ? 'opacity-50 grayscale' : 'hover:shadow-[0_12px_40px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.9)]'
      }`}
      onClick={!locked && hasLessons ? onSelect : undefined}
    >
      {locked && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-3xl backdrop-blur-sm">
          <span className="text-4xl">🔒</span>
        </div>
      )}
      {!hasLessons && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-3xl backdrop-blur-sm">
          <span className="text-2xl text-gray-500">Coming Soon</span>
        </div>
      )}
      <div className="text-5xl md:text-6xl mb-3 drop-shadow-md bg-white/60 p-4 rounded-[2rem] shadow-inner border border-white inline-block mx-auto">{icon}</div>
      <h3 className="font-baloo font-black text-xl md:text-2xl text-kid-text drop-shadow-sm leading-tight">{title}</h3>
      
      <div className="flex justify-center my-4">
        <ProgressRing progress={percent} size={70} />
      </div>
      
      <div className="flex justify-between items-center text-sm font-bold text-slate-500 px-1">
        <span className="bg-white/60 px-2 py-1 rounded-lg">{completed}/{total}</span>
        <span className="bg-kid-yellow/20 text-kid-yellow-dark px-2 py-1 rounded-lg border border-kid-yellow/40">⭐ {stars}</span>
      </div>
      
      {!locked && hasLessons && (
        <motion.div
          className="mt-3 text-xs font-semibold text-kid-purple"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Tap to start →
        </motion.div>
      )}
    </motion.div>
  );
};

export default ModuleCard;