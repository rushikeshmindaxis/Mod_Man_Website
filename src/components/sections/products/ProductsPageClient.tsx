"use client";

import { useState, useEffect, useMemo, useCallback, Suspense } from "react";
import Link from "next/link";
import { products, productCategories } from "@/data/products";
import { company } from "@/data/company";
import AnimatedSection, { StaggerContainer } from "@/components/ui/AnimatedSection";
import PageHero from "@/components/sections/PageHero";
import { useSearchParams } from "next/navigation";
import { ProductCardItem } from "./ProductCardItem";

const INITIAL_VISIBLE_COUNT = 8;

function ProductsPageContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  // Sync active category with URL search param
  useEffect(() => {
    if (categoryParam && productCategories.some((cat) => cat.slug === categoryParam)) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory("all");
    }
  }, [categoryParam]);

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [activeCategory]);

  // Memoize category product counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const cat of productCategories) {
      counts[cat.slug] = products.filter((p) => p.category === cat.slug).length;
    }
    return counts;
  }, []);

  // Memoize category name lookup map
  const categoryNameMap = useMemo(() => {
    const map = new Map<string, string>();
    for (const cat of productCategories) {
      map.set(cat.slug, cat.name);
    }
    return map;
  }, []);

  const getCategoryName = useCallback(
    (slug: string) => categoryNameMap.get(slug) ?? slug,
    [categoryNameMap]
  );

  // Memoize category filtering
  const filtered = useMemo(() => {
    return activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const visibleProducts = useMemo(() => {
    return filtered.slice(0, visibleCount);
  }, [filtered, visibleCount]);

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => prev + 8);
  }, []);

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
          <AnimatedSection className="mt-8 mb-12 md:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {productCategories.map((cat) => {
                const count = categoryCounts[cat.slug] ?? 0;
                const isActive = activeCategory === cat.slug;
                return (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() =>
                      setActiveCategory(
                        activeCategory === cat.slug ? "all" : cat.slug
                      )
                    }
                    className={`w-full min-h-[150px] py-8 px-6 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer ${isActive
                        ? "border-[var(--red-primary)] bg-[var(--red-primary)]/5 shadow-md"
                        : "border-gray-200 bg-white hover:border-[var(--red-primary)]/40 hover:bg-gray-50 hover:shadow-md"
                      }`}
                  >
                    <h3
                      className={`text-2xl sm:text-3xl font-bold font-display mb-3 transition-colors duration-300 ${isActive ? "text-[var(--red-primary)]" : "text-gray-900"
                        }`}
                    >
                      {cat.name}
                    </h3>
                    <span
                      className={`inline-block px-2 py-1 text-xs font-accent font-semibold tracking-wider uppercase transition-colors ${isActive
                          ? "text-[var(--red-primary)]"
                          : "text-gray-500"
                        }`}
                    >
                      {count} Collections
                    </span>
                  </button>
                );
              })}
            </div>
            {activeCategory !== "all" && (
              <div className="text-center" style={{ marginTop: "32px" }}>
                <button
                  type="button"
                  onClick={() => setActiveCategory("all")}
                  className="text-sm font-accent text-gray-500 hover:text-[var(--red-primary)] underline cursor-pointer"
                >
                  Show All Products ({products.length})
                </button>
              </div>
            )}
          </AnimatedSection>

          {/* Products List */}
          <div style={{ marginTop: "48px" }}>
            <StaggerContainer
              key={activeCategory}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8"
            >
              {visibleProducts.length > 0 ? (
                visibleProducts.map((product, index) => (
                  <ProductCardItem
                    key={product.id}
                    product={product}
                    categoryName={getCategoryName(product.category)}
                    index={index}
                    companyPhone={company.phone}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <p className="text-gray-400 font-accent">
                    No products match your search or filter. Check back soon!
                  </p>
                </div>
              )}
            </StaggerContainer>
          </div>

          {/* Spacer to guarantee gap below products */}
          <div className="h-12 md:h-20 w-full"></div>

          {/* Load More Button */}
          {filtered.length > visibleCount && (
            <div className="text-center">
              <button
                type="button"
                onClick={handleLoadMore}
                className="btn-primary py-2 px-6 md:py-4 md:px-10 shadow-lg hover:shadow-xl text-xs md:text-base font-semibold cursor-pointer rounded-xl inline-flex items-center justify-center gap-2 max-w-[90%] mx-auto"
              >
                Load More Products ({filtered.length - visibleCount} remaining)
              </button>
            </div>
          )}
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

