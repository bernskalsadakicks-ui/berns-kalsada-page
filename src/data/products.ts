export type GradientKey = "g1" | "g2" | "g3" | "g4" | "g5" | "g6";
export type TagVariant = "red" | "blue" | "green";
export type ProductStatus = "AVAILABLE" | "PENDING" | "RESERVED" | "SOLD";

/**
 * Public Product shape — what the UI consumes.
 *
 * `image` is the canonical visual. When empty, the card falls back to the
 * legacy gradient + emoji rendering so existing seed data keeps working
 * while we transition to Google Sheets (which will provide image URLs).
 */
export type Product = {
  id: string;
  name: string;
  brand: string;
  size: string;
  price: string;
  condition: string;
  image: string;
  status: ProductStatus;

  // Optional presentation hints (used until every product has a real image)
  icon?: string;
  gradient?: GradientKey;
  tag?: "Only 1 Pair" | "Only 1" | "Limited" | "New";
  tagVariant?: TagVariant;
};

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
