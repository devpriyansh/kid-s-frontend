import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';

const ProfileSettings = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [sound, setSound] = useState(true);
  const [apiKey, setApiKey] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleSaveApiKey = async () => {
    setIsSaving(true);
    setSaveMessage('');
    try {
      const token = localStorage.getItem('token');
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://kid-s-backend.onrender.com/api/v1';
      const res = await fetch(`${API_BASE_URL}/user/api-key`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ apiKey })
      });
      const data = await res.json();
      if (res.ok) {
        setSaveMessage('✅ Saved successfully!');
      } else {
        setSaveMessage(`❌ Error: ${data.message || 'Failed to save'}`);
      }
    } catch (err) {
      setSaveMessage('❌ Network error');
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 max-w-lg">
      <h1 className="text-4xl font-fredoka font-bold gradient-text">⚙️ Settings</h1>

      <div className="glass-card p-6 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-kid-purple/20 flex items-center justify-center text-3xl">
            👤
          </div>
          <div>
            <p className="font-bold text-xl">{user?.name}</p>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>

        <hr className="border-gray-200" />

        <div className="flex items-center justify-between">
          <span className="font-semibold">🔔 Notifications</span>
          <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} className="toggle" />
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold">🔊 Sound Effects</span>
          <input type="checkbox" checked={sound} onChange={() => setSound(!sound)} className="toggle" />
        </div>

        <hr className="border-gray-200" />

        <div className="space-y-2">
          <label className="font-semibold block">🤖 Gemini AI API Key</label>
          <p className="text-xs text-gray-500">Provide your Google Gemini API key to enable the AI Voice Tutor. Get one at <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-kid-primary underline">Google AI Studio</a>.</p>
          <div className="flex gap-2">
            <input 
              type="password" 
              placeholder="sk-..." 
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="flex-1 px-4 py-2 rounded-xl border-2 border-gray-200 focus:border-kid-primary outline-none"
            />
            <button 
              onClick={handleSaveApiKey}
              disabled={isSaving}
              className="bg-kid-primary text-white px-4 py-2 rounded-xl font-bold hover:bg-kid-primary/90 disabled:opacity-50"
            >
              {isSaving ? 'Saving...' : 'Save'}
            </button>
          </div>
          {saveMessage && <p className="text-sm font-semibold">{saveMessage}</p>}
        </div>

        <button onClick={handleLogout} className="btn-secondary w-full text-red-500 border-red-200 hover:bg-red-50 mt-4">
          🚪 Logout
        </button>
      </div>
    </motion.div>
  );
};

export default ProfileSettings;