"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { company } from "@/data/company";
import { footerLinks } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className="bg-[var(--black)] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />

      {/* Red top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(90deg, var(--red-primary), var(--red-deep))",
        }}
      />

      {/* Background radial soft light to make it look premium */}
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 pointer-events-none blur-3xl"
        style={{ background: "var(--red-primary)" }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-5 pointer-events-none blur-3xl"
        style={{ background: "var(--red-primary)" }}
      />

      {/* Padding Container Enforced via Inline Styles to Bypass Tailwind Compile Cache locks */}
      <div
        className="container relative z-10"
        style={{
          paddingTop: "2.5rem",
          paddingBottom: "2rem",
        }}
      >
        
        {/* ── Main Grid ──────────────────────────────────────────────── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 border-b border-white/10"
          style={{ paddingBottom: "1.75rem" }}
        >
          
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-3 flex flex-col items-start gap-6">
            <Link
              href="/"
              className="block"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  window.location.reload();
                }
              }}
            >
              <Image
                src="/logo.png"
                alt="Mod Men"
                width={160}
                height={64}
                className="h-14 w-auto"
                style={{ width: "auto", filter: "brightness(0) saturate(100%) invert(18%) sepia(88%) saturate(5451%) hue-rotate(346deg) brightness(85%) contrast(85%)" }}
              />
            </Link>
            <p className="text-gray-300 text-base leading-relaxed max-w-sm font-accent font-light tracking-wide">
              {company.shortDescription}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3.5">
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-[var(--red-primary)] hover:bg-[var(--red-primary)] hover:text-white hover:border-[var(--red-primary)] hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-accent font-bold text-xs tracking-widest uppercase mb-5 flex items-center gap-3">
              <span
                className="w-6 h-0.5 rounded"
                style={{ background: "var(--red-primary)" }}
              />
              Quick Links
            </h4>
             <ul className="flex flex-col gap-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (pathname === link.href || pathname.startsWith(link.href + "/")) {
                        e.preventDefault();
                        window.location.reload();
                      }
                    }}
                    className="flex items-center gap-2 text-base text-gray-300 hover:text-white transition-colors duration-250 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--red-primary)] -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-250" />
                    <span className="group-hover:translate-x-1 transition-transform duration-250 font-accent">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-accent font-bold text-xs tracking-widest uppercase mb-5 flex items-center gap-3">
              <span
                className="w-6 h-0.5 rounded"
                style={{ background: "var(--red-primary)" }}
              />
              Products
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (pathname === link.href || pathname.startsWith(link.href + "/")) {
                        e.preventDefault();
                        window.location.reload();
                      }
                    }}
                    className="flex items-center gap-2 text-base text-gray-300 hover:text-white transition-colors duration-250 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--red-primary)] -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-250" />
                    <span className="group-hover:translate-x-1 transition-transform duration-250 font-accent">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-accent font-bold text-xs tracking-widest uppercase mb-5 flex items-center gap-3">
              <span
                className="w-6 h-0.5 rounded"
                style={{ background: "var(--red-primary)" }}
              />
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              
              {/* Phone item */}
              <a
                href={`tel:${company.phone}`}
                className="flex items-start gap-4 group"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-[var(--red-primary)] group-hover:scale-105"
                  style={{ background: "var(--red-muted)" }}
                >
                  <Phone className="w-4 h-4 text-[var(--red-primary)] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 tracking-wider uppercase mb-1 font-accent font-bold">Call Us</p>
                  <p className="text-base text-gray-200 font-accent group-hover:text-white transition-colors duration-200">
                    {company.phone}
                  </p>
                  <p className="text-base text-gray-200 font-accent group-hover:text-white transition-colors duration-200">
                    {company.phone2}
                  </p>
                </div>
              </a>

              {/* Email item */}
              <a
                href={`mailto:${company.email}`}
                className="flex items-start gap-4 group"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-[var(--red-primary)] group-hover:scale-105"
                  style={{ background: "var(--red-muted)" }}
                >
                  <Mail className="w-4 h-4 text-[var(--red-primary)] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 tracking-wider uppercase mb-1 font-accent font-bold">Email</p>
                  <p className="text-base text-gray-200 font-accent group-hover:text-white transition-colors duration-200 break-all">
                    {company.email}
                  </p>
                </div>
              </a>

              {/* Address item */}
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(company.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-[var(--red-primary)] group-hover:scale-105"
                  style={{ background: "var(--red-muted)" }}
                >
                  <MapPin className="w-4 h-4 text-[var(--red-primary)] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 tracking-wider uppercase mb-1 font-accent font-bold">Address</p>
                  <p className="text-base text-gray-200 leading-relaxed font-accent font-light group-hover:text-white transition-colors duration-200">
                    {company.address.line1}
                    <br />
                    {company.address.line2}
                    <br />
                    {company.address.city}, {company.address.state} {company.address.pincode}
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* Column 5: Location Map */}
          <div className="lg:col-span-3 md:col-span-3">
            <h4 className="text-white font-accent font-bold text-xs tracking-widest uppercase mb-5 flex items-center gap-3">
              <span
                className="w-6 h-0.5 rounded"
                style={{ background: "var(--red-primary)" }}
              />
              Our Location
            </h4>
            <div className="rounded-xl overflow-hidden border border-white/10 h-[280px] relative group bg-gray-100/10">
              <iframe
                src={company.mapEmbedUrl}
                style={{ border: 0, width: "100%", height: "100%", position: "absolute", inset: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Mod Men Location Map"
                className="opacity-80 group-hover:opacity-100 transition-opacity duration-300 z-0"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=18.448333,73.902694"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-300 z-10"
                aria-label="View on Google Maps"
              />
              {/* Open in Maps badge */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=18.448333,73.902694"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-white text-gray-800 text-[11px] font-semibold px-3 py-1.5 rounded-lg shadow-md border border-gray-200 hover:bg-red-50 hover:text-[var(--red-primary)] hover:border-red-200 transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 text-[var(--red-primary)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
                Open in Maps
              </a>
              {/* Animated location pin - center */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none" style={{ paddingBottom: "40px" }}>
                <div className="flex flex-col items-center">
                  <div className="animate-bounce">
                    <div className="w-10 h-10 rounded-full bg-[var(--red-primary)] flex items-center justify-center shadow-lg shadow-red-500/50 border-4 border-white">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="w-3 h-1.5 bg-black/20 rounded-full mt-0.5 blur-[1px]" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Centered Bottom Bar ─────────────────────────────────────── */}
        <div
          className="flex flex-col items-center justify-center gap-3 text-center px-16 lg:px-4 w-full"
          style={{ paddingTop: "1.25rem" }}
        >
          {/* 1 - Copyright */}
          <p className="text-gray-400 text-sm tracking-wide font-accent">
            © {currentYear} {company.name}. All rights reserved.
          </p>

          {/* 2 - Developer Credit */}
          <p className="text-gray-400 text-xs tracking-wide font-accent">
            Developed By{" "}
            <a
              href="https://mindaxisinnovation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold"
            >
              MindAxis Innovation Pvt Ltd.
            </a>
          </p>

          {/* 3 - Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-250 font-accent tracking-wide"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-250 font-accent tracking-wide"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/sitemap.xml"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-250 font-accent tracking-wide"
            >
              Sitemap
            </Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
