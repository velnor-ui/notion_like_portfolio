import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <Hero />
      <FeaturedProjects />
      <Skills />
      <Testimonials />
      <CTA />
    </div>
  );
}
