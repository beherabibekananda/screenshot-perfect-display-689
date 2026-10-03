import fresh from "@/assets/fresh-oyster.jpg";
import dry from "@/assets/dry-oyster.jpg";
import white from "@/assets/white-oyster.jpg";

export const SITE = {
  name: "Shiva Agro",
  founder: "Mr. Ravindra Patel",
  tagline: "Naturally Grown. Freshly Packed. Delivered with Trust.",
  phone: "+91 00000 00000", // update with real phone when available
  whatsapp: "910000000000",  // update with real WhatsApp number
  email: "viaravisingh198@gmail.com",
  address: "Hariharpur, Rohania, Varanasi, Uttar Pradesh – 221108, India",
  hours: "Mon – Sat · 9:00 AM – 6:00 PM",
  estYear: "2026",
  legalStatus: "Individual / Sole Proprietorship",
  businessType: "Manufacturer, Supplier & Trader",
  marketCovered: "Pan India",
};

export const waLink = (text = "Hello, I'd like to enquire about your products.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export type Product = {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  image: string;
  price?: string;
  moq?: string;
  specs: { label: string; value: string }[];
};

export const PRODUCTS: Product[] = [
  {
    id: "fresh-oyster",
    name: "Fresh Oyster Mushroom",
    description:
      "Freshly cultivated oyster mushrooms from India with a smooth, velvety texture and rich natural flavor — available in White, Beige and Grey varieties.",
    highlights: ["Fresh", "India Origin", "Smooth & Velvety"],
    image: fresh,
    moq: "5 Kg",
    specs: [
      { label: "Style", value: "Fresh" },
      { label: "Type", value: "Edible Mushroom" },
      { label: "Color", value: "White, Beige, Grey" },
      { label: "Texture", value: "Smooth, Velvety" },
      { label: "Country of Origin", value: "India" },
      { label: "Shelf Life", value: "5 – 7 Days (Refrigerated)" },
    ],
  },
  {
    id: "dry-oyster",
    name: "Dry Oyster Mushroom",
    description:
      "Premium sun-dried oyster mushrooms sourced from India, vacuum-sealed for a shelf life of 6–12 months. Rich in antioxidants, protein and fiber — ideal for broths, gravies and culinary seasonings.",
    highlights: ["Sun Dried", "Vacuum Sealed", "6–12 Months Shelf Life"],
    image: dry,
    price: "₹1,000 – ₹1,400 / Kg",
    moq: "5 Kg",
    specs: [
      { label: "Style", value: "Dehydrated" },
      { label: "Drying Process", value: "Sun Dried" },
      { label: "Type", value: "Edible Fungi" },
      { label: "Color", value: "Brown" },
      { label: "Packaging", value: "Vacuum-Sealed Bag" },
      { label: "Shelf Life", value: "6 – 12 Months" },
      { label: "Storage", value: "Cool, Dry Place" },
      { label: "Country of Origin", value: "India" },
    ],
  },
  {
    id: "white-oyster",
    name: "White Oyster Mushroom",
    description:
      "Organically cultivated A-grade white oyster mushrooms, high in protein, fibre and vitamins. Ideal for everyday cooking applications — packed fresh in food-grade plastic packets.",
    highlights: ["Organic", "A Grade", "High Protein"],
    image: white,
    price: "₹150 – ₹250 / Kg",
    moq: "5 Kg",
    specs: [
      { label: "Cultivation Type", value: "Organic" },
      { label: "Quality", value: "A Grade" },
      { label: "Color", value: "White" },
      { label: "Packaging", value: "Plastic Packet" },
      { label: "Usage", value: "Cooking" },
      { label: "Shelf Life", value: "5 – 7 Days" },
      { label: "Country of Origin", value: "India" },
    ],
  },
];

export const NAV = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Products", "/products"],
  ["Why Us", "/why"],
  ["Process", "/process"],
  ["Testimonials", "/testimonials"],
  ["Contact", "/contact"],
] as const;
