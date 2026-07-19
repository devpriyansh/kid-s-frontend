import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';
import Mascot from '../../components/common/Mascot';
import { Mail, Lock, LogIn, Shield, Star, BookOpen, Sparkles, Rocket } from 'lucide-react';
import GoogleAuthButton from '../../components/auth/GoogleAuthButton';
import loginMascot from '../../assets/login_mascot.png';

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
    <div className="flex h-screen w-full bg-white overflow-hidden">
      {/* Left Panel: Visual/Brand (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-kid-primary to-blue-700 items-center justify-center p-12">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

        <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-lg">
          <motion.img 
            src={loginMascot}
            alt="Welcome Back Mascot"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-72 h-72 object-cover rounded-[3rem] shadow-[0_20px_40px_rgba(0,0,0,0.2)] border-4 border-white/20"
          />
          
          <div>
            <h1 className="text-5xl font-black text-white tracking-tight mb-4 drop-shadow-lg">
              Welcome Back.
            </h1>
            <p className="text-xl text-blue-100 font-nunito font-semibold mb-10">
              Sign in to manage your child's learning journey and track their amazing progress.
            </p>

            <div className="grid grid-cols-1 gap-4 text-left max-w-sm mx-auto">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                <div className="bg-white/20 p-2 rounded-xl text-white"><BookOpen size={24} /></div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">Track Progress</h3>
                  <p className="text-blue-100 text-sm font-semibold">View detailed learning reports.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                <div className="bg-white/20 p-2 rounded-xl text-white"><Star size={24} /></div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">Personalized Path</h3>
                  <p className="text-blue-100 text-sm font-semibold">AI curates the best content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: Form (Full width on Mobile) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-12 xl:p-16 bg-white relative overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[440px] space-y-6"
        >
          <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
            <div className="bg-gradient-to-br from-kid-primary to-blue-500 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg border-2 border-white">
              <Rocket className="text-white w-7 h-7" />
            </div>
            <span className="text-3xl font-black text-slate-800 tracking-tight font-baloo">
              Kidz<span className="text-kid-primary">Learn</span>
            </span>
          </div>

          <div className="text-center lg:text-left mb-4">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-1">Welcome Back! 👋</h2>
            <p className="text-slate-500 font-nunito font-bold text-base">
              We're so excited to see you again.
            </p>
          </div>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-widest font-black text-slate-500 ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-kid-primary">
                  <Mail size={18} className="text-slate-400 group-focus-within:text-kid-primary transition-colors" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 pl-11 pr-4 rounded-xl border-2 border-transparent bg-slate-100 focus:bg-white focus:border-kid-primary outline-none transition-all text-slate-800 font-bold placeholder:text-slate-400 placeholder:font-medium shadow-inner focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)]"
                  placeholder="parent@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-widest font-black text-slate-500 ml-1">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-kid-primary">
                  <Lock size={18} className="text-slate-400 group-focus-within:text-kid-primary transition-colors" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 pl-11 pr-4 rounded-xl border-2 border-transparent bg-slate-100 focus:bg-white focus:border-kid-primary outline-none transition-all text-slate-800 font-bold placeholder:text-slate-400 placeholder:font-medium shadow-inner focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)]"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full h-12 mt-2 bg-gradient-to-r from-kid-primary to-blue-500 hover:from-blue-500 hover:to-kid-primary text-white rounded-xl font-black text-lg shadow-[0_8px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_25px_rgba(59,130,246,0.4)] transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed transform-none hover:shadow-[0_8px_20px_rgba(59,130,246,0.3)]' : ''}`}
            >
              {isLoading ? (
                <>
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                  Authenticating...
                </>
              ) : (
                <>Sign In <LogIn size={24} strokeWidth={2.5} /></>
              )}
            </button>
          </form>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink-0 mx-4 text-xs font-bold text-gray-400 uppercase tracking-widest">or continue with</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <GoogleAuthButton onError={setError} />

          <p className="text-center text-gray-600 font-semibold font-nunito mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-kid-primary hover:text-blue-700 underline decoration-2 underline-offset-4 transition-colors font-bold">
              Sign up
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;