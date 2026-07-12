import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import Avatar from '../common/Avatar';
import ProgressRing from '../common/ProgressRing';
import { useDashboard } from '../../hooks/useKids';
import { Star, GraduationCap, Gamepad2 } from 'lucide-react';

const _envUrl = import.meta.env.VITE_API_BASE_URL;
const API_BASE_URL = _envUrl ? (_envUrl.endsWith('/api/v1') ? _envUrl : _envUrl.replace(/\/$/, '') + '/api/v1') : 'https://kid-s-backend.onrender.com/api/v1';

const fetchQuizzes = async (age) => {
  const token = localStorage.getItem('token');
  if (!token) return [];
  const res = await fetch(`${API_BASE_URL}/quiz/list/${age || 'nursery'}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  const data = await res.json();
  return data.data?.result?.quizzes || [];
};

const ChildCard = ({ kid }) => {
  const { data: dashboardData } = useDashboard();
  const { data: quizzes = [] } = useQuery(['quizzes', kid.age], () => fetchQuizzes(kid.age));

  const completedCount = useMemo(() => {
    if (!dashboardData?.gameProgress) return 0;
    return dashboardData.gameProgress.filter(g => 
      String(g.child_id) === String(kid.id) && g.completed
    ).length;
  }, [dashboardData, kid.id]);

  const totalCount = quizzes.length;
  const progress = totalCount === 0 ? 0 : (completedCount / totalCount) * 100;

  return (
    <motion.div whileHover={{ scale: 1.02, y: -2 }} className="glass-card p-6 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left relative overflow-hidden group border border-white/60 bg-white/40 backdrop-blur-md">
      <div className="absolute top-0 right-0 w-32 h-32 bg-kid-primary/20 rounded-full blur-3xl group-hover:bg-kid-primary/30 transition-colors pointer-events-none"></div>
      
      <div className="relative z-10 p-2 bg-white/60 rounded-[2rem] shadow-inner border border-white/80">
        <Avatar emoji={kid.avatar} size="medium" />
      </div>
      
      <div className="flex-1 relative z-10 space-y-2">
        <h3 className="text-2xl font-baloo font-black text-kid-text drop-shadow-sm">{kid.name}</h3>
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
          <span className="font-bold text-kid-primary-dark bg-kid-primary/20 px-3 py-1 rounded-xl text-sm flex items-center gap-1 border border-white/40 shadow-sm">
            <GraduationCap size={16} /> {kid.age?.toUpperCase() || 'KG1'}
          </span>
          <span className="font-bold text-kid-yellow-dark bg-kid-yellow/30 px-3 py-1 rounded-xl text-sm flex items-center gap-1 border border-white/40 shadow-sm">
            <Star size={16} className="fill-kid-yellow-dark" /> {kid.stars} stars
          </span>
        </div>
        <div className="flex items-center justify-center sm:justify-start gap-4 mt-4 pt-3 border-t border-white/40">
          <ProgressRing progress={progress} size={60} />
          <div className="flex flex-col text-left">
            <span className="font-baloo font-bold text-lg text-slate-600 flex items-center gap-1">
              <Gamepad2 size={18} /> {completedCount} / {totalCount} Games
            </span>
            <span className="text-sm font-bold text-slate-400 -mt-1">{Math.round(progress)}% Completed</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChildCard;