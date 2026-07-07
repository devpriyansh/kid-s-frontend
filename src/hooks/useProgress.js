import { useState, useEffect } from 'react';
import { useKid } from '../contexts/KidContext';
import { useClass } from '../contexts/ClassContext';

export const useProgress = () => {
  const { selectedKid } = useKid();
  const { selectedClass } = useClass();

  const getStorageKey = () => {
    if (!selectedKid || !selectedClass) return null;
    return `progress_${selectedKid.id}_${selectedClass}`;
  };

  const [progress, setProgress] = useState(() => {
    const key = getStorageKey();
    if (!key) return {};
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    const key = getStorageKey();
    if (key) {
      localStorage.setItem(key, JSON.stringify(progress));
    }
  }, [progress, selectedKid, selectedClass]);

  const markLessonComplete = (moduleId, lessonIndex) => {
    setProgress(prev => {
      const newProgress = { ...prev };
      if (!newProgress[moduleId]) {
        newProgress[moduleId] = { completed: [], stars: 0 };
      }
      if (!newProgress[moduleId].completed.includes(lessonIndex)) {
        newProgress[moduleId].completed.push(lessonIndex);
        newProgress[moduleId].stars = (newProgress[moduleId].stars || 0) + 2; // 2 stars per lesson
      }
      return newProgress;
    });
  };

  const getModuleProgress = (moduleId, totalLessons) => {
    const moduleData = progress[moduleId] || { completed: [], stars: 0 };
    return {
      completed: moduleData.completed.length,
      total: totalLessons,
      stars: moduleData.stars || 0,
      locked: false, // you can add logic for prerequisites later
    };
  };

  return { progress, markLessonComplete, getModuleProgress };
};