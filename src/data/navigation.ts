// ─── Navigation Data ─────────────────────────────────────────────────────────
// Edit this file to update navigation links across the entire website.

import { products, productCategories } from "./products";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem extends NavLink {
  children?: (NavLink & { children?: NavLink[] })[];
  isMegaMenu?: boolean;
}

const productsChildren = productCategories.map((cat) => ({
  label: cat.name,
  href: `/products?category=${cat.slug}`,
  children: products
    .filter((p) => p.category === cat.slug)
    .map((p) => ({
      label: p.name,
      href: `/products/${p.slug}`,
    })),
}));

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: productsChildren,
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
  products: productsChildren,
};
