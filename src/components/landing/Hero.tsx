type HeroProps = {
  onViewDrops: () => void;
  onMessage: () => void;
};

export function Hero({ onViewDrops, onMessage }: HeroProps) {
  return (
    <section
      className="relative border-b px-6 py-12 text-center sm:py-16"
      style={{
        background:
          "linear-gradient(135deg, var(--background) 0%, color-mix(in oklab, var(--neon) 8%, var(--background)) 50%, var(--background) 100%)",
        borderColor: "color-mix(in oklab, var(--neon) 15%, var(--border))",
      }}
    >
      <span className="mb-5 inline-block rounded-full border border-neon/30 bg-neon/10 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[2px] text-neon">
        New Drop Every Week
      </span>
      <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
        Level Up Your Kicks
        <br />
        <span className="text-neon">Without Breaking</span> the Bank
      </h1>
      <p className="mx-auto mb-7 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
        Branded. Thrifted. Legit. — Premium footwear para sa street-smart na Pinoy.
        Quality-checked, limited stocks lang.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={onViewDrops}
          className="rounded-lg bg-neon px-6 py-3 text-sm font-bold tracking-wide text-neon-foreground shadow-neon-soft transition hover:-translate-y-0.5 hover:shadow-neon-lg"
        >
          🔥 View Latest Drop
        </button>
        <button
          onClick={onMessage}
          className="rounded-lg border border-border bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition hover:border-cyan hover:text-cyan"
        >
          💬 Message Us
        </button>
      </div>
    </section>
  );
}
