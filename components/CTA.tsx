import React from "react";
import { motion } from "motion/react";
import ArrowButton from "./ArrowButton";

const CTA = () => {
  return (
    <section className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-muted rounded-xl p-8 md:p-12 text-center space-y-6"
      >
        <h2 className="text-3xl font-bold">Interested in working together?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas or
          opportunities to be part of your vision.
        </p>
        <ArrowButton link="/contact">Get in Touch</ArrowButton>
      </motion.div>
    </section>
  );
};

export default CTA;
