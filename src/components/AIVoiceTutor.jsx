import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AIVoiceTutor = ({ systemPrompt }) => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [needsApiKey, setNeedsApiKey] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [isSavingKey, setIsSavingKey] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSaveApiKey = async () => {
    setIsSavingKey(true);
    setError(null);
    setSuccessMessage(null);
    try {
      const token = localStorage.getItem('token');
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://kid-s-backend.onrender.com/api/v1';
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

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onstart = () => {
        setIsListening(true);
        setError(null);
      };

      recognitionRef.current.onresult = async (event) => {
        const transcript = event.results[0][0].transcript;
        handleUserMessage(transcript);
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error", event.error);
        if (event.error !== 'no-speech') {
          setError(`Microphone error: ${event.error}`);
        }
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    } else {
      setError("Speech recognition is not supported in this browser. Try Chrome!");
    }

    // Cleanup
    return () => {
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
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://kid-s-backend.onrender.com/api/v1';

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
        if (errStr.includes("API_KEY_MISSING") || errStr.includes("API_KEY_INVALID") || errStr.includes("API_KEY_INVALID")) {
          setNeedsApiKey(true);
          throw new Error("No API key found or key is invalid. Please enter your Gemini API Key below.");
        } else if (errStr.includes("GEMINI_API_ERROR")) {
          throw new Error("AI Error: Limit reached or invalid key.");
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
      recognitionRef.current?.stop();
    } else {
      // Stop AI speaking if child interrupts
      synthesisRef.current?.cancel();
      setIsSpeaking(false);
      setError(null);
      try {
        recognitionRef.current?.start();
      } catch (e) {
        // Handle case where recognition is already started
      }
    }
  };

  return (
    <div className="flex flex-col h-full bg-white/50 backdrop-blur-md rounded-3xl shadow-xl border-4 border-kid-primary/30 p-4 relative overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-kid-yellow/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-kid-pink/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Mascot Area */}
      <div className="flex flex-col items-center justify-center py-6 flex-none relative z-10">
        <button 
          onClick={() => setNeedsApiKey(!needsApiKey)}
          className="absolute top-0 right-0 p-3 bg-white/50 hover:bg-white/80 rounded-full shadow-sm text-xl transition-all"
          title="Configure API Key"
        >
          ⚙️
        </button>
        <motion.div 
          animate={
            isSpeaking ? { y: [0, -15, 0], scale: [1, 1.05, 1] } : 
            isListening ? { scale: [1, 1.1, 1] } : 
            { y: [0, -5, 0] }
          }
          transition={{
            duration: isSpeaking ? 0.4 : isListening ? 1.5 : 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`text-8xl relative ${isListening ? 'drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]' : isSpeaking ? 'drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]' : 'drop-shadow-lg'}`}
        >
          🦉
          
          {/* Soundwaves when speaking */}
          <AnimatePresence>
            {isSpeaking && (
              <>
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: [0, 1, 0], scale: [1, 2] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-4 border-kid-purple rounded-full -z-10" />
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: [0, 1, 0], scale: [1, 2.5] }} transition={{ duration: 1, repeat: Infinity, delay: 0.3 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-4 border-kid-pink rounded-full -z-10" />
              </>
            )}
            {isListening && (
              <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: [0, 0.5, 0], scale: [1, 1.5] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-400 rounded-full -z-10" />
            )}
          </AnimatePresence>
        </motion.div>
        
        <h2 className="text-2xl font-bold text-gray-800 mt-4 font-fredoka">Hootie the Tutor</h2>
        <p className="text-gray-500 font-semibold h-6">
          {isListening ? "Listening to you..." : isSpeaking ? "Hootie is talking..." : isProcessing ? "Hootie is thinking..." : "Tap to talk!"}
        </p>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded shadow-sm z-10 flex-none text-sm font-semibold">
          <p>{successMessage}</p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded shadow-sm z-10 flex-none text-sm font-semibold">
          <p>{error}</p>
        </div>
      )}

      {/* Chat History */}
      <div ref={chatContainerRef} className="flex-1 min-h-0 overflow-y-auto hide-scrollbar bg-white/40 rounded-2xl p-4 mb-4 shadow-inner border-2 border-white flex flex-col gap-3 z-10">
        {needsApiKey ? (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
            <p className="font-bold text-lg text-gray-800">You need an API Key to talk to Hootie!</p>
            <p className="text-sm text-gray-600 max-w-sm">
              Please enter your Gemini API Key below. Get one from <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-kid-primary underline">Google AI Studio</a>.
            </p>
            <div className="flex gap-2 w-full max-w-md">
              <input 
                type="password" 
                placeholder="Paste API Key here..." 
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-kid-primary outline-none"
              />
              <button 
                onClick={handleSaveApiKey}
                disabled={isSavingKey || !apiKeyInput}
                className="bg-kid-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-kid-primary/90 disabled:opacity-50"
              >
                {isSavingKey ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        ) : messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-center opacity-50">
            <p className="font-bold text-lg text-gray-500">Say hello to Hootie! 👋</p>
          </div>
        ) : (
          messages.map((msg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`max-w-[85%] p-3 rounded-2xl ${
                msg.role === 'user' 
                  ? 'bg-kid-primary text-white self-end rounded-br-sm shadow-md' 
                  : 'bg-white text-gray-800 self-start rounded-bl-sm shadow-sm border border-gray-100'
              }`}
            >
              <p className="font-semibold text-lg">{msg.content}</p>
            </motion.div>
          ))
        )}
        {isProcessing && !needsApiKey && (
          <div className="bg-white text-gray-500 self-start p-3 rounded-2xl rounded-bl-sm shadow-sm border border-gray-100 flex items-center gap-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex-none flex justify-center z-10 pb-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleListening}
          disabled={isProcessing || needsApiKey}
          className={`flex items-center gap-3 px-8 py-4 rounded-full text-xl font-bold shadow-xl transition-colors ${
            isListening 
              ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse' 
              : 'bg-green-500 hover:bg-green-600 text-white'
          } ${(isProcessing || needsApiKey) ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isListening ? (
            <>
              <span className="text-3xl">🛑</span> Stop Listening
            </>
          ) : (
            <>
              <span className="text-3xl">🎤</span> {messages.length === 0 ? 'Start Lesson' : 'Tap to Talk'}
            </>
          )}
        </motion.button>
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
