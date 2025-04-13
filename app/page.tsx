"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/icon"
import { ArrowRight, Download, Github, ExternalLink } from "lucide-react"

// Featured projects data
const featuredProjects = [
  {
    id: "project-1",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with payment processing and inventory management.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    link: "/projects/e-commerce-platform",
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
    link: "/projects/task-management-app",
  },
]

// Skills data
const skills = [
  { name: "Frontend Development", icon: "Code", color: "text-blue-500" },
  { name: "Backend Development", icon: "Server", color: "text-green-500" },
  { name: "UI/UX Design", icon: "Palette", color: "text-purple-500" },
  { name: "DevOps", icon: "Cloud", color: "text-orange-500" },
  { name: "Mobile Development", icon: "Smartphone", color: "text-pink-500" },
]

// Technology icons data
const technologies = [
  { name: "React", icon: "React", color: "text-blue-400" },
  { name: "Next.js", icon: "Next", color: "text-black dark:text-white" },
  { name: "TypeScript", icon: "TypeScript", color: "text-blue-600" },
  { name: "Node.js", icon: "Node", color: "text-green-600" },
  { name: "Tailwind CSS", icon: "Tailwind", color: "text-cyan-500" },
  { name: "MongoDB", icon: "MongoDB", color: "text-green-500" },
  { name: "PostgreSQL", icon: "PostgreSQL", color: "text-blue-700" },
  { name: "GraphQL", icon: "GraphQL", color: "text-pink-600" },
  { name: "Docker", icon: "Docker", color: "text-blue-500" },
]

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
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
              <Button asChild>
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square rounded-full overflow-hidden border-8 border-muted max-w-md mx-auto"
          >
            <Image src="/placeholder.svg?height=500&width=500" alt="Your Name" fill className="object-cover" priority />
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <p className="text-muted-foreground mt-2">Some of my recent work</p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/projects">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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

      {/* Skills Section */}
      <section className="container">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold">Skills & Expertise</h2>
            <p className="text-muted-foreground mt-2">Technologies and tools I work with</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-muted/50 p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className={`p-3 rounded-lg bg-background ${skill.color} group-hover:scale-110 transition-transform`}
                      whileHover={{ rotate: 10 }}
                    >
                      <Icon name={skill.icon} className="w-6 h-6" />
                    </motion.div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                  className="flex flex-col items-center justify-center p-4 border rounded-lg hover:border-primary/50 transition-colors group"
                >
                  <motion.div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${tech.color} group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: 10 }}
                  >
                    <Icon name={tech.icon} className="w-6 h-6" />
                  </motion.div>
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-muted rounded-xl p-8 md:p-12 text-center space-y-6"
        >
          <h2 className="text-3xl font-bold">Interested in working together?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  )
}

