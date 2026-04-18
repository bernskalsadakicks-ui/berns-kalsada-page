import { useEffect } from "react";
import type { Product } from "@/data/products";

type Props = {
  product: Product | null;
  onClose: () => void;
  onMessage: () => void;
  onReserve: () => void;
};

export function ProductModal({ product, onClose, onMessage, onReserve }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      document.addEventListener("keydown", handler);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/85 backdrop-blur-sm sm:items-center"
    >
      <div className="relative max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-t-3xl border border-border bg-card p-6 sm:rounded-3xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition hover:text-foreground"
        >
          ✕
        </button>
        <div className="mx-auto mb-5 h-1 w-9 rounded-full bg-border sm:hidden" />
        <div
          className="mb-4 flex h-48 items-center justify-center rounded-xl text-7xl"
          style={{ background: "linear-gradient(135deg, oklch(0.22 0.04 260), oklch(0.27 0.07 240))" }}
        >
          {product.icon}
        </div>
        <div className="text-xs font-bold uppercase tracking-wider text-neon">
          {product.brand}
        </div>
        <div className="mb-4 mt-1 text-xl font-bold text-foreground">{product.name}</div>
        <div className="mb-4 flex flex-wrap gap-2">
          <Chip label="Size" value={product.size} />
          <Chip label="Condition" value={product.condition} />
          <Chip label="Quality Checked" value="✓" />
        </div>
        <div className="mb-5 text-3xl font-bold text-neon">{product.price}</div>
        <div className="flex gap-2.5">
          <button
            onClick={onMessage}
            className="flex-1 rounded-lg border border-cyan bg-transparent py-3 text-sm font-semibold text-cyan transition hover:bg-cyan/10"
          >
            💬 Message to Reserve
          </button>
          <button
            onClick={onReserve}
            className="flex-1 rounded-lg bg-neon py-3 text-sm font-bold text-neon-foreground shadow-neon-soft transition hover:shadow-neon"
          >
            📝 Fill Order Form
          </button>
        </div>
      </div>
    </div>
  );
}

function Chip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border bg-secondary px-2.5 py-1.5 text-xs text-muted-foreground">
      {label} <span className="font-semibold text-foreground">{value}</span>
    </div>
  );
}
