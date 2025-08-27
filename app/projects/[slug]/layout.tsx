import { projects } from "@/constants/projects";
import React from "react";

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || "https://yourdomain.com";

export const generateStaticParams = async () => {
  return projects.map((project) => ({ slug: project.id }));
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const project = projects.find((project) => project.id === params.slug);
  if (!project) {
    return {
      title: "Project Not Found",
      description:
        "The project you're looking for doesn't exist or has been moved to a different location.",
    };
  }
  return {
    title: `${project.title} | Developer Portfolio`,
    description: project.description,
    openGraph: {
      title: "Projects | Developer Portfolio",
      description: "Learn more about me, my experience, and my skills.",
      type: "website",
      url: `${DOMAIN}/projects`,
      siteName: "Developer Portfolio",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Developer Portfolio",
        },
      ],
    },
    twitter: {
      title: "Projects | Developer Portfolio",
      description: "Learn more about me, my experience, and my skills.",
      card: "summary_large_image",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Developer Portfolio",
        },
      ],
    },
    alternates: {
      canonical: `${DOMAIN}/projects`,
    },
  };
};

export default function ProjectsDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-neutral-50 dark:bg-neutral-900">{children}</div>;
}
