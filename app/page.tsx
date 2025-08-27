import type { Metadata } from "next";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Home | Developer Portfolio",
  description: "Welcome to my Notion-themed developer portfolio.",
  openGraph: {
    title: "Home | Developer Portfolio",
    description: "Welcome to my Notion-themed developer portfolio.",
    url: "https://yourdomain.com/",
    images: [
      {
        url: "/api/og?title=Home&path=/",
        width: 1200,
        height: 630,
        alt: "Home Page OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | Developer Portfolio",
    description: "Welcome to my Notion-themed developer portfolio.",
    images: ["/api/og?title=Home&path=/"],
  },
  alternates: {
    canonical: "https://yourdomain.com/",
  },
};

export default function Home() {
  return (
    <main className="bg-neutral-50 py-20 dark:bg-neutral-900">
      <Hero />
      <FeaturedProjects />
      <Skills />
      <Testimonials />
      <CTA />
    </main>
  );
}
