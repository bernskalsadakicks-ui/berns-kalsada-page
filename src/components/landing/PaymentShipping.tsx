export function PaymentShipping() {
  return (
    <div className="px-6 pb-8">
      <div className="grid grid-cols-2 gap-2.5">
        <PayCard icon="💳" label="Payment" value="GCash Only" />
        <PayCard icon="📦" label="Delivery" value="Nationwide" />
      </div>
      <div className="mt-2.5 rounded-xl border border-neon/20 bg-neon/5 p-4 text-center text-sm font-semibold text-neon">
        🚚 Mostly Free Shipping — Padala namin sa buong Pilipinas!
      </div>
    </div>
  );
}

function PayCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 text-center">
      <div className="mb-2 text-2xl">{icon}</div>
      <div className="mb-1 text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="text-sm font-semibold text-foreground">{value}</div>
    </div>
  );
}
