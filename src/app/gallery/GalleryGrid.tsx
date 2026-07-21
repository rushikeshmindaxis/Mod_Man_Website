"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, ArrowUpRight } from "lucide-react";

interface GalleryGridProps {
  images: string[];
  startIndex: number;
}

// Clean up file names for display titles underneath cards
function cleanName(fileName: string) {
  const base = fileName.substring(0, fileName.lastIndexOf('.')) || fileName;
  const spaced = base.replace(/[-_]/g, ' ');
  return spaced.replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function GalleryGrid({ images, startIndex }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close modal on Escape key press and block scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  // Pseudo-random staggered aspect ratios to create the masonry look
  const aspectRatios = [
    "aspect-[3/4]",  // Tall
    "aspect-[1/1]",  // Square
    "aspect-[4/5]",  // Slightly Tall
    "aspect-[2/3]",  // Very Tall
    "aspect-[3/2]"   // Wide
  ];

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5">
        {images.map((file, index) => {
          const imageSrc = `/Product_Images/${encodeURIComponent(file)}`;
          // Pick a stable aspect ratio based on index
          const aspect = aspectRatios[index % aspectRatios.length];

          return (
            <div key={file} className="break-inside-avoid mb-5 group block">
              {/* Outer Card with Pinterest Style */}
              <div
                onClick={() => {
                  if (typeof window !== "undefined" && window.innerWidth >= 640) {
                    setSelectedImage(imageSrc);
                  }
                }}
                className="relative bg-gray-50 rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/60 cursor-pointer"
              >
                {/* Aspect ratio block */}
                <div className={`${aspect} w-full relative overflow-hidden`}>
                  <Image
                    src={imageSrc}
                    alt={`Product showcase ${startIndex + index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-11 h-11 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="w-5 h-5 text-[var(--red-primary)]" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal for Full Image View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
              aria-label="Close image modal"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Modal Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking directly on image
              className="relative max-w-5xl w-full max-h-[85vh] h-full flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={selectedImage}
                alt="Full size product view"
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
