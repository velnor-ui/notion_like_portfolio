"use client";

import Link from "next/link";
import { motion, Variants } from "motion/react";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import {
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconArrowUp,
} from "@tabler/icons-react";
import GithubIcon from "./github-icon";
const socialLinks = [
  { href: "https://github.com", icon: GithubIcon, label: "GitHub" },
  { href: "https://linkedin.com", icon: IconBrandLinkedin, label: "LinkedIn" },
  { href: "https://x.com", icon: IconBrandX, label: "Twitter" },
  { href: "mailto:hello@example.com", icon: IconMail, label: "Email" },
];

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const iconHoverVariants: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.15,
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const linkHoverVariants: Variants = {
  rest: { x: 0 },
  hover: {
    x: 4,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      className="relative border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >

      <div className="mx-auto max-w-5xl px-2 sm:px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              Crafting digital experiences with passion and precision. A
              showcase of innovation and creativity.
            </p>
            <motion.div
              className="h-px w-16 bg-gradient-to-r from-neutral-900 to-transparent dark:from-neutral-100"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Navigation Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              Navigation
            </h3>
            <nav>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={linkHoverVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <Link
                      href={link.href}
                      className="group inline-flex items-center text-sm text-neutral-600 transition-colors duration-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                    >
                      <span className="relative">
                        {link.label}
                        <motion.span
                          className="absolute -bottom-0.5 left-0 h-px bg-neutral-900 dark:bg-neutral-100"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.2 }}
                        />
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Social Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={social.href}
                    variants={iconHoverVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={social.href}
                      target={
                        social.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        social.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-600 transition-all duration-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-900"
                      aria-label={social.label}
                    >
                      <Icon size={16} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 text-center dark:border-neutral-800 md:flex-row md:text-left"
        >
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>

          <motion.p
            className="text-xs text-neutral-400 dark:text-neutral-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Made with ❤️ and lots of ☕
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white/90 text-neutral-600 shadow-lg backdrop-blur-sm transition-all duration-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white dark:border-neutral-800 dark:bg-neutral-900/90 dark:text-neutral-400 dark:hover:border-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          y: showScrollTop ? 0 : 20,
          pointerEvents: showScrollTop ? "auto" : "none",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        aria-label="Scroll to top"
      >
        <IconArrowUp size={16} />
      </motion.button>
    </motion.footer>
  );
}
