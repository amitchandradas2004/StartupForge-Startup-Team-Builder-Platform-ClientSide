"use client";

import React from "react";
import { motion } from "framer-motion";
import { Inter, Space_Grotesk } from "next/font/google";

const reasons = [
  {
    title: "Find Real Co-Founders",
    desc: "Connect with developers, designers, and founders who are actively building startups—not just networking.",
    icon: "🤝",
  },
  {
    title: "Build Real Projects",
    desc: "Work on startup ideas that go beyond theory and become real products used by users.",
    icon: "🚀",
  },
  {
    title: "Grow Your Skills Fast",
    desc: "Gain hands-on experience in real teams and improve faster than traditional learning paths.",
    icon: "⚡",
  },
  {
    title: "Startup Opportunities",
    desc: "Get access to early-stage startup ideas, internships, and collaboration opportunities.",
    icon: "💼",
  },
  {
    title: "Global Community",
    desc: "Join a growing network of ambitious builders from different backgrounds and skill sets.",
    icon: "🌍",
  },
  {
    title: "Launch Your Idea",
    desc: "Post your startup idea and instantly find people who want to build it with you.",
    icon: "💡",
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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const WhyJoinStartupForge = () => {
  return (
    <section className="w-full pt-10 pb-20 bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="container mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
        >
          Why Join StartupForge
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`mt-3 text-slate-600 dark:text-slate-300 ${inter.className}`}
        >
          Everything you need to go from idea → team → startup launch.
        </motion.p>
      </div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className=" container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group p-6 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-slate-200/20 dark:border-white/10 hover:border-indigo-500/40 transition-all duration-300 ease-in-out shadow-lg hover:shadow-indigo-500/10 transform hover:scale-[1.03]"
          >
            {/* Icon */}
            <div className="text-3xl mb-4">{item.icon}</div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
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

export default WhyJoinStartupForge;
