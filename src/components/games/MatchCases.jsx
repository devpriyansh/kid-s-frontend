import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ConfettiEffect from '../common/ConfettiEffect';

const MatchCases = ({ upper, lower, options, onComplete }) => {
  const [selected, setSelected] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSelect = (opt, idx) => {
    setSelected(idx);
    
    if (opt === lower) {
      setShowConfetti(true);
      setTimeout(() => {
        onComplete();
      }, 1500);
    } else {
      setTimeout(() => setSelected(null), 1000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto space-y-8 sm:space-y-12">
      {showConfetti && <ConfettiEffect />}
      
      <div className="glass-panel px-8 py-4 border-white/60">
        <h2 className="text-3xl sm:text-5xl font-baloo font-black text-kid-primary-dark drop-shadow-sm text-center">
          Match the letters!
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 w-full justify-center px-4">
        {/* Upper Case (Target) */}
        <div className="glass-panel p-10 sm:p-16 border-[6px] border-kid-primary/60 bg-white/80 shadow-2xl animate-bounce-slow">
          <div className="text-[8rem] sm:text-[10rem] font-baloo font-black text-kid-primary leading-none drop-shadow-md">
            {upper}
          </div>
        </div>

        {/* Lower Case Options */}
        <div className="flex flex-row md:flex-col gap-4 sm:gap-6 flex-wrap justify-center">
          {options.map((opt, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.1, x: 10 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSelect(opt, idx)}
              className={`glass-panel w-24 h-24 sm:w-32 sm:h-32 flex flex-col items-center justify-center cursor-pointer transition-all border-[4px] ${
                selected === idx
                  ? opt === lower
                    ? 'border-green-400 bg-green-50 text-green-600' // Correct
                    : 'border-red-400 bg-red-50 opacity-50 text-red-500' // Wrong
                  : 'border-white/60 hover:shadow-xl hover:border-kid-secondary text-slate-700'
              }`}
            >
              <span className="text-[4rem] sm:text-[6rem] font-baloo font-black leading-none drop-shadow-sm">{opt}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchCases;
