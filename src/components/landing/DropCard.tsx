import { gradientStyle, type Product, type TagVariant } from "@/data/products";

type Props = {
  product: Product;
  onClick: (p: Product) => void;
};

const tagClasses: Record<TagVariant, string> = {
  red: "bg-danger text-danger-foreground",
  blue: "bg-cyan text-cyan-foreground",
  green: "bg-neon text-neon-foreground",
};

export function DropCard({ product, onClick }: Props) {
  return (
    <button
      onClick={() => onClick(product)}
      className="group w-[148px] shrink-0 overflow-hidden rounded-xl border border-border bg-card text-left transition hover:-translate-y-0.5 hover:scale-[1.02] hover:border-neon/60 hover:shadow-neon-soft"
    >
      <div
        className="relative flex h-[120px] items-center justify-center text-[2.8rem]"
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
      </div>
      <div className="px-3 pb-3 pt-2.5">
        <div className="mb-0.5 text-[10px] font-extrabold uppercase tracking-[1px] text-neon">
          {product.brand}
        </div>
        <div className="mb-2 text-xs leading-[1.3] text-foreground/80">{product.name}</div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-extrabold text-foreground">{product.price}</span>
          <span className="rounded bg-surface-4 px-1.5 py-[2px] text-[10px] text-muted-foreground">
            {product.size}
          </span>
        </div>
      </div>
    </button>
  );
}
