import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { coloringPages } from '../data/coloringPages';
import ConfettiEffect from '../components/common/ConfettiEffect';

const COLORS = [
  '#ef4444', '#f97316', '#f59e0b', '#fcd34d', 
  '#84cc16', '#22c55e', '#10b981', '#14b8a6', 
  '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1', 
  '#8b5cf6', '#a855f7', '#d946ef', '#ec4899',
  '#f43f5e', '#ffffff', '#94a3b8', '#000000'
];

const ColoringGame = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const page = coloringPages.find(p => p.id.toString() === id);
  
  const [currentColor, setCurrentColor] = useState(COLORS[0]);
  const [history, setHistory] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  
  const svgContainerRef = useRef(null);

  useEffect(() => {
    if (!page) {
      navigate('/coloring');
    }
  }, [page, navigate]);

  if (!page) return null;

  const handleSvgClick = (e) => {
    const target = e.target;
    const validTags = ['path', 'circle', 'rect', 'polygon', 'ellipse'];
    
    if (validTags.includes(target.tagName.toLowerCase())) {
      const oldColor = target.getAttribute('fill') || 'white';
      
      if (oldColor !== currentColor) {
        target.setAttribute('fill', currentColor);
        setHistory(prev => [...prev, { element: target, oldColor }]);
      }
    }
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    
    const newHistory = [...history];
    const lastAction = newHistory.pop();
    
    if (lastAction && lastAction.element) {
      lastAction.element.setAttribute('fill', lastAction.oldColor);
    }
    
    setHistory(newHistory);
  };

  const handleClear = () => {
    if (!svgContainerRef.current) return;
    
    const elements = svgContainerRef.current.querySelectorAll('path, circle, rect, polygon, ellipse');
    elements.forEach(el => {
      el.setAttribute('fill', 'white');
    });
    setHistory([]);
  };

  const handleFinish = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-[100dvh] overflow-hidden flex flex-col max-w-7xl mx-auto p-4">
      {showConfetti && <ConfettiEffect />}
      
      <div className="flex-none flex flex-col md:flex-row items-center justify-between mb-4">
        <h1 className="text-4xl font-fredoka font-bold gradient-text drop-shadow-sm">Coloring: {page.title}</h1>
        <div className="flex gap-4 mt-4 md:mt-0">
          <button onClick={handleUndo} disabled={history.length === 0} className="btn-secondary px-6 py-2 disabled:opacity-50">
            ↩️ Undo
          </button>
          <button onClick={handleClear} className="btn-secondary px-6 py-2 bg-red-100 hover:bg-red-200 border-red-300">
            🗑️ Clear
          </button>
          <button onClick={handleFinish} className="btn-primary px-6 py-2">
            ✅ Finish
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-4 md:gap-8 overflow-y-auto lg:overflow-hidden pb-4 hide-scrollbar">
        
        {/* Main Canvas */}
        <div className="flex-1 bg-white rounded-3xl p-4 shadow-xl border-8 border-gray-100 relative min-h-0 overflow-y-auto hide-scrollbar">
          <div 
            ref={svgContainerRef}
            className="w-full h-full cursor-crosshair svg-coloring-container"
            onClick={handleSvgClick}
            dangerouslySetInnerHTML={{ __html: page.svgContent }}
          />
        </div>

        {/* Sidebar Controls */}
        <div className="flex-none w-full lg:w-80 flex flex-col gap-4 overflow-y-auto hide-scrollbar pb-4">
          
          {/* Reference Image */}
          <div className="glass-card p-4 text-center">
            <h3 className="font-bold text-gray-700 mb-2">Reference</h3>
            <div 
              className="w-full aspect-square bg-white rounded-xl shadow-inner p-2 pointer-events-none"
              dangerouslySetInnerHTML={{ __html: page.referenceSvgContent }}
            />
          </div>

          {/* Color Palette */}
          <div className="glass-card p-6">
            <h3 className="font-bold text-gray-700 mb-4 text-center">Colors</h3>
            <div className="grid grid-cols-4 gap-3">
              {COLORS.map(color => (
                <button
                  key={color}
                  onClick={() => setCurrentColor(color)}
                  className={`w-12 h-12 rounded-full border-4 shadow-sm transition-transform ${currentColor === color ? 'scale-125 z-10 border-gray-800' : 'scale-100 border-transparent hover:scale-110'}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.div>
  );
};

export default ColoringGame;
