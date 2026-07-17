// ─── Products Data ────────────────────────────────────────────────────────────
// To add products: duplicate any product object below and update the fields.
// To add categories: add a new category to `productCategories` and add products
// with that category slug.

export interface Product {
  id: string;
  name: string;
  category: string; // Must match a category slug
  description: string;
  shortDescription: string;
  image: string;
  featured: boolean;
  tags: string[];
}

export interface ProductCategory {
  slug: string;
  name: string;
  description: string;
  image: string;
  icon: string; // Lucide icon name
  count?: number;
}

export const productCategories: ProductCategory[] = [
  {
    slug: "office-furniture",
    name: "Office Furniture",
    description:
      "Modern, ergonomic office furniture that elevates productivity and aesthetics.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    icon: "Building2",
  },
  {
    slug: "modular-office-workstation",
    name: "Modular Office Workstation",
    description:
      "Highly customizable and modular workstations designed for collaborative and focused work.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    icon: "Grid",
  },
];

export const products: Product[] = [
  // ── Office Furniture ─────────────────────────────────────────────────
  {
    id: "of-001",
    name: "Executive Director Desk",
    category: "office-furniture",
    description:
      "Premium executive desk with built-in cable management, storage drawers, and premium wood veneer finish.",
    shortDescription: "Premium executive desk with cable management",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    featured: true,
    tags: ["Executive", "Premium", "Wood Veneer"],
  },
  {
    id: "of-003",
    name: "Ergonomic Task Chair",
    category: "office-furniture",
    description:
      "High-back ergonomic mesh chair with dynamic lumbar support, 3D adjustable armrests, and synchro-tilt mechanism.",
    shortDescription: "Ergonomic mesh chair with adjustable support",
    image: "https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?w=800&q=80",
    featured: true,
    tags: ["Ergonomic", "Mesh", "Adjustable"],
  },
  {
    id: "of-004",
    name: "Modular Boardroom Table",
    category: "office-furniture",
    description:
      "Stunning modular boardroom table with integrated pop-up connectivity hubs and premium finish.",
    shortDescription: "Modular boardroom table with pop-up connectivity",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    featured: false,
    tags: ["Boardroom", "Modular", "Premium"],
  },

  // ── Modular Office Workstation ───────────────────────────────────────
  {
    id: "ws-001",
    name: "Linear Workstation Pods (4-Seater)",
    category: "modular-office-workstation",
    description:
      "Modern linear 4-seater modular office workstation with metal powder-coated legs, acoustic privacy screens, and integrated raceway for wiring.",
    shortDescription: "Linear 4-seater modular workstation with acoustic screens",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    featured: true,
    tags: ["Linear", "Modular", "4-Seater"],
  },
  {
    id: "ws-002",
    name: "Back-to-Back Workstation (6-Seater)",
    category: "modular-office-workstation",
    description:
      "Space-efficient back-to-back 6-seater workstation with cable management trays, privacy screen dividers, and custom sizing options.",
    shortDescription: "Back-to-back 6-seater workspace divider setup",
    image: "https://images.unsplash.com/photo-1531971589569-0d93700fd00f?w=800&q=80",
    featured: false,
    tags: ["6-Seater", "Back-to-Back", "Cable Management"],
  },
  {
    id: "ws-003",
    name: "120-Degree Collaborative Workstation",
    category: "modular-office-workstation",
    description:
      "Highly innovative 120-degree honeycomb workstation layout encouraging collaboration and team coordination.",
    shortDescription: "120-degree honeycomb layout team workstation",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
    featured: true,
    tags: ["120-Degree", "Honeycomb", "Collaborative"],
  },
];

// Helper: get featured products
export const getFeaturedProducts = () =>
  products.filter((p) => p.featured);

// Helper: get products by category
export const getProductsByCategory = (slug: string) =>
  products.filter((p) => p.category === slug);
