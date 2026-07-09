import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Avatar from '../common/Avatar';
import ProgressRing from '../common/ProgressRing';
import { getClass } from '../../data/curriculum';
import { Star, GraduationCap } from 'lucide-react';

const ChildCard = ({ kid }) => {
  const progress = useMemo(() => {
    if (!kid.id || !kid.age) return 0;
    const classData = getClass(kid.age);
    if (!classData) return 0;

    const totalLessons = classData.modules.reduce((sum, mod) => sum + (mod.lessons?.length || 0), 0);
    if (totalLessons === 0) return 0;

    const key = `progress_${kid.id}_${kid.age}`;
    const stored = localStorage.getItem(key);
    const progressData = stored ? JSON.parse(stored) : {};

    let completedLessons = 0;
    classData.modules.forEach(mod => {
      const modProg = progressData[mod.id];
      if (modProg && Array.isArray(modProg.completed)) {
        completedLessons += modProg.completed.length;
      }
    });

    return (completedLessons / totalLessons) * 100;
  }, [kid]);

  return (
    <motion.div whileHover={{ scale: 1.02, y: -2 }} className="glass-card p-6 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left relative overflow-hidden group border border-white/60 bg-white/40 backdrop-blur-md">
      <div className="absolute top-0 right-0 w-32 h-32 bg-kid-primary/20 rounded-full blur-3xl group-hover:bg-kid-primary/30 transition-colors pointer-events-none"></div>
      
      <div className="relative z-10 p-2 bg-white/60 rounded-[2rem] shadow-inner border border-white/80">
        <Avatar emoji={kid.avatar} size="medium" />
      </div>
      
      <div className="flex-1 relative z-10 space-y-2">
        <h3 className="text-2xl font-baloo font-black text-kid-text drop-shadow-sm">{kid.name}</h3>
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
          <span className="font-bold text-kid-primary-dark bg-kid-primary/20 px-3 py-1 rounded-xl text-sm flex items-center gap-1 border border-white/40 shadow-sm">
            <GraduationCap size={16} /> {kid.age?.toUpperCase() || 'KG1'}
          </span>
          <span className="font-bold text-kid-yellow-dark bg-kid-yellow/30 px-3 py-1 rounded-xl text-sm flex items-center gap-1 border border-white/40 shadow-sm">
            <Star size={16} className="fill-kid-yellow-dark" /> {kid.stars} stars
          </span>
        </div>
        <div className="flex items-center justify-center sm:justify-start gap-3 mt-4 pt-3 border-t border-white/40">
          <ProgressRing progress={progress} size={60} />
          <span className="font-baloo font-bold text-lg text-slate-500">Level {kid.level || 1}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ChildCard;