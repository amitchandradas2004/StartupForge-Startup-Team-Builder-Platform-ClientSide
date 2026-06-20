"use client";

import React from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const highlights = [
  {
    title: "New Co-Founder Match",
    desc: "A developer and UI designer connected and started building a fintech MVP together.",
    tag: "Matchmaking",
    icon: "🤝",
  },
  {
    title: "Startup Idea Posted",
    desc: "An AI-based learning platform idea received 12 collaboration requests within 24 hours.",
    tag: "Idea Launch",
    icon: "💡",
  },
  {
    title: "MVP Completed",
    desc: "A 3-member team successfully launched their productivity SaaS MVP.",
    tag: "Milestone",
    icon: "🚀",
  },
  {
    title: "Team Expansion",
    desc: "A startup team added 2 backend engineers and 1 product designer this week.",
    tag: "Growth",
    icon: "📈",
  },
  {
    title: "Community Collaboration",
    desc: "Designers and developers collaborated on an open-source startup tool project.",
    tag: "Collab",
    icon: "🌍",
  },
  {
    title: "First Funding Interest",
    desc: "A startup idea received early-stage investor interest after demo presentation.",
    tag: "Funding",
    icon: "💰",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const CommunityHighlights = () => {
  return (
    <section className="w-full py-20 bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
        >
          Community Highlights
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`mt-3 text-slate-600 dark:text-slate-300 ${inter.className}`}
        >
          Real-time activity from the StartupForge ecosystem
        </motion.p>
      </div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 180 }}
            className="p-6 rounded-2xl 
            bg-white/10 dark:bg-white/5 
            backdrop-blur-xl 
            border border-slate-200/20 dark:border-white/10
            shadow-lg hover:shadow-indigo-500/10
            transition-all duration-300 ease-in-out"
          >
            {/* Icon + Tag */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl">{item.icon}</span>

              <span
                className="text-xs px-3 py-1 rounded-full 
              bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 
              border border-indigo-400/20"
              >
                {item.tag}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p
              className={`text-sm text-slate-600 dark:text-slate-300 leading-relaxed ${inter.className}`}
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CommunityHighlights;
