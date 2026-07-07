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
      whileHover={{ scale: hasLessons ? 1.05 : 1 }}
      whileTap={{ scale: hasLessons ? 0.95 : 1 }}
      className={`relative glass-card p-4 text-center cursor-pointer transition-all duration-200 hover:shadow-2xl ${
        locked || !hasLessons ? 'opacity-50 grayscale' : ''
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
      <div className="text-5xl md:text-6xl mb-1">{icon}</div>
      <h3 className="font-fredoka font-bold text-base md:text-lg text-gray-800">{title}</h3>
      
      <div className="flex justify-center my-3">
        <ProgressRing progress={percent} size={70} />
      </div>
      
      <div className="flex justify-between items-center text-sm text-gray-600 px-1">
        <span>{completed}/{total}</span>
        <span>⭐ {stars}</span>
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