import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useClass } from '../contexts/ClassContext';
import { useKid } from '../contexts/KidContext';
import { getClass } from '../data/curriculum';
import { PlayCircle, Sparkles, Gamepad2, PenTool, Lightbulb } from 'lucide-react';

const WordHub = () => {
  const { moduleId, lessonIndex } = useParams();
  const { selectedClass } = useClass();
  const { selectedKid } = useKid();
  const navigate = useNavigate();

  const classData = getClass(selectedClass);
  const allModules = useMemo(() => {
    if (!classData || !classData.subjects) return [];
    return Object.values(classData.subjects).flat();
  }, [classData]);

  const module = allModules.find(m => m.id === moduleId);
  const index = parseInt(lessonIndex, 10);
  const lesson = module?.lessons?.[index];

  if (!selectedClass || !selectedKid) {
    navigate('/child-profiles');
    return null;
  }

  if (!module || !lesson) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-3xl font-baloo font-black text-kid-primary">Lesson Not Found</h2>
        <button onClick={() => navigate('/class-dashboard')} className="btn-primary mt-4">Back to Dashboard</button>
      </div>
    );
  }

  const activities = [
    { id: 'intro', label: 'Introduction', step: 1, icon: PlayCircle, color: 'kid-primary', desc: 'Learn the letter' },
    { id: 'vocab', label: 'Vocabulary', step: 2, icon: Sparkles, color: 'kid-pink', desc: 'See words with this letter' },
    { id: 'practice', label: 'Practice', step: 3, icon: PenTool, color: 'kid-purple', desc: 'Trace the letter' },
    { id: 'game', label: 'Play Game', step: 4, icon: Gamepad2, color: 'kid-green', desc: 'Fun mini-game' },
    { id: 'quiz', label: 'Take Quiz', step: 5, icon: Lightbulb, color: 'kid-yellow-dark', desc: 'Test your knowledge' }
  ];

  return (
    <div className="absolute inset-0 bg-kid-bg flex flex-col p-4 sm:p-8 overflow-y-auto hide-scrollbar z-50">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-kid-primary/10 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[40vw] h-[40vw] rounded-full bg-kid-secondary/10 blur-[100px]" />
      </div>

      <div className="flex items-center gap-4 mb-8 relative z-10">
        <button onClick={() => navigate(`/module/${moduleId}`)} className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm font-bold text-slate-600 border-2 border-slate-200 hover:bg-white transition-colors">
          ⬅️ Back
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-6xl mx-auto w-full relative z-10 flex-1">
        {/* Left Column - Featured Letter/Word */}
        <div className="flex-1 flex flex-col items-center">
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-[10rem] sm:text-[15rem] font-baloo font-black text-kid-primary-dark leading-none drop-shadow-2xl bg-white/60 p-10 rounded-[4rem] border-[8px] border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
          >
            {lesson.letter || lesson.number || lesson.image}
          </motion.div>
          <h1 className="text-4xl sm:text-6xl font-baloo font-black text-slate-700 mt-6 capitalize drop-shadow-sm">
            {lesson.word || `Letter ${lesson.letter}`}
          </h1>
        </div>

        {/* Right Column - Activities Grid */}
        <div className="flex-1 w-full max-w-md grid grid-cols-1 sm:grid-cols-2 gap-4">
          {activities.map((act) => {
            const Icon = act.icon;
            // Disable vocab if no examples, etc.
            const isDisabled = 
              (act.step === 2 && (!lesson.examples || lesson.examples.length === 0)) ||
              (act.step === 3 && (!lesson.practice && !lesson.trace)) ||
              (act.step === 4 && (!lesson.games && !lesson.game)) ||
              (act.step === 5 && (!lesson.quizzes && !lesson.quiz));

            if (isDisabled) return null;

            return (
              <motion.button
                key={act.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/lesson/${moduleId}/${index}?step=${act.step}`)}
                className={`glass-card-premium flex flex-col items-center p-6 text-center border-[3px] border-white/80 bg-gradient-to-br from-white/90 to-white/50 shadow-lg hover:shadow-xl transition-all ${
                  act.step === 1 ? 'sm:col-span-2' : '' // Make intro span full width
                }`}
              >
                <div className={`p-4 rounded-full bg-slate-100 text-${act.color} mb-3`}>
                  <Icon size={32} strokeWidth={2.5} />
                </div>
                <h3 className={`font-baloo font-black text-xl sm:text-2xl text-${act.color}`}>{act.label}</h3>
                <p className="text-slate-500 font-bold text-sm mt-1">{act.desc}</p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WordHub;
