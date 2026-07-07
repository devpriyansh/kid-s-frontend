import React from 'react';

const ProgressRing = ({ progress = 0, size = 100 }) => {
  const radius = size * 0.4;          // 40% of size
  const circumference = 2 * Math.PI * radius;
  const stroke = (progress / 100) * circumference;
  const center = size / 2;
  const fontSize = size * 0.2;

  return (
    <svg width={size} height={size} className="inline-block">
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="transparent"
        stroke="#e2e8f0"
        strokeWidth={size * 0.08}
      />
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="transparent"
        stroke="#a78bfa"
        strokeWidth={size * 0.08}
        strokeDasharray={circumference}
        strokeDashoffset={circumference - stroke}
        strokeLinecap="round"
        transform={`rotate(-90 ${center} ${center})`}
      />
      <text
        x={center}
        y={center + fontSize * 0.35}
        textAnchor="middle"
        fontSize={fontSize}
        fontWeight="bold"
        fill="#4a5568"
      >
        {Math.round(progress)}%
      </text>
    </svg>
  );
};

export default ProgressRing;