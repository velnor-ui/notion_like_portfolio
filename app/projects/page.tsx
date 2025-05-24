"use client";

import ArrowButton from "@/components/ArrowButton";
import GithubIcon from "@/components/github-icon";
import MotionDiv from "@/components/MotionDiv";
import { allProjects } from "@/constants/projects";
import {
  IconChevronDown,
  IconExternalLink,
  IconSearch,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const categories = ["All", "Frontend", "Full Stack", "Mobile", "Backend"];

// Status badge component
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
      className={`rounded-full border px-2 py-1 text-xs font-medium ${getStatusColor(status)}`}
    >
      {status}
    </div>
  );
};

// Custom Select component
const CustomSelect = ({
  value,
  onValueChange,
  options,
  placeholder,
}: {
  value: string;
  onValueChange: (value: string) => void;
  options: string[];
  placeholder: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full rounded-lg border px-4 py-2 text-left transition-all duration-200 hover:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-10 md:w-48"
      >
        <div className="flex items-center justify-between">
          <span className={value === "All" ? "text-neutral-500" : "text-black"}>
            {value || placeholder}
          </span>
          <IconChevronDown />
        </div>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-10 mt-2 rounded-lg border bg-primary-foreground shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onValueChange(option);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg hover:bg-primary/10"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
            My Projects
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-neutral-600">
            A curated collection of my work, experiments, and digital creations
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 transform text-neutral-400">
              <IconSearch />
            </div>
            <input
              type="text"
              placeholder="Search projects, technologies, or descriptions..."
              className="w-full rounded-xl border py-3 pl-12 pr-4 placeholder-neutral-400 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <CustomSelect
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            options={categories}
            placeholder="Select Category"
          />
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <MotionDiv 
              initial={{ opacity: 0 ,filter: "blur(10px)"}}
              animate={{ opacity: 1 ,filter: "blur(0px)"}}
              transition={{ duration: 0.3,delay: index * 0.1, ease: "easeInOut" }}
              className="group" key={project.id}>
                <div
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-neutral-800 dark:bg-black"
                >
                  {/* Project Image Placeholder */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900">
                    {hoveredProject === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute inset-0 z-20 bg-primary/40 blur-md"
                      />
                    )}
                    <div className="absolute z-30 right-4 top-4">
                      <StatusBadge status={project.status} />
                    </div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 text-xl font-bold transition-colors duration-200 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">
                      {project.title}
                    </h3>
                    <p className="mb-6 flex-1 leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mb-6 flex flex-wrap gap-2 transition-all duration-200 group-hover:translate-x-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tag}
                          className="cursor-default rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-all duration-200 hover:scale-105 hover:bg-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between border-t pt-4">
                      <ArrowButton
                        link={`/projects/${project.id}`}
                        variant="ghost"
                      >
                        View Details
                      </ArrowButton>
                      <div className="flex gap-2">
                        <Link
                          href={project.github}
                          className="rounded-lg p-2 text-neutral-400 transition-all duration-200 hover:scale-110 hover:bg-primary/20 hover:text-primary"
                        >
                          <GithubIcon />
                        </Link>
                        <Link
                          href={project.live}
                          className="rounded-lg p-2 text-neutral-400 transition-all duration-200 hover:scale-110 hover:bg-primary/20 hover:text-primary"
                        >
                          <IconExternalLink />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        ) : (
          <div
            className="py-20 text-center"
            style={{
              opacity: 0,
              animation: "fadeIn 0.8s ease-out 0.6s forwards",
            }}
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100">
              <IconSearch />
            </div>
            <p className="text-lg text-neutral-500">
              No projects found matching your criteria.
            </p>
            <p className="mt-2 text-sm text-neutral-400">
              Try adjusting your search or filter options.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
