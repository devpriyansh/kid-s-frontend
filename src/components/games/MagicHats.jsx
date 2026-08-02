import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ConfettiEffect from '../common/ConfettiEffect';

const MagicHats = ({ target, onComplete }) => {
  const [hats, setHats] = useState([]);
  const [revealed, setRevealed] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    // 3 hats, 1 has the target, others have a puff of smoke
    const initialHats = [
      { id: 1, content: target, isTarget: true },
      { id: 2, content: '💨', isTarget: false },
      { id: 3, content: '💨', isTarget: false },
    ];
    setHats(initialHats.sort(() => Math.random() - 0.5));
  }, [target]);

  const handleHatClick = (index) => {
    if (isLocked || revealed.includes(index)) return;

    setRevealed([...revealed, index]);

    if (hats[index].isTarget) {
      setIsLocked(true);
      setShowConfetti(true);
      setTimeout(() => {
        onComplete();
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto space-y-12">
      {showConfetti && <ConfettiEffect />}
      
      <div className="glass-panel px-8 py-4 border-white/60">
        <h2 className="text-3xl sm:text-5xl font-baloo font-black text-kid-primary-dark drop-shadow-sm text-center">
          Find the <span className="text-kid-purple">{target}</span>!
        </h2>
      </div>

      <div className="flex gap-4 sm:gap-12 justify-center w-full px-4">
        {hats.map((hat, idx) => {
          const isRevealed = revealed.includes(idx);
          
          return (
            <div key={hat.id} className="relative cursor-pointer" onClick={() => handleHatClick(idx)}>
              {/* The content hiding under the hat */}
              <div className="absolute inset-0 flex items-center justify-center text-[4rem] sm:text-[6rem] mt-8 z-0">
                {isRevealed && <span>{hat.content}</span>}
              </div>

              {/* The Hat */}
              <motion.div
                className="text-[6rem] sm:text-[10rem] drop-shadow-2xl relative z-10"
                animate={isRevealed ? { y: -150, opacity: 0 } : { y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                whileHover={!isRevealed ? { scale: 1.1, rotate: [-5, 5, -5, 0] } : {}}
              >
                🎩
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MagicHats;
