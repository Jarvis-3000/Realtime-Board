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
  const [theme, setTheme] = useState<string>("system");

  // Effect to safely access localStorage and set theme after component mounts
  useEffect(() => {
    let savedTheme = localStorage.getItem("theme") || "system";

    if (
      savedTheme !== "system" &&
      savedTheme !== "dark" &&
      savedTheme !== "light"
    ) {
      savedTheme = "system";
    }

    setTheme(savedTheme);
    handleThemeChange(savedTheme); // Apply the saved theme on mount
  }, []);

  const handleThemeChange = (theme: string) => {
    if (!theme) {
      throw new Error("Valid theme value is required");
    }

    console.log("theme change", theme);

    const root = document.documentElement;

    // for normal css styling
    root.setAttribute("data-theme", theme);

    // for tailwind styling
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // store in localstorage
    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
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
