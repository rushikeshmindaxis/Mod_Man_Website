"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { company } from "@/data/company";

export default function AboutSummarySection() {
  return (
    <section className="section-padding bg-white border-b border-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-center">
          {/* Left Column: Image (30% or 3/10 cols) */}
          <div className="lg:col-span-3 w-full">
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

          {/* Right Column: Text Content (70% or 7/10 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center text-center">
            <SectionHeader
              align="center"
              label="About Company"
              title="Built on a Foundation of"
              titleAccent="Excellence"
              subtitle="What began as a small workshop in Pune has grown into one of India's most trusted modular furniture studios."
              className="mx-auto"
            />
            <AnimatedSection delay={0.2}>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed max-w-2xl mx-auto">
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

            <AnimatedSection delay={0.3} className="mt-8">
              <div className="flex items-center justify-center">
                <Link href="/about" className="btn-primary">
                  Read Our Full Story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
