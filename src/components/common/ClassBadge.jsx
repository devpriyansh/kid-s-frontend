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
      className={`${sizeClasses[size]} bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-black shadow-[0_4px_0_0_rgba(226,232,240,1)] flex items-center gap-2 select-none`}
    >
      <span className="drop-shadow-sm">{cls.icon}</span> 
      <span>{cls.label}</span>
    </span>
  );
};

export default ClassBadge;   // ← default export