import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useClass } from '../contexts/ClassContext';
import { useKid } from '../contexts/KidContext';
import { getClass } from '../data/curriculum';
import { useProgress } from '../hooks/useProgress';
import { ArrowLeft } from 'lucide-react';

const ModuleHub = () => {
  const { moduleId } = useParams();
  const { selectedClass } = useClass();
  const { selectedKid } = useKid();
  const navigate = useNavigate();
  const { progress } = useProgress();

  const classData = getClass(selectedClass);
  const allModules = useMemo(() => {
    if (!classData || !classData.subjects) return [];
    return Object.values(classData.subjects).flat();
  }, [classData]);

  const module = allModules.find(m => m.id === moduleId);

  if (!selectedClass || !selectedKid) {
    navigate('/child-profiles');
    return null;
  }

  if (!module) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-3xl font-baloo font-black text-kid-primary">Module Not Found</h2>
        <button onClick={() => navigate('/class-dashboard')} className="btn-primary mt-4">Back to Dashboard</button>
      </div>
    );
  }

  const moduleProgress = progress[moduleId] || { completed: [] };

  return (
    <div className="absolute inset-0 z-50 bg-kid-bg flex flex-col overflow-y-auto overflow-x-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-kid-primary/10 blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-kid-yellow/10 blur-[150px]" />
      </div>

      <div className="relative z-10 p-4 sm:p-8 max-w-7xl mx-auto w-full min-h-full pb-20">
        {/* Header Banner */}
        <div className="flex items-center gap-4 mb-8 bg-white/60 backdrop-blur-md p-4 rounded-3xl shadow-sm border-2 border-white">
          <button 
            onClick={() => navigate(-1)} 
            className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] font-bold text-slate-600 flex items-center gap-2 border-2 border-slate-200 hover:bg-white transition-colors"
          >
            <ArrowLeft size={28} strokeWidth={3} />
          </button>
          <div className="flex items-center gap-3">
            <span className="text-5xl">{module.icon}</span>
            <h1 className="text-3xl sm:text-5xl font-baloo font-black text-kid-primary-dark drop-shadow-sm">{module.title}</h1>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {module.lessons.map((lesson, index) => {
            const isCompleted = moduleProgress.completed.includes(index);
            return (
              <motion.div
                key={lesson.id}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/word-hub/${moduleId}/${index}`)}
                className="glass-card-premium bg-white/90 group text-center aspect-square flex flex-col items-center justify-center relative cursor-pointer overflow-hidden border-[3px] border-white shadow-lg hover:shadow-2xl transition-all rounded-3xl"
              >
                {isCompleted && (
                  <div className="absolute top-2 right-2 text-2xl z-20 drop-shadow-sm">⭐</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
                <div className="text-[4rem] sm:text-[5rem] font-baloo font-black text-kid-primary-dark drop-shadow-md leading-none relative z-10 group-hover:scale-110 transition-transform">
                  {lesson.letter || lesson.number || lesson.image || lesson.word[0]}
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-500 mt-2 z-10 px-2 line-clamp-1">
                  {lesson.word || `Lesson ${index + 1}`}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ModuleHub;
