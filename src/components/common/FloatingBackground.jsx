import React from 'react';
import { motion } from 'framer-motion';

const FloatingBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div animate={{ y: [0, -30, 0], rotate: [0, 10, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] left-[5%] text-6xl opacity-40">🎈</motion.div>
    <motion.div animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity, delay: 1, ease: "easeInOut" }} className="absolute top-[20%] right-[10%] text-7xl opacity-30">☁️</motion.div>
    <motion.div animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute bottom-[20%] left-[10%] text-5xl opacity-40">🌟</motion.div>
    <motion.div animate={{ y: [0, 35, 0], scale: [1, 1.1, 1] }} transition={{ duration: 7, repeat: Infinity, delay: 0.5, ease: "easeInOut" }} className="absolute bottom-[30%] right-[8%] text-6xl opacity-30">🪁</motion.div>
    
    {/* Large soft color blobs */}
    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
    <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-pink-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-yellow-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
  </div>
);

export default FloatingBackground;
