import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useKid } from '../contexts/KidContext';
import ConfettiEffect from '../components/common/ConfettiEffect';
import FunLoader from '../components/common/FunLoader';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://kid-s-backend.onrender.com/api/v1';

const playSound = (type) => {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (type === 'correct') {
      const osc1 = ctx.createOscillator();
      const gainNode = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(400, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
      osc1.connect(gainNode);
      gainNode.connect(ctx.destination);
      osc1.start();
      osc1.stop(ctx.currentTime + 0.5);
    } else {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.3);
      gainNode.gain.setValueAtTime(0.5, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    }
  } catch(e) {}
};

const SHADOW_POOL = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🚗', '✈️', '🍎', '🍌'];

const ShadowMatch = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { selectedKid } = useKid();

  const [quiz, setQuiz] = useState(null);
  const [rounds, setRounds] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [targetObject, setTargetObject] = useState('');
  const [options, setOptions] = useState([]);
  const [moves, setMoves] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [shakeIndex, setShakeIndex] = useState(-1);

  useEffect(() => {
    if (!selectedKid) {
      navigate('/child-profiles');
      return;
    }
    const fetchQuiz = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${API_BASE_URL}/quiz/list/${selectedKid.age || 'nursery'}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const resData = await res.json();
        const found = resData.data?.result?.quizzes?.find(q => q.id.toString() === quizId);
        if (found) {
          setQuiz(found);
          let r = 3;
          if (found.class_level === 'kg1') r = 5;
          if (found.class_level === 'kg2') r = 7;
          setRounds(r);
          generateRound();
        } else navigate('/class-dashboard');
      } catch (err) {}
    };
    fetchQuiz();
  }, [quizId, selectedKid, navigate]);

  const generateRound = () => {
    const shuffled = [...SHADOW_POOL].sort(() => Math.random() - 0.5);
    const target = shuffled[0];
    const choices = [target, shuffled[1], shuffled[2]].sort(() => Math.random() - 0.5);
    
    setTargetObject(target);
    setOptions(choices);
    setRevealed(false);
  };

  const handleOptionClick = (option, index) => {
    if (revealed) return;
    setMoves(m => m + 1);

    if (option === targetObject) {
      playSound('correct');
      setRevealed(true);
      
      setTimeout(() => {
        if (currentRound < rounds) {
          setCurrentRound(c => c + 1);
          generateRound();
        } else {
          handleWin();
        }
      }, 2000);
    } else {
      playSound('wrong');
      setShakeIndex(index);
      setTimeout(() => setShakeIndex(-1), 500);
    }
  };

  const handleWin = async () => {
    setIsFinished(true);
    const baseScore = 20;
    const penalty = Math.max(0, moves - rounds);
    const finalScore = Math.max(5, baseScore - penalty);
    
    try {
      const token = localStorage.getItem('token');
      await fetch(`${API_BASE_URL}/quiz/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({
          childId: selectedKid.id,
          quizId: quiz.id,
          score: finalScore,
          starsEarned: finalScore,
          coinsEarned: Math.floor(finalScore / 2)
        })
      });
    } catch (err) {}
  };

  if (!quiz) return <FunLoader message="Loading Shadow Match..." />;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-[100dvh] overflow-hidden flex flex-col max-w-4xl mx-auto p-4">
      {isFinished && <ConfettiEffect />}
      
      <div className="flex-none text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-fredoka font-bold gradient-text">{quiz.title.replace('[Shadow] ', '')}</h1>
        <p className="text-lg text-gray-600 mt-1">Find the shadow that matches!</p>
        <div className="flex justify-center gap-4 mt-4">
          <div className="bg-gray-100 rounded-full px-6 py-2 text-lg font-bold text-gray-600">
            Round: {currentRound} / {rounds}
          </div>
          <div className="bg-gray-100 rounded-full px-6 py-2 text-lg font-bold text-kid-purple">
            Moves: {moves}
          </div>
        </div>
      </div>

      {!isFinished && (
        <div className="flex-1 min-h-0 flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center overflow-y-auto hide-scrollbar pb-4">
          
          {/* Target Object */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-400 mb-4">Object</h2>
            <motion.div 
              key={currentRound}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="w-48 h-48 bg-white rounded-full shadow-2xl border-8 border-kid-primary flex items-center justify-center text-9xl"
            >
              {targetObject}
            </motion.div>
          </div>

          <div className="text-4xl text-gray-300 font-bold hidden md:block">➔</div>

          {/* Shadow Options */}
          <div className="flex flex-col items-center w-full md:w-auto">
            <h2 className="text-2xl font-bold text-gray-400 mb-4">Shadows</h2>
            <div className="flex gap-4 flex-wrap justify-center">
              {options.map((opt, i) => (
                <motion.div
                  key={`${currentRound}-${i}`}
                  animate={shakeIndex === i ? { x: [-10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  onClick={() => handleOptionClick(opt, i)}
                  className={`w-32 h-32 md:w-40 md:h-40 bg-white rounded-3xl shadow-xl border-4 ${revealed && opt === targetObject ? 'border-green-500 bg-green-50' : 'border-gray-200 cursor-pointer hover:scale-105 hover:border-kid-secondary'} flex items-center justify-center text-7xl md:text-8xl transition-all duration-300 relative overflow-hidden`}
                >
                  <span className={`transition-all duration-700 ${revealed && opt === targetObject ? 'brightness-100' : 'brightness-0 opacity-80 drop-shadow-md'}`}>
                    {opt}
                  </span>
                  
                  {revealed && opt === targetObject && (
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0 bg-green-400 rounded-full"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      <AnimatePresence>
        {isFinished && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-8 py-4 shadow-2xl border-4 border-green-400 text-center z-50 flex gap-4 items-center"
          >
            <span className="text-2xl font-bold text-green-600">Perfect Matcher!</span>
            <button onClick={() => navigate('/class-dashboard')} className="btn-primary py-2 px-6">
              Dashboard
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.div>
  );
};

export default ShadowMatch;
