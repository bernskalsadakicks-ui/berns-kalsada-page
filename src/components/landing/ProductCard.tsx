import { gradientStyle, type Product, type TagVariant } from "@/data/products";

type Props = {
  product: Product;
  onClick: (p: Product) => void;
  onReserve: (p: Product) => void;
};

const tagClasses: Record<TagVariant, string> = {
  red: "bg-danger text-danger-foreground",
  blue: "bg-cyan text-cyan-foreground",
  green: "bg-neon text-neon-foreground",
};

export function ProductCard({ product, onClick, onReserve }: Props) {
  return (
    <div className="group overflow-hidden rounded-[13px] border border-border bg-surface-3 transition hover:-translate-y-1 hover:border-neon/50 hover:shadow-[0_8px_28px_oklch(0.92_0.31_138/0.09)]">
      <button
        onClick={() => onClick(product)}
        className="relative flex aspect-square w-full items-center justify-center text-5xl"
        style={{ background: gradientStyle[product.gradient] }}
      >
        <span>{product.icon}</span>
        {product.tag && (
          <span
            className={`absolute left-[7px] top-[7px] rounded-[4px] px-[7px] py-[3px] text-[7.5px] font-black uppercase tracking-[0.8px] ${tagClasses[product.tagVariant ?? "red"]}`}
          >
            {product.tag}
          </span>
        )}
        <span className="absolute bottom-1.5 right-1.5 rounded-[4px] border border-neon/30 bg-black/[0.82] px-1.5 py-[2px] text-[8px] font-extrabold text-neon">
          {product.condition}
        </span>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 hidden border-t px-1.5 py-[3px] text-center text-[8px] font-semibold group-hover:block"
          style={{
            background: "oklch(0.6 0.25 0 / 0.12)",
            borderColor: "oklch(0.6 0.25 0 / 0.25)",
            color: "oklch(0.72 0.2 350)",
          }}
        >
          May ibang tumitingin dito ngayon
        </div>
      </button>
      <div className="px-3 pb-3 pt-2.5">
        <div className="mb-0.5 text-[10px] font-black uppercase tracking-[1.2px] text-neon">
          {product.brand}
        </div>
        <div className="mb-1 text-[12px] leading-[1.3] text-foreground/80">{product.name}</div>
        <div className="mb-1 flex items-center justify-between">
          <span className="text-[14px] font-black text-white">{product.price}</span>
          <span className="text-[10px] text-muted-foreground">{product.size}</span>
        </div>
        <div className="mb-1.5 text-[10px] italic text-muted-foreground/60">
          Tap to reserve before it's gone
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => onClick(product)}
            className="flex-1 rounded-md border border-border bg-surface-4 py-1.5 text-[10px] font-extrabold text-foreground/70 transition hover:opacity-85"
          >
            Details
          </button>
          <button
            onClick={() => onReserve(product)}
            className="flex-1 rounded-md bg-neon py-1.5 text-[10px] font-black text-neon-foreground transition hover:opacity-90"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}
