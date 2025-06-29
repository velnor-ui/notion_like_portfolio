"use client";

import { motion } from "motion/react";
import React from "react";
import { Badge } from "./ui/badge";

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
      className="cursor-default my-0.5"
    >
      <Badge
        variant="outline"
      >
        {tag}
      </Badge>
    </motion.div>
      ))}
    </div>
  );
};

export default Tags;
