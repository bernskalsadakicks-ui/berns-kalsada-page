export function PaymentShipping() {
  return (
    <div className="px-5">
      <div className="mb-3 grid grid-cols-2 gap-3">
        <PayCard icon="💳" label="Payment" value="GCash Only" />
        <PayCard icon="🚚" label="Delivery" value="Nationwide" />
      </div>
      <div
        className="rounded-[8px] border border-neon/25 p-4 text-center shadow-[0_6px_24px_oklch(0.92_0.31_138/0.08),inset_0_1px_0_oklch(0.92_0.31_138/0.08)]"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.92 0.31 138 / 0.08) 0%, oklch(0.92 0.31 138 / 0.02) 100%)",
        }}
      >
        <div className="mb-1 text-[13px] font-extrabold text-neon">
          🚚 Mostly Free Shipping — Kahit saan sa Pilipinas
        </div>
        <div className="text-[11px] text-muted-foreground">
          Fast shipping. No hassle. Padala agad pagkatapos ng payment.
        </div>
      </div>
    </div>
  );
}

function PayCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div
      className="rounded-[8px] border border-border p-4 text-center shadow-[0_4px_16px_oklch(0_0_0/0.4),inset_0_1px_0_oklch(1_0_0/0.04)]"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.13 0.005 280) 0%, oklch(0.09 0.005 280) 100%)",
      }}
    >
      <div className="mb-1.5 text-[1.6rem]">{icon}</div>
      <div className="mb-0.5 text-[10px] uppercase tracking-[0.5px] text-muted-foreground">
        {label}
      </div>
      <div className="text-[13px] font-extrabold text-white">{value}</div>
    </div>
  );
}
