import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ConfettiEffect from '../common/ConfettiEffect';

const FindTheLetter = ({ targetLetter, targetLower, grid, onComplete }) => {
  const [foundIndices, setFoundIndices] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [wrongIndices, setWrongIndices] = useState([]);

  const totalTargets = grid.filter(l => l === targetLetter || l === targetLower).length;

  useEffect(() => {
    if (foundIndices.length === totalTargets && totalTargets > 0) {
      setShowConfetti(true);
      setTimeout(() => {
        onComplete();
      }, 1500);
    }
  }, [foundIndices, totalTargets, onComplete]);

  const handleSelect = (letter, idx) => {
    if (foundIndices.includes(idx)) return; // Already found

    if (letter === targetLetter || letter === targetLower) {
      setFoundIndices(prev => [...prev, idx]);
    } else {
      setWrongIndices(prev => [...prev, idx]);
      setTimeout(() => {
        setWrongIndices(prev => prev.filter(i => i !== idx));
      }, 800);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto space-y-6 sm:space-y-10">
      {showConfetti && <ConfettiEffect />}
      
      <div className="glass-panel px-6 py-4 border-white/60 text-center">
        <h2 className="text-3xl sm:text-5xl font-baloo font-black text-kid-primary-dark drop-shadow-sm">
          Find all <span className="text-kid-primary">{targetLetter}</span> and <span className="text-kid-primary">{targetLower}</span>
        </h2>
        <div className="text-lg sm:text-2xl font-bold text-slate-500 mt-2">
          Found: {foundIndices.length} / {totalTargets}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-lg px-2">
        {grid.map((letter, idx) => {
          const isFound = foundIndices.includes(idx);
          const isWrong = wrongIndices.includes(idx);

          return (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSelect(letter, idx)}
              className={`glass-panel aspect-square flex items-center justify-center text-[4rem] sm:text-[6rem] font-baloo font-black transition-all border-[4px] ${
                isFound
                  ? 'border-green-400 bg-green-100 text-green-600 shadow-[inset_0_0_20px_rgba(74,222,128,0.3)]'
                  : isWrong
                  ? 'border-red-400 bg-red-50 text-red-400 opacity-80'
                  : 'border-white/60 text-slate-700 hover:shadow-xl hover:border-kid-primary/40'
              }`}
            >
              {letter}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default FindTheLetter;
