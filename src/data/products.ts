// ─── Products Data ────────────────────────────────────────────────────────────

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  shortDescription: string;
  detailedDescription?: string;
  image: string;
  images?: string[];
  price?: string;
  featured: boolean;
  tags: string[];
  specifications?: Record<string, string>;
  features?: string[];
}

export interface ProductCategory {
  slug: string;
  name: string;
  description: string;
  image: string;
  icon: string;
  count?: number;
}

export const productCategories: ProductCategory[] = [
  {
    slug: "office-furniture",
    name: "Office Furniture",
    description: "Modern, ergonomic office furniture that elevates productivity and aesthetics.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    icon: "Building2",
  },
  {
    slug: "modular-office-workstation",
    name: "Modular Office Workstation",
    description: "Highly customizable and modular workstations designed for collaborative and focused work.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    icon: "Grid",
  },
];

export const products: Product[] = [
  {
    "id": "2850784540112",
    "slug": "mild-steel-white-office-workstation",
    "name": "Mild Steel White Office Workstation",
    "category": "modular-office-workstation",
    "description": "We are providing Bpo Call Center workstation to our clients.Best quality & Best prices avaliable.",
    "shortDescription": "We are providing Bpo Call Center workstation to our clients.Best quality & Best prices avaliable.",
    "detailedDescription": "We are providing Bpo Call Center workstation to our clients.Best quality & Best prices avaliable.",
    "image": "/Product_Photo/image copy 18.png",
    "price": "₹ 11,000/Piece",
    "featured": true,
    "tags": [
      "6 Seater",
      "Office",
      "25 mm"
    ],
    "specifications": {
      "Seating Capacity": "6 Seater",
      "Usage/Application": "Office",
      "Table Top Thickness": "25 mm",
      "Color": "White (Base)",
      "Warranty": "1 year",
      "Size": "1200 x 600 x 750 cm",
      "Product Material": "Mild Steel"
    }
  },
  {
    "id": "2850515718291",
    "slug": "plywood-modular-office-workstation",
    "name": "Plywood Modular Office Workstation",
    "category": "modular-office-workstation",
    "description": "We are providing Bpo Call Center workstation to our clients.Best quality & Best prices avaliable.",
    "shortDescription": "We are providing Bpo Call Center workstation to our clients.Best quality & Best prices avaliable.",
    "detailedDescription": "We are providing Bpo Call Center workstation to our clients.Best quality & Best prices avaliable.",
    "image": "/Product_Photo/image copy 19.png",
    "price": "₹ 18,500/Piece",
    "featured": true,
    "tags": [
      "Corporate Office",
      "Plywood",
      "Brown"
    ],
    "specifications": {
      "Usage/Application": "Corporate Office",
      "Material": "Plywood",
      "Color": "Brown",
      "Size": "1200 x 600 x 750 cm",
      "Is It Termite Proof": "Yes",
      "Warranty": "1 year",
      "Seating Capacity": "4 Seater",
      "Table Top Thickness": "10 mm"
    }
  },
  {
    "id": "2850784561773",
    "slug": "plywood-white-modular-office-workstation",
    "name": "Plywood White Modular Office Workstation",
    "category": "modular-office-workstation",
    "description": "We are providing Bpo Call Center workstation to our clients.Best quality & Best prices avaliable.",
    "shortDescription": "We are providing Bpo Call Center workstation to our clients.Best quality & Best prices avaliable.",
    "detailedDescription": "We are providing Bpo Call Center workstation to our clients.Best quality & Best prices avaliable.",
    "image": "/Product_Photo/image copy 20.png",
    "images": [
      "/Product_Photo/image copy 20.png",
      "/Product_Photo/image copy 21.png",
      "/Product_Photo/image copy 22.png"
    ],
    "price": "₹ 10,350/Piece",
    "featured": true,
    "tags": [
      "Office",
      "Plain",
      "Plywood"
    ],
    "specifications": {
      "Usage/Application": "Office",
      "Design": "Plain",
      "Material": "Plywood",
      "Thickness": "15mm",
      "Is It Termite Proof": "Yes",
      "Size": "1200 x 600 x 750 cm",
      "Seating Capacity": "4 Seater",
      "Product Colour": "White (Base)"
    }
  },
  {
    "id": "2850784424955",
    "slug": "60mm-particle-board-office-cubical",
    "name": "60mm Particle Board Office Cubical",
    "category": "modular-office-workstation",
    "description": "We are providing Bpo Call Center workstation to our clients.Best quality & Best prices avaliable.",
    "shortDescription": "We are providing Bpo Call Center workstation to our clients.Best quality & Best prices avaliable.",
    "detailedDescription": "We are providing Bpo Call Center workstation to our clients.Best quality & Best prices avaliable.",
    "image": "/Product_Photo/image copy 23.png",
    "price": "₹ 24,000/Piece",
    "featured": true,
    "tags": [
      "Particle Board",
      "4 Seater",
      "60 mm"
    ],
    "specifications": {
      "Material": "Particle Board",
      "Seating Capacity": "4 Seater",
      "Modular Partition Thickness": "60 mm",
      "Product Warranty": "1 year",
      "Feature": "Termite Proof"
    }
  },
  {
    "id": "2850784549473",
    "slug": "particle-board-2-seater-office-workstation",
    "name": "Particle Board 2 Seater Office Workstation",
    "category": "modular-office-workstation",
    "description": "We are providing Bpo Call Center workstation to our clients.Best quality & Best prices avaliable.",
    "shortDescription": "We are providing Bpo Call Center workstation to our clients.Best quality & Best prices avaliable.",
    "detailedDescription": "We are providing Bpo Call Center workstation to our clients.Best quality & Best prices avaliable.",
    "image": "/Product_Photo/image copy 24.png",
    "price": "₹ 11,300/Piece",
    "featured": false,
    "tags": [
      "Office",
      "Particle Board",
      "White (Base)"
    ],
    "specifications": {
      "Usage/Application": "Office",
      "Material": "Particle Board",
      "Color": "White (Base)",
      "Is It Termite Proof": "Yes",
      "Warranty": "1 year",
      "Size": "1200 x 600 x 750 cm",
      "Seating Capacity": "2 Seater"
    }
  },
  {
    "id": "2850469133891",
    "slug": "particle-board-modular-office-workstation",
    "name": "Particle Board Modular Office Workstation",
    "category": "modular-office-workstation",
    "description": "We are providing Bpo Call Center workstation to our clients.Best quality & Best prices avaliable.",
    "shortDescription": "We are providing Bpo Call Center workstation to our clients.Best quality & Best prices avaliable.",
    "detailedDescription": "We are providing Bpo Call Center workstation to our clients.Best quality & Best prices avaliable.",
    "image": "/Product_Photo/image copy 25.png",
    "images": [
      "/Product_Photo/image copy 25.png",
      "/Product_Photo/image copy 26.png",
      "/Product_Photo/image copy 27.png"
    ],
    "price": "₹ 13,500/Piece",
    "featured": false,
    "tags": [
      "Office",
      "Particle Board",
      "Yes"
    ],
    "specifications": {
      "Usage/Application": "Office",
      "Material": "Particle Board",
      "Is It Termite Proof": "Yes",
      "Warranty": "1 year",
      "Size": "1200 x 600 x 750 cm",
      "Seating Capacity": "4 Seater",
      "Table Top Thickness": "30 mm"
    }
  },
  {
    "id": "2850784533655",
    "slug": "mdf-wood-office-conference-table",
    "name": "MDF Wood Office Conference Table",
    "category": "office-furniture",
    "description": "Premium MDF Wood Office Conference Table designed for corporate environments. Features a spacious rectangular design suitable for large meetings.",
    "shortDescription": "Premium MDF Wood Office Conference Table designed for corporate environments.",
    "detailedDescription": "Elevate your corporate meetings with our premium MDF Wood Office Conference Table. Designed to accommodate up to 20 people comfortably, this table features a sturdy rectangular shape and a professional finish, making it the perfect addition to any modern corporate office.",
    "image": "/Product_Photo/image.png",
    "featured": false,
    "tags": [
      "20 Seater",
      "MDF",
      "Rectangular"
    ],
    "specifications": {
      "Minimum Order Quantity": "10 Piece",
      "Seating Capacity": "20 Seater",
      "Material": "MDF",
      "Shape": "Rectangular",
      "Suitable For": "Corporate Office",
      "Dimensions": "3000 x 1200 x 750 cm",
      "Warranty": "1 Year",
      "Product Weight": "20 kg"
    }
  },
  {
    "id": "2851839510073",
    "slug": "wooden-office-tables",
    "name": "Wooden Office Tables",
    "category": "office-furniture",
    "description": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provide material in particle board  ply and MDF",
    "shortDescription": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provid...",
    "detailedDescription": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provide material in particle board  ply and MDF",
    "image": "/Product_Photo/image copy.png",
    "price": "₹ 9,000/Piece",
    "featured": false,
    "tags": [
      "Teak Wood",
      "Rectangular",
      "With Storage"
    ],
    "specifications": {
      "Material": "Teak Wood",
      "Shape": "Rectangular",
      "Storage": "With Storage",
      "Storage Type": "Open Storage",
      "No. Of Drawers": "2 Drawers"
    }
  },
  {
    "id": "2851839510112",
    "slug": "open-office-workstations",
    "name": "Open Office Workstations",
    "category": "office-furniture",
    "description": "We are manufacturer of modular furniture suitable for commercial spaces. We provide high-quality open office workstations with clean linear layout designs.",
    "shortDescription": "High-quality open office workstation designed for modern commercial and corporate spaces.",
    "detailedDescription": "High-quality open office workstation designed for modern commercial and corporate spaces with clean linear layout designs.",
    "image": "/Product_Photo/ChatGPT Image Jul 20, 2026, 02_37_42 PM.png",
    "price": "₹ 13,800/Piece",
    "featured": false,
    "tags": [
      "1 Seater",
      "Wooden",
      "Linear"
    ],
    "specifications": {
      "Minimum Order Quantity": "1 Piece",
      "Seating Capacity": "1 Seater",
      "Material": "Wooden",
      "Layout Type": "Linear",
      "Color": "White"
    }
  },
  {
    "id": "2851839510462",
    "slug": "office-corporate-furniture",
    "name": "Office Corporate Furniture",
    "category": "office-furniture",
    "description": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provide material in particle board  ply and MDF",
    "shortDescription": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provid...",
    "detailedDescription": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provide material in particle board  ply and MDF",
    "image": "/Product_Photo/image_3.png",
    "price": "₹ 11,500/Piece",
    "featured": false,
    "tags": [
      "Office",
      "Wooden",
      "Rectangular"
    ],
    "specifications": {
      "Product Type": "Office",
      "Material": "Wooden",
      "Shape": "Rectangular",
      "Color": "Brown",
      "Country of Origin": "Made in India"
    }
  },
  {
    "id": "2851839510512",
    "slug": "magnetic-glass-workstation",
    "name": "Magnetic Glass Workstation",
    "category": "office-furniture",
    "description": "High-quality Magnetic Glass Workstation designed for modern office environments with premium finish.",
    "shortDescription": "High-quality Magnetic Glass Workstation for modern office environments.",
    "detailedDescription": "High-quality Magnetic Glass Workstation designed for modern office environments.",
    "image": "/Product_Photo/image copy 7.png",
    "price": "₹ 12,000/Piece",
    "featured": false,
    "tags": [
      "1 Seater",
      "Wooden",
      "White"
    ],
    "specifications": {
      "Minimum Order Quantity": "1 Piece",
      "Seating Capacity": "1 Seater",
      "Material": "Wooden",
      "Usage/Application": "Office",
      "Shape": "Rectangular",
      "Color": "White"
    }
  },
  {
    "id": "2851839511173",
    "slug": "brown-office-workstation",
    "name": "Brown Office Workstation",
    "category": "office-furniture",
    "description": "High-quality 8 seater Brown Office Workstation built with durable rust-proof aluminium frame.",
    "shortDescription": "High-quality 8-seater brown office workstation built with durable aluminium frame.",
    "detailedDescription": "High-quality 8-seater brown office workstation built with durable aluminium frame and cluster layout.",
    "image": "/Product_Photo/ChatGPT Image Jul 20, 2026, 02_43_31 PM.png",
    "price": "₹ 10,000/Piece",
    "featured": false,
    "tags": [
      "8 Seater",
      "Aluminium",
      "Cluster"
    ],
    "specifications": {
      "Minimum Order Quantity": "1 Piece",
      "Seating Capacity": "8 Seater",
      "Material": "Aluminium",
      "Layout Type": "Cluster",
      "Color": "Brown",
      "Is It Rust Proof": "Yes"
    }
  },
  {
    "id": "2851839511491",
    "slug": "wooden-modular-non-sharing-working-station",
    "name": "Wooden Modular Non Sharing Working Station",
    "category": "office-furniture",
    "description": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provide material in particle board  ply and MDF",
    "shortDescription": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provid...",
    "detailedDescription": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provide material in particle board  ply and MDF",
    "image": "/Product_Photo/image_4.png",
    "price": "₹ 10,000/Piece",
    "featured": false,
    "tags": [
      "1 Seater",
      "Plywood",
      "Single"
    ],
    "specifications": {
      "Seating Capacity": "1 Seater",
      "Material": "Plywood",
      "Layout Type": "Single",
      "Table Top Level": "yes",
      "Table Top Edge Banding": "yes",
      "Country of Origin": "Made in India"
    }
  },
  {
    "id": "2851839511512",
    "slug": "modular-computer-workstation",
    "name": "Modular Computer Workstation",
    "category": "office-furniture",
    "description": "High-quality Modular Computer Workstation designed for corporate offices with IT office appearance and storage drawers.",
    "shortDescription": "High-quality Modular Computer Workstation designed for corporate offices with storage drawers.",
    "detailedDescription": "High-quality Modular Computer Workstation designed for corporate offices with IT office appearance and built-in storage drawers.",
    "image": "/Product_Photo/image copy 8.png",
    "price": "₹ 17,500/Piece",
    "featured": false,
    "tags": [
      "Wooden",
      "Corporate Office",
      "Brown"
    ],
    "specifications": {
      "Minimum Order Quantity": "1 Piece",
      "Material": "Wooden",
      "Shape": "Any",
      "Usage/Application": "Corporate Office",
      "Color": "Brown",
      "Appearance": "IT Office Look",
      "Design Type": "Standard",
      "Storage Drawers": "Yes"
    }
  },
  {
    "id": "2851839511662",
    "slug": "director-cabin-furniture",
    "name": "Director Cabin Furniture",
    "category": "office-furniture",
    "description": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provide material in particle board  ply and MDF",
    "shortDescription": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provid...",
    "detailedDescription": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provide material in particle board  ply and MDF",
    "image": "/Product_Photo/image copy 2.png",
    "price": "₹ 22,000/Set",
    "featured": false,
    "tags": [
      "Wooden",
      "Rectangular",
      "Brown"
    ],
    "specifications": {
      "Material": "Wooden",
      "Shape": "Rectangular",
      "Color": "Brown",
      "Product Type": "Office"
    }
  },
  {
    "id": "2851839511897",
    "slug": "curve-linear-cubicales-workstation",
    "name": "Curve Linear Cubicales Workstation",
    "category": "office-furniture",
    "description": "High-quality 6 seater Curve Linear Cubicales Workstation designed for modern corporate and commercial office spaces.",
    "shortDescription": "High-quality 6-seater Curve Linear Cubicales Workstation for modern office spaces.",
    "detailedDescription": "High-quality 6-seater Curve Linear Cubicales Workstation designed for modern corporate and commercial office spaces with premium wooden finish.",
    "image": "/Product_Photo/image copy 9.png",
    "price": "₹ 80,000/Set",
    "featured": false,
    "tags": [
      "6 Seater",
      "Wooden",
      "Rectangular"
    ],
    "specifications": {
      "Minimum Order Quantity": "1 Set",
      "Seating Capacity": "6 Seater",
      "Material": "Wooden",
      "Usage/Application": "Office",
      "Shape": "Rectangular",
      "Color": "Brown"
    }
  },
  {
    "id": "2851839512030",
    "slug": "conference-room-table",
    "name": "Conference Room Table",
    "category": "office-furniture",
    "description": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provide material in particle board  ply and MDF",
    "shortDescription": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provid...",
    "detailedDescription": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provide material in particle board  ply and MDF",
    "image": "/Product_Photo/image copy 3.png",
    "price": "₹ 22,000/Piece",
    "featured": false,
    "tags": [
      "20 Seater",
      "Plywood",
      "Rectangular"
    ],
    "specifications": {
      "Seating Capacity": "20 Seater",
      "Material": "Plywood",
      "Shape": "Rectangular",
      "Storage": "Without Storage",
      "Suitable For": "Conference Halls"
    }
  },
  {
    "id": "2851839509912",
    "slug": "executive-office-table",
    "name": "Executive Office Table",
    "category": "office-furniture",
    "description": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provide material in particle board  ply and MDF",
    "shortDescription": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provid...",
    "detailedDescription": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provide material in particle board  ply and MDF",
    "image": "/Product_Photo/image copy 4.png",
    "price": "₹ 15,000/Piece",
    "featured": false,
    "tags": [
      "Teak Wood",
      "Rectangular",
      "With Storage"
    ],
    "specifications": {
      "Material": "Teak Wood",
      "Shape": "Rectangular",
      "Storage": "With Storage",
      "Storage Type": "Drawer Storage",
      "Table Top Material": "Solid Wood"
    }
  },
  {
    "id": "2851839510233",
    "slug": "cluster-modular-workstation",
    "name": "Cluster Modular Workstation",
    "category": "office-furniture",
    "description": "High-quality 2 seater Cluster Modular Workstation with durable aluminium frame and wooden tabletop.",
    "shortDescription": "High-quality 2-seater cluster modular workstation with aluminium frame.",
    "detailedDescription": "High-quality 2-seater cluster modular workstation with durable aluminium frame and wooden tabletop for office spaces.",
    "image": "/Product_Photo/image copy 10.png",
    "price": "₹ 16,000/Piece",
    "featured": false,
    "tags": [
      "2 Seater",
      "Wooden",
      "Aluminium"
    ],
    "specifications": {
      "Minimum Order Quantity": "1 Piece",
      "Usage/Application": "Office",
      "Color": "White",
      "Seating Capacity": "2 Seater",
      "Material": "Wooden",
      "Frame Type": "Aluminium"
    }
  },
  {
    "id": "2851839510388",
    "slug": "modular-office-workstations",
    "name": "Modular Office Workstations",
    "category": "office-furniture",
    "description": "High-quality 6 seater Modular Office Workstations with wooden finish and modern layout.",
    "shortDescription": "High-quality 6-seater modular office workstations with wooden finish.",
    "detailedDescription": "High-quality 6-seater modular office workstations manufactured with premium wooden materials for commercial spaces.",
    "image": "/Product_Photo/image copy 11.png",
    "price": "₹ 9,800/Piece",
    "featured": false,
    "tags": [
      "6 Seater",
      "Wooden",
      "Brown"
    ],
    "specifications": {
      "Minimum Order Quantity": "1 Piece",
      "Material": "Wooden",
      "Color": "Brown",
      "Delivery Time": "after completion",
      "Seating Capacity": "6 Seater",
      "Country of Origin": "Made in India"
    }
  },
  {
    "id": "2851839510673",
    "slug": "modular-wooden-executive-desk",
    "name": "Modular Wooden Executive Desk",
    "category": "office-furniture",
    "description": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provide material in particle board  ply and MDF",
    "shortDescription": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provid...",
    "detailedDescription": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provide material in particle board  ply and MDF",
    "image": "/Product_Photo/ChatGPT Image Jul 20, 2026, 02_28_49 PM.png",
    "price": "₹ 22,000/Piece",
    "featured": false,
    "tags": [
      "Rectangular",
      "With Storage",
      "Open Storage"
    ],
    "specifications": {
      "Shape": "Rectangular",
      "Storage": "With Storage",
      "Storage Type": "Open Storage",
      "Table Top Material": "Solid Wood"
    }
  },
  {
    "id": "2851839510712",
    "slug": "modular-wooden-office-table",
    "name": "Modular Wooden Office Table",
    "category": "office-furniture",
    "description": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provide material in particle board  ply and MDF",
    "shortDescription": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provid...",
    "detailedDescription": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provide material in particle board  ply and MDF",
    "image": "/Product_Photo/image copy 5.png",
    "price": "₹ 8,500/Piece",
    "featured": false,
    "tags": [
      "Teak Wood",
      "Rectangular",
      "With Storage"
    ],
    "specifications": {
      "Material": "Teak Wood",
      "Shape": "Rectangular",
      "Storage": "With Storage",
      "Storage Type": "Open Storage"
    }
  },
  {
    "id": "2851839510873",
    "slug": "linear-office-work-station",
    "name": "Linear Office Work Station",
    "category": "office-furniture",
    "description": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provide material in particle board ply and MDF",
    "shortDescription": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provid...",
    "detailedDescription": "We are manufacturer of maodular furniture Modular furniture sutaible for commercial spaces We Provide material in particle board ply and MDF",
    "image": "/Product_Photo/image copy 6.png",
    "price": "₹ 9,500/Piece",
    "featured": false,
    "tags": [
      "Wooden",
      "Rectangular",
      "Multi Color"
    ],
    "specifications": {
      "Material": "Wooden",
      "Shape": "Rectangular",
      "Color": "Multi Color",
      "Smart Supplement Light": "Yes",
      "Is It Lockable": "Yes",
      "Internal HDD Support": "Yes",
      "Table Top Edge Banding": "Yes",
      "Product Type": "Workstation"
    }
  },
  {
    "id": "2851839510988",
    "slug": "soft-board-office-modular-workstation",
    "name": "Soft Board Office Modular Workstation",
    "category": "office-furniture",
    "description": "High-quality 1 seater Soft Board Office Modular Workstation with wooden material and termite-proof finish.",
    "shortDescription": "High-quality 1-seater soft board office modular workstation with wooden material.",
    "detailedDescription": "High-quality 1-seater soft board office modular workstation with wooden material and termite-proof finish manufactured in India.",
    "image": "/Product_Photo/image copy 12.png",
    "price": "₹ 11,000/Piece",
    "featured": false,
    "tags": [
      "1 Seater",
      "Wooden",
      "Brown"
    ],
    "specifications": {
      "Minimum Order Quantity": "1 Piece",
      "Material": "Wooden",
      "Color": "Brown",
      "Is It Termite Proof": "yes",
      "Seating Capacity": "1 Seater",
      "Country of Origin": "Made in India"
    }
  },
  {
    "id": "2851839511091",
    "slug": "white-modular-office-workstation",
    "name": "White Modular Office Workstation",
    "category": "office-furniture",
    "description": "High-quality 4 seater White Modular Office Workstation with lockable storage drawers and wooden material.",
    "shortDescription": "High-quality 4-seater white modular office workstation with lockable storage.",
    "detailedDescription": "High-quality 4-seater white modular office workstation with lockable storage drawers and wooden material manufactured in India.",
    "image": "/Product_Photo/image copy 13.png",
    "price": "₹ 10,000/Piece",
    "featured": false,
    "tags": [
      "4 Seater",
      "Wooden",
      "White"
    ],
    "specifications": {
      "Minimum Order Quantity": "1 Piece",
      "Material": "Wooden",
      "Color": "White",
      "Is It Lockable": "yes",
      "Seating Capacity": "4 Seater",
      "Country of Origin": "Made in India"
    }
  },
  {
    "id": "2851839511262",
    "slug": "corporate-modular-office-workstation",
    "name": "Corporate Modular Office Workstation",
    "category": "office-furniture",
    "description": "High-quality 1 seater Corporate Modular Office Workstation with wooden material and brown finish.",
    "shortDescription": "High-quality 1-seater corporate modular office workstation.",
    "detailedDescription": "High-quality 1-seater corporate modular office workstation with wooden material and brown finish manufactured in India.",
    "image": "/Product_Photo/image copy 14.png",
    "price": "₹ 25,000/Set",
    "featured": false,
    "tags": [
      "1 Seater",
      "Wooden",
      "Brown"
    ],
    "specifications": {
      "Minimum Order Quantity": "1 Set",
      "Material": "Wooden",
      "Color": "Brown",
      "Is It Lockable": "no",
      "Seating Capacity": "1 Seater",
      "Country of Origin": "Made in India"
    }
  },
  {
    "id": "2851839511348",
    "slug": "open-desking-modular-workstation",
    "name": "Open Desking Modular Workstation",
    "category": "office-furniture",
    "description": "High-quality 6 seater Open Desking Modular Workstation with wooden material and termite-proof brown finish.",
    "shortDescription": "High-quality 6-seater open desking modular workstation with termite-proof finish.",
    "detailedDescription": "High-quality 6-seater open desking modular workstation with wooden material and termite-proof brown finish manufactured in India.",
    "image": "/Product_Photo/image copy 15.png",
    "price": "₹ 10,200/Piece",
    "featured": false,
    "tags": [
      "6 Seater",
      "Wooden",
      "Brown"
    ],
    "specifications": {
      "Minimum Order Quantity": "1 Piece",
      "Material": "Wooden",
      "Is It Termite Proof": "YES",
      "Color": "Brown",
      "Seating Capacity": "6 Seater",
      "Country of Origin": "Made in India"
    }
  },
  {
    "id": "2851839511997",
    "slug": "linear-modular-workstation",
    "name": "Linear Modular Workstation",
    "category": "office-furniture",
    "description": "High-quality 6 seater Linear Modular Workstation built with aluminium frame and wooden tabletop.",
    "shortDescription": "High-quality 6-seater linear modular workstation with aluminium frame.",
    "detailedDescription": "High-quality 6-seater linear modular workstation built with durable aluminium frame and wooden tabletop for office spaces.",
    "image": "/Product_Photo/image copy 16.png",
    "price": "₹ 9,000/Piece",
    "featured": false,
    "tags": [
      "6 Seater",
      "Wooden",
      "Aluminium"
    ],
    "specifications": {
      "Minimum Order Quantity": "1 Piece",
      "Usage/Application": "Office",
      "Color": "White",
      "Seating Capacity": "6 Seater",
      "Material": "Wooden",
      "Frame Type": "Aluminium"
    }
  },
  {
    "id": "2851839511712",
    "slug": "modular-furniture-workstation-120-degree",
    "name": "Modular furniture workstation 120 degree",
    "category": "office-furniture",
    "description": "High-quality Modular Furniture Workstation 120 Degree design with wooden material and white finish.",
    "shortDescription": "High-quality 120-degree modular furniture workstation with wooden material.",
    "detailedDescription": "High-quality 120-degree modular furniture workstation with wooden material and white finish manufactured in India.",
    "image": "/Product_Photo/image copy 17.png",
    "price": "₹ 26,000/Piece",
    "featured": false,
    "tags": [
      "120 Degree",
      "Wooden",
      "White"
    ],
    "specifications": {
      "Minimum Order Quantity": "1 Piece",
      "Material": "Wooden",
      "Shape": "Rectangular",
      "Color": "White",
      "Product Type": "Furniture",
      "Country of Origin": "Made in India"
    }
  }
];

export const getFeaturedProducts = () => products.filter((p) => p.featured);
export const getProductsByCategory = (slug: string) => products.filter((p) => p.category === slug);
export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
