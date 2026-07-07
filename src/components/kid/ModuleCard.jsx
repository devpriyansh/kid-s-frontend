import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ModuleCard = ({ module }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        to={`/activity/${module.id}`}
        className={`block p-4 rounded-3xl shadow-lg bg-gradient-to-br ${module.color} text-white text-center h-full hover:shadow-2xl transition`}
      >
        <div className="text-5xl mb-2">{module.icon}</div>
        <p className="font-fredoka font-bold text-lg">{module.title}</p>
      </Link>
    </motion.div>
  );
};

export default ModuleCard;