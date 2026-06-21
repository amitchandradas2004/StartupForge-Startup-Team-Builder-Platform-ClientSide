"use client";
import { createStartup } from "@/lib/actions/startup";
import { authClient } from "@/lib/auth-client";
import { imageUpload } from "@/lib/imageUpload";
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
      userEmail: userEmail,
    };

    const res = await createStartup(startupData);
    if (res.insertedId) {
      toast.success(`StartUp created successfully`);
      window.location.reload();
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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-4 md:p-6 border my-10 mx-auto rounded-2xl h-full"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Create Startup
        </h1>

        <p className="text-slate-500 mt-1">
          Add your startup details and start finding collaborators.
        </p>
      </motion.div>

      {/* Form Content */}
      <motion.div variants={itemVariants} className="p-3 md:p-5">
        <Form onSubmit={onSubmit} className="space-y-6">
          <Fieldset.Group className="space-y-5">
            {/* Startup Name */}
            <motion.div variants={itemVariants}>
              <TextField
                name="startUpName"
                className="flex flex-col md:flex-row items-center"
              >
                <Label isRequired className="w-35">
                  Startup Name
                </Label>

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
              className="flex flex-col md:flex-row items-center gap-5"
            >
              <Label isRequired>Logo</Label>

              <div className="h-10 w-full border-2 border-slate-200 rounded-2xl p-2 text-center transition">
                <label htmlFor="image-upload" className="cursor-pointer block">
                  <p className="font-medium">Click here to upload logo</p>
                </label>

                <input
                  id="image-upload"
                  name="logo"
                  type="file"
                  className="hidden"
                />
              </div>
            </motion.div>

            {/* Industry */}
            <motion.div variants={itemVariants}>
              <Select name="industry" isRequired placeholder="Select Industry">
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
                name="funding-stage"
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
          </Fieldset.Group>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <TextField name="description">
              <Label isRequired>Description</Label>

              <TextArea
                aria-label="Startup Description"
                className="min-h-30 w-full"
                placeholder="Tell people about your startup, mission, and goals..."
              />
            </TextField>
          </motion.div>

          {/* Button */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="submit"
              className="w-full rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium h-12"
            >
              Create Startup
            </Button>
          </motion.div>
        </Form>
      </motion.div>
    </motion.div>
  );
};

export default FounderstartupsPage;
