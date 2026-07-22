"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
  // We can show up to 6 above the fold now that it's a 3-column grid
  const isAboveTheFold = index < 6;

  return (
    <StaggerItem>
      <Link 
        href={`/products/${product.slug}`}
        className="block h-full w-full outline-none group focus-visible:ring-2 focus-visible:ring-[var(--red-primary)] rounded-2xl text-left"
        aria-label={`View details for ${product.name}`}
      >
        <motion.div
          className="card-premium overflow-hidden flex flex-col w-full bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full cursor-pointer"
          whileHover={{ y: -6 }}
        >
          {/* Top: Image */}
          <div className="w-full aspect-[4/3] bg-gray-50 border-b border-gray-100 p-6">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority={isAboveTheFold}
                loading={isAboveTheFold ? "eager" : "lazy"}
                className="object-contain transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Bottom: Info */}
          <div style={{ paddingBottom: "48px" }} className="p-6 sm:p-8 flex flex-col items-center text-center flex-grow w-full bg-white justify-between min-h-[170px]">
            <div className="flex-grow flex items-center justify-center w-full mb-4">
              <h3 className="font-display text-lg sm:text-xl font-bold text-gray-900 leading-snug group-hover:text-[var(--red-primary)] transition-colors line-clamp-2">
                {product.name}
              </h3>
            </div>
            <div style={{ paddingTop: "12px", paddingBottom: "12px", paddingLeft: "28px", paddingRight: "28px", borderRadius: "0px" }} className="rounded-none text-xs font-bold tracking-wider uppercase transition-all duration-300 inline-flex items-center gap-2.5 border border-gray-200 bg-gray-50 text-gray-700 group-hover:bg-[var(--red-primary)] group-hover:text-white group-hover:border-[var(--red-primary)] group-hover:shadow-md group-hover:shadow-red-900/10">
              <span>View Details</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </motion.div>
      </Link>
    </StaggerItem>
  );
}

export const ProductCardItem = memo(ProductCardItemComponent);
