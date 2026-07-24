import type { Metadata } from "next";
import HeroSection from "@/components/sections/home/HeroSection";
import AboutSummarySection from "@/components/sections/home/AboutSummarySection";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import TrustedBySection from "@/components/sections/home/TrustedBySection";
import OurProcess from "@/components/sections/home/OurProcess";
import { IndustriesSection, TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import TimelineSection from "@/components/sections/home/TimelineSection";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: company.seo.defaultTitle,
  description: company.seo.defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: company.seo.defaultTitle,
    description: company.seo.defaultDescription,
    url: company.seo.siteUrl,
    siteName: company.seo.siteName,
    locale: "en_IN",
    type: "website",
  },
};

export default function HomePage() {
  // Trigger cache refresh - loading screen disabled for non-home pages
  return (
    <>
      <HeroSection />
      <AboutSummarySection />
      <WhyChooseUs />
      <TrustedBySection />
      <OurProcess />
      <IndustriesSection />
      <TimelineSection />
      <TestimonialsSection />
    </>
  );
}
