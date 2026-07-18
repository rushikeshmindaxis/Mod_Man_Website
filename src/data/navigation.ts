// ─── Navigation Data ─────────────────────────────────────────────────────────
// Edit this file to update navigation links across the entire website.

export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
  isMegaMenu?: boolean;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Office Furniture", href: "/products?category=office-furniture" },
      { label: "Modular Office Workstation", href: "/products?category=modular-office-workstation" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  products: [
    { label: "Office Furniture", href: "/products?category=office-furniture" },
    { label: "Modular Office Workstation", href: "/products?category=modular-office-workstation" },
  ],
};
