import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { Hero } from "@/components/landing/Hero";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { SectionHeader } from "@/components/landing/SectionHeader";
import { DropCard } from "@/components/landing/DropCard";
import { ProductCard } from "@/components/landing/ProductCard";
import { HowToOrder } from "@/components/landing/HowToOrder";
import { OrderForm } from "@/components/landing/OrderForm";
import { PaymentShipping } from "@/components/landing/PaymentShipping";
import { ProductModal } from "@/components/landing/ProductModal";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { Footer } from "@/components/landing/Footer";
import { allProducts, featuredDrops, type Product } from "@/data/products";

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
  component: Index,
});

function Index() {
  const [active, setActive] = useState<Product | null>(null);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const openMessenger = useCallback(() => {
    window.open("https://m.me/", "_blank", "noopener,noreferrer");
  }, []);

  const handleReserveFromCard = useCallback(
    (p: Product) => {
      setActive(null);
      scrollTo("reserve-form");
      // Slight delay so user notices the form
      setTimeout(() => {
        const firstInput = document.querySelector<HTMLInputElement>("#reserve-form input");
        firstInput?.focus({ preventScroll: true });
      }, 400);
      void p;
    },
    [scrollTo],
  );

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background pb-16">
      <Hero onViewDrops={() => scrollTo("featured")} onMessage={openMessenger} />
      <TrustStrip />

      <section id="featured">
        <SectionHeader title="Latest Drop" action="See All →" onAction={() => scrollTo("all-items")} />
        <div className="no-scrollbar overflow-x-auto px-6 pb-6">
          <div className="flex w-max gap-3">
            {featuredDrops.map((p) => (
              <DropCard key={p.id} product={p} onClick={setActive} />
            ))}
          </div>
        </div>
      </section>

      <section id="all-items">
        <SectionHeader title="All Items" action="Filter ↓" />
        <div className="grid grid-cols-2 gap-2.5 px-6 pb-6 sm:grid-cols-3 lg:grid-cols-4">
          {allProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onClick={setActive}
              onReserve={handleReserveFromCard}
            />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="How to Order" />
        <HowToOrder />
      </section>

      <section id="reserve">
        <SectionHeader title="Reserve an Item" />
        <OrderForm formId="reserve-form" />
      </section>

      <section>
        <SectionHeader title="Payment & Shipping" />
        <PaymentShipping />
      </section>

      <Footer />

      <StickyCTA onMessage={openMessenger} onReserve={() => scrollTo("reserve-form")} />

      <ProductModal
        product={active}
        onClose={() => setActive(null)}
        onMessage={openMessenger}
        onReserve={() => {
          setActive(null);
          scrollTo("reserve-form");
        }}
      />
    </div>
  );
}
