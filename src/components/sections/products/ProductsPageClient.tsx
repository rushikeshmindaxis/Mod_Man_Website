"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Filter } from "lucide-react";
import { products, productCategories } from "@/data/products";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import PageHero from "@/components/sections/PageHero";
import { useSearchParams } from "next/navigation";

function ProductsPageContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState("all");

  // Sync active category with URL search param
  useEffect(() => {
    if (categoryParam && productCategories.some((cat) => cat.slug === categoryParam)) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory("all");
    }
  }, [categoryParam]);

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const getCategoryName = (slug: string) =>
    productCategories.find((c) => c.slug === slug)?.name ?? slug;

  return (
    <>
      <PageHero
        title="Premium Furniture"
        titleAccent="Collections"
        subtitle="Explore our comprehensive range of modular furniture and interior solutions, crafted to perfection."
        breadcrumbLabel="Products"
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
      />

      {/* Category Filter + Products */}
      <section className="section-padding bg-[var(--gray-50)]">
        <div className="container">
          {/* Category Filter Cards */}
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {productCategories.map((cat) => {
                const count = products.filter((p) => p.category === cat.slug).length;
                const isActive = activeCategory === cat.slug;
                return (
                  <button
                    key={cat.slug}
                    onClick={() => setActiveCategory(cat.slug)}
                    className={`relative overflow-hidden group rounded-2xl border transition-all duration-300 p-8 md:p-12 flex flex-col items-center justify-center text-center ${
                      isActive
                        ? "border-[var(--red-primary)] bg-[var(--red-primary)]/5 shadow-md"
                        : "border-gray-200 bg-white hover:border-[var(--red-primary)]/40 hover:bg-gray-50 hover:shadow-lg"
                    }`}
                  >
                    <div className="relative z-10 flex flex-col items-center">
                      <h3 className={`text-2xl sm:text-3xl font-bold font-display mb-3 transition-colors duration-300 ${
                        isActive ? "text-[var(--red-primary)]" : "text-gray-900 group-hover:text-[var(--red-primary)]"
                      }`}>
                        {cat.name}
                      </h3>
                      <span className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-accent font-semibold tracking-wider uppercase transition-colors ${
                        isActive ? "bg-[var(--red-primary)] text-white" : "bg-gray-100 text-gray-500 group-hover:bg-[var(--red-primary)]/10 group-hover:text-[var(--red-primary)]"
                      }`}>
                        {count} Collections
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Products Grid */}
          <StaggerContainer
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.length > 0 ? (
              filtered.map((product) => (
                <StaggerItem key={product.id}>
                  <motion.div
                    className="card-premium overflow-hidden group"
                    whileHover={{ y: -6 }}
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {/* Category badge */}
                      <div className="absolute top-3 left-3">
                        <span
                          className="px-2.5 py-1 rounded-lg text-xs font-accent font-semibold text-white"
                          style={{ background: "var(--red-primary)" }}
                        >
                          {getCategoryName(product.category)}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-accent font-bold text-[var(--black)] mb-2 group-hover:text-[var(--red-primary)] transition-colors duration-200 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2">
                        {product.shortDescription}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {product.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-gray-50 border border-gray-100 rounded-md text-xs text-gray-500 font-accent"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="flex items-center gap-2 text-sm font-accent font-semibold transition-colors duration-200 group/link"
                        style={{ color: "var(--red-primary)" }}
                      >
                        Enquire Now
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-400 font-accent">
                  No products in this category yet. Check back soon!
                </p>
              </div>
            )}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}

export default function ProductsPageClient() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div
            className="w-10 h-10 rounded-full border-4 border-gray-100 border-t-2 animate-spin"
            style={{ borderTopColor: "var(--red-primary)" }}
          />
        </div>
      }
    >
      <ProductsPageContent />
    </Suspense>
  );
}
