import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { Hero } from "@/components/landing/Hero";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { SectionHeader } from "@/components/landing/SectionHeader";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { AlertBanner } from "@/components/landing/AlertBanner";
import { DropCard } from "@/components/landing/DropCard";
import { ProductCard } from "@/components/landing/ProductCard";
import { HowToOrder } from "@/components/landing/HowToOrder";
import { OrderForm } from "@/components/landing/OrderForm";
import { PaymentShipping } from "@/components/landing/PaymentShipping";
import { ProductModal } from "@/components/landing/ProductModal";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { Footer } from "@/components/landing/Footer";
import { fetchAllProducts, fetchFeaturedProducts } from "@/services/products";
import type { Product } from "@/data/products";
import { messengerLink } from "@/lib/supabase";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BERNS Kalsada Kicks — Legit Thrifted Branded Sneakers PH" },
      {
        name: "description",
        content:
          "Branded. Thrifted. Legit. Premium quality-checked sneakers para sa street-smart na Pinoy. Limited stocks, GCash, nationwide shipping.",
      },
      { property: "og:title", content: "BERNS Kalsada Kicks — Legit Thrifted Branded Sneakers" },
      {
        property: "og:description",
        content:
          "Quality-checked branded thrift kicks. New drops weekly. GCash + nationwide shipping.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  loader: async (): Promise<{ featured: Product[]; all: Product[] }> => {
    try {
      const [featured, all] = await Promise.all([fetchFeaturedProducts(), fetchAllProducts()]);
      return { featured, all };
    } catch {
      return { featured: [], all: [] };
    }
  },
  errorComponent: () => (
    <div className="flex min-h-screen items-center justify-center p-6 text-center">
      <p className="text-sm text-muted-foreground">Products loading...</p>
    </div>
  ),
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center p-6">
      <p className="text-muted-foreground">Page not found</p>
    </div>
  ),
  component: Index,
});

function Index() {
  const { featured, all } = Route.useLoaderData();
  const [active, setActive] = useState<Product | null>(null);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // Generic message — no product context (Hero, StickyCTA)
  const openMessenger = useCallback(() => {
    const url = messengerLink(
      "Hi! Interested ako sa inyong latest drops. Anong available ngayon?"
    );
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  // Product-specific message — called from ProductModal
  const openMessengerForProduct = useCallback((product: Product) => {
    const priceStr = String(product.price);
    const url = messengerLink(
      `Hi! Interested ako sa: ${product.brand} ${product.name} | Size: ${product.size} | Price: ${priceStr} | Condition: ${product.condition}. Available pa ba ito?`
    );
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  const handleReserveFromCard = useCallback(
    (p: Product) => {
      setActive(null);
      scrollTo("reserve-form");
      setTimeout(() => {
        const firstInput = document.querySelector<HTMLInputElement>("#reserve-form input");
        firstInput?.focus({ preventScroll: true });
      }, 400);
      void p;
    },
    [scrollTo],
  );

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background pb-24">
      <Hero onViewDrops={() => scrollTo("featured")} onMessage={openMessenger} />
      <TrustStrip />

      <section className="py-14" style={{ background: "var(--gradient-section)" }}>
        <SectionHeader title="Why People Choose Us" />
        <WhyChooseUs />
      </section>

      <AlertBanner text="Reservation is NOT final. First to pay gets the item. Wag magtambay kung serious ka." />

      <section
        id="featured"
        className="py-14"
        style={{ background: "var(--gradient-section-alt)" }}
      >
        <SectionHeader
          title="Latest Drop"
          action="See All →"
          onAction={() => scrollTo("all-items")}
        />
        <div className="no-scrollbar overflow-x-auto pb-2">
          <div className="flex w-max gap-3 px-5">
            {featured.length === 0 ? (
              <p className="px-1 py-8 text-sm text-muted-foreground">Products loading...</p>
            ) : (
              featured.map((p: Product) => (
                <DropCard key={p.id} product={p} onClick={setActive} />
              ))
            )}
          </div>
        </div>
      </section>

      <section id="all-items" className="py-14" style={{ background: "var(--gradient-section)" }}>
        <SectionHeader title="All Items" action="Filter ↓" />
        {all.length === 0 ? (
          <p className="px-5 py-8 text-center text-sm text-muted-foreground">
            Products loading...
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-3 px-5 sm:grid-cols-3 lg:grid-cols-4">
            {all.map((p: Product) => (
              <ProductCard
                key={p.id}
                product={p}
                onClick={setActive}
                onReserve={handleReserveFromCard}
              />
            ))}
          </div>
        )}
      </section>

      <section className="py-14" style={{ background: "var(--gradient-section-alt)" }}>
        <SectionHeader title="How to Order" />
        <HowToOrder />
      </section>

      <AlertBanner text="Reservation is NOT final. First to pay gets the item. Wag hayaang maunahan ka." />

      <section id="reserve" className="py-14" style={{ background: "var(--gradient-section)" }}>
        <SectionHeader title="Reserve an Item" />
        <OrderForm formId="reserve-form" items={[...featured, ...all]} />
      </section>

      <section className="py-14" style={{ background: "var(--gradient-section-alt)" }}>
        <SectionHeader title="Payment & Shipping" />
        <PaymentShipping />
      </section>

      <Footer />

      <StickyCTA onMessage={openMessenger} onReserve={() => scrollTo("reserve-form")} />

      <ProductModal
        product={active}
        onClose={() => setActive(null)}
        onMessage={() => active && openMessengerForProduct(active)}
        onReserve={() => {
          setActive(null);
          scrollTo("reserve-form");
        }}
      />
    </div>
  );
}