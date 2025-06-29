import { skills, technologies } from "@/lib/constants";
import React from "react";
import { Icon } from "./icon";
import MotionDiv from "./MotionDiv";

const Skills = () => {
  return (
    <section className="container my-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold">Skills & Expertise</h2>
          <p className="mt-2 text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <MotionDiv
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="group rounded-lg border border-border/50 bg-muted/50 p-6 transition-colors hover:border-primary/50"
              >
                <div className="flex items-center space-x-4">
                  <MotionDiv
                    className={`rounded-lg bg-background p-3 ${skill.color} transition-transform group-hover:scale-110`}
                    whileHover={{ rotate: 10 }}
                  >
                    <Icon name={skill.icon} className="h-6 w-6" />
                  </MotionDiv>
                  <span className="font-medium">{skill.name}</span>
                </div>
              </MotionDiv>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
              <MotionDiv
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
                className="group flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:border-primary/50"
              >
                <MotionDiv
                  className={`mb-2 flex h-12 w-12 items-center justify-center rounded-full ${tech.color} transition-transform group-hover:scale-110`}
                  whileHover={{ rotate: 10 }}
                >
                  <Icon name={tech.icon} className="h-6 w-6" />
                </MotionDiv>
                <span className="text-sm font-medium">{tech.name}</span>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
