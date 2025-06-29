import React from "react";
import { Download } from "lucide-react";
import { Badge } from "./ui/badge";
import Image from "next/image";
import ArrowButton from "./ArrowButton";
import MotionDiv from "./MotionDiv";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container pt-10 md:pt-20">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Change it to your role */}
          <div className="inline-block">
            <Badge
              variant="outline"
              className="rounded-2xl border bg-primary/10 p-4 text-sm backdrop-blur-md"
            >
              Full Stack Developer
            </Badge>
          </div>
          {/* Change it to your name */}
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Hi, I'm{" "}
            <span className="inline-block text-primary">Tony Stark</span>
          </h1>
          {/* Change it to your bio / one-liner */}
          <p className="text-xl text-muted-foreground">
            I am billionaire, playboy, philanthropist.
          </p>
          <div className="flex flex-wrap gap-4">
            <ArrowButton link="/contact">Get in Touch</ArrowButton>
            {/* Change it to your resume link */}
            <ArrowButton link="#" variant="outline">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </ArrowButton>
          </div>
        </MotionDiv>
        {/* Change it to a social link if needed */}
        <Link
          href="/"
          className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-3xl border-8 border-muted"
        >
          <Image
            src="/tony.png"
            alt="Portrait of Your Name, Full Stack Developer"
            width={400}
            height={400}
            className="object-cover"
            loading="lazy"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
