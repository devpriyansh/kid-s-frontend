import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Avatar from '../common/Avatar';
import ProgressRing from '../common/ProgressRing';
import { getClass } from '../../data/curriculum';

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
    <motion.div whileHover={{ scale: 1.02 }} className="glass-card p-6 flex items-center gap-4">
      <Avatar emoji={kid.avatar} size="medium" />
      <div className="flex-1">
        <h3 className="text-xl font-fredoka font-bold">{kid.name}</h3>
        <p className="text-gray-600">Age: {kid.age || 'KG1'} • ⭐ {kid.stars} stars</p>
        <div className="flex items-center gap-2 mt-2">
          <ProgressRing progress={progress} />
          <span className="text-sm text-gray-500">Level {kid.level || 1}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ChildCard;