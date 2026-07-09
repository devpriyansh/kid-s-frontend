import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';
import Mascot from '../../components/common/Mascot';
import { Mail, Lock, LogIn } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    const res = await login(email, password);
    setIsLoading(false);
    if (res.success) {
      navigate('/parent-dashboard');
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center bg-transparent p-4 relative overflow-hidden h-full w-full">
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
        className="glass-card w-full max-w-md p-10 space-y-8 z-10"
      >
        <div className="text-center">
          <div className="bg-white/60 backdrop-blur-md inline-block p-5 rounded-[2rem] shadow-[0_8px_16px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,1)] mb-6 border border-white/80">
            <Mascot className="w-24 h-24 mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl gradient-text mb-2">Welcome Back!</h2>
          <p className="text-kid-text/80 font-bold font-nunito text-lg">Sign in to continue the learning adventure.</p>
        </div>
        
        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <label className="text-kid-text font-baloo font-bold text-xl ml-2 flex items-center gap-2">
              <Mail size={22} className="text-kid-primary" /> Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-14 px-6 rounded-2xl border border-white/60 bg-white/50 backdrop-blur-sm focus:bg-white/90 focus:border-kid-primary focus:ring-4 focus:ring-kid-primary/20 outline-none transition-all text-lg font-bold shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]"
              placeholder="parent@example.com"
              required
            />
          </div>
          <div className="space-y-3">
            <label className="text-kid-text font-baloo font-bold text-xl ml-2 flex items-center gap-2">
              <Lock size={22} className="text-kid-primary" /> Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-14 px-6 rounded-2xl border border-white/60 bg-white/50 backdrop-blur-sm focus:bg-white/90 focus:border-kid-primary focus:ring-4 focus:ring-kid-primary/20 outline-none transition-all text-lg font-bold shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]"
              placeholder="••••••••"
              required
            />
          </div>
          <button type="submit" disabled={isLoading} className={`btn-primary w-full mt-8 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}>
            {isLoading ? 'Logging in...' : <><LogIn size={26} strokeWidth={2.5} /> Let's Go!</>}
          </button>
        </form>
        <p className="text-center text-kid-text font-bold font-nunito text-lg">
          Don't have an account? <Link to="/signup" className="text-kid-primary hover:text-kid-primary-dark underline decoration-2 underline-offset-4 transition-colors">Sign up</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;