import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArrowButton from "./ArrowButton";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import Tags from "./Tags";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.3,
        delay: index * 0.1,
        ease: "easeInOut",
      }}
      className="group mx-auto w-full max-w-md"
      key={project.id}
    >
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-neutral-800 dark:bg-black">
        <Link
          href={`/projects/${project.id}`}
          className="relative h-48 overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900"
        >
          <motion.div className="absolute inset-0 z-20 bg-primary/10 opacity-0 blur-md transition-all duration-300 ease-in-out group-hover:opacity-100" />
          <div className="absolute right-4 top-4 z-30">
            <StatusBadge status={project.status} />
          </div>
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </Link>

        <div className="flex flex-1 flex-col">
          <Link
            href={`/projects/${project.id}`}
            className="flex flex-1 flex-col px-4 pt-4"
          >
            <h3 className="mb-3 text-lg font-bold transition-colors duration-200 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 sm:text-xl">
              {project.title}
            </h3>
            <p className="mb-6 flex-1 leading-relaxed text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>
          </Link>

          {/* Tags */}
          <Link
            href={`/projects/${project.id}`}
            className="mb-6 flex flex-wrap gap-2 px-4 transition-all duration-200 group-hover:translate-x-2"
          >
            <Tags tags={project.tags} />
          </Link>

          {/* Actions */}
          <div className="flex items-center justify-between border-t p-4">
            <ArrowButton link={`/projects/${project.id}`} variant="ghost">
              View Details
            </ArrowButton>
            <div className="flex gap-2">
              <Link
                href={project.github}
                className="flex items-center justify-center rounded-lg p-2 text-neutral-400 transition-all duration-200 hover:scale-110 hover:bg-primary/20 hover:text-primary"
              >
                <IconBrandGithub className="h-4 w-4" />
              </Link>
              <Link
                href={project.live}
                className="flex items-center justify-center rounded-lg p-2 text-neutral-400 transition-all duration-200 hover:scale-110 hover:bg-primary/20 hover:text-primary"
              >
                <IconExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-100 text-green-800 border-green-200";
      case "In Progress":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Concept":
        return "bg-neutral-100 text-neutral-800";
      default:
        return "bg-neutral-100 text-neutral-800";
    }
  };

  return (
    <div
      className={`rounded-full border px-2 py-px text-xs font-medium ${getStatusColor(status)}`}
    >
      {status}
    </div>
  );
};
