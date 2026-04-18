type HeroProps = {
  onViewDrops: () => void;
  onMessage: () => void;
};

export function Hero({ onViewDrops, onMessage }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-background px-6 py-10 text-center sm:py-14">
      {/* Top brand wordmark */}
      <div className="absolute left-5 top-4 text-[11px] font-bold uppercase tracking-[1.5px] text-muted-foreground">
        <span className="text-neon/80">BERNS</span> Kalsada Kicks
      </div>

      {/* Radial neon glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -10%, oklch(0.92 0.31 138 / 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative mt-8 flex flex-col items-center sm:mt-6">
        <span className="mb-4 inline-flex animate-pulse-badge items-center gap-1.5 rounded-full border border-neon/25 bg-neon/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[1px] text-neon">
          🔥 New Drop Weekly
        </span>

        <h1 className="mb-1.5 text-3xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
          Premium Drip.
          <br />
          <em className="font-extrabold not-italic text-neon [text-shadow:0_0_24px_oklch(0.92_0.31_138/0.5)]">
            Hindi Presyong Mall.
          </em>
        </h1>

        <p className="mx-auto mb-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          Branded. Thrifted. Legit. — Quality kicks para sa street-smart na Pinoy. Limited pairs lang.
        </p>
        <p className="mb-6 text-[11px] uppercase tracking-wider text-muted-foreground/70">
          <span className="text-neon/70">●</span> First to pay basis &nbsp;·&nbsp; Quality-checked lahat
        </p>

        <div className="flex flex-wrap justify-center gap-2.5">
          <button
            onClick={onViewDrops}
            className="animate-glow-btn rounded-lg bg-neon px-5 py-3 text-sm font-extrabold tracking-wide text-neon-foreground transition hover:-translate-y-0.5"
          >
            🔥 View Latest Drop
          </button>
          <button
            onClick={onMessage}
            className="rounded-lg border border-cyan/35 bg-transparent px-5 py-3 text-sm font-bold text-cyan shadow-cyan-soft transition hover:-translate-y-0.5 hover:border-cyan hover:bg-cyan/10"
          >
            💬 Message Us
          </button>
        </div>
      </div>
    </section>
  );
}
