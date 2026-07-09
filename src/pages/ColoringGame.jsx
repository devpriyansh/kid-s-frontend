import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { coloringPages } from '../data/coloringPages';
import ConfettiEffect from '../components/common/ConfettiEffect';
import { Undo2, Trash2, CheckCircle2 } from 'lucide-react';

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
    <div className="absolute inset-0 z-[100] bg-kid-bg flex flex-col items-center justify-center overflow-hidden">
      <style jsx global>{`
        .svg-coloring-container svg {
          width: 100%;
          height: 100%;
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
      `}</style>
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-kid-primary/20 blur-[100px] mix-blend-multiply"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-kid-yellow/20 blur-[150px] mix-blend-multiply"
          animate={{ scale: [1, 1.1, 1], x: [0, -40, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <button 
        onClick={() => navigate('/coloring')}
        className="absolute top-4 left-4 z-[60] bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] font-bold text-slate-600 flex items-center gap-2 border-2 border-slate-200 hover:bg-white transition-colors"
      >
        ⬅️ <span className="hidden sm:inline">Back</span>
      </button>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full flex flex-col max-w-7xl mx-auto p-2 z-10 pt-14 sm:pt-2">
        {showConfetti && <ConfettiEffect />}
        
        <div className="flex-none flex flex-col md:flex-row items-center justify-between mb-2 mt-0 sm:ml-24 gap-2">
          <div className="glass-panel px-4 py-1 sm:px-6 sm:py-2 border-white/60 inline-block">
            <h1 className="text-lg md:text-xl font-baloo font-black gradient-text drop-shadow-sm leading-tight">Coloring: {page.title}</h1>
          </div>
          <div className="flex gap-2 mt-1 md:mt-0">
            <button onClick={handleUndo} disabled={history.length === 0} className="btn-chunky px-2 py-1 sm:px-4 sm:py-2 bg-gradient-to-b from-kid-primary to-kid-primary-dark shadow-[0_4px_8px_rgba(59,130,246,0.3),inset_0_2px_4px_rgba(255,255,255,0.4)] disabled:opacity-50 flex items-center gap-1 text-xs sm:text-sm">
              <Undo2 size={16} strokeWidth={2.5} className="drop-shadow-sm" /> Undo
            </button>
            <button onClick={handleClear} className="btn-chunky px-2 py-1 sm:px-4 sm:py-2 bg-gradient-to-b from-red-400 to-red-500 shadow-[0_8px_16px_rgba(248,113,113,0.3),inset_0_4px_8px_rgba(255,255,255,0.4)] flex items-center gap-1 text-xs sm:text-sm">
              <Trash2 size={16} strokeWidth={2.5} className="drop-shadow-sm" /> Clear
            </button>
            <button onClick={handleFinish} className="btn-chunky px-4 py-1 sm:px-6 sm:py-2 bg-gradient-to-b from-kid-green to-kid-green-dark shadow-[0_8px_16px_rgba(110,231,183,0.3),inset_0_4px_8px_rgba(255,255,255,0.4)] flex items-center gap-1 text-xs sm:text-sm">
              <CheckCircle2 size={16} strokeWidth={2.5} className="drop-shadow-sm" /> Finish
            </button>
          </div>
        </div>

        <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-2 md:gap-4 overflow-hidden pb-2 px-1">
          
          {/* Main Canvas */}
          <div className="flex-1 glass-panel p-2 sm:p-4 border-white/60 relative min-h-0 overflow-hidden flex justify-center items-center shadow-[inset_0_4px_12px_rgba(0,0,0,0.05)]">
            <div className="absolute inset-0 bg-white/40 rounded-[2rem] pointer-events-none"></div>
            <div 
              ref={svgContainerRef}
              className="w-full h-full cursor-crosshair svg-coloring-container relative z-10 drop-shadow-md flex items-center justify-center"
              onClick={handleSvgClick}
              dangerouslySetInnerHTML={{ __html: page.svgContent }}
            />
          </div>

          {/* Sidebar Controls */}
          <div className="flex-none w-full lg:w-64 xl:w-80 flex flex-row lg:flex-col gap-2 overflow-y-auto hide-scrollbar pb-2">
            
            {/* Reference Image */}
            <div className="glass-panel p-2 text-center border-white/60 relative flex-1 lg:flex-none max-w-[50%] lg:max-w-none">
              <h3 className="font-black font-baloo text-kid-primary-dark mb-1 sm:mb-2 text-lg sm:text-xl drop-shadow-sm">Reference</h3>
              <div 
                className="w-full aspect-square bg-white/60 rounded-xl shadow-[inset_0_4px_12px_rgba(0,0,0,0.05)] p-2 pointer-events-none border-[2px] border-white/80 mx-auto max-h-[150px] max-w-[150px]"
                dangerouslySetInnerHTML={{ __html: page.referenceSvgContent }}
              />
            </div>

            {/* Color Palette */}
            <div className="glass-panel p-2 border-white/60 relative flex-1 lg:flex-none">
              <h3 className="font-black font-baloo text-kid-primary-dark mb-2 text-center text-lg sm:text-xl drop-shadow-sm">Colors</h3>
              <div className="grid grid-cols-5 lg:grid-cols-4 gap-2 justify-items-center relative z-10">
                {COLORS.map(color => (
                  <button
                    key={color}
                    onClick={() => setCurrentColor(color)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all duration-300 ${currentColor === color ? 'scale-125 z-10 border-2 sm:border-4 border-white shadow-[0_8px_16px_rgba(0,0,0,0.2)]' : 'scale-100 border-2 border-white/60 shadow-[0_4px_8px_rgba(0,0,0,0.1)] hover:scale-110 hover:border-white'}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ColoringGame;
