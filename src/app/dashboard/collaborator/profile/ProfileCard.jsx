"use client";
import React from "react";
import { CollaboratorProfileUpdateModal } from "./CollaboratorProfileUpdateModal";
import Image from "next/image";
import { motion } from "framer-motion";

// Framer Motion Variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  },
};

const ProfileCard = ({ user }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 py-8 w-full">
      <motion.div 
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl md:mx-20"
      >
        {/* Header Section */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-6 p-8 border-b border-slate-200 dark:border-slate-800"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              height={200}
              width={200}
              src={user?.image}
              alt={user?.name}
              className="w-28 h-28 rounded-full object-cover border-4 border-indigo-100"
            />
          </motion.div>

          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              {user?.name}
            </h2>

            <p className="text-slate-500 break-all mt-1">{user?.email}</p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
              <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                {user?.role}
              </span>

              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium capitalize">
                {user?.plan}
              </span>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  user?.status === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {user?.status}
              </span>
            </div>
          </div>
        </motion.div>

        <div className="p-8 space-y-8">
          {/* Bio Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-2">
              Bio
            </h3>

            <p className="text-slate-700 dark:text-slate-300 leading-7">
              {user?.bio || "Not added yet"}
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
              Skills
            </h3>

            {user?.skills?.length ? (
              <div className="flex flex-wrap gap-3">
                {user.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            ) : (
              <p className="text-slate-500">No skills added.</p>
            )}
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div whileHover={{ y: -2 }} className="rounded-xl bg-slate-50 dark:bg-slate-800 p-5 transition-shadow hover:shadow-md">
              <p className="text-sm text-slate-500">Plan</p>
              <p className="font-semibold capitalize">{user?.plan}</p>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} className="rounded-xl bg-slate-50 dark:bg-slate-800 p-5 transition-shadow hover:shadow-md">
              <p className="text-sm text-slate-500">Role</p>
              <p className="font-semibold capitalize">{user?.role}</p>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} className="rounded-xl bg-slate-50 dark:bg-slate-800 p-5 transition-shadow hover:shadow-md">
              <p className="text-sm text-slate-500">Status</p>
              <p className="font-semibold capitalize">{user?.status}</p>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} className="rounded-xl bg-slate-50 dark:bg-slate-800 p-5 transition-shadow hover:shadow-md">
              <p className="text-sm text-slate-500">Email Verified</p>
              <p className="font-semibold">
                {user?.emailVerified ? "Yes" : "No"}
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} className="rounded-xl bg-slate-50 dark:bg-slate-800 p-5 md:col-span-2 transition-shadow hover:shadow-md">
              <p className="text-sm text-slate-500">Joined</p>
              <p className="font-semibold">
                {new Date(user?.createdAt).toLocaleDateString()}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer/Modal Section */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-slate-200 dark:border-slate-800 p-6 flex justify-end"
        >
          <CollaboratorProfileUpdateModal user={user} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfileCard;