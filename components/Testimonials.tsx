"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TESTIMONIALS = [
  {
    name: "John Doe",
    position: "CEO, Company",
    testimonial: "I was skeptical at first, but after using this tool, I've seen a 20% increase in engagement. Highly recommend!"
  },
  {
    name: "Jane Smith",
    position: "CTO, Startup",
    testimonial: "This platform transformed our workflow. It's intuitive and highly effective!"
  },
  {
    name: "Mike Johnson",
    position: "Founder, Tech Company",
    testimonial: "Exceptional support and fantastic results. Wouldn't hesitate to recommend."
  },
];

const Testimonials = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const getRandomEnterVariant = () => {
    const sides = [
      { x: '-100%', y: '0' },
      { x: '100%', y: '0' },
      { x: '0', y: '-100%' },
      { x: '0', y: '100%' }
    ];
    return sides[Math.floor(Math.random() * sides.length)];
  };

  return (
    <div 
      ref={containerRef} 
      className="w-full min-h-[300vh] relative"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {TESTIMONIALS.map((testimonial, index) => {
          // Create stacking and scaling effect
          const scale = useTransform(
            scrollYProgress,
            [
              index / TESTIMONIALS.length, 
              (index + 0.5) / TESTIMONIALS.length, 
              (index + 1) / TESTIMONIALS.length
            ],
            [1, 0.9, 0.8]
          );

          const translateY = useTransform(
            scrollYProgress,
            [
              index / TESTIMONIALS.length, 
              (index + 0.5) / TESTIMONIALS.length, 
              (index + 1) / TESTIMONIALS.length
            ],
            [0, 50, 100]
          );

          const opacity = useTransform(
            scrollYProgress,
            [
              index / TESTIMONIALS.length, 
              (index + 0.5) / TESTIMONIALS.length, 
              (index + 1) / TESTIMONIALS.length
            ],
            [1, 0.7, 0.5]
          );

          const initialVariant = getRandomEnterVariant();

          return (
            <motion.div
              initial={{ 
                opacity: 0,
                x: initialVariant.x,
                y: initialVariant.y,
                scale: 0.8
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                transition: {
                  duration: 1.2,
                  type: "spring",
                  stiffness: 80,
                  damping: 15
                }
              }}
              style={{
                scale,
                translateY,
                opacity,
                zIndex: TESTIMONIALS.length - index,
                position: 'absolute',
                top: '20%   ',
                left: '0',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingInline: '1rem'
              }}
              className="will-change-transform"
            >
              <div className="w-full max-w-md bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl p-8 border border-neutral-100 dark:border-neutral-800">
                <p className="text-lg text-neutral-800 dark:text-neutral-200 mb-6 font-medium">
                  "{testimonial.testimonial}"
                </p>
                <div className="flex items-center mt-6">
                  <div className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-700 overflow-hidden">
                    <img
                      src={`/api/placeholder/100/100?text=${testimonial.name.split(' ')[0]}`}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                      {testimonial.position}
                    </p>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {TESTIMONIALS.map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`
                        w-2 h-2 rounded-full 
                        ${index === dotIndex 
                          ? 'bg-neutral-800 dark:bg-neutral-200' 
                          : 'bg-neutral-300 dark:bg-neutral-600'}
                      `}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;