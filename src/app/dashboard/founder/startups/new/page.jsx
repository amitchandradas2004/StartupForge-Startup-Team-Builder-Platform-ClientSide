"use client";

import { createStartup } from "@/lib/actions/startup";
import { authClient } from "@/lib/auth-client";
import { imageUpload } from "@/lib/actions/imageUpload";
import {
  Button,
  InputGroup,
  Label,
  ListBox,
  Select,
  Fieldset,
  TextArea,
  Form,
  TextField,
} from "@heroui/react";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa6";
import { motion } from "framer-motion";
import { redirect } from "next/navigation";
import Link from "next/link";

const FounderstartupsPage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const userEmail = user?.email;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const uploadedLogo = await imageUpload(data.logo);

    const startupData = {
      ...data,
      logo: uploadedLogo.url,
      founderEmail: userEmail,
    };

    const res = await createStartup(startupData);

    if (res.insertedId) {
      toast.success("StartUp created successfully");
      redirect("/dashboard/founder/startups");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <div className="min-h-screen w-full flex items-center justify-center px-4 md:px-20 py-8 dark:bg-slate-950">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-4xl"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold">Create Startup</h1>

          <p className="text-default-500 mt-2">
            Add your startup details and start finding collaborators.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          variants={itemVariants}
          className="rounded-3xl border border-slate-500/30 bg-background/80 backdrop-blur-md p-5 sm:p-6 md:p-8 shadow-xl"
        >
          <Form onSubmit={onSubmit} className="w-full">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Fieldset.Group className="space-y-6">
                {/* Startup Name */}
                <motion.div variants={itemVariants}>
                  <TextField
                    isRequired
                    name="startUpName"
                    className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4"
                  >
                    <Label className="md:w-32 shrink-0">Startup Name</Label>

                    <InputGroup className="w-full">
                      <InputGroup.Prefix>
                        <FaUser />
                      </InputGroup.Prefix>

                      <InputGroup.Input placeholder="e.g. TechNova" />
                    </InputGroup>
                  </TextField>
                </motion.div>

                {/* Logo Upload */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  className="flex flex-col gap-3"
                >
                  <Label>Logo</Label>

                  <div className="h-14 w-full border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl flex items-center justify-center transition-all duration-300 hover:border-indigo-500">
                    <label
                      htmlFor="image-upload"
                      className="cursor-pointer block text-center w-full"
                    >
                      <p className="font-medium">Click here to upload logo</p>
                    </label>

                    <input
                      required
                      id="image-upload"
                      name="logo"
                      type="file"
                      className="hidden"
                    />
                  </div>
                </motion.div>

                {/* Industry */}
                <motion.div variants={itemVariants}>
                  <Select
                    name="industry"
                    isRequired
                    placeholder="Select Industry"
                  >
                    <Label>Industry</Label>

                    <Select.Trigger className="rounded-full">
                      <Select.Value />
                    </Select.Trigger>

                    <Select.Popover className="rounded-3xl">
                      <ListBox>
                        <ListBox.Item id="technology" textValue="technology">
                          Technology
                        </ListBox.Item>

                        <ListBox.Item id="fintech" textValue="fintech">
                          Fintech
                        </ListBox.Item>

                        <ListBox.Item id="healthtech" textValue="healthtech">
                          HealthTech
                        </ListBox.Item>

                        <ListBox.Item id="e-commerce" textValue="e-commerce">
                          E-Commerce
                        </ListBox.Item>

                        <ListBox.Item id="ai/ml" textValue="ai/ml">
                          AI/ML
                        </ListBox.Item>

                        <ListBox.Item id="green-tech" textValue="green-tech">
                          Green Tech
                        </ListBox.Item>

                        <ListBox.Item id="other" textValue="other">
                          Other
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </motion.div>

                {/* Funding Stage */}
                <motion.div variants={itemVariants}>
                  <Select
                    name="funding_stage"
                    isRequired
                    placeholder="Select Funding Stage"
                  >
                    <Label>Funding Stage</Label>

                    <Select.Trigger className="rounded-full">
                      <Select.Value />
                    </Select.Trigger>

                    <Select.Popover className="rounded-3xl">
                      <ListBox>
                        <ListBox.Item id="idea" textValue="idea">
                          Idea
                        </ListBox.Item>

                        <ListBox.Item id="pre-seed" textValue="pre-seed">
                          Pre-Seed
                        </ListBox.Item>

                        <ListBox.Item id="seed" textValue="seed">
                          Seed
                        </ListBox.Item>

                        <ListBox.Item id="series-a" textValue="series-a">
                          Series-A
                        </ListBox.Item>

                        <ListBox.Item id="series-b" textValue="series-b">
                          Series-B
                        </ListBox.Item>

                        <ListBox.Item id="series-c" textValue="series-c">
                          Series-C
                        </ListBox.Item>

                        <ListBox.Item id="growth" textValue="growth">
                          Growth
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </motion.div>

                {/* Description */}
                <motion.div variants={itemVariants}>
                  <TextField isRequired name="description">
                    <Label>Description</Label>

                    <TextArea
                      aria-label="Startup Description"
                      className="min-h-32 w-full"
                      placeholder="Tell people about your startup, mission, and goals..."
                    />
                  </TextField>
                </motion.div>
              </Fieldset.Group>

              {/* Create Button */}
              <motion.div variants={itemVariants} className="mt-8">
                <Button
                  type="submit"
                  className="w-full rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium h-12 transition-all duration-300 hover:scale-[1.02]"
                >
                  Create Startup
                </Button>
              </motion.div>

              {/* Back Button */}
              <motion.div variants={itemVariants} className="mt-3">
                <Link href="/dashboard/founder/startups">
                  <Button
                    variant="secondary"
                    className="w-full rounded-full font-medium h-12 transition-all duration-300 hover:scale-[1.02]"
                  >
                    Back to Startup
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </Form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FounderstartupsPage;
