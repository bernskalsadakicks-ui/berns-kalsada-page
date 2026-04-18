import type { Product } from "@/data/products";

type Props = {
  product: Product;
  onClick: (p: Product) => void;
  onReserve: (p: Product) => void;
};

const gradients: Record<NonNullable<Product["gradient"]>, string> = {
  g1: "linear-gradient(135deg, oklch(0.2 0.04 240), oklch(0.27 0.06 240))",
  g2: "linear-gradient(135deg, oklch(0.18 0.08 300), oklch(0.28 0.14 290))",
  g3: "linear-gradient(135deg, oklch(0.18 0.05 145), oklch(0.26 0.09 145))",
  g4: "linear-gradient(135deg, oklch(0.18 0.06 40), oklch(0.27 0.1 50))",
};

export function ProductCard({ product, onClick, onReserve }: Props) {
  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition hover:-translate-y-0.5 hover:border-neon/50">
      <button
        onClick={() => onClick(product)}
        className="relative flex aspect-square w-full items-center justify-center text-5xl"
        style={{ background: gradients[product.gradient ?? "g1"] }}
      >
        <span>{product.icon}</span>
        <span className="absolute bottom-2 right-2 rounded border border-border bg-black/70 px-1.5 py-0.5 text-[9px] font-bold text-neon">
          {product.condition}
        </span>
      </button>
      <div className="px-3 pb-3 pt-2.5">
        <div className="mb-0.5 text-[10px] font-bold uppercase tracking-wider text-neon">
          {product.brand}
        </div>
        <div className="mb-2 text-xs leading-tight text-foreground/80">{product.name}</div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-foreground">{product.price}</span>
          <span className="text-[10px] text-muted-foreground">{product.size}</span>
        </div>
        <div className="mt-2 flex gap-1.5">
          <button
            onClick={() => onClick(product)}
            className="flex-1 rounded-md border border-border bg-secondary py-1.5 text-[11px] font-semibold text-foreground/80 transition hover:opacity-80"
          >
            Details
          </button>
          <button
            onClick={() => onReserve(product)}
            className="flex-1 rounded-md bg-neon py-1.5 text-[11px] font-bold text-neon-foreground transition hover:opacity-90"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}
