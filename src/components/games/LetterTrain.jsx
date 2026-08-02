import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ConfettiEffect from '../common/ConfettiEffect';

const TrainWagon = ({ id, onDrop, filledWith }) => {
  const wagonRef = useRef(null);

  // We expose the ref via a callback so the parent knows the drop zones
  useEffect(() => {
    onDrop(id, wagonRef.current);
  }, [id, onDrop]);

  return (
    <div ref={wagonRef} className="w-24 h-24 sm:w-32 sm:h-32 bg-kid-primary rounded-lg border-4 border-kid-primary-dark relative flex items-center justify-center shadow-lg mx-2">
      {/* Wheels */}
      <div className="absolute -bottom-4 sm:-bottom-6 left-2 w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-full border-4 border-slate-600"></div>
      <div className="absolute -bottom-4 sm:-bottom-6 right-2 w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-full border-4 border-slate-600"></div>
      
      {/* Connector */}
      <div className="absolute top-1/2 -left-6 w-6 h-2 bg-slate-600 -translate-y-1/2 z-[-1]"></div>

      {/* Content slot */}
      <div className="w-[80%] h-[80%] bg-white/20 rounded-md shadow-inner flex items-center justify-center border-2 border-dashed border-white/50">
        {filledWith ? (
          <span className="text-4xl sm:text-6xl font-baloo font-black text-white drop-shadow-md">{filledWith}</span>
        ) : (
          <span className="text-white/30 text-2xl font-black">?</span>
        )}
      </div>
    </div>
  );
};

const SkyLetter = ({ letter, isTarget, dropZones, onMatch }) => {
  const controls = useAnimation();
  const [isMatched, setIsMatched] = useState(false);

  const handleDragEnd = (event, info) => {
    const itemX = info.point.x;
    const itemY = info.point.y;

    // Check all drop zones
    let matchedZoneId = null;
    
    for (const [id, el] of Object.entries(dropZones)) {
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (
        itemX > rect.left && itemX < rect.right &&
        itemY > rect.top && itemY < rect.bottom
      ) {
        matchedZoneId = id;
        break;
      }
    }

    if (matchedZoneId && isTarget) {
      setIsMatched(true);
      onMatch(matchedZoneId, letter);
    } else {
      // Snap back
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
      className="text-[4rem] sm:text-[5rem] font-baloo font-black text-kid-primary-dark cursor-grab active:cursor-grabbing drop-shadow-xl select-none touch-none bg-white/80 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center border-[4px] border-white shadow-sm"
    >
      {letter}
    </motion.div>
  );
};

const LetterTrain = ({ targetLetter, options, onComplete }) => {
  const [filledWagons, setFilledWagons] = useState({ w1: null, w2: null, w3: null });
  const [dropZones, setDropZones] = useState({});
  const [showConfetti, setShowConfetti] = useState(false);
  const [trainDriving, setTrainDriving] = useState(false);
  
  // Create 3 targets and 2 distractors
  const [skyLetters, setSkyLetters] = useState([]);

  useEffect(() => {
    const arr = [targetLetter, targetLetter, targetLetter, options[0], options[1]];
    setSkyLetters(arr.sort(() => Math.random() - 0.5));
  }, [targetLetter, options]);

  const handleRegisterDropZone = (id, element) => {
    setDropZones(prev => ({ ...prev, [id]: element }));
  };

  const handleMatch = (zoneId, letter) => {
    // If wagon is already filled, reject (but for simplicity, just overwrite or accept)
    if (filledWagons[zoneId]) {
       // Ideally snap back, but let's just allow it for kids
    }
    
    const newWagons = { ...filledWagons, [zoneId]: letter };
    setFilledWagons(newWagons);

    // Check if all 3 are filled
    if (newWagons.w1 && newWagons.w2 && newWagons.w3) {
      setTrainDriving(true);
      setShowConfetti(true);
      setTimeout(() => {
        onComplete();
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between w-full h-full max-w-5xl mx-auto py-8 overflow-hidden">
      {showConfetti && <ConfettiEffect />}
      
      <div className="glass-panel px-8 py-4 border-white/60 mb-8 z-10">
        <h2 className="text-2xl sm:text-4xl font-baloo font-black text-kid-primary-dark drop-shadow-sm text-center">
          Load the <span className="text-kid-purple">{targetLetter}</span> train!
        </h2>
      </div>

      {/* Sky Letters */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 w-full px-4 mb-12 flex-1 relative z-20">
        {skyLetters.map((letter, idx) => (
          <SkyLetter 
            key={idx} 
            letter={letter} 
            isTarget={letter === targetLetter}
            dropZones={dropZones}
            onMatch={handleMatch}
          />
        ))}
      </div>

      {/* Train */}
      <motion.div 
        className="flex items-end mt-auto relative z-10 w-full justify-center pl-8"
        animate={trainDriving ? { x: 1000 } : { x: 0 }}
        transition={{ duration: 2, ease: "easeIn" }}
      >
        {/* Engine */}
        <div className="w-32 h-40 sm:w-48 sm:h-56 bg-kid-secondary rounded-t-3xl rounded-br-3xl border-4 border-kid-secondary-dark relative flex items-center justify-center shadow-lg z-20">
          <div className="absolute top-4 right-4 w-12 h-12 bg-white/30 rounded-xl"></div>
          <div className="absolute -top-12 right-8 w-8 h-16 bg-slate-600 rounded-t-xl">
             {/* Smoke */}
             <div className="absolute -top-6 -right-4 w-6 h-6 bg-slate-400 rounded-full opacity-50 animate-bounce"></div>
             <div className="absolute -top-12 -right-10 w-10 h-10 bg-slate-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
          <div className="absolute -bottom-4 sm:-bottom-6 left-4 w-10 h-10 sm:w-14 sm:h-14 bg-slate-800 rounded-full border-4 border-slate-600"></div>
          <div className="absolute -bottom-4 sm:-bottom-6 right-4 w-10 h-10 sm:w-14 sm:h-14 bg-slate-800 rounded-full border-4 border-slate-600"></div>
          <span className="text-5xl font-baloo font-black text-white/50">{targetLetter}</span>
        </div>

        {/* Wagons */}
        <TrainWagon id="w1" onDrop={handleRegisterDropZone} filledWith={filledWagons.w1} />
        <TrainWagon id="w2" onDrop={handleRegisterDropZone} filledWith={filledWagons.w2} />
        <TrainWagon id="w3" onDrop={handleRegisterDropZone} filledWith={filledWagons.w3} />
      </motion.div>
      
      {/* Train Track */}
      <div className="w-[200%] h-4 bg-slate-400 mt-2 rounded-full absolute bottom-8 z-0"></div>
    </div>
  );
};

export default LetterTrain;
