import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useClass } from '../contexts/ClassContext';
import { useReward } from '../contexts/RewardContext';
import { getClass } from '../data/curriculum';
import ConfettiEffect from '../components/common/ConfettiEffect';
import Mascot from '../components/common/Mascot';
import { useProgress } from '../hooks/useProgress';
import PopBalloon from '../components/games/PopBalloon';
import FeedMonkey from '../components/games/FeedMonkey';
import CatchStars from '../components/games/CatchStars';

const LessonActivity = () => {
  const { moduleId, lessonIndex } = useParams();
  const { selectedClass } = useClass();
  const navigate = useNavigate();
  const { addStars, addCoins } = useReward();
  const { markLessonComplete } = useProgress();
  const markedRef = useRef(false);

  // Safely get class data and module
  const classData = getClass(selectedClass);
  const module = classData?.modules?.find(m => m.id === moduleId);
  
  // Parse lessonIndex to number, default to 0 if invalid
  const index = parseInt(lessonIndex, 10);
  const validIndex = isNaN(index) ? 0 : index;
  const lesson = module?.lessons?.[validIndex];

  const [step, setStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  // Redirect if lesson is not found
  useEffect(() => {
    if (!lesson) {
      // Could redirect to dashboard with a message
      navigate('/class-dashboard');
    }
  }, [lesson, navigate]);

  // Mark lesson complete when reward step reached
  useEffect(() => {
    if (step === 5 && !markedRef.current && lesson) {
      markedRef.current = true;
      markLessonComplete(moduleId, validIndex);
    }
  }, [step, moduleId, validIndex, markLessonComplete, lesson]);

  if (!lesson) {
    return (
      <div className="text-center py-12">
        <p className="text-2xl">🔍 Lesson not found</p>
        <button onClick={() => navigate('/class-dashboard')} className="btn-primary mt-4">
          Back to Dashboard
        </button>
      </div>
    );
  }

  const handleQuizAnswer = (idx) => {
    setSelectedOption(idx);
    if (idx === lesson.quiz.answer) {
      addStars(2);
      addCoins(1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1500);
      setTimeout(() => setStep(5), 1000);
    } else {
      setSelectedOption(null); // allow retry
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="text-center">
            <Mascot className="w-32 h-32 mx-auto animate-bounce-slow" />
            <h2 className="text-3xl font-fredoka font-bold gradient-text">Let's Learn {module?.title || ''}</h2>
            <p className="text-xl mt-4">Today we'll learn about {lesson.letter || lesson.number || lesson.word || 'something new'}!</p>
            <button onClick={() => setStep(1)} className="btn-primary mt-6">Start Lesson 🚀</button>
          </div>
        );
      case 1:
        return (
          <div className="text-center">
            <div className="text-8xl">{lesson.image || lesson.letter || lesson.number}</div>
            <h3 className="text-3xl font-bold mt-4">{lesson.letter ? `Letter ${lesson.letter}` : lesson.word || `Number ${lesson.number}`}</h3>
            <p className="text-xl mt-2">This is {lesson.word || 'the number'}. Can you say it?</p>
            <button onClick={() => setStep(2)} className="btn-secondary mt-6">I understand ✅</button>
          </div>
        );
      case 2:
        return (
          <div className="text-center">
            <p className="text-2xl">Let's practice!</p>
            {lesson.trace && <div className="text-6xl border-4 border-dashed border-kid-purple p-8 rounded-3xl inline-block">{lesson.letter}</div>}
            {lesson.count && <div className="text-4xl">Count the {lesson.image}: {lesson.count}</div>}
            <button onClick={() => setStep(3)} className="btn-primary mt-6">Next ➡️</button>
          </div>
        );
      case 3:
        // If no game defined, skip to quiz
        if (!lesson.game) {
          setStep(4);
          return null;
        }
        const GameComponent = 
          lesson.game.type === 'pop-balloon' ? PopBalloon :
          lesson.game.type === 'feed-monkey' ? FeedMonkey :
          lesson.game.type === 'catch-stars' ? CatchStars :
          null;

        if (!GameComponent) {
          setStep(4);
          return null;
        }

        return (
          <div className="text-center">
            <GameComponent
              correctAnswer={lesson.game.target}
              onComplete={() => setStep(4)}
              onWrong={() => {}}
            />
          </div>
        );
      case 4:
        return (
          <div className="text-center">
            <p className="text-2xl">📝 Quick Quiz</p>
            <p className="text-xl mt-2">{lesson.quiz.question}</p>
            <div className="flex gap-4 justify-center mt-4 flex-wrap">
              {lesson.quiz.options.map((opt, idx) => (
                <button key={idx} onClick={() => handleQuizAnswer(idx)} className="btn-secondary px-6 py-3 text-2xl">
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="text-center">
            {showConfetti && <ConfettiEffect />}
            <div className="text-8xl">🎉</div>
            <h2 className="text-3xl font-fredoka font-bold gradient-text">Great Job!</h2>
            <p className="text-xl">You earned ⭐2 stars and 🪙1 coin!</p>
            <button onClick={() => navigate('/class-dashboard')} className="btn-primary mt-6">Back to Dashboard</button>
          </div>
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto glass-card p-6 md:p-8">
      {renderStep()}
    </motion.div>
  );
};

export default LessonActivity;