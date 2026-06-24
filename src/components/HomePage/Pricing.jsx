"use client";

import React from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import toast from "react-hot-toast";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plans = [
  {
    name: "Free",
    price: 0,
    desc: "Perfect for exploring StartupForge and joining the ecosystem",
    features: [
      "Browse startup ideas",
      "Browse opportunities",
      "Basic profile access",
      "Limited collaboration access",
    ],
    priceId: null,
  },
  {
    name: "Premium",
    price: 12,
    desc: "For active builders and early-stage founders",
    features: [
      "Everything is Free",
      "Post startup ideas",
      "Co-founder matching",
      "Unlimited collaborations",
      "Priority visibility",
    ],
    priceId: "price_pro_123",
    popular: true,
  },
  {
    name: "Enterprice",
    price: 29,
    desc: "For serious industry level startups scaling fast",
    features: [
      "Everything in Enterprice",
      "Investor visibility boost",
      "Advanced analytics",
      "Featured listings",
      "Priority support",
    ],
    priceId: "price_premium_456",
  },
];

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
  const handleCheckout = (plan) => {
    if (!plan.priceId) {
      toast.success("Free plan is already selected.");
      return;
    }

    toast.success("Stripe Checkout (monthly):", {
      priceId: plan.priceId,
      billing: "monthly",
    });
  };

  return (
    <section className="w-full py-20 bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="container mx-auto px-6 text-center mb-12">
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

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: "spring", stiffness: 180 }}
            className={`relative rounded-2xl p-8 
            backdrop-blur-xl border shadow-lg
            transition-all duration-300 ease-in-out
            ${
              plan.popular
                ? "bg-indigo-600 text-white border-indigo-400 shadow-indigo-500/30"
                : "bg-white/10 dark:bg-white/5 border-slate-200/20 dark:border-white/10"
            }`}
          >
            {/* Badge */}
            {plan.popular && (
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs rounded-full bg-white text-indigo-600 font-semibold shadow"
              >
                Most Popular
              </motion.div>
            )}

            {/* Plan Name */}
            <h3 className="text-xl font-semibold">{plan.name}</h3>

            {/* Price */}
            <div className="mt-5 flex items-end gap-1">
              <span className="text-4xl font-extrabold">${plan.price}</span>
              <span className="text-sm opacity-70">/mo</span>
            </div>

            {/* Description */}
            <p className={`mt-3 text-sm opacity-80 ${inter.className}`}>
              {plan.desc}
            </p>

            {/* Features */}
            <ul className={`mt-6 space-y-2 text-sm ${inter.className}`}>
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  ✔ {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={() => handleCheckout(plan)}
              className={`mt-8 w-full py-3 rounded-xl font-medium transition-all duration-300
           ${
             plan.popular
               ? "bg-white text-indigo-600 hover:bg-gray-100"
               : "bg-indigo-600 text-white hover:bg-indigo-700"
           }`}
            >
              {plan.name === "Free"
                ? "Get Started"
                : plan.popular
                  ? "Get Pro"
                  : "Get Premium"}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Pricing;
