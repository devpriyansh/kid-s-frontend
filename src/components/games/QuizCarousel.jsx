import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ConfettiEffect from '../common/ConfettiEffect';
import Mascot from '../common/Mascot';

const QuizCarousel = ({ quizzes, onFinishAll }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedWrong, setSelectedWrong] = useState(null);

  const handleNext = () => {
    if (currentIndex < quizzes.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Reached the end (reward step is usually the last one, or we just call onFinishAll)
      onFinishAll();
    }
  };

  const handleAnswer = (idx) => {
    const currentQuiz = quizzes[currentIndex];
    
    // Reward step check
    if (currentQuiz.type === 'reward') {
      onFinishAll();
      return;
    }

    if (idx === currentQuiz.answer) {
      // Correct!
      handleNext();
    } else {
      // Wrong
      setSelectedWrong(idx);
      // Play error sound? (optional, user wanted TTS in general but we can just shake)
      setTimeout(() => setSelectedWrong(null), 800);
    }
  };

  if (!quizzes || quizzes.length === 0) {
    return null;
  }

  const currentQuiz = quizzes[currentIndex];

  const renderQuizContent = () => {
    if (currentQuiz.type === 'reward') {
      return (
        <div className="flex flex-col items-center justify-center space-y-8 h-full">
          <ConfettiEffect />
          <Mascot className="w-48 h-48 animate-bounce" />
          <h2 className="text-4xl sm:text-6xl font-baloo font-black text-kid-primary-dark text-center">Quiz Master!</h2>
          <button onClick={onFinishAll} className="btn-chunky px-8 py-4 bg-kid-green text-white text-2xl mt-8">
            Collect Reward
          </button>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto space-y-8 sm:space-y-16">
        <div className="glass-panel px-8 py-4 sm:px-12 sm:py-6 border-white/60">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-baloo font-black text-kid-primary-dark drop-shadow-sm text-center">
            {currentQuiz.question}
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-8 justify-center w-full px-4">
          {currentQuiz.options.map((opt, idx) => {
            const isWrong = selectedWrong === idx;
            
            return (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAnswer(idx)}
                animate={isWrong ? { x: [-10, 10, -10, 10, 0], backgroundColor: '#fee2e2' } : {}}
                transition={{ duration: 0.4 }}
                className={`flex items-center justify-center w-32 h-32 sm:w-48 sm:h-48 glass-panel border-[4px] sm:border-[6px] text-[4rem] sm:text-[6rem] font-baloo font-black leading-none drop-shadow-md bg-white hover:bg-slate-50 transition-colors shadow-lg active:shadow-sm ${
                  isWrong ? 'border-red-400 text-red-500' : 'border-white/80 text-slate-700'
                }`}
              >
                {opt}
              </motion.button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full min-h-full flex flex-col items-center relative py-12 sm:py-8">
      {/* Progress Bar */}
      <div className="w-full max-w-2xl bg-white/50 rounded-full h-4 sm:h-6 mb-8 mt-12 sm:mt-8 overflow-hidden shadow-inner border-2 border-white/60 shrink-0">
        <div 
          className="h-full bg-gradient-to-r from-kid-primary to-kid-purple transition-all duration-500 ease-out rounded-full"
          style={{ width: `${((currentIndex + 1) / quizzes.length) * 100}%` }}
        />
      </div>

      <div className="w-full flex-1 relative flex flex-col items-center min-h-[400px] pb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-full flex-1 flex flex-col items-center justify-start my-auto"
          >
            {renderQuizContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuizCarousel;
