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
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/[0.88] p-3 backdrop-blur-sm sm:items-center"
    >
      <div className="relative max-h-[88vh] w-full max-w-[420px] overflow-y-auto rounded-t-[20px] border border-border bg-surface-3 p-6 sm:rounded-[20px]">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition hover:text-foreground"
        >
          ✕
        </button>

        <div className="mx-auto mb-5 h-[3px] w-8 rounded-sm bg-surface-4 sm:hidden" />

        <div
          className="mb-4 flex h-[160px] items-center justify-center rounded-xl text-[4.5rem]"
          style={{ background: gradientStyle[product.gradient] }}
        >
          {product.icon}
        </div>

        <div className="mb-2 inline-flex items-center gap-1.5 rounded-md border border-neon/20 bg-neon/[0.08] px-2.5 py-[3px] text-[10px] font-bold uppercase tracking-[0.5px] text-neon">
          ✓ Authenticity Checked &nbsp;·&nbsp; Quality Guaranteed
        </div>

        <div className="text-[11px] font-extrabold uppercase tracking-[1px] text-neon">
          {product.brand}
        </div>
        <div className="mb-3 mt-0.5 text-[17px] font-extrabold leading-[1.2] text-foreground">
          {product.name}
        </div>

        <div className="mb-3 flex flex-wrap gap-1.5">
          <Spec label="Size" value={product.size} />
          <Spec label="Condition" value={product.condition} />
          <SpecBadge>✓ Auth Checked</SpecBadge>
        </div>

        <div className="text-[1.4rem] font-extrabold text-neon">{product.price}</div>
        <div className="mb-4 text-[11px] text-muted-foreground">
          Quality Guaranteed — Checked bago ipadala 🕐
        </div>

        <div className="flex gap-2">
          <button
            onClick={onMessage}
            className="flex-1 rounded-lg border border-cyan/40 bg-transparent py-3 text-[13px] font-bold text-cyan transition hover:bg-cyan/10"
          >
            💬 Message Now
          </button>
          <button
            onClick={onReserve}
            className="flex-[1.2] rounded-lg bg-neon py-3 text-[13px] font-extrabold text-neon-foreground shadow-neon transition hover:scale-[1.01] hover:shadow-neon-lg"
          >
            📝 Reserve via Form
          </button>
        </div>
      </div>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[5px] border border-border bg-surface-4 px-2.5 py-1 text-[11px] text-muted-foreground">
      {label} <span className="font-bold text-foreground">{value}</span>
    </div>
  );
}

function SpecBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[5px] border border-border bg-surface-4 px-2.5 py-1 text-[11px] font-bold text-foreground">
      {children}
    </div>
  );
}
