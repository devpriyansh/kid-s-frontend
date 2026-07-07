import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FeedMonkey = ({ correctAnswer, onComplete, onWrong }) => {
  const [fruits, setFruits] = useState([]);
  const [selected, setSelected] = useState(null);
  const [message, setMessage] = useState('');
  const [monkeyHappy, setMonkeyHappy] = useState(false);

  // Predefined fruit emojis
  const fruitMap = {
    Apple: '🍎',
    Banana: '🍌',
    Orange: '🍊',
    Mango: '🥭',
    Grapes: '🍇',
    Strawberry: '🍓',
  };

  useEffect(() => {
    // Generate 4 random fruits including the correct one
    const allFruits = Object.keys(fruitMap);
    let options = [correctAnswer];
    while (options.length < 4) {
      const rand = allFruits[Math.floor(Math.random() * allFruits.length)];
      if (!options.includes(rand)) options.push(rand);
    }
    setFruits(options.sort(() => Math.random() - 0.5));
  }, [correctAnswer]);

  const handleFeed = (fruit) => {
    if (selected) return;
    setSelected(fruit);
    if (fruit === correctAnswer) {
      setMonkeyHappy(true);
      setMessage('🎉 Yay! Monkey loves ' + fruit + '!');
      setTimeout(() => {
        onComplete();
      }, 1500);
    } else {
      setMessage('😢 Monkey doesn\'t like ' + fruit + '... Try again!');
      onWrong && onWrong();
      setTimeout(() => {
        setSelected(null);
        setMessage('');
      }, 1000);
    }
  };

  return (
    <div className="text-center p-4">
      <h3 className="text-2xl font-bold mb-4">🐒 Feed the Monkey! {correctAnswer}</h3>
      <div className="flex flex-col items-center">
        <div className="text-8xl mb-4">
          {monkeyHappy ? '🐵🙌' : '🐵'}
        </div>
        <p className="text-xl mb-4">{monkeyHappy ? 'Monkey is happy!' : 'Give the monkey a ' + correctAnswer}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {fruits.map((fruit) => (
            <motion.div
              key={fruit}
              className="w-24 h-24 bg-white rounded-3xl shadow-lg flex items-center justify-center text-5xl cursor-pointer hover:scale-110 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleFeed(fruit)}
              style={{ opacity: selected && selected !== fruit ? 0.5 : 1 }}
            >
              {fruitMap[fruit]}
            </motion.div>
          ))}
        </div>
        {message && <p className="mt-4 text-2xl font-bold">{message}</p>}
      </div>
    </div>
  );
};

export default FeedMonkey;