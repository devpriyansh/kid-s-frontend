import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useKids } from '../../hooks/useKids';
import { useKid } from '../../contexts/KidContext';
import Avatar from '../../components/common/Avatar';
import { Users, Plus, Star, Smile } from 'lucide-react';

const ChildProfiles = () => {
  const { data: kids, refetch } = useKids();
  const { setSelectedKid } = useKid();
  const navigate = useNavigate();
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState('');
  const [newAvatar, setNewAvatar] = useState('🦊');
  const [newAge, setNewAge] = useState('nursery');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const avatars = ['🦊', '🐼', '🐨', '🦁', '🐸', '🐵', '🐶', '🐱', '🦄', '🐧'];

  // After selecting a kid, navigate to class selection
const handleSelect = (kid) => {
  setSelectedKid(kid);
  navigate('/class-selection');
};

  const handleCreate = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const _envUrl = import.meta.env.VITE_API_BASE_URL;
      const API_BASE_URL = _envUrl ? (_envUrl.endsWith('/api/v1') ? _envUrl : _envUrl.replace(/\/$/, '') + '/api/v1') : 'https://kid-s-backend.onrender.com/api/v1';
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/child/add`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          name: newName,
          ageGroup: newAge,
          avatar: newAvatar
        })
      });

      if (response.ok) {
        refetch();
        setShowCreate(false);
        setNewName('');
      } else {
        console.error("Failed to add child");
      }
    } catch (err) {
      console.error(err);
    }
    setIsSubmitting(false);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-full flex flex-col hide-scrollbar">
      <div className="flex-none mb-8 text-center bg-white p-6 rounded-3xl border-4 border-slate-200 shadow-[0_4px_0_0_#E2E8F0] inline-block mx-auto">
        <h1 className="text-4xl md:text-5xl font-fredoka font-black text-kid-primary-dark flex items-center gap-4 justify-center">
          <Users size={40} className="text-kid-primary" strokeWidth={3} /> Choose Your Adventurer!
        </h1>
      </div>

      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-12 pt-4 px-4 snap-x snap-mandatory w-full max-w-6xl mx-auto">
          {kids?.map((kid) => (
            <motion.div
              key={kid.id}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
              className="snap-center shrink-0 w-64 glass-card p-8 text-center cursor-pointer border-4 border-slate-200 hover:border-kid-primary transition-all duration-300 relative group bg-white shadow-[0_8px_0_0_#E2E8F0] hover:shadow-[0_12px_0_0_#0284C7]"
              onClick={() => handleSelect(kid)}
            >
              <div className="absolute inset-0 bg-kid-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[1.25rem]"></div>
              <div className="relative z-10">
                <Avatar emoji={kid.avatar} size="large" />
                <h3 className="text-3xl font-fredoka font-black text-kid-text mt-6 mb-2">{kid.name}</h3>
                <span className="font-bold text-kid-yellow-dark bg-kid-yellow/20 px-4 py-2 rounded-xl text-lg flex items-center justify-center gap-2">
                  <Star size={20} className="fill-kid-yellow-dark" /> {kid.stars} stars
                </span>
              </div>
            </motion.div>
          ))}
          
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className="snap-center shrink-0 w-64 glass-card p-8 text-center cursor-pointer border-4 border-dashed border-slate-300 hover:border-kid-secondary hover:bg-kid-secondary/5 flex flex-col items-center justify-center gap-4 transition-all duration-300 shadow-none bg-transparent"
            onClick={() => setShowCreate(true)}
          >
            <div className="bg-white p-4 rounded-full border-4 border-slate-200 shadow-sm text-kid-secondary">
              <Plus size={48} strokeWidth={4} />
            </div>
            <p className="text-2xl font-black font-fredoka text-slate-500">Add New</p>
          </motion.div>
        </div>
      </div>

      {/* Create Modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 overflow-y-auto flex justify-center items-start pt-20 pb-10 px-4">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white max-w-lg w-full p-6 sm:p-8 rounded-xl shadow-2xl border border-slate-200 relative my-auto">
            <h2 className="text-2xl sm:text-3xl font-fredoka font-black text-kid-secondary-dark mb-4 sm:mb-6 flex items-center gap-3">
              <Smile size={32} className="text-kid-secondary" strokeWidth={3} /> New Adventurer
            </h2>
            <form onSubmit={handleCreate} className="space-y-4 sm:space-y-5">
              <div className="space-y-1 sm:space-y-2">
                <label className="block text-kid-text font-black text-base sm:text-lg ml-1 sm:ml-2">Name</label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full h-12 sm:h-14 px-4 sm:px-6 rounded-xl border-2 sm:border-4 border-slate-200 bg-slate-50 focus:bg-white focus:border-kid-secondary focus:ring-0 outline-none transition-all text-lg sm:text-xl font-bold shadow-inner"
                  required
                />
              </div>
              <div className="space-y-1 sm:space-y-2">
                <label className="block text-kid-text font-black text-base sm:text-lg ml-1 sm:ml-2">Class Level</label>
                <select
                  value={newAge}
                  onChange={(e) => setNewAge(e.target.value)}
                  className="w-full h-12 sm:h-14 px-4 sm:px-6 rounded-xl border-2 sm:border-4 border-slate-200 bg-slate-50 focus:bg-white focus:border-kid-secondary focus:ring-0 outline-none transition-all text-lg sm:text-xl font-bold shadow-inner appearance-none cursor-pointer"
                >
                  <option value="nursery">Nursery</option>
                  <option value="kg1">KG1</option>
                  <option value="kg2">KG2</option>
                </select>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <label className="block text-kid-text font-black text-base sm:text-lg ml-1 sm:ml-2">Choose an Avatar</label>
                <div className="flex flex-wrap gap-2 sm:gap-3 bg-slate-50 p-3 sm:p-4 rounded-xl border-2 sm:border-4 border-slate-200">
                  {avatars.map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setNewAvatar(emoji)}
                      className={`text-3xl sm:text-4xl p-2 sm:p-3 rounded-xl transition-all ${newAvatar === emoji ? 'bg-kid-secondary/20 shadow-[0_4px_0_0_#E11D48] border-2 border-kid-secondary-dark -translate-y-1' : 'hover:bg-slate-200 border-2 border-transparent hover:-translate-y-1'}`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:flex-1 bg-kid-secondary border-kid-secondary-dark shadow-[0_6px_0_0_#E11D48] active:shadow-[0_0px_0_0_#E11D48] text-lg sm:text-xl py-3">
                  {isSubmitting ? 'Creating...' : 'Create!'}
                </button>
                <button type="button" onClick={() => setShowCreate(false)} className="btn-secondary w-full sm:flex-1 text-lg sm:text-xl py-3">
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default ChildProfiles;