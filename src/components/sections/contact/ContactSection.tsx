"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle, MessageSquare, Send } from "lucide-react";
import { company } from "@/data/company";
import AnimatedSection from "@/components/ui/AnimatedSection";

type FormState = "idle" | "submitting" | "success";

interface FormDataState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const INITIAL_FORM_DATA: FormDataState = {
  name: "",
  phone: "",
  email: "",
  message: "",
};



export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState<FormDataState>(INITIAL_FORM_DATA);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate server request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState("success");
  };

  const handleReset = () => {
    setFormState("idle");
    setFormData(INITIAL_FORM_DATA);
  };

  return (
    <section className="relative py-12 lg:py-16 bg-[var(--gray-50)] overflow-hidden w-full">
      <div className="container max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          {/* Left Column: Direct Contacts (5/12 cols) */}
          <div className="lg:col-span-5 bg-slate-50 border border-gray-200/80 p-6 sm:p-8 pt-10 sm:pt-14 rounded-3xl w-full flex flex-col h-full">
            <div className="w-full flex flex-col items-center text-center mb-16 pb-6 pt-4 px-4 sm:px-6 border-b border-gray-200">
              <p className="text-[11px] font-bold uppercase tracking-widest font-mono text-[var(--red-primary)] mb-2">
                Direct Channels
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-4">
                Direct Contacts
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-md mb-6 pt-2">
                Reach out directly to our sales office or technical support unit. We respond to all queries within 24 business hours.
              </p>
            </div>

            {/* Call Sales & Support Card */}
            <div 
              className="bg-white border border-gray-200/80 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3.5 shadow-sm hover:shadow-md transition-all mb-4 w-full"
              style={{ minHeight: "140px" }}
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--red-primary)] flex items-center justify-center border border-red-100 flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="w-full">
                <p className="text-[10px] font-bold uppercase tracking-wider font-mono text-gray-400 mb-1">
                  Call Sales & Support
                </p>
                <div className="flex flex-col items-center gap-1">
                  <a href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`} className="text-sm sm:text-base font-bold text-gray-800 hover:text-[var(--red-primary)] transition-colors break-words block">
                    {company.phone}
                  </a>
                  {company.phone2 && (
                    <a href={`tel:${company.phone2.replace(/[^0-9+]/g, '')}`} className="text-sm sm:text-base font-bold text-gray-800 hover:text-[var(--red-primary)] transition-colors break-words block">
                      {company.phone2}
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Email Inquiry Card */}
            <div 
              className="bg-white border border-gray-200/80 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3.5 shadow-sm hover:shadow-md transition-all mb-4 w-full"
              style={{ minHeight: "140px" }}
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--red-primary)] flex items-center justify-center border border-red-100 flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="w-full">
                <p className="text-[10px] font-bold uppercase tracking-wider font-mono text-gray-400 mb-1">
                  Email Inquiry
                </p>
                <a href={`mailto:${company.email}`} className="text-sm sm:text-base font-bold text-gray-800 hover:text-[var(--red-primary)] transition-colors break-all block">
                  {company.email}
                </a>
              </div>
            </div>

            {/* Google Map Embed with address overlay */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 h-[260px] relative w-full group shadow-sm">
              <iframe
                src={company.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mod Men Location Map"
                className="opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(company.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-colors duration-300"
                aria-label="View on Google Maps"
              />
              {/* Open in Maps badge - top left */}
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(company.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-white text-gray-800 text-[11px] font-semibold px-3 py-1.5 rounded-lg shadow-md border border-gray-200 hover:bg-red-50 hover:text-[var(--red-primary)] hover:border-red-200 transition-all duration-200"
              >
                <MapPin className="w-3.5 h-3.5 text-[var(--red-primary)]" />
                Open in Maps
              </a>
              {/* Company Logo overlay - top right */}
              <div className="absolute top-3 right-3 z-20 bg-white rounded-xl shadow-md border border-gray-200 px-3 py-2 pointer-events-none flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Mod Men Logo"
                  className="h-7 w-auto object-contain"
                />
              </div>
              {/* Address overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-sm border-t border-gray-200 px-4 py-3 flex items-center gap-3 pointer-events-none">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[var(--red-primary)] flex items-center justify-center border border-red-100 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-wider font-mono text-gray-400 leading-none mb-0.5">
                    Main Plant Address
                  </p>
                  <p className="text-xs font-semibold text-gray-800 leading-tight truncate">
                    {company.address.full}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: RFQ Form (7/12 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl shadow-gray-200/40 border-t-4 border-[var(--red-primary)] border-x border-b border-gray-200/80 w-full flex flex-col justify-center">
            <div className="w-full flex flex-col items-center text-center mb-8">
              <p className="text-[11px] font-bold uppercase tracking-widest font-mono text-[var(--red-primary)] mb-2">
                Interactive Terminal
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-gray-900">
                Send Request For Quote
              </h3>
            </div>

            <AnimatedSection direction="up" className="w-full flex flex-col items-center">
              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-16 px-4">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-100"
                  >
                    <CheckCircle className="w-10 h-10" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Thank you!</h4>
                  <p className="text-gray-500 max-w-sm mb-8 text-sm">
                    Your inquiry has been submitted successfully. Our design experts will reach out to you shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10 max-w-[520px] mx-auto w-full">
                  {/* Name */}
                  <div className="flex flex-col gap-2.5">
                    <label 
                      className="block text-sm font-bold uppercase tracking-wider text-gray-900 text-center"
                      style={{ paddingTop: "10px", paddingBottom: "10px" }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      minLength={2}
                      maxLength={50}
                      title="Please enter at least 2 characters"
                      placeholder="e.g. John Doe"
                      className="w-full rounded-none border border-gray-250 bg-gray-50/50 text-base focus:bg-white focus:border-[var(--red-primary)] focus:ring-1 focus:ring-[var(--red-primary)] transition-all outline-none placeholder:text-gray-400 text-center"
                      style={{ height: "52px", paddingLeft: "20px", paddingRight: "20px" }}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2.5">
                    <label 
                      className="block text-sm font-bold uppercase tracking-wider text-gray-900 text-center"
                      style={{ paddingTop: "10px", paddingBottom: "10px" }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      placeholder="e.g. name@company.com"
                      className="w-full rounded-none border border-gray-250 bg-gray-50/50 text-base focus:bg-white focus:border-[var(--red-primary)] focus:ring-1 focus:ring-[var(--red-primary)] transition-all outline-none placeholder:text-gray-400 text-center"
                      style={{ height: "52px", paddingLeft: "20px", paddingRight: "20px" }}
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2.5">
                    <label 
                      className="block text-sm font-bold uppercase tracking-wider text-gray-900 text-center"
                      style={{ paddingTop: "10px", paddingBottom: "10px" }}
                    >
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      minLength={10}
                      maxLength={10}
                      title="Please enter exactly 10 digits"
                      placeholder="e.g. 9876543210"
                      className="w-full rounded-none border border-gray-250 bg-gray-50/50 text-base focus:bg-white focus:border-[var(--red-primary)] focus:ring-1 focus:ring-[var(--red-primary)] transition-all outline-none placeholder:text-gray-400 text-center"
                      style={{ height: "52px", paddingLeft: "20px", paddingRight: "20px" }}
                    />
                  </div>



                  {/* Requirements / Message */}
                  <div className="flex flex-col gap-2.5">
                    <label 
                      className="block text-sm font-bold uppercase tracking-wider text-gray-900 text-center"
                      style={{ paddingTop: "10px", paddingBottom: "10px" }}
                    >
                      Requirements / Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      minLength={10}
                      maxLength={1000}
                      title="Please enter at least 10 characters"
                      placeholder="Briefly describe your space requirements, dimensions, product specifications, or project details..."
                      className="w-full py-4 rounded-none border border-gray-250 bg-gray-50/50 text-base focus:bg-white focus:border-[var(--red-primary)] focus:ring-1 focus:ring-[var(--red-primary)] transition-all resize-none placeholder:text-gray-400 outline-none text-center"
                      style={{ minHeight: "140px", paddingTop: "14px", paddingLeft: "20px", paddingRight: "20px" }}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <motion.button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="w-full py-4 text-base font-bold rounded-none text-white shadow-md shadow-red-500/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed group bg-[var(--red-primary)] hover:bg-red-700"
                      style={{ height: "52px" }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {formState === "submitting" ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Request...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Request For Quote
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
