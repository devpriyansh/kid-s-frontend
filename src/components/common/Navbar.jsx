import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useKid } from '../../contexts/KidContext';
import { useClass } from '../../contexts/ClassContext';
import { Home, Users, Gamepad2, TrendingUp, Trophy, Sparkles } from 'lucide-react';

const Navbar = () => {
  const { user } = useAuth();
  const { selectedKid } = useKid();
  const location = useLocation();
  const { selectedClass } = useClass();

  const navItems = [
    { path: '/parent-dashboard', label: 'Dashboard', icon: Home },
    { path: '/child-profiles', label: 'Kids', icon: Users },
    { path: '/class-dashboard', label: 'Play', icon: Gamepad2 },
    { path: '/progress', label: 'Progress', icon: TrendingUp },
    { path: '/rewards', label: 'Rewards', icon: Trophy },
  ];

  if (!user) return null;

  return (
    <nav className="bg-white/80 backdrop-blur-xl border-b-4 border-white/60 py-3 px-6 z-50 flex-none sticky top-0 w-full shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 relative z-10">
        <Link to="/parent-dashboard" className="flex items-center gap-3 group">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-kid-primary to-kid-primary-dark rounded-[1.25rem] shadow-lg border-2 border-white p-1 overflow-hidden group-hover:scale-110 group-hover:rotate-6 transition-transform relative flex items-center justify-center">
            <img src="/logo.png" alt="kidsLearn logo" className="w-full h-full object-contain drop-shadow-md relative z-10 bg-white rounded-xl p-1" />
          </div>
          <span className="text-3xl font-baloo font-black group-hover:scale-105 transition-transform hidden md:flex items-center tracking-wide" style={{ filter: 'drop-shadow(0 3px 0 rgba(79, 70, 229, 0.2)) drop-shadow(0 6px 8px rgba(0,0,0,0.1))' }}>
            <span className="text-kid-primary" style={{ WebkitTextStroke: '1.5px white' }}>kids</span>
            <span className="text-kid-yellow-dark" style={{ WebkitTextStroke: '1.5px white' }}>Learn</span>
          </span>
        </Link>
        <div className="flex items-center gap-2 md:gap-4 overflow-x-auto hide-scrollbar pb-1 px-2 -mx-2 flex-1 md:flex-none justify-start md:justify-end">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl font-baloo font-black text-lg transition-all whitespace-nowrap border-2 select-none hover:-translate-y-1 ${
                  isActive
                    ? 'bg-gradient-to-b from-kid-primary to-kid-primary-dark text-white border-white shadow-[0_8px_16px_rgba(59,130,246,0.3),inset_0_4px_8px_rgba(255,255,255,0.4)]'
                    : 'text-slate-500 border-transparent hover:bg-white hover:text-kid-primary-dark hover:border-white/80 hover:shadow-md'
                }`}
              >
                <Icon size={22} strokeWidth={isActive ? 3 : 2} className={isActive ? "text-white drop-shadow-md" : ""} />
                <span className={`hidden sm:block ${isActive ? 'drop-shadow-md' : ''}`}>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;