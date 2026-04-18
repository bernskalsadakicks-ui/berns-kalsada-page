import type { Product } from "@/data/products";

type Props = {
  product: Product;
  onClick: (p: Product) => void;
};

export function DropCard({ product, onClick }: Props) {
  return (
    <button
      onClick={() => onClick(product)}
      className="group w-44 shrink-0 overflow-hidden rounded-xl border border-border bg-card text-left transition hover:-translate-y-0.5 hover:border-neon"
    >
      <div
        className="relative flex h-32 items-center justify-center text-4xl"
        style={{ background: "linear-gradient(135deg, oklch(0.22 0.04 260), oklch(0.25 0.06 240))" }}
      >
        <span>{product.icon}</span>
        {product.tag && (
          <span
            className={`absolute left-2 top-2 rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
              product.tagVariant === "cyan"
                ? "bg-cyan text-cyan-foreground"
                : "bg-neon text-neon-foreground"
            }`}
          >
            {product.tag}
          </span>
        )}
      </div>
      <div className="px-3 pb-3 pt-2.5">
        <div className="mb-0.5 text-xs font-bold uppercase tracking-wider text-neon">
          {product.brand}
        </div>
        <div className="mb-1.5 text-xs leading-tight text-foreground/80">{product.name}</div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-foreground">{product.price}</span>
          <span className="rounded bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground">
            {product.size}
          </span>
        </div>
      </div>
    </button>
  );
}
