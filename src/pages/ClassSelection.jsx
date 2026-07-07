import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useClass } from '../contexts/ClassContext';
import { CLASSES } from '../data/curriculum';
import ProgressRing from '../components/common/ProgressRing';
import Mascot from '../components/common/Mascot';

const ClassSelection = () => {
  const navigate = useNavigate();
  const { setSelectedClass } = useClass();

  // For demo progress, we can compute from localStorage or keep static
  const getProgress = (classId) => {
    // In real app, fetch from localStorage per kid
    return { completed: 18, total: 120, stars: 40, level: 2 };
  };

  const handleSelect = (classId) => {
    setSelectedClass(classId);
    navigate('/class-dashboard');
  };

  return (
    <div className="min-h-screen py-10 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <h1 className="text-4xl md:text-5xl font-fredoka font-bold text-center gradient-text mb-8">
        Choose Your Class 🌟
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Object.values(CLASSES).map((cls) => {
          const progress = getProgress(cls.id);
          return (
            <motion.div
              key={cls.id}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className={`glass-card p-6 text-center cursor-pointer shadow-xl hover:shadow-2xl transition border-t-8 border-${cls.color.split(' ')[0]}`}
              onClick={() => handleSelect(cls.id)}
            >
              <div className="text-7xl">{cls.icon}</div>
              <h2 className="text-3xl font-fredoka font-bold mt-2">{cls.label}</h2>
              <p className="text-gray-600 text-lg">Age {cls.age}</p>
              <div className="flex justify-center items-center gap-6 my-4">
                <ProgressRing progress={(progress.completed / progress.total) * 100} size={70} />
                <div className="text-left">
                  <p className="font-bold">{progress.completed} / {progress.total} Lessons</p>
                  <p>⭐ {progress.stars} stars</p>
                  <p>Level {progress.level}</p>
                </div>
              </div>
              <div className="flex justify-center text-2xl gap-1 mb-4">
                {'★'.repeat(Math.min(progress.level, 5))}{'☆'.repeat(Math.max(0, 5 - progress.level))}
              </div>
              <button className="btn-primary px-6 py-3 text-lg">
                {progress.completed > 0 ? 'Continue Learning 🚀' : 'Start Learning 🌱'}
              </button>
            </motion.div>
          );
        })}
      </div>
      <Mascot className="fixed bottom-4 right-4 w-20 h-20 animate-bounce-slow" />
    </div>
  );
};

export default ClassSelection;