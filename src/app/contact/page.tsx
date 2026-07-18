// src/app/contact/page.tsx


import type { Metadata } from "next";
import { company } from "@/data/company";
import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/contact/ContactSection";

// SEO metadata for the Contact page
export const metadata: Metadata = {
  title: `Contact Us | Free Modular Furniture Consultation & Quotes`,
  description: `Get in touch with ${company.name} in Pune. Free design consultations, site visits, and custom quotes for modular furniture and commercial interior solutions.`,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact Us | ${company.name}`,
    description: `Connect with ${company.name} for custom modular furniture, kitchen designs, and office workspace consultations.`,
    url: `${company.seo.siteUrl}/contact`,
  },
};

// FAQ structured data (JSON‑LD)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I get a modular furniture quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fill out our contact enquiry form or call us directly. We offer free design consultations and custom site estimates.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer site visits and consultations in Pune?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our team provides site visits, measurements, and 3D layout consultations across Pune and surrounding areas.",
      },
    },
  ],
};

// LocalBusiness structured data (JSON‑LD)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  "@id": `${company.seo.siteUrl}/#store`,
  name: company.name,
  image: `${company.seo.siteUrl}/contact-hero-bg.png`,
  url: company.seo.siteUrl,
  telephone: company.phone,
  email: company.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.address.line1}, ${company.address.line2}`,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.pincode,
    addressCountry: company.address.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      {/* JSON‑LD scripts for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* Hero section */}
      <PageHero
        title="Let's Start Your"
        titleAccent="Project"
        subtitle="Our design team is ready to help you create your perfect space. Free consultation, no obligation."
        breadcrumbLabel="Contact"
        backgroundImage="/contact-hero-bg.png"
      />

      {/* Explicit spacer to ensure proper bottom spacing below Hero */}
      <div className="w-full h-10 md:h-16 lg:h-[100px] bg-white" />

      {/* Main contact form & information */}
      <ContactSection />

      {/* Explicit spacer to ensure proper bottom spacing above Footer */}
      <div className="w-full h-10 md:h-16 lg:h-[100px] bg-white" />
    </>
  );
}
