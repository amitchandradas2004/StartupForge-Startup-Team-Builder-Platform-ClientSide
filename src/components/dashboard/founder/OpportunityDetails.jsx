"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaLaptopHouse,
  FaArrowRight,
  FaCode,
} from "react-icons/fa";
import { ApplyOpportunityModal } from "../collaborator/ApplyOpportunityModal";

export default function OpportunityDetails({ opportunity }) {
  const { role_title, work_type, commitment_level, deadline, skills } =
    opportunity;

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 py-5">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-6 md:p-10">
            <span className="inline-flex rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Startup Opportunity
            </span>

            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              {role_title}
            </h1>

            <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
              Join a fast-growing startup team and help build innovative
              products that make a real impact.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-indigo-500/10 px-4 py-2 text-indigo-600 dark:text-indigo-400">
                {work_type}
              </span>

              <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-emerald-600 dark:text-emerald-400">
                {commitment_level}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid gap-5 lg:grid-cols-3">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Overview */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                About This Opportunity
              </h2>

              <p className="leading-6 text-slate-600 dark:text-slate-400">
                We are looking for a passionate{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  {role_title}
                </span>{" "}
                with strong experience in {skills?.join(", ")}. This is a{" "}
                {commitment_level.toLowerCase()} position with a{" "}
                {work_type.toLowerCase()} working arrangement.
              </p>
            </div>

            {/* Skills */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <FaCode className="text-indigo-500" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                  Required Skills
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {skills?.map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-xl px-4 py-2 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium border border-indigo-500/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="space-y-6"
          >
            {/* Info Card */}
            <div className="sticky top-24 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Opportunity Details
              </h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <FaLaptopHouse className="text-indigo-500 text-lg" />
                  <div>
                    <p className="text-sm text-slate-500">Work Type</p>
                    <p className="font-medium text-slate-900 dark:text-white">
                      {work_type}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaBriefcase className="text-emerald-500 text-lg" />
                  <div>
                    <p className="text-sm text-slate-500">Commitment</p>
                    <p className="font-medium text-slate-900 dark:text-white">
                      {commitment_level}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaCalendarAlt className="text-rose-500 text-lg" />
                  <div>
                    <p className="text-sm text-slate-500">
                      Application Deadline
                    </p>
                    <p className="font-medium text-slate-900 dark:text-white">
                      {deadline}
                    </p>
                  </div>
                </div>
              </div>
              {/* Apply Button */}
             <ApplyOpportunityModal opportunity={opportunity}/>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
