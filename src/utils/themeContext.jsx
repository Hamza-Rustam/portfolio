import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark"); // Default to dark theme

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;

    // Remove all theme classes
    root.classList.remove("theme-light", "theme-dark", "theme-rgb");

    // Add current theme class
    root.classList.add(`theme-${theme}`);

    // Save to localStorage
    localStorage.setItem("portfolio-theme", theme);

    // Update CSS variables based on theme
    const themes = {
      light: {
        "--bg-primary": "#f8f9fa",
        "--bg-secondary": "#ffffff",
        "--text-primary": "#1a1a1a",
        "--text-secondary": "#6b7280",
        "--border-color": "#e5e7eb",
        "--shadow-color": "rgba(0, 0, 0, 0.1)",
      },
      dark: {
        "--bg-primary": "#0f0f0f",
        "--bg-secondary": "#1a1a1a",
        "--text-primary": "#ffffff",
        "--text-secondary": "#9ca3af",
        "--border-color": "#374151",
        "--shadow-color": "rgba(0, 0, 0, 0.3)",
      },
      rgb: {
        "--bg-primary": "#0a0a0a",
        "--bg-secondary": "#1a1a1a",
        "--text-primary": "#ffffff",
        "--text-secondary": "#00ff88",
        "--border-color": "#00ff88",
        "--shadow-color": "rgba(0, 255, 136, 0.2)",
      },
    };

    const currentTheme = themes[theme];
    if (currentTheme) {
      Object.entries(currentTheme).forEach(([property, value]) => {
        root.style.setProperty(property, value);
      });
    }
  }, [theme]);

  const toggleTheme = () => {
    const themes = ["light", "dark", "rgb"];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
    isLight: theme === "light",
    isDark: theme === "dark",
    isRgb: theme === "rgb",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
