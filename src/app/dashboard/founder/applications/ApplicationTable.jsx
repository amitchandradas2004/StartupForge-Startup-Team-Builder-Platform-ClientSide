"use client";
import { updateApplicationStatus } from "@/lib/actions/update";
 import { Table } from "@heroui/react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaUsers } from "react-icons/fa";
export function ApplicationTable({ applications }) {
  const handleAccept = async (id) => {
    const result = await updateApplicationStatus(id, {
      status: "accepted",
    });
    if (result.modifiedCount > 0) {
      toast.success("Application is accepted successfully");
    }
  };
  const handleReject = async (id) => {
    const result = await updateApplicationStatus(id, {
      status: "rejected",
    });
    if (result.modifiedCount > 0) {
      toast.success("Application is rejected successfully");
    }
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm mb-5"
      >
        {/* Background Glow */}
        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative flex flex-col md:flex-row space-y-3 items-center justify-between">
          <div>
            <p className="text-xl font-medium text-slate-500 dark:text-slate-400 text-center md:text-start">
              Applications Overview
            </p>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Total Applications Received
            </p>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {" "}
            <div>
              <motion.h2
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
              >
                {applications.length}
              </motion.h2>
            </div>
            <motion.div
              initial={{ rotate: -15, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white text-2xl shadow-lg"
            >
              <FaUsers />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Collaborator Application Table">
            <Table.Header>
              <Table.Column isRowHeader>Number</Table.Column>
              <Table.Column>Opportunity Name</Table.Column>
              <Table.Column>Applied Date</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Accept</Table.Column>
              <Table.Column>Reject</Table.Column>
            </Table.Header>

            <Table.Body>
              {applications.map((application, index) => (
                <Table.Row
                  key={application._id}
                  className="table-row-animate table-row-hover"
                  style={{
                    animationDelay: `${index * 70}ms`,
                  }}
                >
                  <Table.Cell>{index + 1}</Table.Cell>

                  <Table.Cell>
                    <div initial="hidden" animate="show">
                      <span className="inline-flex items-center rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-400 px-3 py-1 text-xs font-semibold">
                        {application?.opportunityName}
                      </span>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {new Date(application.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        },
                      )}
                    </span>
                  </Table.Cell>

                  <Table.Cell>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        application.status === "pending"
                          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400"
                          : application.status === "accepted"
                            ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                            : application.status === "rejected"
                              ? "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400"
                              : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      }`}
                    >
                      {application.status}
                    </span>
                  </Table.Cell>

                  {/* Accept Button */}
                  <Table.Cell>
                    <button
                      disabled={application.status === "accepted"}
                      onClick={() => handleAccept(application._id)}
                      className={`px-3 py-1 text-sm font-medium text-white rounded-full btn-scale ${
                        application.status === "accepted"
                          ? "bg-green-400 cursor-not-allowed opacity-80"
                          : "bg-green-600 hover:bg-green-700"
                      }`}
                    >
                      Accept
                    </button>
                  </Table.Cell>

                  {/* Reject Button */}
                  <Table.Cell>
                    <button
                      disabled={application.status === "rejected"}
                      onClick={() => handleReject(application._id)}
                      className={`px-3 py-1 text-sm font-medium text-white rounded-full btn-scale ${
                        application.status === "rejected"
                          ? "bg-red-400 cursor-not-allowed opacity-80"
                          : "bg-red-600 hover:bg-red-700"
                      }`}
                    >
                      Reject
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </>
  );
}
