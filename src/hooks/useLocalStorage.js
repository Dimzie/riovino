import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    // Always get the latest data from localStorage
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    // Whenever state changes, update localStorage
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};