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
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition hover:-translate-y-0.5 hover:border-neon/50 hover:shadow-neon-soft">
      <button
        onClick={() => onClick(product)}
        className="relative flex aspect-square w-full items-center justify-center text-5xl"
        style={{ background: gradientStyle[product.gradient] }}
      >
        <span>{product.icon}</span>
        {product.tag && (
          <span
            className={`absolute left-1.5 top-1.5 rounded-[4px] px-1.5 py-[3px] text-[8px] font-extrabold uppercase tracking-[0.8px] ${tagClasses[product.tagVariant ?? "red"]}`}
          >
            {product.tag}
          </span>
        )}
        <span className="absolute bottom-1.5 right-1.5 rounded-[4px] border border-neon/30 bg-black/80 px-1.5 py-[2px] text-[8.5px] font-bold text-neon">
          {product.condition}
        </span>
      </button>
      <div className="px-3 pb-3 pt-2.5">
        <div className="mb-0.5 text-[10px] font-extrabold uppercase tracking-[1px] text-neon">
          {product.brand}
        </div>
        <div className="mb-1.5 text-[12px] leading-[1.3] text-foreground/80">{product.name}</div>
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-[14px] font-extrabold text-foreground">{product.price}</span>
          <span className="text-[10px] text-muted-foreground">{product.size}</span>
        </div>
        <div className="mb-1.5 text-[10px] italic text-muted-foreground/70">
          Tap to reserve before it's gone
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => onClick(product)}
            className="flex-1 rounded-md border border-border bg-surface-4 py-1.5 text-[10px] font-bold text-foreground/70 transition hover:opacity-85"
          >
            Details
          </button>
          <button
            onClick={() => onReserve(product)}
            className="flex-1 rounded-md bg-neon py-1.5 text-[10px] font-extrabold text-neon-foreground transition hover:opacity-90"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}
