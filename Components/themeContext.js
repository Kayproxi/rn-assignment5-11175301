import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = {
    isDarkMode,
    colors: {
      background: isDarkMode ? 'rgba(1, 1, 28, 0.94)' : '#fff',
      text: isDarkMode ? '#fff' : '#000',
      switchTrack: isDarkMode ? '#767577' : '#81b0ff',
      switchThumb: isDarkMode ? '#f4f3f4' : '#f5dd4b',
    },
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
