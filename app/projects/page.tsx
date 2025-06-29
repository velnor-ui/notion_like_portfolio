"use client";

import { allProjects } from "@/constants/projects";
import { IconChevronDown, IconSearch } from "@tabler/icons-react";
import { motion } from "motion/react";
import React, { useState } from "react";
import PageSEO from "@/components/PageSEO";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";

const categories = ["All", "Frontend", "Full Stack", "Mobile", "Backend"];

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
          <IconChevronDown className="h-4 w-4" />
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
    <>
      <PageSEO
        title="Projects | Developer Portfolio"
        description="A showcase of my featured and recent projects."
        ogImage="/og-image.png"
        canonical="https://yourdomain.com/projects"
        twitterCard="summary_large_image"
        twitterTitle="Projects | Developer Portfolio"
        twitterDescription="A showcase of my featured and recent projects."
        twitterImage="/og-image.png"
      />
      <main className="min-h-screen">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Header */}
          <SectionHeader
            title="My Projects"
            description="A curated collection of my work, experiments, and digital creations"
          />

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
            <div className="grid grid-cols-1 gap-8 text-xs sm:text-sm md:grid-cols-2 md:text-base lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="py-20 text-center"
            >
              <p className="text-lg text-neutral-500">
                No projects found matching your criteria.
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                Try adjusting your search or filter options.
              </p>
            </motion.div>
          )}
        </div>
      </main>
    </>
  );
}
