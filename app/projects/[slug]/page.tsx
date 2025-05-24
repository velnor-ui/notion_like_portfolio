"use client";

import { useParams } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Code,
  CheckCircle,
  XCircle,
  User,
  Tag,
  Clock,
  Sparkle,
} from "lucide-react";
import { projects } from "@/constants/projects";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    },
  },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeInScale = {
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
    offset: ["start end", "end start"]
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
        <motion.div 
          className="text-center space-y-6"
          variants={itemVariants}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center"
          >
            <XCircle className="h-10 w-10 text-neutral-400 dark:text-neutral-600" />
          </motion.div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
              Project Not Found
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-md">
              The project you're looking for doesn't exist or has been moved to a different location.
            </p>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
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
    <div ref={containerRef} className="relative">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 h-full w-full rounded-full bg-gradient-to-br from-neutral-50/50 to-transparent dark:from-neutral-900/20" />
        <div className="absolute -bottom-1/2 -left-1/2 h-full w-full rounded-full bg-gradient-to-tr from-neutral-50/30 to-transparent dark:from-neutral-900/10" />
      </div>

      <motion.div 
        className="container space-y-16 py-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Navigation */}
        <motion.div variants={slideInVariants}>
          <motion.div
            whileHover={{ x: -4 }}
            transition={{ duration: 0.2 }}
          >
            <Button 
              variant="ghost" 
              asChild 
              className="group -ml-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
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
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h1 
                className="text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {project.title}
              </motion.h1>
            </motion.div>

            <motion.p 
              className="text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {project.description}
            </motion.p>

            {/* Tags */}
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {project.tags.map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            {/* Meta Information */}
            <motion.div 
              className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 dark:text-neutral-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
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
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <motion.div 
                      className="relative aspect-video overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-white/90 backdrop-blur-sm border-neutral-200 hover:bg-white dark:bg-neutral-900/90 dark:border-neutral-800 dark:hover:bg-neutral-900" />
              <CarouselNext className="right-4 bg-white/90 backdrop-blur-sm border-neutral-200 hover:bg-white dark:bg-neutral-900/90 dark:border-neutral-800 dark:hover:bg-neutral-900" />
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
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                  Overview
                </h2>
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed whitespace-pre-line">
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
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                  Challenges & Solutions
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/* Challenges */}
                  <motion.div 
                    className="space-y-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-900/30 dark:bg-red-950/20">
                      <h3 className="flex items-center text-xl font-semibold text-red-700 dark:text-red-400 mb-4">
                        <XCircle className="mr-2 h-5 w-5" />
                        Challenges
                      </h3>
                      <ul className="space-y-3">
                        {project.challenges.map((challenge, index) => (
                          <motion.li 
                            key={index} 
                            className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
                            <span className="leading-relaxed">{challenge}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Solutions */}
                  <motion.div 
                    className="space-y-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="rounded-xl border border-green-200 bg-green-50/50 p-6 dark:border-green-900/30 dark:bg-green-950/20">
                      <h3 className="flex items-center text-xl font-semibold text-green-700 dark:text-green-400 mb-4">
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Solutions
                      </h3>
                      <ul className="space-y-3">
                        {project.solutions.map((solution, index) => (
                          <motion.li 
                            key={index} 
                            className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-400 flex-shrink-0" />
                            <span className="leading-relaxed">{solution}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Code Snippet */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="flex items-center text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                  <Code className="mr-3 h-6 w-6" />
                  Code Highlight
                </h2>
                <motion.div
                  className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-100/50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-800/50">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <div className="h-3 w-3 rounded-full bg-yellow-400" />
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                    </div>
                    <span className="text-xs text-neutral-500">code-snippet.js</span>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-sm text-neutral-700 dark:text-neutral-300">
                      <code>{project.codeSnippet}</code>
                    </pre>
                  </div>
                </motion.div>
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
                  className="rounded-2xl border border-neutral-200 bg-white/80 p-6 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/80"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkle className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                      Project Details
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                          Category
                        </h4>
                        <p className="text-neutral-600 dark:text-neutral-400">
                          {project.category}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                          Timeline
                        </h4>
                        <p className="text-neutral-600 dark:text-neutral-400">
                          {project.date}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                          Client
                        </h4>
                        <p className="text-neutral-600 dark:text-neutral-400">
                          {project.client}
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          asChild 
                          className="w-full bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                        >
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
                      
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          variant="outline" 
                          asChild 
                          className="w-full border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
                        >
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
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}