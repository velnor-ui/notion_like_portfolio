"use client";

import { motion } from "motion/react";
import React from "react";
import { useState } from "react";
import ArrowButton from "./ArrowButton";
import { featuredProjects } from "@/constants/projects";
import {
  IconArrowRight,
  IconBrandGithub,
  IconCalendar,
  IconDeviceImacBolt,
  IconExternalLink,
  IconStar,
} from "@tabler/icons-react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Link from "next/link";
import Tags from "./Tags";
import Container from "./Container";

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>(
    {},
  );

  const handleImageLoad = (projectId: number) => {
    setImageLoaded((prev) => ({ ...prev, [projectId]: true }));
  };

  const getStatusIndicator = (status: string) => {
    return status === "Live" ? "●" : "○";
  };

  return (
    <Container>
      {/* Header Section */}
      <SectionHeader
        badge={<IconDeviceImacBolt className="mr-2 h-5 w-5" />}
        badgeText="Featured Work"
        title="Selected Projects"
        description="A curated collection of my recent work, showcasing innovative solutions and technical expertise"
      />

      {/* Projects Grid */}
      <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative mx-auto h-full w-full max-w-md"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div
              className={`h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-neutral-900/10 dark:border-neutral-800 dark:bg-neutral-950 ${
                hoveredProject === project.id
                  ? "-translate-y-2 transform border-neutral-400 dark:border-neutral-600"
                  : "hover:border-neutral-400"
              }`}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                {/* Loading Skeleton */}
                <div
                  className={`absolute inset-0 ${imageLoaded[project.id] ? "hidden" : "block"}`}
                >
                  <div className="relative h-full w-full overflow-hidden bg-neutral-200 dark:bg-neutral-900">
                    <div
                      className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent"
                      style={{
                        animation: "shimmer 2s infinite",
                      }}
                    />
                  </div>
                </div>

                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  className={`h-full w-full object-cover transition-all duration-700 ${
                    imageLoaded[project.id]
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0"
                  } ${hoveredProject === project.id ? "scale-110" : ""}`}
                  onLoadingComplete={() => handleImageLoad(project.id)}
                  loading="lazy"
                />

                {/* Status & Featured Indicators */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div
                    className={`bg-primary-foreground/80 flex items-center rounded-lg border px-3 py-1 backdrop-blur-xs transition-all duration-300 ${
                      hoveredProject === project.id
                        ? "border-neutral-900 bg-white dark:bg-neutral-800"
                        : "border-neutral-200 dark:border-neutral-800"
                    }`}
                  >
                    <span
                      className={`mr-2 text-xs transition-colors duration-300 ${
                        project.status === "Live"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {getStatusIndicator(project.status)}
                    </span>
                    <span className="text-xs font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>

                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <div
                      className={`flex items-center rounded-lg bg-neutral-900 px-3 py-1 text-xs font-medium text-white transition-all duration-200 ease-in-out ${
                        hoveredProject === project.id ? "scale-110" : ""
                      }`}
                    >
                      <IconStar className="mr-1 h-3 w-3" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Hover Action Overlay */}
                <div
                  className={`absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-xs transition-all duration-500 ${
                    hoveredProject === project.id
                      ? "opacity-100"
                      : "pointer-events-none opacity-0"
                  }`}
                >
                  <div className="flex space-x-4">
                    <motion.button
                      className={`rounded-full bg-white p-4 transition-all duration-300 hover:scale-110 hover:bg-neutral-100 active:scale-95 dark:bg-black`}
                      whileTap={{ scale: 0.95 }}
                      title="View Source Code"
                    >
                      <Link
                        href={project?.githubUrl ?? ""}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconBrandGithub className="h-5 w-5" />
                      </Link>
                    </motion.button>
                    <motion.button
                      className={`rounded-full bg-white p-4 transition-all duration-300 hover:scale-110 hover:bg-neutral-100 active:scale-95 dark:bg-black`}
                      whileTap={{ scale: 0.95 }}
                      title="View Live Demo"
                    >
                      <Link
                        href={project?.liveUrl ?? ""}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconExternalLink className="h-5 w-5" />
                      </Link>
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <Link href={`/projects/${project.id}`}>
                <div className="h-full p-4">
                  {/* Header with Year */}
                  <div className="mb-4 flex items-start justify-between">
                    <motion.h3 className="text-xl font-bold transition-all duration-300">
                      {project.title}
                    </motion.h3>
                    <div className="bg-primary/10 ml-4 flex items-center rounded-md px-2 py-1 text-sm text-neutral-500 backdrop-blur-xs">
                      <IconCalendar className="mr-1 h-3 w-3" />
                      {project.year}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-neutral-600">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <Tags tags={project.tags} />
                  {/* Stats & Action */}
                  <div className="mt-2 flex items-center justify-end border-t border-neutral-100 p-2 dark:border-neutral-800">
                    View Details
                    <IconArrowRight className="ml-2 h-4 w-4 transition-all duration-300 ease-in-out group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="mb-20 flex items-center justify-center">
        <ArrowButton link="/projects">View All Projects</ArrowButton>
      </div>

      {/* CTA Section */}
      <motion.div
        className="rounded-2xl border border-neutral-200 bg-neutral-100 p-12 text-center dark:border-neutral-900 dark:bg-neutral-950"
        style={{
          animation: "fadeInUp 0.6s ease-out 0.6s both",
        }}
      >
        <div className="mx-auto max-w-2xl">
          <h3 className="mb-4 font-bold text-neutral-900 md:text-2xl dark:text-neutral-100">
            Ready to start your project?
          </h3>
          <p className="mb-8 text-sm leading-relaxed text-neutral-600 md:text-base dark:text-neutral-400">
            I&apos;m always excited to collaborate on innovative projects and
            bring creative ideas to life. Let&apos;s discuss how we can work
            together to create something exceptional.
          </p>
          <div className="flex w-full flex-col justify-center gap-4 sm:flex-row">
            <ArrowButton link="/contact">Start a Project</ArrowButton>
            <ArrowButton link="/contact">View Resume</ArrowButton>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default FeaturedProjects;
