import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PopBalloon = ({ correctAnswer, onComplete, onWrong }) => {
  const [balloons, setBalloons] = useState([]);
  const [popped, setPopped] = useState(false);
  const [message, setMessage] = useState('');

  // Generate 6 balloons with random letters including the correct one
  useEffect(() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let options = [correctAnswer];
    // Add 5 random distinct letters
    while (options.length < 6) {
      const rand = letters[Math.floor(Math.random() * letters.length)];
      if (!options.includes(rand)) options.push(rand);
    }
    // Shuffle
    const shuffled = options.sort(() => Math.random() - 0.5);
    setBalloons(shuffled.map((letter, idx) => ({ id: idx, letter, popped: false })));
  }, [correctAnswer]);

  const handleClick = (balloon) => {
    if (popped) return;
    if (balloon.letter === correctAnswer) {
      // Correct!
      setPopped(true);
      setMessage('🎉 Great!');
      // Animate pop
      setBalloons(prev => prev.map(b => 
        b.id === balloon.id ? { ...b, popped: true } : b
      ));
      setTimeout(() => {
        onComplete();
      }, 1000);
    } else {
      // Wrong – shake
      setMessage('❌ Try again!');
      // Shake animation will be handled by the component via a class or Framer Motion
      // We'll just flash red
      const el = document.getElementById(`balloon-${balloon.id}`);
      if (el) {
        el.style.transition = '0.1s';
        el.style.backgroundColor = '#ffcccc';
        setTimeout(() => {
          el.style.backgroundColor = '';
        }, 300);
      }
      onWrong && onWrong();
    }
  };

  return (
    <div className="text-center p-4">
      <h3 className="text-2xl font-bold mb-4">🎈 Pop the Balloon with the letter <span className="text-kid-primary">{correctAnswer}</span></h3>
      <div className="flex flex-wrap justify-center gap-4">
        {balloons.map((balloon) => (
          <motion.div
            key={balloon.id}
            id={`balloon-${balloon.id}`}
            className="relative w-24 h-32 cursor-pointer"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            onClick={() => handleClick(balloon)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {!balloon.popped ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-pink-400 to-pink-600 rounded-full shadow-lg">
                <span className="text-4xl font-bold text-white">{balloon.letter}</span>
              </div>
            ) : (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 1 }}
                animate={{ scale: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-6xl">💥</span>
              </motion.div>
            )}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-400"></div>
          </motion.div>
        ))}
      </div>
      {message && <p className="mt-4 text-2xl font-bold">{message}</p>}
    </div>
  );
};

export default PopBalloon;