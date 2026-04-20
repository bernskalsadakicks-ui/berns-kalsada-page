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
  const status = product.status;
  const isAvailable = status === "AVAILABLE";
  const isPending = status === "PENDING";
  const isReserved = status === "RESERVED";
  const isSold = status === "SOLD";
  const canReserve = isAvailable || isPending;

  const visualBg = product.gradient
    ? gradientStyle[product.gradient]
    : "linear-gradient(145deg, var(--grad-1-from), var(--grad-1-to))";

  return (
    <div
      className={`group overflow-hidden rounded-[6px] border border-border bg-surface-3 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-neon/70 hover:shadow-[0_0_0_1px_oklch(0.92_0.31_138/0.35),0_12px_40px_oklch(0.92_0.31_138/0.18)] ${
        isReserved ? "opacity-75" : ""
      }`}
    >
      <button
        onClick={() => onClick(product)}
        className="relative flex aspect-square w-full items-center justify-center overflow-hidden text-5xl"
        style={!product.image ? { background: visualBg } : undefined}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={`${product.brand} ${product.name}`}
            loading="lazy"
            className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-110 ${
              isSold ? "opacity-40 grayscale" : ""
            }`}
          />
        ) : (
          <span
            className={`transition-transform duration-300 group-hover:scale-110 ${isSold ? "opacity-40 grayscale" : ""}`}
          >
            {product.icon}
          </span>
        )}

        {product.tag && !isSold && (
          <span
            className={`absolute right-[7px] top-[7px] rounded-[5px] px-2 py-[3px] text-[8px] font-black uppercase tracking-[0.9px] shadow-[0_2px_10px_oklch(0_0_0/0.4)] ${tagClasses[product.tagVariant ?? "red"]}`}
          >
            {product.tag}
          </span>
        )}

        {isReserved && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border border-cyan/60 bg-black/80 px-2.5 py-1 text-[10px] font-black uppercase tracking-[1px] text-cyan">
            RESERVED
          </span>
        )}

        {isSold && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70">
            <span className="rounded-md border border-danger/60 bg-black/80 px-3 py-1 text-[12px] font-black uppercase tracking-[1.5px] text-danger">
              SOLD
            </span>
          </div>
        )}

        <span className="absolute bottom-1.5 left-1.5 rounded-[4px] border border-neon/30 bg-black/[0.82] px-1.5 py-[2px] text-[8px] font-extrabold text-neon">
          {product.condition}
        </span>

        {isAvailable && (
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
        )}
      </button>
      <div className="px-3 pb-3 pt-2.5">
        <div className="mb-0.5 text-[10px] font-black uppercase tracking-[1.2px] text-neon">
          {product.brand}
        </div>
        <div className="mb-1.5 text-[12px] leading-[1.3] text-foreground/80">{product.name}</div>
        <div className="mb-1 flex items-baseline justify-between">
          <span className="text-[18px] font-black text-white [text-shadow:0_0_18px_oklch(0.92_0.31_138/0.35)]">
            {product.price}
          </span>
          <span className="text-[10px] text-muted-foreground">{product.size}</span>
        </div>
        <div className="mb-2 text-[10px] font-semibold text-danger/90">
          {isAvailable && "May kaagaw ka dito 👀"}
          {isPending && <span className="text-cyan">May tumitingin 👀</span>}
          {isReserved && "Reserved — waiting for payment"}
          {isSold && "Sold out — abangan susunod na drop"}
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => onClick(product)}
            className="flex-1 rounded-md border border-border bg-surface-4 py-1.5 text-[10px] font-extrabold text-foreground/70 transition hover:opacity-85"
          >
            Details
          </button>
          <button
            onClick={() => canReserve && onReserve(product)}
            disabled={!canReserve}
            className="flex-1 rounded-md bg-neon py-1.5 text-[10px] font-black text-neon-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:bg-surface-4 disabled:text-muted-foreground disabled:opacity-60"
          >
            {isSold ? "Sold" : isReserved ? "Reserved" : "Reserve"}
          </button>
        </div>
      </div>
    </div>
  );
}
