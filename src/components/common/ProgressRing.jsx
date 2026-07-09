import React from 'react';

const ProgressRing = ({ progress = 0, size = 100 }) => {
  const radius = size * 0.4;          // 40% of size
  const circumference = 2 * Math.PI * radius;
  const stroke = (progress / 100) * circumference;
  const center = size / 2;
  const fontSize = size * 0.2;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90 drop-shadow-sm">
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#F1F5F9"
          strokeWidth={size * 0.12}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#38BDF8"
          strokeWidth={size * 0.12}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - stroke}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <span 
        className="absolute font-black text-kid-text drop-shadow-sm"
        style={{ fontSize: fontSize }}
      >
        {Math.round(progress)}%
      </span>
    </div>
  );
};

export default ProgressRing;