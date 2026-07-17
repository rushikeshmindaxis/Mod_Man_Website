"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

type FormState = "idle" | "submitting" | "success" | "error";

const services = [
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

export default function ContactFormClient() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    city: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate form submission — replace with actual endpoint
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
  };

  if (formState === "success") {
    return (
      <AnimatedSection>
        <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <CheckCircle className="w-20 h-20 mx-auto mb-6 text-green-500" />
          </motion.div>
          <h3 className="heading-md text-[var(--black)] mb-4">
            Message Received!
          </h3>
          <p className="text-gray-500 mb-8">
            Thank you for reaching out. Our team will contact you within 24 hours.
          </p>
          <button
            onClick={() => { setFormState("idle"); setFormData({ name: "", email: "", phone: "", service: "", city: "", message: "" }); }}
            className="btn-primary mx-auto"
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
        className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100"
      >
        <h3 className="heading-sm text-[var(--black)] mb-2">Send Us a Message</h3>
        <p className="text-gray-500 text-sm mb-8">
          Fill in the form and we&apos;ll get back to you within 24 hours.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <div className="sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-accent font-semibold text-gray-700 tracking-wide uppercase">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="h-12 px-4 rounded-xl border border-gray-200 text-sm font-accent focus:outline-none focus:border-[var(--red-primary)] focus:ring-2 focus:ring-[var(--red-primary)]/10 transition-all duration-200"
              />
            </div>
            <div className="flex flex-col gap-1.5 mt-5 sm:mt-0">
              <label className="text-xs font-accent font-semibold text-gray-700 tracking-wide uppercase">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 98765 43210"
                className="h-12 px-4 rounded-xl border border-gray-200 text-sm font-accent focus:outline-none focus:border-[var(--red-primary)] focus:ring-2 focus:ring-[var(--red-primary)]/10 transition-all duration-200"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-accent font-semibold text-gray-700 tracking-wide uppercase">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="h-12 px-4 rounded-xl border border-gray-200 text-sm font-accent focus:outline-none focus:border-[var(--red-primary)] focus:ring-2 focus:ring-[var(--red-primary)]/10 transition-all duration-200"
            />
          </div>

          {/* City */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-accent font-semibold text-gray-700 tracking-wide uppercase">
              Your City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City name"
              className="h-12 px-4 rounded-xl border border-gray-200 text-sm font-accent focus:outline-none focus:border-[var(--red-primary)] focus:ring-2 focus:ring-[var(--red-primary)]/10 transition-all duration-200"
            />
          </div>

          {/* Service */}
          <div className="sm:col-span-2 flex flex-col gap-1.5">
            <label className="text-xs font-accent font-semibold text-gray-700 tracking-wide uppercase">
              I&apos;m Interested In
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="h-12 px-4 rounded-xl border border-gray-200 text-sm font-accent focus:outline-none focus:border-[var(--red-primary)] focus:ring-2 focus:ring-[var(--red-primary)]/10 transition-all duration-200 bg-white"
            >
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="sm:col-span-2 flex flex-col gap-1.5">
            <label className="text-xs font-accent font-semibold text-gray-700 tracking-wide uppercase">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell us about your project — space size, requirements, timeline, etc."
              className="px-4 py-3 rounded-xl border border-gray-200 text-sm font-accent focus:outline-none focus:border-[var(--red-primary)] focus:ring-2 focus:ring-[var(--red-primary)]/10 transition-all duration-200 resize-none"
            />
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <motion.button
            type="submit"
            disabled={formState === "submitting"}
            className="btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {formState === "submitting" ? (
              <>
                <motion.div
                  className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                />
                Sending...
              </>
            ) : (
              <>
                Send Message <Send className="w-4 h-4" />
              </>
            )}
          </motion.button>
          <p className="text-xs text-gray-400 font-accent">
            We respond within 24 hours
          </p>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          By submitting, you agree to be contacted by our team regarding your inquiry.
        </p>
      </form>
    </AnimatedSection>
  );
}
