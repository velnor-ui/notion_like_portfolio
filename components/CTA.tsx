import React from "react";
import ArrowButton from "./ArrowButton";
import MotionDiv from "./MotionDiv";
import Container from "./Container";

const CTA = () => {
  return (
    <Container>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex w-full flex-col items-center justify-center space-y-6 rounded-xl border bg-neutral-100 dark:bg-neutral-950 p-8 text-center md:p-12"
      >
        <h2 className="text-3xl font-bold">Interested in working together?</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          I&apos;m always open to discussing new projects, creative ideas or
          opportunities to be part of your vision.
        </p>
        <ArrowButton link="/contact">Get in Touch</ArrowButton>
      </MotionDiv>
    </Container>
  );
};

export default CTA;
