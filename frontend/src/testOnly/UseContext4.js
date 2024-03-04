import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a context
const ThemeContext = createContext();

// Step 2: Provide a value
const UseContext4 = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

// Step 3: Access the context value
const Toolbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <div>Current theme: {theme}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default UseContext4;
