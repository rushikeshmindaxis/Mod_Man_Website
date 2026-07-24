"use client";

import { motion } from "framer-motion";
import { stats, trustedBy } from "@/data/index";
import Counter from "@/components/ui/Counter";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

export default function TrustedBySection() {
  return (
    <section className="relative z-20 bg-transparent py-0 overflow-visible w-full">
      <div className="container max-w-[1300px] px-8 sm:px-12 md:px-16 mx-auto">
        {/* Floating Card Showcase overlapping the hero section */}
        <div
          style={{ paddingTop: "48px", paddingBottom: "48px" }}
          className="relative z-20 mt-[-40px] md:mt-[-50px] bg-white border border-gray-100 rounded-3xl px-8 sm:px-12 md:px-20 shadow-[0_15px_45px_-10px_rgba(0,0,0,0.08),_0_8px_20px_-6px_rgba(0,0,0,0.04)] overflow-hidden md:!pb-[64px]"
        >
          
          <AnimatedSection>
            <div style={{ marginBottom: "48px" }} className="flex justify-center">
              <p className="label-text text-center text-black font-accent font-extrabold uppercase text-lg sm:text-xl md:text-2xl tracking-widest whitespace-nowrap">
                Our Clients
              </p>
            </div>
          </AnimatedSection>

          {/* Marquee */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 md:gap-10 animate-marquee whitespace-nowrap">
              {[...trustedBy, ...trustedBy].map((client, i) => (
                <div
                  key={`${client.id}-${i}`}
                  className="flex items-stretch bg-[var(--red-primary)] rounded-none border border-[var(--red-deep)] h-20 flex-shrink-0 hover:bg-[var(--red-deep)] transition-all duration-300 overflow-hidden"
                >
                  <div
                    className="w-16 bg-white text-[var(--red-primary)] text-xl font-bold font-accent flex items-center justify-center flex-shrink-0 border-r border-[var(--red-deep)]"
                  >
                    {client.name.charAt(0)}
                  </div>
                  <div style={{ paddingLeft: "24px", paddingRight: "32px" }} className="flex flex-col justify-center flex-shrink-0">
                    <p className="text-base font-accent font-bold text-white whitespace-nowrap tracking-wide">
                      {client.name}
                    </p>
                    <p className="text-xs text-white/85 font-accent mt-1">{client.sector}</p>
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
