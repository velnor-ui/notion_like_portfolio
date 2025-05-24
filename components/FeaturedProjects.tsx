"use client";

import { motion } from "motion/react";
import React from "react";
import { Calendar, ExternalLink, Github, Star, Zap } from "lucide-react";
import { useState } from "react";
import ArrowButton from "./ArrowButton";
import { featuredProjects } from "@/constants/projects";
import { IconBrandGithub } from "@tabler/icons-react";

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>(
    {},
  );
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  const handleImageLoad = (projectId: number) => {
    setImageLoaded((prev) => ({ ...prev, [projectId]: true }));
  };

  const handleButtonClick = (buttonId: string) => {
    setClickedButton(buttonId);
    setTimeout(() => setClickedButton(null), 200);
  };

  const getStatusIndicator = (status: string) => {
    return status === "Live" ? "●" : "○";
  };

  return (
    <div className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mb-16 text-center"
        >
          <div className="mb-6 inline-flex items-center justify-center rounded-full border border-neutral-200 p-3 dark:border-neutral-800">
            <Zap className="mr-2 h-5 w-5" />
            <span className="text-sm font-medium">Featured Work</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold">Selected Projects</h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            A curated collection of my recent work, showcasing innovative
            solutions and technical expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative h-full"
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
                    ? "-translate-y-2 transform border-neutral-900"
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
                        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        style={{
                          animation: "shimmer 2s infinite",
                        }}
                      />
                    </div>
                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className={`h-full w-full object-cover transition-all duration-700 ${
                      imageLoaded[project.id]
                        ? "scale-100 opacity-100"
                        : "scale-105 opacity-0"
                    } ${hoveredProject === project.id ? "scale-110" : ""}`}
                    onLoad={() => handleImageLoad(project.id)}
                  />

                  {/* Status & Featured Indicators */}
                  <div className="absolute left-4 top-4 flex items-center space-x-2">
                    <div
                      className={`flex items-center rounded-full border bg-primary-foreground/80 px-3 py-1 backdrop-blur-sm transition-all duration-300 ${
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
                    <div className="absolute right-4 top-4">
                      <div
                        className={`flex items-center rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-white transition-all duration-200 ease-in-out ${
                          hoveredProject === project.id ? "scale-110" : ""
                        }`}
                      >
                        <Star className="mr-1 h-3 w-3" />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Hover Action Overlay */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm transition-all duration-500 ${
                      hoveredProject === project.id
                        ? "opacity-100"
                        : "pointer-events-none opacity-0"
                    }`}
                  >
                    <div className="flex space-x-4">
                      <motion.button
                        onClick={() =>
                          handleButtonClick(`github-${project.id}`)
                        }
                        className={`rounded-full bg-white p-4 transition-all duration-300 ease-in-out hover:scale-110 hover:bg-neutral-100 active:scale-95 dark:bg-black ${
                          clickedButton === `github-${project.id}`
                            ? "scale-95"
                            : ""
                        }`}
                        whileTap={{ scale: 0.95 }}
                        title="View Source Code"
                      >
                        <IconBrandGithub className="h-5 w-5" />
                      </motion.button>
                      <motion.button
                        onClick={() => handleButtonClick(`live-${project.id}`)}
                        className={`rounded-full bg-white p-4 transition-all duration-300 hover:scale-110 hover:bg-neutral-100 active:scale-95 dark:bg-black ${
                          clickedButton === `live-${project.id}`
                            ? "scale-95"
                            : ""
                        }`}
                        whileTap={{ scale: 0.95 }}
                        title="View Live Demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  {/* Header with Year */}
                  <div className="mb-4 flex items-start justify-between">
                    <motion.h3 className="text-xl font-bold transition-all duration-300">
                      {project.title}
                    </motion.h3>
                    <div className="ml-4 flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm text-neutral-500 backdrop-blur-sm">
                      <Calendar className="mr-1 h-3 w-3" />
                      {project.year}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-neutral-600">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6 flex flex-wrap gap-2 dark:text-neutral-100">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="cursor-default rounded-full border bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Stats & Action */}
                  <div className="flex items-center justify-end border-t border-neutral-100 pt-6 dark:border-neutral-800">
                    <ArrowButton link={`/projects/${project.id}`}>
                      View Details
                    </ArrowButton>
                  </div>
                </div>
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
          className="rounded-2xl border border-neutral-200 bg-neutral-50 p-12 text-center dark:border-neutral-800 dark:bg-neutral-800"
          style={{
            animation: "fadeInUp 0.6s ease-out 0.6s both",
          }}
        >
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Ready to start your project?
            </h3>
            <p className="mb-8 leading-relaxed text-neutral-600 dark:text-neutral-400">
              I'm always excited to collaborate on innovative projects and bring
              creative ideas to life. Let's discuss how we can work together to
              create something exceptional.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <ArrowButton link="/contact">Start a Project</ArrowButton>
              <ArrowButton link="/contact">View Resume</ArrowButton>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
