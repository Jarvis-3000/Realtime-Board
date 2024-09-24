"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface IThemeContext {
  theme: string;
  setTheme: (value: "system" | "light" | "dark") => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"system" | "light" | "dark">("system");

  // Effect to manipulate the DOM and apply the current theme
  useEffect(() => {
    const root = document.documentElement;

    // for normal css styling
    root.setAttribute("data-theme", theme);

    // for tailwind styling
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
