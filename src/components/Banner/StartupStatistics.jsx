"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const useCountUp = (end, duration = 1500, trigger) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      const current = Math.floor(percentage * end);

      setValue(current);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, trigger]);

  return value;
};
const stats = [
  {
    label: "Active Builders",
    value: 12500,
    suffix: "+",
    desc: "Developers, designers, and founders collaborating in real time",
  },
  {
    label: "Startups Created",
    value: 3200,
    suffix: "+",
    desc: "Ideas transformed into real products by teams",
  },
  {
    label: "MVPs Launched",
    value: 1450,
    suffix: "+",
    desc: "Minimum viable products deployed successfully",
  },
  {
    label: "Collaborations",
    value: 28000,
    suffix: "+",
    desc: "Successful connections between founders and builders",
  },
];

const StartupStatistics = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full py-20 bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
        >
          Startup Statistics
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`mt-3 text-slate-600 dark:text-slate-300 ${inter.className}`}
        >
          Real-time impact of the StartupForge ecosystem
        </motion.p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => {
          const count = useCountUp(item.value, 1500, isVisible);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl 
              bg-white/10 dark:bg-white/5 
              backdrop-blur-xl 
              border border-slate-200/20 dark:border-white/10
              shadow-lg hover:shadow-indigo-500/10
              text-center
              transition-all duration-300 ease-in-out
              hover:scale-[1.05]"
            >
              {/* Number */}
              <h3 className="text-3xl md:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
                {count.toLocaleString()}
                {item.suffix}
              </h3>

              {/* Label */}
              <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                {item.label}
              </p>

              {/* Description */}
              <p className={`mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed ${inter.className}`}>
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StartupStatistics;
