const items = [
  "Authentic Branded",
  "Quality Checked",
  "First to Pay Basis",
  "Nationwide Shipping",
  "GCash Accepted",
];

export function TrustStrip() {
  return (
    <div className="no-scrollbar flex overflow-x-auto border-b border-border bg-surface">
      {items.map((item) => (
        <div
          key={item}
          className="flex shrink-0 items-center gap-1.5 whitespace-nowrap border-r border-border px-4 py-2.5 text-[11px] text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-neon" />
          {item}
        </div>
      ))}
    </div>
  );
}
