import { MetadataRoute } from "next";
import { company } from "@/data/company";
import { productCategories } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.seo.siteUrl;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];

  const categoryPages: MetadataRoute.Sitemap = productCategories.map((cat) => ({
    url: `${base}/products?category=${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages];
}
