import { useEffect, useState } from "react";
import { ShieldCheck, Leaf as LeafIcon, Handshake, Boxes, MapPin, HeartHandshake, Sprout, Search, Package, Truck, Wheat, Star, ChevronLeft, ChevronRight, Check, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";
import { Btn, Leaf, Reveal, SectionHead } from "./primitives";

const features = [
  [ShieldCheck, "Quality Assured", "Careful selection and quality-focused processing."],
  [LeafIcon, "Fresh & Reliable", "Products handled with attention to freshness and consistency."],
  [Handshake, "Trusted Supply", "Reliable sourcing and supply for customers and businesses."],
  [Boxes, "Bulk Orders", "Solutions for wholesalers, retailers, restaurants and institutional buyers."],
  [MapPin, "Pan-India Reach", "Serving customers across different regions of India."],
  [HeartHandshake, "Customer First", "Responsive communication and support from enquiry to delivery."],
] as const;

export function WhyChooseUs() {
  return (
    <section id="why" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead eyebrow="Why Us" title="Why Customers Choose Us" />
        <div className="mt-16 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map(([Icon, t, d], i) => (
            <Reveal key={t} delay={(i % 3) * 100} className="group border-b border-r border-border p-8 transition-colors duration-500 hover:bg-card md:p-10">
              <div className="flex items-start justify-between">
                <Icon strokeWidth={1.2} className="h-10 w-10 text-earth transition-transform duration-500 group-hover:-translate-y-1" />
                <span className="font-serif text-2xl text-gold">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-8 text-2xl md:text-3xl">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  [Wheat, "Source", "Carefully selected agricultural produce."],
  [Sprout, "Cultivate", "Responsible cultivation and production practices."],
  [Search, "Quality Check", "Products are inspected before packaging."],
  [Package, "Pack", "Products are carefully packed for safe handling."],
  [Truck, "Deliver", "Reliable supply to customers and businesses."],
] as const;

export function ProcessTimeline() {
  return (
    <section id="process" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead eyebrow="Our Process" title="From Farm to You" />
        <ol className="relative mt-20 grid gap-12 md:grid-cols-5 md:gap-6">
          <div className="absolute left-7 top-0 h-full w-px bg-gold/50 md:left-0 md:top-7 md:h-px md:w-full" aria-hidden />
          {steps.map(([Icon, t, d], i) => (
            <Reveal key={t} delay={i * 140}>
              <li className="relative flex gap-6 md:block">
                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold bg-background text-primary">
                  <Icon strokeWidth={1.3} size={22} />
                </span>
                <div className="md:mt-7">
                  <p className="font-serif text-lg text-gold">0{i + 1}</p>
                  <h3 className="text-2xl">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function BulkCta() {
  return (
    <section className="grain relative overflow-hidden bg-forest py-24 text-forest-foreground md:py-32">
      <Leaf className="pointer-events-none absolute -left-10 -top-10 w-[28rem] text-gold/10" />
      <Leaf className="pointer-events-none absolute -bottom-20 -right-10 w-[24rem] rotate-180 text-gold/10" />
      <Reveal className="relative mx-auto max-w-3xl px-5 text-center">
        <p className="eyebrow">B2B & Bulk Orders</p>
        <h2 className="mt-5 text-4xl leading-tight md:text-6xl">Looking for Reliable <em className="text-gold">Bulk Supply?</em></h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-forest-foreground/75">
          Whether you're a retailer, restaurant, distributor, wholesaler or institutional buyer, talk to us about your requirements.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Btn href="#contact" variant="gold">Request a Bulk Quote</Btn>
          <Btn href={waLink("Hello, I'd like to discuss a bulk order.")} target="_blank" rel="noreferrer" variant="ghostLight"><MessageCircle size={16} /> Talk on WhatsApp</Btn>
        </div>
      </Reveal>
    </section>
  );
}

const testimonials = Array.from({ length: 4 }, (_, i) => i + 1);

export function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const n = testimonials.length;
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % n), 6000);
    return () => clearInterval(t);
  }, [n]);
  return (
    <section id="testimonials" className="py-24 md:py-36">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHead eyebrow="Testimonials" title="What Our Customers Say" />
        <div className="relative mt-14 overflow-hidden">
          <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${i * 100}%)` }}>
            {testimonials.map((k) => (
              <figure key={k} className="w-full shrink-0 px-1">
                <div className="rounded-2xl border border-border bg-card p-8 text-center md:p-14">
                  <div className="flex justify-center gap-1 text-gold" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, s) => <Star key={s} size={18} fill="currentColor" />)}
                  </div>
                  <blockquote className="mt-6 font-serif text-2xl italic leading-snug md:text-4xl">
                    “Add verified customer testimonial here.”
                  </blockquote>
                  <figcaption className="mt-8 text-sm">
                    <p className="font-semibold">[Customer Name {k}]</p>
                    <p className="text-muted-foreground">[Business / Company] · [Location]</p>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-5">
          <button aria-label="Previous" onClick={() => setI((i - 1 + n) % n)} className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:bg-primary hover:text-primary-foreground"><ChevronLeft size={18} /></button>
          <div className="flex gap-2">
            {testimonials.map((_, d) => (
              <button key={d} aria-label={`Go to slide ${d + 1}`} onClick={() => setI(d)} className={`h-1.5 rounded-full transition-all ${d === i ? "w-8 bg-primary" : "w-3 bg-border"}`} />
            ))}
          </div>
          <button aria-label="Next" onClick={() => setI((i + 1) % n)} className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:bg-primary hover:text-primary-foreground"><ChevronRight size={18} /></button>
        </div>
      </div>
    </section>
  );
}

const badges = ["Quality Focused", "Carefully Packed", "Customer Support", "Bulk Supply", "Pan-India Service"];

export function TrustSection() {
  return (
    <section className="border-y border-border bg-secondary/60 py-16">
      <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
        <p className="font-serif text-3xl md:text-4xl">Quality <span className="text-gold">•</span> Transparency <span className="text-gold">•</span> Reliability</p>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {badges.map((b) => (
            <li key={b} className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium">
              <Check size={16} className="text-earth" /> {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
