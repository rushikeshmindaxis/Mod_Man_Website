"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Tag } from "lucide-react";
import { getFeaturedProducts, productCategories } from "@/data/products";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";

const featured = getFeaturedProducts();

export default function FeaturedProductsSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + featured.length) % featured.length);
  };

  const getCategoryName = (slug: string) =>
    productCategories.find((c) => c.slug === slug)?.name ?? slug;

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-14">
          <SectionHeader
            label="Featured Products"
            title="Signature"
            titleAccent="Collections"
            subtitle="A curated selection from our premium product lines."
          />
          <div className="flex items-center gap-3">
            <button
              onClick={() => paginate(-1)}
              className="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center hover:border-[var(--red-primary)] hover:text-[var(--red-primary)] transition-all duration-200 group"
              aria-label="Previous product"
            >
              <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
            <span className="text-sm font-accent text-gray-400">
              {String(current + 1).padStart(2, "0")} / {String(featured.length).padStart(2, "0")}
            </span>
            <button
              onClick={() => paginate(1)}
              className="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center hover:border-[var(--red-primary)] hover:text-[var(--red-primary)] transition-all duration-200 group"
              aria-label="Next product"
            >
              <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
            <Link href="/products" className="btn-primary ml-4">
              All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden rounded-3xl bg-[var(--gray-50)] min-h-[720px] sm:min-h-[680px] lg:min-h-[500px]">
          <AnimatePresence mode="wait" custom={direction}>
            {featured.map(
              (product, i) =>
                i === current && (
                  <motion.div
                    key={product.id}
                    custom={direction}
                    variants={{
                      enter: (d: number) => ({ x: d * 80, opacity: 0 }),
                      center: { x: 0, opacity: 1 },
                      exit: (d: number) => ({ x: d * -80, opacity: 0 }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2"
                  >
                    {/* Image */}
                    <div className="relative h-64 sm:h-80 lg:h-auto overflow-hidden rounded-2xl m-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className="px-3 py-1.5 rounded-lg text-xs font-accent font-semibold text-white"
                          style={{
                            background: "linear-gradient(135deg, var(--red-primary), var(--red-deep))",
                          }}
                        >
                          {getCategoryName(product.category)}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-8 lg:p-12">
                      <div className="flex items-center gap-2 mb-4">
                        <span style={{ color: "var(--red-primary)" }}><Tag className="w-3.5 h-3.5" /></span>
                        <span className="label-text">
                          {getCategoryName(product.category)}
                        </span>
                      </div>

                      <h3 className="heading-md text-[var(--black)] mb-4">
                        {product.name}
                      </h3>

                      <p className="text-gray-500 leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {product.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-lg text-xs font-accent font-medium bg-gray-100 text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/products/${product.slug}`}
                        className="btn-primary self-start"
                      >
                        View Details <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {featured.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-[var(--red-primary)]" : "w-1.5 bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All products grid hint */}
        <AnimatedSection delay={0.2}>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {featured.map((product, i) => (
              <button
                key={product.id}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`relative overflow-hidden rounded-xl aspect-video cursor-pointer transition-all duration-300 ${
                  i === current
                    ? "ring-2 ring-offset-2 ring-[var(--red-primary)]"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </button>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
