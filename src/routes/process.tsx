import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, Thermometer, Wind, Droplets, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { PageHeader } from "@/components/site/PageHeader";
import { ProcessTimeline, TrustSection } from "@/components/site/Sections";
import { Btn, Reveal } from "@/components/site/primitives";

const title = `Our Process | ${SITE.name} - Scientific Cultivation to Delivery`;
const description = `Discover how ${SITE.name} cultivates, harvests, inspects, and delivers premium oyster mushrooms using scientific hygiene and cleanroom techniques.`;

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ProcessPage,
});

const controls = [
  {
    icon: Droplets,
    label: "Relative Humidity",
    spec: "85% - 92%",
    desc: "Maintained constantly using ultrasonic cold mist generators for succulent mushroom caps.",
  },
  {
    icon: Thermometer,
    label: "Fruiting Temp",
    spec: "22°C - 26°C",
    desc: "Calibrated ambient temperature to promote thick, hearty textures without cap dryness.",
  },
  {
    icon: Wind,
    label: "Air Exchange",
    spec: "4 - 6 Cycles / hr",
    desc: "Fresh, HEPA-filtered air circulation preventing CO2 buildup and enhancing flavor.",
  },
  {
    icon: ShieldCheck,
    label: "Hygiene Protocol",
    spec: "Zero Pesticides",
    desc: "Cleanroom sanitized surfaces, protective clothing, and chemical-free bio-security.",
  },
];

const standards = [
  "100% steam-pasteurized substrate avoiding any chemical fungicides",
  "High-potency first-generation laboratory spawn for vigor and flavor",
  "Gentle hand-harvesting preserving delicate gill and cap structures",
  "Low-temperature dehydration protecting vital vitamins and minerals",
  "Double-sealed food-grade packaging retaining aroma and crispness",
  "Batch traceability and lot numbering for total quality transparency",
];

function ProcessPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Methodology"
        title="From Spore to Table,"
        titleAccent="Step by Step."
        subtitle="Transparency is at the heart of our operations. Take an inside look at how we grow, harvest, dry, and ship our mushrooms."
        breadcrumb="Process"
      />

      <ProcessTimeline />

      {/* Climate & Environmental Controls */}
      <section className="bg-background py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-[0.68rem] sm:text-xs">Environmental Science</p>
            <h2 className="mt-3 text-3xl font-medium leading-[1.08] sm:mt-4 sm:text-4xl md:text-5xl break-words">
              Precision Indoor <em className="text-earth">Climate Controls</em>
            </h2>
            <p className="mt-3 sm:mt-5 text-base sm:text-lg text-muted-foreground">
              Oyster mushrooms thrive only under carefully monitored microclimatic conditions. Here is our daily standard.
            </p>
          </Reveal>

          <div className="mt-12 sm:mt-16 grid gap-5 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {controls.map((c, i) => (
              <Reveal key={c.label} delay={i * 100} className="rounded-2xl border border-border bg-card p-5 sm:p-8 shadow-soft">
                <span className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-full bg-secondary text-primary">
                  <c.icon size={20} strokeWidth={1.4} />
                </span>
                <p className="mt-5 sm:mt-6 text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                <h3 className="mt-1 font-serif text-2xl sm:text-3xl text-primary">{c.spec}</h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Checklist */}
      <section className="bg-secondary/40 py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
          <Reveal className="text-center">
            <p className="eyebrow text-[0.68rem] sm:text-xs">Quality Guarantee</p>
            <h2 className="mt-3 text-3xl font-medium leading-[1.08] sm:mt-4 sm:text-4xl md:text-5xl break-words">
              Our Uncompromised <em className="text-earth">Standard of Care</em>
            </h2>
            <p className="mt-3 sm:mt-5 text-base sm:text-lg text-muted-foreground">
              Every package leaves our premises backed by strict safety, nutrition, and freshness checks.
            </p>
          </Reveal>

          <div className="mt-10 sm:mt-14 grid gap-3 sm:gap-4 sm:grid-cols-2">
            {standards.map((s, i) => (
              <Reveal key={s} delay={i * 80} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 sm:p-5 shadow-soft">
                <span className="grid h-5 w-5 sm:h-6 sm:w-6 shrink-0 place-items-center rounded-full bg-earth/10 text-earth mt-0.5">
                  <Check size={13} strokeWidth={2.5} />
                </span>
                <span className="text-xs sm:text-sm font-medium leading-relaxed">{s}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />

      {/* CTA */}
      <section className="grain relative overflow-hidden bg-forest py-16 sm:py-20 text-forest-foreground md:py-28">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center md:px-8">
          <Reveal>
            <p className="eyebrow text-[0.68rem] sm:text-xs">Ready for Delivery?</p>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl break-words">
              Order Fresh or Dehydrated <em className="text-gold">Produce Today</em>
            </h2>
            <p className="mx-auto mt-4 sm:mt-5 max-w-xl text-base sm:text-lg text-forest-foreground/80">
              Get in touch to check daily harvest yields, delivery schedules, and wholesale rates for your region.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Btn href="/products" variant="gold" className="w-full sm:w-auto justify-center">
                Browse Products <ArrowRight size={16} />
              </Btn>
              <Btn href="/contact" variant="ghostLight" className="w-full sm:w-auto justify-center">
                Schedule a Consultation
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
