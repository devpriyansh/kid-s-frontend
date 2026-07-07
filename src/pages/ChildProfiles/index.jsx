import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useKids } from '../../hooks/useKids';
import { useKid } from '../../contexts/KidContext';
import Avatar from '../../components/common/Avatar';

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
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1';
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
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <h1 className="text-4xl font-fredoka font-bold gradient-text">👦 Choose Your Adventurer</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {kids?.map((kid) => (
          <motion.div
            key={kid.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card p-6 text-center cursor-pointer hover:shadow-2xl transition"
            onClick={() => handleSelect(kid)}
          >
            <Avatar emoji={kid.avatar} size="large" />
            <h3 className="text-xl font-fredoka font-bold mt-2">{kid.name}</h3>
            <p className="text-gray-600 text-sm">⭐ {kid.stars} stars</p>
          </motion.div>
        ))}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="glass-card p-6 text-center cursor-pointer border-2 border-dashed border-kid-purple flex flex-col items-center justify-center"
          onClick={() => setShowCreate(true)}
        >
          <div className="text-6xl mb-2">➕</div>
          <p className="text-lg font-bold text-kid-purple">Add New</p>
        </motion.div>
      </div>

      {/* Create Modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="glass-card max-w-md w-full p-6">
            <h2 className="text-2xl font-fredoka font-bold mb-4">✨ New Adventurer</h2>
            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">Name</label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-4 py-3 rounded-full border-2 border-kid-purple/30 focus:border-kid-purple outline-none"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Class Level</label>
                <select
                  value={newAge}
                  onChange={(e) => setNewAge(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-kid-purple/30 focus:border-kid-purple outline-none"
                >
                  <option value="nursery">Nursery</option>
                  <option value="kg1">KG1</option>
                  <option value="kg2">KG2</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-1">Avatar</label>
                <div className="flex flex-wrap gap-2">
                  {avatars.map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setNewAvatar(emoji)}
                      className={`text-3xl p-2 rounded-full transition ${newAvatar === emoji ? 'bg-kid-purple/30 ring-2 ring-kid-purple' : 'hover:bg-gray-100'}`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <button type="submit" disabled={isSubmitting} className="btn-primary flex-1">{isSubmitting ? 'Creating...' : 'Create'}</button>
                <button type="button" onClick={() => setShowCreate(false)} className="btn-secondary flex-1">Cancel</button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default ChildProfiles;