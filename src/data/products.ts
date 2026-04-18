export type Product = {
  id: string;
  brand: string;
  name: string;
  size: string;
  price: string;
  condition: string;
  icon: string;
  tag?: "Only 1 Pair" | "Limited";
  tagVariant?: "neon" | "cyan";
  gradient?: "g1" | "g2" | "g3" | "g4";
};

export const featuredDrops: Product[] = [
  {
    id: "af1",
    brand: "Nike",
    name: "Air Force 1 Low",
    size: "US 8",
    price: "₱1,200",
    condition: "9/10",
    icon: "👟",
    tag: "Only 1 Pair",
    tagVariant: "neon",
  },
  {
    id: "ub22",
    brand: "Adidas",
    name: "Ultraboost 22",
    size: "US 9",
    price: "₱1,500",
    condition: "9.5/10",
    icon: "🔵",
    tag: "Limited",
    tagVariant: "cyan",
  },
  {
    id: "nb574",
    brand: "New Balance",
    name: "574 Classic",
    size: "US 8.5",
    price: "₱950",
    condition: "8/10",
    icon: "🟢",
    tag: "Only 1 Pair",
    tagVariant: "neon",
  },
  {
    id: "j1",
    brand: "Jordan",
    name: "1 Mid Bred",
    size: "US 10",
    price: "₱2,200",
    condition: "8.5/10",
    icon: "🔴",
    tag: "Limited",
    tagVariant: "neon",
  },
  {
    id: "puma",
    brand: "Puma",
    name: "Suede Classic",
    size: "US 7.5",
    price: "₱750",
    condition: "9/10",
    icon: "🟡",
    tag: "Only 1 Pair",
    tagVariant: "neon",
  },
  {
    id: "vans",
    brand: "Vans",
    name: "Old Skool Black",
    size: "US 9",
    price: "₱850",
    condition: "9/10",
    icon: "⚫",
    tag: "Limited",
    tagVariant: "cyan",
  },
];

export const allProducts: Product[] = [
  {
    id: "cortez",
    brand: "Nike",
    name: "Cortez Basic",
    size: "US 8",
    price: "₱900",
    condition: "9/10",
    icon: "👟",
    gradient: "g1",
  },
  {
    id: "stansmith",
    brand: "Adidas",
    name: "Stan Smith OG",
    size: "US 9.5",
    price: "₱1,100",
    condition: "9.5/10",
    icon: "🟩",
    gradient: "g2",
  },
  {
    id: "reebok",
    brand: "Reebok",
    name: "Classic Leather",
    size: "US 8",
    price: "₱800",
    condition: "8.5/10",
    icon: "⬜",
    gradient: "g3",
  },
  {
    id: "chuck70",
    brand: "Converse",
    name: "Chuck 70 High",
    size: "US 7",
    price: "₱700",
    condition: "9/10",
    icon: "⭐",
    gradient: "g4",
  },
];

export const orderSteps: { title: string; desc: string }[] = [
  {
    title: "I-browse ang items",
    desc: "Piliin ang gusto mo sa product grid o featured drops.",
  },
  {
    title: "Mag-message o mag-reserve",
    desc: 'I-tap ang "Reserve" o "Message Us" para ma-hold ang item.',
  },
  {
    title: "Hintayin ang confirmation",
    desc: "Mag-confirm kami within 1–2 hours. Legit lang.",
  },
  {
    title: "Bayad via GCash",
    desc: "First to pay, first to get. Fair and simple.",
  },
  {
    title: "Padala na!",
    desc: "Nationwide shipping. Mostly libre pa. 🚚",
  },
];
