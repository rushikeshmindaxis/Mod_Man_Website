"use client";

import { memo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PhoneCall, X } from "lucide-react";
import { Product } from "@/data/products";
import { StaggerItem } from "@/components/ui/AnimatedSection";

interface ProductCardItemProps {
  product: Product;
  categoryName: string;
  index: number;
  companyPhone: string;
}

function ProductCardItemComponent({
  product,
  categoryName,
  index,
  companyPhone,
}: ProductCardItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Image gallery state
  const allImages = product.images && product.images.length > 0 ? product.images : [product.image];
  const [activeImage, setActiveImage] = useState(allImages[0]);

  // We can show up to 6 above the fold now that it's a 3-column grid
  const isAboveTheFold = index < 6;

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const openModal = () => {
    setActiveImage(allImages[0]); // Reset to first image on open
    setIsModalOpen(true);
  };
  
  const closeModal = () => setIsModalOpen(false);

  const specKeys = product.specifications 
    ? Object.keys(product.specifications).filter((k) => k !== "Minimum Order Quantity") 
    : [];

  return (
    <>
      {/* 3-Column Grid Card (Image + Name) */}
      <StaggerItem>
        <button 
          onClick={openModal} 
          className="block h-full w-full outline-none group focus-visible:ring-2 focus-visible:ring-[var(--red-primary)] rounded-2xl text-left"
          aria-label={`View details for ${product.name}`}
        >
          <motion.div
            className="card-premium overflow-hidden flex flex-col w-full bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full cursor-pointer"
            whileHover={{ y: -6 }}
          >
            {/* Top: Image */}
            <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden bg-gray-50 border-b border-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority={isAboveTheFold}
                loading={isAboveTheFold ? "eager" : "lazy"}
                className="object-contain p-6 sm:p-8 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Category Tag overlay */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className="text-[10px] sm:text-xs font-accent font-bold uppercase tracking-widest px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-sm"
                  style={{ color: "var(--red-primary)" }}
                >
                  {categoryName}
                </span>
              </div>
            </div>

            {/* Bottom: Info (Just Name) */}
            <div className="p-5 sm:p-6 flex flex-col justify-center items-center text-center flex-grow w-full bg-white">
              <h3 className="font-display text-lg sm:text-xl font-bold text-gray-900 leading-snug group-hover:text-[var(--red-primary)] transition-colors line-clamp-2">
                {product.name}
              </h3>
            </div>
          </motion.div>
        </button>
      </StaggerItem>

      {/* In-Page Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 md:p-12"
            onClick={closeModal}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-7xl max-h-[95vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-50 p-2 bg-white/80 hover:bg-white text-gray-800 rounded-full shadow-sm backdrop-blur-sm border border-gray-200 transition-all hover:scale-110"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Modal Content */}
              <div className="overflow-y-auto w-full h-full custom-scrollbar flex flex-col md:flex-row md:items-center">
                
                {/* Left Side: Image Gallery */}
                <div className="w-full md:w-[45%] flex flex-col border-b md:border-b-0 md:border-r border-gray-100 bg-white md:h-full">
                  <div className="relative w-full aspect-square md:aspect-auto md:h-full min-h-[400px] flex items-center justify-center p-12 bg-gray-50/50">
                    <Image
                      src={activeImage}
                      alt={product.name}
                      fill
                      className="object-contain p-12"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                  
                  {/* Thumbnails */}
                  {allImages.length > 1 && (
                    <div className="flex gap-3 overflow-x-auto p-4 bg-white border-t border-gray-100 justify-center">
                      {allImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImage(img)}
                          className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all duration-200 ${
                            activeImage === img
                              ? "border-[var(--red-primary)] shadow-sm scale-105"
                              : "border-gray-200 hover:border-gray-400"
                          }`}
                        >
                          <Image src={img} alt={`Thumbnail ${idx + 1}`} fill sizes="64px" className="object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Side: Product Details */}
                <div className="w-full md:w-[55%] p-8 sm:p-12 lg:p-16 flex flex-col items-center my-auto">
                  <div className="mb-8 text-center flex flex-col items-center w-full px-4">
                    <span className="text-sm font-accent text-[var(--red-primary)] font-bold tracking-widest uppercase mb-4 block">
                      {categoryName}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 leading-tight px-4">
                      {product.name}
                    </h2>
                  </div>

                  <p className="text-gray-600 text-base leading-relaxed mb-10 text-center px-4 md:px-8 max-w-2xl">
                    {product.detailedDescription || product.description}
                  </p>

                  {/* Centered Unique Architectural Specs Layout */}
                  {specKeys.length > 0 && (
                    <div className="mb-12 w-full border-b border-gray-200 pb-10 flex justify-center">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-10 w-full max-w-3xl mx-auto justify-items-center">
                        {specKeys.map((key) => (
                          <div key={key} className="flex flex-col items-center group/spec w-full max-w-[180px]">
                            <span className="text-[11px] sm:text-xs font-accent text-gray-500 uppercase tracking-widest mb-2 transition-colors group-hover/spec:text-[var(--red-primary)] text-center leading-tight">
                              {key}
                            </span>
                            <span className="text-sm sm:text-base font-bold text-gray-900 text-center leading-snug">
                              {product.specifications![key]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full mt-auto">
                    <Link
                      href={`/contact?product=${product.slug}`}
                      className="btn-primary py-4 px-8 shadow-md hover:shadow-lg text-base font-semibold flex items-center justify-center gap-2 rounded-xl transition-all w-full sm:w-auto"
                      onClick={closeModal}
                    >
                      Get a Quote <ArrowRight className="w-5 h-5" />
                    </Link>
                    <a
                      href={`tel:${companyPhone.replace(/\s/g, "")}`}
                      className="py-4 px-8 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-800 hover:text-[var(--red-primary)] text-base font-semibold flex items-center justify-center gap-2 rounded-xl shadow-xs transition-all w-full sm:w-auto"
                    >
                      <PhoneCall className="w-5 h-5 text-[var(--red-primary)]" />
                      Call Now
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export const ProductCardItem = memo(ProductCardItemComponent);
