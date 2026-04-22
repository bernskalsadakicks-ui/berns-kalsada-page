content = open('src/components/landing/OrderForm.tsx', 'w', encoding='utf-8')
content.write("""import { useState, useRef, type FormEvent } from "react";
import type { Product } from "@/data/products";
import { supabase, messengerLink } from "@/lib/supabase";

export function OrderForm({ formId, items = [] }: { formId: string; items?: Product[] }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const nameRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const selectedItem = items.find((p) => p.id === selected);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!nameRef.current?.value.trim()) e.name = "Pakiusap ilagay ang pangalan mo";
    if (!contactRef.current?.value.trim()) e.contact = "Kailangan ng contact number";
    if (!addressRef.current?.value.trim()) e.address = "Ilagay ang delivery address";
    if (!selected) e.item = "Pumili ng item";
    return e;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setError("");
    const item = items.find((p) => p.id === selected);
    const priceNum = item ? parseFloat(String(item.price).replace(/[^\\d.]/g, "")) : 0;
    const { error: sbError } = await supabase.from("orders").insert({
      buyer_name: nameRef.current!.value.trim(),
      contact_number: contactRef.current!.value.trim(),
      delivery_address: addressRef.current!.value.trim(),
      item_id: selected,
      item_name: item?.name ?? "",
      brand: item?.brand ?? "",
      size: item?.size ?? "",
      price: priceNum,
      payment_method: "GCash",
      status: "Reserved",
    });
    setLoading(false);
    if (sbError) { setError("May problema sa reservation. Subukan ulit."); return; }
    setSubmitted(true);
  };

  const confirmLink = messengerLink(
    selectedItem
      ? "Hi! Nag-reserve ako ng: " + selectedItem.brand + " " + selectedItem.name + " | Size: " + selectedItem.size + " | Price: " + selectedItem.price + ". Kailan ko pwedeng bayaran via GCash?"
      : "Hi! May reservation ako. Paki-confirm ang order ko."
  );

  if (submitted) {
    return (
      <div id={formId} className="px-5 pb-6">
        <div className="rounded-[14px] border border-border bg-surface-3 p-5 sm:p-6">
          <div className="rounded-lg border border-neon/30 bg-neon/10 p-5 text-center">
            <div className="mb-2 text-3xl">OK</div>
            <div className="mb-1 text-[16px] font-black text-white">Reserved na!</div>
            <p className="mb-4 text-[12px] text-muted-foreground">
              Mag-abang ng confirmation via Messenger.
              <span className="font-bold text-foreground"> First to pay gets the item.</span>
            </p>
            
              href={confirmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-[9px] border border-cyan/40 bg-cyan/10 py-3 text-[13px] font-black text-cyan transition hover:bg-cyan/20"
            >
              Message Us to Confirm
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id={formId} className="px-5 pb-6">
      <form onSubmit={handleSubmit} className="rounded-[14px] border border-border bg-surface-3 p-5 sm:p-6">
        <div className="mb-1 text-[15px] font-black text-white">Fill Out the Form</div>
        <div className="mb-4 text-[11px] text-muted-foreground">Mag-reserve na. Unahan ang iba bago pa mawala.</div>
        <Field label="Full Name" error={errors.name}>
          <input ref={nameRef} className={inputCls(!!errors.name)} type="text" placeholder="Juan dela Cruz" />
        </Field>
        <Field label="Contact Number" error={errors.contact}>
          <input ref={contactRef} className={inputCls(!!errors.contact)} type="tel" placeholder="09XX XXX XXXX" />
        </Field>
        <Field label="Delivery Address" error={errors.address}>
          <input ref={addressRef} className={inputCls(!!errors.address)} type="text" placeholder="City, Province" />
        </Field>
        <Field label="Selected Item" error={errors.item}>
          <select value={selected} onChange={(e) => setSelected(e.target.value)} className={inputCls(!!errors.item)}>
            <option value="" disabled>Pumili ng item...</option>
            {items.map((p) => (
              <option key={p.id} value={p.id}>{p.brand} {p.name} - {p.size} - {p.price}</option>
            ))}
          </select>
        </Field>
        <Field label="Mode of Payment">
          <select className={inputCls(false)}><option>GCash</option></select>
        </Field>
        {error && (
          <div className="mb-3 rounded-md border border-danger/30 bg-danger/10 px-3 py-2 text-[12px] text-danger">{error}</div>
        )}
        <button type="submit" disabled={loading}
          className="mt-1 w-full animate-neon-pulse rounded-[9px] bg-neon py-3.5 text-[14px] font-black text-neon-foreground transition hover:scale-[1.01] disabled:animate-none disabled:opacity-60 disabled:cursor-not-allowed">
          {loading ? "Sending..." : "Reserve Item Now"}
        </button>
      </form>
    </div>
  );
}

const inputCls = (hasError: boolean) =>
  hasError
    ? "w-full rounded-[7px] border border-danger/60 bg-danger/5 px-3 py-2.5 text-[13px] text-foreground outline-none transition"
    : "w-full rounded-[7px] border border-border bg-background px-3 py-2.5 text-[13px] text-foreground outline-none transition focus:border-neon/50";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="mb-2.5">
      <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.5px] text-muted-foreground">{label}</label>
      {children}
      {error && <p className="mt-1 text-[11px] text-danger">{error}</p>}
    </div>
  );
}
""")
content.close()
print("Done")