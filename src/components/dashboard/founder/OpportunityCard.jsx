"use client";

import { authClient } from "@/lib/auth-client";
import { motion } from "framer-motion";
import { FaArrowRight, FaBriefcase, FaLaptopHouse } from "react-icons/fa";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const OpportunityCard = ({ opportunity, index }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const role = user?.role;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.08 }}
      whileHover={{
        y: -8,
      }}
      className="group relative overflow-hidden rounded-[28px]"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-[28px] bg-linear-to-br from-violet-600 via-indigo-500 to-cyan-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20" />

      <div className="relative h-full rounded-[28px] border border-slate-200/70 bg-white/90 p-6 backdrop-blur-xl transition-all duration-500 dark:border-slate-800 dark:bg-slate-900/90">
        {/* Decorative Orb */}
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-all duration-700 group-hover:bg-violet-500/20" />

        {/* Header */}
        <div className="relative flex items-start justify-between">
          <div>
            <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-600 dark:text-violet-400">
              OPEN POSITION
            </span>

            <h2 className="mt-4 line-clamp-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {opportunity.role_title}
            </h2>
          </div>

          <motion.div
            whileHover={{ rotate: 12 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800"
          >
            <FaBriefcase className="text-violet-600 dark:text-violet-400" />
          </motion.div>
        </div>

        {/* Meta */}
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-medium dark:border-slate-700">
            <FaLaptopHouse />
            {opportunity.work_type}
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-medium dark:border-slate-700">
            <FaBriefcase />
            {opportunity.commitment_level}
          </span>
        </div>

        {/* Skills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {opportunity.skills?.slice(0, 3).map((skill, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {skill}
            </motion.span>
          ))}

          {opportunity.skills?.length > 3 && (
            <span className="rounded-xl bg-violet-500/10 px-3 py-2 text-sm font-medium text-violet-600 dark:text-violet-400">
              +{opportunity.skills.length - 3}
            </span>
          )}
        </div>

        {/* CTA */}
        {role === "collaborator" ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-violet-600 to-indigo-600 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/20"
          >
            View Details
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
            >
              <FaArrowRight />
            </motion.div>
          </motion.button>
        ) : (
          <div className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 mt-5">
            <span>🔒</span>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Only collaborators can apply
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default OpportunityCard;
