"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Phone, Mail, Briefcase, Grid } from "lucide-react";

import { navItems } from "@/data/navigation";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const megaMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isHome = pathname === "/";

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMegaMenuEnter = () => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeout.current = setTimeout(() => setMegaMenuOpen(false), 150);
  };

  const showOpaque = mounted && scrolled && !mobileOpen;

  const navBg = showOpaque
    ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
    : "bg-[var(--red-primary)]/95 backdrop-blur-md shadow-md";

  const linkColor = showOpaque
    ? "text-gray-700 hover:text-[var(--red-primary)]"
    : "text-white/90 hover:text-white";

  const logoVariant = showOpaque ? "dark" : "light";

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          navBg
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Top Contact Bar */}
        <div
          className={cn(
            "hidden md:flex text-sm font-accent transition-all duration-300 items-center h-[42px] py-2",
            showOpaque
              ? "bg-[var(--red-primary)] text-white border-b border-red-700/20"
              : "bg-white text-black border-b border-gray-100"
          )}
        >
          <div className="container flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a
                href={`tel:${company.phone}`}
                className={cn(
                  "flex items-center gap-2 transition-colors font-medium",
                  showOpaque ? "hover:text-red-100" : "hover:text-[var(--red-primary)]"
                )}
              >
                <Phone className={cn("w-4 h-4", showOpaque ? "text-white" : "text-[var(--red-primary)]")} />
                <span>{company.phone}</span>
              </a>
              <a
                href={`mailto:${company.email}`}
                className={cn(
                  "flex items-center gap-2 transition-colors font-medium",
                  showOpaque ? "hover:text-red-100" : "hover:text-[var(--red-primary)]"
                )}
              >
                <Mail className={cn("w-4 h-4", showOpaque ? "text-white" : "text-[var(--red-primary)]")} />
                <span>{company.email}</span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center justify-center transition-colors",
                  showOpaque ? "text-white hover:text-red-100" : "text-[var(--red-primary)] hover:text-black"
                )}
                aria-label="Instagram"
              >
                <svg className="w-4.5 h-4.5 transition-transform duration-200 hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div style={{ paddingLeft: "24px", paddingRight: "24px" }} className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 relative z-10"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  window.location.reload();
                }
              }}
            >
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Image
                  src="/logo.png"
                  alt="Mod Men"
                  width={140}
                  height={56}
                  className="h-12 w-auto"
                  style={{ width: "auto", ...(logoVariant === "light" ? { filter: "brightness(0) invert(1)" } : {}) }}
                  priority
                />
              </motion.div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={item.children ? handleMegaMenuEnter : undefined}
                  onMouseLeave={item.children ? handleMegaMenuLeave : undefined}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      if (pathname === item.href || pathname.startsWith(item.href + "/")) {
                        e.preventDefault();
                        window.location.reload();
                      }
                    }}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-base font-accent font-medium rounded-lg transition-all duration-200",
                      linkColor,
                      pathname === item.href || pathname.startsWith(item.href + "/")
                        ? (showOpaque ? "!text-[var(--red-primary)] font-semibold" : "!text-white font-bold")
                        : ""
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-300",
                          item.children && megaMenuOpen ? "rotate-180" : ""
                        )}
                      />
                    )}
                    {(pathname === item.href || pathname.startsWith(item.href + "/")) && (
                      <motion.div
                        className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                        style={{ background: showOpaque ? "var(--red-primary)" : "white" }}
                        layoutId="activeIndicator"
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {item.children && megaMenuOpen && (
                      <motion.div
                        className="absolute top-full left-0 mt-4 w-[300px] rounded-none shadow-2xl z-50 border border-gray-100 bg-white"
                        style={{ padding: "12px" }}
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {item.children.map((child: any) => {
                          const Icon = child.label.includes("Furniture") ? Briefcase : Grid;
                          const hasSubChildren = child.children && child.children.length > 0;
                          return (
                            <div key={child.href} className="relative group/sub">
                              <Link
                                href={child.href}
                                className="flex items-center justify-between gap-4 px-4 py-3.5 text-[15px] font-accent font-medium rounded-none transition-all duration-200 group-hover/sub:text-[var(--red-primary)] group-hover/sub:bg-red-50 text-gray-700 w-full"
                              >
                                <div className="flex items-center gap-4">
                                  <Icon className="w-5 h-5 text-gray-400 group-hover/sub:text-[var(--red-primary)] transition-colors duration-200" />
                                  <span>{child.label}</span>
                                </div>
                                {hasSubChildren && (
                                  <ChevronDown className="w-4 h-4 -rotate-90 text-gray-400 group-hover/sub:text-[var(--red-primary)]" />
                                )}
                              </Link>

                              {hasSubChildren && (
                                <div
                                  data-lenis-prevent="true"
                                  className="absolute top-0 left-full hidden group-hover/sub:flex w-[350px] bg-white border border-gray-100 shadow-2xl z-50 max-h-[400px] overflow-y-auto flex-col rounded-xl rounded-l-none"
                                  style={{ marginLeft: "2px", padding: "16px", gap: "4px" }}
                                >
                                  {child.children.map((subChild: any) => (
                                    <Link
                                      key={subChild.href}
                                      href={subChild.href}
                                      className="block text-[14px] font-accent text-gray-600 hover:text-[var(--red-primary)] hover:bg-red-50 transition-colors rounded-lg"
                                      style={{ padding: "10px 16px" }}
                                    >
                                      {subChild.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className={cn(
                  "text-sm !py-3.5 !px-8 font-semibold transition-all rounded-none shadow-md",
                  showOpaque
                    ? "btn-primary !rounded-none"
                    : "bg-white text-[var(--red-primary)] hover:bg-gray-100 hover:scale-105"
                )}
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors duration-200",
                showOpaque ? "text-gray-700" : "text-white"
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

      </motion.header>

      {/* ── Mobile Menu ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Slidebar */}
            <motion.div
              data-lenis-prevent
              className="fixed inset-y-0 right-0 w-[290px] sm:w-[320px] h-[100dvh] z-[100] bg-[var(--black)] flex flex-col shadow-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Red accent bar on the left edge */}
              <div className="absolute top-0 left-0 bottom-0 w-1" style={{ background: "linear-gradient(180deg, var(--red-primary), var(--red-deep))" }} />

              <div style={{ paddingLeft: "32px", paddingRight: "32px", paddingTop: "20px", paddingBottom: "20px" }} className="flex items-center justify-between border-b border-white/10 relative z-10 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Mod Men"
                  width={120}
                  height={48}
                  className="h-9 w-auto filter brightness-0 invert"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  style={{ marginRight: "16px" }}
                  className="p-2 text-white/80 hover:text-white transition-colors bg-white/5 rounded-full"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div style={{ paddingLeft: "24px", paddingRight: "24px", paddingTop: "48px", paddingBottom: "24px" }} className="flex flex-col gap-2 flex-1 overflow-y-auto">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  >
                    <div>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-base font-accent font-semibold transition-colors duration-200 relative",
                          pathname === item.href
                            ? "bg-[var(--red-primary)]/10 text-[var(--red-primary)]"
                            : "text-white/80 hover:text-white hover:bg-white/5"
                        )}
                        onClick={(e) => {
                          if (item.children) {
                            e.preventDefault();
                            setActiveDropdown(activeDropdown === item.href ? null : item.href);
                          } else if (pathname === item.href || pathname.startsWith(item.href + "/")) {
                            e.preventDefault();
                            window.location.reload();
                            setMobileOpen(false);
                          } else {
                            setMobileOpen(false);
                          }
                        }}
                      >
                        {item.label}
                        {item.children && (
                          <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", activeDropdown === item.href ? "rotate-180" : "")} />
                        )}
                      </Link>

                      <AnimatePresence>
                        {item.children && activeDropdown === item.href && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-2 mt-4 pt-2">
                              {item.children.map((child: any) => {
                                const Icon = child.label.includes("Furniture") ? Briefcase : Grid;
                                const isChildActive = pathname === child.href;
                                const hasSubChildren = child.children && child.children.length > 0;
                                return (
                                  <div key={child.href}>
                                    <Link
                                      href={child.href}
                                      onClick={(e) => {
                                        if (hasSubChildren) {
                                          e.preventDefault();
                                          setActiveSubDropdown(activeSubDropdown === child.href ? null : child.href);
                                        } else {
                                          setMobileOpen(false);
                                        }
                                      }}
                                      className={cn(
                                        "flex items-center justify-between gap-3 py-2.5 px-3.5 text-sm font-accent font-medium rounded-lg transition-all duration-200 group/item",
                                        isChildActive
                                          ? "text-[var(--red-primary)] bg-[var(--red-primary)]/10"
                                          : "text-white/75 hover:text-white hover:bg-white/10"
                                      )}
                                    >
                                      <div className="flex items-center gap-3">
                                        <Icon className="w-4 h-4 text-white/50 group-hover/item:text-[var(--red-primary)] transition-colors duration-200 flex-shrink-0" />
                                        <span className="whitespace-normal leading-normal">{child.label}</span>
                                      </div>
                                      {hasSubChildren && (
                                        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200 text-white/50", activeSubDropdown === child.href ? "rotate-180" : "")} />
                                      )}
                                    </Link>
                                    <AnimatePresence>
                                      {hasSubChildren && activeSubDropdown === child.href && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: "auto", opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.2 }}
                                          className="overflow-hidden"
                                        >
                                          <div className="flex flex-col gap-1 pl-10 pr-2 pt-1 pb-2">
                                            {child.children.map((subChild: any) => (
                                              <Link
                                                key={subChild.href}
                                                href={subChild.href}
                                                onClick={() => setMobileOpen(false)}
                                                className="py-1.5 text-[13px] font-accent text-white/60 hover:text-white transition-colors"
                                              >
                                                {subChild.label}
                                              </Link>
                                            ))}
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div style={{ paddingBottom: "80px", paddingLeft: "24px", paddingRight: "40px" }} className="shrink-0 mt-auto pt-6 flex flex-col gap-5">
                <Link
                  href="/contact"
                  className="btn-primary text-center justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a Free Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
