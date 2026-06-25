"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaLock } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const UnauthorizedPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center bg-white dark:bg-gray-950 px-4 py-20">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"
      />

      {/* 403 Watermark */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        className="absolute text-[12rem] md:text-[18rem] font-black select-none text-indigo-600"
      >
        403
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-xl w-full"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl p-10 text-center"
        >
          {/* Lock Icon */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100 dark:bg-red-500/10"
          >
            <FaLock className="text-4xl text-red-600 dark:text-red-400" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mt-8 text-4xl font-bold text-gray-900 dark:text-white"
          >
            Access Denied
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-gray-600 dark:text-gray-400"
          >
            You do not have permission to access this page.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-2 text-sm text-gray-500 dark:text-gray-500"
          >
            This area is restricted to authorized users only.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="inline-block px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
              >
                Go Home
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UnauthorizedPage;
