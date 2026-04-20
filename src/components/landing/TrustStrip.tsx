const items = [
  "Authentic Branded",
  "Quality Checked",
  "First to Pay Basis",
  "Nationwide Shipping",
  "GCash Accepted",
  "Repeat Buyers Weekly",
];

export function TrustStrip() {
  return (
    <div
      className="no-scrollbar flex overflow-x-auto border-b border-border shadow-[0_8px_24px_oklch(0_0_0/0.4)]"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.09 0.005 280) 0%, oklch(0.06 0.005 280) 100%)",
      }}
    >
      {items.map((item) => (
        <div
          key={item}
          className="flex shrink-0 items-center gap-1.5 whitespace-nowrap border-r border-border px-4 py-3 text-[11px] text-muted-foreground"
        >
          <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-neon shadow-[0_0_8px_oklch(0.92_0.31_138/0.6)]" />
          {item}
        </div>
      ))}
    </div>
  );
}
