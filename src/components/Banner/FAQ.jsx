"use client";

import { Accordion } from "@heroui/react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaUsers,
  FaBuilding,
  FaHandshake,
  FaUserPlus,
  FaBriefcase,
  FaGift,
  FaEdit,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

const faqData = [
  {
    id: 1,
    icon: FaRocket,
    question: "What is StartupForge?",
    answer:
      "StartupForge is a collaborative platform that connects founders, entrepreneurs, developers, designers, marketers, and other professionals to build and grow startups together.",
  },
  {
    id: 2,
    icon: FaUsers,
    question: "Who can use StartupForge?",
    answer:
      "Anyone interested in startups can join StartupForge, including founders, students, developers, designers, marketers, business professionals, and aspiring entrepreneurs.",
  },
  {
    id: 3,
    icon: FaBuilding,
    question: "How do I create a startup project?",
    answer:
      "After signing in, you can create a startup by providing details such as the startup name, description, goals, and required team roles.",
  },
  {
    id: 4,
    icon: FaHandshake,
    question: "How can I join a startup team?",
    answer:
      "Browse available opportunities, review startup requirements, and apply for roles that match your skills and interests.",
  },
  {
    id: 5,
    icon: FaUserPlus,
    question: "Can I recruit team members for my startup?",
    answer:
      "Yes. Startup founders can post opportunities, review applications, and recruit talented individuals.",
  },
  {
    id: 6,
    icon: FaBriefcase,
    question: "What types of opportunities can be posted?",
    answer:
      "Developers, designers, marketers, product managers, content creators, business analysts, sales specialists, and many more.",
  },
  {
    id: 7,
    icon: FaGift,
    question: "Is StartupForge free to use?",
    answer:
      "Yes. Users can create accounts, browse startups, and collaborate for free.",
  },
  {
    id: 8,
    icon: FaEdit,
    question: "Can I edit my startup details later?",
    answer:
      "Absolutely. You can update startup information and opportunities anytime from your dashboard.",
  },
  {
    id: 9,
    icon: FaChartLine,
    question: "How does StartupForge help startups grow?",
    answer:
      "StartupForge helps founders discover collaborators, recruit talent, and build stronger teams.",
  },
  {
    id: 10,
    icon: FaShieldAlt,
    question: "Is my personal information secure?",
    answer:
      "Yes. We implement modern security practices to protect your account and personal information.",
  },
];

export default function FAQ() {
  return (
    <section className="container mx-auto px-4 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Find answers to the most common questions about StartupForge. Learn
          how to create startups, recruit team members, join exciting projects,
          and collaborate with talented innovators.
        </p>
      </motion.div>

      {/* FAQ */}
      <Accordion className="max-w-4xl mx-auto space-y-4">
        {faqData.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
            >
              <Accordion.Item>
                <div className="rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden">
                  <Accordion.Heading>
                    <Accordion.Trigger>
                      <div className="flex items-center gap-4 flex-1 py-2 px-5">
                        <div className="flex items-center justify-center h-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                          <Icon size={18} />
                        </div>

                        <span className="font-semibold text-left text-slate-800 dark:text-white">
                          {item.question}
                        </span>
                      </div>

                      <div className="pr-6 text-slate-500 dark:text-slate-400">
                        <Accordion.Indicator />
                      </div>
                    </Accordion.Trigger>
                  </Accordion.Heading>

                  <Accordion.Panel>
                    <Accordion.Body>
                      <div className="px-2 pb-2 ml-5">
                        <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                          {item.answer}
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Panel>
                </div>
              </Accordion.Item>
            </motion.div>
          );
        })}
      </Accordion>
    </section>
  );
}
