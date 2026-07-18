import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FloatingCloud from '../../components/common/FloatingCloud';
import Mascot from '../../components/common/Mascot';
import { Rocket, ShieldCheck } from 'lucide-react';

const Landing = () => {
  return (
    <div className="flex-1 w-full h-full flex flex-col items-center justify-center p-4 bg-transparent relative overflow-hidden">
      <FloatingCloud />
      
      <motion.div
        initial={{ y: -50, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
        className="text-center z-10 w-full max-w-5xl glass-card p-12 md:p-16 flex flex-col items-center"
      >
        <motion.div 
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8 relative flex flex-col items-center gap-6"
        >
          <div className="absolute inset-0 bg-white/20 blur-xl rounded-full"></div>
          <img src="/logo.png" alt="kidsLearn Logo" className="w-40 h-40 sm:w-48 sm:h-48 drop-shadow-2xl relative z-10" />
          <span className="text-6xl sm:text-[5rem] font-baloo font-black tracking-wide" style={{ filter: 'drop-shadow(0 4px 0 rgba(79, 70, 229, 0.2)) drop-shadow(0 8px 12px rgba(0,0,0,0.15))' }}>
            <span className="text-kid-primary" style={{ WebkitTextStroke: '2px white' }}>kids</span>
            <span className="text-kid-yellow-dark" style={{ WebkitTextStroke: '2px white' }}>Learn</span>
          </span>
        </motion.div>
        
        <p className="text-2xl md:text-4xl text-kid-text font-bold font-nunito mb-12 max-w-3xl mx-auto drop-shadow-sm leading-relaxed">
          A magical learning adventure perfectly crafted for Nursery, KG1 & KG2.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-3xl mt-4">
          <Link to="/play" className="btn-primary flex-1 text-2xl py-6 flex items-center justify-center gap-4 group">
            <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring", stiffness: 300 }}>
              <Rocket size={36} strokeWidth={2.5} className="group-hover:text-white transition-colors" />
            </motion.div>
            Play Now!
          </Link>
          <Link to="/parent-dashboard" className="btn-secondary flex-1 text-2xl py-6 flex items-center justify-center gap-4 group">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <ShieldCheck size={36} strokeWidth={2.5} className="text-kid-primary-dark" />
            </motion.div>
            Parents Area
          </Link>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 right-8 z-20 pointer-events-none"
      >
        <Mascot className="w-48 h-48 drop-shadow-2xl" />
      </motion.div>
    </div>
  );
};

export default Landing;