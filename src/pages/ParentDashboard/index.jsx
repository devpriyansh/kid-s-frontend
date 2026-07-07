import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDashboard } from '../../hooks/useKids';
import ChildCard from '../../components/parent/ChildCard';
import ProgressChart from '../../components/parent/ProgressChart';

const ParentDashboard = () => {
  const { data = { kids: [], recentActivities: [] }, isLoading } = useDashboard();
  const { kids, recentActivities } = data;

  if (isLoading) return <div className="text-center py-10 text-2xl">Loading dashboard...</div>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-4xl font-fredoka font-bold gradient-text">👨‍👩‍👦 Parent Dashboard</h1>
        <Link to="/child-profiles" className="btn-primary text-lg">
          + Add Child
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {kids.map((kid) => (
          <ChildCard key={kid.id} kid={kid} />
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-fredoka font-bold text-gray-700 mb-4">📊 Progress Overview</h2>
        <div className="glass-card p-6">
          <ProgressChart recentActivities={recentActivities} />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-fredoka font-bold text-gray-700 mb-4">🌟 Recent Activities</h2>
        <div className="glass-card p-6 space-y-4">
          {recentActivities.length === 0 ? (
            <p className="text-gray-500 text-center">No activities yet. Time to play some quizzes!</p>
          ) : (
            recentActivities.map((act) => (
              <div key={act.id} className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{act.child?.avatar}</span>
                  <div>
                    <h3 className="font-bold text-lg">{act.child?.name} completed {act.quiz?.title}</h3>
                    <p className="text-sm text-gray-500">{new Date(act.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-kid-purple">⭐ {act.stars_earned} Stars</p>
                  <p className="font-bold text-yellow-500">🪙 {act.coins_earned} Coins</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ParentDashboard;