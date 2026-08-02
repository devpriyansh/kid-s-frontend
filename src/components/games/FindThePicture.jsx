import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ConfettiEffect from '../common/ConfettiEffect';

const FindThePicture = ({ targetWord, options, onComplete }) => {
  const [selected, setSelected] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const playAudio = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.85;
      utterance.pitch = 1.2;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSelect = (opt, idx) => {
    playAudio(opt.w || opt.word);
    setSelected(idx);
    
    if ((opt.w || opt.word) === (targetWord.w || targetWord.word)) {
      setShowConfetti(true);
      setTimeout(() => {
        onComplete();
      }, 1500);
    } else {
      setTimeout(() => setSelected(null), 1000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto space-y-8">
      {showConfetti && <ConfettiEffect />}
      
      <div className="glass-panel px-8 py-4 border-white/60">
        <h2 className="text-3xl sm:text-5xl font-baloo font-black text-kid-primary-dark drop-shadow-sm text-center">
          Find the <span className="text-kid-purple">{targetWord.w || targetWord.word}</span>
        </h2>
      </div>

      <div className="flex gap-4 sm:gap-8 justify-center flex-wrap px-4 w-full">
        {options.map((opt, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSelect(opt, idx)}
            className={`glass-panel p-6 sm:p-10 flex flex-col items-center justify-center cursor-pointer transition-all border-[4px] ${
              selected === idx
                ? (opt.w || opt.word) === (targetWord.w || targetWord.word)
                  ? 'border-green-400 bg-green-50' // Correct
                  : 'border-red-400 bg-red-50 opacity-50' // Wrong
                : 'border-white/60 hover:shadow-xl'
            }`}
          >
            <div className="text-[6rem] sm:text-[8rem] drop-shadow-xl leading-none">{opt.i || opt.image}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FindThePicture;
