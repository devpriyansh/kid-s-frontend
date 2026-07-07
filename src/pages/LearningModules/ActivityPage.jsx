import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useReward } from '../../contexts/RewardContext';
import ConfettiEffect from '../../components/common/ConfettiEffect';
import Mascot from '../../components/common/Mascot';

const ActivityPage = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { addStars, addCoins } = useReward();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  // Mock activity data per module – in real app, fetch from API
  const activities = {
    alphabet: {
      title: '🔤 Alphabet Adventure',
      questions: [
        { prompt: 'Which letter is this?', options: ['A', 'B', 'C'], correct: 0, image: 'A' },
        { prompt: 'Find the letter B', options: ['B', 'D', 'F'], correct: 0, image: 'B' },
      ],
    },
    numbers: {
      title: '🔢 Number Fun',
      questions: [
        { prompt: 'How many stars?', options: ['1', '2', '3'], correct: 1, image: '⭐' },
        { prompt: 'Count the apples', options: ['3', '4', '5'], correct: 2, image: '🍎🍎🍎🍎🍎' },
      ],
    },
    // Add more modules with default data
  };

  const activity = activities[moduleId] || {
    title: '🎯 Activity',
    questions: [
      { prompt: 'Choose the right answer', options: ['A', 'B', 'C'], correct: 0, image: '⭐' },
      { prompt: 'Another question', options: ['X', 'Y', 'Z'], correct: 1, image: '🌟' },
    ],
  };

  const currentQ = activity.questions[questionIndex];
  const isLast = questionIndex === activity.questions.length - 1;

  const handleAnswer = (index) => {
    if (index === currentQ.correct) {
      setScore(score + 1);
      addStars(1);
      addCoins(1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1500);
    } else {
      // Wrong answer – no reward but still proceed
    }

    if (isLast) {
      // Finished
      setTimeout(() => {
        navigate('/kid-home');
      }, 1500);
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto">
      {showConfetti && <ConfettiEffect />}
      <div className="glass-card p-6 md:p-8 text-center">
        <Mascot className="w-24 h-24 mx-auto mb-4 animate-bounce-slow" />
        <h2 className="text-3xl font-fredoka font-bold gradient-text">{activity.title}</h2>
        <p className="text-gray-600 mt-1">Question {questionIndex + 1} of {activity.questions.length}</p>

        <div className="my-8">
          <div className="text-6xl mb-4">{currentQ.image}</div>
          <p className="text-xl font-semibold">{currentQ.prompt}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currentQ.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              className="py-4 px-6 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl transition transform hover:scale-105 active:scale-95 border-2 border-kid-purple/30 text-xl font-bold"
            >
              {opt}
            </button>
          ))}
        </div>

        <div className="mt-6 flex justify-between text-sm text-gray-500">
          <span>⭐ Score: {score}</span>
          <span>🎯 {isLast ? 'Last one!' : `${questionIndex + 1}/${activity.questions.length}`}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityPage;