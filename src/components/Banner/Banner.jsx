"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Inter, Space_Grotesk } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const fullTitle = "StartupForge – Forging Startup Success Together";

const Banner = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    if (index < fullTitle.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullTitle.charAt(index));
        setIndex(index + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-15">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1683133976227-955341ed26b8')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-4xl w-full px-6 text-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, -6, 0],
            boxShadow: [
              "0 0 0px rgba(99,102,241,0.0)",
              "0 0 18px rgba(99,102,241,0.7)",
              "0 0 0px rgba(99,102,241,0.0)",
            ],
          }}
          transition={{
            opacity: { duration: 0.5 },
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
            boxShadow: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className={`relative inline-block mb-2 px-5 py-1 text-xs font-medium rounded-full 
  text-white border border-indigo-400/40 backdrop-blur-md 
  bg-white/10 dark:bg-white/5 ${spaceGrotesk.className}`}
        >
          {/* Neon glow layer */}
          <span className="absolute inset-0 rounded-full bg-indigo-500/20 blur-lg opacity-70 animate-pulse"></span>

          {/* Text */}
          <span className="relative z-10">🚀 Startup Ecosystem Platform</span>
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
        >
          {text}
          <span className="animate-pulse">|</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className={`mt-5 text-sm md:text-base lg:text-lg text-white/80 leading-relaxed ${inter.className}`}
        >
          StartupForge bridges the gap between ambitious founders and talented
          collaborators. Create startups, post opportunities, recruit team
          members, and build innovative ventures through a modern, collaborative
          ecosystem.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <Link href="/signIn">
            {" "}
            <button
              className={`w-40 h-12 rounded-2xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow-lg ${inter.className}`}
            >
              Get Started
            </button>
          </Link>

          <Link href="/browseStartups">
            {" "}
            <button
              className={`w-40 h-12 rounded-2xl bg-white/5 text-white border border-white/20 backdrop-blur-xl hover:bg-white/20 transition  ${inter.className}`}
            >
              Explore Startups
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
