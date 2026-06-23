"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFileAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const OverviewCard = ({ title, value, icon: Icon, color }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
      <div className={`absolute top-0 left-0 h-1 w-full ${color}`} />

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            {value}
          </h2>
        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${color} text-white`}
        >
          <Icon className="text-xl" />
        </div>
      </div>
    </div>
  );
};

const CollaboratorDashboard = ({ stats }) => {
  return (
    <section className="min-h-screen px-4 py-10 dark:bg-slate-950 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Collaborator Overview
          </h1>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Track all applications and monitor their status.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <OverviewCard
            title="Total Applications"
            value={stats.totalApplications}
            icon={FaFileAlt}
            color="bg-indigo-600"
          />

          <OverviewCard
            title="Pending Applications"
            value={stats.pendingApplications}
            icon={FaClock}
            color="bg-amber-500"
          />

          <OverviewCard
            title="Approved Applications"
            value={stats.approvedApplications}
            icon={FaCheckCircle}
            color="bg-emerald-600"
          />

          <OverviewCard
            title="Rejected Applications"
            value={stats.rejectedApplications}
            icon={FaTimesCircle}
            color="bg-rose-600"
          />
        </div>

        {/* CTA Section */}
        <div className="mt-8 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 p-10 text-center">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
            Application Management
          </h2>

          <Link
            href="/dashboard/collaborator/applications"
            className="text-blue-500 hover:underline"
          >
            Click here to see all your applications →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollaboratorDashboard;
