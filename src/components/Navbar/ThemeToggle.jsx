"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex p-1.5 w-full  items-center justify-center overflow-hidden rounded-full border-2 border-slate-200 bg-white/10 text-slate-800 shadow-xl backdrop-blur-xl transition-all duration-300 hover:bg-white/20 dark:border-white/20 dark:bg-slate-900/20 dark:text-white dark:hover:bg-slate-900/40 cursor-pointer "
      aria-label="Toggle Theme"
    >
      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.15, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute inset-0 rounded-full bg-blue-500/30 blur-xl"
      />

      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="moon"
            initial={{
              rotate: -90,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              rotate: 0,
              scale: 1,
              opacity: 1,
            }}
            exit={{
              rotate: 90,
              scale: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="relative z-10"
          >
            <Moon className="h-4 w-4 text-blue-400" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{
              rotate: 90,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              rotate: 0,
              scale: 1,
              opacity: 1,
            }}
            exit={{
              rotate: -90,
              scale: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="relative z-10"
          >
            <Sun className="h-4 w-4 text-amber-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
