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
  const status = product.status;
  const isAvailable = status === "AVAILABLE";
  const isPending = status === "PENDING";
  const isSold = status === "SOLD";
  const isReserved = status === "RESERVED";

  const visualBg = product.gradient
    ? gradientStyle[product.gradient]
    : "linear-gradient(145deg, var(--grad-1-from), var(--grad-1-to))";

  return (
    <button
      onClick={() => onClick(product)}
      className={`group w-[152px] shrink-0 overflow-hidden rounded-[6px] border border-border bg-surface-3 text-left transition hover:-translate-y-1 hover:scale-[1.02] hover:border-neon/55 hover:shadow-[0_12px_32px_oklch(0.92_0.31_138/0.1)] ${
        isReserved ? "opacity-75" : ""
      }`}
    >
      <div
        className="relative flex h-[122px] items-center justify-center overflow-hidden text-[2.8rem]"
        style={!product.image ? { background: visualBg } : undefined}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={`${product.brand} ${product.name}`}
            loading="lazy"
            className={`h-full w-full object-cover ${isSold ? "opacity-40 grayscale" : ""}`}
          />
        ) : (
          <span className={isSold ? "opacity-40 grayscale" : ""}>{product.icon}</span>
        )}

        {product.tag && !isSold && (
          <span
            className={`absolute left-[7px] top-[7px] rounded-[4px] px-[7px] py-[3px] text-[8px] font-black uppercase tracking-[0.8px] ${tagClasses[product.tagVariant ?? "red"]}`}
          >
            {product.tag}
          </span>
        )}

        {isReserved && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border border-cyan/60 bg-black/80 px-2 py-0.5 text-[9px] font-black uppercase tracking-[1px] text-cyan">
            RESERVED
          </span>
        )}

        {isSold && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70">
            <span className="rounded-md border border-danger/60 bg-black/80 px-2 py-0.5 text-[10px] font-black uppercase tracking-[1.5px] text-danger">
              SOLD
            </span>
          </div>
        )}

        {isAvailable && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden bg-black/75 px-1.5 py-[3px] text-center text-[7.5px] font-semibold text-[oklch(0.7_0.25_350)] group-hover:block">
            May tumitingin dito ngayon 👀
          </div>
        )}
      </div>
      <div className="px-3 pb-3 pt-2.5">
        <div className="mb-0.5 text-[10px] font-black uppercase tracking-[1.2px] text-neon">
          {product.brand}
        </div>
        <div className="mb-1 text-[12px] leading-[1.3] text-foreground/80">{product.name}</div>
        {isPending && (
          <div className="mb-1 text-[9px] font-semibold text-cyan">May tumitingin 👀</div>
        )}
        <div className="flex items-center justify-between">
          <span className="text-[14px] font-black text-white">{product.price}</span>
          <span className="rounded bg-surface-4 px-1.5 py-[2px] text-[10px] text-muted-foreground">
            {product.size}
          </span>
        </div>
      </div>
    </button>
  );
}
