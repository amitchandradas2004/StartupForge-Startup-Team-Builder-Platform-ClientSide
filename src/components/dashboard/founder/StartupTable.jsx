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
            <Table.Column>Funding-Stage</Table.Column>
            <Table.Column>Description</Table.Column>
            <Table.Column>Update</Table.Column>
            <Table.Column>Delete</Table.Column>
          </Table.Header>

          <Table.Body>
            <AnimatePresence mode="popLayout">

              {startups.map((startup, index) => (
                <Table.Row
                  key={startup._id}
                  layout
                >

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

                  {/* Funding Stage */}
                  <Table.Cell>
                    <motion.div
                      variants={cellVariants}
                      initial="hidden"
                      animate="show"
                      exit={{ opacity: 0, x: 20 }}
                    >
                      {startup.funding_stage}
                    </motion.div>
                  </Table.Cell>

                  {/* Description */}
                  <Table.Cell>
                    <motion.div
                      variants={cellVariants}
                      initial="hidden"
                      animate="show"
                      exit={{ opacity: 0, x: 20 }}
                    >
                      {startup.description}
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