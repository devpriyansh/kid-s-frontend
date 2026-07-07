import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useKid } from '../contexts/KidContext';
import ConfettiEffect from '../components/common/ConfettiEffect';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://kid-s-backend.onrender.com/api/v1';

// Emoji sets for different game themes mapped by keywords in title
const THEMES = {
  'Animal': ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊'],
  'Shape': ['🔴', '🔵', '🟡', '🟩', '🟢', '🟣'],
  'Vehicle': ['🚗', '✈️', '🚢', '🚂', '🚜', '🚁'],
  'Fruit': ['🍎', '🍌', '🍉', '🍇', '🍓', '🍒'],
  'Vegetable': ['🥕', '🥦', '🌽', '🍅', '🍆', '🥔'],
  'Emotion': ['😃', '😢', '😡', '😴', '🥳', '🤯'],
  'Space': ['🚀', '🛸', '🌍', '🌙', '⭐', '☀️'],
  'Weather': ['☀️', '🌧️', '❄️', '🌩️', '🌈', '🌬️'],
  'Sport': ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐'],
  'Music': ['🎵', '🎸', '🎹', '🥁', '🎺', '🎻'],
  'Bug': ['🐛', '🦋', '🐝', '🐞', '🐜', '🕷️'],
  'Cloth': ['👕', '👖', '👗', '👟', '👒', '🧤']
};

const MemoryGame = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { selectedKid } = useKid();

  const [quiz, setQuiz] = useState(null);
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
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
    let theme = THEMES['Animal']; // fallback
    for (const [key, emojis] of Object.entries(THEMES)) {
      if (title.includes(key)) {
        theme = emojis;
        break;
      }
    }
    
    // Create pairs and shuffle
    const deck = [...theme, ...theme]
      .sort(() => Math.random() - 0.5)
      .map((content, index) => ({ id: index, content }));
    
    setCards(deck);
    setFlippedIndices([]);
    setMatchedPairs([]);
    setMoves(0);
    setIsFinished(false);
  };

  const handleCardClick = (index) => {
    if (isLocked) return;
    if (flippedIndices.includes(index) || matchedPairs.includes(cards[index].content)) return;

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      setIsLocked(true);
      setMoves(m => m + 1);

      const [firstIndex, secondIndex] = newFlipped;
      if (cards[firstIndex].content === cards[secondIndex].content) {
        // Match!
        const newMatched = [...matchedPairs, cards[firstIndex].content];
        setMatchedPairs(newMatched);
        setFlippedIndices([]);
        setIsLocked(false);

        // Check win condition
        if (newMatched.length === cards.length / 2) {
          handleWin();
        }
      } else {
        // No match
        setTimeout(() => {
          setFlippedIndices([]);
          setIsLocked(false);
        }, 1000);
      }
    }
  };

  const handleWin = async () => {
    setIsFinished(true);
    
    // Calculate rewards (better score for fewer moves)
    const baseScore = 10;
    const penalty = Math.max(0, moves - 6); // Perfect is 6 moves
    const finalScore = Math.max(1, baseScore - penalty);
    
    const starsEarned = finalScore * 2;
    const coinsEarned = finalScore * 1;

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
          starsEarned,
          coinsEarned
        })
      });
    } catch (err) {
      console.error("Failed to submit memory game result", err);
    }
  };

  if (!quiz) return <div className="text-center py-20 text-2xl font-bold">Loading Game...</div>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-[100dvh] overflow-hidden flex flex-col max-w-4xl mx-auto p-4">
      {isFinished && <ConfettiEffect />}
      
      <div className="flex-none text-center mb-4">
        <h1 className="text-3xl md:text-4xl font-fredoka font-bold gradient-text">{quiz.title.replace('[Memory] ', '')}</h1>
        <p className="text-lg text-gray-600 mt-1">Moves: {moves}</p>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto hide-scrollbar pb-4 px-2 content-center">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 md:gap-6 justify-center w-full max-w-2xl mx-auto">
        {cards.map((card, index) => {
          const isFlipped = flippedIndices.includes(index) || matchedPairs.includes(card.content);
          
          return (
            <div 
              key={card.id}
              onClick={() => handleCardClick(index)}
              className="relative w-full aspect-[3/4] cursor-pointer perspective-1000"
            >
              <motion.div
                className="w-full h-full absolute preserve-3d"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Back of card (Red cover) */}
                <div className="absolute inset-0 backface-hidden bg-red-500 rounded-xl shadow-md border-4 border-white/20 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full blur-md absolute"></div>
                  <span className="text-white text-4xl opacity-50">?</span>
                </div>
                
                {/* Front of card (Emoji) */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-xl shadow-lg border-4 border-kid-purple flex items-center justify-center text-6xl">
                  {card.content}
                </div>
              </motion.div>
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
            <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 text-center shadow-2xl border-4 border-kid-yellow">
              <div className="text-8xl mb-4">🏆</div>
              <h2 className="text-4xl font-fredoka font-bold gradient-text mb-4">You Did It!</h2>
              <p className="text-xl text-gray-700 mb-6">Matched all pairs in {moves} moves!</p>
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

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
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

export default MemoryGame;
