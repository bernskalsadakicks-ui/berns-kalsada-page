import type { Product } from "@/data/products";

/**
 * Product data source.
 *
 * Currently returns a static mock list. This is the single integration
 * point for swapping in a real backend (e.g. Google Sheets via the Sheets
 * API or a published CSV endpoint). When wiring Sheets, replace the body
 * of `fetchProducts` with a fetch + row-mapping step — the rest of the
 * app already consumes this async API.
 *
 * Expected Google Sheets columns (in order):
 *   id | name | brand | size | price | condition | image | status
 *
 * Status values must be one of: AVAILABLE | PENDING | RESERVED | SOLD
 */

const MOCK_PRODUCTS: Product[] = [
  {
    id: "af1",
    brand: "Nike",
    name: "Air Force 1 Low",
    size: "US 8",
    price: "₱1,200",
    condition: "9/10",
    image: "",
    status: "AVAILABLE",
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
    image: "",
    status: "RESERVED",
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
    image: "",
    status: "PENDING",
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
    image: "",
    status: "AVAILABLE",
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
    image: "",
    status: "AVAILABLE",
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
    image: "",
    status: "SOLD",
    icon: "⬛",
    gradient: "g6",
    tag: "New",
    tagVariant: "green",
  },
  {
    id: "cortez",
    brand: "Nike",
    name: "Cortez Basic",
    size: "US 8",
    price: "₱900",
    condition: "9/10",
    image: "",
    status: "AVAILABLE",
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
    image: "",
    status: "AVAILABLE",
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
    image: "",
    status: "PENDING",
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
    image: "",
    status: "AVAILABLE",
    icon: "⭐",
    gradient: "g5",
    tag: "New",
    tagVariant: "green",
  },
];

/** Fetch the full product catalogue. Replace internals with Sheets call. */
export async function fetchProducts(): Promise<Product[]> {
  // TODO: replace with Google Sheets fetch, e.g.
  //   const res = await fetch(SHEETS_CSV_URL);
  //   return parseCsvToProducts(await res.text());
  return MOCK_PRODUCTS;
}

/** Featured / latest drops shown in the horizontal carousel. */
export async function fetchFeaturedProducts(): Promise<Product[]> {
  const all = await fetchProducts();
  return all.slice(0, 6);
}

/** All other items shown in the grid. */
export async function fetchAllProducts(): Promise<Product[]> {
  const all = await fetchProducts();
  return all.slice(6);
}
