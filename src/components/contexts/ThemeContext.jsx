// Import React hooks and utilities needed for theme management
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a React context to share theme state across the entire app
// Provides default values for isDark (false) and toggleTheme (empty function)
const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

// ThemeProvider component that wraps the app and manages theme state
export const ThemeProvider = ({ children }) => {
  // State to track if dark mode is currently active
  // Uses lazy initialization to check if 'dark' class exists on page load
  const [isDark, setIsDark] = useState(() => {
    // Check if we're in browser environment (not server-side rendering)
    if (typeof window !== 'undefined') {
      // Check if the HTML document already has 'dark' class applied
      return document.documentElement.classList.contains('dark');
    }
    // Default to light mode if running on server
    return false;
  });

  // Side effect that runs whenever isDark state changes
  // Applies or removes the 'dark' CSS class to the HTML document
  useEffect(() => {
    if (isDark) {
      // Add 'dark' class to enable dark mode styles
      document.documentElement.classList.add('dark');
    } else {
      // Remove 'dark' class to use light mode styles
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]); // Dependency array - effect runs when isDark changes

  // Function to switch between light and dark themes
  const toggleTheme = () => {
    // Flip the current isDark state
    setIsDark(!isDark);
  };

  // Render the context provider with current theme state and toggle function
  // Makes isDark and toggleTheme available to all child components
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to easily access theme context in any component
// Returns the current theme state and toggle function
export const useTheme = () => useContext(ThemeContext);