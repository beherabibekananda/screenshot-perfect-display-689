import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { NAV, SITE, waLink } from "@/lib/site";
import { Btn } from "./primitives";
import { cn } from "@/lib/utils";

export function Logo({ light = true }: { light?: boolean }) {
  return (
    <a href="#home" className={cn("flex items-center gap-2.5", light ? "text-forest-foreground" : "text-primary")}>
      <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/60 font-serif text-xl text-gold">A</span>
      <span className="font-serif text-2xl tracking-tight">{SITE.name}</span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled || open ? "bg-forest/85 py-3 backdrop-blur-xl shadow-soft" : "py-6",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
          <Logo />
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV.map(([l, h]) => (
              <li key={h}>
                <a href={h} className="text-sm text-forest-foreground/80 transition-colors hover:text-gold">{l}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <Btn href="#contact" variant="gold" className="hidden px-5 py-2.5 sm:inline-flex">Get a Quote</Btn>
            <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="text-forest-foreground lg:hidden">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="px-5 pb-6 pt-4 lg:hidden">
            <ul className="space-y-1">
              {NAV.map(([l, h]) => (
                <li key={h}>
                  <a href={h} onClick={() => setOpen(false)} className="block border-b border-forest-foreground/10 py-3 font-serif text-2xl text-forest-foreground">{l}</a>
                </li>
              ))}
            </ul>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <Btn href="#contact" variant="gold" onClick={() => setOpen(false)}>Get a Quote</Btn>
              <Btn href={waLink()} target="_blank" rel="noreferrer" variant="ghostLight"><MessageCircle size={16} /> WhatsApp</Btn>
            </div>
          </div>
        )}
      </header>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px bg-border shadow-soft md:hidden">
        <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="flex items-center justify-center gap-2 bg-card py-3.5 text-sm font-semibold text-primary"><Phone size={16} /> Call Us</a>
        <a href={waLink()} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-primary py-3.5 text-sm font-semibold text-primary-foreground"><MessageCircle size={16} /> WhatsApp</a>
      </div>
    </>
  );
}
