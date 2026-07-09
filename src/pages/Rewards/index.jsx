import React from 'react';
import { motion } from 'framer-motion';
import { useKid } from '../../contexts/KidContext';
import { Link } from 'react-router-dom';
import ProgressRing from '../../components/common/ProgressRing';

const Rewards = () => {
  const { selectedKid } = useKid();
  
  if (!selectedKid) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Please select a child first</h2>
        <Link to="/child-profiles" className="btn-primary mt-4 inline-block">Go to Profiles</Link>
      </div>
    );
  }

  const xp = (selectedKid.stars || 0) * 10 + (selectedKid.coins || 0) * 5;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full overflow-y-auto hide-scrollbar space-y-6 pb-10">
      <h1 className="text-4xl font-fredoka font-bold gradient-text">🏆 Rewards</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 text-center">
          <div className="text-5xl">⭐</div>
          <div className="text-3xl font-bold">{selectedKid.stars || 0}</div>
          <p className="text-gray-600">Stars Earned</p>
        </div>
        <div className="glass-card p-6 text-center">
          <div className="text-5xl">🪙</div>
          <div className="text-3xl font-bold">{selectedKid.coins || 0}</div>
          <p className="text-gray-600">Coins</p>
        </div>
        <div className="glass-card p-6 text-center">
          <div className="text-5xl">⚡</div>
          <div className="text-3xl font-bold">{xp}</div>
          <p className="text-gray-600">XP</p>
        </div>
        <div className="glass-card p-6 text-center col-span-2 md:col-span-1">
          <div className="text-5xl">🏅</div>
          <div className="text-3xl font-bold">Level {selectedKid.level || 1}</div>
          <ProgressRing progress={(xp % 100) / 100 * 100} />
          <p className="text-gray-600 text-sm">{xp % 100} / 100 XP to next level</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-2xl font-fredoka font-bold">🔥 Streak</h2>
        <p className="text-5xl font-bold text-kid-primary">{selectedKid.streak || 1} days</p>
        <p className="text-gray-600">Keep practicing daily!</p>
      </div>
    </motion.div>
  );
};

export default Rewards;