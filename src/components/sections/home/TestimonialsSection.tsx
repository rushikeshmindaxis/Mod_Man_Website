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
      id: 1,
      stars: 5,
      name: "A J Johnson",
      role: "Dinex India, Sanaswadi",
      color: "from-[#c41e3a] via-[#a0182e] to-[#7f1d1d]",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      quote: "Mod Men supplied and installed premium modular workstations at our facility with total professionalism and proactive management.",
    },
    {
      id: 2,
      stars: 5,
      name: "Manab Raychaudhuri",
      role: "Project Engineer, ESG BARC",
      color: "from-[#c41e3a] via-[#8b0000] to-[#590000]",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
      quote: "Their proactive communication and passion for workspace engineering helped us achieve compliance and boost productivity.",
    },
    {
      id: 3,
      stars: 5,
      name: "Raju Jaggoji",
      role: "SKH M India Pvt Ltd",
      color: "from-[#b91c1c] via-[#991b1b] to-[#7f1d1d]",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
      quote: "Mod Men is a reliable modular office furniture provider. Their dedication to quality and sustainability sets them apart.",
    },
  ];

  const [active, setActive] = React.useState(0);
  const [dir, setDir] = React.useState(1);

  const go = React.useCallback((to: number) => {
    setDir(to > active ? 1 : -1);
    setActive(to);
  }, [active]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDir(1);
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(timer);
  }, [active, testimonials.length]);

  const t = testimonials[active];

  return (
    <section className="section-padding bg-gray-50/40 relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-stretch max-w-6xl mx-auto min-h-[500px] sm:min-h-[580px] lg:min-h-[620px]">
          {/* ── Left Side: Full Image Card (No Red BG, Full Height & Width Image) ── */}
          <div className="w-full lg:w-5/12 relative h-[400px] sm:h-96 lg:min-h-[600px] lg:h-full self-stretch rounded-3xl shadow-xl border border-gray-100 overflow-hidden select-none bg-gray-900 shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Image fills 100% width & 100% height of the card with top alignment */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover object-top"
                />
                {/* Bottom gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Client Name & Role overlaid at bottom */}
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-10">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1 leading-tight" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
                    {t.name}
                  </h3>
                  <p className="text-white/80 font-accent text-sm sm:text-base tracking-wide" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>
                    {t.role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            style={{ paddingLeft: "32px", paddingRight: "32px", paddingTop: "40px", paddingBottom: "40px" }}
            className="w-full lg:w-7/12 bg-white rounded-3xl border border-gray-100 shadow-md flex flex-col justify-between relative z-10 overflow-hidden cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={(e, { offset }) => {
              const swipe = offset.x;
              const threshold = 50;
              if (swipe < -threshold) {
                go((active + 1) % testimonials.length);
              } else if (swipe > threshold) {
                go((active - 1 + testimonials.length) % testimonials.length);
              }
            }}
          >
            <div className="flex flex-col justify-between h-full w-full">
              {/* Section Header */}
              <SectionHeader
                label="Client Success Stories"
                title="What Our"
                titleAccent="Clients Say"
                subtitle="Trusted by businesses across India for premium modular workspace solutions."
                className="!gap-4 mb-6 lg:mb-8"
              />

              {/* Review Quote Block */}
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-5 mt-8 mb-10 py-2"
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1.5">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} size={22} className="fill-[#fbbf24] text-[#fbbf24]" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <blockquote className="text-xl sm:text-2xl font-display font-medium text-gray-900 leading-relaxed italic pr-2">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Navigation & Controls */}
              <div style={{ paddingTop: "32px", marginTop: "32px" }} className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-6 border-t border-gray-100">
                {/* Thumbnails & Counter */}
                <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6 shrink-0 w-full sm:w-auto">
                  <span style={{ marginRight: "16px" }} className="text-xs font-accent text-gray-400 font-bold uppercase tracking-widest shrink-0">
                    0{active + 1} / 0{testimonials.length}
                  </span>
                  <div className="flex items-center gap-2">
                    {testimonials.map((item, i) => (
                      <button
                        key={item.id}
                        onClick={() => go(i)}
                        aria-label={item.name}
                        className={`w-9 h-9 rounded-full overflow-hidden transition-all duration-300 relative focus:outline-none ${
                          i === active
                            ? "scale-110 ring-2 ring-[var(--red-primary)] ring-offset-2 opacity-100"
                            : "opacity-40 hover:opacity-80"
                        }`}
                      >
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center justify-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => go((active - 1 + testimonials.length) % testimonials.length)}
                    className="w-11 h-11 rounded-full flex items-center justify-center border border-gray-200 bg-white text-gray-600 hover:border-[var(--red-primary)] hover:text-[var(--red-primary)] hover:shadow-md transition-all duration-300"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => go((active + 1) % testimonials.length)}
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                    style={{ background: "var(--red-primary)" }}
                    aria-label="Next"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

