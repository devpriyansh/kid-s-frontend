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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-[100dvh] overflow-hidden flex flex-col max-w-5xl mx-auto p-4">
      {isFinished && <ConfettiEffect />}
      
      <div className="flex-none text-center mb-4">
        <h1 className="text-3xl md:text-4xl font-fredoka font-bold gradient-text">{story.title}</h1>
        <p className="text-lg text-gray-600 mt-1">Build the story by placing the items!</p>
        <p className="text-md font-bold text-kid-purple mt-1">Moves: {moves}</p>
      </div>

      <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-stretch mt-4 overflow-y-auto hide-scrollbar pb-4">
        
        {/* Story Scene Canvas */}
        <div className={`flex-1 min-h-0 w-full bg-white rounded-3xl shadow-xl border-8 border-kid-secondary/30 relative overflow-hidden ${story.bgClass} flex flex-col justify-center min-h-[300px]`}>
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
                  width: '100px',
                  height: '100px'
                }}
              >
                {!isPlaced && (
                  <div className="w-16 h-16 border-4 border-dashed border-white/50 rounded-xl bg-white/20 flex items-center justify-center">
                    <span className="text-white/70 text-sm font-bold text-center leading-tight shadow-sm">{target.label}</span>
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
                    className="text-7xl drop-shadow-lg"
                  >
                    {target.emoji}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Props Tray */}
        <div className="bg-white p-4 rounded-3xl shadow-xl border-4 border-kid-pink/30 w-full lg:w-48 xl:w-56 flex flex-col items-center overflow-y-auto hide-scrollbar">
          <h2 className="text-2xl font-bold text-gray-700 w-full text-center mb-6">Props</h2>
          <div className="flex flex-row lg:flex-col flex-wrap gap-4 justify-center items-center">
            {story.targets.map(target => {
              if (placedItems.includes(target.id)) return null;
              return (
                <div 
                  key={`tray-${target.id}`}
                  draggable
                  onDragStart={(e) => handleDragStart(e, target.id)}
                  className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-50 rounded-2xl shadow-lg cursor-grab active:cursor-grabbing hover:scale-105 transition-transform border-2 border-gray-200 flex flex-col items-center justify-center"
                >
                  <span className="text-5xl">{target.emoji}</span>
                  <span className="text-sm font-bold text-gray-500 mt-2">{target.label}</span>
                </div>
              );
            })}
            
            {story.targets.every(t => placedItems.includes(t.id)) && (
              <div className="text-green-500 font-bold text-xl py-4 w-full text-center">
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
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-8 py-4 shadow-2xl border-4 border-kid-primary text-center z-50 flex gap-4 items-center"
          >
            <span className="text-2xl font-bold text-kid-primary text-shadow-sm">{story.title}!</span>
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

export default StoryBuilder;
