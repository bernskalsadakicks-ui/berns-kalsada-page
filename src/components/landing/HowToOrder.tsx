import { orderSteps } from "@/data/products";

export function HowToOrder() {
  return (
    <div className="px-5 pb-7">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {orderSteps.map((step) => (
          <div
            key={step.num}
            className="rounded-[10px] border border-border bg-card p-3 text-center"
          >
            <div className="mb-2 text-[1.4rem]">{step.icon}</div>
            <div className="mb-1 text-[10px] font-extrabold uppercase tracking-[1px] text-neon">
              {step.num}
            </div>
            <div className="text-xs font-bold leading-tight text-foreground">{step.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
