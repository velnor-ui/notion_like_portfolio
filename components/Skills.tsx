import { skills, technologies } from "@/lib/constants";
import { motion } from "motion/react";
import React from "react";
import { Icon } from "./icon";

const Skills = () => {
  return (
    <section className="container">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold">Skills & Expertise</h2>
          <p className="text-muted-foreground mt-2">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="bg-muted/50 p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    className={`p-3 rounded-lg bg-background ${skill.color} group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: 10 }}
                  >
                    <Icon name={skill.icon} className="w-6 h-6" />
                  </motion.div>
                  <span className="font-medium">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
                className="flex flex-col items-center justify-center p-4 border rounded-lg hover:border-primary/50 transition-colors group"
              >
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${tech.color} group-hover:scale-110 transition-transform`}
                  whileHover={{ rotate: 10 }}
                >
                  <Icon name={tech.icon} className="w-6 h-6" />
                </motion.div>
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
