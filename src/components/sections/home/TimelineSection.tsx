"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { timeline } from "@/data/index";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

export default function TimelineSection() {
  return (
    <section className="bg-white relative overflow-hidden" style={{ paddingTop: "3.5rem", paddingBottom: "var(--section-padding)" }}>
      {/* Subtle background patterns */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
      <div
        className="absolute -left-48 top-1/3 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: "var(--red-primary)" }}
      />

      <div className="container relative z-10">
        <div className="text-center mb-20">
          <SectionHeader
            label="Our Journey"
            title="The Mod Men"
            titleAccent="Story"
            subtitle="From humble beginnings to becoming one of India's trusted premium furniture studios."
            align="center"
          />
        </div>

        {/* Timeline Container */}
        <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6">
          {/* Vertical Track Line */}
          <div className="absolute left-[22px] lg:left-1/2 lg:-translate-x-1/2 top-2 bottom-2 w-[3px] bg-gray-100 rounded-full" />

          <div className="flex flex-col gap-8">
            {timeline.map((event, i) => {
              const isEven = i % 2 === 0;
              return (
                <AnimatedSection
                  key={event.id}
                  delay={i * 0.08}
                  direction="up"
                  className="w-full"
                >
                  <div className={`relative flex flex-col lg:flex-row items-stretch lg:justify-between group w-full ${isEven ? "lg:flex-row-reverse" : ""}`}>
                    {/* Glowing Timeline Dot */}
                    <div className="absolute left-[11px] lg:left-1/2 lg:-translate-x-1/2 top-[24px] w-6 h-6 rounded-full bg-white border-[3px] border-gray-200 z-10 flex items-center justify-center transition-all duration-300 group-hover:border-[var(--red-primary)] group-hover:scale-125 shadow-sm">
                      <div
                        className="w-2 h-2 rounded-full transition-all duration-300 group-hover:bg-[var(--red-primary)]"
                        style={{
                          background: event.milestone
                            ? "var(--red-primary)"
                            : "var(--gray-300)",
                        }}
                      />
                    </div>

                    {/* Timeline Card */}
                    <div className="w-full lg:w-[calc(50%-2.5rem)] pl-12 lg:pl-0">
                      <motion.div
                        className="relative overflow-hidden bg-white border border-gray-100 rounded-[24px] transition-all duration-300 shadow-sm hover:shadow-xl hover:border-[var(--red-primary)]/20 cursor-default"
                        style={{
                          paddingTop: "2rem",
                          paddingBottom: "2rem",
                          paddingLeft: "2.5rem",
                          paddingRight: "1.5rem",
                        }}
                        whileHover={{ y: -4 }}
                      >
                        {/* Left border highlight on hover */}
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[var(--red-primary)] to-[var(--red-light)] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-l-[24px]" />

                        {/* Large Outline Year in Background */}
                        <span className="absolute -top-4 right-4 text-6xl sm:text-7xl font-accent font-extrabold text-gray-100 select-none pointer-events-none group-hover:text-[var(--red-primary)]/10 transition-colors duration-500 ease-out">
                          {event.year}
                        </span>

                        {/* Content details */}
                        <div className="relative z-10">
                          <span
                            className="text-xs font-accent font-bold tracking-widest uppercase mb-1.5 block"
                            style={{ color: "var(--red-primary)" }}
                          >
                            {event.year}
                          </span>

                          <h4 className="font-display font-bold text-xl text-[var(--black)] mb-3 group-hover:text-[var(--red-primary)] transition-colors duration-200">
                            {event.title}
                          </h4>

                          <p className="text-gray-500 text-sm leading-relaxed">
                            {event.description}
                          </p>

                          {event.milestone && (
                            <span
                              className="inline-block mt-4 px-3 py-1 rounded-full text-[9px] font-accent font-bold tracking-wider uppercase text-white"
                              style={{ background: "linear-gradient(135deg, var(--red-primary), var(--red-deep))" }}
                            >
                              Key Milestone
                            </span>
                          )}
                        </div>
                      </motion.div>
                    </div>

                    {/* Empty spacer on desktop to balance out the width */}
                    <div className="hidden lg:block lg:w-[calc(50%-2.5rem)]" />
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
