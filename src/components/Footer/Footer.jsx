"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Image from "next/image";
import logo from "@/Assets/icon.png";
import { Inter, Space_Grotesk } from "next/font/google";
const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15,
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
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
export default function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
    >
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo Section */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <Link
              href="/"
              className={`flex items-center justify-center md:justify-start gap-3 ${spaceGrotesk.className}`}
            >
              <Image
                src={logo}
                alt="StartupForge"
                height={100}
                width={100}
                className="h-12 w-auto"
              />

              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  StartupForge
                </h2>

                <p
                  className={`text-sm text-slate-500 dark:text-slate-400 ${inter.className}`}
                >
                  Build teams. Launch ideas.
                </p>
              </div>
            </Link>

            <p
              className={`mt-4 text-slate-600 dark:text-slate-400 leading-relaxed ${inter.className}`}
            >
              Connecting founders with talented collaborators to transform
              innovative startup ideas into reality.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {[
                "Home",
                "Browse Startups",
                "Browse Opportunities",
                "Dashboard",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href="/"
                    className={`text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300 ${inter.className}`}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
              Contact
            </h3>

            <div className="space-y-4">
              <div className="flex justify-center md:justify-start gap-3 items-start">
                <FaEnvelope className="text-orange-500 mt-1" />
                <span
                  className={`text-slate-600 dark:text-slate-400 ${inter.className}`}
                >
                  support@startupforge.com
                </span>
              </div>

              <div className="flex justify-center md:justify-start gap-3 items-start">
                <FaMapMarkerAlt className="text-orange-500 mt-1" />
                <span
                  className={`text-slate-600 dark:text-slate-400 ${inter.className}`}
                >
                  Chattogram, Bangladesh
                </span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
              Follow Us
            </h3>

            <div className="flex justify-center md:justify-start gap-4">
              {[
                {
                  icon: <FaFacebook />,
                  href: "/",
                },
                {
                  icon: <FaGithub />,
                  href: "/",
                },
                {
                  icon: <FaLinkedin />,
                  href: "/",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{
                    scale: 1.15,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="h-11 w-11 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-500 shadow-sm transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <p
              className={`mt-4 text-slate-600 dark:text-slate-400 ${inter.className}`}
            >
              Join our growing startup community and stay updated.
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} StartupForge.{" "}
            <span className={`${inter.className}`}>All rights reserved.</span>
          </p>

          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/privacy"
              className={`text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-500 ${inter.className}`}
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className={`text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-500 ${inter.className}`}
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
