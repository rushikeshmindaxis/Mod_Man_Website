import type { Metadata } from "next";
import { company } from "@/data/company";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy and data protection guidelines for ${company.name}. Learn how we protect customer data and information.`,
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy"
        titleAccent="Policy"
        subtitle={`Your privacy matters to us at ${company.name}. Learn how we collect, protect, and handle your data.`}
        breadcrumbLabel="Privacy Policy"
      />

      <section className="section-padding bg-white">
        <div className="container max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-8 font-accent">
          <div>
            <h2 className="text-2xl font-bold text-[var(--black)] mb-3">1. Information We Collect</h2>
            <p>
              When you submit an enquiry, request a design consultation, or call us, {company.name} may collect personal information such as your name, email address, phone number, city, and project requirements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--black)] mb-3">2. How We Use Your Information</h2>
            <p>
              We use the collected information exclusively to process your modular furniture inquiries, schedule site visits, provide project estimates, and improve our interior design services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--black)] mb-3">3. Data Security</h2>
            <p>
              We implement industry-standard security measures and encryption protocols to safeguard your personal data from unauthorized access or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--black)] mb-3">4. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact us at{" "}
              <a href={`mailto:${company.email}`} className="text-[var(--red-primary)] font-semibold hover:underline">
                {company.email}
              </a>{" "}
              or call us at {company.phone}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
