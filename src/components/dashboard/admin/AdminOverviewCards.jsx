"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaUsers, FaRocket, FaBriefcase, FaDollarSign } from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const OverviewCard = ({ title, value, icon: Icon, color }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -6,
        transition: { duration: 0.2 },
      }}
      className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-all hover:shadow-xl"
    >
      <div className={`absolute top-0 left-0 h-1 w-full ${color}`} />

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            {value}
          </h2>
        </div>

        <motion.div
          whileHover={{
            rotate: 10,
            scale: 1.1,
          }}
          transition={{ duration: 0.2 }}
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${color} text-white`}
        >
          <Icon className="text-xl" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const OverviewCards = ({ stats }) => {
  return (
    <section className="dark:bg-slate-950 py-10  px-5 w-full">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Admin Overview
          </h1>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Monitor platform growth, users, startups, opportunities, and
            revenue.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          <OverviewCard
            title="Total Users"
            value={stats.totalUsers}
            icon={FaUsers}
            color="bg-blue-600"
          />

          <OverviewCard
            title="Total Startups"
            value={stats.totalStartups}
            icon={FaRocket}
            color="bg-violet-600"
          />

          <OverviewCard
            title="Total Opportunities"
            value={stats.totalOpportunities}
            icon={FaBriefcase}
            color="bg-emerald-600"
          />

          <OverviewCard
            title="Total Revenue"
            value={`$${stats.totalRevenue}`}
            icon={FaDollarSign}
            color="bg-amber-500"
          />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 p-10 text-center"
        >
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
            Platform Management
          </h2>

          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Manage users, startups, opportunities, and monitor platform
            performance.
          </p>

          <Link
            href="/dashboard/admin/users"
            className="text-blue-500 hover:text-blue-600 hover:underline transition-colors"
          >
            Manage users and platform activities →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewCards;
