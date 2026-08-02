import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TracingCanvas from './TracingCanvas';
import FindThePicture from './FindThePicture';
import FindTheLetter from './FindTheLetter';
import MatchCases from './MatchCases';
import OddOneOut from './OddOneOut';
import CatchStars from './CatchStars';
import FeedMonkey from './FeedMonkey';
import MemoryMatch from './MemoryMatch';
import MagicHats from './MagicHats';
import SplashColor from './SplashColor';
import DragToBasket from './DragToBasket';
import WhackALetter from './WhackALetter';
import LetterTrain from './LetterTrain';
import ConfettiEffect from '../common/ConfettiEffect';
import Mascot from '../common/Mascot';
import PopBalloon from './PopBalloon';

const PracticeCarousel = ({ practiceConfig, onFinishAll }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < practiceConfig.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onFinishAll();
    }
  };

  if (!practiceConfig || practiceConfig.length === 0) {
    return null;
  }

  const currentStep = practiceConfig[currentIndex];

  const renderGame = () => {
    switch (currentStep.type) {
      case 'trace':
        return <TracingCanvas key={currentIndex} letter={currentStep.target} onComplete={handleNext} />;
      case 'find-picture':
        return <FindThePicture key={currentIndex} targetWord={currentStep.target} options={currentStep.options} onComplete={handleNext} />;
      case 'find-letter':
        return <FindTheLetter key={currentIndex} targetLetter={currentStep.target} targetLower={currentStep.targetLower} grid={currentStep.grid} onComplete={handleNext} />;
      case 'match-cases':
        return <MatchCases key={currentIndex} upper={currentStep.upper} lower={currentStep.lower} options={currentStep.options} onComplete={handleNext} />;
      case 'odd-one-out':
        return <OddOneOut key={currentIndex} targetImage={currentStep.targetImage} targetLabel={currentStep.targetLabel} options={currentStep.options} onComplete={handleNext} />;
      case 'pop-balloon':
        return <PopBalloon key={currentIndex} correctAnswer={currentStep.target} onComplete={handleNext} onWrong={() => {}} />;
      case 'catch-stars':
        return <CatchStars key={currentIndex} correctAnswer={currentStep.target} onComplete={handleNext} onWrong={() => {}} />;
      case 'feed-monkey':
        return <FeedMonkey key={currentIndex} correctAnswer={currentStep.target} onComplete={handleNext} onWrong={() => {}} />;
      case 'memory-match':
        return <MemoryMatch key={currentIndex} upper={currentStep.upper} lower={currentStep.lower} word={currentStep.word} image={currentStep.image} onComplete={handleNext} />;
      case 'magic-hats':
        return <MagicHats key={currentIndex} target={currentStep.target} onComplete={handleNext} />;
      case 'splash-color':
        return <SplashColor key={currentIndex} target={currentStep.target} onComplete={handleNext} />;
      case 'drag-to-basket':
        return <DragToBasket key={currentIndex} target={currentStep.target} options={currentStep.options} onComplete={handleNext} />;
      case 'whack-a-letter':
        return <WhackALetter key={currentIndex} targetLetter={currentStep.target} options={currentStep.options} onComplete={handleNext} />;
      case 'letter-train':
        return <LetterTrain key={currentIndex} targetLetter={currentStep.target} options={currentStep.options} onComplete={handleNext} />;
      case 'reward':
        return (
          <div className="flex flex-col items-center justify-center space-y-8" key={currentIndex}>
            <ConfettiEffect />
            <Mascot className="w-48 h-48 animate-bounce" />
            <h2 className="text-4xl sm:text-6xl font-baloo font-black text-kid-primary-dark">Amazing Job!</h2>
            <button onClick={onFinishAll} className="btn-chunky px-8 py-4 bg-kid-green text-white text-2xl">
              Finish
            </button>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl text-slate-500">Unknown activity type: {currentStep.type}</h2>
            <button onClick={handleNext} className="btn-chunky mt-4">Skip</button>
          </div>
        );
    }
  };

  return (
    <div className="w-full min-h-full flex flex-col items-center relative py-12 sm:py-8">
      {/* Progress Bar */}
      <div className="w-full max-w-2xl bg-white/50 rounded-full h-4 sm:h-6 mb-8 mt-12 sm:mt-8 overflow-hidden shadow-inner border-2 border-white/60 shrink-0">
        <div 
          className="h-full bg-gradient-to-r from-kid-primary to-kid-purple transition-all duration-500 ease-out rounded-full"
          style={{ width: `${((currentIndex + 1) / practiceConfig.length) * 100}%` }}
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
            {renderGame()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PracticeCarousel;
