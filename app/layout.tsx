import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "A Notion-themed developer portfolio",
  generator: "v0.dev",
  metadataBase: new URL("https://yourdomain.com"), // <-- Set your domain
  openGraph: {
    title: "Developer Portfolio",
    description: "A Notion-themed developer portfolio",
    url: "https://yourdomain.com",
    siteName: "Developer Portfolio",
    images: [
      {
        url: "/api/og?title=Developer%20Portfolio",
        width: 1200,
        height: 630,
        alt: "Developer Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Portfolio",
    description: "A Notion-themed developer portfolio",
    images: ["/api/og?title=Developer%20Portfolio"],
    creator: "@yourtwitter",
  },
  alternates: {
    canonical: "/",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-color-scheme="dark light">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#18181b"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="color-scheme" content="light dark" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="canonical" href="https://yourdomain.com/" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Your Name",
              url: "https://yourdomain.com",
              sameAs: [
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourusername",
              ],
              jobTitle: "Frontend Developer",
              image: "https://yourdomain.com/your-photo.jpg",
            }),
          }}
        />
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <div>
            <header role="banner" aria-label="Site Header" className="w-screen bg-background">
              <Header />
            </header>
            <main
              role="main"
              id="main-content"
              tabIndex={-1}
            >
              {children}
            </main>
            <footer role="contentinfo" aria-label="Site Footer">
              <Footer />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
