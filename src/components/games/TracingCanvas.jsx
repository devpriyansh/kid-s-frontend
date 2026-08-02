import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Eraser } from 'lucide-react';
import ConfettiEffect from '../common/ConfettiEffect';

const TracingCanvas = ({ letter, onComplete }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Set proper resolution for retina displays
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 24;
    ctx.strokeStyle = '#8B5CF6'; // kid-purple
  }, []);

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    if (e.touches && e.touches.length > 0) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const startDrawing = (e) => {
    e.preventDefault(); // prevent scrolling while drawing on touch
    setIsDrawing(true);
    setHasDrawn(true);
    const { x, y } = getCoordinates(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const { x, y } = getCoordinates(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.closePath();
    }
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
  };

  const handleComplete = () => {
    setShowConfetti(true);
    setTimeout(() => {
      onComplete();
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto">
      {showConfetti && <ConfettiEffect />}
      
      <div className="relative w-full aspect-square bg-white rounded-[3rem] border-[6px] border-white/60 shadow-xl overflow-hidden touch-none glass-panel">
        {/* Background Letter */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[12rem] sm:text-[18rem] font-baloo font-black text-slate-200/50 dashed-text">
            {letter}
          </span>
        </div>
        
        {/* Drawing Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-10 cursor-crosshair touch-none"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
      </div>

      <div className="flex gap-4 mt-6">
        <button 
          onClick={clearCanvas} 
          className="btn-chunky px-6 py-3 bg-white text-slate-500 border-2 border-slate-200 shadow-sm flex items-center gap-2 hover:bg-slate-50"
        >
          <Eraser size={24} /> Clear
        </button>
        <button 
          onClick={handleComplete} 
          disabled={!hasDrawn}
          className={`btn-chunky px-8 py-3 flex items-center gap-2 ${
            hasDrawn 
              ? 'bg-gradient-to-b from-kid-green to-kid-green-dark shadow-[0_8px_16px_rgba(16,185,129,0.3),inset_0_4px_8px_rgba(255,255,255,0.4)] text-white' 
              : 'bg-slate-200 text-slate-400 cursor-not-allowed opacity-50 shadow-none'
          }`}
        >
          I Did It! <CheckCircle2 size={24} />
        </button>
      </div>

      <style jsx>{`
        .dashed-text {
          -webkit-text-stroke: 4px rgba(148, 163, 184, 0.3);
          -webkit-text-fill-color: transparent;
          border-bottom: 4px dashed rgba(148, 163, 184, 0.2);
        }
      `}</style>
    </div>
  );
};

export default TracingCanvas;
