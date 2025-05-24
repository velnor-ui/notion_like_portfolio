import ContactForm from "@/components/contact-form";
import React from "react";
import ContactMethods from "@/components/contact-method";
import SocialLinks from "@/components/social-links";

export default function NotionContactForm() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="text-center">
            <h1 className="mb-3 text-3xl font-bold">
              Get in touch
            </h1>
            <p className="text-lg text-neutral-600">
              I'd love to hear about your project and how I can help bring your
              ideas to life.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Contact Form */}
          <ContactForm />
          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <ContactMethods />
            {/* Social Links */}
            <SocialLinks />

            {/* Response Time */}
            <div className="rounded-lg border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900 p-4">
              <h4 className="mb-2 font-medium text-blue-900 dark:text-blue-100">Quick Response</h4>
              <p className="text-sm text-blue-700 dark:text-blue-200">
                I typically respond within 24 hours on weekdays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
