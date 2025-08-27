"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const SectionHeader = ({
  title,
  description,
  badge,
  badgeText,
  className,
}: {
  title: string;
  description: string;
  badge?: React.ReactNode;
  badgeText?: string;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={cn("mx-auto mb-4 max-w-6xl text-start", className)}
    >
      {badge && (
        <div className="mb-6 inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-black/10 px-3 py-2 backdrop-blur-xs dark:border-neutral-800 dark:bg-white/10">
          {badge}
          {badgeText && (
            <span className="text-xs font-medium">{badgeText}</span>
          )}
        </div>
      )}
      <h2 className="mb-4 text-2xl font-semibold md:text-3xl">{title}</h2>
      <p className="max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-base dark:text-neutral-400">
        {description}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
