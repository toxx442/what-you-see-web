"use client";

import { useTheme } from "./theme-provider";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-full border border-slate-700 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/60" />
    );
  }

  const toggleTheme = () => {
    if (theme === "system") {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative h-10 w-10 rounded-full border border-slate-700 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/60 flex items-center justify-center transition-all duration-300 hover:border-orange-500/50 group"
      aria-label="Toggle theme"
    >
      {/* Sun icon for light mode */}
      <motion.svg
        className="absolute h-5 w-5 text-orange-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        initial={false}
        animate={{
          scale: resolvedTheme === "dark" ? 0 : 1,
          rotate: resolvedTheme === "dark" ? 90 : 0,
          opacity: resolvedTheme === "dark" ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </motion.svg>

      {/* Moon icon for dark mode */}
      <motion.svg
        className="absolute h-5 w-5 text-slate-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        initial={false}
        animate={{
          scale: resolvedTheme === "dark" ? 1 : 0,
          rotate: resolvedTheme === "dark" ? 0 : -90,
          opacity: resolvedTheme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </motion.svg>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-full bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors duration-300" />
    </motion.button>
  );
}
