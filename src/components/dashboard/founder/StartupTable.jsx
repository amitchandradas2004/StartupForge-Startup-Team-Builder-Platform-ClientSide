"use client";

import { Table } from "@heroui/react";
import { AnimatePresence, motion } from "framer-motion";
import { UpdateStartupModal } from "./UpdateStartupModal";
import { DeleteStartup } from "./DeleteStartup";

// container stagger
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

// row content animation
const cellVariants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25 },
  },
};

export function StartupTable({ startups }) {
  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="w-full">
          <Table.Header>
            <Table.Column isRowHeader>Number</Table.Column>
            <Table.Column>Name</Table.Column>
            <Table.Column>Industry</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Update</Table.Column>
            <Table.Column>Delete</Table.Column>
          </Table.Header>

          <Table.Body>
            <AnimatePresence mode="popLayout">
              {startups.map((startup, index) => (
                <Table.Row key={startup._id} layout>
                  {/* Number */}
                  <Table.Cell>
                    <motion.div
                      variants={cellVariants}
                      initial="hidden"
                      animate="show"
                      exit={{ opacity: 0, x: 20 }}
                    >
                      {index + 1}
                    </motion.div>
                  </Table.Cell>

                  {/* Name */}
                  <Table.Cell>
                    <motion.div
                      variants={cellVariants}
                      initial="hidden"
                      animate="show"
                      exit={{ opacity: 0, x: 20 }}
                    >
                      {startup.startUpName}
                    </motion.div>
                  </Table.Cell>

                  {/* Industry */}
                  <Table.Cell>
                    <motion.div
                      variants={cellVariants}
                      initial="hidden"
                      animate="show"
                      exit={{ opacity: 0, x: 20 }}
                    >
                      {startup.industry}
                    </motion.div>
                  </Table.Cell>

                  {/* status */}
                  <Table.Cell>
                    <motion.div
                      variants={cellVariants}
                      initial="hidden"
                      animate="show"
                      exit={{ opacity: 0, x: 20 }}
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
                    </motion.div>
                  </Table.Cell>

                  {/* Update Button */}
                  <Table.Cell>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <UpdateStartupModal startup={startup} />
                    </motion.div>
                  </Table.Cell>

                  {/* Delete Button */}
                  <Table.Cell>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <DeleteStartup startup={startup} />
                    </motion.div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </AnimatePresence>
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}
