import fresh from "@/assets/fresh-oyster.jpg";
import dry from "@/assets/dry-oyster.jpg";
import white from "@/assets/white-oyster.jpg";

// Replace these placeholders with real business details.
export const SITE = {
  name: "Aranya Agro",
  tagline: "Naturally Grown. Carefully Selected. Delivered with Trust.",
  phone: "+91 00000 00000",
  whatsapp: "910000000000",
  email: "hello@yourcompany.in",
  address: "[Business address, City, State, PIN]",
  hours: "Mon – Sat · 9:00 AM – 6:00 PM",
};

export const waLink = (text = "Hello, I'd like to enquire about your products.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export type Product = {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  image: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "fresh-oyster",
    name: "Fresh Oyster Mushroom",
    description: "Freshly cultivated oyster mushrooms with a delicate texture and rich natural flavor.",
    highlights: ["Fresh", "High Quality", "Carefully Packed"],
    image: fresh,
  },
  {
    id: "dry-oyster",
    name: "Dry Oyster Mushroom",
    description: "Carefully dehydrated mushrooms offering convenient storage and extended usability.",
    highlights: ["Dehydrated", "Long Shelf Life", "Easy to Store"],
    image: dry,
  },
  {
    id: "white-oyster",
    name: "White Oyster Mushroom",
    description: "Premium-quality white oyster mushrooms suitable for a wide range of culinary applications.",
    highlights: ["Premium Grade", "Fresh", "Carefully Selected"],
    image: white,
  },
];

export const NAV = [
  ["Home", "#home"],
  ["About Us", "#about"],
  ["Products", "#products"],
  ["Why Us", "#why"],
  ["Process", "#process"],
  ["Testimonials", "#testimonials"],
  ["Contact", "#contact"],
] as const;
