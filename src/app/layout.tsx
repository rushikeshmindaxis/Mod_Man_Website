import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { company } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL(company.seo.siteUrl),
  title: {
    default: company.seo.defaultTitle,
    template: `%s | ${company.seo.siteName}`,
    absolute: company.seo.defaultTitle,
  },
  description: company.seo.defaultDescription,
  keywords: company.seo.keywords,
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
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
  name: company.name,
  url: company.seo.siteUrl,
  logo: `${company.seo.siteUrl}/logo.png`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: company.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: "en",
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
        <SmoothScrollProvider>
          <LoadingScreen />
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <BackToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
