export function PaymentShipping() {
  return (
    <div className="px-5 pb-7">
      <div className="mb-2 grid grid-cols-2 gap-2">
        <PayCard icon="💳" label="Payment" value="GCash Only" />
        <PayCard icon="🚚" label="Delivery" value="Nationwide" />
      </div>
      <div className="rounded-[10px] border border-neon/20 bg-neon/[0.06] p-3.5 text-center">
        <div className="mb-1 text-[13px] font-bold text-neon">
          🚚 Mostly Free Shipping — Nationwide!
        </div>
        <div className="text-[11px] text-muted-foreground">
          Fast shipping. No hassle. Padala namin kahit saan sa Pilipinas.
        </div>
      </div>
    </div>
  );
}

function PayCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="rounded-[11px] border border-border bg-card p-4 text-center">
      <div className="mb-1.5 text-[1.5rem]">{icon}</div>
      <div className="mb-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="text-[13px] font-bold text-foreground">{value}</div>
    </div>
  );
}
