"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Star, Award, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const headlines = [
  "Crafting Spaces.",
  "Defining Excellence.",
  "Inspiring Lives.",
];

const images = [
  "/Gemini_Generated_Image_9kk4be9kk4be9kk4-clean.png",
  "/Gemini_Generated_Image_s3rz8vs3rz8vs3rz-clean.png",
  "/Gemini_Generated_Image_waqp2twaqp2twaqp-clean.png",
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Rotate headlines
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Rotate background images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentImageIndex]);

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[500px] sm:min-h-[600px] lg:min-h-0 lg:h-[42.37vw] flex items-center overflow-hidden bg-[var(--black)] pb-[40px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px] 2xl:pb-[120px] mb-12 sm:mb-16 lg:mb-24"
      style={{ isolation: "isolate" }}
    >
      {/* Background Image Slider with Parallax and Crossfade */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ y: bgY }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            <Image
              src={images[currentImageIndex]}
              alt={`Premium Corporate Interior ${currentImageIndex + 1}`}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Main Content (Slides with background) */}
            <motion.div
              className="container relative z-10 w-full flex flex-col items-center justify-center pt-28 lg:pt-32"
              style={{ y: contentY, opacity }}
            >
              <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center w-full">
                {/* Label */}
                <motion.div
                  className="flex items-center justify-center gap-5 mb-8 w-full"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className="w-10 h-px"
                    style={{ background: "linear-gradient(90deg, var(--red-primary), var(--red-light))" }}
                  />
                  <span
                    className="label-text text-center text-sm sm:text-base md:text-lg lg:text-xl font-black tracking-[0.2em] uppercase"
                    style={{ color: "var(--red-primary)", textShadow: "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff" }}
                  >
                    Premium Modular Furniture & Interiors
                  </span>
                  <div
                    className="w-10 h-px"
                    style={{ background: "linear-gradient(90deg, var(--red-light), var(--red-primary))" }}
                  />
                </motion.div>

                {/* Animated Headline */}
                <div className="mb-4 min-h-[150px] sm:min-h-[160px] lg:min-h-[200px] w-full flex flex-col items-center justify-center">
                  <motion.h1
                    className="heading-xl text-white text-center w-full mx-auto flex flex-col items-center justify-center gap-1"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{ textShadow: "0 4px 20px rgba(0, 0, 0, 0.95), 0 2px 8px rgba(0, 0, 0, 0.9)" }}
                  >
                    <span className="w-full text-center block" style={{ textShadow: "0 4px 20px rgba(0, 0, 0, 0.95), 0 2px 8px rgba(0, 0, 0, 0.9)" }}>
                      Precision Craft.
                    </span>
                    <span style={{ color: "var(--red-primary)", textShadow: "0 0 25px rgba(255, 255, 255, 0.95), 0 0 12px rgba(255, 255, 255, 0.9), 0 2px 4px rgba(0, 0, 0, 0.5)" }} className="w-full text-center block">
                      {"Premium Design."}
                    </span>
                    <motion.span
                      key={currentHeadline}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="text-white/95 text-center block w-full mx-auto"
                      style={{ fontStyle: "italic", textShadow: "0 4px 20px rgba(0,0,0,0.95), 0 2px 8px rgba(0,0,0,0.9)" }}
                    >
                      {headlines[currentHeadline]}
                    </motion.span>
                  </motion.h1>
                </div>

                {/* Slide Indicators (Centered below heading) */}
                <div className="flex justify-center gap-3 mt-12 sm:mt-16 lg:mt-20 z-20">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={cn(
                        "h-2 transition-all duration-300 rounded-full cursor-pointer",
                        index === currentImageIndex
                          ? "w-10 bg-[var(--red-primary)]"
                          : "w-2.5 bg-white/40 hover:bg-white/70"
                      )}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

    </section>
  );
}
