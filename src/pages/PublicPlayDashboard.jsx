import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useKid } from '../contexts/KidContext';
import { useClass } from '../contexts/ClassContext';
import Mascot from '../components/common/Mascot';
import GuestUnlockModal from '../components/common/GuestUnlockModal';
import { PlayCircle, Lock, ArrowLeft, ArrowRight, Star, Sparkles, Gift } from 'lucide-react';

const FREE_GAMES = [
  {
    id: 'coloring',
    title: 'Coloring Book',
    description: 'Color, draw, and paint cute pictures!',
    icon: '🎨',
    path: '/coloring',
    colorClass: 'from-pink-400 via-rose-400 to-pink-500',
    badge: 'Play Free 🌟'
  },
  {
    id: 'memory',
    title: 'Memory Match',
    description: 'Match cards and train your mind!',
    icon: '🧠',
    path: '/memory/guest',
    colorClass: 'from-cyan-400 via-blue-400 to-indigo-500',
    badge: 'Brain Fun 🧠'
  },
  {
    id: 'dragdrop',
    title: 'Drag & Drop',
    description: 'Sort animals to their correct homes!',
    icon: '🖐️',
    path: '/dragdrop/guest',
    colorClass: 'from-emerald-400 via-teal-400 to-green-500',
    badge: 'Sort Game 🎈'
  },
  {
    id: 'puzzle',
    title: 'Puzzle Magic',
    description: 'Drag and solve animal jigsaw blocks!',
    icon: '🧩',
    path: '/puzzle/guest',
    colorClass: 'from-amber-400 via-orange-400 to-red-500',
    badge: 'Puzzle Art 🎨'
  }
];

const LOCKED_GAMES = [
  { id: 'sorting', title: 'Rainbow Sort', icon: '🌈', color: 'from-purple-200 to-indigo-200' },
  { id: 'letter', title: 'Letter Builder', icon: '✍️', color: 'from-blue-200 to-sky-200' },
  { id: 'fishing', title: 'Fish Count', icon: '🐟', color: 'from-teal-200 to-cyan-200' },
  { id: 'shadow', title: 'Shadow Match', icon: '👥', color: 'from-emerald-200 to-green-200' },
  { id: 'story', title: 'Story Builder', icon: '📖', color: 'from-yellow-200 to-amber-200' },
  { id: 'quizzes', title: 'Fun Quizzes', icon: '❓', color: 'from-rose-200 to-pink-200' }
];

const PublicPlayDashboard = () => {
  const { user } = useAuth();
  const { selectedKid } = useKid();
  const { selectedClass } = useClass();
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLockTitle, setSelectedLockTitle] = useState("Unlock All Games! 🚀");

  useEffect(() => {
    if (user) {
      if (!selectedKid) navigate('/child-profiles');
      else if (!selectedClass) navigate('/class-selection');
      else navigate('/class-dashboard');
    }
  }, [user, selectedKid, selectedClass, navigate]);

  const handleLockedClick = (title) => {
    setSelectedLockTitle(`Unlock ${title}! 🚀`);
    setModalOpen(true);
  };

  return (
    <div className="h-full w-full bg-transparent relative overflow-hidden flex flex-col">
      <GuestUnlockModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedLockTitle}
      />

      <div className="h-full w-full flex flex-col z-10 overflow-y-auto hide-scrollbar">
        {/* Navigation Bar */}
        <div className="flex-none flex items-center justify-between p-4 md:px-8 border-white/40 backdrop-blur-md sticky top-0 z-50">
          <button
            onClick={() => navigate('/')}
            className="p-2 sm:px-4 sm:py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-800 font-bold transition shadow-sm active:scale-95 flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} strokeWidth={2.5} />
            <span className="hidden sm:inline">Back</span>
          </button>

          <div className="flex gap-3">
            <button
              onClick={() => navigate('/login')}
              className="px-4 py-2 bg-white text-kid-primary-dark font-baloo font-bold rounded-xl shadow-sm hover:shadow transition transform active:scale-95 text-sm sm:text-base"
            >
              Log In
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="px-4 py-2 bg-gradient-to-r from-kid-primary to-kid-purple text-white font-baloo font-black rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition transform active:scale-95 text-sm sm:text-base flex items-center gap-1"
            >
              <Sparkles size={16} /> Sign Up Free
            </button>
          </div>
        </div>

        <div className="flex-1 max-w-[1200px] mx-auto w-full p-4 sm:p-6 md:p-8 flex flex-col gap-8 md:gap-12 pb-16">

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-4 md:mt-8 flex flex-col items-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', bounce: 0.5, delay: 0.2 }}
              className="bg-white/80 p-3 rounded-2xl shadow-sm inline-block mb-4"
            >
              <Mascot className="w-16 h-16 md:w-20 md:h-20" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-black font-baloo text-transparent bg-clip-text bg-gradient-to-r from-kid-primary via-kid-purple to-pink-500 drop-shadow-sm mb-4 leading-tight">
              Welcome to KidsPlay Zone!
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 font-nunito font-bold max-w-2xl mx-auto">
              Try our free sandbox games below! Ready for more? Sign up to unlock <span className="text-kid-primary font-black">50+ magical levels</span>, earn rewards, and meet your AI tutor!
            </p>
          </motion.div>

          {/* Playable Free Games */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-baloo font-black text-slate-800 flex items-center gap-3">
                <Gift className="text-pink-500" size={32} /> Play Sandbox (Free)
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FREE_GAMES.map((game, i) => (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(game.path)}
                  className={`relative bg-gradient-to-br ${game.colorClass} rounded-[2rem] overflow-hidden cursor-pointer group flex flex-col p-6 h-[280px] shadow-lg hover:shadow-2xl transition-all duration-300`}
                >
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>

                  {/* Floating Elements */}
                  <div className="absolute top-[-20%] left-[-20%] w-32 h-32 rounded-full bg-white/20 blur-xl group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="flex justify-between items-start z-10 mb-auto">
                    <span className="px-3 py-1 bg-white/30 backdrop-blur-md rounded-full text-xs font-black text-white uppercase border border-white/40 shadow-sm">
                      {game.badge}
                    </span>
                  </div>

                  <div className="flex-1 flex items-center justify-center z-10 relative mt-4 mb-4">
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                      className="text-7xl md:text-8xl drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-300 select-none"
                    >
                      {game.icon}
                    </motion.div>
                  </div>

                  <div className="z-10 text-center text-white mt-auto">
                    <h3 className="text-xl md:text-2xl font-black font-baloo drop-shadow-md mb-1">
                      {game.title}
                    </h3>
                    <p className="text-xs md:text-sm font-bold opacity-90 drop-shadow-sm">
                      {game.description}
                    </p>
                  </div>

                  {/* Overlay Play Button */}
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
                    <div className="bg-white text-kid-primary-dark rounded-full px-6 py-3 font-black text-lg shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <PlayCircle size={24} className="fill-kid-primary text-white" />
                      PLAY NOW!
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Unlock Premium Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/60 backdrop-blur-lg rounded-[2.5rem] p-6 md:p-8 border-2 border-white shadow-xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-baloo font-black text-slate-800 flex items-center gap-3">
                  <Star className="text-amber-500 fill-amber-500" size={32} />
                  Unlock Premium Games
                </h2>
                <p className="text-slate-500 font-bold font-nunito mt-1 text-sm md:text-base">
                  Sign up to access these and 40+ more exciting educational adventures!
                </p>
              </div>
              <button
                onClick={() => navigate('/signup')}
                className="btn-primary py-3 px-8 text-lg shrink-0 w-full md:w-auto hover:scale-105 shadow-lg flex items-center justify-center gap-2 animate-bounce-slow"
              >
                Unlock Everything! <ArrowRight size={20} strokeWidth={3} />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {LOCKED_GAMES.map((game, i) => (
                <motion.div
                  key={game.id}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleLockedClick(game.title)}
                  className={`relative bg-gradient-to-br ${game.color} rounded-2xl overflow-hidden cursor-pointer group flex flex-col items-center justify-center p-4 h-[160px] border-2 border-white shadow-md hover:shadow-xl transition-all duration-300`}
                >
                  <div className="absolute top-3 right-3 bg-white/80 text-slate-600 p-1.5 rounded-full shadow-sm z-30 group-hover:bg-kid-primary group-hover:text-white transition-colors">
                    <Lock size={14} strokeWidth={3} />
                  </div>

                  <div className="text-5xl drop-shadow-sm select-none group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 mb-3 opacity-80 group-hover:opacity-100">
                    {game.icon}
                  </div>

                  <h3 className="text-sm font-black font-baloo text-slate-700 text-center">
                    {game.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default PublicPlayDashboard;
