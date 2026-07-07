import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';
import Mascot from '../../components/common/Mascot';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    const res = await login(email, password);
    setIsLoading(false);
    if (res.success) {
      navigate('/parent-dashboard');
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass-card w-full max-w-md p-8 space-y-6"
      >
        <div className="text-center">
          <Mascot className="w-24 h-24 mx-auto mb-2" />
          <h2 className="text-3xl font-fredoka font-bold gradient-text">Welcome Back!</h2>
          <p className="text-gray-600">Sign in to manage your child's learning adventure.</p>
        </div>
        
        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-full border-2 border-kid-purple/30 focus:border-kid-purple focus:outline-none transition"
              placeholder="parent@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-full border-2 border-kid-purple/30 focus:border-kid-purple focus:outline-none transition"
              placeholder="••••••••"
              required
            />
          </div>
          <button type="submit" disabled={isLoading} className={`btn-primary w-full text-xl ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}>
            {isLoading ? 'Logging in...' : "Let's Go! 🚀"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-500">
          Don't have an account? <Link to="/signup" className="text-kid-purple font-semibold hover:underline">Sign up</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;