"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white dark:bg-slate-950 px-6 py-15 select-none">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Glow */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl"
        />

        {/* Cyan Glow */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
        />

        {/* Purple Glow */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 top-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -200],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "linear",
            }}
            className="absolute h-2 w-2 rounded-full bg-indigo-400/40"
            style={{
              left: `${(i * 5) % 100}%`,
              bottom: "-20px",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl text-center"
      >
        {/* Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full border border-indigo-500/20"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full border border-cyan-500/10"
        />

        {/* 404 */}
        <motion.h1
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-9xl  font-black bg-linear-to-r from-indigo-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        {/* Heading */}
        <motion.h2
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
        >
          Lost in Space?
        </motion.h2>

        {/* Description */}
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          The page you are looking for has drifted beyond our radar. It may have
          been moved, deleted, or never existed.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Home Button */}
          <Link
            href="/"
            className="group relative overflow-hidden rounded-3xl bg-indigo-600 px-10 py-3 text-white font-medium shadow-lg shadow-indigo-500/20"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Home size={18} />
              Back Home
            </span>

            <motion.span
              animate={{
                x: ["-100%", "300%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 w-1/3 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12"
            />
          </Link>
        </div>

        {/* Animated Status */}
        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-8 text-sm text-slate-500 dark:text-slate-500"
        >
          Scanning the universe for your page...
        </motion.p>
      </motion.div>
    </section>
  );
}
