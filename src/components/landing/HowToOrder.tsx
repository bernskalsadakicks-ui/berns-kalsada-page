import { orderSteps } from "@/data/products";

export function HowToOrder() {
  return (
    <div className="px-5">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {orderSteps.map((step) => (
          <div
            key={step.num}
            className="rounded-[8px] border border-border p-4 text-center shadow-[0_4px_16px_oklch(0_0_0/0.4),inset_0_1px_0_oklch(1_0_0/0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-neon/40 hover:shadow-[0_8px_24px_oklch(0_0_0/0.5),0_0_0_1px_oklch(0.92_0.31_138/0.15)]"
            style={{
              background:
                "linear-gradient(160deg, oklch(0.13 0.005 280) 0%, oklch(0.09 0.005 280) 100%)",
            }}
          >
            <div className="mb-2 text-[1.6rem]">{step.icon}</div>
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
