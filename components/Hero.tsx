import { motion } from "motion/react";
import React from "react";
import { Download } from "lucide-react";
import { Badge } from "./ui/badge";
import Image from "next/image";
import ArrowButton from "./ArrowButton";
const Hero = () => {
  return (
    <section className="container pt-10 md:pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-block">
            <Badge variant="outline" className="text-sm">
              Full Stack Developer
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            I build exceptional and accessible digital experiences for the web.
          </p>
          <div className="flex flex-wrap gap-4">
            <ArrowButton link="/contact">Get in Touch</ArrowButton>
            <ArrowButton link="#" variant="outline">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </ArrowButton>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-square rounded-full overflow-hidden border-8 border-muted max-w-md mx-auto"
        >
          <Image
            src="/placeholder.svg?height=500&width=500"
            alt="Your Name"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
