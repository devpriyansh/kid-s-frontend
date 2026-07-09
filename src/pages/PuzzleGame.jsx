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
  } catch(e) {
    console.error("Audio not supported", e);
  }
};

const PuzzleGame = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { selectedKid } = useKid();

  const [quiz, setQuiz] = useState(null);
  const [pieces, setPieces] = useState([]);
  const [placedPieces, setPlacedPieces] = useState([]);
  const [gridSize, setGridSize] = useState(2);
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
        } else {
          navigate('/class-dashboard');
        }
      } catch (err) {
        console.error("Error fetching quiz", err);
      }
    };

    fetchQuiz();
  }, [quizId, selectedKid, navigate]);

  const initializeGame = (q) => {
    let size = 2; // nursery
    if (q.class_level === 'kg1') size = 3;
    if (q.class_level === 'kg2') size = 4;
    setGridSize(size);

    const initialPieces = [];
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        initialPieces.push({
          id: `${r}-${c}`,
          row: r,
          col: c
        });
      }
    }
    
    setPieces(initialPieces.sort(() => Math.random() - 0.5));
    setPlacedPieces([]);
    setMoves(0);
    setIsFinished(false);
  };

  const handleDragStart = (e, pieceId) => {
    e.dataTransfer.setData('text/plain', pieceId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetRow, targetCol) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData('text/plain');
    const targetId = `${targetRow}-${targetCol}`;
    
    setMoves(m => m + 1);

    if (draggedId === targetId) {
      playSound('correct');
      const newPlaced = [...placedPieces, draggedId];
      setPlacedPieces(newPlaced);

      if (newPlaced.length === gridSize * gridSize) {
        handleWin();
      }
    } else {
      playSound('wrong');
    }
  };

  const handleWin = async () => {
    setIsFinished(true);
    
    const baseScore = 20;
    const penalty = Math.max(0, moves - (gridSize * gridSize));
    const finalScore = Math.max(5, baseScore - penalty);
    
    try {
      const token = localStorage.getItem('token');
      await fetch(`${API_BASE_URL}/quiz/submit`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify({
          childId: selectedKid.id,
          quizId: quiz.id,
          score: finalScore,
          starsEarned: finalScore,
          coinsEarned: Math.floor(finalScore / 2)
        })
      });
    } catch (err) {
      console.error("Failed to submit result", err);
    }
  };

  if (!quiz) return <FunLoader message="Loading Puzzle..." />;

  const bgSize = `${gridSize * 100}% ${gridSize * 100}%`;
  
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
        
        <div className="flex-none text-center mb-2 mt-0 sm:ml-24">
          <div className="glass-panel px-4 py-1 sm:px-6 sm:py-2 inline-block border-white/60">
            <h1 className="text-lg md:text-xl font-baloo font-black gradient-text">{quiz.title.replace('[Puzzle] ', '')}</h1>
            <p className="text-xs sm:text-sm font-bold text-slate-500 mt-0 font-nunito drop-shadow-sm">{quiz.description}</p>
          </div>
        </div>

        <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-2 md:gap-4 justify-center items-center lg:items-stretch overflow-y-auto lg:overflow-hidden pb-4 hide-scrollbar px-1">
        
        {/* Reference Image Thumbnail */}
        <div className="flex flex-col items-center">
          <p className="font-black font-baloo text-kid-primary-dark mb-1 text-base sm:text-xl drop-shadow-sm">Reference</p>
          <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 rounded-2xl overflow-hidden glass-panel border-[3px] sm:border-[4px] border-white/80 pointer-events-none p-1">
            <img src={quiz.image_url} alt="Reference" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>

        {/* Main Puzzle Grid */}
        <div className="flex-1 w-full max-w-[300px] sm:max-w-[400px] glass-panel p-2 sm:p-4 border-white/60 flex flex-col justify-center items-center h-fit my-auto">
          <div
            className="grid gap-1 sm:gap-2 bg-white/40 border-[3px] sm:border-[4px] border-white/80 rounded-xl sm:rounded-2xl p-1 sm:p-2 w-full shadow-inner aspect-square backdrop-blur-sm"
            style={{ 
              gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`
            }}
          >
            {Array.from({ length: gridSize }).map((_, r) => 
              Array.from({ length: gridSize }).map((_, c) => {
                const isPlaced = placedPieces.includes(`${r}-${c}`);
                const bgPosition = gridSize === 1 ? '0% 0%' : `${(c / (gridSize - 1)) * 100}% ${(r / (gridSize - 1)) * 100}%`;
                
                return (
                  <div 
                    key={`${r}-${c}`}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, r, c)}
                    className={`relative w-full aspect-square bg-white/60 rounded-xl overflow-hidden ${isPlaced ? 'shadow-sm' : 'shadow-inner border-2 border-dashed border-white/80 hover:bg-white/90'}`}
                  >
                    {!isPlaced && (
                      <div 
                        className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                          backgroundImage: `url(${quiz.image_url})`,
                          backgroundSize: bgSize,
                          backgroundPosition: bgPosition,
                          filter: 'grayscale(100%)'
                        }}
                      />
                    )}
                    {isPlaced && (
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute inset-0 w-full h-full"
                        style={{
                          backgroundImage: `url(${quiz.image_url})`,
                          backgroundSize: bgSize,
                          backgroundPosition: bgPosition,
                          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.2)'
                        }}
                      />
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Draggable Pieces Tray */}
        <div className="glass-panel p-2 sm:p-4 border-white/60 w-full lg:w-48 xl:w-56 flex flex-col items-center overflow-y-auto hide-scrollbar h-fit max-h-full">
          <h2 className="text-xl sm:text-2xl font-black font-baloo text-kid-primary-dark w-full text-center mb-2 drop-shadow-sm">Pieces</h2>
          <div className="flex flex-row lg:flex-col flex-wrap gap-2 sm:gap-4 justify-center items-center pb-2">
            {pieces.map(piece => {
              if (placedPieces.includes(piece.id)) return null;
              
              const bgPosition = gridSize === 1 ? '0% 0%' : `${(piece.col / (gridSize - 1)) * 100}% ${(piece.row / (gridSize - 1)) * 100}%`;
              
              return (
                <div 
                  key={piece.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, piece.id)}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 rounded-xl cursor-grab active:cursor-grabbing hover:scale-105 transition-transform shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_0_0_2px_rgba(255,255,255,0.8)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.15),inset_0_0_0_2px_rgba(255,255,255,1)]"
                  style={{
                    backgroundImage: `url(${quiz.image_url})`,
                    backgroundSize: bgSize,
                    backgroundPosition: bgPosition
                  }}
                />
              );
            })}
            
            {pieces.every(piece => placedPieces.includes(piece.id)) && (
              <div className="text-green-500 font-bold text-lg py-4 w-full text-center">
                Complete! 🌟
              </div>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isFinished && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          >
            <div className="glass-panel p-6 sm:p-10 max-w-md w-full mx-4 text-center border-white/80 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-kid-pink/30 rounded-full blur-3xl pointer-events-none"></div>
              <div className="text-[4rem] sm:text-[6rem] mb-2 sm:mb-4 drop-shadow-md relative z-10">🖼️</div>
              <h2 className="text-3xl sm:text-5xl font-baloo font-black gradient-text mb-2 sm:mb-4 relative z-10">Masterpiece!</h2>
              <p className="text-lg sm:text-2xl font-bold text-slate-500 mb-6 sm:mb-8 font-nunito relative z-10">You solved the puzzle in <span className="text-kid-primary-dark font-baloo text-xl sm:text-3xl">{moves}</span> moves!</p>
              <button 
                onClick={() => navigate('/class-dashboard')}
                className="btn-chunky w-full text-xl sm:text-2xl py-4 sm:py-6 bg-gradient-to-b from-kid-green to-kid-green-dark shadow-[0_8px_16px_rgba(110,231,183,0.3),inset_0_4px_8px_rgba(255,255,255,0.4)] relative z-10"
              >
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

export default PuzzleGame;
