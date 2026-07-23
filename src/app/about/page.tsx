import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Award, Ruler, Palette, Clock, Shield, Users } from "lucide-react";
import { company } from "@/data/company";
import { usps } from "@/data/index";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import PageHero from "@/components/sections/PageHero";

const uspIconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Award,
  Ruler,
  Palette,
  Clock,
  Shield,
  Users,
};

export const metadata: Metadata = {
  title: "About Us | Premier Modular Furniture Manufacturer in Pune",
  description: `Learn about ${company.name} — ${company.shortDescription} Over 14+ years of craftsmanship, state-of-the-art manufacturing, and interior excellence in Pune, Maharashtra.`,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About Us | ${company.name}`,
    description: `Discover the story, mission, and team behind ${company.name}.`,
    url: `${company.seo.siteUrl}/about`,
  },
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver world-class modular furniture solutions that elevate every space — combining precision craftsmanship, innovative design, and unmatched quality.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be India's most trusted premium furniture and interior solutions brand, recognized globally for excellence in design, manufacturing, and customer experience.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Quality without compromise. Integrity in every interaction. Innovation in every design. Commitment to every client's satisfaction and success.",
  },
];

const team = [
  {
    id: "tm-001",
    name: "Harshad Pedgaonkar",
    role: "Managing Director",
    image: "/Harshad Pedgaonkar Profile.png",
    objectPosition: "center 30%",
    bio: "Partner & Managing Director driving business strategy, client consulting, and manufacturing quality control at Mod Men.",
  },
  {
    id: "tm-002",
    name: "Deodatta Shelke",
    role: "Company CEO",
    image: "/Deodatta shelke Profile.png",
    objectPosition: "center 20%",
    bio: "Partner & Chief Executive Officer directing modular design innovation, design processes, and project delivery.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Crafting Premium Spaces Since"
        titleAccent={String(company.foundedYear)}
        subtitle={company.description}
        breadcrumbLabel="About Us"
        backgroundImage="/about-hero-bg.jpg"
      />

      {/* ── Company Story ──────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-2 w-full">
              <AnimatedSection direction="right">
                <div className="relative">
                  <div className="relative h-[400px] lg:h-[480px] rounded-3xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                      alt="Mod Men Story"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-3">
              <SectionHeader
                label="Our Story"
                title="Built on a Foundation of"
                titleAccent="Excellence"
                subtitle="What began as a small workshop in Pune has grown into one of India's most trusted modular furniture studios."
              />
              <AnimatedSection delay={0.2}>
                <div className="mt-6 space-y-4 text-gray-600 leading-relaxed max-w-2xl">
                  <p>
                    Founded in {company.foundedYear}, Mod Men was born from a simple belief: that every person deserves a space that is as functional as it is beautiful. Our founders combined deep expertise in woodworking and design with a passion for innovation to build a company that stands apart.
                  </p>
                  <p>
                    Today, with over 2,500 completed projects and a state-of-the-art manufacturing facility, we serve clients ranging from individual homeowners to corporate offices — all with the same commitment to quality and precision.
                  </p>
                  <p>
                    Our team of skilled designers, engineers, and craftsmen brings unparalleled dedication to every project. We don't just deliver furniture — we deliver experiences.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      {/* ── Certifications ────────────────────────────────────────────── */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-6 mb-12 w-full text-center">
            <SectionHeader
              align="center"
              label="Quality & Standards"
              title="Our Certifications"
              subtitle="Committed to maintaining the highest global standards in manufacturing and quality control."
              className="mx-auto"
            />
          </div>

          <AnimatedSection delay={0.2} className="max-w-6xl mx-auto mt-12 px-4 md:px-8">
            <div className="bg-white p-5 sm:p-8 md:p-16 rounded-3xl shadow-sm border-2 border-gray-200 flex flex-col md:flex-row gap-10 lg:gap-16 items-center">

              {/* Certificate Image - Left Side */}
              <div className="w-full md:w-5/12 flex justify-center">
                <div className="relative w-full max-w-[280px] sm:max-w-sm aspect-[1/1.4] bg-gray-100 rounded-xl overflow-hidden shadow-md border border-gray-200">
                  <img
                    src="/ISO/MOD%20MEN%209001_page-0001.jpg"
                    alt="ISO 9001:2015 Certificate"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Certificate Details - Right Side */}
              <div className="w-full md:w-7/12 flex flex-col items-center md:items-start text-center md:text-left gap-6 sm:gap-8">
                {/* Tag / Badge */}
                <div className="inline-flex items-center justify-center md:justify-start gap-2 px-5 py-2.5 bg-[var(--red-primary)]/10 text-[var(--red-primary)] rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
                  <Award className="w-4 h-4" />
                  <span>ISO 9001:2015 Certified</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 leading-tight py-1">
                  Quality Management System
                </h3>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full text-center md:text-left pt-2 pb-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="block text-[10px] sm:text-xs font-accent text-[var(--red-primary)] uppercase tracking-wider">Certificate Number</span>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">20150810122107R</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="block text-[10px] sm:text-xs font-accent text-[var(--red-primary)] uppercase tracking-wider">Scope of Activities</span>
                    <span className="font-semibold text-gray-900 text-sm leading-relaxed block">Manufacture & Trading for Modular Office, Home Furniture & Chairs</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="block text-[10px] sm:text-xs font-accent text-[var(--red-primary)] uppercase tracking-wider">Date of Initial Registration</span>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">25th April 2026</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="block text-[10px] sm:text-xs font-accent text-[var(--red-primary)] uppercase tracking-wider">Registered Address</span>
                    <span className="font-semibold text-gray-900 text-sm leading-relaxed block">Pisoli, Pune, Maharashtra - 411048</span>
                  </div>
                </div>

                {/* Description Paragraph */}
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed pt-8 border-t border-gray-100 w-full">
                  MOD MEN has been assessed and certified by RBS Cert. as meeting the rigorous requirements of ISO 9001:2015.
                  This certification stands as a testament to our unwavering commitment to quality in the manufacture and trading of modular office furniture, home furniture, and chairs.
                </p>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* ── Mission Vision Values ─────────────────────────────────────── */}
      <section className="section-padding bg-[var(--black)] text-white relative overflow-hidden">
        {/* Background glow effects */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 pointer-events-none blur-3xl"
          style={{ background: "var(--red-primary)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-5 pointer-events-none blur-3xl"
          style={{ background: "var(--red-deep)" }}
        />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left: Section Header & Philosophy */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <SectionHeader
                label="Our Purpose"
                title="Mission, Vision"
                titleAccent="& Values"
                dark={true}
                className="!gap-6"
              />
              <AnimatedSection delay={0.3} className="mt-8">
                <p className="text-white/60 text-lg leading-relaxed max-w-lg font-accent font-light">
                  We are driven by a single-minded commitment to excellence.
                  Every modular unit we manufacture, every workspace we lay out,
                  and every client experience we curate is a reflection of our core purpose.
                </p>
                <div className="mt-8 w-16 h-1 rounded" style={{ background: "linear-gradient(90deg, var(--red-primary), var(--red-light))" }} />
              </AnimatedSection>
            </div>

            {/* Right: Vertical stacked glowing cards */}
            <div className="lg:col-span-7 flex flex-col gap-6 w-full">
              {values.map(({ icon: Icon, title, description }, index) => {
                const numbers = ["01", "02", "03"];
                return (
                  <AnimatedSection key={title} delay={0.2 * index} direction="left">
                    <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[var(--red-primary)]/40 hover:bg-white/[0.02] transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6 relative group overflow-hidden">
                      {/* Stylized background number */}
                      <span className="absolute right-4 bottom-2 text-8xl font-black font-display text-white/[0.03] select-none pointer-events-none group-hover:text-white/[0.05] transition-colors duration-300">
                        {numbers[index]}
                      </span>

                      {/* Icon container */}
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                        style={{ background: "rgba(196, 30, 58, 0.15)" }}
                      >
                        <span style={{ color: "var(--red-light)" }}>
                          <Icon className="w-6.5 h-6.5" />
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-xl font-accent font-bold text-white mb-2 tracking-wide group-hover:text-[var(--red-light)] transition-colors duration-300">
                          {title}
                        </h3>
                        <p className="text-white/70 text-base leading-relaxed font-light">
                          {description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--gray-50)]">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-6 mb-14 text-center">
            <SectionHeader
              align="center"
              label="Our Partners"
              title="The People Behind"
              titleAccent="The Excellence"
              className="mx-auto"
            />
          </div>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            {team.map((member, index) => (
              <StaggerItem key={member.id} className="h-full w-full flex">
                {/* Tall full-image card with rounded corners, overlay gradient, and hover lift */}
                <div
                  style={{ marginLeft: index === 1 ? "auto" : undefined }}
                  className="relative h-[450px] max-w-[420px] w-full rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col justify-end"
                >

                  {/* Background Image - per-member object position for correct framing */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: member.objectPosition ?? "center top" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Premium dark gradient overlay limited to bottom half */}
                  <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-all duration-500 z-10" />

                  {/* Info Overlay Panel */}
                  <div className="absolute bottom-6 left-6 right-6 w-[calc(100%-48px)] z-20 flex flex-col justify-end text-left">

                    {/* Role Label */}
                    <span className="font-accent font-bold text-xs uppercase tracking-widest text-[var(--red-light)] mb-1 break-words whitespace-normal">
                      {member.role}
                    </span>

                    {/* Member Name */}
                    <h3 className="text-xl sm:text-2xl font-accent font-bold text-white mb-1 leading-snug break-words whitespace-normal">
                      {member.name}
                    </h3>

                    {/* Bio text which slides/fades in cleanly on hover */}
                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden mt-0 group-hover:mt-2 break-words whitespace-normal">
                      {member.bio}
                    </p>

                  </div>

                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Why Choose Us ──────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-6 mb-14 w-full text-center">
            <SectionHeader
              align="center"
              label="Why Choose Us"
              title="The Mod Men"
              titleAccent="Difference"
              subtitle="From precision manufacturing to dedicated after-sales care, here is what sets us apart from the rest."
              className="mx-auto"
            />
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {usps.map((usp, index) => {
              const Icon = uspIconMap[usp.icon];
              return (
                <StaggerItem key={usp.id} className="h-full">
                  <div className="group relative bg-[var(--gray-50)] hover:bg-white rounded-3xl border border-gray-200 hover:border-[var(--red-deep)] hover:shadow-xl hover:shadow-gray-100/80 transition-all duration-300 flex flex-col cursor-default h-full overflow-hidden">

                    {usp.image && (
                      <div className="relative w-full h-48 bg-gray-200 overflow-hidden shrink-0">
                        <Image
                          src={usp.image}
                          alt={usp.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                      </div>
                    )}

                    <div className="flex flex-col items-center text-center gap-6 px-8 pb-8 pt-12 flex-1 relative">
                      {/* Background number watermark — clipped inside its own container */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                        <span className="absolute right-4 bottom-2 text-8xl font-black text-gray-100 group-hover:text-[var(--red-primary)]/5 transition-colors duration-300 leading-none z-0">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Icon badge */}
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 relative z-10 shadow-sm"
                        style={{ background: "rgba(196, 30, 58, 0.10)" }}
                      >
                        {Icon && (
                          <Icon className="w-6 h-6 text-[var(--red-primary)]" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="relative z-10 flex flex-col gap-3 flex-1">
                        <h3 className="text-xl font-accent font-bold text-[var(--black)] group-hover:text-[var(--red-primary)] transition-colors duration-300 leading-snug">
                          {usp.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-7">
                          {usp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
