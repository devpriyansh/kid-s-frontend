import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ConfettiEffect from '../common/ConfettiEffect';

const Mole = ({ letter, isTarget, onWhack }) => {
  return (
    <motion.div
      initial={{ y: 150 }}
      animate={{ y: 0 }}
      exit={{ y: 150 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      onClick={() => onWhack(isTarget)}
      className="absolute bottom-0 w-full flex flex-col items-center justify-end cursor-pointer touch-manipulation"
    >
      <div className="bg-white px-4 py-2 rounded-xl shadow-md border-2 border-slate-200 mb-[-10px] z-10 relative">
        <span className="text-4xl sm:text-6xl font-baloo font-black text-kid-primary">{letter}</span>
      </div>
      <div className="text-[5rem] sm:text-[7rem] leading-none drop-shadow-lg">
        🐹
      </div>
    </motion.div>
  );
};

const WhackALetter = ({ targetLetter, options, onComplete }) => {
  const [activeHoles, setActiveHoles] = useState({});
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const targetScore = 5; // Whack 5 times to win

  useEffect(() => {
    if (score >= targetScore) {
      setShowConfetti(true);
      setTimeout(() => {
        onComplete();
      }, 2000);
      return;
    }

    // Interval to pop moles
    const interval = setInterval(() => {
      // Pick 1 or 2 random holes (0 to 5)
      const numMoles = Math.random() > 0.7 ? 2 : 1;
      const newActive = {};
      
      for (let i = 0; i < numMoles; i++) {
        const holeIdx = Math.floor(Math.random() * 6);
        // Ensure at least one target appears frequently
        const isTarget = Math.random() > 0.5;
        const letter = isTarget ? targetLetter : options[Math.floor(Math.random() * options.length)];
        
        newActive[holeIdx] = { letter, isTarget };
      }
      
      setActiveHoles(newActive);

      // Hide them after a longer delay for preschoolers
      setTimeout(() => {
        setActiveHoles(prev => {
          const next = { ...prev };
          Object.keys(newActive).forEach(k => delete next[k]);
          return next;
        });
      }, 2500); // Moles stay up for 2.5s

    }, 3500); // Moles pop every 3.5s

    return () => clearInterval(interval);
  }, [score, targetLetter, options, onComplete]);

  const handleWhack = (isTarget) => {
    if (isTarget) {
      setScore(prev => prev + 1);
    }
    // Clicking wrong mole does nothing or removes a point (let's keep it simple and just do nothing for preschoolers)
    
    // Hide all moles immediately when whacked
    setActiveHoles({});
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto space-y-8">
      {showConfetti && <ConfettiEffect />}
      
      <div className="glass-panel px-8 py-4 border-white/60 flex items-center justify-between w-full max-w-md">
        <h2 className="text-2xl sm:text-4xl font-baloo font-black text-kid-primary-dark drop-shadow-sm">
          Whack the <span className="text-kid-purple">{targetLetter}</span>!
        </h2>
        <div className="text-2xl sm:text-4xl font-black font-baloo text-kid-green">
          {score}/{targetScore}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-2xl px-4 mt-8">
        {[0, 1, 2, 3, 4, 5].map(holeIdx => (
          <div key={holeIdx} className="relative w-full aspect-square flex flex-col justify-end items-center overflow-hidden">
            {/* The Hole */}
            <div className="w-[80%] h-[30%] bg-black/20 rounded-[100%] absolute bottom-2 z-0 shadow-inner"></div>
            
            {/* The Mole */}
            <AnimatePresence>
              {activeHoles[holeIdx] && (
                <Mole 
                  key="mole"
                  letter={activeHoles[holeIdx].letter} 
                  isTarget={activeHoles[holeIdx].isTarget}
                  onWhack={handleWhack}
                />
              )}
            </AnimatePresence>
            
            {/* Grass overlay to cover the bottom of the mole */}
            <div className="w-[110%] h-[40%] bg-kid-green rounded-t-[50%] absolute -bottom-4 z-20 shadow-[inset_0_4px_10px_rgba(255,255,255,0.2)]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhackALetter;
