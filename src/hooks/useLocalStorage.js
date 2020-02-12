import React, { useState } from 'react';

// const useLocalStorage = (key, value) => {

// }

export const useDarkMode = evt => {
    const [darkMode, setDarkMode] = useState(false);
  const toggleMode = e => {
    
    setDarkMode(!darkMode);
  };
  return [darkMode, toggleMode];
}