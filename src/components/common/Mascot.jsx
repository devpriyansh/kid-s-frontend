import React from 'react';
import { motion } from 'framer-motion';

const Mascot = ({ className = "w-24 h-24" }) => {
  return (
    <motion.div
      className={`${className} flex items-center justify-center`}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <span className="text-6xl">🦊</span>
    </motion.div>
  );
};

export default Mascot;