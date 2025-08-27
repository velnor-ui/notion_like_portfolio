import type React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Post | Portfolio",
  description: "Blog post details",
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl pt-20">
      <Link
        href="/blog"
        className="group text-muted-foreground hover:text-primary flex items-center text-xs transition-colors duration-100 ease-in-out md:text-sm"
      >
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        <span>Back to all posts</span>
      </Link>

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        {children}
      </article>
    </div>
  );
}
