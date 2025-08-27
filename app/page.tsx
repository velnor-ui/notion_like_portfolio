import type { Metadata } from "next";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || "https://yourdomain.com";

export const metadata: Metadata = {
  title: "Home | Developer Portfolio",
  description: "Welcome to my Notion-themed developer portfolio.",
  openGraph: {
    title: "Home | Developer Portfolio",
    description: "Welcome to my Notion-themed developer portfolio.",
    url: `${DOMAIN}/`,
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: `${DOMAIN}/`,
  },
};

export default function Home() {
  return (
    <main className="bg-neutral-50 py-20 dark:bg-neutral-900">
      <Hero />
      <FeaturedProjects />
      <Skills />
      <FeaturedBlogs />
      <Testimonials />
      <CTA />
    </main>
  );
}
