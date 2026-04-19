const cards = [
  {
    check: "✓ Authentic",
    text: "Real branded footwear",
    sub: "Hindi basta ukay. Curated at checked.",
  },
  {
    check: "✓ Carefully Selected",
    text: "Hindi ukay random",
    sub: "Bawat pair, pinipili namin personally.",
  },
  {
    check: "✓ Sulit na Presyo",
    text: "Pangmalakasan porma",
    sub: "Branded ang quality, hindi ang presyo.",
  },
  {
    check: "✓ Repeat Buyers",
    text: "Weekly bumabalik sila",
    sub: "Satisfied customers weekly. Track record solid.",
  },
];

export function WhyChooseUs() {
  return (
    <div className="px-5 pb-6">
      <div className="grid grid-cols-2 gap-2">
        {cards.map((c) => (
          <div
            key={c.check}
            className="rounded-[11px] border border-border bg-surface-3 p-4"
          >
            <div className="mb-1 text-[11px] font-extrabold uppercase tracking-[0.5px] text-neon">
              {c.check}
            </div>
            <div className="text-[12px] font-semibold leading-[1.4] text-foreground/80">
              {c.text}
            </div>
            <div className="mt-1 text-[10px] leading-[1.4] text-muted-foreground">
              {c.sub}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
