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

const BUCKETS = [
  { id: 'red', color: 'bg-kid-pink', border: 'border-kid-pink-dark', shadow: 'shadow-[0_8px_0_0_#9D174D]', label: 'Red' },
  { id: 'blue', color: 'bg-kid-primary', border: 'border-kid-primary-dark', shadow: 'shadow-[0_8px_0_0_#0369A1]', label: 'Blue' },
  { id: 'yellow', color: 'bg-kid-yellow', border: 'border-kid-yellow-dark', shadow: 'shadow-[0_8px_0_0_#A16207]', label: 'Yellow' },
  { id: 'green', color: 'bg-kid-green', border: 'border-kid-green-dark', shadow: 'shadow-[0_8px_0_0_#15803D]', label: 'Green' },
];

const getBucketGradient = (id) => {
  switch(id) {
    case 'red': return 'from-red-400 to-red-500';
    case 'blue': return 'from-blue-400 to-blue-500';
    case 'yellow': return 'from-yellow-400 to-yellow-500';
    case 'green': return 'from-green-400 to-green-500';
    default: return 'from-gray-400 to-gray-500';
  }
};

const ITEMS = {
  'red': ['🍎', '🍓', '🍒', '🎈', '❤️'],
  'blue': ['💧', '🥶', '🦋', '🚙', '💎'],
  'yellow': ['🌞', '⭐', '🍌', '🌻', '🧀'],
  'green': ['🍀', '🍏', '🐸', '🐢', '🍃']
};

const RainbowSorting = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { selectedKid } = useKid();

  const [quiz, setQuiz] = useState(null);
  const [items, setItems] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [totalItems, setTotalItems] = useState(10);

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
          initializeGame(found);
        } else {
          navigate('/class-dashboard');
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchQuiz();
  }, [quizId, selectedKid, navigate]);

  const initializeGame = (q) => {
    let count = 12; // nursery
    if (q.class_level === 'kg1') count = 16;
    if (q.class_level === 'kg2') count = 20;
    setTotalItems(count);

    const generatedItems = [];
    const colors = ['red', 'blue', 'yellow', 'green'];
    for (let i = 0; i < count; i++) {
      const color = colors[i % 4];
      const emoji = ITEMS[color][Math.floor(Math.random() * ITEMS[color].length)];
      generatedItems.push({
        id: `item-${i}`,
        color,
        emoji,
        x: Math.random() * 80 + 10, // random start X %
        y: Math.random() * -100 // start above screen
      });
    }
    
    setItems(generatedItems.sort(() => Math.random() - 0.5));
    setScore(0);
    setMoves(0);
    setIsFinished(false);
  };

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(item));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, bucketId) => {
    e.preventDefault();
    try {
      const item = JSON.parse(e.dataTransfer.getData('text/plain'));
      setMoves(m => m + 1);
      
      if (item.color === bucketId) {
        playSound('correct');
        setItems(prev => prev.filter(i => i.id !== item.id));
        setScore(s => {
          const newScore = s + 1;
          if (newScore === totalItems) handleWin(moves + 1);
          return newScore;
        });
      } else {
        playSound('wrong');
      }
    } catch(err) {}
  };

  const handleWin = async (finalMoves) => {
    setIsFinished(true);
    const baseScore = 20;
    const penalty = Math.max(0, finalMoves - totalItems);
    const calculatedScore = Math.max(5, baseScore - penalty);
    
    try {
      const token = localStorage.getItem('token');
      await fetch(`${API_BASE_URL}/quiz/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({
          childId: selectedKid.id,
          quizId: quiz.id,
          score: calculatedScore,
          starsEarned: calculatedScore,
          coinsEarned: Math.floor(calculatedScore / 2)
        })
      });
    } catch (err) {}
  };

  if (!quiz) return <FunLoader message="Loading Sorting Game..." />;

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

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full flex flex-col max-w-6xl mx-auto p-2 z-10 relative pt-14 sm:pt-2">
        {isFinished && <ConfettiEffect />}
        
        <div className="flex-none text-center mb-2 mt-0 relative z-10 flex flex-col items-center sm:ml-24">
          <div className="glass-panel px-4 py-1 sm:px-6 sm:py-2 inline-block mb-1 sm:mb-2 border-white/60">
            <h1 className="text-lg md:text-xl font-baloo font-black gradient-text">{quiz.title.replace('[Rainbow] ', '')}</h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-0 font-black glass-panel inline-block px-4 py-1 sm:py-2 border-white/60 drop-shadow-sm font-nunito">
            Sort the objects into the correct buckets!
          </p>
          <div className="flex justify-center gap-2 sm:gap-4 mt-2">
            <span className="text-sm sm:text-base font-baloo font-black text-kid-green-dark bg-white/60 backdrop-blur-sm border border-white/80 px-3 py-1 sm:px-4 sm:py-1.5 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)]">Score: {score}/{totalItems}</span>
            <span className="text-sm sm:text-base font-baloo font-black text-kid-secondary-dark bg-white/60 backdrop-blur-sm border border-white/80 px-3 py-1 sm:px-4 sm:py-1.5 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)]">Moves: {moves}</span>
          </div>
        </div>

      {/* Falling Items Area */}
      <div className="flex-1 min-h-0 relative w-full z-10">
        <AnimatePresence>
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ y: -100, opacity: 0 }}
              animate={{ 
                y: [0, 10, 0], 
                opacity: 1 
              }}
              transition={{ 
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
                opacity: { duration: 0.5 }
              }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute text-3xl sm:text-5xl cursor-grab active:cursor-grabbing hover:scale-125 transition-transform drop-shadow-md z-10"
              style={{ left: `${item.x}%`, top: `${(i % 5) * 15 + 5}%` }}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
            >
              {item.emoji}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Buckets */}
      <div className="flex-none flex justify-center gap-2 sm:gap-6 md:gap-10 mt-auto z-20 pb-2 px-1">
        {BUCKETS.map(bucket => (
          <div 
            key={bucket.id}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, bucket.id)}
            className={`w-16 h-20 sm:w-20 sm:h-24 md:w-32 md:h-36 rounded-b-2xl sm:rounded-b-[2rem] rounded-t-xl bg-gradient-to-b ${getBucketGradient(bucket.id)} border border-white/40 shadow-[0_4px_8px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.4)] flex flex-col items-center justify-end pb-2 sm:pb-4 relative overflow-hidden transition-transform hover:scale-110 hover:-translate-y-2`}
          >
            <div className="absolute top-0 w-full h-4 sm:h-6 bg-black/20 shadow-inner" /> {/* Bucket Rim */}
            <span className="text-white font-baloo font-black text-xs sm:text-sm md:text-2xl drop-shadow-md tracking-wide">{bucket.label}</span>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isFinished && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          >
            <div className="glass-panel p-6 sm:p-10 max-w-md w-full mx-4 text-center border-white/80 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-kid-yellow/30 rounded-full blur-3xl pointer-events-none"></div>
              <div className="text-[4rem] sm:text-[6rem] mb-2 sm:mb-4 drop-shadow-md relative z-10">🌈</div>
              <h2 className="text-3xl sm:text-5xl font-baloo font-black gradient-text mb-2 sm:mb-4 relative z-10">Perfect Sorting!</h2>
              <p className="text-lg sm:text-2xl font-bold text-slate-500 mb-6 sm:mb-8 font-nunito relative z-10">You sorted everything in <span className="text-kid-primary-dark font-baloo text-xl sm:text-3xl">{moves}</span> moves!</p>
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

export default RainbowSorting;
