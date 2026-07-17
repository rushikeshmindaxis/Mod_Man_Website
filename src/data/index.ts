// ─── Why Choose Us Data ───────────────────────────────────────────────────────

export interface USP {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export const usps: USP[] = [
  {
    id: "usp-001",
    icon: "Award",
    title: "Premium Quality",
    description:
      "We use only the finest materials — European-grade hardware, moisture-resistant boards, and premium laminates that stand the test of time.",
  },
  {
    id: "usp-002",
    icon: "Ruler",
    title: "Precision Engineering",
    description:
      "Every piece is manufactured with millimetre precision using state-of-the-art CNC machinery and quality-controlled processes.",
  },
  {
    id: "usp-003",
    icon: "Palette",
    title: "Custom Design",
    description:
      "Our in-house designers work exclusively on your project, creating spaces that are uniquely yours — no templates, no compromises.",
  },
  {
    id: "usp-004",
    icon: "Clock",
    title: "On-Time Delivery",
    description:
      "We are committed to delivering projects on schedule. Our streamlined manufacturing and logistics ensure zero delays.",
  },
  {
    id: "usp-005",
    icon: "Shield",
    title: "5-Year Warranty",
    description:
      "Comprehensive 5-year warranty on manufacturing, backed by lifetime after-sales support and a dedicated service team.",
  },
  {
    id: "usp-006",
    icon: "Users",
    title: "Expert Team",
    description:
      "Our team of experienced designers, engineers, and craftsmen brings decades of collective expertise to every project.",
  },
];

// ─── Industries We Serve ──────────────────────────────────────────────────────

export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
  image: string;
}

export const industries: Industry[] = [
  {
    id: "ind-001",
    name: "Residential",
    icon: "Home",
    description: "Homes & Villas",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80",
  },
  {
    id: "ind-002",
    name: "Corporate",
    icon: "Building2",
    description: "Offices & HQs",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
  },
  {
    id: "ind-003",
    name: "Hospitality",
    icon: "Hotel",
    description: "Hotels & Resorts",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&q=80",
  },
  {
    id: "ind-004",
    name: "Retail",
    icon: "ShoppingBag",
    description: "Showrooms & Stores",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80",
  },
  {
    id: "ind-005",
    name: "Healthcare",
    icon: "Heart",
    description: "Clinics & Hospitals",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80",
  },
  {
    id: "ind-006",
    name: "Education",
    icon: "GraduationCap",
    description: "Schools & Institutes",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80",
  },
  {
    id: "ind-007",
    name: "F&B",
    icon: "UtensilsCrossed",
    description: "Restaurants & Cafes",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=80",
  },
  {
    id: "ind-008",
    name: "Industrial",
    icon: "Factory",
    description: "Factories & Plants",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const stats: Stat[] = [
  {
    id: "stat-001",
    value: 14,
    suffix: "+",
    label: "Years of Excellence",
    description: "Delivering premium quality since 2010",
  },
  {
    id: "stat-002",
    value: 2500,
    suffix: "+",
    label: "Projects Completed",
    description: "Across residential and commercial sectors",
  },
  {
    id: "stat-003",
    value: 500,
    suffix: "+",
    label: "Happy Clients",
    description: "Trusted by homeowners and businesses",
  },
  {
    id: "stat-004",
    value: 15,
    suffix: "+",
    label: "Cities Served",
    description: "Pan-India presence and delivery",
  },
];

// ─── Company Timeline ─────────────────────────────────────────────────────────

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  milestone?: boolean;
}

export const timeline: TimelineEvent[] = [
  {
    id: "tl-001",
    year: "2010",
    title: "Foundation",
    description:
      "Mod Men was established with a vision to deliver premium modular furniture solutions to discerning clients in Punjab.",
    milestone: true,
  },
  {
    id: "tl-002",
    year: "2013",
    title: "Manufacturing Expansion",
    description:
      "Expanded our manufacturing facility to 50,000 sq ft with state-of-the-art CNC machinery and European-grade processes.",
  },
  {
    id: "tl-003",
    year: "2016",
    title: "Commercial Division Launch",
    description:
      "Launched our dedicated commercial interiors division, serving corporate offices, hotels, and retail spaces.",
    milestone: true,
  },
  {
    id: "tl-004",
    year: "2018",
    title: "1,000 Projects Milestone",
    description:
      "Celebrated the completion of our 1,000th project — a testament to trust, quality, and consistent delivery.",
  },
  {
    id: "tl-005",
    year: "2020",
    title: "Pan-India Expansion",
    description:
      "Extended operations to serve clients across India, with successful project deliveries in Delhi, Mumbai, and Bangalore.",
    milestone: true,
  },
  {
    id: "tl-006",
    year: "2022",
    title: "Innovation Lab",
    description:
      "Launched our design innovation lab for developing next-generation modular solutions using sustainable materials.",
  },
  {
    id: "tl-007",
    year: "2024",
    title: "2,500+ Projects",
    description:
      "Achieved our 2,500+ project milestone while maintaining our uncompromising standards of quality and craftsmanship.",
    milestone: true,
  },
];

// ─── Our Process ──────────────────────────────────────────────────────────────

export interface ProcessStep {
  id: string;
  step: number;
  icon: string;
  title: string;
  description: string;
}

export const process: ProcessStep[] = [
  {
    id: "proc-001",
    step: 1,
    icon: "MessageSquare",
    title: "Consultation",
    description:
      "We begin with an in-depth consultation to understand your requirements, lifestyle, and vision.",
  },
  {
    id: "proc-002",
    step: 2,
    icon: "PenTool",
    title: "Design",
    description:
      "Our designers create detailed 3D visualisations and technical drawings tailored to your space.",
  },
  {
    id: "proc-003",
    step: 3,
    icon: "Hammer",
    title: "Manufacturing",
    description:
      "Each component is precision-manufactured in our facility using premium materials and CNC technology.",
  },
  {
    id: "proc-004",
    step: 4,
    icon: "CheckCircle",
    title: "Quality Check",
    description:
      "Rigorous multi-stage quality inspection ensures every piece meets our exacting standards before dispatch.",
  },
  {
    id: "proc-005",
    step: 5,
    icon: "Truck",
    title: "Delivery",
    description:
      "Safe, careful delivery to your site with full tracking and coordination with your schedule.",
  },
  {
    id: "proc-006",
    step: 6,
    icon: "Wrench",
    title: "Installation",
    description:
      "Our expert installation team completes the setup with precision, leaving your space immaculate.",
  },
];

// ─── Trusted By (Client Logos) ────────────────────────────────────────────────

export interface ClientLogo {
  id: string;
  name: string;
  logo?: string; // Replace with actual logo paths
  sector: string;
}

export const trustedBy: ClientLogo[] = [
  { id: "cl-001", name: "TechCorp Solutions", sector: "Technology" },
  { id: "cl-002", name: "The Grand Dining Co.", sector: "Hospitality" },
  { id: "cl-003", name: "Fashion House Retail", sector: "Retail" },
  { id: "cl-004", name: "Mountain Retreat Hotels", sector: "Hotels" },
  { id: "cl-005", name: "Punjab National Corp", sector: "Corporate" },
  { id: "cl-006", name: "Skyline Developers", sector: "Real Estate" },
  { id: "cl-007", name: "Prestige Residences", sector: "Residential" },
  { id: "cl-008", name: "Modern Living Co.", sector: "Retail" },
];
