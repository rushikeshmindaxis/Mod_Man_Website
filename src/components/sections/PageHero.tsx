"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  titleAccent?: string;
  subtitle?: string;
  breadcrumbLabel: string;
  label?: string;
  className?: string;
  backgroundImage?: string;
}

export default function PageHero({
  title,
  titleAccent,
  subtitle,
  breadcrumbLabel,
  label,
  className = "",
  backgroundImage,
}: PageHeroProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      className={cn(
        "relative flex items-center overflow-hidden",
        !backgroundImage && "bg-[var(--black)]",
        className
      )}
      style={{
        paddingTop: isMobile ? "140px" : "180px",
        paddingBottom: isMobile ? "60px" : "80px",
        minHeight: isMobile ? "440px" : "520px",
      }}
    >
      {/* ── Background image (when provided) ── */}
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt="Hero background"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              zIndex: 0,
            }}
          />
          {/* Dark gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background:
                "linear-gradient(to bottom, rgba(5,5,15,0.75) 0%, rgba(5,5,15,0.55) 50%, rgba(5,5,15,0.82) 100%)",
            }}
          />
          {/* Red accent tint */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              pointerEvents: "none",
              background:
                "radial-gradient(ellipse at 10% 50%, rgba(196,30,58,0.20) 0%, transparent 55%)",
            }}
          />
        </>
      )}

      {/* ── Plain dark background decorations (no image) ── */}
      {!backgroundImage && (
        <>
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, var(--red-primary) 0%, transparent 60%), radial-gradient(circle at 20% 80%, var(--red-deep) 0%, transparent 50%)",
            }}
          />
          <div className="absolute top-1/3 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-red-500/20 to-transparent pointer-events-none" />
        </>
      )}

      {/* Bottom separator */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          zIndex: 5,
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
          pointerEvents: "none",
        }}
      />

      {/* ── Content ── */}
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center"
        style={{ position: "relative", zIndex: 10 }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.modmen.in",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: breadcrumbLabel,
                },
              ],
            }),
          }}
        />

        {/* Breadcrumb - Left Aligned */}
        <div className="w-full mb-8 hidden md:flex justify-start text-left">
          <Breadcrumb items={[{ label: breadcrumbLabel }]} dark />
        </div>

        {/* Text block */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

          <AnimatedSection delay={0.1}>
            <h1 className="heading-xl text-white mb-5 leading-tight text-center">
              {title}
              {titleAccent && (
                <span className="gradient-text"> {titleAccent}</span>
              )}
            </h1>
          </AnimatedSection>

          {subtitle && (
            <AnimatedSection delay={0.2}>
              <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-3xl text-center mx-auto">
                {subtitle}
              </p>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  );
}
