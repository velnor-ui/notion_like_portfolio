"use client";

import { motion, useScroll, useTransform, Variants } from "motion/react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRef, useState } from "react";
import {
  certifications,
  education,
  experiences,
  hobbies,
} from "@/constants/about";
import SectionCard from "@/components/SectionCard";
import {
  IconBriefcase,
  IconCode,
  IconCoffee,
  IconDownload,
  IconSparkles,
  IconAward,
  IconHeart,
  IconBook2,
  IconExternalLink,
} from "@tabler/icons-react";
import ArrowButton from "@/components/ArrowButton";
import PageSEO from "@/components/PageSEO";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

const cardHoverVariants: Variants = {
  rest: { scale: 1, y: 0 },
  hover: {
    y: -4,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("experience");
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <>
      <PageSEO
        title="About | Developer Portfolio"
        description="Learn more about me, my experience, and my skills."
        ogImage="/og-image.png"
        canonical="https://yourdomain.com/about"
        twitterCard="summary_large_image"
        twitterTitle="About | Developer Portfolio"
        twitterDescription="Learn more about me, my experience, and my skills."
        twitterImage="/og-image.png"
      />
      <main className="relative overflow-hidden py-8 md:py-16">
        {/* Background Elements */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute -right-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-neutral-100/40 to-transparent blur-3xl dark:from-neutral-800/20" />
          <div className="absolute -left-1/4 bottom-1/4 h-96 w-96 rounded-full bg-gradient-to-tr from-neutral-100/30 to-transparent blur-3xl dark:from-neutral-800/10" />
        </div>

        <motion.div
          className="container space-y-20 py-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Hero Section */}
          <motion.section
            ref={heroRef}
            variants={itemVariants}
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Text Content */}
              <motion.div className="space-y-8" variants={containerVariants}>
                <SectionHeader
                  title="About Me"
                  description="I'm a passionate developer with over 6 years of experience crafting digital experiences that matter."
                  badge={<IconSparkles className="mr-2 h-4 w-4" />}
                  badgeText="Available for new opportunities"
                />
                <motion.div
                  variants={itemVariants}
                  className="space-y-6 text-sm md:text-base"
                >
                  <motion.p
                    className="leading-relaxed text-neutral-600 dark:text-neutral-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    I specialize in creating responsive, accessible, and
                    performance-optimized web applications using modern
                    technologies. My approach combines technical expertise with
                    a keen eye for design and user experience, ensuring every
                    project delivers both functionality and delight.
                  </motion.p>

                  <motion.p
                    className="leading-relaxed text-neutral-600 dark:text-neutral-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    When I'm not coding, you can find me hiking mountain trails,
                    capturing moments through photography, or diving deep into
                    the latest tech books. I believe in continuous learning and
                    staying curious about emerging technologies and design
                    trends.
                  </motion.p>
                </motion.div>

                {/* Stats */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-3 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  {[
                    { number: "6+", label: "Years Experience" },
                    { number: "50+", label: "Projects Completed" },
                    { number: "3", label: "Certifications" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                        {stat.number}
                      </div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400 md:text-sm">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ArrowButton link="/resume.pdf">
                      <IconDownload className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                      Download Resume
                    </ArrowButton>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Profile Image */}
              <motion.div variants={itemVariants} className="relative">
                <motion.div
                  className="group relative mx-auto h-[300px] w-[300px] rounded-3xl md:h-[500px] md:w-[400px]"
                  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.02, rotate: 1 }}
                >
                  {/* Decorative border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neutral-200 via-transparent to-neutral-300 p-1 dark:from-neutral-700 dark:to-neutral-800">
                    <div className="relative h-full w-full overflow-hidden rounded-3xl bg-white dark:bg-neutral-900">
                      <Image
                        src="/hero.jpeg"
                        alt="Profile photo of the developer"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    className="absolute -right-4 -top-4 rounded-full bg-white p-3 shadow-xl dark:bg-neutral-800"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <IconCode className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 rounded-full bg-white p-3 shadow-xl dark:bg-neutral-800"
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5,
                    }}
                  >
                    <IconCoffee className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Tabs Section */}
          <motion.section variants={itemVariants}>
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
              role="tablist"
              aria-label="About page sections"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <TabsList>
                  {[
                    {
                      value: "experience",
                      icon: IconBriefcase,
                      label: "Experience",
                    },
                    {
                      value: "education",
                      icon: IconBook2,
                      label: "Education",
                    },
                    {
                      value: "certifications",
                      icon: IconAward,
                      label: "Certifications",
                    },
                    { value: "hobbies", icon: IconHeart, label: "Hobbies" },
                  ].map((tab) => (
                    <TabsTrigger key={tab.value} value={tab.value}>
                      <tab.icon className="hidden h-4 w-4 transition-transform group-hover:scale-110 sm:block" />
                      <span className="text-[10px] sm:text-xs md:text-sm">
                        {tab.label}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </motion.div>

              {/* Experience Tab */}
              <TabsContent value="experience" className="mt-4 md:mt-8" asChild>
                <section aria-labelledby="experience-tab">
                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <motion.div
                        key={index}
                        variants={cardHoverVariants}
                        initial="rest"
                        whileHover="hover"
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <SectionCard
                          title={exp.title}
                          subtitle={exp.company}
                          location={exp.location}
                          description={exp.description}
                          achievements={exp.achievements}
                          period={exp.period}
                          isExperience
                        />
                      </motion.div>
                    ))}
                  </div>
                </section>
              </TabsContent>

              {/* Education Tab */}
              <TabsContent value="education" className="mt-8" asChild>
                <section aria-labelledby="education-tab">
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <motion.div
                        key={index}
                        variants={cardHoverVariants}
                        initial="rest"
                        whileHover="hover"
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <SectionCard
                          title={edu.degree}
                          subtitle={edu.institution}
                          location={edu.gpa}
                          description={edu.description}
                          achievements={edu.highlights}
                          period={edu.period}
                        />
                      </motion.div>
                    ))}
                  </div>
                </section>
              </TabsContent>

              {/* Certifications Tab */}
              <TabsContent value="certifications" className="mt-8" asChild>
                <section aria-labelledby="certifications-tab">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        variants={cardHoverVariants}
                        initial="rest"
                        whileHover="hover"
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card className="group relative overflow-hidden border-neutral-200 bg-white/80 backdrop-blur-sm hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900/80 dark:hover:border-neutral-700">
                          {/* Gradient background */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5 transition-opacity group-hover:opacity-10`}
                          />

                          <CardContent className="relative flex flex-col items-center p-8 text-center">
                            <motion.div
                              className="mb-6 rounded-full bg-gradient-to-br from-neutral-100 to-neutral-200 p-4 dark:from-neutral-700 dark:to-neutral-800"
                              whileHover={{ rotate: 10, scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                            >
                              <IconAward className="h-8 w-8 text-neutral-700 dark:text-neutral-300" />
                            </motion.div>

                            <h3 className="mb-2 text-lg font-bold text-neutral-900 transition-colors group-hover:text-neutral-700 dark:text-neutral-100 dark:group-hover:text-neutral-300 md:text-xl">
                              {cert.name}
                            </h3>

                            <p className="mb-1 text-sm text-neutral-600 dark:text-neutral-400 md:text-base">
                              {cert.issuer}
                            </p>

                            <p className="mb-3 text-sm text-neutral-500 dark:text-neutral-500">
                              {cert.year}
                            </p>

                            <p className="font-mono text-xs text-neutral-400 dark:text-neutral-600">
                              ID: {cert.credentialId}
                            </p>
                            {cert.link && (
                              <Link
                                href={cert.link}
                                target="_blank"
                                className="mt-2 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 md:text-base"
                              >
                                View Certificate{" "}
                                <IconExternalLink className="h-4 w-4" />
                              </Link>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </TabsContent>

              {/* Hobbies Tab */}
              <TabsContent value="hobbies" className="mt-8" asChild>
                <section aria-labelledby="hobbies-tab">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {hobbies.map((hobby, index) => (
                      <motion.div
                        key={index}
                        variants={cardHoverVariants}
                        initial="rest"
                        whileHover="hover"
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card className="group overflow-hidden border-neutral-200 bg-white/80 backdrop-blur-sm hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900/80 dark:hover:border-neutral-700">
                          <div className="relative h-48 w-full overflow-hidden">
                            <Image
                              src={hobby.image || "/placeholder.svg"}
                              alt={hobby.name}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            {/* Floating emoji */}
                            <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-2xl backdrop-blur-sm dark:bg-neutral-900/90">
                              {hobby.icon}
                            </div>

                            {/* Stats badge */}
                            <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium backdrop-blur-sm dark:bg-neutral-900/90">
                              {hobby.stats}
                            </div>
                          </div>

                          <CardContent className="p-6 text-xs md:text-sm lg:text-base">
                            <h3 className="mb-2 text-lg font-bold text-neutral-900 transition-colors group-hover:text-neutral-700 dark:text-neutral-100 dark:group-hover:text-neutral-300 md:text-xl">
                              {hobby.name}
                            </h3>
                            <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                              {hobby.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </TabsContent>
            </Tabs>
          </motion.section>
        </motion.div>
      </main>
    </>
  );
}
