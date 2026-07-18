import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.seo.siteName,
    short_name: company.name,
    description: company.seo.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#c41e3a",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
