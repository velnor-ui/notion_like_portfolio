"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./theme-toggle";
import Logo from "./logo";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    setMounted(true);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return <div className="h-16 w-full"></div>;

  return (
    <header
      className={cn(
        "sticky z-50 mx-auto w-full transition-all duration-300 ease-in-out",
        scrolled
          ? "top-2 max-w-4xl rounded-2xl border bg-background/60 backdrop-blur-md"
          : "top-0 max-w-6xl bg-background",
      )}
    >
      <div
        onMouseLeave={() => setHoveredItem(null)}
        className="mx-6 flex h-16 items-center justify-between"
      >
        <Logo />

        {/* Desktop navigation */}
        <nav className="mx-6 hidden items-center space-x-6 md:flex">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredItem(index)}
            >
              <Link
                href={item.path}
                className={cn(
                  "relative rounded-full px-2 py-1 text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                {item.name}
                {hoveredItem === index && (
                  <motion.div
                    layoutId="hovered-item"
                    className="absolute inset-0 z-20 h-full w-full rounded-full bg-primary/10"
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <ThemeToggle mounted={true} />
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle mounted={true} />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-2 p-2 text-muted-foreground hover:text-foreground"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-b md:hidden"
        >
          <div className="container space-y-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "block text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
