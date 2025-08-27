type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "GraphQL",
      "REST API",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
      "AWS",
      "Vercel",
      "Jest",
      "Testing Library",
    ],
  },
];
