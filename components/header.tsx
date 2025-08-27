"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    setMounted(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return <div className="h-16 w-full" />;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 px-4 transition-all duration-300 ease-in-out md:px-6",
        scrolled
          ? "top-0 mx-auto max-w-4xl border bg-background/80 shadow-sm backdrop-blur-lg md:top-2 md:rounded-2xl"
          : "mx-auto max-w-6xl bg-background shadow-sm md:rounded-2xl",
      )}
    >
      <div
        className="flex h-16 items-center justify-between"
        onMouseLeave={() => setHoveredItem(null)}
      >
        <Logo />

        {/* Desktop navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredItem(index)}
            >
              <Link
                href={item.path}
                className={cn(
                  "relative rounded-lg px-3 py-1 text-sm font-medium transition-colors duration-200 hover:text-primary",
                  pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                {item.name}
                {hoveredItem === index && (
                  <motion.div
                    layoutId="nav-highlight"
                    className="absolute inset-0 rounded-lg bg-primary/10"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <ThemeToggle mounted={true} />
        </nav>

        {/* Mobile menu toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle mounted={true} />
          <button
            aria-label="Toggle mobile menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-2 p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t md:hidden"
          >
            <div className="space-y-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
