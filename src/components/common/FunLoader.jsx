import React from 'react';
import { motion } from 'framer-motion';

const FunLoader = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] w-full h-full p-8">
      <div className="relative flex items-center justify-center mb-6">
        {/* Outer glowing ring */}
        <motion.div
          className="absolute w-24 h-24 rounded-full border-4 border-kid-purple/30 border-t-kid-purple"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner bouncing star */}
        <motion.div
          className="text-4xl filter drop-shadow-md z-10"
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          ⭐
        </motion.div>
        
        {/* Particle dots */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-kid-yellow rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: Math.cos((i * 120 * Math.PI) / 180) * 40,
              y: Math.sin((i * 120 * Math.PI) / 180) * 40
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
      
      <motion.h3 
        className="text-xl md:text-2xl font-bold text-kid-purple text-center tracking-wide"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {message}
      </motion.h3>
    </div>
  );
};

export default FunLoader;
