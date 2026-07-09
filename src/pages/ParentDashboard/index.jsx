import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDashboard } from '../../hooks/useKids';
import ChildCard from '../../components/parent/ChildCard';
import ProgressChart from '../../components/parent/ProgressChart';
import FunLoader from '../../components/common/FunLoader';
import { UserPlus, Activity, Star, Coins, LayoutDashboard } from 'lucide-react';

const ParentDashboard = () => {
  const { data = { kids: [], recentActivities: [] }, isLoading } = useDashboard();
  const { kids, recentActivities } = data;

  if (isLoading) return <FunLoader message="Loading dashboard..." />;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-full flex flex-col hide-scrollbar">
      <div className="flex-none mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 glass-panel p-6 shadow-md border-white/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-kid-primary/20 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="bg-white/50 backdrop-blur-sm p-3 rounded-2xl shadow-inner border border-white/60">
              <LayoutDashboard size={32} className="text-kid-primary" strokeWidth={2.5} />
            </div>
            <h1 className="text-4xl md:text-5xl gradient-text">Parent Dashboard</h1>
          </div>
          <Link to="/child-profiles" className="btn-primary text-lg px-6 py-3">
            <UserPlus size={20} strokeWidth={3} /> Add Child
          </Link>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar pb-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <h2 className="text-2xl font-baloo font-bold text-kid-text flex items-center gap-2 drop-shadow-sm">
              <Activity size={24} className="text-kid-secondary" /> Progress Overview
            </h2>
            <div className="glass-card p-4 sm:p-6 h-[350px] w-full relative overflow-hidden flex flex-col min-w-0">
              <div className="flex-1 w-full relative">
                <ProgressChart recentActivities={recentActivities} />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-baloo font-bold text-kid-text flex items-center gap-2 drop-shadow-sm">
              <Star size={24} className="text-kid-yellow-dark" /> Recent Activities
            </h2>
            <div className="glass-card p-6 h-[350px] overflow-y-auto hide-scrollbar">
              {recentActivities.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-400">
                  <Star size={48} strokeWidth={1} className="mb-4 opacity-50" />
                  <p className="font-bold text-lg text-center">No activities yet.<br />Time to play some quizzes!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {recentActivities.map((act) => (
                    <div key={act.id} className="flex items-center justify-between p-4 bg-white/40 backdrop-blur-sm border border-white/60 rounded-[1.5rem] hover:bg-white/60 hover:shadow-md hover:-translate-y-1 transition-all">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl drop-shadow-sm bg-white/80 p-3 rounded-2xl shadow-inner border border-white">{act.child?.avatar}</span>
                        <div>
                          <h3 className="font-bold font-baloo text-xl text-kid-text">{act.child?.name} completed {act.quiz?.title}</h3>
                          <p className="text-sm font-bold text-slate-500">{new Date(act.created_at).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="text-right flex flex-col items-end gap-1">
                        <span className="font-black text-kid-yellow-dark bg-kid-yellow/20 px-3 py-1 rounded-lg flex items-center gap-1">
                          <Star size={14} className="fill-kid-yellow-dark" /> {act.stars_earned}
                        </span>
                        <span className="font-black text-kid-primary-dark bg-kid-primary/20 px-3 py-1 rounded-lg flex items-center gap-1">
                          <Coins size={14} className="fill-kid-primary-dark" /> {act.coins_earned}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="pt-6">
          <h2 className="text-3xl font-baloo font-bold text-kid-text mb-6 drop-shadow-sm">Your Kids</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kids.map((kid) => (
              <ChildCard key={kid.id} kid={kid} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ParentDashboard;