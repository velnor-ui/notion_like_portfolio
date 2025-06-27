import ContactForm from "@/components/contact-form";
import React from "react";
import ContactMethods from "@/components/contact-method";
import SocialLinks from "@/components/social-links";
import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Contact | Developer Portfolio",
  description: "Get in touch to discuss your project or collaboration.",
  openGraph: {
    title: "Contact | Developer Portfolio",
    description: "Get in touch to discuss your project or collaboration.",
    url: "https://yourdomain.com/contact",
    images: [
      {
        url: "/api/og?title=Contact&path=/contact",
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
    images: ["/api/og?title=Contact&path=/contact"],
  },
  alternates: {
    canonical: "https://yourdomain.com/contact",
  },
};

export default function NotionContactForm() {
  return (
    <main
      className="mx-auto min-h-screen max-w-6xl"
      role="main"
      id="main-content"
      tabIndex={-1}
    >
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      {/* Header */}
      <header
        className="border-b px-6 py-12"
        role="banner"
        aria-label="Contact Page Header"
      >
        <SectionHeader
          title="Get in touch"
          description="I'd love to hear about your project and how I can help bring your ideas to life."
        />
      </header>
      <section
        className="mx-auto max-w-4xl px-6 pb-12"
        aria-label="Contact Form and Information"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Contact Form */}
          <ContactForm />
          {/* Contact Info Sidebar */}
          <aside className="space-y-8" aria-label="Contact Methods Sidebar">
            {/* Contact Methods */}
            <ContactMethods />
            {/* Social Links */}
            <SocialLinks />
            {/* Response Time */}
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
              <h4 className="mb-2 font-medium">Quick Response</h4>
              <p className="rounded-lg bg-primary/10 p-4 text-sm">
                I typically respond within 24 hours on weekdays.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
