"use client";

import { motion } from "framer-motion";
import { RefreshCw, Home, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white dark:bg-slate-950 px-6 py-15 select-none">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
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
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-3xl"
        />

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
          className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"
        />

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
          className="absolute right-0 top-0 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl"
        />

        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -180],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.4,
              ease: "linear",
            }}
            className="absolute h-2 w-2 rounded-full bg-red-400/30"
            style={{
              left: `${(i * 7) % 100}%`,
              bottom: "-20px",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-xl text-center"
      >
        {/* Rotating Icon */}
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 backdrop-blur-sm"
        >
          <AlertTriangle className="h-12 w-12 text-red-500" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white"
        >
          Something Went Wrong
        </motion.h1>

        {/* Description */}
        <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
          An unexpected error occurred while processing your request. Please try
          again or return to the homepage.
        </p>

        {/* Error Message (Development Only) */}
        {process.env.NODE_ENV === "development" && error?.message && (
          <div className="mt-6 rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/30 p-4 text-left">
            <p className="font-mono text-sm text-red-600 dark:text-red-400 break-words">
              {error.message}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="group relative overflow-hidden rounded-xl bg-red-600 px-6 py-3 text-white font-medium shadow-lg shadow-red-500/20"
          >
            <span className="relative z-10 flex items-center gap-2">
              <RefreshCw size={18} />
              Try Again
            </span>

            <motion.span
              animate={{
                x: ["-100%", "250%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            />
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-6 py-3 font-medium text-slate-700 dark:text-slate-300 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Home size={18} />
            Back Home
          </Link>
        </div>

        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-8 text-sm text-slate-500"
        >
          Attempting to recover from the error...
        </motion.p>
      </motion.div>
    </section>
  );
}
