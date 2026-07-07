import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useKid } from '../../contexts/KidContext';
import { useReward } from '../../contexts/RewardContext';
import ModuleCard from '../../components/kid/ModuleCard';
import Mascot from '../../components/common/Mascot';

const KidHome = () => {
  const { selectedKid } = useKid();

  // Mock modules – in real app, fetch from API
  const modules = [
    { id: 'alphabet', title: '🔤 Alphabets', icon: 'A', color: 'from-red-400 to-pink-500' },
    { id: 'numbers', title: '🔢 Numbers', icon: '1', color: 'from-blue-400 to-cyan-500' },
    { id: 'shapes', title: '🔺 Shapes', icon: '⬛', color: 'from-yellow-400 to-orange-500' },
    { id: 'colors', title: '🎨 Colors', icon: '🌈', color: 'from-purple-400 to-pink-500' },
    { id: 'animals', title: '🐘 Animals', icon: '🐘', color: 'from-green-400 to-teal-500' },
    { id: 'birds', title: '🐦 Birds', icon: '🐦', color: 'from-indigo-400 to-blue-500' },
    { id: 'fruits', title: '🍎 Fruits', icon: '🍎', color: 'from-red-400 to-orange-500' },
    { id: 'vegetables', title: '🥕 Vegetables', icon: '🥕', color: 'from-green-400 to-lime-500' },
    { id: 'vehicles', title: '🚗 Vehicles', icon: '🚗', color: 'from-blue-400 to-purple-500' },
    { id: 'rhymes', title: '🎵 Rhymes', icon: '🎵', color: 'from-pink-400 to-rose-500' },
    { id: 'stories', title: '📖 Stories', icon: '📖', color: 'from-yellow-400 to-amber-500' },
    { id: 'drawing', title: '✏️ Drawing', icon: '✏️', color: 'from-purple-400 to-indigo-500' },
    { id: 'tracing', title: '✍️ Tracing', icon: '✍️', color: 'from-cyan-400 to-blue-500' },
    { id: 'puzzles', title: '🧩 Puzzles', icon: '🧩', color: 'from-green-400 to-emerald-500' },
    { id: 'matching', title: '🔗 Matching', icon: '🔗', color: 'from-orange-400 to-red-500' },
    { id: 'memory', title: '🧠 Memory', icon: '🧠', color: 'from-pink-400 to-purple-500' },
    { id: 'quizzes', title: '❓ Quizzes', icon: '❓', color: 'from-red-400 to-yellow-500' },
  ];

  if (!selectedKid) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Please select a child first</h2>
        <Link to="/child-profiles" className="btn-primary mt-4 inline-block">Go to Profiles</Link>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex items-center gap-4 flex-wrap">
        <Mascot className="w-16 h-16" />
        <div>
          <h1 className="text-3xl font-fredoka font-bold">Hello, {selectedKid.name}! 👋</h1>
          <p className="text-gray-600">Level {selectedKid.level || 1} • ⭐ {selectedKid.stars || 0} stars • 🪙 {selectedKid.coins || 0} coins</p>
        </div>
        <div className="ml-auto flex gap-2">
          <Link to="/rewards" className="bg-kid-yellow/50 p-3 rounded-full text-2xl shadow-md">🏆</Link>
          <Link to="/progress" className="bg-kid-purple/20 p-3 rounded-full text-2xl shadow-md">📊</Link>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {modules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
    </motion.div>
  );
};

export default KidHome;