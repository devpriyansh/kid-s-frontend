import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useKid } from '../contexts/KidContext';
import ConfettiEffect from '../components/common/ConfettiEffect';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1';

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

  if (!quiz) return <div className="text-center py-20 text-2xl font-bold">Loading Puzzle...</div>;

  const bgSize = `${gridSize * 100}% ${gridSize * 100}%`;
  
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-[100dvh] overflow-hidden flex flex-col max-w-6xl mx-auto p-4">
      {isFinished && <ConfettiEffect />}
      
      <div className="flex-none text-center mb-4">
        <h1 className="text-3xl md:text-4xl font-fredoka font-bold gradient-text">{quiz.title.replace('[Puzzle] ', '')}</h1>
        <p className="text-lg text-gray-600 mt-1">{quiz.description}</p>
        <p className="text-md font-bold text-kid-purple mt-1">Moves: {moves}</p>
      </div>

      <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-4 md:gap-8 justify-center items-center lg:items-stretch overflow-y-auto lg:overflow-hidden pb-4 hide-scrollbar">
        
        {/* Reference Image Thumbnail */}
        <div className="flex flex-col items-center">
          <p className="font-bold text-gray-500 mb-2 text-xl">Reference</p>
          <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-4 border-white shadow-lg pointer-events-none">
            <img src={quiz.image_url} alt="Reference" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Main Puzzle Grid */}
        <div className="flex-1 w-full max-w-[400px] bg-white/50 p-4 rounded-3xl shadow-xl border-4 border-kid-secondary/30 flex flex-col justify-center">
          <div
            className="grid gap-1 bg-white border-4 border-gray-300 rounded-lg p-1 w-full shadow-md"
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
                    className={`relative w-full aspect-square bg-white rounded-sm shadow-inner overflow-hidden ${isPlaced ? '' : 'ring-2 ring-inset ring-gray-200 hover:bg-gray-50'}`}
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
        <div className="bg-white p-4 rounded-3xl shadow-xl border-4 border-kid-pink/30 w-full lg:w-48 xl:w-56 flex flex-col items-center overflow-y-auto hide-scrollbar">
          <h2 className="text-xl font-bold text-gray-700 w-full text-center mb-4">Pieces</h2>
          <div className="flex flex-row lg:flex-col flex-wrap gap-4 justify-center items-center pb-4">
            {pieces.map(piece => {
              if (placedPieces.includes(piece.id)) return null;
              
              const bgPosition = gridSize === 1 ? '0% 0%' : `${(piece.col / (gridSize - 1)) * 100}% ${(piece.row / (gridSize - 1)) * 100}%`;
              
              return (
                <div 
                  key={piece.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, piece.id)}
                  className="w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-md shadow-lg cursor-grab active:cursor-grabbing hover:scale-105 transition-transform"
                  style={{
                    backgroundImage: `url(${quiz.image_url})`,
                    backgroundSize: bgSize,
                    backgroundPosition: bgPosition,
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), inset 0 0 0 2px rgba(255,255,255,0.8)'
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
            <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 text-center shadow-2xl border-4 border-kid-primary">
              <div className="text-8xl mb-4">🖼️</div>
              <h2 className="text-4xl font-fredoka font-bold gradient-text mb-4">Masterpiece!</h2>
              <p className="text-xl text-gray-700 mb-6">You solved the puzzle in {moves} moves!</p>
              <button 
                onClick={() => navigate('/class-dashboard')}
                className="btn-primary w-full text-2xl py-4"
              >
                Back to Dashboard
              </button>
            </div>
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

export default PuzzleGame;
