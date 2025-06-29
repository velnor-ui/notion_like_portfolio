"use client";

import { motion } from "motion/react";

const SectionHeader = ({
  title,
  description,
  badge,
  badgeText,
}: {
  title: string;
  description: string;
  badge?: React.ReactNode;
  badgeText?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="mx-auto mb-16 max-w-6xl text-start"
    >
      {badge && (
        <div className="mb-6 inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-black/10 p-3 backdrop-blur-sm dark:border-neutral-800 dark:bg-white/10">
          {badge}
          {badgeText && (
            <span className="text-xs font-medium">{badgeText}</span>
          )}
        </div>
      )}
      <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
        {title}
      </h2>
      <p className="max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-base">
        {description}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
