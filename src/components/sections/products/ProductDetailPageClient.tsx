"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, PhoneCall } from "lucide-react";
import { Product } from "@/data/products";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHero from "@/components/sections/PageHero";
import { company } from "@/data/company";

interface ProductDetailPageClientProps {
  product: Product;
}

export default function ProductDetailPageClient({ product }: ProductDetailPageClientProps) {
  const allImages = product.images && product.images.length > 0
    ? product.images
    : [product.image];
  const [activeImage, setActiveImage] = useState(allImages[0]);

  const specKeys = product.specifications ? Object.keys(product.specifications) : [];
  const minOrderQty = product.specifications?.["Minimum Order Quantity"];
  const displaySpecs = specKeys.filter((key) => key !== "Minimum Order Quantity");

  return (
    <>
      <PageHero
        title={product.name}
        titleAccent=""
        subtitle={product.category.replace(/-/g, " ")}
        breadcrumbLabel={product.name}
        backgroundImage={product.image}
      />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="mb-8">
            <Link
              href="/products"
              className="inline-flex items-center text-sm font-accent text-gray-500 hover:text-[var(--red-primary)] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-start">
            {/* Left Column: Product Image Gallery */}
            <AnimatedSection className="flex flex-col gap-4 sticky top-24">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                <Image
                  src={activeImage}
                  alt={product.name}
                  fill
                  className="object-contain p-4 transition-opacity duration-300"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Thumbnail Gallery */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all duration-200 ${
                      activeImage === img
                        ? "border-[var(--red-primary)] shadow-md scale-105"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <Image src={img} alt={`${product.name} ${idx + 1}`} fill sizes="80px" className="object-cover" />
                  </button>
                ))}
              </div>
            </AnimatedSection>

            {/* Right Column: Product Details & Specs */}
            <AnimatedSection delay={0.2} className="flex flex-col">
              <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3">
                {product.name}
              </h1>


              {minOrderQty && (
                <div className="text-gray-600 mb-6">
                  Minimum Order Quantity: <span className="font-bold text-gray-900">{minOrderQty}</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href={`/contact?product=${product.slug}`}
                  className="btn-primary py-3.5 px-8 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-base font-semibold rounded-xl"
                >
                  Get a Quote <ArrowLeft className="w-5 h-5 rotate-180" />
                </Link>
                <a
                  href={`tel:${company.phone.replace(/\\s/g, "")}`}
                  className="py-3.5 px-8 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-800 hover:text-[var(--red-primary)] text-base font-semibold flex items-center justify-center gap-2 rounded-xl shadow-xs transition-all"
                >
                  <PhoneCall className="w-5 h-5 text-[var(--red-primary)]" />
                  Call Now
                </a>
              </div>

              {/* Unique Architectural Specs Layout (Centered) */}
              {displaySpecs.length > 0 && (
                <div className="mb-10 w-full border-b border-gray-200 pb-10">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 py-2">
                    {displaySpecs.map((key) => (
                      <div key={key} className="flex flex-col items-center group/spec">
                        <span className="text-xs md:text-sm font-accent text-gray-500 uppercase tracking-widest mb-1.5 transition-colors group-hover/spec:text-[var(--red-primary)] text-center">
                          {key}
                        </span>
                        <span className="text-base md:text-lg font-bold text-gray-900 text-center">
                          {product.specifications![key]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="pt-8 border-t border-gray-200">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                  Product Description
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.detailedDescription || product.description}
                </p>
                {product.features && product.features.length > 0 && (
                  <ul className="mt-6 space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[var(--red-primary)] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
