"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Form, InputGroup, Label, TextField } from "@heroui/react";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

import { FcGoogle } from "react-icons/fc";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { motion } from "framer-motion";

import { AiOutlineMail } from "react-icons/ai";
import { FaLock } from "react-icons/fa6";
import { IoMdLogIn } from "react-icons/io";
import { redirect } from "next/navigation";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    if (data) {
      toast.success(`${data?.user?.name} logged in successfully`);
      redirect("/");
    }

    if (error) {
      toast.error(error.message);
    }
  };
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="min-h-screen flex items-center justify-center px-4
      bg-linear-to-br from-slate-100 via-indigo-100 to-purple-200
      dark:from-slate-950 dark:via-slate-900 dark:to-black py-20"
    >
      {/* CARD */}
      <motion.div
        variants={fadeUp}
        className="w-full max-w-md p-6 rounded-2xl shadow-2xl
        bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl
        border border-white/30 dark:border-slate-700"
      >
        {/* TITLE */}
        <motion.h1 variants={fadeUp} className="text-2xl font-bold text-center">
          Login to your account
        </motion.h1>

        <motion.p variants={fadeUp} className="text-sm text-center mb-6">
          Welcome back to StartUp Forge
        </motion.p>

        <Form onSubmit={onSubmit}>
          <motion.div variants={container} className="space-y-4">
            {/* EMAIL */}
            <motion.div variants={fadeUp}>
              <TextField name="email" type="email" isRequired>
                <Label>Email</Label>
                <InputGroup className="rounded-full overflow-hidden">
                  <InputGroup.Prefix>
                    <AiOutlineMail size={14} />
                  </InputGroup.Prefix>
                  <InputGroup.Input placeholder="Enter email" />
                </InputGroup>
              </TextField>
            </motion.div>

            {/* PASSWORD */}
            <motion.div variants={fadeUp}>
              <TextField name="password" type="password" isRequired>
                <Label>Password</Label>

                <InputGroup className="rounded-full overflow-hidden">
                  <InputGroup.Prefix>
                    <FaLock size={12} />
                  </InputGroup.Prefix>

                  <InputGroup.Input
                    type={isVisible ? "text" : "password"}
                    placeholder="Enter password"
                  />

                  <InputGroup.Suffix
                    className="cursor-pointer"
                    onClick={() => setIsVisible(!isVisible)}
                  >
                    {isVisible ? <EyeSlash /> : <Eye />}
                  </InputGroup.Suffix>
                </InputGroup>
              </TextField>
            </motion.div>

            {/* BUTTON */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button type="submit" className="w-full bg-indigo-600 mt-4">
                <IoMdLogIn />
                Login
              </Button>
            </motion.div>
          </motion.div>
        </Form>

        {/* OR DIVIDER (MATCH SIGNUP STYLE) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-2 text-xs text-gray-500 my-4">
            <motion.div
              className="flex-1 h-px bg-gray-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />

            <span className="whitespace-nowrap">OR CONTINUE WITH</span>

            <motion.div
              className="flex-1 h-px bg-gray-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              onClick={handleGoogleSignIn}
              className="w-full rounded-full border hover:bg-indigo-600 transition"
            >
              <FcGoogle size={20} />
              Continue with Google
            </Button>
          </motion.div>
        </motion.div>

        {/* FOOTER */}
        <motion.p variants={fadeUp} className="text-center text-sm mt-5">
          Do not have an account?{" "}
          <Link href="/signUp" className="text-red-500">
            Register
          </Link>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;
