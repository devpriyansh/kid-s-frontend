import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FloatingCloud from '../../components/common/FloatingCloud';
import Mascot from '../../components/common/Mascot';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 relative overflow-hidden">
      <FloatingCloud />
      
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl font-fredoka font-bold gradient-text mb-4">
          🌟 Learn & Play!
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 font-nunito mb-8 max-w-lg mx-auto">
          A magical adventure for Nursery, KG1 & KG2 kids.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/login" className="btn-primary text-xl px-10 py-5">
            🚀 Get Started
          </Link>
          <Link to="/parent-dashboard" className="btn-secondary text-xl px-10 py-5">
            👨‍👩‍👦 Parent Dashboard
          </Link>
        </div>
      </motion.div>

      <Mascot className="absolute bottom-10 right-10 w-32 h-32 animate-bounce-slow" />
      <div className="absolute top-10 left-10 w-20 h-20 bg-kid-yellow rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-kid-purple rounded-full opacity-20 blur-3xl"></div>
    </div>
  );
};

export default Landing;