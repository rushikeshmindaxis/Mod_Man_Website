"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  dark?: boolean;
}

export default function Breadcrumb({ items, dark = false }: BreadcrumbProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 flex-wrap"
    >
      {allItems.map((item, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-1.5"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          {index === 0 && (
            <Home
              className={`w-3.5 h-3.5 ${dark ? "text-white/50" : "text-gray-400"}`}
            />
          )}

          {item.href && index < allItems.length - 1 ? (
            <Link
              href={item.href}
              className={`text-sm font-accent font-medium transition-colors duration-200 ${
                dark
                  ? "text-white/60 hover:text-white"
                  : "text-gray-500 hover:text-[var(--red-primary)]"
              }`}
            >
              {item.label}
            </Link>
          ) : (
            <span
              className={`text-sm font-accent font-semibold ${
                dark ? "text-white" : "text-[var(--black)]"
              }`}
            >
              {item.label}
            </span>
          )}

          {index < allItems.length - 1 && (
            <ChevronRight
              className={`w-3.5 h-3.5 ${dark ? "text-white/30" : "text-gray-300"}`}
            />
          )}
        </motion.div>
      ))}
    </nav>
  );
}
