"use client";

import React from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "motion/react";
import { IconMoon, IconSun } from "@tabler/icons-react";

const ThemeToggle = ({ mounted }: { mounted: boolean }) => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group relative rounded-xl border border-neutral-200/50 bg-neutral-100/70 p-2.5 backdrop-blur-xs transition-all duration-200 hover:bg-neutral-200/70 dark:border-neutral-700/50 dark:bg-neutral-800/70 dark:hover:bg-neutral-700/70"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {mounted && (
          <motion.div
            key={theme}
            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {theme === "dark" ? (
              <IconMoon className="size-4" />
            ) : (
              <IconSun className="size-4" />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {!mounted && (
        <div className="size-4 animate-pulse rounded bg-neutral-300 dark:bg-neutral-600" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
