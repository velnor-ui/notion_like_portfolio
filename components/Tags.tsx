"use client";

import { motion } from "motion/react";
import React from "react";

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <motion.div
          key={tag}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-black/10 px-2 py-px text-xs font-bold backdrop-blur-sm dark:border-neutral-800 dark:bg-white/10"
        >
          {tag}
        </motion.div>
      ))}
    </div>
  );
};

export default Tags;
