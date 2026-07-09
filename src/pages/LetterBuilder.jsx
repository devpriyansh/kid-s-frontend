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
        
        <div className="flex-none text-center mb-2 mt-0 sm:ml-24">
          <div className="glass-panel px-4 py-1 sm:px-6 sm:py-2 inline-block border-white/60">
            <h1 className="text-lg md:text-xl font-baloo font-black gradient-text">Build the Letter!</h1>
            <p className="text-xs sm:text-sm font-bold text-slate-500 mt-0 font-nunito drop-shadow-sm">Drag the blocks to build the shape.</p>
          </div>
        </div>

        <div className="flex-1 min-h-0 flex flex-col md:flex-row gap-2 sm:gap-4 lg:gap-8 justify-center items-center overflow-y-auto hide-scrollbar pb-4 px-1">
        {/* The Letter Outline Canvas */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 glass-panel border-[3px] sm:border-[6px] border-dashed border-white/60 flex-shrink-0 flex items-center justify-center p-2 sm:p-4 md:p-8 bg-white/40 transform scale-[0.6] sm:scale-[0.8] md:scale-100 origin-center">
          <div className="relative w-full h-full max-w-[200px] max-h-[200px] mx-auto">
          {letterData.parts.map(part => {
            const isPlaced = placedParts.includes(part.id);
            return (
              <div
                key={part.id}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, part.id)}
                className={`absolute ${part.class} transition-all duration-300 border-2 sm:border-4 border-transparent ${isPlaced ? 'opacity-100 shadow-[0_4px_0_0_rgba(0,0,0,0.2)] scale-100 border-white/40' : 'opacity-20 bg-slate-300 scale-95 border-slate-400'}`}
              />
            );
          })}

          <AnimatePresence>
            {isFinished && (
              <motion.div 
                initial={{ opacity: 0, scale: 0 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 backdrop-blur-md rounded-2xl sm:rounded-[2rem] shadow-inner border border-white z-10"
              >
                <div className="text-[4rem] sm:text-[6rem] drop-shadow-md">{letterData.emoji}</div>
                <div className="text-2xl sm:text-4xl font-black font-baloo text-kid-primary-dark mt-2 sm:mt-4 drop-shadow-sm">{letterData.word}</div>
              </motion.div>
            )}
          </AnimatePresence>
          </div>
        </div>

        {/* Pieces Tray */}
        <div className="glass-panel p-2 sm:p-4 md:p-8 w-full md:w-auto min-w-[150px] sm:min-w-[200px] flex-shrink-0 h-fit max-h-full overflow-y-auto hide-scrollbar border-white/60">
          <h2 className="text-xl sm:text-3xl font-black font-baloo text-kid-primary-dark w-full text-center mb-2 sm:mb-4 md:mb-8 drop-shadow-sm">Pieces</h2>
          <div className="flex flex-row md:flex-col gap-2 sm:gap-4 md:gap-8 justify-center items-center flex-wrap">
            {letterData.parts.map(part => {
              if (placedParts.includes(part.id)) return null;
              return (
                <div 
                  key={`tray-${part.id}`}
                  draggable
                  onDragStart={(e) => handleDragStart(e, part.id)}
                  className={`cursor-grab active:cursor-grabbing hover:scale-110 transition-transform shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.6)] border border-white/50 ${part.class} !relative !top-auto !left-auto transform scale-[0.5] sm:scale-[0.7] md:scale-100`}
                />
              );
            })}
            {letterData.parts.every(p => placedParts.includes(p.id)) && (
              <div className="text-green-500 font-black text-lg sm:text-2xl py-2 sm:py-4 w-full text-center">Great Job! 🌟</div>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isFinished && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 glass-panel px-6 py-4 sm:px-10 sm:py-8 text-center z-50 flex flex-col md:flex-row gap-4 sm:gap-6 items-center shadow-2xl border-white/80 w-[90%] sm:w-auto max-w-md"
          >
            <span className="text-2xl sm:text-4xl font-black font-baloo gradient-text">Letter Built!</span>
            <button onClick={() => navigate('/class-dashboard')} className="btn-chunky py-2 px-6 sm:py-4 sm:px-8 text-xl sm:text-2xl bg-gradient-to-b from-kid-green to-kid-green-dark shadow-[0_4px_8px_rgba(110,231,183,0.3),inset_0_2px_4px_rgba(255,255,255,0.4)]">
              Dashboard
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default LetterBuilder;
