"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/icon"
import { ArrowRight, Download, Github, ExternalLink } from "lucide-react"
import CTA from "@/components/CTA"
import Hero from "@/components/Hero"
import FeaturedProjects from "@/components/FeaturedProjects"
import Skills from "@/components/Skills"
// Featured projects data


export default function Home() {
  return (
    <div className="space-y-20 pb-20">ƒƒ
      <Hero/>
      <FeaturedProjects/>
      <Skills/>
      <CTA />
    </div>
  )
}

