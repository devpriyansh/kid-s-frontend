import React from 'react';
import { CLASSES } from '../../data/curriculum';  // named export

const ClassBadge = ({ classId, size = 'md' }) => {
  const cls = CLASSES[classId];
  if (!cls) return null;

  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-xl',
  };

  return (
    <span
      className={`${sizeClasses[size]} bg-gradient-to-r ${cls.color} text-white rounded-full font-bold shadow-md flex items-center gap-2`}
    >
      {cls.icon} {cls.label}
    </span>
  );
};

export default ClassBadge;   // ← default export