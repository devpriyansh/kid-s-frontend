import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useKid } from '../contexts/KidContext';
import ConfettiEffect from '../components/common/ConfettiEffect';
import Mascot from '../components/common/Mascot';
import { useReward } from '../contexts/RewardContext';
import FunLoader from '../components/common/FunLoader';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://kid-s-backend.onrender.com/api/v1';

const QuizActivity = () => {
  const { quizId } = useParams();
  const { selectedKid } = useKid();
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(0); // 0 = intro, 1..n = question, n+1 = success
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (!selectedKid) {
      navigate('/child-profiles');
      return;
    }
    
    // For simplicity, we fetch all quizzes for the class and find this one.
    // In a bigger app, you'd fetch the single quiz.
    const fetchQuiz = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await fetch(`${API_BASE_URL}/quiz/list/${selectedKid.age}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const resData = await res.json();
        const found = resData.data?.result?.quizzes?.find(q => q.id.toString() === quizId);
        setQuiz(found);
      } catch (err) {
        console.error("Error fetching quiz", err);
      }
      setLoading(false);
    };

    fetchQuiz();
  }, [quizId, selectedKid, navigate]);

  if (loading) return <FunLoader message="Loading magical quiz..." />;
  if (!quiz) return <div className="text-center py-20 text-2xl">Quiz not found! 😢</div>;

  const questions = quiz.questions || [];

  const handleAnswer = (selectedIndex) => {
    const q = questions[currentQuestionIndex];
    let newScore = score;
    if (selectedIndex === q.correct_answer_index) {
      newScore += 1;
      setScore(newScore);
    }
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishQuiz(newScore);
    }
  };

  const finishQuiz = async (finalScore) => {
    setStep(2); // complete step
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2500);

    // Calculate stars and coins
    const starsEarned = finalScore * 2;
    const coinsEarned = finalScore * 1;

    try {
      const token = localStorage.getItem('token');
      await fetch(`${API_BASE_URL}/quiz/submit`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify({
          childId: selectedKid.id,
          quizId: quiz.id,
          score: finalScore,
          starsEarned,
          coinsEarned
        })
      });
    } catch (err) {
      console.error("Failed to submit result", err);
    }
  };

  if (step === 0) {
    return (
      <div className="max-w-2xl mx-auto p-4 text-center">
        <Mascot className="w-32 h-32 mx-auto animate-bounce-slow" />
        <div className="text-8xl mt-4">{quiz.image_url}</div>
        <h2 className="text-4xl font-fredoka font-bold gradient-text mt-6">{quiz.title}</h2>
        <p className="text-2xl mt-4">{quiz.description}</p>
        <button onClick={() => setStep(1)} className="btn-primary mt-8 text-2xl px-12 py-4">Play Now 🚀</button>
      </div>
    );
  }

  if (step === 1) {
    const q = questions[currentQuestionIndex];
    return (
      <div className="max-w-3xl mx-auto glass-card p-6 md:p-12 text-center">
        <p className="text-xl text-gray-500 font-bold mb-4">Question {currentQuestionIndex + 1} of {questions.length}</p>
        <h2 className="text-4xl font-bold mb-10 text-gray-800">{q.question_text}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {q.options.map((opt, idx) => (
            <button key={idx} onClick={() => handleAnswer(idx)} className="btn-secondary text-2xl p-6 hover:scale-105 transition transform border-4 border-kid-purple/20">
              {opt}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === 2) {
    const stars = score * 2;
    const coins = score * 1;
    return (
      <div className="max-w-2xl mx-auto text-center">
        {showConfetti && <ConfettiEffect />}
        <div className="text-9xl mb-6">🎉</div>
        <h2 className="text-5xl font-fredoka font-bold gradient-text">Quiz Complete!</h2>
        <p className="text-2xl mt-4">You got {score} out of {questions.length} right!</p>
        <div className="flex justify-center gap-8 mt-8">
          <div className="glass-card p-6 rounded-2xl w-40 text-center">
            <p className="text-4xl mb-2">⭐</p>
            <p className="font-bold text-xl text-gray-700">+{stars} Stars</p>
          </div>
          <div className="glass-card p-6 rounded-2xl w-40 text-center">
            <p className="text-4xl mb-2">🪙</p>
            <p className="font-bold text-xl text-gray-700">+{coins} Coins</p>
          </div>
        </div>
        <button onClick={() => navigate('/class-dashboard')} className="btn-primary mt-10 text-xl px-8 py-3">Back to Dashboard</button>
      </div>
    );
  }

  return null;
};

export default QuizActivity;
