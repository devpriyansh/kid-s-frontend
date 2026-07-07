import React, { createContext, useContext, useState, useEffect } from 'react';

const ClassContext = createContext();

export const ClassProvider = ({ children }) => {
  const [selectedClass, setSelectedClass] = useState(() => {
    return localStorage.getItem('selectedClass') || null;
  });

  useEffect(() => {
    if (selectedClass) {
      localStorage.setItem('selectedClass', selectedClass);
    } else {
      localStorage.removeItem('selectedClass');
    }
  }, [selectedClass]);

  return (
    <ClassContext.Provider value={{ selectedClass, setSelectedClass }}>
      {children}
    </ClassContext.Provider>
  );
};

export const useClass = () => useContext(ClassContext);