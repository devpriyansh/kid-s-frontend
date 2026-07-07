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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-[100dvh] overflow-hidden flex flex-col max-w-4xl mx-auto p-4 relative">
      {isFinished && <ConfettiEffect />}
      
      <div className="flex-none text-center mb-4 relative z-10">
        <h1 className="text-3xl md:text-4xl font-fredoka font-bold gradient-text">{quiz.title.replace('[Fishing] ', '')}</h1>
        <p className="text-2xl text-kid-purple mt-4 font-bold bg-white/80 inline-block px-8 py-2 rounded-full shadow-md">
          Catch number <span className="text-4xl text-kid-primary ml-2">{targetNumber}</span>!
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <span className="text-lg font-bold text-green-600 bg-white/80 px-4 py-1 rounded-full">Caught: {score}/{targetScore}</span>
          <span className="text-lg font-bold text-red-500 bg-white/80 px-4 py-1 rounded-full">Tries: {moves}</span>
        </div>
      </div>

      {/* The Pond */}
      <div className="flex-1 min-h-0 w-full bg-gradient-to-b from-blue-300 to-blue-600 rounded-3xl relative overflow-hidden shadow-inner border-8 border-kid-secondary/50 cursor-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2232%22 height=%2232%22 style=%22font-size:24px%22><text y=%2224%22>🎣</text></svg>'),_auto]">
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
              className="absolute text-7xl md:text-8xl flex items-center justify-center group"
              style={{ top: `${fish.y}%`, transform: fish.direction === -1 ? 'scaleX(-1)' : 'none' }}
            >
              {fish.emoji}
              <div 
                className="absolute text-3xl md:text-4xl font-black text-white drop-shadow-md z-10"
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
            <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 text-center shadow-2xl border-4 border-blue-400">
              <div className="text-8xl mb-4">🎣</div>
              <h2 className="text-4xl font-fredoka font-bold gradient-text mb-4">Master Fisher!</h2>
              <p className="text-xl text-gray-700 mb-6">You caught all {targetScore} fish!</p>
              <button onClick={() => navigate('/class-dashboard')} className="btn-primary w-full text-2xl py-4">
                Back to Dashboard
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NumberFishing;
