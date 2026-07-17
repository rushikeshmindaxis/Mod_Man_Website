import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import PageHero from "@/components/sections/PageHero";
import ContactFormClient from "@/components/sections/contact/ContactFormClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${company.name}. Free design consultations, site visits, and custom quotes for modular furniture and interior solutions.`,
};

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    lines: [company.phone, company.phone2],
    href: `tel:${company.phone}`,
    color: "var(--red-primary)",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: [company.phone, "Message us anytime"],
    href: `https://wa.me/${company.whatsapp}`,
    color: "#25D366",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [company.email],
    href: `mailto:${company.email}`,
    color: "var(--red-primary)",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [company.address.line1, company.address.line2, `${company.address.city}, ${company.address.state}`],
    href: "#map",
    color: "var(--red-primary)",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sunday: By Appointment"],
    color: "var(--red-primary)",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I get a quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fill out our contact form or call us directly. We offer free consultations.",
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        title="Let's Start Your"
        titleAccent="Project"
        subtitle="Our design team is ready to help you create your perfect space. Free consultation, no obligation."
        breadcrumbLabel="Contact"
        label="Get In Touch"
      />

      {/* Contact Info + Form */}
      <section className="section-padding bg-[var(--gray-50)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info Panel */}
            <div className="lg:col-span-2">
              <SectionHeader
                label="Contact Info"
                title="We&apos;d Love to Hear"
                titleAccent="From You"
              />
              <StaggerContainer className="mt-10 flex flex-col gap-5">
                {contactInfo.map(({ icon: Icon, title, lines, href, color }) => (
                  <StaggerItem key={title}>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
                      >
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${color}15` }}
                        >
                          <span style={{ color }}><Icon className="w-5 h-5" /></span>
                        </div>
                        <div>
                          <p className="font-accent font-semibold text-[var(--black)] text-sm mb-1">
                            {title}
                          </p>
                          {lines.map((line, i) => (
                            <p key={i} className="text-sm text-gray-500">
                              {line}
                            </p>
                          ))}
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${color}15` }}
                        >
                          <span style={{ color }}><Icon className="w-5 h-5" /></span>
                        </div>
                        <div>
                          <p className="font-accent font-semibold text-[var(--black)] text-sm mb-1">
                            {title}
                          </p>
                          {lines.map((line, i) => (
                            <p key={i} className="text-sm text-gray-500">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactFormClient />
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section id="map" className="h-96 relative">
        <AnimatedSection className="h-full">
          <iframe
            src={company.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mod Men Location"
          />
        </AnimatedSection>
      </section>
    </>
  );
}
