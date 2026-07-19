import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import Mascot from '../../components/common/Mascot';
import { User, Mail, Lock, Shield, Sparkles, Rocket, UserPlus, CheckCircle2, Loader2 } from 'lucide-react';
import GoogleAuthButton from '../../components/auth/GoogleAuthButton';
import signupMascot from '../../assets/signup_mascot.png';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // OTP Verification State
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isOtpLoading, setIsOtpLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter an email address first.');
      return;
    }
    setError('');
    setIsOtpLoading(true);
    try {
      const API_URL = import.meta.env.VITE_API_BASE_URL;
      const res = await fetch(`${API_URL}/user/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const resData = await res.json();
      if (res.ok && resData.data && resData.data.status === 200) {
        setIsOtpSent(true);
      } else {
        const errorMessage = resData.errors && resData.errors.length > 0 ? resData.errors[0].customMessage || resData.errors[0].message : 'Failed to send OTP.';
        setError(errorMessage);
      }
    } catch (err) {
      setError('Failed to connect to server.');
    } finally {
      setIsOtpLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp) {
      setError('Please enter the OTP.');
      return;
    }
    setError('');
    setIsOtpLoading(true);
    try {
      const API_URL = import.meta.env.VITE_API_BASE_URL;
      const res = await fetch(`${API_URL}/user/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp })
      });
      const resData = await res.json();
      if (res.ok && resData.data && resData.data.status === 200) {
        setIsEmailVerified(true);
        setIsOtpSent(false); // Hide OTP field
      } else {
        const errorMessage = resData.errors && resData.errors.length > 0 ? resData.errors[0].customMessage || resData.errors[0].message : 'Invalid OTP.';
        setError(errorMessage);
      }
    } catch (err) {
      setError('Failed to connect to server.');
    } finally {
      setIsOtpLoading(false);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!isEmailVerified) {
      setError("Please verify your email address first.");
      return;
    }

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
    <div className="flex h-screen w-full bg-white overflow-hidden flex-col-reverse lg:flex-row">

      {/* Left Panel: Form (Full width on Mobile) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-12 xl:p-16 bg-white relative overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[440px] space-y-6"
        >
          <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
            <div className="bg-gradient-to-br from-kid-secondary to-pink-500 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg border-2 border-white">
              <Rocket className="text-white w-7 h-7" />
            </div>
            <span className="text-3xl font-black text-slate-800 tracking-tight font-baloo">
              Kidz<span className="text-kid-secondary">Learn</span>
            </span>
          </div>

          <div className="text-center lg:text-left mb-4">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-1">Create your account ✨</h2>
            <p className="text-slate-500 font-nunito font-bold text-base">
              Join the adventure and unlock powerful learning tools.
            </p>
          </div>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-widest font-black text-slate-500 ml-1">First Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-kid-secondary">
                    <User size={18} className="text-slate-400 group-focus-within:text-kid-secondary transition-colors" />
                  </div>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full h-12 pl-11 pr-4 rounded-xl border-2 border-transparent bg-slate-100 focus:bg-white focus:border-kid-secondary outline-none transition-all text-slate-800 font-bold placeholder:text-slate-400 placeholder:font-medium shadow-inner focus:shadow-[0_0_0_4px_rgba(236,72,153,0.1)]"
                    placeholder="Jane"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-widest font-black text-slate-500 ml-1">Last Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-kid-secondary">
                    <User size={18} className="text-slate-400 group-focus-within:text-kid-secondary transition-colors" />
                  </div>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full h-12 pl-11 pr-4 rounded-xl border-2 border-transparent bg-slate-100 focus:bg-white focus:border-kid-secondary outline-none transition-all text-slate-800 font-bold placeholder:text-slate-400 placeholder:font-medium shadow-inner focus:shadow-[0_0_0_4px_rgba(236,72,153,0.1)]"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="relative z-20">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between ml-1">
                  <label className="text-xs uppercase tracking-widest font-black text-slate-500">Email Address</label>
                  {isEmailVerified && (
                    <span className="text-xs font-bold text-green-600 flex items-center gap-1">
                      <CheckCircle2 size={14} /> Verified
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <div className="relative group flex-1">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-kid-secondary">
                      <Mail size={18} className={`transition-colors ${isEmailVerified ? 'text-green-500' : 'text-slate-400 group-focus-within:text-kid-secondary'}`} />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !isEmailVerified && !isOtpSent) {
                          e.preventDefault();
                          handleSendOtp(e);
                        }
                      }}
                      disabled={isEmailVerified || isOtpSent}
                      className={`w-full h-12 pl-11 pr-4 rounded-xl border-2 border-transparent bg-slate-100 outline-none transition-all text-slate-800 font-bold placeholder:text-slate-400 placeholder:font-medium shadow-inner ${
                        isEmailVerified 
                          ? 'opacity-80 bg-green-50/50' 
                          : 'focus:bg-white focus:border-kid-secondary focus:shadow-[0_0_0_4px_rgba(236,72,153,0.1)]'
                      }`}
                      placeholder="parent@example.com"
                      required
                    />
                  </div>
                  {!isEmailVerified && !isOtpSent && (
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      disabled={!email || isOtpLoading}
                      className="h-12 px-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isOtpLoading ? <Loader2 size={16} className="animate-spin" /> : 'Verify'}
                    </button>
                  )}
                </div>
              </div>

              <AnimatePresence>
                {isOtpSent && !isEmailVerified && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-3 p-4 bg-white/95 backdrop-blur-sm border-2 border-blue-100 rounded-2xl shadow-xl z-30"
                  >
                    <label className="text-xs uppercase tracking-widest font-black text-blue-700 ml-1 mb-2 block">Enter Verification Code</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleVerifyOtp(e);
                          }
                        }}
                        maxLength={6}
                        className="w-full h-12 px-4 text-center rounded-xl border-2 border-slate-200 bg-white focus:border-blue-500 outline-none transition-all text-blue-900 font-black tracking-[0.2em] text-lg shadow-sm focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)]"
                        placeholder="------"
                        required
                        autoFocus
                      />
                      <button
                        type="button"
                        onClick={handleVerifyOtp}
                        disabled={otp.length < 6 || isOtpLoading}
                        className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {isOtpLoading ? <Loader2 size={16} className="animate-spin" /> : 'Confirm'}
                      </button>
                    </div>
                    <p className="text-xs text-blue-600 text-center font-medium mt-3">
                      Check your inbox for the 6-digit code.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-widest font-black text-slate-500 ml-1">Password</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-kid-secondary">
                    <Lock size={18} className="text-slate-400 group-focus-within:text-kid-secondary transition-colors" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-12 pl-11 pr-4 rounded-xl border-2 border-transparent bg-slate-100 focus:bg-white focus:border-kid-secondary outline-none transition-all text-slate-800 font-bold placeholder:text-slate-400 placeholder:font-medium shadow-inner focus:shadow-[0_0_0_4px_rgba(236,72,153,0.1)]"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-widest font-black text-slate-500 ml-1">Confirm</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-kid-secondary">
                    <Lock size={18} className="text-slate-400 group-focus-within:text-kid-secondary transition-colors" />
                  </div>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full h-12 pl-11 pr-4 rounded-xl border-2 border-transparent bg-slate-100 focus:bg-white focus:border-kid-secondary outline-none transition-all text-slate-800 font-bold placeholder:text-slate-400 placeholder:font-medium shadow-inner focus:shadow-[0_0_0_4px_rgba(236,72,153,0.1)]"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || !isEmailVerified}
              className={`w-full h-12 mt-2 bg-gradient-to-r from-kid-secondary to-pink-500 hover:from-pink-500 hover:to-kid-secondary text-white rounded-xl font-black text-lg shadow-[0_8px_20px_rgba(236,72,153,0.3)] hover:shadow-[0_12px_25px_rgba(236,72,153,0.4)] transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 ${(isLoading || !isEmailVerified) ? 'opacity-70 cursor-not-allowed transform-none hover:shadow-[0_8px_20px_rgba(236,72,153,0.3)]' : ''}`}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Creating Account...
                </>
              ) : !isEmailVerified ? (
                <>Verify Email to Continue</>
              ) : (
                <>
                  Create Account
                  <UserPlus size={20} />
                </>
              )}
            </button>
          </form>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink-0 mx-4 text-xs font-bold text-gray-400 uppercase tracking-widest">or sign up with</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <GoogleAuthButton isSignup={true} onError={setError} />

          <p className="text-center text-gray-600 font-semibold font-nunito mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-kid-secondary hover:text-pink-700 underline decoration-2 underline-offset-4 transition-colors font-bold">
              Log in
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right Panel: Visual/Brand (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-bl from-kid-secondary to-pink-600 items-center justify-center p-12">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

        <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-lg">
          <motion.img 
            src={signupMascot}
            alt="Create Account Mascot"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-72 h-72 object-cover rounded-[3rem] shadow-[0_20px_40px_rgba(0,0,0,0.2)] border-4 border-white/20"
          />
          <div>
            <h1 className="text-5xl font-black text-white tracking-tight mb-4 drop-shadow-lg">
              Join the Adventure.
            </h1>
            <p className="text-xl text-pink-100 font-nunito font-semibold mb-10">
              Create your parent account to gain full access to premium learning modules.
            </p>

            <div className="grid grid-cols-1 gap-4 text-left max-w-sm mx-auto">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                <div className="bg-white/20 p-2 rounded-xl text-white"><Sparkles size={24} /></div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">Interactive Learning</h3>
                  <p className="text-pink-100 text-sm font-semibold">Fun games that teach real skills.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                <div className="bg-white/20 p-2 rounded-xl text-white"><Shield size={24} /></div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">100% Safe & Secure</h3>
                  <p className="text-pink-100 text-sm font-semibold">A protected environment for kids.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Signup;
