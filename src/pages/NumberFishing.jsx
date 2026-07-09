import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useKid } from '../contexts/KidContext';
import ConfettiEffect from '../components/common/ConfettiEffect';
import FunLoader from '../components/common/FunLoader';

const _envUrl = import.meta.env.VITE_API_BASE_URL;
const API_BASE_URL = _envUrl ? (_envUrl.endsWith('/api/v1') ? _envUrl : _envUrl.replace(/\/$/, '') + '/api/v1') : 'https://kid-s-backend.onrender.com/api/v1';

const playSound = (type) => {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (type === 'splash') {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.2);
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 0.1);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
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

const FISH_EMOJIS = ['🐟', '🐠', '🐡'];

const NumberFishing = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { selectedKid } = useKid();

  const [quiz, setQuiz] = useState(null);
  const [fishes, setFishes] = useState([]);
  const [targetNumber, setTargetNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [targetScore, setTargetScore] = useState(5);
  const [isFinished, setIsFinished] = useState(false);

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
          let ts = 5;
          if (found.class_level === 'kg1') ts = 7;
          if (found.class_level === 'kg2') ts = 10;
          setTargetScore(ts);
          generatePond(ts);
        } else navigate('/class-dashboard');
      } catch (err) {}
    };
    fetchQuiz();
  }, [quizId, selectedKid, navigate]);

  const generatePond = (ts, currentScore = 0) => {
    if (currentScore >= ts) {
      handleWin();
      return;
    }
    
    // Generate 4 to 6 random fish numbers
    const numFish = 5;
    const newTarget = Math.floor(Math.random() * 9) + 1;
    setTargetNumber(newTarget);
    
    const newFishes = [];
    newFishes.push({ id: `fish-target`, number: newTarget, emoji: FISH_EMOJIS[Math.floor(Math.random()*3)] });
    
    for (let i = 1; i < numFish; i++) {
      let n = Math.floor(Math.random() * 9) + 1;
      while (n === newTarget) n = Math.floor(Math.random() * 9) + 1;
      newFishes.push({ id: `fish-${i}`, number: n, emoji: FISH_EMOJIS[Math.floor(Math.random()*3)] });
    }
    
    // Add animation parameters
    const mapped = newFishes.sort(() => Math.random() - 0.5).map((f, i) => ({
      ...f,
      y: 20 + i * 15, // vertical track
      duration: Math.random() * 3 + 4, // 4-7 seconds to cross screen
      direction: Math.random() > 0.5 ? 1 : -1 // left to right or right to left
    }));
    
    setFishes(mapped);
  };

  const handleCatch = (fish) => {
    setMoves(m => m + 1);
    
    if (fish.number === targetNumber) {
      playSound('splash');
      setScore(s => {
        const newScore = s + 1;
        generatePond(targetScore, newScore);
        return newScore;
      });
    } else {
      playSound('wrong');
    }
  };

  const handleWin = async () => {
    setIsFinished(true);
    const baseScore = 20;
    const penalty = Math.max(0, moves - targetScore);
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

  if (!quiz) return <FunLoader message="Loading Number Fishing..." />;

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
            <h1 className="text-lg md:text-xl font-baloo font-black gradient-text">{quiz.title.replace('[Fishing] ', '')}</h1>
          </div>
          <p className="text-xs sm:text-sm text-kid-primary-dark mt-0 font-black glass-panel inline-block px-4 py-1 sm:py-2 border-white/60 drop-shadow-sm">
            Catch number <span className="text-lg sm:text-2xl text-kid-purple mx-1 sm:mx-2 drop-shadow-md">{targetNumber}</span>!
          </p>
          <div className="flex justify-center gap-2 sm:gap-4 mt-2">
            <span className="text-sm sm:text-base font-baloo font-black text-kid-green-dark bg-white/60 backdrop-blur-sm border border-white/80 px-3 py-1 sm:px-4 sm:py-1.5 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)]">Caught: {score}/{targetScore}</span>
            <span className="text-sm sm:text-base font-baloo font-black text-kid-secondary-dark bg-white/60 backdrop-blur-sm border border-white/80 px-3 py-1 sm:px-4 sm:py-1.5 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)]">Tries: {moves}</span>
          </div>
        </div>

        {/* The Pond */}
        <div className="flex-1 min-h-0 w-full bg-gradient-to-b from-blue-200/80 to-blue-500/80 backdrop-blur-md rounded-2xl sm:rounded-[3rem] relative overflow-hidden shadow-[inset_0_4px_16px_rgba(0,0,0,0.2)] border-2 border-white/60 cursor-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2248%22 height=%2248%22 style=%22font-size:36px%22><text y=%2236%22>🎣</text></svg>'),_auto]">
        {/* Ripples */}
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTgiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] bg-repeat opacity-20 animate-pulse" />

        <AnimatePresence>
          {!isFinished && fishes.map((fish) => (
            <motion.div
              key={fish.id}
              initial={{ x: fish.direction === 1 ? -100 : window.innerWidth + 100 }}
              animate={{ x: fish.direction === 1 ? window.innerWidth + 100 : -100 }}
              transition={{ duration: fish.duration, repeat: Infinity, ease: "linear" }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleCatch(fish)}
              className="absolute text-5xl sm:text-7xl md:text-8xl flex items-center justify-center group"
              style={{ top: `${fish.y}%`, transform: fish.direction === -1 ? 'scaleX(-1)' : 'none' }}
            >
              {fish.emoji}
              <div 
                className="absolute text-xl sm:text-3xl md:text-4xl font-black text-white drop-shadow-md z-10"
                style={{ transform: fish.direction === -1 ? 'scaleX(-1)' : 'none' }} // Keep number un-flipped
              >
                {fish.number}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isFinished && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          >
            <div className="glass-panel p-6 sm:p-10 max-w-md w-full mx-4 text-center border-white/80 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-kid-primary/20 rounded-full blur-2xl pointer-events-none"></div>
              <div className="text-[4rem] sm:text-[6rem] mb-2 sm:mb-4 drop-shadow-md relative z-10">🎣</div>
              <h2 className="text-3xl sm:text-5xl font-baloo font-black gradient-text mb-2 sm:mb-4 relative z-10">Master Fisher!</h2>
              <p className="text-lg sm:text-2xl font-bold text-slate-500 mb-6 sm:mb-8 font-nunito relative z-10">You caught all <span className="text-kid-primary-dark font-baloo text-xl sm:text-3xl">{targetScore}</span> fish!</p>
              <button onClick={() => navigate('/class-dashboard')} className="btn-chunky w-full text-xl sm:text-2xl py-4 sm:py-6 bg-gradient-to-b from-kid-green to-kid-green-dark shadow-[0_8px_16px_rgba(110,231,183,0.3),inset_0_4px_8px_rgba(255,255,255,0.4)] relative z-10">
                Back to Dashboard
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default NumberFishing;
