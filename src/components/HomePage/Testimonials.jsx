"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Inter, Space_Grotesk } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const testimonials = [
  {
    name: "Arafat Rahman",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1581382575275-97901c2635b7",
    rating: 5,
    text: "StartupForge completely changed how I approach collaboration. Before joining, I struggled to find serious builders who actually ship products. Within a few days, I connected with a focused team and started working on a real SaaS product with clear goals, roadmap, and execution flow.",
  },
  {
    name: "Nusrat Jahan",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1631947430066-48c30d57b943",
    rating: 5,
    text: "This platform feels much more structured compared to typical freelance or social communities. I was able to join multiple early-stage startup teams, contribute to real product design systems, and actually see my work implemented in live projects.",
  },
  {
    name: "Tanvir Hasan",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1590086782957-93c06ef21604",
    rating: 4,
    text: "StartupForge helped me move beyond tutorial-based learning into real-world backend systems. I collaborated with a startup team working on authentication, APIs, and scaling architecture, which gave me practical experience I couldn’t get elsewhere.",
  },
  {
    name: "Shakil Ahmed",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f",
    rating: 5,
    text: "I launched my idea here and was able to build a full team within a very short time. The quality of developers and designers is impressive. We moved from idea stage to MVP development with clear execution and accountability.",
  },
];
const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1 text-yellow-400 text-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const item = testimonials[index];

  return (
    <section className="w-full py-20 bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="container mx-auto px-6 text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
        >
          Testimonials
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-3 text-slate-600 dark:text-slate-300 ${inter.className}`}
        >
          What users say about StartupForge
        </motion.p>
      </div>

      {/* Slider */}
      <div className="container mx-auto px-6 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -60, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="p-8 rounded-2xl 
            bg-white/10 dark:bg-white/5 
            backdrop-blur-xl 
            border border-slate-200/20 dark:border-white/10
            shadow-lg"
          >
            {/* Top */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Image
                  height={100}
                  width={100}
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full border-2 border-indigo-500/40"
                />

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {item.name}
                  </h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {item.role}
                  </span>
                </div>
              </div>

              {/* Rating */}
              <StarRating rating={item.rating} />
            </div>

            {/* Text */}
            <p
              className={`text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base ${inter.className}`}
            >
              “{item.text}”
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="w-20 h-10 rounded-3xl bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white hover:scale-105 transition"
          >
            Prev
          </button>

          <button
            onClick={next}
            className="w-20 h-10 rounded-3xl bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 transition"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
