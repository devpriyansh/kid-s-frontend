import React, { createContext, useContext, useState, useEffect } from 'react';

const RewardContext = createContext();

export const RewardProvider = ({ children }) => {
  const [rewards, setRewards] = useState({
    stars: 0,
    coins: 0,
    xp: 0,
    level: 1,
    streak: 0,
    badges: [],
  });

  // Load rewards from localStorage (mock persistence)
  useEffect(() => {
    const saved = localStorage.getItem('rewards');
    if (saved) setRewards(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('rewards', JSON.stringify(rewards));
  }, [rewards]);

  const addStars = (count) => {
    setRewards(prev => {
      let newXp = prev.xp + count * 10;
      let newLevel = prev.level;
      if (newXp >= prev.level * 100) {
        newLevel = prev.level + 1;
      }
      return {
        ...prev,
        stars: prev.stars + count,
        xp: newXp,
        level: newLevel,
      };
    });
  };

  const addCoins = (count) => {
    setRewards(prev => ({ ...prev, coins: prev.coins + count }));
  };

  const addBadge = (badge) => {
    setRewards(prev => {
      if (!prev.badges.includes(badge)) {
        return { ...prev, badges: [...prev.badges, badge] };
      }
      return prev;
    });
  };

  const updateStreak = (newStreak) => {
    setRewards(prev => ({ ...prev, streak: newStreak }));
  };

  return (
    <RewardContext.Provider value={{ rewards, addStars, addCoins, addBadge, updateStreak }}>
      {children}
    </RewardContext.Provider>
  );
};

export const useReward = () => useContext(RewardContext);