const items = [
  "Authentic Branded Items",
  "Quality Checked",
  "First to Pay Basis",
  "Nationwide Shipping",
];

export function TrustStrip() {
  return (
    <div
      className="flex flex-wrap justify-center gap-6 border-b border-border px-6 py-3"
      style={{ background: "var(--surface-2)" }}
    >
      {items.map((item) => (
        <div key={item} className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-neon" />
          {item}
        </div>
      ))}
    </div>
  );
}
