import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { NAV, PRODUCTS, SITE, waLink } from "@/lib/site";
import { Logo } from "./Navbar";
import { Btn } from "./primitives";

export function Footer() {
  return (
    <footer className="grain relative bg-forest pb-24 pt-20 text-forest-foreground md:pb-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-forest-foreground/15 pb-14 md:flex-row md:items-center">
          <p className="font-serif text-4xl md:text-5xl">Have a requirement? <em className="text-gold">Let's talk.</em></p>
          <Btn href="#contact" variant="gold">Get a Quote</Btn>
        </div>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm text-forest-foreground/70">{SITE.tagline}</p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((I, k) => (
                <a key={k} href="#" aria-label="Social link" className="grid h-10 w-10 place-items-center rounded-full border border-forest-foreground/20 transition-colors hover:border-gold hover:text-gold"><I size={16} /></a>
              ))}
              <a href={waLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border border-forest-foreground/20 transition-colors hover:border-gold hover:text-gold"><MessageCircle size={16} /></a>
            </div>
          </div>
          <div>
            <p className="eyebrow">Quick Links</p>
            <ul className="mt-5 space-y-2.5 text-sm text-forest-foreground/75">
              {NAV.map(([l, h]) => <li key={h}><a href={h} className="hover:text-gold">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Products</p>
            <ul className="mt-5 space-y-2.5 text-sm text-forest-foreground/75">
              {PRODUCTS.map((p) => <li key={p.id}><a href="#products" className="hover:text-gold">{p.name}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-5 space-y-2.5 text-sm text-forest-foreground/75">
              <li>{SITE.phone}</li>
              <li>{SITE.email}</li>
              <li>{SITE.address}</li>
              <li>{SITE.hours}</li>
            </ul>
          </div>
        </div>
        <p className="border-t border-forest-foreground/15 pt-8 text-xs text-forest-foreground/55">© 2026 {SITE.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
