import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { coloringPages } from '../data/coloringPages';

const ColoringSelection = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div className="text-center">
        <h1 className="text-5xl font-fredoka font-bold gradient-text drop-shadow-md">🖍️ Coloring Games!</h1>
        <p className="text-2xl mt-4 text-gray-600">Choose a picture to color and let your imagination run wild!</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {coloringPages.map((page) => (
          <Link to={`/coloring/${page.id}`} key={page.id}>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="glass-card p-4 rounded-3xl cursor-pointer text-center border-4 border-transparent hover:border-kid-purple transition-all duration-300"
            >
              <div 
                className="w-full aspect-square bg-white rounded-2xl p-2 shadow-inner mb-4 pointer-events-none"
                dangerouslySetInnerHTML={{ __html: page.referenceSvgContent }} 
              />
              <h3 className="text-xl font-bold font-fredoka text-gray-800">{page.title}</h3>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default ColoringSelection;
