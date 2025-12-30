"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = () => {
      let effectiveTheme: "light" | "dark" = "dark";

      if (theme === "system") {
        effectiveTheme = mediaQuery.matches ? "dark" : "light";
      } else {
        effectiveTheme = theme;
      }

      setResolvedTheme(effectiveTheme);
      root.classList.remove("light", "dark");
      root.classList.add(effectiveTheme);
      
      // Update meta theme-color for mobile browsers
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute(
          "content",
          effectiveTheme === "dark" ? "#020617" : "#ffffff"
        );
      }
    };

    updateTheme();
    mediaQuery.addEventListener("change", updateTheme);

    return () => mediaQuery.removeEventListener("change", updateTheme);
  }, [theme, mounted]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return default values instead of throwing during SSR
    return {
      theme: "system" as Theme,
      setTheme: () => {},
      resolvedTheme: "dark" as "light" | "dark",
    };
  }
  return context;
}
