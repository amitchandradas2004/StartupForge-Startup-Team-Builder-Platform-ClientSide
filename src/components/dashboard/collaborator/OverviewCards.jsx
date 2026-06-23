"use client";

import { motion } from "framer-motion";

const OverviewCards = ({ title, value, icon: Icon, color }) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm"
    >
      <div className={`absolute top-0 left-0 h-1 w-full ${color}`} />

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            {value}
          </h2>
        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${color} text-white`}
        >
          <Icon className="text-xl" />
        </div>
      </div>
    </motion.div>
  );
};

export default OverviewCards;
