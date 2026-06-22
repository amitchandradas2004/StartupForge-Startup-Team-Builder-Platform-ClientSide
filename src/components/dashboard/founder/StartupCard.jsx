"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaUsers, FaRocket, FaLayerGroup } from "react-icons/fa";

const StartupCard = ({ startup }) => {
  return (
    <motion.article
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-[32px] "
    >
      {/* Glow Background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* CARD */}
      <div
        className="
          relative overflow-hidden rounded-[32px]
          border border-slate-200 dark:border-slate-800
          bg-white dark:bg-slate-900/70
          shadow-md dark:shadow-black/30
          transition-all duration-500 
        "
      >
        {/* subtle background linear */}
        <div className="absolute inset-0 bg-linear-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-900/40" />

        <div className="relative z-10 p-6">
          {/* TOP */}
          <div className="flex items-start justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 capitalize">
                <FaRocket size={10} className="text-indigo-500" />
                {startup.industry}
              </span>

              <h3 className="mt-4 text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white line-clamp-1">
                {startup.startUpName}
              </h3>
            </div>

            {/* INITIAL */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-lg font-bold text-slate-900 dark:text-white shadow-sm">
              {startup.startUpName?.charAt(0).toUpperCase()}
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-5 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 min-h-18">
            {startup.description}
          </p>

          {/* STATS */}
          <div className="mt-1 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2">
              <FaLayerGroup className="text-indigo-500 text-xs" />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300 capitalize">
                {startup.funding_stage}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2">
              <FaUsers className="text-indigo-500 text-xs" />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                {startup.team_size_needed}
              </span>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="my-4 h-px bg-linear-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />

          {/* CTA */}
          <Link
            href={`/startups/${startup._id}`}
            className="
              flex items-center justify-between
              rounded-2xl border border-slate-200 dark:border-slate-700
              bg-slate-50 dark:bg-slate-800
              px-4 py-3
              transition-all duration-300
              hover:border-indigo-400 dark:hover:border-indigo-500/40
              hover:bg-indigo-50 dark:hover:bg-indigo-500/10
            "
          >
            <span className="font-medium text-slate-800 dark:text-slate-200">
              Explore Startup
            </span>

            <FaArrowRight className="text-indigo-500 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default StartupCard;
