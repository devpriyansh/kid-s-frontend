import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useKid } from '../contexts/KidContext';
import { ConfettiEffect } from '../components/common/ConfettiEffect';
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

// Simple shape structures to build letters
const LETTER_SHAPES = {
  'T': {
    word: 'TIGER', emoji: '🐯',
    parts: [
      { id: 't-top', class: 'w-48 h-12 top-0 left-0 bg-blue-500 rounded-full' },
      { id: 't-bot', class: 'w-12 h-40 top-12 left-[72px] bg-red-500 rounded-full' }
    ]
  },
  'L': {
    word: 'LION', emoji: '🦁',
    parts: [
      { id: 'l-left', class: 'w-12 h-48 top-0 left-0 bg-green-500 rounded-full' },
      { id: 'l-bot', class: 'w-32 h-12 top-[144px] left-12 bg-yellow-400 rounded-full' }
    ]
  },
  'H': {
    word: 'HIPPO', emoji: '🦛',
    parts: [
      { id: 'h-left', class: 'w-12 h-48 top-0 left-0 bg-purple-500 rounded-full' },
      { id: 'h-right', class: 'w-12 h-48 top-0 left-32 bg-pink-500 rounded-full' },
      { id: 'h-mid', class: 'w-20 h-12 top-[72px] left-12 bg-orange-500 rounded-full' }
    ]
  },
  'E': {
    word: 'ELEPHANT', emoji: '🐘',
    parts: [
      { id: 'e-left', class: 'w-12 h-48 top-0 left-0 bg-teal-500 rounded-full' },
      { id: 'e-top', class: 'w-24 h-12 top-0 left-12 bg-indigo-500 rounded-full' },
      { id: 'e-mid', class: 'w-20 h-12 top-[72px] left-12 bg-yellow-500 rounded-full' },
      { id: 'e-bot', class: 'w-24 h-12 top-[144px] left-12 bg-pink-500 rounded-full' }
    ]
  }
};

const LetterBuilder = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { selectedKid } = useKid();

  const [quiz, setQuiz] = useState(null);
  const [letterData, setLetterData] = useState(null);
  const [placedParts, setPlacedParts] = useState([]);
  const [moves, setMoves] = useState(0);
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
          initializeGame(found);
        } else navigate('/class-dashboard');
      } catch (err) {}
    };
    fetchQuiz();
  }, [quizId, selectedKid, navigate]);

  const initializeGame = (q) => {
    const titleLetter = q.title.split(' ')[1] || 'T';
    const data = LETTER_SHAPES[titleLetter] || LETTER_SHAPES['T'];
    setLetterData(data);
    setPlacedParts([]);
    setMoves(0);
    setIsFinished(false);
  };

  const handleDragStart = (e, partId) => {
    e.dataTransfer.setData('text/plain', partId);
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e, targetId) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData('text/plain');
    setMoves(m => m + 1);

    if (draggedId === targetId) {
      playSound('correct');
      const newPlaced = [...placedParts, targetId];
      setPlacedParts(newPlaced);

      if (newPlaced.length === letterData.parts.length) {
        handleWin(moves + 1, letterData.parts.length);
      }
    } else {
      playSound('wrong');
    }
  };

  const handleWin = async (finalMoves, totalParts) => {
    setIsFinished(true);
    const baseScore = 20;
    const penalty = Math.max(0, finalMoves - totalParts);
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

  if (!quiz || !letterData) return <FunLoader message="Loading Letter Builder..." />;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-[100dvh] overflow-hidden flex flex-col max-w-4xl mx-auto p-4">
      {isFinished && <ConfettiEffect />}
      
      <div className="flex-none text-center mb-4">
        <h1 className="text-3xl md:text-4xl font-fredoka font-bold gradient-text">Build the Letter!</h1>
        <p className="text-lg text-gray-600 mt-1">Drag the colorful blocks to build the shape.</p>
        <p className="text-md font-bold text-kid-purple mt-1">Moves: {moves}</p>
      </div>

      <div className="flex-1 min-h-0 flex flex-col md:flex-row gap-8 justify-center items-center overflow-y-auto hide-scrollbar pb-4">
        {/* The Letter Outline Canvas */}
        <div className="relative w-64 h-64 bg-white/50 rounded-3xl border-8 border-dashed border-gray-300 shadow-xl flex-shrink-0">
          {letterData.parts.map(part => {
            const isPlaced = placedParts.includes(part.id);
            return (
              <div
                key={part.id}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, part.id)}
                className={`absolute ${part.class} transition-all duration-300 ${isPlaced ? 'opacity-100 shadow-lg scale-100' : 'opacity-20 bg-gray-400 scale-95'}`}
              />
            );
          })}

          <AnimatePresence>
            {isFinished && (
              <motion.div 
                initial={{ opacity: 0, scale: 0 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 rounded-2xl backdrop-blur-sm z-10"
              >
                <div className="text-6xl">{letterData.emoji}</div>
                <div className="text-3xl font-bold text-kid-primary mt-2">{letterData.word}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pieces Tray */}
        <div className="bg-white/80 p-6 rounded-3xl shadow-xl border-4 border-kid-yellow w-full md:w-auto min-w-[200px]">
          <h2 className="text-2xl font-bold text-gray-700 w-full text-center mb-6">Pieces</h2>
          <div className="flex flex-col gap-6 items-center">
            {letterData.parts.map(part => {
              if (placedParts.includes(part.id)) return null;
              return (
                <div 
                  key={`tray-${part.id}`}
                  draggable
                  onDragStart={(e) => handleDragStart(e, part.id)}
                  className={`cursor-grab active:cursor-grabbing hover:scale-105 transition-transform shadow-md ${part.class} !relative !top-auto !left-auto`}
                />
              );
            })}
            {letterData.parts.every(p => placedParts.includes(p.id)) && (
              <div className="text-green-500 font-bold text-xl py-4">Great Job! 🌟</div>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isFinished && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-8 py-4 shadow-2xl border-4 border-green-400 text-center z-50 flex gap-4 items-center"
          >
            <span className="text-2xl font-bold text-green-600">Letter Built!</span>
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

export default LetterBuilder;
