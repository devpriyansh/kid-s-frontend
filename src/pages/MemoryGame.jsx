import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useKid } from '../contexts/KidContext';
import { useQueryClient } from 'react-query';
import ConfettiEffect from '../components/common/ConfettiEffect';
import { GameSkeleton } from '../components/common/Skeletons';

const _envUrl = import.meta.env.VITE_API_BASE_URL;
const API_BASE_URL = _envUrl ? (_envUrl.endsWith('/api/v1') ? _envUrl : _envUrl.replace(/\/$/, '') + '/api/v1') : 'https://kid-s-backend.onrender.com/api/v1';

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
  'Cloth': ['👕', '👖', '👗', '👟', '👒', '🧤'],
  // 15 New Themes
  'Tool': ['🔨', '🔧', '🪛', '🪚', '⛏️', '🧲'],
  'Profession': ['👮', '👨‍🚒', '👩‍⚕️', '👨‍🍳', '👷‍♂️', '👩‍🚀'],
  'Furniture': ['🪑', '🛏️', '🛋️', '🚪', '🪞', '🚽'],
  'Stationery': ['✏️', '🖍️', '🖊️', '📏', '✂️', '📓'],
  'Flower': ['🌹', '🌻', '🌷', '🪷', '🌺', '🌸'],
  'Kitchenware': ['🍴', '🥄', '🔪', '🥣', '🍽️', '🥢'],
  'Toy': ['🧸', '🪀', '🪁', '🧩', '🎮', '🎲'],
  'Wild Animal': ['🦁', '🐯', '🐘', '🦍', '🦓', '🦒'],
  'Ocean Life': ['🐬', '🐳', '🦈', '🐙', '🐢', '🦑'],
  'Bird': ['🦅', '🦉', '🦜', '🦚', '🦢', '🦩'],
  'Number': ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣'],
  'Letter': ['🅰️', '🅱️', '🅾️', '🆎', '🔠', '🔡'],
  'Planet': ['🪐', '🌑', '🌕', '🌓', '☄️', '🌌'],
  'Appliance': ['📺', '💻', '📱', '📻', '📸', '☎️'],
  'Fast Food': ['🍔', '🍕', '🌭', '🍟', '🌮', '🍿']
};

const MemoryGame = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { selectedKid } = useKid();
  const queryClient = useQueryClient();

  const [quiz, setQuiz] = useState(null);
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const isGuest = !selectedKid || quizId === 'guest';

  useEffect(() => {
    if (isGuest) {
      setQuiz({
        id: 'guest',
        title: '[Memory] Animal Memory Match',
        class_level: 'nursery'
      });
      initializeGame('Animal');
      return;
    }

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
  }, [quizId, selectedKid, navigate, isGuest]);

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

    if (isGuest) {
      // In guest mode, do not submit to backend.
      return;
    }

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
      queryClient.invalidateQueries('dashboard');
    } catch (err) {
      console.error("Failed to submit memory game result", err);
    }
  };

  if (!quiz) return <GameSkeleton />;

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
        onClick={() => navigate(selectedKid ? '/class-dashboard' : '/play')}
        className="absolute top-4 left-4 z-[60] bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] font-bold text-slate-600 flex items-center gap-2 border-2 border-slate-200 hover:bg-white transition-colors"
      >
        ⬅️ <span className="hidden sm:inline">Back</span>
      </button>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full flex flex-col max-w-4xl mx-auto p-2 z-10 pt-14 sm:pt-2">
        {isFinished && <ConfettiEffect />}
        
        <div className="flex-none text-center mb-2 mt-0 sm:ml-24">
          <div className="glass-panel px-4 py-1 sm:px-6 sm:py-2 inline-block border-white/60">
            <h1 className="text-lg md:text-xl font-baloo font-black gradient-text">{quiz.title.replace('[Memory] ', '')}</h1>
            <p className="text-sm sm:text-base font-bold text-slate-500 mt-0 font-nunito drop-shadow-sm">Moves: {moves}</p>
          </div>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto hide-scrollbar pb-4 px-1 content-center">
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-2 md:gap-4 justify-center w-full max-w-[400px] sm:max-w-xl mx-auto">
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
                {/* Back of card (Cover) */}
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-kid-primary to-kid-primary-dark border-2 border-white/60 rounded-xl sm:rounded-2xl shadow-[0_4px_8px_rgba(59,130,246,0.3),inset_0_2px_4px_rgba(255,255,255,0.4)] flex items-center justify-center overflow-hidden">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/20 rounded-full blur-sm absolute top-1 right-1"></div>
                  <span className="text-white text-3xl sm:text-4xl font-black font-baloo opacity-80 drop-shadow-sm">?</span>
                </div>
                
                {/* Front of card (Emoji) */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.8)] border border-white flex items-center justify-center text-3xl sm:text-[3rem] drop-shadow-md">
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
            <div className="glass-panel p-6 sm:p-10 max-w-md w-full mx-4 text-center border-white/80 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-kid-yellow/30 rounded-full blur-3xl pointer-events-none"></div>
              <div className="text-[4rem] sm:text-[6rem] mb-2 sm:mb-4 drop-shadow-md relative z-10">🏆</div>
              <h2 className="text-3xl sm:text-5xl font-baloo font-black gradient-text mb-2 sm:mb-4 relative z-10">You Did It!</h2>
              <p className="text-lg sm:text-2xl font-bold text-slate-500 mb-6 sm:mb-8 font-nunito relative z-10">Matched all pairs in <span className="text-kid-primary-dark font-baloo text-xl sm:text-3xl">{moves}</span> moves!</p>
              <div className="flex flex-col gap-3 w-full relative z-10">
                {isGuest ? (
                  <>
                    <button 
                      onClick={() => navigate('/signup')}
                      className="btn-primary w-full text-xl py-3"
                    >
                      Sign Up For Free
                    </button>
                    <button 
                      onClick={() => navigate('/play')}
                      className="btn-secondary w-full text-xl py-3"
                    >
                      Try Another Game
                    </button>
                    <button 
                      onClick={() => {
                        initializeGame('Animal');
                      }}
                      className="text-slate-500 font-bold hover:text-slate-700 transition-colors py-1"
                    >
                      Play Again
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => navigate('/class-dashboard')}
                    className="btn-chunky w-full text-xl sm:text-2xl py-4 sm:py-6 bg-gradient-to-b from-kid-green to-kid-green-dark shadow-[0_8px_16px_rgba(110,231,183,0.3),inset_0_4px_8px_rgba(255,255,255,0.4)]"
                  >
                    Back to Dashboard
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.div>

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
    </div>
  );
};

export default MemoryGame;
