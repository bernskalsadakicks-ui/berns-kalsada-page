import { orderSteps } from "@/data/products";

export function HowToOrder() {
  return (
    <div className="px-5 pb-6">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {orderSteps.map((step) => (
          <div
            key={step.num}
            className="rounded-[11px] border border-border bg-surface-3 p-3 py-3.5 text-center transition hover:border-neon/30"
          >
            <div className="mb-2 text-[1.5rem]">{step.icon}</div>
            <div className="mb-1 text-[10px] font-black uppercase tracking-[1px] text-neon">
              {step.num}
            </div>
            <div className="text-[11px] font-extrabold leading-tight text-foreground/85">
              {step.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
