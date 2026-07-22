"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, PhoneCall } from "lucide-react";
import { Product } from "@/data/products";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { company } from "@/data/company";

interface ProductDetailPageClientProps {
  product: Product;
}

export default function ProductDetailPageClient({ product }: ProductDetailPageClientProps) {
  const allImages = product.images && product.images.length > 0
    ? product.images
    : [product.image];
  const [activeImage, setActiveImage] = useState(allImages[0]);
  const [isCallHovered, setIsCallHovered] = useState(false);

  const specKeys = product.specifications ? Object.keys(product.specifications) : [];
  const minOrderQty = product.specifications?.["Minimum Order Quantity"];
  const displaySpecs = specKeys.filter((key) => key !== "Minimum Order Quantity");

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <section
        className="bg-white"
        style={{
          paddingTop: isMobile ? "240px" : "280px",
          paddingBottom: isMobile ? "100px" : "140px"
        }}
      >
        <div className="container">
          <div style={{ marginBottom: "48px" }}>
            <Link
              href="/products"
              style={{
                paddingTop: "12px",
                paddingBottom: "12px",
                paddingLeft: "24px",
                paddingRight: "24px",
                borderRadius: "0px",
                backgroundColor: "var(--red-primary)",
                color: "#ffffff",
                display: "inline-flex",
                alignItems: "center"
              }}
              className="text-xs font-accent font-bold uppercase tracking-wider hover:opacity-90 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2 text-white" />
              Back to Products
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-start">
            {/* Left Column: Product Image Gallery */}
            <AnimatedSection className="flex flex-col gap-4 lg:sticky lg:top-32">
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
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all duration-200 ${activeImage === img
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
            <AnimatedSection delay={0.2} className="flex flex-col items-center text-center w-full">
              <h1 
                className="text-3xl md:text-4xl font-display font-bold text-gray-900 text-center"
                style={{ marginBottom: "40px" }}
              >
                {product.name}
              </h1>


              {minOrderQty && (
                <div className="text-gray-600 mb-6 text-center">
                  Minimum Order Quantity: <span className="font-bold text-gray-900">{minOrderQty}</span>
                </div>
              )}

              {/* Unique Description-List Specs Layout */}
              {displaySpecs.length > 0 && (
                <div className="w-full max-w-2xl mx-auto border-t border-b border-gray-100 py-6 mb-8">
                  <dl className="divide-y divide-gray-100">
                    {displaySpecs.map((key) => (
                      <div key={key} className="flex justify-between py-6 text-left text-sm sm:text-base">
                        <dt className="font-accent text-gray-800 font-semibold uppercase tracking-wider text-xs sm:text-sm w-1/2 flex items-center">
                          {key}
                        </dt>
                        <dd className="font-bold text-gray-900 w-1/2 text-right">
                          {product.specifications![key]}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {/* Description */}
              <div 
                className="border-t border-gray-200 w-full flex flex-col items-center text-center mb-10"
                style={{
                  marginTop: "24px",
                  paddingTop: "24px"
                }}
              >
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4 text-center">
                  Product Description
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-center">
                  {product.detailedDescription || product.description}
                </p>
                {product.features && product.features.length > 0 && (
                  <ul className="mt-6 space-y-3 inline-block text-left mx-auto">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[var(--red-primary)] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Action Buttons (Shifted to the bottom) */}
              <div 
                className="flex flex-wrap justify-center gap-4 w-full"
                style={{ marginTop: "40px" }}
              >
                <Link
                  href={`/contact?product=${product.slug}`}
                  style={{
                    borderRadius: "0px",
                    paddingTop: "16px",
                    paddingBottom: "16px",
                    paddingLeft: "36px",
                    paddingRight: "36px"
                  }}
                  className="btn-primary flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-base font-semibold rounded-none"
                >
                  Get a Quote <ArrowLeft className="w-5 h-5 rotate-180" />
                </Link>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="bg-white text-gray-800 hover:text-[var(--red-primary)] text-base font-semibold flex items-center justify-center gap-2 rounded-none shadow-xs transition-all"
                  onMouseEnter={() => setIsCallHovered(true)}
                  onMouseLeave={() => setIsCallHovered(false)}
                  style={{
                    border: isCallHovered ? "3px solid var(--red-primary)" : "3px solid #d1d5db",
                    borderRadius: "0px",
                    paddingTop: "16px",
                    paddingBottom: "16px",
                    paddingLeft: "36px",
                    paddingRight: "36px"
                  }}
                >
                  <PhoneCall className="w-5 h-5 text-[var(--red-primary)]" />
                  Call Now
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
