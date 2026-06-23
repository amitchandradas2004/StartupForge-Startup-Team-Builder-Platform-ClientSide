"use client";

import OverviewCards from "@/components/dashboard/collaborator/OverviewCards";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFileAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const CollaboratorPage = () => {
  // Later replace with data from API
  const stats = {
    totalApplications: 0,
    pendingApplications: 0,
    approvedApplications: 0,
    rejectedApplications: 0,
  };

  return (
    <section className="min-h-screen bg-white w-full dark:bg-slate-950 p-4 md:p-6 lg:p-8">
      <div className="mx-auto container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Collaborator Overview
          </h1>

          <p className="mt-2 text-slate-600 dark:text-slate-400 text-xs lg:text-xl">
            Track all applications and monitor their status.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <OverviewCards
            title="Total Applications"
            value={stats.totalApplications}
            icon={FaFileAlt}
            color="bg-indigo-600"
          />

          <OverviewCards
            title="Pending Applications"
            value={stats.pendingApplications}
            icon={FaClock}
            color="bg-amber-500"
          />

          <OverviewCards
            title="Approved Applications"
            value={stats.approvedApplications}
            icon={FaCheckCircle}
            color="bg-emerald-600"
          />

          <OverviewCards
            title="Rejected Applications"
            value={stats.rejectedApplications}
            icon={FaTimesCircle}
            color="bg-rose-600"
          />
        </div>

        {/* Future Content Section */}
        <div className="mt-8 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 p-10 text-center">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
            Application Management
          </h2>

          <Link
            href={"/dashboard/collaborator/applications"}
            className="text-blue-500"
          >
            Click here to see all of your opportunity applications.
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollaboratorPage;
