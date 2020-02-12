import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useLocalStorage'

const Navbar = () => {
  const [mode, toggle] = useDarkMode();
  
  return (
    <nav className={`navbar ${mode ? 'dark-mode' : ''}`}>
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggle}
          className={mode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
