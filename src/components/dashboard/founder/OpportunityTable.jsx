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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
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
                  >
                    {opportunity.role_title}
                  </motion.div>
                </Table.Cell>

                <Table.Cell>
                  <motion.div
                    variants={rowVariants}
                    initial="hidden"
                    animate="show"
                  >
                    {opportunity.work_type}
                  </motion.div>
                </Table.Cell>

                <Table.Cell>
                  <motion.div
                    variants={rowVariants}
                    initial="hidden"
                    animate="show"
                  >
                    {opportunity.commitment_level}
                  </motion.div>
                </Table.Cell>

                <Table.Cell>
                  <motion.div
                    variants={rowVariants}
                    initial="hidden"
                    animate="show"
                  >
                    {opportunity.deadline}
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
