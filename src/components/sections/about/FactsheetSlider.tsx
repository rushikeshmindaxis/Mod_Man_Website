"use client";

import { Briefcase, Shield, FileText, TrendingUp, Users, Award } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const facts = [
  {
    icon: Briefcase,
    label: "Nature of Business",
    value: "Manufacturer & Supplier of Premium Modular & Office Furniture",
    description: "State-of-the-art CNC precision and European-grade hardware execution.",
  },
  {
    icon: Shield,
    label: "Legal Status of Firm",
    value: "Partnership Firm",
    description: "Registered under the Partnership Act, actively serving corporate & residential clients.",
  },
  {
    icon: FileText,
    label: "GST Number",
    value: "27ABLFM7936P1Z9",
    description: "Fully compliant, registered active taxpayer (GST Date: 07-08-2019).",
  },
  {
    icon: TrendingUp,
    label: "Annual Turnover",
    value: "INR 40 Lakhs - 1.5 Crores",
    description: "Consistent year-on-year growth built on trusted customer partnerships.",
  },
  {
    icon: Users,
    label: "Total Employees",
    value: "11 to 25 Skilled Personnel",
    description: "An expert team of modular designers, carpenters, and project site engineers.",
  },
  {
    icon: Award,
    label: "Key Partners",
    value: "Harshad Pedgaonkar, Deodatta Shelke, Shaunak Shelke",
    description: "Directing Modular Design, manufacturing quality control, and operations.",
  },
];

export default function FactsheetSlider() {
  return (
    <div className="w-[90%] max-w-[1300px] mx-auto mt-12">
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {facts.map((fact) => {
          const Icon = fact.icon;
          return (
            <StaggerItem key={fact.label} className="h-full">
              {/* Premium White Card with 16px (rounded-2xl) corners, soft shadow, and lift on hover */}
              <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between group">

                <div>
                  {/* Icon container */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[var(--red-muted)] text-[var(--red-primary)] transition-all duration-300 group-hover:bg-[var(--red-primary)] group-hover:text-white">
                    <Icon className="w-5.5 h-5.5" />
                  </div>

                  {/* Label */}
                  <span className="font-accent font-bold text-[10px] tracking-widest uppercase text-gray-400 block mb-2">
                    {fact.label}
                  </span>

                  {/* Value */}
                  <h3 className="text-gray-900 font-accent font-bold text-lg sm:text-xl leading-snug mb-4 group-hover:text-[var(--red-primary)] transition-colors duration-300">
                    {fact.value}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mt-auto font-light">
                  {fact.description}
                </p>

              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  );
}
