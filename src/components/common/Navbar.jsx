import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useKid } from '../../contexts/KidContext';
import ClassBadge from '../../components/common/ClassBadge';
import { useClass } from '../../contexts/ClassContext';

const Navbar = () => {
  const { user } = useAuth();
  const { selectedKid } = useKid();
  const location = useLocation();
  const { selectedClass } = useClass();

  const navItems = [
    { path: '/parent-dashboard', label: '📊 Dashboard' },
    { path: '/child-profiles', label: '👦 Kids' },
    { path: '/class-dashboard', label: '🎮 Play' },
    { path: '/progress', label: '📈 Progress' },
    { path: '/rewards', label: '🏆 Rewards' },
  ];

  if (!user) return null;

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm py-3 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
        <Link to="/parent-dashboard" className="text-2xl font-fredoka font-bold gradient-text">
          🌟 KidsLearn
        </Link>
        <div className="flex items-center gap-1 md:gap-2 overflow-x-auto pb-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-1.5 rounded-full text-sm font-semibold transition whitespace-nowrap ${
                location.pathname === item.path
                  ? 'bg-kid-purple text-white'
                  : 'text-gray-600 hover:bg-kid-purple/10'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;