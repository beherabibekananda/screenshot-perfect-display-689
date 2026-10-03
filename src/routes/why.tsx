import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, XCircle, Utensils, Store, Factory, Building, ArrowRight, MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import { PageHeader } from "@/components/site/PageHeader";
import { WhyChooseUs, TrustSection } from "@/components/site/Sections";
import { Btn, Reveal } from "@/components/site/primitives";

const title = `Why Choose Us | ${SITE.name} - The Agro Supply Advantage`;
const description = `Discover why leading restaurants, wholesalers, and retail buyers trust ${SITE.name} for consistent, premium mushroom supply across India.`;

export const Route = createFileRoute("/why")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: WhyPage,
});

const comparison = [
  {
    feature: "Harvest & Freshness",
    standard: "Stored across intermediate mandi chains for days before reaching buyers.",
    shivaAgro: "Directly harvested, quality-screened, and packed within hours of order confirmation.",
  },
  {
    feature: "Grading & Yield",
    standard: "Mixed sizes, excessive stem weight, variable cap integrity.",
    shivaAgro: "Precision sorting with minimal deadweight, giving kitchens up to 90%+ usable yield.",
  },
  {
    feature: "Hygiene & Cleanliness",
    standard: "Open-air drying and unhygienic local storage conditions.",
    shivaAgro: "Indoor climate-controlled cleanrooms with food-grade sanitization protocols.",
  },
  {
    feature: "Supply Stability",
    standard: "Unpredictable seasonal shortages and volatile day-to-day spot pricing.",
    shivaAgro: "Contractual consistency with dedicated quota reservations for institutional partners.",
  },
];

const segments = [
  {
    icon: Utensils,
    title: "Restaurants & HoReCa",
    desc: "Consistent cap sizes and clean produce that reduce kitchen prep time and food waste.",
  },
  {
    icon: Store,
    title: "Organic Retailers",
    desc: "Aesthetic, barcoded packaging that stands out in refrigerated produce displays.",
  },
  {
    icon: Factory,
    title: "Food Processors & Brands",
    desc: "Bulk dehydrated oyster mushrooms with tested moisture levels for extracts and seasonings.",
  },
  {
    icon: Building,
    title: "Institutional Buyers",
    desc: "Reliable recurring delivery schedules with GST-compliant invoicing and logistics support.",
  },
];

function WhyPage() {
  return (
    <main>
      <PageHeader
        eyebrow={`The ${SITE.name} Advantage`}
        title="Why Businesses & Chefs"
        titleAccent="Choose Us."
        subtitle="We combine scientific cultivation, strict quality standards, and dependable pan-India logistics to deliver unmatched consistency."
        breadcrumb="Why Us"
      />

      <WhyChooseUs />

      {/* Comparison Section */}
      <section className="bg-secondary/40 py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-[0.68rem] sm:text-xs">The Difference</p>
            <h2 className="mt-3 text-3xl font-medium leading-[1.08] sm:mt-4 sm:text-4xl md:text-5xl break-words">
              Setting New Benchmarks in <em className="text-earth">Agro Supply</em>
            </h2>
            <p className="mt-3 sm:mt-5 text-base sm:text-lg text-muted-foreground">
              See how our quality-first model delivers tangible benefits for your business and end customers.
            </p>
          </Reveal>

          <div className="mt-12 sm:mt-16 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <div className="grid grid-cols-1 divide-y divide-border">
              {comparison.map((item, idx) => (
                <Reveal key={item.feature} delay={idx * 100} className="grid p-4 sm:p-6 sm:grid-cols-3 sm:gap-6 md:p-8">
                  <div className="font-serif text-lg sm:text-xl text-foreground font-semibold sm:col-span-1 break-words">
                    {item.feature}
                  </div>
                  <div className="mt-2 flex items-start gap-2 text-xs sm:text-sm text-muted-foreground sm:mt-0 sm:col-span-1">
                    <XCircle size={16} className="mt-0.5 shrink-0 text-red-400" />
                    <span>{item.standard}</span>
                  </div>
                  <div className="mt-2.5 flex items-start gap-2 text-xs sm:text-sm font-medium text-foreground sm:mt-0 sm:col-span-1">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-earth" />
                    <span>{item.shivaAgro}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Segments We Cater To */}
      <section className="bg-background py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-[0.68rem] sm:text-xs">Partnerships</p>
            <h2 className="mt-3 text-3xl font-medium leading-[1.08] sm:mt-4 sm:text-4xl md:text-5xl break-words">
              Serving Diverse <em className="text-earth">Industry Sectors</em>
            </h2>
            <p className="mt-3 sm:mt-5 text-base sm:text-lg text-muted-foreground">
              Whether you need daily restaurant supplies or metric-ton dehydrated batches, we adapt to your workflow.
            </p>
          </Reveal>

          <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {segments.map((s, i) => (
              <Reveal key={s.title} delay={i * 100} className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-soft">
                <span className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-full bg-secondary text-primary">
                  <s.icon size={20} strokeWidth={1.4} />
                </span>
                <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-serif break-words">{s.title}</h3>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />

      {/* CTA Section */}
      <section className="grain relative overflow-hidden bg-forest py-16 sm:py-20 text-forest-foreground md:py-28">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center md:px-8">
          <Reveal>
            <p className="eyebrow text-[0.68rem] sm:text-xs">Partner With Us</p>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl break-words">
              Elevate Your Sourcing With <em className="text-gold">{SITE.name}</em>
            </h2>
            <p className="mx-auto mt-4 sm:mt-5 max-w-xl text-base sm:text-lg text-forest-foreground/80">
              Speak with our commercial supply desk today for sample shipments and contract quotes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Btn href="/contact" variant="gold" className="w-full sm:w-auto justify-center">
                Request Commercial Quote <ArrowRight size={16} />
              </Btn>
              <Btn href={waLink("Hello, I would like to explore a supply partnership.")} target="_blank" rel="noreferrer" variant="ghostLight" className="w-full sm:w-auto justify-center">
                <MessageCircle size={16} /> WhatsApp Sales
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
