import { useEffect } from "react";
import { gradientStyle, type Product } from "@/data/products";

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
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/90 p-3 backdrop-blur-sm sm:items-center"
    >
      <div
        className="relative max-h-[88vh] w-full max-w-[400px] overflow-y-auto rounded-t-[20px] border p-6 sm:rounded-[20px]"
        style={{
          background: "oklch(0.09 0.005 280)",
          borderColor: "oklch(0.16 0.005 280)",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition hover:text-foreground"
        >
          ✕
        </button>

        <div className="mx-auto mb-5 h-[3px] w-8 rounded-sm bg-surface-4 sm:hidden" />

        <div
          className="relative mb-4 flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl text-[5rem]"
          style={{
            maxHeight: "320px",
            background: product.image
              ? "oklch(0.18 0.04 250)"
              : product.gradient
                ? gradientStyle[product.gradient]
                : "linear-gradient(145deg, var(--grad-1-from), var(--grad-1-to))",
          }}
        >
          {product.image ? (
            <img
              src={product.image}
              alt={`${product.brand} ${product.name}`}
              className="block h-full w-full object-contain object-center"
            />
          ) : (
            product.icon
          )}
        </div>

        <div className="mb-2.5 flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-neon/20 bg-neon/[0.07] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.5px] text-neon">
            ✓ Authenticity Checked
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-cyan/20 bg-cyan/[0.07] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.5px] text-cyan">
            🚚 Ready to Ship
          </span>
        </div>

        <div className="text-[11px] font-black uppercase tracking-[1.2px] text-neon">
          {product.brand}
        </div>
        <div className="mb-3 mt-1 text-[17px] font-black leading-[1.2] text-white">
          {product.name}
        </div>

        <div className="mb-3 flex flex-wrap gap-1.5">
          <Spec label="Size" value={product.size} />
          <Spec label="Cond" value={product.condition} />
          <SpecBadge>Auth ✓</SpecBadge>
          <SpecBadge>Legit Only</SpecBadge>
          {product.status && product.status !== "AVAILABLE" && (
            <span
              className={`rounded-[5px] border px-2.5 py-1 text-[11px] font-black uppercase tracking-[0.5px] ${
                product.status === "SOLD"
                  ? "border-danger/40 bg-danger/10 text-danger"
                  : "border-cyan/40 bg-cyan/10 text-cyan"
              }`}
            >
              {product.status}
            </span>
          )}
        </div>

        <div className="text-[1.45rem] font-black text-neon [text-shadow:0_0_20px_oklch(0.92_0.31_138/0.3)]">
          {product.price}
        </div>
        <div className="mb-4 text-[11px] font-semibold text-danger/85">
          ⚠ No bogus buyers. First to pay gets the item.
        </div>

        {(() => {
          const status = product.status ?? "AVAILABLE";
          const isAvailable = status === "AVAILABLE";
          return (
            <div className="flex gap-2">
              <button
                onClick={onMessage}
                className="flex-1 rounded-lg border border-cyan/35 bg-transparent py-3 text-[13px] font-extrabold text-cyan transition hover:bg-cyan/[0.08]"
              >
                💬 Message Now
              </button>
              <button
                onClick={() => isAvailable && onReserve()}
                disabled={!isAvailable}
                className="flex-[1.2] animate-neon-pulse-fast rounded-lg bg-neon py-3 text-[13px] font-black text-neon-foreground transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:animate-none disabled:bg-surface-4 disabled:text-muted-foreground disabled:opacity-70"
              >
                {isAvailable
                  ? "📝 Reserve via Form"
                  : status === "SOLD"
                    ? "❌ Sold Out"
                    : "⏳ Reserved"}
              </button>
            </div>
          );
        })()}
      </div>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="rounded-[5px] border px-2.5 py-1 text-[11px] text-muted-foreground"
      style={{
        background: "oklch(0.11 0.005 280)",
        borderColor: "oklch(0.16 0.005 280)",
      }}
    >
      {label} <span className="font-extrabold text-white">{value}</span>
    </div>
  );
}

function SpecBadge({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-[5px] border px-2.5 py-1 text-[11px] font-extrabold text-foreground/80"
      style={{
        background: "oklch(0.11 0.005 280)",
        borderColor: "oklch(0.16 0.005 280)",
      }}
    >
      {children}
    </div>
  );
}
