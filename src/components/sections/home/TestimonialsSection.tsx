"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { industries } from "@/data/index";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  Home, Building2, Hotel, ShoppingBag, Heart, GraduationCap, UtensilsCrossed, Factory
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Home, Building2, Hotel, ShoppingBag, Heart, GraduationCap, UtensilsCrossed, Factory,
};

/* ─────────────────────────────────────────────
   Industries Section
───────────────────────────────────────────── */
function IndustryCard({ industry, keyPrefix }: { industry: (typeof industries)[0]; keyPrefix: string }) {
  const Icon = iconMap[industry.icon] ?? Home;
  return (
    <div
      key={keyPrefix}
      className="relative flex-shrink-0 w-[84vw] max-w-[320px] sm:w-[440px] h-[250px] sm:h-[300px] rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 snap-center select-none"
    >
      <img
        src={industry.image}
        alt={industry.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
        draggable={false}
      />
      {/* Dark overlay for full-card readability */}
      <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition-colors duration-300 z-10" />

      {/* Centered content layout with responsive sizes */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-5 sm:p-6 z-20">
        {/* Large icon frame */}
        <div
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center flex-shrink-0 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110 shadow-md"
          style={{ background: "var(--red-primary)" }}
        >
          <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" />
        </div>

        {/* Large name and description */}
        <p className="text-white font-accent font-bold text-lg sm:text-2xl mb-1 sm:mb-1.5 tracking-wide text-center w-full" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
          {industry.name}
        </p>
        <p className="text-white/85 text-xs sm:text-sm font-accent max-w-[260px] sm:max-w-[280px] text-center w-full mx-auto" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>
          {industry.description}
        </p>
      </div>
    </div>
  );
}

export function IndustriesSection() {
  return (
    <section
      className="bg-gray-50/50 relative overflow-hidden"
      style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-[0.03] pointer-events-none blur-3xl"
        style={{ background: "var(--red-primary)" }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-[0.02] pointer-events-none blur-3xl"
        style={{ background: "var(--red-primary)" }}
      />

      {/* Header */}
      <div className="container relative z-10 text-center mb-10 sm:mb-14 px-4">
        <SectionHeader
          label="Industries We Serve"
          title="Trusted Across"
          titleAccent="Every Sector"
          subtitle="Our expertise spans residential, commercial, and institutional spaces."
          align="center"
        />
      </div>

      {/* Mobile View — Horizontal Touch Swipeable Slider */}
      <div className="block md:hidden relative px-2">
        <div
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none touch-pan-x px-4 pb-4 pt-1 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {industries.map((industry, i) => (
            <IndustryCard key={`mob-${industry.id}-${i}`} industry={industry} keyPrefix={`mob-${i}`} />
          ))}
        </div>
        {/* Mobile Swipe Hint */}
        <div className="flex items-center justify-center gap-2 mt-2 text-xs text-gray-500 font-accent">
          <span>Swipe to explore industries</span>
          <span className="inline-block animate-bounce-x font-bold text-[var(--red-primary)]">→</span>
        </div>
      </div>

      {/* Desktop View Row — Infinite Marquee */}
      <div className="hidden md:block relative overflow-hidden">
        <div className="flex gap-5 animate-marquee whitespace-nowrap hover:[animation-play-state:paused]" style={{ animationDuration: "14s" }}>
          {[...industries, ...industries].map((industry, i) => (
            <IndustryCard key={`r1-${industry.id}-${i}`} industry={industry} keyPrefix={`r1-${i}`} />
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50/50 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50/50 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}


/* ─────────────────────────────────────────────
   Testimonials Section
───────────────────────────────────────────── */
export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1, stars: 5, initial: "A",
      name: "A J Johnson", role: "Dinex India, Sanaswadi",
      color: "from-[#c41e3a] to-[#7f1d1d]",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&q=80",
      quote: "Mod Men supplied and installed premium modular workstations at our facility with total professionalism and proactive management.",
    },
    {
      id: 2, stars: 5, initial: "M",
      name: "Manab Raychaudhuri", role: "Project Engineer, ESG BARC",
      color: "from-[#1d4ed8] to-[#1e3a8a]",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&q=80",
      quote: "Their proactive communication and passion for workspace engineering helped us achieve compliance and boost productivity.",
    },
    {
      id: 3, stars: 5, initial: "R",
      name: "Raju Jaggoji", role: "SKH M India Pvt Ltd",
      color: "from-[#059669] to-[#064e3b]",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&q=80",
      quote: "Mod Men is a reliable modular office furniture provider. Their dedication to quality and sustainability sets them apart.",
    },
  ];

  const [active, setActive] = React.useState(0);
  const [dir, setDir] = React.useState(1);

  const go = React.useCallback((to: number) => {
    setDir(to > active ? 1 : -1);
    setActive(to);
  }, [active]);

  const t = testimonials[active];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <section className="relative bg-white overflow-hidden" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
      {/* Top accent */}
      <div className="absolute top-0 inset-x-0 h-[3px]" style={{ background: "linear-gradient(90deg, transparent, var(--red-primary), transparent)" }} />
      {/* Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[100px] pointer-events-none" style={{ background: "var(--red-primary)" }} />

      {/* ── Outer container — full width, centered content ── */}
      <div className="relative z-10 flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-14 w-full max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase font-bold px-5 py-1.5 rounded-full mb-4 border"
            style={{ color: "var(--red-primary)", borderColor: "rgba(196,30,58,0.2)", background: "rgba(196,30,58,0.05)" }}>
            Client Success Stories
          </span>
          <h2 className="font-display font-bold text-[var(--black)] mt-3 mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            What Our <span style={{ color: "var(--red-primary)" }}>Clients</span> Say
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mx-auto" style={{ maxWidth: "420px" }}>
            Trusted by businesses across India for premium modular workspace solutions.
          </p>
        </motion.div>

        {/* ── Slider card + controls — both centered, same width ── */}
        <div className="w-full" style={{ maxWidth: "768px" }}>

          {/* Card */}
          <div className="w-full rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/60 bg-white" style={{ minHeight: "400px" }}>
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={t.id}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row w-full"
                style={{ minHeight: "400px" }}
              >
                {/* LEFT — avatar */}
                <div className={`relative sm:w-[260px] shrink-0 flex flex-col items-center justify-center py-12 px-8 m-4 rounded-2xl bg-gradient-to-br ${t.color}`}>
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white/30 flex items-center justify-center shadow-2xl mb-5 relative">
                    <img src={t.image} alt={t.name} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <h4 className="text-white font-display font-bold text-lg text-center leading-tight mb-1">{t.name}</h4>
                  <p className="text-white/70 text-sm text-center">{t.role}</p>
                  {/* Decorative */}
                  <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/5 border border-white/10" />
                  <div className="absolute bottom-6 left-3 w-8 h-8 rounded-full bg-white/5 border border-white/10" />
                </div>

                {/* RIGHT — quote */}
                <div className="flex-1 flex flex-col items-center justify-center text-center px-8 py-10 relative overflow-hidden">
                  {/* Ghost quote */}
                  <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[9rem] font-display leading-none select-none pointer-events-none"
                    style={{ color: "rgba(0,0,0,0.04)", fontStyle: "italic" }}>
                    &ldquo;
                  </span>
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6 relative z-10">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} size={20} style={{ fill: "#fbbf24", color: "#fbbf24", strokeWidth: 0 }} />
                    ))}
                  </div>
                  {/* Quote */}
                  <blockquote className="relative z-10 text-[var(--black)] text-lg sm:text-xl font-display font-medium leading-relaxed mb-8 italic text-center">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  {/* Accent bar */}
                  <div className="w-10 h-[3px] rounded-full mb-6 mx-auto" style={{ background: "linear-gradient(90deg, var(--red-primary), var(--red-light))" }} />

                  {/* Counter */}
                  <p className="text-gray-400 text-xs font-accent tracking-widest uppercase">
                    {String(active + 1).padStart(2, "0")} of {String(testimonials.length).padStart(2, "0")}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div 
            className="flex items-center justify-between px-1"
            style={{ marginTop: "40px" }}
          >
            {/* Avatar Thumbnails (replacing simple dots) */}
            <div className="flex items-center gap-3">
              {testimonials.map((item, i) => (
                <button key={item.id} onClick={() => go(i)} aria-label={item.name}
                  className="w-10 h-10 rounded-full overflow-hidden transition-all duration-300 relative focus:outline-none hover:opacity-100"
                  style={{
                    transform: i === active ? "scale(1.15)" : "scale(0.85)",
                    opacity: i === active ? 1 : 0.45,
                    boxShadow: i === active ? "0 0 0 2px var(--red-primary), 0 4px 10px rgba(196,30,58,0.25)" : "none"
                  }}
                >
                  <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
                </button>
              ))}
            </div>
            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button onClick={() => go((active - 1 + testimonials.length) % testimonials.length)}
                className="w-11 h-11 rounded-full flex items-center justify-center border border-gray-200 bg-white text-gray-500 hover:border-[var(--red-primary)] hover:text-[var(--red-primary)] hover:shadow-md transition-all duration-300"
                aria-label="Previous">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={() => go((active + 1) % testimonials.length)}
                className="w-11 h-11 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                style={{ background: "var(--red-primary)" }} aria-label="Next">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
        {/* end max-w wrapper */}

      </div>
      {/* end outer container */}

    </section>
  );
}

