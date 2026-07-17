// ─── FAQ Data ─────────────────────────────────────────────────────────────────

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqs: FAQ[] = [
  {
    id: "faq-001",
    question: "What types of furniture does Mod Men offer?",
    answer:
      "Mod Men offers a comprehensive range including modular kitchens, wardrobes, office furniture, living room furniture, bedroom furniture, commercial interiors, storage solutions, and fully custom-designed furniture. We cater to both residential and commercial clients.",
  },
  {
    id: "faq-002",
    question: "How long does it take to complete a modular kitchen installation?",
    answer:
      "The timeline depends on the scope and complexity of the project. A standard modular kitchen installation typically takes 7–15 working days from manufacturing to installation. Our team will provide you with a detailed timeline after the initial consultation.",
  },
  {
    id: "faq-003",
    question: "Do you offer customized furniture solutions?",
    answer:
      "Yes, customization is one of our core strengths. We work closely with clients to understand their requirements, space constraints, and aesthetic preferences, then design and manufacture fully bespoke solutions. There are no limitations on customization.",
  },
  {
    id: "faq-004",
    question: "What materials do you use in manufacturing?",
    answer:
      "We use only premium-grade materials including MR (Moisture Resistant) and BWR (Boiling Water Resistant) plywood, European-grade hardware (Hettich, Häfele, Blum), high-pressure laminates, acrylic finishes, lacquered glass, and solid wood for premium finishes.",
  },
  {
    id: "faq-005",
    question: "What warranty do you provide on your products?",
    answer:
      "Mod Men offers a comprehensive warranty on all products. We provide 5 years warranty on manufacturing defects, 1 year warranty on hardware, and lifetime after-sales support. Our dedicated service team ensures your investment is always protected.",
  },
  {
    id: "faq-006",
    question: "Do you handle installation and post-installation service?",
    answer:
      "Absolutely. Our service is completely turnkey — from initial design consultation to final installation and post-installation follow-up. We have a dedicated installation team and a responsive customer service department for all after-sales needs.",
  },
  {
    id: "faq-007",
    question: "How can I get a quotation or schedule a consultation?",
    answer:
      "You can contact us through our website's contact form, call us directly at our listed numbers, or visit our showroom. Our design consultants are available 6 days a week. We also offer free home/site visits for project consultations in applicable areas.",
  },
  {
    id: "faq-008",
    question: "Do you take projects outside of Punjab?",
    answer:
      "Yes, we undertake projects across India. We have successfully delivered projects in Chandigarh, Delhi, Mumbai, Bangalore, and other major cities. For pan-India projects, we deploy our specialized installation teams.",
  },
];
