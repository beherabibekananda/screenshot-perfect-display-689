import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { NAV, PRODUCTS, SITE, waLink } from "@/lib/site";
import { Logo } from "./Navbar";
import { Btn } from "./primitives";

export function Footer() {
  return (
    <footer className="grain relative bg-forest pb-32 pt-14 text-forest-foreground sm:pb-28 sm:pt-20 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-forest-foreground/15 pb-10 sm:pb-14 md:flex-row md:items-center">
          <p className="font-serif text-3xl sm:text-4xl md:text-5xl">Have a requirement? <em className="text-gold">Let's talk.</em></p>
          <Btn href="/contact" variant="gold" className="w-full sm:w-auto justify-center">Get a Quote</Btn>
        </div>
        <div className="grid gap-10 py-10 sm:py-14 sm:grid-cols-2 lg:grid-cols-4">
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
            <p className="eyebrow text-[0.68rem] sm:text-xs">Quick Links</p>
            <ul className="mt-4 sm:mt-5 space-y-2.5 text-sm text-forest-foreground/75">
              {NAV.map(([l, h]) => (
                <li key={h}>
                  <Link to={h} className="transition-colors hover:text-gold">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-[0.68rem] sm:text-xs">Products</p>
            <ul className="mt-4 sm:mt-5 space-y-2.5 text-sm text-forest-foreground/75">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <Link to="/products" className="transition-colors hover:text-gold">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-[0.68rem] sm:text-xs">Contact</p>
            <ul className="mt-4 sm:mt-5 space-y-2.5 text-sm text-forest-foreground/75">
              <li><a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-gold">{SITE.phone}</a></li>
              <li><a href={`mailto:${SITE.email}`} className="break-all hover:text-gold">{SITE.email}</a></li>
              <li>{SITE.address}</li>
              <li>{SITE.hours}</li>
            </ul>
          </div>
        </div>
        <p className="border-t border-forest-foreground/15 pt-6 sm:pt-8 text-xs text-forest-foreground/55">© 2026 {SITE.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
