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
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 0.05);
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

const STORIES = {
  'CatMat': {
    title: 'The Cat is on the Mat',
    bgClass: 'bg-gradient-to-b from-blue-200 to-green-200',
    targets: [
      { id: 'mat', x: 50, y: 70, emoji: '🟪', label: 'Mat', z: 10, scale: 1.5 },
      { id: 'cat', x: 50, y: 55, emoji: '🐱', label: 'Cat', z: 20, scale: 1 },
      { id: 'sun', x: 80, y: 20, emoji: '☀️', label: 'Sun', z: 5, scale: 1 }
    ]
  },
  'DogHouse': {
    title: 'The Dog is by the House',
    bgClass: 'bg-gradient-to-b from-sky-300 to-green-300',
    targets: [
      { id: 'house', x: 70, y: 60, emoji: '🏠', label: 'House', z: 10, scale: 1.5 },
      { id: 'dog', x: 30, y: 65, emoji: '🐶', label: 'Dog', z: 20, scale: 1 },
      { id: 'tree', x: 15, y: 50, emoji: '🌳', label: 'Tree', z: 5, scale: 1.2 }
    ]
  },
  'BirdTree': {
    title: 'The Bird is in the Tree',
    bgClass: 'bg-gradient-to-b from-blue-400 to-green-400',
    targets: [
      { id: 'tree', x: 50, y: 60, emoji: '🌳', label: 'Tree', z: 10, scale: 1.5 },
      { id: 'bird', x: 50, y: 35, emoji: '🐦', label: 'Bird', z: 20, scale: 0.8 },
      { id: 'cloud', x: 20, y: 20, emoji: '☁️', label: 'Cloud', z: 5, scale: 1 }
    ]
  }
};

const StoryBuilder = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { selectedKid } = useKid();

  const [quiz, setQuiz] = useState(null);
  const [story, setStory] = useState(null);
  const [placedItems, setPlacedItems] = useState([]);
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
    let sKey = 'CatMat';
    if (q.title.includes('Dog')) sKey = 'DogHouse';
    if (q.title.includes('Bird')) sKey = 'BirdTree';
    
    setStory(STORIES[sKey]);
    setPlacedItems([]);
    setMoves(0);
    setIsFinished(false);
  };

  const handleDragStart = (e, targetId) => {
    e.dataTransfer.setData('text/plain', targetId);
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e, targetId) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData('text/plain');
    setMoves(m => m + 1);

    if (draggedId === targetId) {
      playSound('correct');
      const newPlaced = [...placedItems, targetId];
      setPlacedItems(newPlaced);

      if (newPlaced.length === story.targets.length) {
        handleWin(moves + 1);
      }
    } else {
      playSound('wrong');
    }
  };

  const handleWin = async (finalMoves) => {
    setIsFinished(true);
    const baseScore = 20;
    const penalty = Math.max(0, finalMoves - story.targets.length);
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

  if (!quiz || !story) return <FunLoader message="Loading Story Builder..." />;

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

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full flex flex-col max-w-6xl mx-auto p-2 z-10 pt-14 sm:pt-2">
        {isFinished && <ConfettiEffect />}
        
        <div className="flex-none text-center mb-2 mt-0 relative z-10 flex flex-col items-center sm:ml-24">
          <div className="glass-panel px-4 py-1 sm:px-6 sm:py-2 inline-block mb-1 sm:mb-2 border-white/60">
            <h1 className="text-lg md:text-xl font-baloo font-black gradient-text">{story.title}</h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-0 font-black glass-panel inline-block px-4 py-1 sm:py-2 border-white/60 drop-shadow-sm font-nunito">
            Build the story by placing the items!
          </p>
          <div className="flex justify-center gap-2 sm:gap-4 mt-2">
            <span className="text-sm sm:text-base font-baloo font-black text-kid-secondary-dark bg-white/60 backdrop-blur-sm border border-white/80 px-3 py-1 sm:px-4 sm:py-1.5 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)]">Moves: {moves}</span>
          </div>
        </div>

        <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-2 sm:gap-4 lg:gap-8 justify-center items-center lg:items-stretch mt-2 sm:mt-4 overflow-y-auto hide-scrollbar pb-4 px-1">
        
        {/* Story Scene Canvas */}
        <div className={`flex-1 min-h-0 w-full rounded-2xl sm:rounded-[3rem] shadow-[inset_0_4px_16px_rgba(0,0,0,0.2)] border-[3px] sm:border-[6px] border-white/60 relative overflow-hidden ${story.bgClass} flex flex-col justify-center min-h-[300px] sm:min-h-[400px]`}>
          {story.targets.map(target => {
            const isPlaced = placedItems.includes(target.id);
            return (
              <div
                key={target.id}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, target.id)}
                className="absolute flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                style={{ 
                  left: `${target.x}%`, 
                  top: `${target.y}%`, 
                  zIndex: target.z,
                  width: '60px',
                  height: '60px'
                }}
              >
                {!isPlaced && (
                  <div className="w-12 h-12 sm:w-20 sm:h-20 border-[3px] sm:border-4 border-dashed border-white/80 rounded-xl sm:rounded-2xl bg-white/30 flex items-center justify-center backdrop-blur-sm shadow-sm">
                    <span className="text-white text-xs sm:text-lg font-black text-center leading-tight drop-shadow-md">{target.label}</span>
                  </div>
                )}
                {isPlaced && (
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: isFinished ? [target.scale, target.scale * 1.2, target.scale] : target.scale, 
                      opacity: 1 
                    }}
                    transition={isFinished ? { duration: 1, repeat: Infinity } : { type: 'spring' }}
                    className="text-4xl sm:text-7xl drop-shadow-lg"
                  >
                    {target.emoji}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Props Tray */}
        <div className="glass-panel p-2 sm:p-4 md:p-6 border-white/60 w-full lg:w-48 xl:w-56 flex flex-col items-center overflow-y-auto hide-scrollbar h-fit max-h-full">
          <h2 className="text-xl sm:text-2xl font-black font-baloo text-kid-primary-dark w-full text-center mb-2 sm:mb-4 drop-shadow-sm">Props</h2>
          <div className="flex flex-row lg:flex-col flex-wrap gap-2 sm:gap-4 justify-center items-center">
            {story.targets.map(target => {
              if (placedItems.includes(target.id)) return null;
              return (
                <div 
                  key={`tray-${target.id}`}
                  draggable
                  onDragStart={(e) => handleDragStart(e, target.id)}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-[0_2px_4px_rgba(0,0,0,0.1)] cursor-grab active:cursor-grabbing hover:scale-105 transition-transform border border-white flex flex-col items-center justify-center hover:bg-white hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)]"
                >
                  <span className="text-3xl sm:text-4xl drop-shadow-md">{target.emoji}</span>
                  <span className="text-xs sm:text-sm font-black font-baloo text-kid-primary-dark mt-1 drop-shadow-sm">{target.label}</span>
                </div>
              );
            })}
            
            {story.targets.every(t => placedItems.includes(t.id)) && (
              <div className="text-green-500 font-black text-lg sm:text-xl py-2 w-full text-center">
                Story Built! 📖
              </div>
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
            <span className="text-2xl sm:text-4xl font-black font-baloo gradient-text">{story.title}!</span>
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

export default StoryBuilder;
