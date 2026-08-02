import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ConfettiEffect from '../common/ConfettiEffect';

const DragItem = ({ item, isTarget, basketRef, onMatch }) => {
  const controls = useAnimation();
  const [isMatched, setIsMatched] = useState(false);

  const handleDragEnd = (event, info) => {
    if (!basketRef.current) return;
    
    const basketRect = basketRef.current.getBoundingClientRect();
    const itemX = info.point.x;
    const itemY = info.point.y;

    // Check if the item's point is inside the basket bounds
    const isInsideBasket = 
      itemX > basketRect.left &&
      itemX < basketRect.right &&
      itemY > basketRect.top &&
      itemY < basketRect.bottom;

    if (isInsideBasket) {
      if (isTarget) {
        setIsMatched(true);
        onMatch();
      } else {
        // Bounce back if wrong item
        controls.start({ x: 0, y: 0, transition: { type: 'spring' } });
      }
    } else {
      // Snap back if dropped outside
      controls.start({ x: 0, y: 0, transition: { type: 'spring' } });
    }
  };

  if (isMatched) return null;

  return (
    <motion.div
      drag
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      animate={controls}
      whileDrag={{ scale: 1.2, zIndex: 50 }}
      className="text-[4rem] sm:text-[6rem] cursor-grab active:cursor-grabbing drop-shadow-xl select-none touch-none p-4 bg-white/50 rounded-full border-[3px] border-white/60 shadow-sm"
    >
      {item.image || item.i || item}
    </motion.div>
  );
};

const DragToBasket = ({ target, options, onComplete }) => {
  const basketRef = useRef(null);
  const [matches, setMatches] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [items, setItems] = useState([]);

  // Total correct items to find
  const totalTargets = options.filter(opt => (opt.w || opt.word) === (target.w || target.word)).length;

  useEffect(() => {
    // Shuffle the options to make it fun
    setItems([...options].sort(() => Math.random() - 0.5));
  }, [options]);

  const handleMatch = () => {
    const newMatches = matches + 1;
    setMatches(newMatches);
    
    if (newMatches >= totalTargets) {
      setShowConfetti(true);
      setTimeout(() => {
        onComplete();
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between w-full h-full max-w-4xl mx-auto py-8">
      {showConfetti && <ConfettiEffect />}
      
      <div className="glass-panel px-8 py-4 border-white/60 mb-8 z-10">
        <h2 className="text-2xl sm:text-4xl font-baloo font-black text-kid-primary-dark drop-shadow-sm text-center">
          Put all the <span className="text-kid-purple">{target.w || target.word}s</span> in the basket!
        </h2>
      </div>

      {/* Draggable Items Area */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 w-full px-4 mb-12 flex-1 relative z-20">
        {items.map((opt, idx) => (
          <DragItem 
            key={idx} 
            item={opt} 
            isTarget={(opt.w || opt.word) === (target.w || target.word)} 
            basketRef={basketRef}
            onMatch={handleMatch}
          />
        ))}
      </div>

      {/* Basket (Drop Zone) */}
      <div 
        ref={basketRef}
        className="text-[10rem] sm:text-[14rem] relative z-10 drop-shadow-2xl flex items-center justify-center mt-auto"
      >
        <span className="relative z-10">🧺</span>
        <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl animate-pulse-slow"></div>
      </div>
    </div>
  );
};

export default DragToBasket;
