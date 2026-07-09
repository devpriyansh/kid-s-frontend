import React from 'react';

const Avatar = ({ emoji, size = 'medium' }) => {
  const sizes = {
    small: 'text-4xl',
    medium: 'text-6xl',
    large: 'text-8xl',
  };
  return (
    <div className={`${sizes[size]} bg-white border-4 border-slate-200 rounded-3xl p-3 inline-flex items-center justify-center shadow-[0_6px_0_0_rgba(226,232,240,1)] relative rotate-3 hover:rotate-0 hover:translate-y-[2px] transition-all duration-200`}>
      <div className="absolute inset-0 bg-kid-primary/10 rounded-2xl m-1"></div>
      <span className="relative z-10 drop-shadow-md">{emoji}</span>
    </div>
  );
};

export default Avatar;