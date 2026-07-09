import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useKid } from '../contexts/KidContext';
import ConfettiEffect from '../components/common/ConfettiEffect';
import FunLoader from '../components/common/FunLoader';

const _envUrl = import.meta.env.VITE_API_BASE_URL;
const API_BASE_URL = _envUrl ? (_envUrl.endsWith('/api/v1') ? _envUrl : _envUrl.replace(/\/$/, '') + '/api/v1') : 'https://kid-s-backend.onrender.com/api/v1';

// Web Audio API for sound effects
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

// Data for the 12 drag and drop themes
const THEME_DATA = {
  'Color': {
    draggables: [ { id: 'r', content: '🍎' }, { id: 'b', content: '💧' }, { id: 'y', content: '☀️' }, { id: 'g', content: '🍃' } ],
    targets: [ { id: 'r', content: '🔴' }, { id: 'b', content: '🔵' }, { id: 'y', content: '🟡' }, { id: 'g', content: '🟢' } ]
  },
  'Animal Home': {
    draggables: [ { id: 'd', content: '🐶' }, { id: 'b', content: '🐦' }, { id: 'be', content: '🐝' }, { id: 's', content: '🕷️' } ],
    targets: [ { id: 'd', content: '🏠' }, { id: 'b', content: '🪹' }, { id: 'be', content: '🍯' }, { id: 's', content: '🕸️' } ]
  },
  'Number': {
    draggables: [ { id: '1', content: '1' }, { id: '2', content: '2' }, { id: '3', content: '3' }, { id: '4', content: '4' } ],
    targets: [ { id: '1', content: '1️⃣' }, { id: '2', content: '2️⃣' }, { id: '3', content: '3️⃣' }, { id: '4', content: '4️⃣' } ]
  },
  'Shape': {
    draggables: [ { id: 'c', content: '🔴' }, { id: 's', content: '🟦' }, { id: 't', content: '🔺' }, { id: 'st', content: '⭐' } ],
    targets: [ { id: 'c', content: '⭕' }, { id: 's', content: '🔲' }, { id: 't', content: '🔼' }, { id: 'st', content: '🌟' } ]
  },
  'Alphabet': {
    draggables: [ { id: 'a', content: 'a' }, { id: 'b', content: 'b' }, { id: 'c', content: 'c' }, { id: 'd', content: 'd' } ],
    targets: [ { id: 'a', content: 'A' }, { id: 'b', content: 'B' }, { id: 'c', content: 'C' }, { id: 'd', content: 'D' } ]
  },
  'Counting': {
    draggables: [ { id: '1', content: '1' }, { id: '2', content: '2' }, { id: '3', content: '3' }, { id: '4', content: '4' } ],
    targets: [ { id: '1', content: '🍎' }, { id: '2', content: '🍎🍎' }, { id: '3', content: '🍎🍎🍎' }, { id: '4', content: '🍎🍎🍎🍎' } ]
  },
  'Size': {
    draggables: [ { id: 'b', content: '🐘' }, { id: 's', content: '🐜' }, { id: 'b2', content: '🐳' }, { id: 's2', content: '🐞' } ],
    targets: [ { id: 'b', content: 'Big Box' }, { id: 's', content: 'Small Box' }, { id: 'b2', content: 'Big Box' }, { id: 's2', content: 'Small Box' } ]
  },
  'Missing Number': {
    draggables: [ { id: '3', content: '3' } ],
    targets: [ { id: '3', content: '1, 2, _, 4' } ]
  },
  'Addition': {
    draggables: [ { id: '5', content: '5' }, { id: '4', content: '4' }, { id: '6', content: '6' } ],
    targets: [ { id: '5', content: '2 + 3 =' } ]
  },
  'Word': {
    draggables: [ { id: 'c', content: 'CAT' }, { id: 'd', content: 'DOG' }, { id: 'p', content: 'PIG' } ],
    targets: [ { id: 'c', content: '🐱' }, { id: 'd', content: '🐶' }, { id: 'p', content: '🐷' } ]
  },
  'Vowel': {
    draggables: [ { id: 'a', content: 'A' }, { id: 'e', content: 'E' }, { id: 'o', content: 'O' } ],
    targets: [ { id: 'a', content: 'C _ T' }, { id: 'e', content: 'P _ N' }, { id: 'o', content: 'D _ G' } ]
  },
  'Category': {
    draggables: [ { id: 'f1', content: '🍎' }, { id: 'v1', content: '🚗' }, { id: 'f2', content: '🍌' }, { id: 'v2', content: '✈️' } ],
    targets: [ { id: 'f1', content: 'Fruits 🧺' }, { id: 'v1', content: 'Vehicles 🅿️' }, { id: 'f2', content: 'Fruits 🧺' }, { id: 'v2', content: 'Vehicles 🅿️' } ]
  }
};

const DragDropGame = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { selectedKid } = useKid();

  const [quiz, setQuiz] = useState(null);
  const [draggables, setDraggables] = useState([]);
  const [targets, setTargets] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]); // Array of draggable IDs
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
          initializeGame(found.title);
        } else {
          navigate('/class-dashboard');
        }
      } catch (err) {
        console.error("Error fetching quiz", err);
      }
    };

    fetchQuiz();
  }, [quizId, selectedKid, navigate]);

  const initializeGame = (title) => {
    let themeKey = 'Color';
    for (const key of Object.keys(THEME_DATA)) {
      if (title.includes(key)) {
        themeKey = key;
        break;
      }
    }
    
    const theme = THEME_DATA[themeKey];
    setDraggables([...theme.draggables].sort(() => Math.random() - 0.5));
    // Remove duplicates from targets for matching multiple items to one category (like Size or Category)
    const uniqueTargets = [];
    const seenContents = new Set();
    theme.targets.forEach(t => {
      if (!seenContents.has(t.content)) {
        seenContents.add(t.content);
        uniqueTargets.push({ ...t });
      }
    });
    setTargets([...uniqueTargets].sort(() => Math.random() - 0.5));
    setMatchedPairs([]);
    setMoves(0);
    setIsFinished(false);
  };

  const handleDragStart = (e, draggableId) => {
    e.dataTransfer.setData('text/plain', draggableId);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // allow drop
  };

  const handleDrop = (e, targetItem) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData('text/plain');
    setMoves(m => m + 1);

    // Some themes map multiple draggable IDs to the same target content.
    // E.g., 'Size' maps 'b' and 'b2' to 'Big Box'.
    // We check if the dragged item is supposed to go to this target by finding its target in the original THEME_DATA.
    let themeKey = 'Color';
    for (const key of Object.keys(THEME_DATA)) {
      if (quiz.title.includes(key)) { themeKey = key; break; }
    }
    
    const originalTarget = THEME_DATA[themeKey].targets.find(t => t.id === draggedId);
    
    if (originalTarget && originalTarget.content === targetItem.content) {
      playSound('correct');
      const newMatched = [...matchedPairs, draggedId];
      setMatchedPairs(newMatched);

      // Check win condition based on the number of correct draggables in this theme
      // Not all draggables need to be matched in some themes (like Addition where some are decoys)
      // Actually, for Addition, there is only 1 target and 3 draggables. Win condition is matching 1 item.
      const winCount = THEME_DATA[themeKey].targets.length; 
      
      if (newMatched.length === winCount) {
        handleWin(newMatched.length);
      }
    } else {
      playSound('wrong');
    }
  };

  const handleWin = async (winCount) => {
    setIsFinished(true);
    
    const baseScore = 15;
    const penalty = Math.max(0, moves - winCount);
    const finalScore = Math.max(5, baseScore - penalty * 2);
    
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

  if (!quiz) return <FunLoader message="Loading Game..." />;

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
            <h1 className="text-lg md:text-xl font-baloo font-black gradient-text">{quiz.title.replace('[DragDrop] ', '')}</h1>
            <p className="text-xs sm:text-sm font-bold text-slate-500 mt-0 font-nunito drop-shadow-sm">{quiz.description}</p>
          </div>
        </div>

        <div className="flex-1 min-h-0 flex flex-col md:flex-row gap-2 sm:gap-4 lg:gap-8 justify-center items-center md:items-stretch overflow-y-auto md:overflow-hidden pb-4 hide-scrollbar px-1">
          {/* Draggables (Items to drag) */}
          <div className="flex flex-wrap md:flex-col gap-2 sm:gap-4 glass-panel p-2 sm:p-4 border-white/60 w-full md:w-auto min-w-[150px] justify-center items-center overflow-y-auto hide-scrollbar">
            <h2 className="text-xl sm:text-2xl font-black font-baloo text-kid-primary-dark w-full text-center mb-1 drop-shadow-sm">Drag Me</h2>
          {draggables.map(item => {
            if (matchedPairs.includes(item.id)) return null;
            return (
              <div 
                key={item.id}
                draggable
                onDragStart={(e) => handleDragStart(e, item.id)}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-white/80 backdrop-blur-sm border-2 border-white rounded-xl sm:rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shadow-[0_4px_8px_rgba(0,0,0,0.1)] cursor-grab active:cursor-grabbing hover:scale-110 transition-transform hover:bg-white hover:shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
              >
                {item.content}
              </div>
            );
          })}
          {draggables.every(item => matchedPairs.includes(item.id)) && (
            <div className="text-green-500 font-bold text-lg py-4">All Done!</div>
          )}
        </div>

        {/* Drop Targets */}
        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center flex-1 overflow-y-auto hide-scrollbar items-center content-center">
          {targets.map((target, idx) => {
            // Find which items have been dropped in this target
            let themeKey = 'Color';
            for (const key of Object.keys(THEME_DATA)) {
              if (quiz.title.includes(key)) { themeKey = key; break; }
            }
            
            const itemsInThisTarget = matchedPairs.filter(id => {
              const originalTarget = THEME_DATA[themeKey].targets.find(t => t.id === id);
              return originalTarget && originalTarget.content === target.content;
            });

            return (
              <div 
                key={idx}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, target)}
                className="w-32 h-32 sm:w-48 sm:h-48 bg-white/40 backdrop-blur-sm border-[3px] sm:border-[4px] border-dashed border-white/60 rounded-3xl sm:rounded-[3rem] flex flex-col items-center justify-center p-2 sm:p-4 shadow-[inset_0_4px_12px_rgba(0,0,0,0.05)] relative transition-colors hover:bg-white/60 hover:border-kid-primary"
              >
                <div className="text-base sm:text-xl font-black font-baloo text-kid-primary-dark mb-1 sm:mb-2 whitespace-pre-wrap text-center drop-shadow-sm leading-tight">{target.content}</div>
                <div className="flex flex-wrap gap-1 sm:gap-2 justify-center w-full">
                  {itemsInThisTarget.map(id => {
                    const draggable = THEME_DATA[themeKey].draggables.find(d => d.id === id);
                    return (
                      <div key={id} className="text-2xl sm:text-3xl animate-bounce-slow">
                        {draggable.content}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-kid-yellow/30 rounded-full blur-3xl pointer-events-none"></div>
              <div className="text-[4rem] sm:text-[6rem] mb-2 sm:mb-4 drop-shadow-md relative z-10">🎉</div>
              <h2 className="text-3xl sm:text-5xl font-baloo font-black gradient-text mb-2 sm:mb-4 relative z-10">Great Job!</h2>
              <p className="text-lg sm:text-2xl font-bold text-slate-500 mb-6 sm:mb-8 font-nunito relative z-10">You matched them all!</p>
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

export default DragDropGame;
