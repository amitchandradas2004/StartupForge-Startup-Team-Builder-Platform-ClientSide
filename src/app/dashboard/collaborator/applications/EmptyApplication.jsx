"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaBriefcase, FaArrowRight } from "react-icons/fa";

const EmptyApplications = () => {
  return (
    <section className="min-h-screen flex items-center md:items-start justify-center pr-4 w-full">
      <div className="flex  justify-center ">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full  lg:m rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center shadow-sm p-5 lg:p-10"
        >
          {/* Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-500/10">
            <FaBriefcase className="text-4xl text-indigo-600 dark:text-indigo-400" />
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
            No Applications Yet
          </h2>

          {/* Description */}
          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed text-xs lg:text-xl">
            You have not applied to any opportunities yet. Explore available
            startup roles <br /> and submit your first application to begin your
            collaboration journey.
          </p>

          {/* CTA */}
          <Link href="/browseOpportunities">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-5 inline-flex items-center gap-3 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 w-60 lg:w-80 h-10 lg:h-13 justify-center font-medium text-white shadow-lg shadow-indigo-500/20"
            >
              Browse Opportunities
              <FaArrowRight />
            </motion.button>
          </Link>

          {/* Small Hint */}
          <p className="mt-5 text-xs lg:text-xl text-slate-500 dark:text-slate-500">
            Find opportunities that match your skills and interests.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EmptyApplications;
