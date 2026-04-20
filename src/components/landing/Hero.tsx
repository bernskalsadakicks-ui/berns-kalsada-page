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

      <div className="relative mt-8 flex flex-col items-center sm:mt-10">
        <span className="mb-7 inline-flex items-center gap-1.5 rounded-full border border-neon/20 bg-neon/[0.07] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[1.2px] text-neon">
          <span className="h-1.5 w-1.5 animate-blink-fast rounded-full bg-neon" />
          Weekly Drops
        </span>

        <h1 className="mb-5 text-[3rem] font-black leading-[0.95] tracking-[-2px] text-white [text-shadow:0_0_40px_oklch(1_0_0/0.15)] sm:text-[4.5rem] lg:text-[5.5rem]">
          Premium Drip.
          <br />
          <em className="font-black not-italic text-neon [text-shadow:0_0_30px_oklch(0.92_0.31_138/0.55),0_0_60px_oklch(0.92_0.31_138/0.3),0_0_100px_oklch(0.92_0.31_138/0.15)]">
            Hindi Presyong Mall.
          </em>
        </h1>

        <p className="mb-4 max-w-md text-[15px] font-medium tracking-[0.2px] text-foreground/75 sm:text-base">
          Branded kicks. Iisa lang bawat pair. Unahan lang.
        </p>

        <span
          className="mb-9 inline-flex items-center gap-1.5 rounded-md border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.5px]"
          style={{
            background: "oklch(0.66 0.24 28 / 0.08)",
            borderColor: "oklch(0.66 0.24 28 / 0.25)",
            color: "oklch(0.78 0.16 25)",
          }}
        >
          ⚠ First to Pay Basis
        </span>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onViewDrops}
            className="animate-neon-pulse rounded-[11px] bg-neon px-8 py-4 text-[15px] font-black uppercase tracking-[0.5px] text-neon-foreground shadow-[0_0_30px_oklch(0.92_0.31_138/0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_45px_oklch(0.92_0.31_138/0.65)] sm:text-base"
          >
            🔥 View Latest Drop
          </button>
          <button
            onClick={onMessage}
            className="rounded-[11px] border border-cyan/30 bg-transparent px-7 py-4 text-[14px] font-bold text-cyan transition hover:-translate-y-0.5 hover:border-cyan/60 hover:bg-cyan/[0.07] hover:shadow-cyan-soft sm:text-[15px]"
          >
            💬 Message Us
          </button>
        </div>
      </div>
    </section>
  );
}
