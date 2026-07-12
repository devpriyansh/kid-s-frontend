import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProgressChart from '../../components/parent/ProgressChart';
import { useKid } from '../../contexts/KidContext';
import { useDashboard } from '../../hooks/useKids';
import { CardSkeleton, DashboardCardSkeleton, GraphSkeleton, ListSkeleton } from '../../components/common/Skeletons';
import { getClass } from '../../data/curriculum';

const Progress = () => {
  const { selectedKid } = useKid();
  const { data, isLoading } = useDashboard();
  
  // Use the most up-to-date kid data from the backend query
  const currentKid = data?.kids?.find(k => String(k.id) === String(selectedKid?.id)) || selectedKid;
  
  const overallProgress = React.useMemo(() => {
    if (!currentKid?.age) return { percentage: 0, completed: 0, total: 0 };
    const classData = getClass(currentKid.age);
    if (!classData) return { percentage: 0, completed: 0, total: 0 };

    const totalLessons = classData.modules.reduce((sum, mod) => sum + (mod.lessons?.length || 0), 0);
    if (totalLessons === 0) return { percentage: 0, completed: 0, total: 0 };

    const key = `progress_${currentKid.id}_${currentKid.age}`;
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
  }, [currentKid]);

  if (!currentKid) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Please select a child first</h2>
        <Link to="/child-profiles" className="btn-primary mt-4 inline-block">Go to Profiles</Link>
      </div>
    );
  }

  const childActivities = data?.recentActivities?.filter(a => String(a.child_id) === String(currentKid.id)) || [];
  const childGameProgress = data?.gameProgress?.filter(g => String(g.child_id) === String(currentKid.id)) || [];
  
  const completedGamesCount = childGameProgress.filter(g => g.completed).length;
  const totalGamesPlayed = childGameProgress.length;
  
  const xp = (currentKid.stars || 0) * 10 + (currentKid.coins || 0) * 5;
  
  const badges = [];
  if (childActivities.length > 0) badges.push('🚀 First Step');
  if (childActivities.length >= 5) badges.push('🌟 Quick Learner');
  if (currentKid.stars >= 50) badges.push('⭐ Star Collector');
  if (currentKid.level >= 3) badges.push('🏅 Super Scholar');

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full overflow-y-auto hide-scrollbar space-y-6 pb-10">
      <div className="flex items-center gap-4">
        <span className="text-6xl">{currentKid.avatar}</span>
        <h1 className="text-4xl font-fredoka font-bold gradient-text">{currentKid.name}'s Progress</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {isLoading ? (
          [...Array(4)].map((_, i) => <DashboardCardSkeleton key={i} />)
        ) : (
          <>
            <div className="glass-card p-4 text-center">
              <p className="text-3xl">⭐</p>
              <p className="text-2xl font-bold">{currentKid.stars || 0}</p>
              <p className="text-gray-600">Stars</p>
            </div>
            <div className="glass-card p-4 text-center">
              <p className="text-3xl">🪙</p>
              <p className="text-2xl font-bold">{currentKid.coins || 0}</p>
              <p className="text-gray-600">Coins</p>
            </div>
            <div className="glass-card p-4 text-center">
              <p className="text-3xl">⚡</p>
              <p className="text-2xl font-bold">{xp}</p>
              <p className="text-gray-600">XP</p>
            </div>
            <div className="glass-card p-4 text-center">
              <p className="text-3xl">🏅</p>
              <p className="text-2xl font-bold">{currentKid.level || 1}</p>
              <p className="text-gray-600">Level</p>
            </div>
          </>
        )}
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
        <div className="mt-8">
          {isLoading ? <GraphSkeleton /> : <ProgressChart recentActivities={childActivities} />}
        </div>
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
      
      {isLoading ? (
        <div className="glass-card p-6 mt-6">
          <h2 className="text-xl font-fredoka font-bold mb-4 text-gray-400 animate-pulse">📝 Loading Activity Report...</h2>
          <ListSkeleton rows={3} />
        </div>
      ) : childActivities.length > 0 && (
        <div className="glass-card p-6 mt-6">
          <h2 className="text-xl font-fredoka font-bold mb-4">📝 Detailed Activity Report</h2>
          <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
            {childActivities.map(act => (
              <div key={act.id} className="flex items-center justify-between p-3 bg-white/50 rounded-lg shadow-sm border border-kid-purple/10">
                <div>
                  <h3 className="font-bold text-gray-800">{act.quiz?.title || 'Learning Activity'}</h3>
                  <p className="text-xs text-gray-500">{new Date(act.createdAt || act.created_at).toLocaleString([], { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                </div>
                <div className="text-right text-sm font-bold text-kid-purple">
                  +{act.stars_earned} ⭐ | +{act.coins_earned} 🪙
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ALWAYS SHOW GAME PROGRESS REPORT */}
      <div className="glass-card p-6 mt-6 border border-kid-primary/20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-fredoka font-bold text-kid-primary">🎮 Game Progress Report</h2>
          {!isLoading && (
            <div className="flex gap-4">
              <div className="bg-kid-primary/10 px-4 py-2 rounded-xl text-center">
                <p className="text-sm text-kid-primary font-bold">Games Played</p>
                <p className="text-xl font-black text-kid-primary-dark">{totalGamesPlayed}</p>
              </div>
              <div className="bg-kid-green/10 px-4 py-2 rounded-xl text-center">
                <p className="text-sm text-kid-green font-bold">Games Completed</p>
                <p className="text-xl font-black text-kid-green-dark">{completedGamesCount}</p>
              </div>
            </div>
          )}
        </div>
        
        {isLoading ? (
          <ListSkeleton rows={4} />
        ) : childGameProgress.length === 0 ? (
          <div className="text-center py-10 bg-white/40 rounded-2xl border-2 border-dashed border-gray-200">
            <span className="text-5xl mb-4 block">🎮</span>
            <h3 className="text-xl font-bold text-gray-600 mb-2">No games played yet!</h3>
            <p className="text-gray-500">Go to the Class Dashboard to start playing.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-kid-primary/20">
                  <th className="p-3 font-bold text-gray-600">Game Name</th>
                  <th className="p-3 font-bold text-gray-600 text-center">Times Played</th>
                  <th className="p-3 font-bold text-gray-600 text-center">Best Score</th>
                  <th className="p-3 font-bold text-gray-600 text-center">Status</th>
                  <th className="p-3 font-bold text-gray-600 text-right">Last Played</th>
                </tr>
              </thead>
              <tbody>
                {childGameProgress.map(game => (
                  <tr key={game.id} className="border-b border-gray-100 hover:bg-white/50 transition-colors">
                    <td className="p-3 font-bold text-gray-800 flex items-center gap-3">
                      {game.quiz?.image_url?.includes('/') ? (
                        <img src={game.quiz.image_url} alt="Game" className="w-10 h-10 rounded-lg object-cover shadow-sm border border-gray-200" />
                      ) : (
                        <span className="text-2xl bg-gray-100 w-10 h-10 flex items-center justify-center rounded-lg shadow-sm border border-gray-200">{game.quiz?.image_url || '🎲'}</span>
                      )}
                      {game.quiz?.title || 'Unknown Game'}
                    </td>
                    <td className="p-3 text-center font-bold text-kid-purple">{game.times_played}</td>
                    <td className="p-3 text-center font-bold text-kid-yellow">{game.best_score}</td>
                    <td className="p-3 text-center">
                      {game.completed ? (
                        <span className="bg-kid-green/20 text-kid-green px-3 py-1 rounded-full text-xs font-bold">Completed</span>
                      ) : (
                        <span className="bg-kid-yellow/20 text-kid-yellow px-3 py-1 rounded-full text-xs font-bold">In Progress</span>
                      )}
                    </td>
                    <td className="p-3 text-right text-sm text-gray-500">
                      {new Date(game.updatedAt || game.updated_at).toLocaleString([], { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Progress;