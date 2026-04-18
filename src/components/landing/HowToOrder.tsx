import { orderSteps } from "@/data/products";

export function HowToOrder() {
  return (
    <div className="flex flex-col gap-2 px-6 pb-8">
      {orderSteps.map((step, i) => (
        <div
          key={step.title}
          className="flex items-start gap-3.5 rounded-xl border border-border bg-card p-3.5"
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neon/30 bg-neon/10 text-xs font-bold text-neon">
            {i + 1}
          </div>
          <div className="pt-0.5 text-sm leading-relaxed text-foreground/80">
            <strong className="mb-0.5 block font-semibold text-foreground">{step.title}</strong>
            {step.desc}
          </div>
        </div>
      ))}
    </div>
  );
}
