import React from 'react';
import { motion } from 'framer-motion';

const FloatingCloud = () => {
  return (
    <motion.div
      className="absolute top-10 left-10 text-6xl opacity-30"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      ☁️
    </motion.div>
  );
};

export default FloatingCloud;