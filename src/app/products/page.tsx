import type { Metadata } from "next";
import { company } from "@/data/company";
import { products } from "@/data/products";
import ProductsPageClient from "@/components/sections/products/ProductsPageClient";

export const metadata: Metadata = {
  title: "Modular Furniture Collections | Kitchens, Wardrobes & Office Desks",
  description: `Explore ${company.name}'s comprehensive catalog of premium modular kitchens, wardrobes, office desks, living room units, and commercial interior solutions.`,
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: `Modular Furniture Catalog | ${company.name}`,
    description: `Browse premium modular furniture collections crafted by ${company.name} in Pune.`,
    url: `${company.seo.siteUrl}/products`,
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: product.name,
    description: product.shortDescription,
    image: `${company.seo.siteUrl}${product.image}`,
  })),
};

import Script from "next/script";

export default function ProductsPage() {
  return (
    <main>
      <Script
        id="products-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <ProductsPageClient />
    </main>
  );
}
