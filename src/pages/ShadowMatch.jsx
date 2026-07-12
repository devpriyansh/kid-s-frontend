import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useKid } from '../contexts/KidContext';
import { useQueryClient } from 'react-query';
import ConfettiEffect from '../components/common/ConfettiEffect';
import { GameSkeleton } from '../components/common/Skeletons';

const _envUrl = import.meta.env.VITE_API_BASE_URL;
const API_BASE_URL = _envUrl ? (_envUrl.endsWith('/api/v1') ? _envUrl : _envUrl.replace(/\/$/, '') + '/api/v1') : 'https://kid-s-backend.onrender.com/api/v1';

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
  const queryClient = useQueryClient();

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
      queryClient.invalidateQueries('dashboard');
    } catch (err) {}
  };

  if (!quiz) return <GameSkeleton />;

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

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full flex flex-col max-w-5xl mx-auto p-2 z-10 pt-14 sm:pt-2">
        {isFinished && <ConfettiEffect />}
        
        <div className="flex-none text-center mb-2 mt-0 relative z-10 flex flex-col items-center sm:ml-24">
          <div className="glass-panel px-4 py-1 sm:px-6 sm:py-2 inline-block mb-1 sm:mb-2 border-white/60">
            <h1 className="text-lg md:text-xl font-baloo font-black gradient-text">{quiz.title.replace('[Shadow] ', '')}</h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-0 font-black glass-panel inline-block px-4 py-1 sm:py-2 border-white/60 drop-shadow-sm font-nunito">
            Find the shadow that matches!
          </p>
          <div className="flex justify-center gap-2 sm:gap-4 mt-2">
            <span className="text-sm sm:text-base font-baloo font-black text-kid-green-dark bg-white/60 backdrop-blur-sm border border-white/80 px-3 py-1 sm:px-4 sm:py-1.5 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)]">Round: {currentRound} / {rounds}</span>
            <span className="text-sm sm:text-base font-baloo font-black text-kid-secondary-dark bg-white/60 backdrop-blur-sm border border-white/80 px-3 py-1 sm:px-4 sm:py-1.5 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)]">Moves: {moves}</span>
          </div>
        </div>

      {!isFinished && (
        <div className="flex-1 min-h-0 flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-8 justify-center items-center overflow-y-auto hide-scrollbar pb-2 px-1">
          
          {/* Target Object */}
          <div className="flex flex-col items-center glass-panel p-2 sm:p-4 border-white/60 w-full max-w-[200px] sm:max-w-sm">
            <h2 className="text-xl sm:text-2xl font-black font-baloo text-kid-primary-dark mb-2 sm:mb-4 drop-shadow-sm">Object</h2>
            <motion.div 
              key={currentRound}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-white/60 backdrop-blur-sm rounded-full shadow-inner border-[3px] sm:border-[4px] border-white flex items-center justify-center text-[4rem] sm:text-[5rem] md:text-8xl drop-shadow-md"
            >
              {targetObject}
            </motion.div>
          </div>

          <div className="text-2xl sm:text-4xl text-gray-300 font-bold hidden md:block">➔</div>

          {/* Shadow Options */}
          <div className="flex flex-col items-center w-full md:w-auto glass-panel p-2 sm:p-4 border-white/60 max-w-xs sm:max-w-xl">
            <h2 className="text-xl sm:text-2xl font-black font-baloo text-kid-primary-dark mb-2 sm:mb-4 drop-shadow-sm">Shadows</h2>
            <div className="flex gap-2 sm:gap-4 flex-wrap justify-center">
              {options.map((opt, i) => (
                <motion.div
                  key={`${currentRound}-${i}`}
                  animate={shakeIndex === i ? { x: [-10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  onClick={() => handleOptionClick(opt, i)}
                  className={`w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-xl sm:rounded-2xl border-2 flex items-center justify-center text-[3rem] sm:text-[4rem] md:text-[6rem] transition-all duration-300 relative overflow-hidden ${revealed && opt === targetObject ? 'border-white bg-kid-green/20 shadow-[0_4px_8px_rgba(74,222,128,0.3)]' : 'bg-white/60 backdrop-blur-sm border-white/80 shadow-[0_2px_4px_rgba(0,0,0,0.05)] cursor-pointer hover:scale-105 hover:bg-white hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)]'}`}
                >
                  <span className={`transition-all duration-700 drop-shadow-sm ${revealed && opt === targetObject ? 'brightness-100' : 'brightness-0 opacity-80'}`}>
                    {opt}
                  </span>
                  
                  {revealed && opt === targetObject && (
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0 bg-kid-green rounded-full mix-blend-overlay"
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
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 glass-panel px-6 py-4 sm:px-10 sm:py-8 text-center z-50 flex flex-col md:flex-row gap-4 sm:gap-6 items-center shadow-2xl border-white/80 w-[90%] sm:w-auto max-w-md"
          >
            <span className="text-2xl sm:text-4xl font-black font-baloo gradient-text">Perfect Matcher!</span>
            <button onClick={() => navigate('/class-dashboard')} className="btn-chunky py-2 px-6 sm:py-4 sm:px-8 text-xl sm:text-2xl bg-gradient-to-b from-kid-green to-kid-green-dark shadow-[0_4px_8px_rgba(110,231,183,0.3),inset_0_2px_4px_rgba(255,255,255,0.4)]">
              Dashboard
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ShadowMatch;
