"use client";

import React from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { Button, Tooltip } from "@heroui/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const Pricing = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleCheckout = (plan) => {
    if (!plan.priceId) {
      toast.success("Free plan selected");
      return;
    }

    toast.success(`${plan.name} plan selected`);
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white"
        >
          Simple, Transparent Pricing
        </motion.h2>

        <p
          className={`mt-4 text-slate-600 dark:text-slate-300 ${inter.className}`}
        >
          Choose a monthly plan that fits your startup journey
        </p>
      </div>

      {/* Pricing Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* Free Plan */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ type: "spring", stiffness: 180 }}
          className="rounded-2xl p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg"
        >
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            Free
          </h3>

          <div className="mt-5 flex items-end gap-1">
            <span className="text-4xl font-extrabold text-slate-900 dark:text-white">
              $0
            </span>
            <span className="text-sm text-slate-500">/mo</span>
          </div>

          <p
            className={`mt-3 text-sm text-slate-600 dark:text-slate-400 ${inter.className}`}
          >
            Perfect for exploring StartupForge and joining the ecosystem.
          </p>

          <ul
            className={`mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300 ${inter.className}`}
          >
            <li>✔ Browse startup ideas</li>
            <li>✔ Browse opportunities</li>
            <li>✔ Basic profile access</li>
            <li>✔ Limited collaboration access</li>
          </ul>

          <button
            onClick={() =>
              handleCheckout({
                name: "Free",
                priceId: null,
              })
            }
            className="mt-8 w-full py-3 rounded-xl font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition cursor-pointer"
          >
            Get Started
          </button>
        </motion.div>

        {/* Premium Plan */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ type: "spring", stiffness: 180 }}
          className="relative rounded-2xl p-8 bg-indigo-600 text-white border border-indigo-400 shadow-lg shadow-indigo-500/30"
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs rounded-full bg-white text-indigo-600 font-semibold shadow"
          >
            Most Popular
          </motion.div>

          <h3 className="text-xl font-semibold">Premium</h3>

          <div className="mt-5 flex items-end gap-1">
            <span className="text-4xl font-extrabold">$12</span>
            <span className="text-sm opacity-80">/mo</span>
          </div>

          <p className={`mt-3 text-sm opacity-90 ${inter.className}`}>
            For active builders and early-stage founders.
          </p>

          <ul className={`mt-6 space-y-3 text-sm ${inter.className}`}>
            <li>✔ Everything in Free</li>
            <li>✔ Post startup ideas</li>
            <li>✔ Co-founder matching</li>
            <li>✔ Unlimited collaborations</li>
            <li>✔ Priority visibility</li>
          </ul>

          {!user ? (
            <Link href={"/login"}>
              <Button className="mt-8 w-full py-3 rounded-xl font-medium bg-white text-indigo-600 hover:bg-slate-100 transition cursor-pointer">
                Please Login
              </Button>
            </Link>
          ) : (
            <form action={"/api/subscription"} method="POST">
              {" "}
              <button
                type="submit"
                className="mt-8 w-full py-4 rounded-xl font-medium bg-white text-indigo-600 hover:bg-slate-100 transition cursor-pointer"
              >
                Get Pro
              </button>
            </form>
          )}
        </motion.div>

        {/* Enterprise Plan */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ type: "spring", stiffness: 180 }}
          className="rounded-2xl p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg"
        >
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            Enterprise
          </h3>

          <div className="mt-5 flex items-end gap-1">
            <span className="text-4xl font-extrabold text-slate-900 dark:text-white">
              $29
            </span>
            <span className="text-sm text-slate-500">/mo</span>
          </div>

          <p
            className={`mt-3 text-sm text-slate-600 dark:text-slate-400 ${inter.className}`}
          >
            For serious startups scaling fast.
          </p>

          <ul
            className={`mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300 ${inter.className}`}
          >
            <li>✔ Everything in Premium</li>
            <li>✔ Investor visibility boost</li>
            <li>✔ Advanced analytics</li>
            <li>✔ Featured listings</li>
            <li>✔ Priority support</li>
          </ul>

          <div className="flex items-center gap-4">
            <Tooltip delay={0}>
              <Button
                variant="secondary"
                className="mt-8 w-full py-5 rounded-xl font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition cursor-pointer"
              >
                Not Available
              </Button>
              <Tooltip.Content>
                <p className="p-2 mb-2 text-xs">
                  Purchasing this plan is currently unavailable.
                </p>
              </Tooltip.Content>
            </Tooltip>
            <Tooltip delay={0}>
              <Tooltip.Content>
                <p>More information</p>
              </Tooltip.Content>
            </Tooltip>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Pricing;
