"use client";

import { motion } from "motion/react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
import { skillCategories } from "@/lib/constants";

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Container>
      <SectionHeader
        title="Skills"
        description="Technologies I'm proficient in"
        badge={<span className="text-xs font-semibold"></span>}
        badgeText="Skills"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            className="space-y-4 rounded-2xl border p-3 md:p-4"
            key={category.title}
          >
            <h2 className="text-lg font-semibold">{category.title}</h2>
            <p>My {category.title.toLowerCase()} skills and technologies</p>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {category.skills.map((skill) => (
                <motion.div
                  className="bg-primary/10 rounded-md border px-2 py-1 text-xs font-semibold tracking-tight backdrop-blur-xl"
                  key={skill}
                  variants={item}
                >
                  <span>{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </Container>
  );
}
