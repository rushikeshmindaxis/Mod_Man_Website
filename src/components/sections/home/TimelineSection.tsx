"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { timeline } from "@/data/index";
import SectionHeader from "@/components/ui/SectionHeader";

export default function TimelineSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback(
    (to: number) => {
      setDirection(to > active ? 1 : -1);
      setActive(to);
    },
    [active]
  );

  const prev = useCallback(() => go((active - 1 + timeline.length) % timeline.length), [active, go]);
  const next = useCallback(() => go((active + 1) % timeline.length), [active, go]);

  const event = timeline[active];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section
      className="relative overflow-hidden bg-[var(--gray-50)]"
      style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
    >
      {/* Watermark BG */}
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/timeline_section_bg.png" alt="" fill className="object-cover opacity-[0.1] mix-blend-multiply" priority />
      </div>

      {/* Top glow */}
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full opacity-[0.05] blur-[100px] pointer-events-none"
        style={{ background: "var(--red-primary)" }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionHeader
            label="Our Journey"
            title="The Mod Men"
            titleAccent="Story"
            subtitle="From humble beginnings to becoming one of India's most trusted premium furniture studios."
            align="center"
          />
        </div>

        {/* ─── Slider ─── */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main slide */}
          <div style={{ marginBottom: "32px" }} className="overflow-hidden rounded-[2rem] shadow-2xl shadow-gray-200/80 bg-white border border-gray-100">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={event.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col lg:flex-row min-h-[480px]"
              >
                {/* Image half */}
                <div className="relative lg:w-[55%] h-72 lg:h-auto overflow-hidden shrink-0">
                  {event.image && (
                    <>
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="(max-width:1024px) 100vw, 55vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/30 hidden lg:block" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden" />
                    </>
                  )}

                  {/* Ghost year on image */}
                  <span
                    className="absolute bottom-4 right-4 text-[6rem] font-black font-display leading-none select-none"
                    style={{ color: "white", opacity: 0.08 }}
                  >
                    {event.year}
                  </span>

                  {/* Milestone badge */}
                  {event.milestone && (
                    <span
                      className="absolute top-6 right-6 px-3 py-1 rounded-full text-white text-[10px] font-accent font-bold tracking-widest uppercase"
                      style={{ background: "var(--red-primary)", boxShadow: "0 0 12px rgba(196,30,58,0.6)" }}
                    >
                      ★ Milestone
                    </span>
                  )}
                </div>

                {/* Content half */}
                <div style={{ paddingLeft: "32px", paddingRight: "32px", paddingTop: "48px", paddingBottom: "48px" }} className="flex-1 flex flex-col justify-center items-center text-center relative overflow-hidden">
                  {/* Background chapter number */}
                  <span
                    className="absolute -right-4 -bottom-6 text-[10rem] font-black font-display leading-none select-none pointer-events-none"
                    style={{ color: "rgba(0,0,0,0.03)" }}
                  >
                    {String(active + 1).padStart(2, "0")}
                  </span>

                  {/* Progress bar */}
                  <div className="flex items-center gap-3 mb-8 w-full">
                    <div className="flex-1 h-[3px] rounded-full bg-gray-100 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, var(--red-primary), var(--red-light))" }}
                        initial={{ width: 0 }}
                        animate={{ width: `${((active + 1) / timeline.length) * 100}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </div>
                    <span className="text-xs font-accent font-bold text-gray-400 tabular-nums shrink-0">
                      {String(active + 1).padStart(2, "0")} / {String(timeline.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Year chip */}
                  <span
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-xs font-accent font-bold tracking-[0.15em] uppercase mb-6"
                    style={{ background: "var(--red-primary)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70 inline-block" />
                    {event.year}
                  </span>

                  {/* Title */}
                  <h3 className="font-display font-black text-[var(--black)] text-2xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                    {event.title}
                  </h3>

                  {/* Divider */}
                  <div
                    className="h-[3px] w-14 rounded-full mb-6 mx-auto"
                    style={{ background: "linear-gradient(90deg, var(--red-primary), var(--red-light))" }}
                  />

                  {/* Description */}
                  <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ─── Controls row ─── */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full flex items-center justify-center border border-gray-200 bg-white text-gray-500 hover:border-[var(--red-primary)] hover:text-[var(--red-primary)] hover:shadow-md transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {timeline.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className="transition-all duration-300 rounded-full focus:outline-none"
                  style={{
                    width: i === active ? "28px" : "8px",
                    height: "8px",
                    background: i === active ? "var(--red-primary)" : "#e5e7eb",
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ background: "var(--red-primary)" }}
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* ─── Thumbnail strip ─── */}
          <div
            className="hidden lg:flex items-center justify-center gap-3 overflow-x-auto pb-1"
            style={{ marginTop: "40px" }}
          >
            {timeline.map((item, i) => (
              <button
                key={item.id}
                onClick={() => go(i)}
                className="relative shrink-0 rounded-xl overflow-hidden transition-all duration-300 focus:outline-none"
                style={{
                  width: i === active ? "100px" : "72px",
                  height: "60px",
                  opacity: i === active ? 1 : 0.45,
                  boxShadow: i === active ? "0 0 0 2px var(--red-primary)" : "none",
                }}
                aria-label={item.title}
              >
                {item.image && (
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="100px" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
