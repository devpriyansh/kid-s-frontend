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
    <nav className="bg-white border-b-4 border-slate-200 py-3 px-6 z-50 flex-none sticky top-0 w-full shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <Link to="/parent-dashboard" className="flex items-center gap-3 group">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.8)] border border-white p-1 overflow-hidden group-hover:scale-110 group-hover:-rotate-6 transition-transform relative">
            <div className="absolute inset-0 bg-gradient-to-br from-kid-primary/10 to-kid-secondary/10"></div>
            <img src="/logo.png" alt="kidsLearn logo" className="w-full h-full object-contain drop-shadow-md relative z-10" />
          </div>
          <span className="text-3xl font-baloo font-black gradient-text group-hover:opacity-80 transition-opacity hidden md:block tracking-wide">
            kidsLearn
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
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl font-bold transition-all whitespace-nowrap border-2 select-none ${
                  isActive
                    ? 'bg-kid-primary/10 text-kid-primary border-kid-primary/20 shadow-sm'
                    : 'text-slate-500 border-transparent hover:bg-slate-100 hover:text-slate-800'
                }`}
              >
                <Icon size={22} strokeWidth={isActive ? 3 : 2} className={isActive ? "text-kid-primary" : ""} />
                <span className={`text-lg hidden sm:block ${isActive ? 'text-kid-primary-dark' : ''}`}>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;