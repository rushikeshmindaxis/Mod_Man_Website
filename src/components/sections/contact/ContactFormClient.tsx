"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Clock } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

type FormState = "idle" | "submitting" | "success";

interface FormDataState {
  name: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  address: string;
  message: string;
}

const INITIAL_FORM_DATA: FormDataState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  service: "",
  address: "",
  message: "",
};

const SERVICES = [
  "Modular Kitchen",
  "Wardrobes",
  "Office Furniture",
  "Living Room",
  "Bedroom Furniture",
  "Commercial Interiors",
  "Storage Solutions",
  "Custom Design",
  "Other",
];

const FIELD_CLASSES =
  "w-full h-16 px-6 rounded-2xl border border-gray-300 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all block bg-white font-accent";

export default function ContactFormClient() {
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

    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
  };

  const handleReset = () => {
    setFormState("idle");
    setFormData(INITIAL_FORM_DATA);
  };

  if (formState === "success") {
    return (
      <AnimatedSection>
        <div className="bg-white rounded-[24px] p-8 sm:p-12 text-center shadow-xl shadow-gray-200/40 border border-gray-100 flex flex-col items-center justify-center min-h-[450px]">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <CheckCircle className="w-16 h-16 mx-auto mb-6 text-emerald-500" />
          </motion.div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[var(--black)] mb-3">
            Enquiry Submitted!
          </h3>
          <p className="text-gray-500 text-base max-w-md mx-auto mb-8 leading-relaxed">
            Thank you for reaching out. Our design team will contact you within 24 hours.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="btn-primary px-8 py-3.5 rounded-xl font-semibold shadow-md cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection direction="left">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-[24px] p-6 sm:p-8 lg:p-10 shadow-xl shadow-gray-200/40 border border-gray-100/90 w-full"
      >
        <div className="mb-8">
          <span className="text-xs font-accent font-bold tracking-widest text-[var(--red-primary)] uppercase mb-2 block">
            Get In Touch
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--black)] mb-2.5 leading-snug">
            Enquiry Form
          </h3>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Share your requirement and we&apos;ll get back to you with the right solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-name"
              className="text-xs font-accent font-bold text-gray-800 tracking-wide uppercase"
            >
              Full Name <span className="text-[var(--red-primary)]">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              aria-required="true"
              placeholder="Your full name"
              className={FIELD_CLASSES}
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-phone"
              className="text-xs font-accent font-bold text-gray-800 tracking-wide uppercase"
            >
              Phone Number <span className="text-[var(--red-primary)]">*</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[+0-9\s-]{10,15}"
              autoComplete="tel"
              aria-required="true"
              placeholder="+91 98765 43210"
              className={FIELD_CLASSES}
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-email"
              className="text-xs font-accent font-bold text-gray-800 tracking-wide uppercase"
            >
              Email Address <span className="text-[var(--red-primary)]">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              aria-required="true"
              placeholder="your@email.com"
              className={FIELD_CLASSES}
            />
          </div>

          {/* Your City */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-city"
              className="text-xs font-accent font-bold text-gray-800 tracking-wide uppercase"
            >
              Your City
            </label>
            <input
              id="contact-city"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              autoComplete="address-level2"
              placeholder="e.g. Pune, Mumbai"
              className={FIELD_CLASSES}
            />
          </div>

          {/* Service Dropdown */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-service"
              className="text-xs font-accent font-bold text-gray-800 tracking-wide uppercase"
            >
              I&apos;m Interested In
            </label>
            <select
              id="contact-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`${FIELD_CLASSES} cursor-pointer bg-white`}
            >
              <option value="">Select a service</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-address"
              className="text-xs font-accent font-bold text-gray-800 tracking-wide uppercase"
            >
              Address
            </label>
            <input
              id="contact-address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              autoComplete="street-address"
              placeholder="Enter your address"
              className={FIELD_CLASSES}
            />
          </div>

          {/* Message Textarea (Full Width) */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <label
              htmlFor="contact-message"
              className="text-xs font-accent font-bold text-gray-800 tracking-wide uppercase"
            >
              Your Message <span className="text-[var(--red-primary)]">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              aria-required="true"
              placeholder="Tell us about your project — space size, requirements, timeline, etc."
              className="w-full min-h-[160px] p-6 rounded-2xl border border-gray-300 text-base placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all block text-gray-900 bg-white font-accent resize-none leading-relaxed"
            />
          </div>

          {/* Submit Button & Response Time Badge (Full Width) */}
          <div className="md:col-span-2 mt-2 flex flex-col items-center w-full gap-3">
            <motion.button
              type="submit"
              disabled={formState === "submitting"}
              className="w-full py-4 px-8 text-base font-semibold rounded-xl text-white bg-[var(--red-primary)] hover:bg-[#a0182d] shadow-lg shadow-[var(--red-primary)]/20 hover:shadow-xl hover:shadow-[var(--red-primary)]/30 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer group"
              whileHover={{ scale: 1.005 }}
              whileTap={{ scale: 0.995 }}
            >
              {formState === "submitting" ? (
                <>
                  <motion.div
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Submit Enquiry</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </>
              )}
            </motion.button>

            {/* Response-time badge */}
            <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gray-100/80 text-gray-600 text-xs font-accent font-medium">
              <Clock className="w-3.5 h-3.5 text-[var(--red-primary)]" />
              <span>Response within 24 hours</span>
            </div>
          </div>
        </div>
      </form>
    </AnimatedSection>
  );
}
