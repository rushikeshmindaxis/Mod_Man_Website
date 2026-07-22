"use client";

import { motion } from "framer-motion";
import { process } from "@/data/index";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  MessageSquare, PenTool, Hammer, CheckCircle, Truck, Wrench,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  MessageSquare, PenTool, Hammer, CheckCircle, Truck, Wrench,
};

export default function OurProcess() {
  return (
    <section
      className="bg-[var(--black)] relative overflow-hidden"
      style={{
        paddingTop: "4rem",
        paddingBottom: "4rem",
      }}
    >
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center" style={{ marginBottom: "5rem" }}>
          <SectionHeader
            label="Our Process"
            title="From Vision to"
            titleAccent="Reality"
            subtitle="A streamlined, transparent process designed to deliver perfection at every stage."
            align="center"
            dark
          />
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative mt-6">
          {/* Connecting line */}
          <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div
            className="absolute top-16 left-0 h-px"
            style={{
              width: "100%",
              background: "linear-gradient(90deg, var(--red-primary), var(--red-deep) 50%, transparent)",
            }}
          />

          <div className="grid grid-cols-6 gap-4">
            {process.map((step, i) => {
              const Icon = iconMap[step.icon] ?? MessageSquare;
              return (
                <AnimatedSection key={step.id} delay={i * 0.1}>
                  <div className="flex flex-col items-center text-center group">
                    {/* Step number + Icon */}
                    <motion.div
                      className="relative mb-6 w-16 h-16 mx-auto !overflow-visible"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Glow */}
                      <div
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500"
                        style={{ background: "var(--red-primary)" }}
                      />
                      {/* Icon ring */}
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center relative z-10 border-2 border-white/10 group-hover:border-[var(--red-primary)] transition-colors duration-500"
                        style={{ background: "var(--black-card)" }}
                      >
                        <Icon className="w-6 h-6 text-white/60 group-hover:text-[var(--red-light)] transition-colors duration-300" />
                      </div>
                      {/* Step number */}
                      <div
                        className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-extrabold font-sans border border-black/50 shadow-sm p-0 m-0 leading-none z-20"
                        style={{
                          background: "linear-gradient(135deg, var(--red-primary), var(--red-deep))",
                        }}
                      >
                        {step.step}
                      </div>
                    </motion.div>

                    <h4 className="font-accent font-semibold text-white mb-2 group-hover:text-[var(--red-light)] transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="lg:hidden flex flex-col gap-12 relative mt-6">
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--red-primary)] via-[var(--red-deep)] to-[var(--red-primary)] opacity-80" />

          {process.map((step, i) => {
            const Icon = iconMap[step.icon] ?? MessageSquare;
            return (
              <AnimatedSection key={step.id} delay={i * 0.1}>
                <div className="flex gap-6 relative">
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center border border-white/10"
                      style={{ background: "var(--black-card)" }}
                    >
                      <span style={{ color: "var(--red-light)" }}>
                        <Icon className="w-6 h-6" />
                      </span>
                    </div>
                    <div
                      className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-extrabold font-sans border border-black/50 shadow-sm p-0 m-0 leading-none z-20"
                      style={{ background: "var(--red-primary)" }}
                    >
                      {step.step}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="pt-3">
                    <h4 className="font-accent font-semibold text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-base text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
