type HeroProps = {
  onViewDrops: () => void;
  onMessage: () => void;
};

export function Hero({ onViewDrops, onMessage }: HeroProps) {
  return (
    <section
      className="relative overflow-hidden border-b px-5 pb-12 pt-11 text-center sm:pt-14"
      style={{
        background: "var(--gradient-hero)",
        borderColor: "oklch(0.13 0.005 280)",
      }}
    >
      {/* Brand mark top-left */}
      <div className="absolute left-5 top-4 flex items-center gap-1.5">
        <span className="h-[7px] w-[7px] animate-blink rounded-full bg-neon" />
        <span className="text-[11px] font-extrabold uppercase tracking-[1.5px] text-muted-foreground">
          <b className="text-neon font-extrabold">BERNS</b> Kalsada Kicks
        </span>
      </div>

      {/* Radial neon glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-180px] h-[500px] w-[500px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.92 0.31 138 / 0.055) 0%, transparent 70%)",
        }}
      />

      <div className="relative mt-6 flex flex-col items-center">
        <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-neon/20 bg-neon/[0.07] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[1.2px] text-neon">
          <span className="h-1.5 w-1.5 animate-blink-fast rounded-full bg-neon" />
          Weekly Drops
        </span>

        <h1 className="mb-2 text-[2rem] font-black leading-[1.05] tracking-[-1.5px] text-white sm:text-5xl">
          Premium Drip.
          <br />
          <em className="font-black not-italic text-neon [text-shadow:0_0_30px_oklch(0.92_0.31_138/0.4),0_0_60px_oklch(0.92_0.31_138/0.15)]">
            Hindi Presyong Mall.
          </em>
        </h1>

        <p className="mb-2 text-[14px] font-medium tracking-[0.2px] text-foreground/70">
          Branded kicks. Iisa lang bawat pair. Unahan lang.
        </p>

        <span
          className="mb-7 inline-flex items-center gap-1.5 rounded-md border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.5px]"
          style={{
            background: "oklch(0.66 0.24 28 / 0.08)",
            borderColor: "oklch(0.66 0.24 28 / 0.25)",
            color: "oklch(0.78 0.16 25)",
          }}
        >
          ⚠ First to Pay Basis
        </span>

        <div className="flex flex-wrap justify-center gap-2.5">
          <button
            onClick={onViewDrops}
            className="animate-neon-pulse rounded-[9px] bg-neon px-6 py-3 text-[13px] font-black tracking-[0.3px] text-neon-foreground transition hover:-translate-y-0.5"
          >
            🔥 View Latest Drop
          </button>
          <button
            onClick={onMessage}
            className="rounded-[9px] border border-cyan/30 bg-transparent px-6 py-3 text-[13px] font-bold text-cyan transition hover:-translate-y-0.5 hover:border-cyan/60 hover:bg-cyan/[0.07] hover:shadow-cyan-soft"
          >
            💬 Message Us
          </button>
        </div>
      </div>
    </section>
  );
}
