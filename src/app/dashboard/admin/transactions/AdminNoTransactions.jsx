"use client";

import { motion } from "framer-motion";
import { FaMoneyBillWave } from "react-icons/fa";

const AdminNoTransactions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-center w-full py-16 pr-5  h-screen mb-10"
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-10 text-center shadow-sm">
        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-green-500/10 blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Icon */}
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300">
            <FaMoneyBillWave className="text-2xl" />
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            No Transactions Found
          </h2>

          {/* Description */}
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            There are currently no transactions on the platform. Revenue,
            subscriptions, and payment activities will appear here once users
            start making transactions.
          </p>

          {/* Hint Box */}
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 p-4 text-sm text-slate-500 dark:text-slate-400">
            Transaction history, revenue analytics, and payment insights will
            become available as soon as activity is detected.
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminNoTransactions;
