import fs from "fs";
import path from "path";
import Link from "next/link";
import { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { company } from "@/data/company";
import GalleryGrid from "./GalleryGrid";

export const metadata: Metadata = {
  title: `Our Gallery | ${company.name}`,
  description: `Explore our portfolio of premium modular furniture and commercial interior solutions by ${company.name}.`,
};

// We receive searchParams as a Promise in Next.js 15
export default async function GalleryPage(props: { searchParams: Promise<{ page?: string }> }) {
  const searchParams = await props.searchParams;
  const currentPage = parseInt(searchParams.page || "1", 10);
  const imagesPerPage = 15;

  // Read images from public/Product_Images
  const imagesDir = path.join(process.cwd(), "public", "Product_Images");
  
  let files: string[] = [];
  try {
    if (fs.existsSync(imagesDir)) {
      const allFiles = fs.readdirSync(imagesDir);
      // Filter out non-image files if any
      files = allFiles.filter(file => 
        file.toLowerCase().endsWith(".jpg") || 
        file.toLowerCase().endsWith(".jpeg") || 
        file.toLowerCase().endsWith(".png") ||
        file.toLowerCase().endsWith(".webp")
      );
    }
  } catch (error) {
    console.error("Failed to read images directory", error);
  }

  // Sort files for consistent pagination
  files.sort();

  const totalImages = files.length;
  const totalPages = Math.ceil(totalImages / imagesPerPage) || 1;

  // Handle out of bounds pages safely
  const validPage = Math.max(1, Math.min(currentPage, totalPages));

  const startIndex = (validPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = files.slice(startIndex, endIndex);

  return (
    <>
      <PageHero
        title="Our"
        titleAccent="Gallery"
        subtitle="Explore our extensive collection of premium modular furniture, custom kitchens, and bespoke commercial interior setups."
        breadcrumbLabel="Gallery"
        backgroundImage="/gallery-hero-bg.png"
      />

      {/* Explicit spacer to ensure proper bottom spacing below Hero */}
      <div className="w-full h-10 md:h-16 lg:h-[100px] bg-white" />

      {/* Gallery section with proper top padding */}
      <section className="pt-10 md:pt-16 lg:pt-[80px] pb-20 lg:pb-32 bg-[var(--gray-50)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <GalleryGrid images={currentImages} startIndex={startIndex} />

          {totalImages === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No images found in the gallery.</p>
            </div>
          )}

          {/* Explicit spacer between grid and pagination */}
          <div className="w-full h-16 md:h-24 lg:h-[100px]" />

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 sm:gap-5">
              {validPage > 1 ? (
                <Link
                  href={`/gallery?page=${validPage - 1}`}
                  className="px-6 py-3 rounded-none border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-[var(--red-primary)] hover:border-[var(--red-primary)] transition-all font-semibold shadow-sm tracking-wide text-base inline-flex items-center justify-center"
                >
                  Previous
                </Link>
              ) : (
                <span className="px-6 py-3 rounded-none border border-gray-200 bg-gray-50 text-gray-400 font-semibold cursor-not-allowed tracking-wide text-base inline-flex items-center justify-center">
                  Previous
                </span>
              )}

              <div className="flex items-center gap-3">
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const pageNum = idx + 1;
                  const isActive = pageNum === validPage;
                  return (
                    <Link
                      key={pageNum}
                      href={`/gallery?page=${pageNum}`}
                      className={`w-12 h-12 flex items-center justify-center rounded-none font-semibold text-base transition-all ${
                        isActive
                          ? "bg-[var(--red-primary)] text-white border border-[var(--red-primary)] shadow-md"
                          : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-[var(--red-primary)] hover:border-[var(--red-primary)] shadow-sm"
                      }`}
                    >
                      {pageNum}
                    </Link>
                  );
                })}
              </div>

              {validPage < totalPages ? (
                <Link
                  href={`/gallery?page=${validPage + 1}`}
                  className="px-6 py-3 rounded-none border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-[var(--red-primary)] hover:border-[var(--red-primary)] transition-all font-semibold shadow-sm tracking-wide text-base inline-flex items-center justify-center"
                >
                  Next
                </Link>
              ) : (
                <span className="px-6 py-3 rounded-none border border-gray-200 bg-gray-50 text-gray-400 font-semibold cursor-not-allowed tracking-wide text-base inline-flex items-center justify-center">
                  Next
                </span>
              )}
            </div>
          )}

        </div>
      </section>

      {/* Explicit spacer to ensure proper bottom spacing above Footer */}
      <div className="w-full h-10 md:h-16 lg:h-[100px] bg-white" />
    </>
  );
}
