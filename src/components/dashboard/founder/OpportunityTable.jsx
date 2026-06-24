"use client";

import { Table } from "@heroui/react";
import { motion } from "framer-motion";
import { UpdateOpportunityModal } from "./UpdateOpportunityModal";
import { useState } from "react";
import { DeleteOpportunity } from "./DeleteOpportunity";

const rowVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25 },
  },
};

export function OpportunityTable({ opportunities }) {
  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="opportunity table" className="w-full">
          <Table.Header>
            <Table.Column isRowHeader>Number</Table.Column>
            <Table.Column>Name</Table.Column>
            <Table.Column>Work Type</Table.Column>
            <Table.Column>Commitment Level</Table.Column>
            <Table.Column>Deadline</Table.Column>
            <Table.Column>Update</Table.Column>
            <Table.Column>Delete</Table.Column>
          </Table.Header>

          <Table.Body>
            {opportunities.map((opportunity, index) => (
              <Table.Row key={opportunity._id}>
                {/* Animated wrapper INSIDE row */}
                <Table.Cell>
                  <motion.div
                    variants={rowVariants}
                    initial="hidden"
                    animate="show"
                  >
                    {index + 1}
                  </motion.div>
                </Table.Cell>

                <Table.Cell>
                  <motion.div
                    variants={rowVariants}
                    initial="hidden"
                    animate="show"
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shadow-sm">
                      {opportunity?.role_title?.charAt(0)?.toUpperCase()}
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        {opportunity?.role_title}
                      </p>
                    </div>
                  </motion.div>
                </Table.Cell>

                <Table.Cell>
                  <motion.div
                    variants={rowVariants}
                    initial="hidden"
                    animate="show"
                  >
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                        opportunity?.work_type?.toLowerCase() === "remote"
                          ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                          : opportunity?.work_type?.toLowerCase() === "hybrid"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400"
                            : opportunity?.work_type?.toLowerCase() ===
                                "on-site"
                              ? "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400"
                              : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      }`}
                    >
                      {opportunity?.work_type}
                    </span>
                  </motion.div>
                </Table.Cell>

                <Table.Cell>
                  <motion.div
                    variants={rowVariants}
                    initial="hidden"
                    animate="show"
                  >
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                        opportunity?.commitment_level?.toLowerCase() ===
                        "full-time"
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400"
                          : opportunity?.commitment_level?.toLowerCase() ===
                              "part-time"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400"
                            : opportunity?.commitment_level?.toLowerCase() ===
                                "contract"
                              ? "bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-400"
                              : opportunity?.commitment_level?.toLowerCase() ===
                                  "internship"
                                ? "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400"
                                : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      }`}
                    >
                      {opportunity?.commitment_level}
                    </span>
                  </motion.div>
                </Table.Cell>

                <Table.Cell>
                  <motion.div
                    variants={rowVariants}
                    initial="hidden"
                    animate="show"
                  >
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                        new Date(opportunity?.deadline) < new Date()
                          ? "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400"
                          : new Date(opportunity?.deadline) <
                              new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400"
                            : "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                      }`}
                    >
                      {new Date(opportunity?.deadline).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        },
                      )}
                    </span>
                  </motion.div>
                </Table.Cell>

                <Table.Cell>
                  <UpdateOpportunityModal opportunity={opportunity} />
                </Table.Cell>
                <Table.Cell>
                  <DeleteOpportunity opportunity={opportunity} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}
