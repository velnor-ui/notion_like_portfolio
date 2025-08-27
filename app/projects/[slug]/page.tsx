"use client";

import { useParams } from "next/navigation";
import { motion, useScroll, useTransform, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  CheckCircle,
  XCircle,
  User,
  Clock,
  Sparkle,
} from "lucide-react";
import { projects } from "@/constants/projects";
import { useRef } from "react";
import SectionHeader from "@/components/SectionHeader";
import Tags from "@/components/Tags";
import Container from "@/components/Container";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const slideInVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.id === slug);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  if (!project) {
    return (
      <motion.div
        className="container flex min-h-[60vh] items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="space-y-6 text-center" variants={itemVariants}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900"
          >
            <XCircle className="h-10 w-10 text-neutral-400 dark:text-neutral-600" />
          </motion.div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
              Project Not Found
            </h1>
            <p className="max-w-md text-neutral-600 dark:text-neutral-400">
              The project you&apos;re looking for doesn&apos;t exist or has been
              moved to a different location.
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              className="bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <Container ref={containerRef} className="relative text-sm md:text-base">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-4 md:space-y-6"
      >
        {/* Navigation */}
        <motion.div variants={slideInVariants}>
          <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
            <Button
              variant="ghost"
              asChild
              className="group -ml-4 text-xs text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 md:text-sm"
            >
              <Link href="/projects">
                <motion.div
                  whileHover={{ x: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </motion.div>
                Back to Projects
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Project Header */}
        <motion.section variants={itemVariants}>
          <motion.div
            style={{ y: headerY, opacity: headerOpacity }}
            className="space-y-2 md:space-y-6"
          >
            <SectionHeader
              title={project.title}
              description={project.description}
            />

            {/* Tags */}
            {project.tags && <Tags tags={project.tags} />}

            {/* Meta Information */}
            <motion.div
              className="flex flex-wrap items-center gap-2 text-[10px] text-neutral-500 dark:text-neutral-500 md:gap-6 md:text-xs lg:text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="flex items-center gap-2">
                <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-3 w-3 md:h-4 md:w-4" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3 w-3 md:h-4 md:w-4" />
                <span>5 min read</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Project Images */}
        <motion.section variants={fadeInScale}>
          <motion.div
            className="relative"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Carousel className="w-full">
              <CarouselContent className="p-2 md:p-4">
                {project.images?.map((image, index) => (
                  <CarouselItem key={index} className="p-4">
                    <motion.div
                      className="relative aspect-video overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="overflow-hidden rounded-2xl object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 border-neutral-200 bg-white/90 backdrop-blur-sm hover:bg-white dark:border-neutral-800 dark:bg-neutral-900/90 dark:hover:bg-neutral-900" />
              <CarouselNext className="right-4 border-neutral-200 bg-white/90 backdrop-blur-sm hover:bg-white dark:border-neutral-800 dark:bg-neutral-900/90 dark:hover:bg-neutral-900" />
            </Carousel>
          </motion.div>
        </motion.section>

        {/* Main Content */}
        <motion.section variants={itemVariants}>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Left Column - Main Content */}
            <div className="space-y-12 lg:col-span-2">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-lg font-bold md:text-xl lg:text-2xl">
                  Overview
                </h2>
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <p className="whitespace-pre-line leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {project.longDescription}
                  </p>
                </div>
              </motion.div>

              {/* Challenges & Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-lg font-bold md:text-xl lg:text-2xl">
                  Challenges & Solutions
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/* Challenges */}
                  {project.challenges && (
                    <motion.div
                      className="space-y-4"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="rounded-xl border border-red-200 bg-red-50/50 p-4 dark:border-red-900/30 dark:bg-red-950/20 md:p-6">
                        <h3 className="mb-4 flex items-center text-lg font-semibold text-red-700 dark:text-red-400 md:text-xl">
                          <XCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                          Challenges
                        </h3>
                        <ul className="space-y-2 md:space-y-3">
                          {project.challenges.map((challenge, index) => (
                            <motion.li
                              key={index}
                              className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                              <span className="leading-relaxed">
                                {challenge}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {/* Solutions */}
                  {project.solutions && (
                    <motion.div
                      className="space-y-4"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="rounded-xl border border-green-200 bg-green-50/50 p-4 dark:border-green-900/30 dark:bg-green-950/20 md:p-6">
                        <h3 className="mb-4 flex items-center text-lg font-semibold text-green-700 dark:text-green-400 md:text-xl">
                          <CheckCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                          Solutions
                        </h3>
                        <ul className="space-y-2 md:space-y-3">
                          {project.solutions.map((solution, index) => (
                            <motion.li
                              key={index}
                              className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400" />
                              <span className="leading-relaxed">
                                {solution}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Project Details Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="sticky top-8"
              >
                <motion.div
                  className="rounded-2xl border border-neutral-200 bg-white/80 p-4 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/80 md:p-6"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6 flex items-center gap-2">
                    <Sparkle className="h-4 w-4 text-neutral-600 dark:text-neutral-400 md:h-5 md:w-5" />
                    <h3 className="text-lg font-semibold md:text-xl">
                      Project Details
                    </h3>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <div className="space-y-2 md:space-y-4">
                      <div>
                        <h4 className="mb-1 font-medium text-neutral-700 dark:text-neutral-300">
                          Category
                        </h4>
                        <p className="text-neutral-600 dark:text-neutral-400">
                          {project.category}
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-1 font-medium text-neutral-700 dark:text-neutral-300">
                          Timeline
                        </h4>
                        <p className="text-neutral-600 dark:text-neutral-400">
                          {project.date}
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-1 font-medium text-neutral-700 dark:text-neutral-300">
                          Client
                        </h4>
                        <p className="text-neutral-600 dark:text-neutral-400">
                          {project.client}
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 gap-2 md:gap-2 lg:gap-3">
                      {project.liveUrl && (
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button asChild className="w-full">
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              View Live Demo
                            </Link>
                          </Button>
                        </motion.div>
                      )}
                      {project.githubUrl && (
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button variant="outline" asChild className="w-full">
                            <Link
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              Source Code
                            </Link>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </Container>
  );
}
