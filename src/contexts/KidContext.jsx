import React, { createContext, useContext, useState, useEffect } from 'react';

const KidContext = createContext();

export const KidProvider = ({ children }) => {
  const [selectedKid, setSelectedKid] = useState(() => {
    const saved = localStorage.getItem('selectedKid');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (selectedKid) {
      localStorage.setItem('selectedKid', JSON.stringify(selectedKid));
    } else {
      localStorage.removeItem('selectedKid');
    }
  }, [selectedKid]);

  return (
    <KidContext.Provider value={{ selectedKid, setSelectedKid }}>
      {children}
    </KidContext.Provider>
  );
};

export const useKid = () => useContext(KidContext);