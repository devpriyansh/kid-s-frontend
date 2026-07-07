import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProgressChart from '../../components/parent/ProgressChart';
import { useKid } from '../../contexts/KidContext';
import { useDashboard } from '../../hooks/useKids';
import { getClass } from '../../data/curriculum';

const Progress = () => {
  const { selectedKid } = useKid();
  const { data } = useDashboard();
  
  if (!selectedKid) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Please select a child first</h2>
        <Link to="/child-profiles" className="btn-primary mt-4 inline-block">Go to Profiles</Link>
      </div>
    );
  }

  const childActivities = data?.recentActivities?.filter(a => String(a.child_id) === String(selectedKid.id)) || [];
  
  const xp = (selectedKid.stars || 0) * 10 + (selectedKid.coins || 0) * 5;
  
  const badges = [];
  if (childActivities.length > 0) badges.push('🚀 First Step');
  if (childActivities.length >= 5) badges.push('🌟 Quick Learner');
  if (selectedKid.stars >= 50) badges.push('⭐ Star Collector');
  if (selectedKid.level >= 3) badges.push('🏅 Super Scholar');

  const overallProgress = React.useMemo(() => {
    if (!selectedKid?.age) return 0;
    const classData = getClass(selectedKid.age);
    if (!classData) return 0;

    const totalLessons = classData.modules.reduce((sum, mod) => sum + (mod.lessons?.length || 0), 0);
    if (totalLessons === 0) return 0;

    const key = `progress_${selectedKid.id}_${selectedKid.age}`;
    const stored = localStorage.getItem(key);
    const progressData = stored ? JSON.parse(stored) : {};

    let completedLessons = 0;
    classData.modules.forEach(mod => {
      const modProg = progressData[mod.id];
      if (modProg && Array.isArray(modProg.completed)) {
        completedLessons += modProg.completed.length;
      }
    });

    return { percentage: (completedLessons / totalLessons) * 100, completed: completedLessons, total: totalLessons };
  }, [selectedKid]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex items-center gap-4">
        <span className="text-6xl">{selectedKid.avatar}</span>
        <h1 className="text-4xl font-fredoka font-bold gradient-text">{selectedKid.name}'s Progress</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="glass-card p-4 text-center">
          <p className="text-3xl">⭐</p>
          <p className="text-2xl font-bold">{selectedKid.stars || 0}</p>
          <p className="text-gray-600">Stars</p>
        </div>
        <div className="glass-card p-4 text-center">
          <p className="text-3xl">🪙</p>
          <p className="text-2xl font-bold">{selectedKid.coins || 0}</p>
          <p className="text-gray-600">Coins</p>
        </div>
        <div className="glass-card p-4 text-center">
          <p className="text-3xl">⚡</p>
          <p className="text-2xl font-bold">{xp}</p>
          <p className="text-gray-600">XP</p>
        </div>
        <div className="glass-card p-4 text-center">
          <p className="text-3xl">🏅</p>
          <p className="text-2xl font-bold">{selectedKid.level || 1}</p>
          <p className="text-gray-600">Level</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-xl font-fredoka font-bold mb-4">📚 Curriculum Progress</h2>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600 font-semibold">{overallProgress.completed} of {overallProgress.total} lessons completed</span>
          <span className="text-kid-primary font-bold">{Math.round(overallProgress.percentage || 0)}%</span>
        </div>
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-kid-primary to-kid-purple rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${overallProgress.percentage || 0}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-xl font-fredoka font-bold mb-4">📈 Learning Analytics</h2>
        <ProgressChart recentActivities={childActivities} />
      </div>

      <div className="glass-card p-6">
        <h2 className="text-xl font-fredoka font-bold mb-4">🏆 Badges</h2>
        <div className="flex flex-wrap gap-4">
          {badges.length === 0 && <p className="text-gray-500">No badges yet. Keep learning!</p>}
          {badges.map((badge, idx) => (
            <div key={idx} className="bg-kid-yellow/30 px-4 py-2 rounded-xl font-bold text-lg shadow-sm border-2 border-kid-yellow text-kid-purple">
              {badge}
            </div>
          ))}
        </div>
      </div>
      
      {childActivities.length > 0 && (
        <div className="glass-card p-6 mt-6">
          <h2 className="text-xl font-fredoka font-bold mb-4">📝 Detailed Activity Report</h2>
          <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
            {childActivities.map(act => (
              <div key={act.id} className="flex items-center justify-between p-3 bg-white/50 rounded-lg shadow-sm border border-kid-purple/10">
                <div>
                  <h3 className="font-bold text-gray-800">{act.quiz?.title || 'Learning Activity'}</h3>
                  <p className="text-xs text-gray-500">{new Date(act.created_at).toLocaleString()}</p>
                </div>
                <div className="text-right text-sm font-bold text-kid-purple">
                  +{act.stars_earned} ⭐ | +{act.coins_earned} 🪙
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Progress;