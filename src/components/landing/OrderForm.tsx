import { useState, type FormEvent } from "react";
import { allProducts, featuredDrops } from "@/data/products";

const items = [...featuredDrops, ...allProducts];

export function OrderForm({ formId }: { formId: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id={formId} className="px-5 pb-7">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-border bg-card p-5 sm:p-6"
      >
        <div className="mb-1 text-[15px] font-extrabold text-foreground">📝 Fill Out the Form</div>
        <div className="mb-4 text-[11px] text-muted-foreground">
          Kumpleto ang details para ma-hold ang item mo. First to pay basis.
        </div>

        {submitted ? (
          <div className="rounded-lg border border-neon/30 bg-neon/10 p-5 text-center">
            <div className="mb-2 text-2xl">✅</div>
            <div className="mb-1 font-extrabold text-foreground">Reservation Received!</div>
            <p className="text-sm text-muted-foreground">
              We'll confirm your order via Messenger within 1–2 hours. Salamat!
            </p>
          </div>
        ) : (
          <>
            <Field label="Full Name">
              <input required className={inputCls} type="text" placeholder="Juan dela Cruz" />
            </Field>
            <Field label="Contact Number">
              <input required className={inputCls} type="tel" placeholder="09XX XXX XXXX" />
            </Field>
            <Field label="Delivery Address">
              <input required className={inputCls} type="text" placeholder="City, Province" />
            </Field>
            <Field label="Selected Item">
              <select
                required
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className={inputCls}
              >
                <option value="" disabled>
                  Pumili ng item...
                </option>
                {items.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.brand} {p.name} — {p.size} — {p.price}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Mode of Payment">
              <select className={inputCls}>
                <option>GCash</option>
              </select>
            </Field>
            <button
              type="submit"
              className="mt-1 w-full animate-glow-btn rounded-lg bg-neon py-3 text-[14px] font-extrabold text-neon-foreground transition hover:scale-[1.01]"
            >
              🔒 Reserve Item Now
            </button>
          </>
        )}
      </form>
    </div>
  );
}

const inputCls =
  "w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/50 focus:border-neon";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-3">
      <label className="mb-1.5 block text-[11px] uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      {children}
    </div>
  );
}
