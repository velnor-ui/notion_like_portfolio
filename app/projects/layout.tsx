import React from "react";

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || "https://yourdomain.com";

export const metadata = {
  title: "Projects | Developer Portfolio",
  description: "Learn more about me, my experience, and my skills.",
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

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-50 py-20 dark:bg-neutral-900">{children}</div>
  );
}
