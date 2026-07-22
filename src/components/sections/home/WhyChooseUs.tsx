import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Award, Ruler, Palette, Clock, Shield, Users } from "lucide-react";
import { company } from "@/data/company";
import { usps } from "@/data/index";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";

const highlights = [
  "14+ years of design & manufacturing excellence",
  "State-of-the-art CNC manufacturing facility",
  "European-grade hardware & premium materials",
  "Turnkey delivery and installation service",
];

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Award,
  Ruler,
  Palette,
  Clock,
  Shield,
  Users,
};

export default function WhyChooseUs() {
  return (
    <section className="w-full min-h-screen lg:h-screen bg-white relative overflow-hidden flex flex-col lg:flex-row items-stretch">
      {/* Left: Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-8 lg:gap-10 why-choose-us-left pr-6 sm:pr-12 lg:pr-16 xl:pr-24 py-16 lg:py-12 z-10">
        <SectionHeader
          label="Why Choose Us"
          title="The Mod Men"
          titleAccent="Difference"
          subtitle="We don't just manufacture furniture — we engineer living and working spaces that reflect precision, taste, and timeless quality."
          className="!gap-6 lg:!gap-8"
        />

        <AnimatedSection delay={0.3}>
          <ul className="flex flex-col gap-4">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span style={{ color: "var(--red-primary)" }}>
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                </span>
                <span className="text-gray-600 font-accent">{h}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link href="/about" className="btn-primary">
              About Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Get a Quote
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* Right: Full-Bleed Image spanning full height and width */}
      <AnimatedSection className="w-full lg:w-1/2 relative min-h-[450px] lg:min-h-0 self-stretch" direction="left" delay={0.2}>
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/modmen-difference.png"
            alt="Mod Men Manufacturing Excellence"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle overlay gradients for seamless design integration */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:block hidden w-32 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent lg:hidden block h-24 z-10" />
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
        </div>

      </AnimatedSection>
    </section>
  );
}
