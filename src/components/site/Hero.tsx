import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import hero from "@/assets/hero.jpg";
import fresh from "@/assets/fresh-oyster.jpg";
import { Btn } from "./primitives";

export function Hero() {
  const img = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const on = () => {
      if (img.current) img.current.style.transform = `translateY(${window.scrollY * 0.25}px) scale(1.08)`;
    };
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <section id="home" className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-forest">
      <img ref={img} src={hero} alt="Oyster mushrooms growing in a cultivation farm" width={1920} height={1088} className="absolute inset-0 h-full w-full scale-[1.08] object-cover will-change-transform" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto grid w-full max-w-7xl items-end gap-12 px-5 pb-24 pt-36 md:px-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="text-forest-foreground">
          <p className="eyebrow animate-rise">Quality • Freshness • Trust</p>
          <h1 className="mt-6 text-5xl leading-[0.98] animate-rise [animation-delay:150ms] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Premium Agro Products,
            <br />
            <em className="font-light text-gold">Grown with Purpose.</em>
          </h1>
          <p className="mt-7 max-w-xl text-lg text-forest-foreground/80 animate-rise [animation-delay:300ms]">
            We bring carefully cultivated and quality-checked agricultural products from trusted sources to customers across India.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 animate-rise [animation-delay:450ms]">
            <Btn href="#products" variant="gold">Explore Products <ArrowRight size={16} /></Btn>
            <Btn href="#contact" variant="ghostLight">Get a Quote</Btn>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm text-forest-foreground/70 animate-rise [animation-delay:600ms]">
            <span className="h-px w-10 bg-gold" /> Serving Customers Across India
          </div>
        </div>
        <div className="hidden justify-end lg:flex">
          <div className="glass w-72 animate-floaty rounded-2xl p-3 text-forest-foreground">
            <img src={fresh} alt="Fresh oyster mushrooms" width={1024} height={1024} className="aspect-[4/3] w-full rounded-xl object-cover" />
            <div className="px-2 pb-2 pt-4">
              <p className="eyebrow">Featured</p>
              <p className="mt-1 font-serif text-2xl">Fresh Oyster Mushroom</p>
              <a href="#products" className="mt-2 inline-flex items-center gap-1 text-sm text-forest-foreground/80 hover:text-gold">View range <ArrowRight size={14} /></a>
            </div>
          </div>
        </div>
      </div>
      <a href="#about" aria-label="Scroll down" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-forest-foreground/70 md:block">
        <ChevronDown />
      </a>
    </section>
  );
}
