export type GradientKey = "g1" | "g2" | "g3" | "g4" | "g5" | "g6";
export type TagVariant = "red" | "blue" | "green";
export type ProductStatus = "AVAILABLE" | "RESERVED" | "SOLD";

export type Product = {
  id: string;
  brand: string;
  name: string;
  size: string;
  price: string;
  condition: string;
  icon: string;
  gradient: GradientKey;
  tag?: "Only 1 Pair" | "Only 1" | "Limited" | "New";
  tagVariant?: TagVariant;
  status?: ProductStatus;
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
    gradient: "g1",
    tag: "Only 1 Pair",
    tagVariant: "red",
  },
  {
    id: "ub22",
    brand: "Adidas",
    name: "Ultraboost 22",
    size: "US 9",
    price: "₱1,500",
    condition: "9.5/10",
    icon: "🔵",
    gradient: "g2",
    tag: "Limited",
    tagVariant: "blue",
  },
  {
    id: "nb574",
    brand: "New Balance",
    name: "574 Classic",
    size: "US 8.5",
    price: "₱950",
    condition: "8/10",
    icon: "🟧",
    gradient: "g3",
    tag: "Only 1 Pair",
    tagVariant: "red",
  },
  {
    id: "j1",
    brand: "Jordan",
    name: "1 Mid Bred",
    size: "US 10",
    price: "₱2,200",
    condition: "8.5/10",
    icon: "🔴",
    gradient: "g4",
    tag: "Limited",
    tagVariant: "blue",
  },
  {
    id: "puma",
    brand: "Puma",
    name: "Suede Classic",
    size: "US 7.5",
    price: "₱750",
    condition: "9/10",
    icon: "🟨",
    gradient: "g5",
    tag: "Only 1 Pair",
    tagVariant: "red",
  },
  {
    id: "vans",
    brand: "Vans",
    name: "Old Skool Black",
    size: "US 9",
    price: "₱850",
    condition: "9/10",
    icon: "⬛",
    gradient: "g6",
    tag: "New",
    tagVariant: "green",
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
    tag: "Only 1",
    tagVariant: "red",
  },
  {
    id: "stansmith",
    brand: "Adidas",
    name: "Stan Smith OG",
    size: "US 9.5",
    price: "₱1,100",
    condition: "9.5/10",
    icon: "🟧",
    gradient: "g3",
    tag: "Limited",
    tagVariant: "blue",
  },
  {
    id: "reebok",
    brand: "Reebok",
    name: "Classic Leather",
    size: "US 8",
    price: "₱800",
    condition: "8.5/10",
    icon: "⬜",
    gradient: "g2",
    tag: "Only 1",
    tagVariant: "red",
  },
  {
    id: "chuck70",
    brand: "Converse",
    name: "Chuck 70 High",
    size: "US 7",
    price: "₱700",
    condition: "9/10",
    icon: "⭐",
    gradient: "g5",
    tag: "New",
    tagVariant: "green",
  },
];

export const orderSteps: { icon: string; num: string; label: string }[] = [
  { icon: "🔍", num: "Step 1", label: "Browse Items" },
  { icon: "🛒", num: "Step 2", label: "Reserve Agad" },
  { icon: "💳", num: "Step 3", label: "Pay via GCash" },
  { icon: "🚚", num: "Step 4", label: "Ipadala na!" },
];

export const gradientStyle: Record<GradientKey, string> = {
  g1: "linear-gradient(145deg, var(--grad-1-from), var(--grad-1-to))",
  g2: "linear-gradient(145deg, var(--grad-2-from), var(--grad-2-to))",
  g3: "linear-gradient(145deg, var(--grad-3-from), var(--grad-3-to))",
  g4: "linear-gradient(145deg, var(--grad-4-from), var(--grad-4-to))",
  g5: "linear-gradient(145deg, var(--grad-5-from), var(--grad-5-to))",
  g6: "linear-gradient(145deg, var(--grad-6-from), var(--grad-6-to))",
};
