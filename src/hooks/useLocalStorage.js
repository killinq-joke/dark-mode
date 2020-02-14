import React, { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
  };

export const useDarkMode = evt => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  const toggleMode = e => {
    
    setDarkMode(!darkMode);
  };
  return [darkMode, toggleMode];
}