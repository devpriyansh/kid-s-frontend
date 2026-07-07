import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CatchStars = ({ correctAnswer, onComplete, onWrong }) => {
  const [fallingItems, setFallingItems] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  // Generate random numbers 1-9 (or letters if needed)
  const generateRandomNumber = () => Math.floor(Math.random() * 9) + 1;

  useEffect(() => {
    // Start spawning items
    intervalRef.current = setInterval(() => {
      if (gameOver) return;
      const num = generateRandomNumber();
      const isTarget = num === parseInt(correctAnswer);
      // Add new falling item
      setFallingItems(prev => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          value: num,
          x: Math.random() * 80 + 10, // % left
          y: 0,
          isTarget,
        }
      ]);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [gameOver, correctAnswer]);

  // Animate falling items
  useEffect(() => {
    const animate = setInterval(() => {
      setFallingItems(prev => 
        prev
          .map(item => ({ ...item, y: item.y + 3 }))
          .filter(item => item.y < 90) // remove if off screen
      );
    }, 50);
    return () => clearInterval(animate);
  }, []);

  const handleCatch = (item) => {
    if (gameOver) return;
    if (item.isTarget) {
      // Correct!
      setScore(prev => prev + 1);
      setMessage('🌟 Great catch!');
      // Remove item
      setFallingItems(prev => prev.filter(i => i.id !== item.id));
      if (score + 1 >= 3) { // catch 3 to win
        setGameOver(true);
        setMessage('🎉 You caught all the stars!');
        setTimeout(() => onComplete(), 1000);
      }
    } else {
      // Wrong
      setMessage('❌ That\'s not the number ' + correctAnswer);
      onWrong && onWrong();
      setFallingItems(prev => prev.filter(i => i.id !== item.id));
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-96 bg-gradient-to-b from-blue-200 to-blue-400 rounded-3xl overflow-hidden">
      <h3 className="absolute top-2 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-white bg-black/30 px-4 py-1 rounded-full z-10">
        Catch the number {correctAnswer}!
      </h3>
      <div className="absolute top-2 right-4 text-white bg-black/30 px-3 py-1 rounded-full z-10">
        ⭐ {score}/3
      </div>
      {fallingItems.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-4xl cursor-pointer"
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
          whileHover={{ scale: 1.3 }}
          onClick={() => handleCatch(item)}
          animate={{ y: [0, 5] }}
          transition={{ duration: 0.2 }}
        >
          {item.isTarget ? '🌟' : `⭐${item.value}`}
        </motion.div>
      ))}
      {message && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-xl font-bold">
          {message}
        </div>
      )}
      {gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="text-6xl">🎉</div>
        </div>
      )}
    </div>
  );
};

export default CatchStars;