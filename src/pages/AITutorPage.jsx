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
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="h-[100dvh] overflow-hidden flex flex-col max-w-4xl mx-auto p-4"
    >
      {/* Header */}
      <div className="flex-none flex items-center justify-between mb-4">
        <button 
          onClick={() => navigate('/class-dashboard')}
          className="bg-white/80 p-3 rounded-full shadow-md text-2xl hover:scale-105 transition-transform"
        >
          ⬅️
        </button>
        <h1 className="text-3xl font-fredoka font-bold gradient-text">Talk to Hootie!</h1>
        <div className="w-12" /> {/* Spacer for centering */}
      </div>

      {/* Main Component */}
      <div className="flex-1 min-h-0 w-full mb-4">
        <AIVoiceTutor systemPrompt={systemPrompt} />
      </div>
    </motion.div>
  );
};

export default AITutorPage;
