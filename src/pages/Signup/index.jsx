import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';
import Mascot from '../../components/common/Mascot';
import { User, Mail, Lock, UserPlus } from 'lucide-react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError("Passwords don't match!");
      return;
    }
    
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setIsLoading(true);
    const res = await register(email, password, confirmPassword, firstName, lastName);
    setIsLoading(false);
    
    if (res.success) {
      navigate('/parent-dashboard');
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center bg-transparent p-4 relative overflow-y-auto min-h-0 h-full w-full hide-scrollbar">
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
        className="glass-card w-full max-w-4xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 my-auto z-10 shadow-2xl"
      >
        {/* Left Side: Mascot & Welcome */}
        <div className="flex-1 text-center md:text-left space-y-4 md:space-y-6">
          <div className="bg-white/60 backdrop-blur-md inline-block p-4 md:p-6 rounded-[2rem] shadow-[0_8px_16px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,1)] border border-white/80 hidden md:inline-block">
            <Mascot className="w-20 h-20 md:w-28 md:h-28 mx-auto" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl gradient-text mb-2 font-black leading-tight">Create<br className="hidden md:block"/> Account</h2>
            <p className="text-kid-text/80 font-bold font-nunito text-lg md:text-xl">Join the learning adventure today!</p>
          </div>
        </div>
        
        {/* Right Side: Form */}
        <div className="w-full md:w-[60%] flex flex-col justify-center">
          {error && (
            <div className="p-3 mb-4 bg-red-100 text-red-700 rounded-lg text-sm text-center font-bold">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-kid-text font-baloo font-bold text-base md:text-lg ml-2 flex items-center gap-1">
                  <User size={16} className="text-kid-secondary" /> First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full h-12 md:h-14 px-4 rounded-2xl border border-white/60 bg-white/50 backdrop-blur-sm focus:bg-white/90 focus:border-kid-secondary focus:ring-4 focus:ring-kid-secondary/20 outline-none transition-all text-base font-bold shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]"
                  placeholder="First"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-kid-text font-baloo font-bold text-base md:text-lg ml-2 flex items-center gap-1">
                  <User size={16} className="text-kid-secondary" /> Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full h-12 md:h-14 px-4 rounded-2xl border border-white/60 bg-white/50 backdrop-blur-sm focus:bg-white/90 focus:border-kid-secondary focus:ring-4 focus:ring-kid-secondary/20 outline-none transition-all text-base font-bold shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]"
                  placeholder="Last"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-kid-text font-baloo font-bold text-base md:text-lg ml-2 flex items-center gap-1">
                <Mail size={16} className="text-kid-secondary" /> Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 md:h-14 px-4 rounded-2xl border border-white/60 bg-white/50 backdrop-blur-sm focus:bg-white/90 focus:border-kid-secondary focus:ring-4 focus:ring-kid-secondary/20 outline-none transition-all text-base font-bold shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]"
                placeholder="parent@example.com"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-kid-text font-baloo font-bold text-base md:text-lg ml-2 flex items-center gap-1">
                  <Lock size={16} className="text-kid-secondary" /> Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 md:h-14 px-4 rounded-2xl border border-white/60 bg-white/50 backdrop-blur-sm focus:bg-white/90 focus:border-kid-secondary focus:ring-4 focus:ring-kid-secondary/20 outline-none transition-all text-base font-bold shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-kid-text font-baloo font-bold text-base md:text-lg ml-2 flex items-center gap-1">
                  <Lock size={16} className="text-kid-secondary" /> Confirm
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full h-12 md:h-14 px-4 rounded-2xl border border-white/60 bg-white/50 backdrop-blur-sm focus:bg-white/90 focus:border-kid-secondary focus:ring-4 focus:ring-kid-secondary/20 outline-none transition-all text-base font-bold shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button type="submit" disabled={isLoading} className={`btn-primary w-full mt-6 bg-gradient-to-b from-kid-secondary to-kid-secondary-dark border-white/40 shadow-[0_8px_16px_rgba(236,72,153,0.3),inset_0_4px_8px_rgba(255,255,255,0.4)] active:shadow-[0_2px_4px_rgba(236,72,153,0.3),inset_0_1px_2px_rgba(255,255,255,0.4)] h-14 md:h-16 text-xl md:text-2xl ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}>
              {isLoading ? 'Creating...' : <><UserPlus size={26} strokeWidth={2.5} /> Sign Up!</>}
            </button>
          </form>
          
          <p className="text-center text-kid-text font-bold font-nunito text-base md:text-lg mt-6">
            Already have an account? <Link to="/login" className="text-kid-secondary hover:text-kid-secondary-dark underline decoration-2 underline-offset-4 transition-colors">Log in</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
