import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ConfettiEffect from '../common/ConfettiEffect';

const SplashColor = ({ target, onComplete }) => {
  const [taps, setTaps] = useState(0);
  const [splashes, setSplashes] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const maxTaps = 3;

  const handleTap = (e) => {
    if (taps >= maxTaps) return;

    // Get click position relative to the container
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const colors = ['text-red-400', 'text-blue-400', 'text-yellow-400', 'text-green-400', 'text-purple-400'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    setSplashes([...splashes, { id: taps, x, y, color: randomColor }]);
    
    const newTaps = taps + 1;
    setTaps(newTaps);

    if (newTaps >= maxTaps) {
      setShowConfetti(true);
      setTimeout(() => {
        onComplete();
      }, 2000);
    }
  };

  // Calculate grayscale based on taps
  const grayscale = 100 - (taps * (100 / maxTaps));

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto space-y-12">
      {showConfetti && <ConfettiEffect />}
      
      <div className="glass-panel px-8 py-4 border-white/60">
        <h2 className="text-3xl sm:text-5xl font-baloo font-black text-kid-primary-dark drop-shadow-sm text-center">
          Tap to color the <span className="text-kid-purple">{target}</span>!
        </h2>
      </div>

      <div 
        className="relative cursor-pointer glass-panel p-10 sm:p-16 border-[6px] border-white/60 bg-white/80 overflow-hidden shadow-2xl select-none touch-none"
        onClick={handleTap}
      >
        {/* The Target (Letter or Emoji) */}
        <motion.div 
          className="text-[12rem] sm:text-[18rem] font-black font-baloo leading-none drop-shadow-xl select-none"
          style={{ filter: `grayscale(${grayscale}%) opacity(${taps === 0 ? 0.3 : 0.5 + (taps * 0.15)})` }}
          animate={taps > 0 ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          {target}
        </motion.div>

        {/* Paint Splashes */}
        {splashes.map(splash => (
          <motion.div
            key={splash.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 1], opacity: 1 }}
            className={`absolute text-6xl sm:text-8xl ${splash.color} pointer-events-none drop-shadow-md`}
            style={{ left: splash.x - 40, top: splash.y - 40 }}
          >
            🎨
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SplashColor;
