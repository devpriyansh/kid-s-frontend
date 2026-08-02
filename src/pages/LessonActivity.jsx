import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useClass } from '../contexts/ClassContext';
import { useKid } from '../contexts/KidContext';
import { useReward } from '../contexts/RewardContext';
import { getClass } from '../data/curriculum';
import ConfettiEffect from '../components/common/ConfettiEffect';
import Mascot from '../components/common/Mascot';
import { useProgress } from '../hooks/useProgress';
import PopBalloon from '../components/games/PopBalloon';
import FeedMonkey from '../components/games/FeedMonkey';
import CatchStars from '../components/games/CatchStars';
import TracingCanvas from '../components/games/TracingCanvas';
import PracticeCarousel from '../components/games/PracticeCarousel';
import QuizCarousel from '../components/games/QuizCarousel';
import { ArrowRight, CheckCircle2, PlayCircle, Star, Coins, Volume2 } from 'lucide-react';

const LessonActivity = () => {
  const { moduleId, lessonIndex } = useParams();
  const { selectedClass } = useClass();
  const { selectedKid } = useKid();
  const navigate = useNavigate();
  const { addStars, addCoins } = useReward();
  const { markLessonComplete } = useProgress();
  const markedRef = useRef(false);

  // Safely get class data and module
  const classData = getClass(selectedClass);
  const allModules = Object.values(classData?.subjects || {}).flat();
  const module = allModules.find(m => m.id === moduleId);
  
  // Parse lessonIndex to number, default to 0 if invalid
  const index = parseInt(lessonIndex, 10);
  const validIndex = isNaN(index) ? 0 : index;
  const lesson = module?.lessons?.[validIndex];

  const [searchParams] = useSearchParams();
  const initialStep = parseInt(searchParams.get('step'), 10) || 0;
  const [step, setStep] = useState(initialStep);
  
  const goBackToHub = () => navigate(`/word-hub/${moduleId}/${validIndex}`);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const playAudio = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // stop any current speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.85; // slightly slower for kids
      utterance.pitch = 1.2; // kid friendly pitch
      window.speechSynthesis.speak(utterance);
    }
  };

  // Redirect if lesson is not found
  useEffect(() => {
    if (!lesson) {
      // Could redirect to dashboard with a message
      navigate('/class-dashboard');
    }
  }, [lesson, navigate]);

  // Mark lesson complete when reward step reached
  useEffect(() => {
    if (step === 6 && !markedRef.current && lesson) {
      markedRef.current = true;
      markLessonComplete(moduleId, validIndex);
    }
  }, [step, moduleId, validIndex, markLessonComplete, lesson]);

  if (!lesson) {
    return (
      <div className="text-center py-12">
        <p className="text-2xl">🔍 Lesson not found</p>
        <button onClick={() => navigate('/class-dashboard')} className="btn-primary mt-4">
          Back to Dashboard
        </button>
      </div>
    );
  }

  const handleQuizAnswer = (idx) => {
    setSelectedOption(idx);
    if (idx === lesson.quiz.answer) {
      addStars(2);
      addCoins(1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1500);
      setTimeout(() => setStep(6), 1000);
    } else {
      setSelectedOption(null); // allow retry
    }
  };

  const handleQuizCompletion = async () => {
    addStars(2);
    addCoins(1);

    // Submit to backend so it tracks in Recent Activity
    try {
      const token = localStorage.getItem('token');
      const _envUrl = import.meta.env.VITE_API_BASE_URL;
      const API_BASE_URL = _envUrl ? (_envUrl.endsWith('/api/v1') ? _envUrl : _envUrl.replace(/\/$/, '') + '/api/v1') : 'https://kid-s-backend.onrender.com/api/v1';
      
      const res = await fetch(`${API_BASE_URL}/quiz/list/${selectedKid?.age || 'nursery'}?t=${Date.now()}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const resData = await res.json();
      const allQuizzes = resData.data?.result?.quizzes || [];
      
      const matchTitle = `[Activity] ${lesson.letter ? 'Letter ' + lesson.letter : lesson.number ? 'Number ' + lesson.number : lesson.word}`;
      const dbQuiz = allQuizzes.find(q => q.title.toLowerCase() === matchTitle.toLowerCase());
      
      if (dbQuiz) {
        await fetch(`${API_BASE_URL}/quiz/submit`, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
          },
          body: JSON.stringify({
            childId: selectedKid.id,
            quizId: dbQuiz.id,
            score: 10,
            starsEarned: 2,
            coinsEarned: 1
          })
        });
      }
    } catch (err) {
      console.error("Failed to submit activity", err);
    }

    setStep(6);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center h-full text-center max-w-2xl mx-auto space-y-4 sm:space-y-8 pt-10 sm:pt-0">
            <div className="glass-panel p-4 sm:p-8 border-white/60 rounded-full">
              <Mascot className="w-24 h-24 sm:w-48 sm:h-48 animate-bounce-slow drop-shadow-md" />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-baloo font-black gradient-text drop-shadow-sm px-2">Let's Learn {module?.title || ''}!</h2>
            <p className="text-lg sm:text-2xl font-bold text-slate-600 glass-panel inline-block px-4 py-2 sm:px-8 sm:py-4 border-white/60 font-nunito mx-2">Today we'll learn about <span className="text-kid-primary-dark font-baloo">{lesson.letter || lesson.number || lesson.word || 'something new'}</span>!</p>
            <button onClick={goBackToHub} className="btn-chunky text-xl sm:text-3xl px-8 py-4 sm:px-12 sm:py-6 bg-gradient-to-b from-kid-green to-kid-green-dark shadow-[0_8px_16px_rgba(110,231,183,0.3),inset_0_4px_8px_rgba(255,255,255,0.4)] mt-4 sm:mt-8 flex items-center gap-2 sm:gap-3">
              Return to Hub <PlayCircle size={24} className="sm:w-9 sm:h-9 drop-shadow-sm" strokeWidth={3} />
            </button>
          </motion.div>
        );
      case 1:
        return (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center h-full text-center max-w-3xl mx-auto space-y-4 sm:space-y-8 pt-10 sm:pt-0">
            <div className="text-[6rem] sm:text-[12rem] md:text-[15rem] font-black font-baloo text-kid-primary-dark drop-shadow-xl glass-panel w-40 h-40 sm:w-72 sm:h-72 md:w-96 md:h-96 flex items-center justify-center rounded-[2rem] sm:rounded-[3rem] border-white/60 shadow-xl sm:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/40 blur-xl pointer-events-none"></div>
              <span className="relative z-10">{lesson.image || lesson.letter || lesson.number}</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-black font-baloo text-kid-primary-dark mt-4 sm:mt-8 glass-panel px-4 py-2 sm:px-8 sm:py-4 border-white/60 drop-shadow-sm mx-2">
              {lesson.letter ? `Letter ${lesson.letter}` : lesson.word || `Number ${lesson.number}`}
            </h3>
            <div className="flex gap-4 mt-6">
              <button onClick={() => playAudio(lesson.letter ? `${lesson.letter}. is for ${lesson.word}` : lesson.word)} className="btn-chunky text-xl sm:text-2xl px-6 py-3 bg-gradient-to-b from-kid-yellow to-kid-yellow-dark shadow-[0_8px_16px_rgba(250,204,21,0.3),inset_0_4px_8px_rgba(255,255,255,0.4)] flex items-center gap-2">
                <Volume2 size={24} strokeWidth={3} /> Listen
              </button>
              <button onClick={goBackToHub} className="btn-chunky text-xl sm:text-2xl px-6 py-3 bg-gradient-to-b from-kid-primary to-kid-primary-dark shadow-[0_8px_16px_rgba(59,130,246,0.3),inset_0_4px_8px_rgba(255,255,255,0.4)] flex items-center gap-2">
                Awesome! <CheckCircle2 size={24} strokeWidth={3} />
              </button>
            </div>
          </motion.div>
        );
      case 2:
        if (!lesson.examples || lesson.examples.length === 0) {
           goBackToHub();
           return null;
        }
        return (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center h-full text-center max-w-5xl mx-auto space-y-4 sm:space-y-8 pt-10 sm:pt-0">
             <h2 className="text-3xl sm:text-5xl md:text-6xl font-baloo font-black text-kid-primary-dark drop-shadow-sm">Look at these words!</h2>
             <div className="flex gap-4 sm:gap-8 justify-center flex-wrap px-4">
               {lesson.examples.map((ex, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 50 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.3 }}
                   onClick={() => playAudio(ex.word)}
                   className="glass-panel p-6 sm:p-10 border-white/60 flex flex-col items-center hover:scale-105 transition-transform cursor-pointer group"
                 >
                   <div className="text-[5rem] sm:text-[7rem] drop-shadow-xl animate-bounce-slow group-active:scale-95 transition-transform" style={{animationDelay: `${idx * 0.2}s`}}>{ex.image}</div>
                   <h3 className="text-2xl sm:text-4xl font-black font-baloo text-slate-700 mt-4">{ex.word}</h3>
                 </motion.div>
               ))}
             </div>
             <button onClick={goBackToHub} className="btn-chunky text-xl sm:text-2xl px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-b from-kid-green to-kid-green-dark shadow-[0_8px_16px_rgba(110,231,183,0.3),inset_0_4px_8px_rgba(255,255,255,0.4)] mt-4 sm:mt-8 flex items-center gap-2 sm:gap-3">
               Got it! <ArrowRight size={24} className="sm:w-8 sm:h-8 drop-shadow-sm" strokeWidth={3} />
             </button>
          </motion.div>
        );
      case 3:
        if (lesson.practice && lesson.practice.length > 0) {
          return (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center min-h-full w-full max-w-6xl mx-auto pt-10 sm:pt-4 relative z-10">
              <PracticeCarousel practiceConfig={lesson.practice} onFinishAll={goBackToHub} />
            </motion.div>
          );
        }
        return (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center h-full w-full max-w-3xl mx-auto pt-10 sm:pt-4">
            <p className="text-2xl sm:text-4xl font-black font-baloo text-kid-primary-dark mb-4 drop-shadow-sm">
              {lesson.trace ? 'Trace the letter!' : 'Let\'s practice!'}
            </p>
            {lesson.trace && (
              <TracingCanvas letter={lesson.letter} onComplete={goBackToHub} />
            )}
            {lesson.count && (
              <>
                <div className="text-3xl sm:text-5xl font-black font-baloo text-kid-primary-dark glass-panel px-6 py-4 sm:px-10 sm:py-6 border-white/60 drop-shadow-sm mx-2 mb-8">Count the {lesson.image}: <span className="text-kid-purple">{lesson.count}</span></div>
                <button onClick={goBackToHub} className="btn-chunky text-xl sm:text-2xl px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-b from-kid-secondary to-kid-secondary-dark shadow-[0_8px_16px_rgba(244,63,94,0.3),inset_0_4px_8px_rgba(255,255,255,0.4)] flex items-center gap-2 sm:gap-3">
                  Done <CheckCircle2 size={24} className="sm:w-8 sm:h-8 drop-shadow-sm" strokeWidth={3} />
                </button>
              </>
            )}
          </motion.div>
        );
      case 4:
        if (lesson.games && lesson.games.length > 0) {
          return (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center min-h-full w-full max-w-6xl mx-auto pt-10 sm:pt-4 relative z-10">
              <PracticeCarousel practiceConfig={lesson.games} onFinishAll={goBackToHub} />
            </motion.div>
          );
        }
        if (!lesson.game) {
          goBackToHub();
          return null;
        }
        const GameComponent = 
          lesson.game.type === 'pop-balloon' ? PopBalloon :
          lesson.game.type === 'feed-monkey' ? FeedMonkey :
          lesson.game.type === 'catch-stars' ? CatchStars :
          null;

        if (!GameComponent) {
          goBackToHub();
          return null;
        }

        return (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center h-full w-full max-w-5xl mx-auto pt-12 sm:pt-4">
            <h2 className="text-2xl sm:text-4xl font-black font-baloo text-kid-primary-dark mb-2 sm:mb-8 drop-shadow-sm">Time to Play!</h2>
            <div className="w-full flex-1 min-h-0 glass-panel border-[3px] sm:border-[6px] border-white/60 shadow-2xl overflow-hidden p-2 sm:p-4 relative flex flex-col mx-2 sm:mx-0">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-0 pointer-events-none"></div>
              <div className="relative z-10 flex-1 h-full w-full">
              <GameComponent
                correctAnswer={lesson.game.target}
                onComplete={goBackToHub}
                onWrong={() => {}}
              />
              </div>
            </div>
          </motion.div>
        );
      case 5:
        if (lesson.quizzes && lesson.quizzes.length > 0) {
          return (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center min-h-full w-full max-w-6xl mx-auto pt-10 sm:pt-4 relative z-10">
              <QuizCarousel quizzes={lesson.quizzes} onFinishAll={handleQuizCompletion} />
            </motion.div>
          );
        }
        
        // Fallback for old single quiz logic just in case
        return (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center min-h-full text-center max-w-4xl mx-auto space-y-4 sm:space-y-8 pt-10 sm:pt-0">
            <div className="glass-panel px-4 py-2 sm:px-8 sm:py-4 inline-block border-white/60 mb-2 sm:mb-4">
              <p className="text-xl sm:text-3xl font-black font-baloo text-kid-primary-dark flex items-center gap-2 sm:gap-3 drop-shadow-sm"><Star size={24} className="sm:w-9 sm:h-9 fill-kid-yellow text-kid-yellow-dark drop-shadow-sm"/> Quick Quiz!</p>
            </div>
            <p className="text-2xl sm:text-4xl md:text-5xl font-baloo font-black text-slate-700 px-4">{lesson.quiz?.question}</p>
            <div className="flex gap-2 sm:gap-6 justify-center mt-4 sm:mt-12 flex-wrap w-full px-2">
              {lesson.quiz?.options.map((opt, idx) => (
                <motion.button 
                  key={idx} 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQuizAnswer(idx)} 
                  className={`px-6 py-4 sm:px-10 sm:py-8 text-2xl sm:text-4xl font-black font-baloo rounded-xl sm:rounded-[2rem] border-[3px] sm:border-[4px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] active:shadow-none active:translate-y-1 sm:active:translate-y-2 transition-all backdrop-blur-sm ${
                    selectedOption === idx && idx !== lesson.quiz.answer
                      ? 'bg-red-100/80 border-red-300 text-red-700 opacity-50'
                      : 'bg-white/80 border-white text-kid-primary-dark hover:bg-white'
                  }`}
                >
                  {opt}
                </motion.button>
              ))}
            </div>
          </motion.div>
        );
      case 6:
        return (
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center h-full text-center max-w-2xl mx-auto space-y-4 sm:space-y-8 pt-10 sm:pt-0">
            {showConfetti && <ConfettiEffect />}
            <div className="text-[5rem] sm:text-[8rem] glass-panel w-32 h-32 sm:w-64 sm:h-64 flex items-center justify-center rounded-full border-white/80 shadow-2xl mb-4 sm:mb-8 animate-bounce-slow relative overflow-hidden">
              <div className="absolute inset-0 bg-kid-yellow/30 blur-2xl z-0"></div>
              <span className="relative z-10 drop-shadow-md">🎉</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-baloo font-black gradient-text">Great Job!</h2>
            <div className="flex items-center gap-4 sm:gap-6 glass-panel px-6 py-4 sm:px-10 sm:py-6 border-white/60">
              <span className="text-xl sm:text-3xl font-black font-baloo flex items-center gap-1 sm:gap-2 text-kid-yellow-dark"><Star size={24} className="sm:w-10 sm:h-10 fill-kid-yellow drop-shadow-sm"/> +2</span>
              <span className="text-xl sm:text-3xl font-black font-baloo flex items-center gap-1 sm:gap-2 text-kid-primary-dark"><Coins size={24} className="sm:w-10 sm:h-10 fill-kid-primary drop-shadow-sm"/> +1</span>
            </div>
            <button onClick={goBackToHub} className="btn-chunky text-xl sm:text-2xl px-8 py-4 sm:px-12 sm:py-6 bg-gradient-to-b from-kid-green to-kid-green-dark shadow-[0_8px_16px_rgba(110,231,183,0.3),inset_0_4px_8px_rgba(255,255,255,0.4)] mt-4 sm:mt-8">
              Back to Word Hub
            </button>
          </motion.div>
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="absolute inset-0 z-50 bg-kid-bg flex flex-col items-center justify-center p-4 overflow-y-auto overflow-x-hidden">
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
        onClick={goBackToHub}
        className="absolute top-4 left-4 z-[60] bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] font-bold text-slate-600 flex items-center gap-2 border-2 border-slate-200 hover:bg-white transition-colors"
      >
        ⬅️ <span className="hidden sm:inline">Back</span>
      </button>

      <AnimatePresence mode="wait">
        <motion.div 
          key={step}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-full h-full flex-1 z-10"
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LessonActivity;