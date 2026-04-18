type Props = {
  onMessage: () => void;
  onReserve: () => void;
};

export function StickyCTA({ onMessage, onReserve }: Props) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2.5 border-t border-border bg-background/95 px-6 py-3 backdrop-blur-md">
      <button
        onClick={onMessage}
        className="flex-1 rounded-lg border border-border bg-transparent py-3 text-sm font-semibold text-foreground transition hover:border-cyan hover:text-cyan"
      >
        💬 Message
      </button>
      <button
        onClick={onReserve}
        className="flex-[1.5] rounded-lg bg-neon py-3 text-sm font-bold text-neon-foreground shadow-neon-soft transition hover:shadow-neon"
      >
        🛒 Reserve Now
      </button>
    </div>
  );
}
