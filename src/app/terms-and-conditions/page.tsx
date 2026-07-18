import type { Metadata } from "next";
import { company } from "@/data/company";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions of service for ${company.name} modular furniture manufacturing and interior solutions.`,
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms &"
        titleAccent="Conditions"
        subtitle={`Commercial terms and conditions governing services provided by ${company.name}.`}
        breadcrumbLabel="Terms & Conditions"
      />

      <section className="section-padding bg-white">
        <div className="container max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-8 font-accent">
          <div>
            <h2 className="text-2xl font-bold text-[var(--black)] mb-3">1. Scope of Services</h2>
            <p>
              {company.name} provides modular furniture design, manufacturing, site delivery, and installation services as per agreed project specifications and estimates.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--black)] mb-3">2. Quotations & Quotation Validity</h2>
            <p>
              All formal project estimates provided by {company.name} are valid for 30 calendar days from the date of issuance unless specified otherwise in writing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--black)] mb-3">3. Delivery & Installation</h2>
            <p>
              Delivery timelines are subject to site readiness, final design sign-off, and material availability. Our installation teams execute on-site work adhering to quality standards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--black)] mb-3">4. Intellectual Property</h2>
            <p>
              All 3D designs, layouts, product renders, and website contents remain the intellectual property of {company.name}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
