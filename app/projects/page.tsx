"use client";

import { IconChevronDown, IconSearch } from "@tabler/icons-react";
import { motion } from "motion/react";
import React, { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import Container from "@/components/Container";
import { projects } from "@/constants/projects";

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
        className="focus:ring-opacity-10 w-full rounded-lg border px-4 py-2 text-left transition-all duration-200 hover:border-neutral-300 focus:ring-2 focus:ring-black focus:outline-hidden md:w-48"
      >
        <div className="flex items-center justify-between">
          <span className={value === "All" ? "text-neutral-500" : "text-black"}>
            {value || placeholder}
          </span>
          <IconChevronDown className="h-4 w-4" />
        </div>
      </button>

      {isOpen && (
        <div className="bg-primary-foreground absolute top-full right-0 left-0 z-10 mt-2 rounded-lg border shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onValueChange(option);
                setIsOpen(false);
              }}
              className="hover:bg-primary/10 w-full px-4 py-2 text-left transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
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

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags?.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <Container>
      {/* Header */}
      <SectionHeader
        title="My Projects"
        description="A curated collection of my work, experiments, and digital creations"
      />

      {/* Filters */}
      <div className="mb-12 flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <div className="absolute top-1/2 left-4 -translate-y-1/2 transform text-neutral-400">
            <IconSearch />
          </div>
          <input
            type="text"
            placeholder="Search projects, technologies, or descriptions..."
            className="focus:ring-primary focus:ring-opacity-10 w-full rounded-xl border py-3 pr-4 pl-12 placeholder-neutral-400 transition-all duration-200 focus:border-transparent focus:ring-2 focus:outline-hidden"
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
    </Container>
  );
}
