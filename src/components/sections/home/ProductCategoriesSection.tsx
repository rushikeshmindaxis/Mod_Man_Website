"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { productCategories } from "@/data/products";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

export default function ProductCategoriesSection() {
  return (
    <section className="section-padding bg-[var(--gray-50)] relative overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-14">
          <SectionHeader
            label="Product Categories"
            title="Everything Your"
            titleAccent="Space Needs"
            subtitle="Eight comprehensive product lines crafted to perfection."
          />
          <Link
            href="/products"
            className="btn-ghost whitespace-nowrap flex-shrink-0"
          >
            All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {productCategories.map((category, i) => (
            <StaggerItem key={category.slug}>
              <Link href={`/products?category=${category.slug}`}>
                <motion.div
                  className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Image */}
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                    style={{ background: "var(--red-deep)" }}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <p className="text-white font-accent font-semibold text-sm mb-1 group-hover:text-red-300 transition-colors duration-300">
                      {category.name}
                    </p>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <span className="text-white/70 text-xs font-accent">Explore</span>
                      <ArrowRight className="w-3 h-3 text-white/70" />
                    </div>
                  </div>

                  {/* Category number */}
                  <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <span className="text-white text-xs font-accent font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
