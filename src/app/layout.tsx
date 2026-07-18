import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import FloatingButtons from "@/components/ui/FloatingButtons";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { company } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL(company.seo.siteUrl),
  title: {
    default: company.seo.defaultTitle,
    template: `%s | ${company.seo.siteName}`,
  },
  description: company.seo.defaultDescription,
  keywords: company.seo.keywords,
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: company.seo.siteUrl,
    title: company.seo.defaultTitle,
    description: company.seo.defaultDescription,
    siteName: company.seo.siteName,
    images: [
      {
        url: company.seo.ogImage,
        width: 1200,
        height: 630,
        alt: company.seo.defaultTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: company.seo.defaultTitle,
    description: company.seo.defaultDescription,
    creator: company.seo.twitterHandle,
    images: [company.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "furniture",
};

export const viewport: Viewport = {
  themeColor: "#c41e3a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Structured JSON-LD Data for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${company.seo.siteUrl}/#organization`,
  name: company.name,
  url: company.seo.siteUrl,
  logo: `${company.seo.siteUrl}/logo.png`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: company.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi", "mr"],
    },
  ],
  sameAs: [
    company.social.facebook,
    company.social.instagram,
    company.social.linkedin,
    company.social.youtube,
    company.social.twitter,
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${company.seo.siteUrl}/#website`,
  url: company.seo.siteUrl,
  name: company.seo.siteName,
  description: company.seo.defaultDescription,
  publisher: {
    "@id": `${company.seo.siteUrl}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${company.seo.siteUrl}/products?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[var(--black)] antialiased selection:bg-[var(--red-primary)] selection:text-white">
        {/* Schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <SmoothScrollProvider>
          <LoadingScreen />
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <BackToTop />
          <FloatingButtons />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
