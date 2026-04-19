type Props = {
  onMessage: () => void;
  onReserve: () => void;
};

export function StickyCTA({ onMessage, onReserve }: Props) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 px-5 pb-3.5 pt-2 backdrop-blur-md"
      style={{
        background: "oklch(0.06 0.005 280 / 0.98)",
        borderTop: "1px solid oklch(0.92 0.31 138 / 0.12)",
      }}
    >
      <div className="mb-2 text-center text-[11px] font-bold tracking-[0.3px] text-muted-foreground">
        Unahan na to 👀 — <b className="text-white">May kaagaw ka dito ngayon</b>
      </div>
      <div className="flex gap-2.5">
        <button
          onClick={onMessage}
          className="flex-1 rounded-[9px] border border-[oklch(0.2_0.005_280)] bg-transparent py-3 text-[13px] font-extrabold text-foreground transition hover:border-cyan hover:text-cyan"
        >
          💬 Message Now
        </button>
        <button
          onClick={onReserve}
          className="flex-[1.7] animate-neon-pulse rounded-[9px] bg-neon py-3 text-[13px] font-black text-neon-foreground transition hover:scale-[1.01]"
        >
          🛒 Reserve Before It's Gone
        </button>
      </div>
    </div>
  );
}
