"use client"

import { CardContent } from "./ui/card";
import { motion } from 'motion/react'
import React from 'react'
import { Card } from './ui/card'
import { Button } from "./ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { featuredProjects } from "@/lib/constants";
import ArrowButton from "./ArrowButton";

const FeaturedProjects = () => {
  return (
<section className="container">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <p className="text-muted-foreground mt-2">Some of my recent work</p>
            </div>
            <ArrowButton link="/projects">View All</ArrowButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="flex-1 flex flex-col p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={project.link}>
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Button>
                        <Button size="icon" variant="ghost">
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">Live Demo</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>    
  )
}

export default FeaturedProjects