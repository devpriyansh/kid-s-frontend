import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AIVoiceTutor = ({ systemPrompt }) => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [needsApiKey, setNeedsApiKey] = useState(false);
  const [isCheckingKey, setIsCheckingKey] = useState(true);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [isSavingKey, setIsSavingKey] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [textInput, setTextInput] = useState('');
  
  const accumulatedTranscriptRef = useRef('');
  const isManualStop = useRef(false);
  const isUnmounting = useRef(false);

  const handleSaveApiKey = async () => {
    setIsSavingKey(true);
    setError(null);
    setSuccessMessage(null);
    try {
      const token = localStorage.getItem('token');
      const _envUrl = import.meta.env.VITE_API_BASE_URL;
      const API_BASE_URL = _envUrl ? (_envUrl.endsWith('/api/v1') ? _envUrl : _envUrl.replace(/\/$/, '') + '/api/v1') : 'https://kid-s-backend.onrender.com/api/v1';
      const res = await fetch(`${API_BASE_URL}/user/api-key`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ apiKey: apiKeyInput })
      });
      if (res.ok) {
        setNeedsApiKey(false);
        setSuccessMessage("API Key saved! Tap to talk again.");
        setApiKeyInput('');
        setTimeout(() => setSuccessMessage(null), 4000);
      } else {
        setError('Failed to save API key. Please try again.');
      }
    } catch (err) {
      setError('Network error saving API key.');
    } finally {
      setIsSavingKey(false);
    }
  };

  const recognitionRef = useRef(null);
  const synthesisRef = useRef(window.speechSynthesis);
  const chatContainerRef = useRef(null);

  // Check API Key Status on Mount
  useEffect(() => {
    const checkApiKey = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setIsCheckingKey(false);
          return;
        }
        const _envUrl = import.meta.env.VITE_API_BASE_URL;
        const API_BASE_URL = _envUrl ? (_envUrl.endsWith('/api/v1') ? _envUrl : _envUrl.replace(/\/$/, '') + '/api/v1') : 'https://kid-s-backend.onrender.com/api/v1';
        const res = await fetch(`${API_BASE_URL}/user/api-key-status`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          if (!data.data?.result?.hasApiKey) {
            setNeedsApiKey(true);
          }
        }
      } catch (err) {
        console.error("Failed to check API key status");
      } finally {
        setIsCheckingKey(false);
      }
    };
    checkApiKey();
  }, []);

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onstart = () => {
        setIsListening(true);
        setError(null);
        // Do not clear accumulatedTranscriptRef here, because it might be an auto-restart for a slow speaker.
      };

      recognitionRef.current.onresult = (event) => {
        let currentTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            currentTranscript += event.results[i][0].transcript + ' ';
          }
        }
        accumulatedTranscriptRef.current += currentTranscript;
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error", event.error);
        if (event.error !== 'no-speech') {
          setError(`Microphone error: ${event.error}`);
        }
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        if (isUnmounting.current) return;
        setIsListening(false);
        
        // If it ended naturally (browser timeout after silence) and we have text, send it!
        if (!isManualStop.current && accumulatedTranscriptRef.current.trim()) {
          const finalTranscript = accumulatedTranscriptRef.current.trim();
          handleUserMessage(finalTranscript);
          accumulatedTranscriptRef.current = '';
        }
      };
    } else {
      setError("Speech recognition is not supported in this browser. Try Chrome!");
    }

    // Cleanup
    return () => {
      isUnmounting.current = true;
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      if (synthesisRef.current) {
        synthesisRef.current.cancel();
      }
    };
  }, []);

  // Auto-scroll chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleUserMessage = async (transcript) => {
    if (!transcript.trim()) return;
    
    const newUserMsg = { role: 'user', content: transcript };
    setMessages((prev) => [...prev, newUserMsg]);
    setIsProcessing(true);

    try {
      const token = localStorage.getItem('token');
      const _envUrl = import.meta.env.VITE_API_BASE_URL;
      const API_BASE_URL = _envUrl ? (_envUrl.endsWith('/api/v1') ? _envUrl : _envUrl.replace(/\/$/, '') + '/api/v1') : 'https://kid-s-backend.onrender.com/api/v1';

      const response = await fetch(`${API_BASE_URL}/ai/tutor`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          systemPrompt,
          messages,
          transcript
        })
      });

      const data = await response.json();

      if (!response.ok) {
        const errStr = JSON.stringify(data.errors || data.message || data);
        if (errStr.includes("API_KEY_MISSING") || errStr.includes("API_KEY_INVALID") || errStr.includes("401") || errStr.includes("UNAUTHENTICATED")) {
          setNeedsApiKey(true);
          const aiText = "You need an API key for me to talk! Please ask an adult to enter one.";
          setMessages((prev) => [...prev, { role: 'assistant', content: aiText }]);
          speakText(aiText);
          return;
        } else if (errStr.includes("GEMINI_API_ERROR") || errStr.includes("429") || errStr.includes("RESOURCE_EXHAUSTED")) {
          setNeedsApiKey(true);
          const aiText = "We reached our limit for today! Please ask an adult to update the API key so we can keep talking.";
          setMessages((prev) => [...prev, { role: 'assistant', content: aiText }]);
          speakText(aiText);
          return;
        }
        throw new Error(data.message || "Failed to reach AI tutor.");
      }

      const aiText = data.data?.result?.reply || data.data?.reply || data.result?.reply;
      
      if (!aiText) throw new Error("No response from AI");

      setMessages((prev) => [...prev, { role: 'assistant', content: aiText }]);
      speakText(aiText);

    } catch (err) {
      console.error(err);
      setError(err.message);
      setMessages((prev) => [...prev, { role: 'assistant', content: "Oops! My brain got a little dizzy. Can we try again?" }]);
    } finally {
      setIsProcessing(false);
    }
  };

  const speakText = (text) => {
    if (!synthesisRef.current) return;
    
    synthesisRef.current.cancel(); // Stop any ongoing speech
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    
    // Try to find a friendly/female voice if available
    const voices = synthesisRef.current.getVoices();
    const friendlyVoice = voices.find(v => v.name.includes('Google') && v.name.includes('Female')) 
                       || voices.find(v => v.name.includes('Samantha') || v.name.includes('Victoria'))
                       || voices[0];
    if (friendlyVoice) {
      utterance.voice = friendlyVoice;
    }
    
    utterance.rate = 0.9; // Slightly slower for kids
    utterance.pitch = 1.2; // Slightly higher pitch to sound friendly

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    synthesisRef.current.speak(utterance);
  };

  const toggleListening = () => {
    if (isListening) {
      isManualStop.current = true;
      setIsListening(false); // Force UI update immediately
      
      try {
        recognitionRef.current?.stop();
      } catch (e) {
        console.error("Stop error", e);
      }
      
      const finalTranscript = accumulatedTranscriptRef.current.trim();
      if (finalTranscript) {
        handleUserMessage(finalTranscript);
      }
      accumulatedTranscriptRef.current = '';
    } else {
      isManualStop.current = false;
      // Stop AI speaking if child interrupts
      synthesisRef.current?.cancel();
      setIsSpeaking(false);
      setError(null);
      accumulatedTranscriptRef.current = ''; // Clear only on fresh manual start
      try {
        recognitionRef.current?.start();
      } catch (e) {
        console.error("Start error", e);
        // Fallback: If it says it's already started, assume listening is active
        setIsListening(true);
      }
    }
  };

  const handleTextSubmit = () => {
    if (!textInput.trim() || isProcessing || needsApiKey) return;
    handleUserMessage(textInput.trim());
    setTextInput('');
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 sm:glass-card sm:border-[4px] border-white relative overflow-hidden sm:shadow-[0_12px_40px_rgba(0,0,0,0.12)] sm:bg-white/60">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-kid-yellow/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-kid-pink/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none z-0" />

      {/* Top Header Area (Mascot & Title) */}
      <div className="flex-none flex items-center gap-4 sm:gap-6 p-4 sm:p-6 border-b-2 border-white/60 bg-white/50 backdrop-blur-md relative z-10 shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
        
        {/* Animated Mascot Image */}
        <motion.div 
          animate={
            isSpeaking ? { y: [0, -8, 0], scaleY: [1, 1.05, 1], scaleX: [1, 0.95, 1] } : 
            isListening ? { scale: [1, 1.05, 1] } : 
            { y: [0, -4, 0] }
          }
          transition={{
            duration: isSpeaking ? 0.3 : isListening ? 1.5 : 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`relative w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center rounded-full bg-white border-4 border-kid-primary shadow-xl z-20 ${isListening ? 'shadow-[0_0_20px_rgba(34,197,94,0.6)]' : isSpeaking ? 'shadow-[0_0_25px_rgba(168,85,247,0.7)]' : ''}`}
        >
          <img src="/hootie_the_owl.png" alt="Hootie the Owl" className="w-full h-full object-cover rounded-full" />
          
          {/* Soundwaves when speaking */}
          <AnimatePresence>
            {isSpeaking && (
              <>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: [0, 0.8, 0], scale: [1, 1.8] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-4 border-kid-purple rounded-full -z-10" />
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: [0, 0.6, 0], scale: [1, 2.2] }} transition={{ duration: 1, repeat: Infinity, delay: 0.3 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-4 border-kid-pink rounded-full -z-10" />
              </>
            )}
            {isListening && (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: [0, 0.4, 0], scale: [1, 1.4] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-400 rounded-full -z-10" />
            )}
          </AnimatePresence>
        </motion.div>
        
        <div className="flex-1">
          <h2 className="text-2xl sm:text-4xl font-black text-kid-primary-dark font-baloo drop-shadow-sm leading-tight">Hootie the Tutor</h2>
          <p className="text-slate-500 font-bold text-sm sm:text-lg font-nunito mt-1">
            {isListening ? "Listening to you..." : isSpeaking ? "Hootie is talking..." : isProcessing ? "Hootie is thinking..." : "Tap the mic to talk!"}
          </p>
        </div>

        {/* API Key Settings Button */}
        <button 
          onClick={() => setNeedsApiKey(!needsApiKey)}
          className="p-3 sm:p-4 bg-white text-xl sm:text-2xl hover:bg-slate-50 border-2 border-slate-200 rounded-2xl shadow-[0_4px_8px_rgba(0,0,0,0.05),inset_0_-2px_4px_rgba(0,0,0,0.05)] transition-all hover:scale-105"
          title="Configure API Key"
        >
          ⚙️
        </button>
      </div>

      {/* Messages / Alerts */}
      <div className="flex-none px-6 pt-4 relative z-10 w-full flex flex-col gap-2">
        {successMessage && (
          <div className="bg-green-100/90 backdrop-blur-sm border-l-4 border-green-500 text-green-700 p-3 sm:p-4 rounded-xl shadow-sm text-sm sm:text-base font-bold w-full">
            {successMessage}
          </div>
        )}
        {error && (
          <div className="bg-red-100/90 backdrop-blur-sm border-l-4 border-red-500 text-red-700 p-3 sm:p-4 rounded-xl shadow-sm text-sm sm:text-base font-bold w-full">
            {error}
          </div>
        )}
      </div>

      {/* Chat History Well */}
      <div ref={chatContainerRef} className="flex-1 min-h-0 overflow-y-auto hide-scrollbar px-4 sm:px-8 py-6 flex flex-col gap-6 z-10 w-full">
        {isCheckingKey ? (
          <div className="h-full flex items-center justify-center text-center opacity-50">
            <p className="font-bold text-xl font-nunito text-slate-500">Waking up Hootie... 🦉</p>
          </div>
        ) : needsApiKey ? (
          <div className="w-full my-auto flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 bg-white/60 p-6 sm:p-8 rounded-3xl border border-white shadow-sm max-w-lg mx-auto">
            <div className="bg-kid-primary/20 p-3 sm:p-4 rounded-full">
              <span className="text-3xl sm:text-4xl">🔑</span>
            </div>
            <div>
              <p className="font-black text-xl sm:text-2xl text-kid-primary-dark font-baloo mb-2">API Key Required</p>
              <p className="text-sm sm:text-base text-slate-600 font-bold max-w-sm">
                Please enter your Gemini API Key to talk to Hootie. Get one from <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-kid-primary hover:text-kid-primary-dark underline">Google AI Studio</a>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
              <input 
                type="password" 
                placeholder="Paste API Key here..." 
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                className="flex-1 px-4 py-3 sm:py-4 rounded-2xl border-[3px] border-slate-200 focus:border-kid-primary outline-none font-nunito font-bold text-slate-700 bg-white/90 shadow-inner w-full"
              />
              <button 
                onClick={handleSaveApiKey}
                disabled={isSavingKey || !apiKeyInput}
                className="btn-chunky px-6 py-3 sm:py-4 bg-gradient-to-b from-kid-primary to-kid-primary-dark shadow-[0_8px_16px_rgba(59,130,246,0.3),inset_0_4px_8px_rgba(255,255,255,0.4)] disabled:opacity-50 text-lg sm:text-xl font-baloo w-full sm:w-auto shrink-0"
              >
                {isSavingKey ? 'Saving' : 'Save Key'}
              </button>
            </div>
          </div>
        ) : messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center opacity-60">
            <span className="text-6xl mb-4 grayscale opacity-50">👋</span>
            <p className="font-bold text-2xl font-baloo text-slate-500">Say hello to Hootie!</p>
          </div>
        ) : (
          messages.map((msg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`max-w-[85%] sm:max-w-[75%] p-4 sm:p-5 rounded-[2rem] ${
                msg.role === 'user' 
                  ? 'bg-gradient-to-br from-kid-primary to-kid-primary-dark text-white self-end rounded-br-md shadow-[0_12px_24px_rgba(59,130,246,0.25),inset_0_2px_4px_rgba(255,255,255,0.3)] border-2 border-kid-primary/40' 
                  : 'bg-white/90 backdrop-blur-sm text-slate-700 self-start rounded-bl-md shadow-[0_12px_24px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.8)] border-[3px] border-white'
              }`}
            >
              <p className="font-bold font-nunito text-lg sm:text-xl leading-relaxed">{msg.content}</p>
            </motion.div>
          ))
        )}
        
        {/* Processing Indicator */}
        {isProcessing && !needsApiKey && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/90 backdrop-blur-sm text-slate-500 self-start p-5 rounded-[2rem] rounded-bl-md shadow-md border-[3px] border-white flex items-center gap-3"
          >
            <div className="w-3 h-3 bg-kid-primary/60 rounded-full animate-bounce" />
            <div className="w-3 h-3 bg-kid-primary/80 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-3 h-3 bg-kid-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </motion.div>
        )}
      </div>

      {/* Bottom Controls Footer - Chat App Style */}
      <div className="flex-none p-3 sm:p-6 bg-white/90 backdrop-blur-xl border-t-2 border-slate-200/60 z-20 w-full shadow-[0_-8px_32px_rgba(0,0,0,0.05)] pb-6 sm:pb-6">
        
        {needsApiKey && (
           <p className="text-center text-red-500 font-bold mb-2 text-sm">Please enter API Key above to talk!</p>
        )}

        <div className="flex items-center gap-2 sm:gap-4 max-w-4xl mx-auto w-full">
           <input 
             type="text" 
             value={textInput} 
             onChange={e => setTextInput(e.target.value)}
             onKeyDown={e => e.key === 'Enter' && handleTextSubmit()}
             placeholder="Type a message..."
             disabled={isProcessing || needsApiKey}
             className="flex-1 bg-white border-[3px] border-slate-200 rounded-full px-5 sm:px-6 py-3 sm:py-4 text-base sm:text-xl font-nunito font-bold text-slate-700 outline-none focus:border-kid-primary shadow-inner disabled:opacity-50 transition-colors"
           />
           <button 
             onClick={handleTextSubmit}
             disabled={!textInput.trim() || isProcessing || needsApiKey}
             className="btn-chunky bg-gradient-to-b from-kid-primary to-kid-primary-dark w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(59,130,246,0.3)] disabled:opacity-50 shrink-0"
           >
             <span className="text-xl sm:text-2xl text-white">➤</span>
           </button>
           <button
             onClick={toggleListening}
             disabled={isProcessing || needsApiKey}
             className={`btn-chunky w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-colors shrink-0 ${
               isListening 
                 ? 'bg-red-500 animate-pulse border-2 border-red-300' 
                 : 'bg-kid-green border-2 border-kid-green-light'
             } ${(isProcessing || needsApiKey) ? 'opacity-50 grayscale' : ''}`}
           >
             {isListening ? <span className="text-xl sm:text-2xl">🛑</span> : <span className="text-xl sm:text-2xl">🎤</span>}
           </button>
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
    </div>
  );
};

export default AIVoiceTutor;
