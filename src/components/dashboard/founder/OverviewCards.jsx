"use client";

import { motion } from "framer-motion";
import { Briefcase, FileText } from "lucide-react";
import { PiUsersFill } from "react-icons/pi";

export default function OverviewCards({
  totalOpportunities = 0,
  totalApplications = 0,
  approvedMembers = 0,
}) {
  const stats = [
    {
      label: "Total Opportunities",
      value: totalOpportunities,
      icon: Briefcase,
      color: "text-indigo-600",
      bg: "bg-indigo-100 dark:bg-indigo-500/10",
    },
    {
      label: "Total Applications",
      value: totalApplications,
      icon: FileText,
      color: "text-emerald-600",
      bg: "bg-emerald-100 dark:bg-emerald-500/10",
    },
    {
      label: "Accepted Members",
      value: approvedMembers,
      icon: PiUsersFill,
      color: "text-orange-600",
      bg: "bg-orange-100 dark:bg-orange-500/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-950/40 backdrop-blur-md p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex flex-col h-30 space-y-3 w-full">
              <div className={`p-3 rounded-xl ${item.bg} w-12`}>
                <Icon className={`w-5 h-5 ${item.color}`} />
              </div>

              <p className="text-sm text-slate-500">{item.label}</p>

              <h2 className="text-2xl font-bold mt-1 text-slate-900 dark:text-white">
                {item.value}
              </h2>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
