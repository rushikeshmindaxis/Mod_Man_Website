"use client";

import { motion } from "framer-motion";
import { stats, trustedBy } from "@/data/index";
import Counter from "@/components/ui/Counter";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

export default function TrustedBySection() {
  return (
    <section className="relative z-20 bg-transparent py-0 overflow-visible w-full">
      <div className="container max-w-[1300px] px-4 mx-auto">
        {/* Floating Card Showcase overlapping the hero section */}
        <div className="relative z-20 mt-[-40px] md:mt-[-50px] bg-white border border-gray-100 rounded-3xl p-4 sm:p-6 md:p-8 shadow-[0_15px_45px_-10px_rgba(0,0,0,0.08),_0_8px_20px_-6px_rgba(0,0,0,0.04)] overflow-hidden">
          
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-gray-150" />
              <p className="label-text text-center text-gray-500 font-accent font-bold uppercase text-[10px] tracking-wider whitespace-nowrap">
                Trusted By Leading Brands
              </p>
              <div className="flex-1 h-px bg-gray-150" />
            </div>
          </AnimatedSection>

          {/* Marquee */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 md:gap-10 animate-marquee whitespace-nowrap">
              {[...trustedBy, ...trustedBy].map((client, i) => (
                <div
                  key={`${client.id}-${i}`}
                  className="flex items-center gap-4 bg-gray-50/50 rounded-2xl px-6 py-[14px] border border-gray-100 flex-shrink-0 hover:border-[var(--red-primary)]/20 hover:bg-white hover:shadow-sm transition-all duration-300"
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold font-accent flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, var(--red-primary), var(--red-deep))" }}
                  >
                    {client.name.charAt(0)}
                  </div>
                  <div className="flex-shrink-0">
                    <p className="text-sm font-accent font-bold text-gray-800 whitespace-nowrap tracking-wide">
                      {client.name}
                    </p>
                    <p className="text-[10px] text-gray-400 font-accent mt-0.5">{client.sector}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Fade edges to match the white card background */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section
      className="bg-[var(--black)] relative overflow-hidden"
      style={{
        paddingTop: "6rem",
        paddingBottom: "0px",
      }}
    >
      {/* Glow Effect */}
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 pointer-events-none blur-3xl"
        style={{ background: "var(--red-primary)" }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-5 pointer-events-none blur-3xl"
        style={{ background: "var(--red-primary)" }}
      />

      <div className="container relative z-10">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center pb-20 border-b border-white/10">
          {stats.map((stat) => (
            <StaggerItem key={stat.id}>
              <div className="flex flex-col items-center">
                <span className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-2 tracking-tight flex items-baseline justify-center">
                  <Counter end={stat.value} duration={2.5} />
                  <span style={{ color: "var(--red-primary)" }}>+</span>
                </span>
                <span className="text-gray-400 font-accent font-semibold text-xs tracking-widest uppercase">
                  {stat.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
