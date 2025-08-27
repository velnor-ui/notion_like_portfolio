import ContactForm from "@/components/ContactForm";
import React from "react";
import ContactMethods from "@/components/ContactMethods";
import SocialLinks from "@/components/SocialLinks";
import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Container from "@/components/Container";

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || "https://yourdomain.com";

export const metadata: Metadata = {
  title: "Contact | Developer Portfolio",
  description: "Get in touch to discuss your project or collaboration.",
  openGraph: {
    title: "Contact | Developer Portfolio",
    description: "Get in touch to discuss your project or collaboration.",
    url: `${DOMAIN}/contact`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Page OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Developer Portfolio",
    description: "Get in touch to discuss your project or collaboration.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: `${DOMAIN}/contact`,
  },
};

export default function NotionContactForm() {
  return (
    <Container role="main" id="main-content" className="py-20">
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="focus:bg-primary/90 sr-only focus:absolute focus:top-4 focus:left-4 focus:rounded-md focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header role="banner" aria-label="Contact Page Header" className="pt-20">
        <SectionHeader
          title="Get in touch"
          description="I'd love to hear about your project and how I can help bring your ideas to life."
        />
      </header>

      <section aria-label="Contact Form and Information">
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-3">
          <div className="col-span-2">
            <ContactForm />
          </div>

          <aside
            className="col-span-1 space-y-10 divide-y divide-neutral-200 md:space-y-8 md:divide-y-0 dark:divide-neutral-800"
            aria-label="Contact Methods Sidebar"
          >
            <ContactMethods />

            <SocialLinks />

            <div
              className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900"
              aria-describedby="response-time-description"
            >
              <h2 className="mb-2 text-base font-semibold">Quick Response</h2>
              <p
                id="response-time-description"
                className="bg-primary/10 rounded-lg p-4 text-sm leading-relaxed"
              >
                I typically respond within 24 hours on weekdays.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </Container>
  );
}
