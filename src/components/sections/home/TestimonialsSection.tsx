"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { industries } from "@/data/index";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import {
  Home, Building2, Hotel, ShoppingBag, Heart, GraduationCap, UtensilsCrossed, Factory
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
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
      initial: "A",
      name: "A J Johnson",
      role: "Dinex India, Sanaswadi",
      quote:
        "Mod Men supplied and installed premium modular workstations at our facility with total professionalism and proactive management.",
    },
    {
      id: 2,
      stars: 5,
      initial: "M",
      name: "Manab Raychaudhuri",
      role: "Project Engineer, ESG BARC",
      quote:
        "Their proactive communication and passion for workspace engineering helped us achieve compliance and boost productivity.",
    },
    {
      id: 3,
      stars: 5,
      initial: "R",
      name: "Raju Jaggoji",
      role: "SKH M India Pvt Ltd",
      quote:
        "Mod Men is a reliable modular office furniture provider. Their dedication to quality and sustainability sets them apart.",
    },
  ];

  return (
    <section
      style={{
        background: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glows - adjusted for white background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "25%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,30,58,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: "20%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,30,58,0.02) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, transparent, var(--red-primary), transparent)",
        }}
      />

      {/* ── Content ── */}
      <div
        className="relative z-10 w-full max-w-[1400px] mx-auto"
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "64px",
          paddingBottom: "64px",
        }}
      >
        {/* Header */}
        <motion.div
          style={{ textAlign: "center", marginBottom: "72px" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <span
            style={{
              display: "inline-block",
              fontSize: "11px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "var(--red-primary)",
              border: "1px solid rgba(196,30,58,0.2)",
              background: "rgba(196,30,58,0.05)",
              padding: "6px 18px",
              borderRadius: "9999px",
              marginBottom: "16px",
            }}
          >
            Client Success Stories
          </span>

          {/* Heading */}
          <h2
            style={{
              fontSize: "clamp(38px, 5vw, 62px)",
              fontWeight: 700,
              color: "var(--black)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginTop: "12px",
              marginBottom: "16px",
            }}
          >
            What Our{" "}
            <span style={{ color: "var(--red-primary)" }}>Clients</span>{" "}
            Say
          </h2>

          {/* Subtitle */}
          <p
            style={{
              color: "var(--gray-600)",
              fontSize: "16px",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Trusted by businesses across India for premium modular workspace solutions.
          </p>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginTop: "24px",
            }}
          >
            <div style={{ width: "48px", height: "1px", background: "var(--red-primary)", opacity: 0.4 }} />
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--red-primary)" }} />
            <div style={{ width: "48px", height: "1px", background: "var(--red-primary)", opacity: 0.4 }} />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 items-stretch">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.015 }}
              className="group flex flex-col items-center text-center rounded-3xl p-8 sm:p-10 lg:p-12 min-h-[380px] sm:min-h-[420px] bg-white border border-black/[0.07] shadow-[0_12px_36px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden cursor-default"
            >
              {/* Hover top glow */}
              <div
                className="absolute top-0 left-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  height: "3px",
                  borderRadius: "9999px",
                  background: "var(--red-primary)",
                }}
              />

              {/* Decorative quote */}
              <span
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "50%",
                  transform: "translateX(50%)",
                  fontSize: "140px",
                  lineHeight: 1,
                  color: "rgba(0,0,0,0.035)",
                  fontStyle: "italic",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                &ldquo;
              </span>

              {/* Middle Section: Stars & Quote vertically centered */}
              <div className="flex-grow flex flex-col items-center justify-center my-auto py-2 w-full relative z-10">
                {/* Stars (Centered) */}
                <div className="flex justify-center gap-2 mb-4">
                  {[...Array(t.stars)].map((_, si) => (
                    <Star
                      key={si}
                      size={22}
                      style={{ fill: "#fbbf24", color: "#fbbf24", strokeWidth: 0 }}
                    />
                  ))}
                </div>

                {/* Quote / Description (Centered & generous) */}
                <p
                  style={{ textAlign: "center", width: "100%" }}
                  className="text-center text-base sm:text-lg leading-relaxed text-[var(--gray-600)] italic max-w-[400px] mx-auto"
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author (Centered layout) */}
              <div className="flex flex-col items-center justify-center text-center w-full pt-6 border-t border-black/[0.08] mt-auto relative z-10">
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "50%",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, var(--red-primary), var(--red-deep, #7f1d1d))",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "20px",
                    marginBottom: "10px",
                    boxShadow: "0 4px 12px rgba(196,30,58,0.25)",
                  }}
                >
                  {t.initial}
                </div>
                <div className="text-center flex flex-col items-center">
                  <h4
                    style={{
                      color: "var(--black)",
                      fontSize: "17px",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      margin: 0,
                      textAlign: "center",
                    }}
                  >
                    {t.name}
                  </h4>
                  <p
                    style={{
                      color: "var(--red-primary)",
                      fontSize: "13px",
                      fontWeight: 500,
                      marginTop: "4px",
                      textAlign: "center",
                    }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "56px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                borderRadius: "9999px",
                height: "8px",
                width: i === 1 ? "28px" : "8px",
                background: i === 1 ? "var(--red-primary)" : "rgba(0,0,0,0.15)",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
