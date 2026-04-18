type Props = {
  onMessage: () => void;
  onReserve: () => void;
};

export function StickyCTA({ onMessage, onReserve }: Props) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-5 pb-3 pt-2 backdrop-blur-md">
      <div className="mb-2 text-center text-[11px] tracking-[0.3px] text-muted-foreground">
        May kaagaw ka dito 👀 — Reserve mo na bago maunahan
      </div>
      <div className="flex gap-2.5">
        <button
          onClick={onMessage}
          className="flex-1 rounded-lg border border-border bg-transparent py-2.5 text-[13px] font-bold text-foreground transition hover:border-cyan hover:text-cyan"
        >
          💬 Message
        </button>
        <button
          onClick={onReserve}
          className="flex-[1.6] animate-glow-btn-slow rounded-lg bg-neon py-2.5 text-[13px] font-extrabold text-neon-foreground transition hover:scale-[1.01]"
        >
          🛒 Reserve Now
        </button>
      </div>
    </div>
  );
}
