import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ConfettiEffect from '../common/ConfettiEffect';

const MemoryMatch = ({ upper, lower, word, image, onComplete }) => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    // Pairs: upper matches lower, word matches image
    const initialCards = [
      { id: 1, content: upper, matchId: 'letter' },
      { id: 2, content: lower, matchId: 'letter' },
      { id: 3, content: word, matchId: 'word' },
      { id: 4, content: image, matchId: 'word' },
    ];
    // Shuffle
    setCards(initialCards.sort(() => Math.random() - 0.5));
  }, [upper, lower, word, image]);

  const handleCardClick = (index) => {
    if (isLocked) return;
    if (flipped.includes(index) || matched.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setIsLocked(true);
      const matchId1 = cards[newFlipped[0]].matchId;
      const matchId2 = cards[newFlipped[1]].matchId;

      if (matchId1 === matchId2) {
        setMatched([...matched, ...newFlipped]);
        setFlipped([]);
        setIsLocked(false);
        
        if (matched.length + 2 === cards.length) {
          setShowConfetti(true);
          setTimeout(() => {
            onComplete();
          }, 2000);
        }
      } else {
        setTimeout(() => {
          setFlipped([]);
          setIsLocked(false);
        }, 1000);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto space-y-8">
      {showConfetti && <ConfettiEffect />}
      
      <div className="glass-panel px-8 py-4 border-white/60">
        <h2 className="text-3xl sm:text-5xl font-baloo font-black text-kid-primary-dark drop-shadow-sm text-center">
          Memory Match!
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-8 w-full max-w-lg px-4">
        {cards.map((card, idx) => {
          const isFlipped = flipped.includes(idx) || matched.includes(idx);
          const isMatched = matched.includes(idx);

          return (
            <div 
              key={card.id}
              className="relative w-full aspect-square"
              onClick={() => handleCardClick(idx)}
            >
              <motion.div
                className="w-full h-full preserve-3d cursor-pointer"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                {/* Front (Hidden) */}
                <div className="absolute inset-0 backface-hidden glass-panel border-[4px] border-white/60 bg-gradient-to-br from-kid-primary to-kid-purple flex items-center justify-center hover:shadow-xl transition-shadow">
                  <span className="text-[4rem] sm:text-[6rem] text-white/50 font-black">?</span>
                </div>
                
                {/* Back (Revealed) */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 glass-panel border-[4px] border-white/60 flex items-center justify-center bg-white shadow-xl overflow-hidden p-2">
                  <div className={`absolute inset-0 ${isMatched ? 'bg-green-100/50' : 'bg-transparent'} transition-colors`} />
                  <span className={`text-[3rem] sm:text-[5rem] font-baloo font-black leading-tight text-center break-words w-full z-10 ${isMatched ? 'text-green-600' : 'text-slate-700'}`}>
                    {card.content}
                  </span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default MemoryMatch;
