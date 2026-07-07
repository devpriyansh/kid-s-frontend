import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useKid } from '../contexts/KidContext';
import ConfettiEffect from '../components/common/ConfettiEffect';

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

const BUCKETS = [
  { id: 'red', color: 'bg-red-500', shadow: 'shadow-red-500/50', label: 'Red' },
  { id: 'blue', color: 'bg-blue-500', shadow: 'shadow-blue-500/50', label: 'Blue' },
  { id: 'yellow', color: 'bg-yellow-400', shadow: 'shadow-yellow-400/50', label: 'Yellow' },
  { id: 'green', color: 'bg-green-500', shadow: 'shadow-green-500/50', label: 'Green' },
];

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

  if (!quiz) return <div className="text-center py-20 text-2xl font-bold">Loading...</div>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-[100dvh] overflow-hidden flex flex-col max-w-6xl mx-auto p-4 relative">
      {isFinished && <ConfettiEffect />}
      
      {/* Sky Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-blue-100 to-white -z-10 rounded-3xl opacity-50 m-4" />
      
      <div className="flex-none text-center mb-4 relative z-10">
        <h1 className="text-4xl font-fredoka font-bold gradient-text">{quiz.title.replace('[Rainbow] ', '')}</h1>
        <p className="text-xl text-gray-700 mt-2 font-bold">Sort the objects into the correct buckets!</p>
        <div className="flex justify-center gap-4 mt-2">
          <span className="text-lg font-bold text-green-600">Score: {score}/{totalItems}</span>
          <span className="text-lg font-bold text-red-500">Moves: {moves}</span>
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
                y: [0, 20, 0], 
                opacity: 1 
              }}
              transition={{ 
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
                opacity: { duration: 0.5 }
              }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute text-5xl cursor-grab active:cursor-grabbing hover:scale-125 transition-transform drop-shadow-md z-10"
              style={{ left: `${item.x}%`, top: `${(i % 5) * 15 + 10}%` }}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
            >
              {item.emoji}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Buckets */}
      <div className="flex-none flex justify-center gap-4 md:gap-12 mt-auto z-20 pb-2">
        {BUCKETS.map(bucket => (
          <div 
            key={bucket.id}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, bucket.id)}
            className={`w-20 h-24 md:w-32 md:h-36 rounded-b-3xl rounded-t-lg ${bucket.color} ${bucket.shadow} shadow-2xl flex items-center justify-center border-4 border-white relative overflow-hidden transition-transform hover:scale-110 hover:-translate-y-2`}
          >
            <div className="absolute top-0 w-full h-4 bg-black/20" /> {/* Bucket Rim */}
            <span className="text-white font-bold text-xl md:text-2xl drop-shadow-md tracking-wider">{bucket.label}</span>
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
            <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 text-center shadow-2xl border-4 border-kid-primary">
              <div className="text-8xl mb-4">🌈</div>
              <h2 className="text-4xl font-fredoka font-bold gradient-text mb-4">Perfect Sorting!</h2>
              <p className="text-xl text-gray-700 mb-6">You sorted everything in {moves} moves!</p>
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

export default RainbowSorting;
