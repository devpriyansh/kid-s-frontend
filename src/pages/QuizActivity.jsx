import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useKid } from '../contexts/KidContext';
import { useQueryClient } from 'react-query';
import ConfettiEffect from '../components/common/ConfettiEffect';
import Mascot from '../components/common/Mascot';
import { useReward } from '../contexts/RewardContext';
import { GameSkeleton } from '../components/common/Skeletons';
import { Gamepad2, ArrowRight, CheckCircle2, Star, Coins, PlayCircle } from 'lucide-react';

const _envUrl = import.meta.env.VITE_API_BASE_URL;
const API_BASE_URL = _envUrl ? (_envUrl.endsWith('/api/v1') ? _envUrl : _envUrl.replace(/\/$/, '') + '/api/v1') : 'https://kid-s-backend.onrender.com/api/v1';

const QuizActivity = () => {
  const { quizId } = useParams();
  const { selectedKid } = useKid();
  const queryClient = useQueryClient();
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

  if (loading) return <GameSkeleton />;
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
      queryClient.invalidateQueries('dashboard');
    } catch (err) {
      console.error("Failed to submit result", err);
    }
  };

  if (step === 0) {
    return (
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center h-full text-center w-full max-w-2xl mx-auto space-y-2 sm:space-y-4 z-10 px-2">
        <div className="glass-panel p-2 sm:p-4 border-white/60">
          <Mascot className="w-16 h-16 sm:w-24 sm:h-24 animate-bounce-slow drop-shadow-md" />
        </div>
        <div className="text-5xl sm:text-[5rem] drop-shadow-xl">{quiz.image_url}</div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-baloo font-black gradient-text drop-shadow-sm leading-tight">{quiz.title}</h2>
        <p className="text-sm sm:text-base md:text-lg font-bold text-slate-600 glass-panel inline-block px-4 py-2 border-white/60 font-nunito">{quiz.description}</p>
        <button onClick={() => setStep(1)} className="btn-chunky text-xl sm:text-2xl px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-b from-kid-green to-kid-green-dark shadow-[0_8px_16px_rgba(110,231,183,0.3),inset_0_4px_8px_rgba(255,255,255,0.4)] mt-2 sm:mt-4 flex items-center gap-2 mx-auto">
          Play Now <PlayCircle size={24} strokeWidth={3} className="drop-shadow-sm" />
        </button>
      </motion.div>
    );
  }

  if (step === 1) {
    const q = questions[currentQuestionIndex];
    return (
      <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex flex-col h-full w-full max-w-4xl mx-auto pt-14 pb-2 z-10 min-h-0 px-2 sm:px-4">
        <div className="flex-none text-center mb-2 sm:mb-4">
          <span className="font-bold font-baloo text-kid-primary-dark glass-panel px-4 sm:px-6 py-1 sm:py-2 border-white/60 shadow-sm text-sm sm:text-base inline-block">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
        </div>
        
        <div className="flex-none glass-panel p-3 sm:p-6 border-white/60 mb-2 sm:mb-4 text-center">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-black font-baloo text-kid-primary-dark drop-shadow-sm leading-tight">{q.question_text}</h2>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto hide-scrollbar pb-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 p-1 sm:p-2 h-full content-center">
            {q.options.map((opt, idx) => (
                <motion.button 
                  key={idx} 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(idx)} 
                  className="btn-chunky text-base sm:text-xl md:text-2xl font-black font-baloo p-3 sm:p-4 bg-white/60 backdrop-blur-sm border border-white text-kid-primary-dark shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-white/80 w-full min-h-[60px] sm:min-h-[80px]"
                >
                {opt}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  if (step === 2) {
    const stars = score * 2;
    const coins = score * 1;
    return (
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center h-full text-center max-w-2xl mx-auto space-y-4 sm:space-y-6 z-10 px-2">
        {showConfetti && <ConfettiEffect />}
        <div className="text-[5rem] sm:text-[6rem] glass-panel w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center rounded-full border-white/80 shadow-2xl mb-4 sm:mb-6 animate-bounce-slow relative overflow-hidden">
          <div className="absolute inset-0 bg-kid-yellow/30 blur-2xl z-0"></div>
          <span className="relative z-10 drop-shadow-md">🎉</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-baloo font-black gradient-text">Quiz Complete!</h2>
        <p className="text-xl sm:text-2xl font-bold text-slate-600 glass-panel inline-block px-6 py-2 sm:py-3 border-white/60 font-nunito">
          You got <span className="text-kid-primary-dark font-black">{score}</span> out of <span className="text-kid-primary-dark font-black">{questions.length}</span> right!
        </p>
        
        <div className="flex justify-center gap-4 mt-4 w-full">
          <div className="glass-panel p-4 border-white/60 flex-1 max-w-[150px]">
            <Star size={40} className="fill-kid-yellow text-kid-yellow-dark mx-auto mb-1 drop-shadow-sm" />
            <p className="font-black font-baloo text-2xl text-kid-primary-dark">+{stars}</p>
            <p className="font-bold text-slate-500 uppercase tracking-widest text-xs font-nunito">Stars</p>
          </div>
          <div className="glass-panel p-4 border-white/60 flex-1 max-w-[150px]">
            <Coins size={40} className="fill-kid-primary text-kid-primary-dark mx-auto mb-1 drop-shadow-sm" />
            <p className="font-black font-baloo text-2xl text-kid-primary-dark">+{coins}</p>
            <p className="font-bold text-slate-500 uppercase tracking-widest text-xs font-nunito">Coins</p>
          </div>
        </div>

        <button onClick={() => navigate('/class-dashboard')} className="btn-chunky text-xl sm:text-2xl px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-b from-kid-green to-kid-green-dark shadow-[0_8px_16px_rgba(110,231,183,0.3),inset_0_4px_8px_rgba(255,255,255,0.4)] mt-6 mx-auto">
          Back to Dashboard
        </button>
      </motion.div>
    );
  }

  return null;
};

const QuizActivityWrapper = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute inset-0 z-[100] bg-kid-bg flex flex-col items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-kid-primary/20 blur-[100px] mix-blend-multiply"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-kid-yellow/20 blur-[150px] mix-blend-multiply"
          animate={{ scale: [1, 1.1, 1], x: [0, -40, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <button 
        onClick={() => navigate('/class-dashboard')}
        className="absolute top-4 left-4 z-[60] bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] font-bold text-slate-600 flex items-center gap-2 border-2 border-slate-200 hover:bg-white transition-colors"
      >
        ⬅️ <span className="hidden sm:inline">Back</span>
      </button>
      
      <div className="flex-1 w-full min-h-0 relative z-10">
        <AnimatePresence mode="wait">
          <QuizActivity />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuizActivityWrapper;
