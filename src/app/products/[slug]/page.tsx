import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { company } from "@/data/company";
import { getProductBySlug, products } from "@/data/products";
import ProductDetailPageClient from "@/components/sections/products/ProductDetailPageClient";

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate dynamic metadata for each product
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} | ${company.name}`,
    description: product.shortDescription || product.description,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: product.name,
      description: product.shortDescription || product.description,
      url: `${company.seo.siteUrl}/products/${product.slug}`,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

import Script from "next/script";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: company.name,
    },
    offers: {
      "@type": "Offer",
      url: `${company.seo.siteUrl}/products/${product.slug}`,
      priceCurrency: "INR",
      price: product.price ? product.price.replace(/[^0-9]/g, "") : undefined,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <main>
      <Script
        id={`product-jsonld-${product.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductDetailPageClient product={product} />
    </main>
  );
}
