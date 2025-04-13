"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, GraduationCap, Award, Heart, Download } from "lucide-react"

// Experience data
const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Company",
    period: "2021 - Present",
    description:
      "Led the development of the company's main product, improving performance by 40%. Mentored junior developers and implemented best practices.",
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2018 - 2021",
    description:
      "Developed responsive web applications for various clients. Worked with React, TypeScript, and various CSS frameworks.",
  },
  {
    title: "Junior Developer",
    company: "Startup Inc.",
    period: "2016 - 2018",
    description:
      "Started my career building UI components and fixing bugs. Gained experience with JavaScript and modern frontend frameworks.",
  },
]

// Education data
const education = [
  {
    degree: "Master's in Computer Science",
    institution: "University Name",
    period: "2014 - 2016",
    description: "Specialized in web technologies and user interface design. Graduated with honors.",
  },
  {
    degree: "Bachelor's in Computer Science",
    institution: "University Name",
    period: "2010 - 2014",
    description: "Studied algorithms, data structures, and software engineering principles.",
  },
]

// Certifications data
const certifications = [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    year: "2022",
  },
  {
    name: "Professional Frontend Developer",
    issuer: "Frontend Masters",
    year: "2021",
  },
  {
    name: "React Advanced Patterns",
    issuer: "React Training",
    year: "2020",
  },
]

// Hobbies data
const hobbies = [
  {
    name: "Photography",
    description: "Capturing moments and exploring visual storytelling.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Hiking",
    description: "Exploring nature and challenging myself physically.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Reading",
    description: "Expanding knowledge through books and articles.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function AboutPage() {
  return (
    <div className="container py-10 space-y-16">
      {/* Hero Section */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold">About Me</h1>
              <p className="text-xl text-muted-foreground mt-4">
                I'm a passionate developer with over 6 years of experience building web applications.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-muted-foreground">
                I specialize in creating responsive, accessible, and performance-optimized web applications using modern
                technologies. My approach combines technical expertise with a keen eye for design and user experience.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me hiking, reading, or experimenting with photography. I believe in
                continuous learning and staying updated with the latest industry trends.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button className="group">
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-[-2px] transition-transform" /> 
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] rounded-xl overflow-hidden border-8 border-muted group"
          >
            <Image 
              src="/placeholder.svg?height=600&width=400" 
              alt="Your Name" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section>
        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            {[
              { value: "experience", icon: Briefcase, label: "Experience" },
              { value: "education", icon: GraduationCap, label: "Education" },
              { value: "certifications", icon: Award, label: "Certifications" },
              { value: "hobbies", icon: Heart, label: "Hobbies" },
            ].map((tab) => (
              <TabsTrigger 
                key={tab.value} 
                value={tab.value} 
                className="flex items-center group"
              >
                <tab.icon className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" /> 
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Experience Tab */}
          <TabsContent value="experience" className="mt-6">
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="group hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.title}</h3>
                          <p className="text-primary">{exp.company}</p>
                          <p className="text-muted-foreground mt-4">{exp.description}</p>
                        </div>
                        <div className="text-muted-foreground shrink-0">{exp.period}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education" className="mt-6">
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="group hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{edu.degree}</h3>
                          <p className="text-primary">{edu.institution}</p>
                          <p className="text-muted-foreground mt-4">{edu.description}</p>
                        </div>
                        <div className="text-muted-foreground shrink-0">{edu.period}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Certifications Tab */}
          <TabsContent value="certifications" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="group hover:border-primary/50 transition-colors">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <motion.div
                        whileHover={{ rotate: 10 }}
                        className="mb-4"
                      >
                        <Award className="h-12 w-12 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{cert.name}</h3>
                      <p className="text-muted-foreground">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground mt-2">{cert.year}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Hobbies Tab */}
          <TabsContent value="hobbies" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="overflow-hidden group hover:border-primary/50 transition-colors">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image 
                        src={hobby.image || "/placeholder.svg"} 
                        alt={hobby.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{hobby.name}</h3>
                      <p className="text-muted-foreground mt-2">{hobby.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}

