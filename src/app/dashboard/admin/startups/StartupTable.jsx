"use client";
import { updateStartupStatus } from "@/lib/actions/status";
 import { Table } from "@heroui/react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export function StartupTable({ startups }) {
  const handleApprove = async (id) => {
    const result = await updateStartupStatus(id, {
      status: "approved",
    });
    if (result.modifiedCount > 0) {
      toast.success("Startup approved successfully");
    }
  };
  const handleReject = async (id) => {
    const result = await updateStartupStatus(id, {
      status: "rejected",
    });
    if (result.modifiedCount > 0) {
      toast.success("Startup rejected successfully");
    }
  };
  return (
    <div className=" w-full h-screen pb-10 px-3">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mb-6 flex flex-col md:flex-row items-center justify-between rounded-2xl border border-slate-200 space-y-3 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-4 shadow-sm"
      >
        {/* Left text */}
        <div className="text-center md:text-start">
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="text-sm font-medium text-slate-500 dark:text-slate-400"
          >
            Startups Management
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.3 }}
            className="text-lg font-semibold text-slate-900 dark:text-white"
          >
            Overview of all registered startups
          </motion.p>
        </div>

        {/* Right KPI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="flex items-center gap-3"
        >
          <div className="text-right">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Total Startups
            </p>

            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="text-2xl font-bold text-slate-900 dark:text-white text-center md:text-end"
            >
              {startups?.length || 0}
            </motion.p>
          </div>

          {/* accent indicator */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 40 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="w-1 rounded-full bg-indigo-600"
          />
        </motion.div>
      </motion.div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Users Table">
            <Table.Header>
              <Table.Column isRowHeader>Number</Table.Column>
              <Table.Column>Name</Table.Column>
              <Table.Column>Industry</Table.Column>
              <Table.Column>Funding Stage</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Approve</Table.Column>
              <Table.Column>Remove</Table.Column>
            </Table.Header>
            <Table.Body>
              {startups.map((startup, index) => (
                <Table.Row
                  key={startup?.email}
                  className="table-row-animate table-row-hover"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                        {startup?.startUpName?.charAt(0)?.toUpperCase()}
                      </div>

                      <span className="font-semibold text-slate-900 dark:text-white">
                        {startup?.startUpName}
                      </span>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                        startup?.industry === "saas"
                          ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-400"
                          : startup?.industry === "fintech"
                            ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                            : startup?.industry === "healthtech"
                              ? "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400"
                              : startup?.industry === "edtech"
                                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400"
                                : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      }`}
                    >
                      {startup?.industry}
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                        startup?.funding_stage === "idea-stage"
                          ? "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                          : startup?.funding_stage === "pre-seed"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400"
                            : startup?.funding_stage === "seed"
                              ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-400"
                              : startup?.funding_stage === "series-a"
                                ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                                : startup?.funding_stage === "series-b"
                                  ? "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400"
                                  : "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400"
                      }`}
                    >
                      {startup?.funding_stage}
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <div
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                        startup.status === "approved"
                          ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                          : startup.status === "pending"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400"
                            : startup.status === "rejected"
                              ? "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400"
                              : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      }`}
                    >
                      {startup.status}
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <button
                      disabled={startup.status === "approved"}
                      onClick={() => handleApprove(startup._id)}
                      className={`px-3 py-1 text-sm font-medium text-white rounded-full btn-scale ${
                        startup.status === "approved"
                          ? "bg-green-400 cursor-not-allowed opacity-80"
                          : "bg-green-600 hover:bg-green-700"
                      }`}
                    >
                      Approve
                    </button>
                  </Table.Cell>
                  <Table.Cell>
                    <button
                      disabled={startup.status === "rejected"}
                      onClick={() => handleReject(startup._id)}
                      className={`px-3 py-1 text-sm font-medium text-white rounded-full btn-scale ${
                        startup.status === "rejected"
                          ? "bg-red-400 cursor-not-allowed opacity-80"
                          : "bg-red-600 hover:bg-red-700"
                      }`}
                    >
                      Remove
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
