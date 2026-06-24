"use client";

import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

const AdminNoStartups = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-center w-full py-16 pr-3 h-screen "
    >
      {/* subtle glow */}
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-10 text-center shadow-sm">
        <div className="absolute inset-0">
          <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* icon */}
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300">
            <FaRocket className="text-2xl" />
          </div>

          {/* title */}
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            No Startups Found
          </h2>

          {/* description */}
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            No startups have been created yet. Once founders start building
            startups, they will appear here.
          </p>

          {/* hint box */}
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 p-4 text-sm text-slate-500 dark:text-slate-400">
            Startup analytics, funding insights, and management tools will be
            available once data is added.
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminNoStartups;
