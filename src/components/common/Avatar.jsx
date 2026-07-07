import React from 'react';

const Avatar = ({ emoji, size = 'medium' }) => {
  const sizes = {
    small: 'text-4xl',
    medium: 'text-6xl',
    large: 'text-8xl',
  };
  return <div className={`${sizes[size]} bg-kid-purple/10 rounded-full p-2 inline-block`}>{emoji}</div>;
};

export default Avatar;