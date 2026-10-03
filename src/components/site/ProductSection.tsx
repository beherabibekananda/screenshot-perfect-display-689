import { useState } from "react";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { PRODUCTS, waLink, type Product } from "@/lib/site";
import { Btn, Reveal, SectionHead } from "./primitives";

export function ProductCard({ p, onView }: { p: Product; onView: () => void }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-soft">
      <button onClick={onView} className="relative overflow-hidden" aria-label={`View ${p.name}`}>
        <img src={p.image} alt={p.name} loading="lazy" width={1024} height={1024} className="aspect-[4/3.4] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
        <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-card/90 text-primary opacity-0 transition-all duration-500 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </span>
      </button>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-3xl">{p.name}</h3>
        <p className="mt-3 text-muted-foreground">{p.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {p.highlights.map((h) => (
            <li key={h} className="rounded-full border border-border px-3 py-1 text-xs font-medium text-secondary-foreground">{h}</li>
          ))}
        </ul>
        <div className="mt-auto grid grid-cols-2 gap-3 pt-7">
          <button onClick={onView} className="rounded-full border border-primary/30 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">View Details</button>
          <Btn href="#contact" className="py-3">Enquire Now</Btn>
        </div>
      </div>
    </article>
  );
}

const SPEC = "To be updated";

export function ProductSection() {
  const [active, setActive] = useState<Product | null>(null);
  return (
    <section id="products" className="bg-secondary/60 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead eyebrow="Our Range" title="Our Premium Products" sub="Carefully selected products designed to deliver quality, freshness and value." />
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <ProductCard p={p} onView={() => setActive(p)} />
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[92vh] max-w-4xl overflow-y-auto border-none bg-card p-0 sm:rounded-2xl">
          {active && (
            <div className="grid md:grid-cols-2">
              <img src={active.image} alt={active.name} width={1024} height={1024} className="h-full max-h-80 w-full object-cover md:max-h-none" />
              <div className="p-7 md:p-9">
                <p className="eyebrow">Product Details</p>
                <DialogTitle className="mt-3 font-serif text-4xl font-medium">{active.name}</DialogTitle>
                <DialogDescription className="mt-3 text-base text-muted-foreground">{active.description}</DialogDescription>
                <ul className="mt-5 space-y-2">
                  {active.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm"><Check size={16} className="text-earth" /> {h}</li>
                  ))}
                </ul>
                <dl className="mt-6 divide-y divide-border border-y border-border text-sm">
                  {[["Specifications", SPEC], ["Packaging", SPEC], ["Minimum Order", SPEC], ["Availability", "Enquire for current availability"]].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 py-3">
                      <dt className="text-muted-foreground">{k}</dt>
                      <dd className="text-right font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-7 grid grid-cols-2 gap-3">
                  <Btn href="#contact" onClick={() => setActive(null)} className="py-3">Enquire Now</Btn>
                  <Btn href={waLink(`Hello, I'd like to enquire about ${active.name}.`)} target="_blank" rel="noreferrer" variant="gold" className="py-3"><MessageCircle size={16} /> WhatsApp</Btn>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
