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
    <div className="px-5">
      <div className="grid grid-cols-2 gap-3">
        {cards.map((c) => (
          <div
            key={c.check}
            className="group relative overflow-hidden rounded-[8px] border border-border p-4 shadow-[0_4px_16px_oklch(0_0_0/0.4),inset_0_1px_0_oklch(1_0_0/0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-neon/40 hover:shadow-[0_8px_28px_oklch(0_0_0/0.5),0_0_0_1px_oklch(0.92_0.31_138/0.15),inset_0_1px_0_oklch(1_0_0/0.06)]"
            style={{
              background:
                "linear-gradient(160deg, oklch(0.13 0.005 280) 0%, oklch(0.09 0.005 280) 100%)",
            }}
          >
            <div className="mb-1 text-[11px] font-extrabold uppercase tracking-[0.5px] text-neon">
              {c.check}
            </div>
            <div className="text-[12px] font-semibold leading-[1.4] text-foreground/85">
              {c.text}
            </div>
            <div className="mt-1 text-[10px] leading-[1.4] text-muted-foreground">{c.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
