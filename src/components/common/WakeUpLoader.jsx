import React, { useState, useEffect } from 'react';
import FunLoader from './FunLoader';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://kid-s-backend.onrender.com/api/v1';

const WakeUpLoader = ({ children }) => {
  const [isAwake, setIsAwake] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // If running on localhost, skip the wake up check to speed up dev
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      setIsAwake(true);
      return;
    }

    let isMounted = true;
    let retryCount = 0;
    const maxRetries = 15; // Give it ~1 minute to wake up
    
    // Show the "waking up" message if it takes more than 1.5 seconds
    const messageTimer = setTimeout(() => {
      if (isMounted) setShowMessage(true);
    }, 1500);

    const checkServer = async () => {
      try {
        // Derive health check URL from API base
        const healthCheckUrl = API_BASE_URL.replace('/api/v1', '/health-check');
        const res = await fetch(healthCheckUrl, { method: 'GET' });
        
        if (res.ok && isMounted) {
          setIsAwake(true);
        } else {
          throw new Error('Server not ready');
        }
      } catch (err) {
        if (!isMounted) return;
        retryCount++;
        
        if (retryCount >= maxRetries) {
          setHasError(true);
        } else {
          // Wait 3 seconds before retrying
          setTimeout(checkServer, 3000);
        }
      }
    };

    checkServer();

    return () => {
      isMounted = false;
      clearTimeout(messageTimer);
    };
  }, []);

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-kid-blue/10 p-4 text-center">
        <div className="text-6xl mb-4">😴</div>
        <h2 className="text-2xl font-bold text-kid-purple mb-2">Our servers are super sleepy today...</h2>
        <p className="text-gray-600 mb-6">We couldn't wake them up right now. Please try again in a little bit!</p>
        <button 
          onClick={() => window.location.reload()} 
          className="btn-primary"
        >
          Try Again 🚀
        </button>
      </div>
    );
  }

  if (!isAwake) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-kid-blue/10">
        <FunLoader message={showMessage ? "Waking up our servers! This might take a minute... 🚀" : "Loading..."} />
      </div>
    );
  }

  return children;
};

export default WakeUpLoader;
