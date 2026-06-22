"use client";
import { Date } from "@/components/dashboard/founder/Date";
import { createOpportynity } from "@/lib/actions/startup";
import { authClient } from "@/lib/auth-client";
import { motion } from "framer-motion";
import {
  Button,
  Fieldset,
  Form,
  InputGroup,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa6";

const FounderAddOppturnityPage = () => {
  const [skillsInput, setSkillsInput] = useState("");
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const userEmail = user?.email;
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const skills = [
      ...new Set(
        skillsInput
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
      ),
    ];
    const opportunityData = { ...data, skills };

    const res = await createOpportynity(opportunityData);
    if (res.insertedId) {
      toast.success(`Opportynity created successfully`);
    }
    // console.log(opportunityData, "opportunity data");
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <div className="min-h-screen w-full flex items-start justify-center px-4 md:px-20 py-8 dark:bg-slate-950">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-4xl "
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold">Add Opportunity</h1>

          <p className="text-default-500 mt-2">
            Find talented people to help grow your startup.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-slate-500/30 bg-background/90 backdrop-blur-md p-5 sm:p-6 md:p-8 shadow-xl "
        >
          <Form onSubmit={onSubmit} className="w-full">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Fieldset.Group className="space-y-6">
                {/* Role Title */}
                <motion.div variants={itemVariants}>
                  <TextField
                    isRequired
                    name="role_title"
                    className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4"
                  >
                    <Label className="md:w-32 shrink-0">Role Title</Label>

                    <InputGroup className="w-full">
                      <InputGroup.Prefix>
                        <FaUser />
                      </InputGroup.Prefix>

                      <InputGroup.Input placeholder="e.g. Senior Full-Stack Developer" />
                    </InputGroup>
                  </TextField>
                </motion.div>

                {/* Skills */}
                <motion.div variants={itemVariants}>
                  <TextField isRequired name="skills">
                    <Label>Required Skills (Comma-separated)</Label>

                    <TextArea
                      aria-label="Opportunity Skills Required"
                      className="min-h-24 w-full"
                      placeholder="e.g. React, TypeScript, JavaScript..."
                      value={skillsInput}
                      onChange={(e) => setSkillsInput(e.target.value)}
                    />
                  </TextField>
                </motion.div>

                {/* Work Type */}
                <motion.div variants={itemVariants}>
                  <Select name="work_type" isRequired placeholder="Select Type">
                    <Label>Work Type</Label>

                    <Select.Trigger className="rounded-full">
                      <Select.Value />
                    </Select.Trigger>

                    <Select.Popover className="rounded-3xl">
                      <ListBox>
                        <ListBox.Item id="remote" textValue="Remote">
                          Remote
                        </ListBox.Item>

                        <ListBox.Item id="hybrid" textValue="Hybrid">
                          Hybrid
                        </ListBox.Item>

                        <ListBox.Item id="on_site" textValue="On-Site">
                          On-site
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </motion.div>

                {/* Commitment Level */}
                <motion.div variants={itemVariants}>
                  <Select
                    name="commitment_level"
                    isRequired
                    placeholder="Select Commitment Level"
                  >
                    <Label>Commitment Level</Label>

                    <Select.Trigger className="rounded-full">
                      <Select.Value />
                    </Select.Trigger>

                    <Select.Popover className="rounded-3xl">
                      <ListBox>
                        <ListBox.Item id="part_time" textValue="Part-time">
                          Part-time
                        </ListBox.Item>

                        <ListBox.Item id="full-time" textValue="Full-time">
                          Full-time
                        </ListBox.Item>

                        <ListBox.Item id="contract" textValue="Contract">
                          Contract
                        </ListBox.Item>

                        <ListBox.Item id="internship" textValue="Internship">
                          Internship
                        </ListBox.Item>

                        <ListBox.Item id="volunteer" textValue="Volunteer">
                          Volunteer
                        </ListBox.Item>

                        <ListBox.Item id="advisor" textValue="Advisor">
                          Advisor
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </motion.div>

                {/* Date */}
                <motion.div variants={itemVariants}>
                  <Date />
                </motion.div>
              </Fieldset.Group>

              {/* Submit Button */}
              <motion.div variants={itemVariants} className="mt-8">
                <Button
                  type="submit"
                  className="w-full rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium h-12 transition-all duration-300 hover:scale-[1.02]"
                >
                  Create Opportunity
                </Button>
              </motion.div>
            </motion.div>
          </Form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FounderAddOppturnityPage;
