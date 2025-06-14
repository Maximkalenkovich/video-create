import React from "react";
import { useTheme } from "./useTheme";
import { FiSun, FiMoon } from "react-icons/fi"; 

export const ThemeSwitcher: React.FC = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <button 
      className={`theme-toggle ${isDarkTheme ? 'dark' : 'light'}`}
      onClick={toggleTheme}
    >
      {isDarkTheme ? (
        <FiSun className="theme-icon" />
      ) : (
        <FiMoon className="theme-icon" />
      )}
    </button>
  );
};