import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useKid } from '../contexts/KidContext';
import AIVoiceTutor from '../components/AIVoiceTutor';

const AITutorPage = () => {
  const navigate = useNavigate();
  const { selectedKid } = useKid();
  const [systemPrompt, setSystemPrompt] = useState("");

  useEffect(() => {
    if (!selectedKid) {
      navigate('/child-profiles');
      return;
    }

    const age = selectedKid.age || 'nursery';
    let ageText = "3-4";
    if (age === 'kg1') ageText = "4-5";
    if (age === 'kg2') ageText = "5-6";

    const prompt = `You are an AI Voice Tutor named Hootie, a friendly owl. You are teaching a ${ageText} year old child named ${selectedKid.name}. 
    Use extremely simple language, very short sentences, and a very encouraging, enthusiastic tone. 
    Act like a kindergarten teacher. Do not use complex words or long paragraphs. 
    Congratulate the child often. If they ask a question, answer simply in 1-2 sentences.`;

    setSystemPrompt(prompt);
  }, [selectedKid, navigate]);

  if (!selectedKid || !systemPrompt) return null;

  return (
    <div className="absolute inset-0 z-[100] bg-kid-bg flex flex-col items-center justify-center overflow-hidden">
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
        onClick={() => navigate('/class-dashboard')}
        className="absolute top-4 left-4 z-[60] bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] font-bold text-slate-600 flex items-center gap-2 border-2 border-slate-200 hover:bg-white transition-colors"
      >
        ⬅️ <span className="hidden sm:inline">Back</span>
      </button>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="flex-1 w-full flex flex-col max-w-4xl mx-auto p-2 z-10 pt-16 sm:pt-4"
      >
        <div className="flex-none items-center justify-center mb-2 sm:mb-4 text-center">
          <h1 className="text-2xl sm:text-4xl font-baloo font-black text-kid-primary-dark drop-shadow-sm glass-panel inline-block px-6 py-2">
            Talk to Hootie! 🦉
          </h1>
        </div>

        {/* Main Component */}
        <div className="flex-1 min-h-0 w-full relative">
          <AIVoiceTutor systemPrompt={systemPrompt} onBack={() => navigate('/class-dashboard')} />
        </div>
      </motion.div>
    </div>
  );
};

export default AITutorPage;
