import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Mascot from './Mascot';
import { Lock, Sparkles, LogIn, UserPlus } from 'lucide-react';

const GuestUnlockModal = ({ isOpen, onClose, title = "Unlock All Games! 🚀" }) => {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[150] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="glass-panel p-6 sm:p-10 max-w-md w-full text-center border-white/80 shadow-2xl relative overflow-hidden"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-3xl font-bold text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
            >
              ×
            </button>

            {/* Top Mascot with Lock Icon */}
            <div className="flex justify-center mb-4 relative">
              <Mascot className="w-24 h-24" />
              <motion.div 
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1 right-12 bg-kid-primary text-white p-2 rounded-full shadow-lg border-2 border-white z-10"
              >
                <Lock size={18} strokeWidth={2.5} />
              </motion.div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-baloo font-black gradient-text mb-4">
              {title}
            </h2>

            <p className="text-lg text-slate-600 mb-8 font-nunito leading-relaxed">
              Create a free account to unlock <strong>50+ educational games</strong>, save your progress, earn stars 🌟 and coins 🪙, and chat with the <strong>AI Voice Tutor</strong>! 🤖
            </p>

            <div className="flex flex-col gap-4 w-full">
              <button
                onClick={() => navigate('/signup')}
                className="btn-primary w-full text-xl py-4 bg-gradient-to-b from-kid-primary to-kid-primary-dark shadow-[0_8px_16px_rgba(59,130,246,0.3),inset_0_4px_8px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2"
              >
                <UserPlus size={24} strokeWidth={2.5} />
                Sign Up For Free!
              </button>
              
              <button
                onClick={() => navigate('/login')}
                className="btn-secondary w-full text-xl py-4 flex items-center justify-center gap-2"
              >
                <LogIn size={24} strokeWidth={2.5} />
                Already have an account? Login
              </button>
              
              <button
                onClick={onClose}
                className="text-slate-500 font-bold hover:text-slate-700 transition-colors py-2 text-lg"
              >
                Keep Playing Free Games
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GuestUnlockModal;
