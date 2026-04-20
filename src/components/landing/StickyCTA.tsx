type Props = {
  onMessage: () => void;
  onReserve: () => void;
};

export function StickyCTA({ onMessage, onReserve }: Props) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 px-5 pb-4 pt-3 backdrop-blur-md"
      style={{
        background: "oklch(0.06 0.005 280 / 0.98)",
        borderTop: "1px solid oklch(0.92 0.31 138 / 0.22)",
        boxShadow: "0 -8px 30px oklch(0.92 0.31 138 / 0.08)",
      }}
    >
      <div className="mb-3 text-center text-[13px] font-extrabold uppercase tracking-[0.6px]">
        <span className="text-neon [text-shadow:0_0_12px_oklch(0.92_0.31_138/0.5)]">
          Unahan na to 👀
        </span>
        <span className="ml-2 text-white/85">— May kaagaw ka dito ngayon</span>
      </div>
      <div className="flex gap-3">
        <button
          onClick={onMessage}
          className="flex-1 rounded-[11px] border-2 border-cyan/40 bg-cyan/[0.05] py-4 text-[14px] font-extrabold text-cyan transition hover:-translate-y-0.5 hover:border-cyan hover:bg-cyan/[0.12] hover:shadow-[0_0_20px_oklch(0.78_0.18_220/0.35)]"
        >
          💬 Message Now
        </button>
        <button
          onClick={onReserve}
          className="flex-[1.7] animate-neon-pulse rounded-[11px] bg-neon py-4 text-[14px] font-black uppercase tracking-[0.4px] text-neon-foreground shadow-[0_0_25px_oklch(0.92_0.31_138/0.5)] transition hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_40px_oklch(0.92_0.31_138/0.7)]"
        >
          🛒 Reserve Before It's Gone
        </button>
      </div>
    </div>
  );
}
