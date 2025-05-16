"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Rocket, Shield, Zap, Globe, Lock } from 'lucide-react';

interface Feature {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    reviewer: string;
    isHovering: boolean;
    onHoverStart: () => void;
    onHoverEnd: () => void;
    isAlternate?: boolean;
}

const CardItem = ({ 
  icon: Icon, 
  title, 
  description, 
  reviewer, 
  isHovering, 
  onHoverStart, 
  onHoverEnd,
  isAlternate = false 
}: Feature) => {
  return (
    <motion.div 
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      initial={{
        rotateX: 60,
        perspective: 2000,
        transformOrigin: 'bottom',
        opacity: 0.9
      }}
      whileHover={{ 
        translateY: -20,
        rotateX: 40,
        opacity: 1,
        transition: { 
          duration: 0.6,
          ease: "easeInOut"
        }
      }}
      className={`flex-shrink-0 w-[350px] p-6 
        ${isAlternate 
          ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' 
          : 'bg-gradient-to-br from-green-900/20 to-teal-900/20'
        } 
        backdrop-blur-md border border-white/10 rounded-2xl mr-8 
        flex flex-col justify-between space-y-4 cursor-pointer
        ${isHovering ? 'shadow-2xl' : 'shadow-lg'}`}
      style={{
        perspective: 2000,
        transformStyle: 'preserve-3d',
        transform: `rotateX(60deg)`,
        transformOrigin: 'bottom',
        height: '500px'
      }}
    >
      <div className="flex items-center mb-4 space-x-4">
        <div className="p-3 bg-white/10 rounded-full">
          <Icon className="w-8 h-8 text-blue-400" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-white/70 text-sm flex-grow">{description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/api/placeholder/40/40" 
            alt="Reviewer" 
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm text-white font-medium">{reviewer}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-4 h-4 text-yellow-400 fill-yellow-400" 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AlternatingCardScroll = () => {
  const [isHovering, setIsHovering] = useState(false);

  const features = [
    { icon: Zap, title: "Advanced Features", description: "Transform your website into a cutting-edge platform with our most powerful feature set.", reviewer: "John Doe" },
    { icon: Globe, title: "Global Reach", description: "Expand your digital presence with our comprehensive international solutions.", reviewer: "Emily Chen" },
    { icon: Rocket, title: "Rapid Deployment", description: "Launch and scale your projects with unprecedented speed and efficiency.", reviewer: "Jane Smith" },
    { icon: Lock, title: "Robust Security", description: "Comprehensive protection with multi-layered security protocols.", reviewer: "Mike Johnson" },
    { icon: Star, title: "Premium Experience", description: "Elevate your digital presence with our top-tier professional features.", reviewer: "Sarah Williams" },
    { icon: Shield, title: "Total Protection", description: "Advanced security measures to safeguard your digital assets.", reviewer: "Alex Rodriguez" }
  ];

  return (
    <div className="relative w-full overflow-hidden h-[600px] bg-black py-16 perspective-[2000px]">
      <motion.div 
        className="flex absolute -bottom-2"
        animate={{
          x: ['-50%', '0%'],
          transition: {
            x: {
              duration: isHovering ? 40 : 20, // Slower flow duration
              repeat: Infinity,
              ease: "linear"
            }
          }
        }}
      >
        {features.map((feature, index) => (
          <CardItem
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            reviewer={feature.reviewer}
            isHovering={isHovering}
            isAlternate={index % 2 !== 0}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          />
        ))}
        {features.map((feature, index) => (
          <CardItem 
            key={`duplicate-${index}`}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            reviewer={feature.reviewer}
            isHovering={isHovering}
            isAlternate={index % 2 !== 0}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AlternatingCardScroll;
