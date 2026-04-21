import type { GradientKey, Product, ProductStatus, TagVariant } from "@/data/products";

/**
 * Product data source — Google Sheets (published as CSV).
 *
 * Expected columns (header row, case-insensitive):
 *   id | name | brand | size | price | condition | image | status | notes
 *
 * Status values: AVAILABLE | PENDING | RESERVED | SOLD
 */

const SHEETS_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTYGy_UB_CAevzyBGuFCDZ4IObhUDiNGhF_s4R88oJPNz38nc1OxFeeBPRFQ_nYztG3aFTjocn9Bsir/pub?gid=0&single=true&output=csv";

const VALID_STATUSES: ProductStatus[] = ["AVAILABLE", "PENDING", "RESERVED", "SOLD"];

const FALLBACK_GRADIENTS: GradientKey[] = ["g1", "g2", "g3", "g4", "g5", "g6"];
const FALLBACK_ICONS = ["👟", "🔵", "🟧", "🔴", "🟨", "⬛", "⭐", "⬜"];

/** Minimal RFC-4180-ish CSV parser: handles quoted fields, embedded commas, escaped quotes, and CRLF. */
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];

    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
      continue;
    }

    if (ch === '"') {
      inQuotes = true;
    } else if (ch === ",") {
      row.push(field);
      field = "";
    } else if (ch === "\n" || ch === "\r") {
      // Push field/row, then swallow a paired \r\n
      row.push(field);
      field = "";
      // Skip empty trailing rows
      if (row.length > 1 || (row.length === 1 && row[0] !== "")) {
        rows.push(row);
      }
      row = [];
      if (ch === "\r" && text[i + 1] === "\n") i++;
    } else {
      field += ch;
    }
  }

  // Flush last field/row
  if (field !== "" || row.length > 0) {
    row.push(field);
    if (row.length > 1 || (row.length === 1 && row[0] !== "")) {
      rows.push(row);
    }
  }

  return rows;
}

function normalizeStatus(raw: string): ProductStatus {
  const upper = raw.trim().toUpperCase();
  return (VALID_STATUSES as string[]).includes(upper) ? (upper as ProductStatus) : "AVAILABLE";
}

function pickTagVariant(status: ProductStatus): TagVariant {
  if (status === "RESERVED" || status === "PENDING") return "blue";
  if (status === "SOLD") return "green";
  return "red";
}

function formatPrice(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return "";
  // If it already contains a currency symbol or non-digit prefix, return as-is.
  if (/[^\d.,\s]/.test(trimmed[0])) return trimmed;
  const num = Number(trimmed.replace(/[,\s]/g, ""));
  if (!Number.isFinite(num)) return trimmed;
  return `₱${num.toLocaleString("en-PH")}`;
}

function formatSize(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return "—";
  return /^(size|us|eu)/i.test(trimmed) ? trimmed : `Size ${trimmed}`;
}

function rowToProduct(headers: string[], cells: string[], index: number): Product | null {
  const get = (...keys: string[]): string => {
    for (const key of keys) {
      const idx = headers.indexOf(key);
      if (idx >= 0) {
        const val = (cells[idx] ?? "").trim();
        if (val) return val;
      }
    }
    return "";
  };

  const id = get("id") || `row-${index}`;
  const name = get("name");
  const brand = get("brand");
  if (!name && !brand) return null; // skip empty rows

  const status = normalizeStatus(get("status"));
  const gradient = FALLBACK_GRADIENTS[index % FALLBACK_GRADIENTS.length];
  const icon = FALLBACK_ICONS[index % FALLBACK_ICONS.length];

  return {
    id,
    name,
    brand,
    size: formatSize(get("size")),
    price: formatPrice(get("price")),
    condition: get("condition") || "—",
    image: get("image", "imageurl", "image url", "image_url", "img"),
    status,
    notes: get("notes") || undefined,
    icon,
    gradient,
    tag: status === "AVAILABLE" ? "Only 1 Pair" : undefined,
    tagVariant: pickTagVariant(status),
  };
}

function parseCsvToProducts(csv: string): Product[] {
  const rows = parseCsv(csv);
  if (rows.length < 2) return [];

  const headers = rows[0].map((h) => h.trim().toLowerCase());
  const products: Product[] = [];
  for (let i = 1; i < rows.length; i++) {
    const product = rowToProduct(headers, rows[i], i - 1);
    if (product) products.push(product);
  }
  return products;
}

let cache: Promise<Product[]> | null = null;

/** Fetch the full product catalogue from the published Google Sheets CSV. */
export async function fetchProducts(): Promise<Product[]> {
  if (cache) return cache;
  cache = (async () => {
    try {
      const res = await fetch(SHEETS_CSV_URL, { cache: "no-store" });
      if (!res.ok) throw new Error(`Sheets fetch failed: ${res.status}`);
      const text = await res.text();
      const products = parseCsvToProducts(text);
      if (products.length === 0) throw new Error("No products parsed from sheet");
      return products;
    } catch (err) {
      // Reset cache so next call retries
      cache = null;
      throw err;
    }
  })();
  return cache;
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
