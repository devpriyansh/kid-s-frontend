import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDashboard } from '../../hooks/useKids';
import ChildCard from '../../components/parent/ChildCard';
import ProgressChart from '../../components/parent/ProgressChart';
import { DashboardCardSkeleton, GraphSkeleton, ListSkeleton } from '../../components/common/Skeletons';
import { UserPlus, Activity, Star, Coins, LayoutDashboard, Users } from 'lucide-react';

const ParentDashboard = () => {
  const { data = { kids: [], recentActivities: [] }, isLoading } = useDashboard();
  const { kids, recentActivities } = data;

  // Calculate summary stats
  const totalStars = kids.reduce((acc, kid) => acc + (kid.stars || 0), 0);
  const totalKids = kids.length;
  const recentActivitiesCount = recentActivities.length;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-full overflow-y-auto hide-scrollbar pb-12 px-2 sm:px-4">
      {/* Scrollable Header Section */}
      <div className="mb-8 mt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-white/60 text-kid-primary">
            <LayoutDashboard size={40} strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-baloo font-black text-kid-primary-dark drop-shadow-md">Overview Dashboard</h1>
            <p className="text-slate-500 font-bold text-lg mt-1">Track your adventurers' learning progress</p>
          </div>
        </div>
        <Link to="/child-profiles" className="btn-primary py-3 px-6 shadow-xl w-full md:w-auto flex-shrink-0">
          <UserPlus size={24} strokeWidth={3} /> Add Child
        </Link>
      </div>

      {/* KPI Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative z-10">
        <div className="bg-white/70 backdrop-blur-xl border border-white/60 p-6 rounded-[2rem] shadow-lg flex items-center justify-between group hover:-translate-y-1 transition-transform">
          <div>
            <p className="text-slate-500 font-bold text-sm uppercase tracking-wider mb-1">Total Adventurers</p>
            <p className="text-4xl font-black text-kid-primary-dark font-baloo">{totalKids}</p>
          </div>
          <div className="bg-kid-primary/10 p-4 rounded-2xl group-hover:scale-110 transition-transform text-kid-primary shadow-inner">
            <Users size={32} />
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-xl border border-white/60 p-6 rounded-[2rem] shadow-lg flex items-center justify-between group hover:-translate-y-1 transition-transform">
          <div>
            <p className="text-slate-500 font-bold text-sm uppercase tracking-wider mb-1">Stars Earned</p>
            <p className="text-4xl font-black text-kid-yellow-dark font-baloo">{totalStars}</p>
          </div>
          <div className="bg-kid-yellow/20 p-4 rounded-2xl group-hover:scale-110 transition-transform text-kid-yellow-dark shadow-inner">
            <Star size={32} className="fill-kid-yellow-dark" />
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-xl border border-white/60 p-6 rounded-[2rem] shadow-lg flex items-center justify-between group hover:-translate-y-1 transition-transform">
          <div>
            <p className="text-slate-500 font-bold text-sm uppercase tracking-wider mb-1">Recent Activities</p>
            <p className="text-4xl font-black text-kid-secondary-dark font-baloo">{recentActivitiesCount}</p>
          </div>
          <div className="bg-kid-secondary/10 p-4 rounded-2xl group-hover:scale-110 transition-transform text-kid-secondary shadow-inner">
            <Activity size={32} />
          </div>
        </div>
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        
        {/* Left Column: Charts */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white/70 backdrop-blur-xl border border-white/60 p-6 sm:p-8 rounded-[2.5rem] shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-baloo font-bold text-kid-primary-dark flex items-center gap-3 drop-shadow-sm">
                <Activity size={32} className="text-kid-primary" /> Learning Activity
              </h2>
            </div>
            <div className="h-[350px] w-full relative">
              {isLoading ? <GraphSkeleton /> : <ProgressChart recentActivities={recentActivities} />}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-baloo font-bold text-kid-primary-dark drop-shadow-sm ml-2">Your Adventurers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {isLoading ? (
                [...Array(2)].map((_, i) => <DashboardCardSkeleton key={i} />)
              ) : (
                kids.map((kid) => (
                  <ChildCard key={kid.id} kid={kid} />
                ))
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Activity Feed */}
        <div className="lg:col-span-1">
          <div className="bg-white/70 backdrop-blur-xl border border-white/60 p-6 sm:p-8 rounded-[2.5rem] shadow-xl max-h-[600px] flex flex-col">
            <h2 className="text-3xl font-baloo font-bold text-kid-secondary-dark flex items-center gap-3 drop-shadow-sm mb-6 flex-none">
              <Star size={32} className="text-kid-secondary fill-kid-secondary" /> Activity Feed
            </h2>
            
            <div className="flex-1 overflow-y-auto hide-scrollbar pr-2 space-y-4">
              {isLoading ? (
                <ListSkeleton rows={4} />
              ) : recentActivities.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 py-10">
                  <Star size={64} strokeWidth={1} className="mb-4 opacity-50" />
                  <p className="font-bold text-xl text-center">No recent activities.<br />Time to play some games!</p>
                </div>
              ) : (
                recentActivities.map((act) => (
                  <div key={act.id} className="flex items-start gap-4 p-4 bg-white/70 backdrop-blur-md border border-white/80 rounded-[1.5rem] hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer">
                    <div className="text-4xl bg-gradient-to-br from-slate-50 to-slate-100 p-2.5 rounded-2xl shadow-sm border border-slate-200 group-hover:scale-110 group-hover:rotate-3 transition-transform shrink-0">
                      {act.child?.avatar}
                    </div>
                    
                    <div className="flex-1 min-w-0 pt-0.5">
                      <div className="flex justify-between items-start mb-0.5 gap-2">
                        <h3 className="font-bold font-baloo text-base text-slate-700 leading-tight">
                          {act.child?.name}
                        </h3>
                        <span className="text-[11px] font-bold text-slate-400 whitespace-nowrap bg-slate-100/50 px-2 py-0.5 rounded-md">
                          {new Date(act.createdAt || act.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                        </span>
                      </div>
                      
                      <p className="text-sm text-slate-500 mb-2.5 leading-snug break-words">
                        Played <span className="font-bold text-kid-primary-dark">{act.quiz?.title}</span>
                      </p>

                      <div className="flex items-center gap-2">
                        <span className="font-black text-kid-yellow-dark bg-kid-yellow/15 px-2 py-1 rounded-lg flex items-center gap-1 text-xs border border-kid-yellow/20 shadow-sm">
                          <Star size={12} className="fill-kid-yellow-dark" /> +{act.stars_earned}
                        </span>
                        <span className="font-black text-kid-primary-dark bg-kid-primary/15 px-2 py-1 rounded-lg flex items-center gap-1 text-xs border border-kid-primary/20 shadow-sm">
                          <Coins size={12} className="fill-kid-primary-dark" /> +{act.coins_earned}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default ParentDashboard;