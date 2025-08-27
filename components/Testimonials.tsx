"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import { TESTIMONIALS } from "../constants/testimonials";
import Container from "./Container";
import SectionHeader from "./SectionHeader";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  testimonial: string;
  avatar: string;
}

const TestimonialCard = ({
  testimonial,
  direction,
}: {
  testimonial: Testimonial;
  direction: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
      },
    }),
  };

  return (
    <motion.div
      key={testimonial.name}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="mx-auto w-full max-w-2xl"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative rounded-lg border p-8 shadow-xs transition-all duration-300 hover:shadow-md"
        animate={{
          y: isHovered ? -2 : 0,
          boxShadow: isHovered
            ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {/* Quote */}
        <motion.p className="mb-8 text-lg font-normal leading-relaxed text-neutral-700 dark:text-neutral-400">
          &quot;{testimonial.testimonial}&quot;
        </motion.p>

        {/* Profile section */}
        <motion.div className="flex items-center gap-4">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-200">
                {testimonial.avatar}
              </span>
            </div>
            <motion.div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-white bg-green-500" />
          </motion.div>

          <div className="flex-1">
            <motion.h4 className="text-base font-medium">
              {testimonial.name}
            </motion.h4>
            <motion.p className="text-sm text-neutral-500">
              {testimonial.position}
            </motion.p>
            <motion.p className="mt-0.5 text-xs font-medium text-neutral-400">
              {testimonial.company}
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % TESTIMONIALS.length;
      } else {
        return prev === 0 ? TESTIMONIALS.length - 1 : prev - 1;
      }
    });
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      // Pause autoplay briefly when user manually navigates
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 3000);
    },
    [currentIndex],
  );

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, paginate]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const toggleAutoplay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    setIsPaused(false);
  };

  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Header */}
      <SectionHeader
        className="mb-10"
        title="Testimonials"
        description="See what people are saying about their experience"
      />

      {/* Testimonial Cards */}
      <div className="relative mb-12 h-80 overflow-hidden py-4">
        <AnimatePresence mode="wait" custom={direction}>
          <TestimonialCard
            key={currentIndex}
            testimonial={TESTIMONIALS[currentIndex]}
            direction={direction}
          />
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-8">
        {/* Previous button */}
        <motion.button
          onClick={() => paginate(-1)}
          className="rounded-md border p-2 text-neutral-400 transition-all duration-200 hover:border-neutral-300 hover:text-neutral-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>

        {/* Dots */}
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 bg-neutral-800"
                  : "bg-neutral-300 hover:bg-neutral-400"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            />
          ))}
        </div>

        {/* Next button */}
        <motion.button
          onClick={() => paginate(1)}
          className="rounded-md border p-2 text-neutral-400 transition-all duration-200 hover:border-neutral-300 hover:text-neutral-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>

      {/* Autoplay Controls */}
      <div className="mt-6 flex justify-center">
        <motion.button
          onClick={toggleAutoplay}
          className="flex items-center gap-2 rounded-md border px-4 py-2 text-sm text-neutral-600 transition-all duration-200 hover:border-neutral-300 hover:text-neutral-800"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isAutoPlaying ? (
            <>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
              Pause
            </>
          ) : (
            <>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
              Play
            </>
          )}
        </motion.button>
      </div>
    </Container>
  );
};

export default Testimonials;
