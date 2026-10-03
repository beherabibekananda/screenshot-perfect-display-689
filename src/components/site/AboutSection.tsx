import about from "@/assets/about.jpg";
import { SITE } from "@/lib/site";
import { Btn, Leaf, Reveal } from "./primitives";

const stats = [
  ["Quality", "Focused"],
  ["Pan-India", "Reach"],
  ["Customer", "First"],
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-36">
      <Leaf className="pointer-events-none absolute -right-16 top-10 w-96 text-earth/15" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <img src={about} alt="Hands harvesting oyster mushrooms in a cultivation room" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full rounded-2xl object-cover shadow-soft" />
          <div className="absolute -bottom-6 -right-4 hidden rounded-xl bg-primary px-7 py-5 text-primary-foreground shadow-soft md:block">
            <p className="font-serif text-3xl italic text-gold">Farm to you</p>
            <p className="text-xs uppercase tracking-[0.2em] opacity-80">Handled with care</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <p className="eyebrow">About Us</p>
          <h2 className="mt-4 text-4xl leading-[1.05] md:text-6xl">
            Growing Quality.
            <br />
            <em className="text-earth">Building Trust.</em>
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
            {SITE.name} is a quality-focused agricultural products company committed to providing fresh, carefully selected and responsibly processed products to customers and businesses across India.
          </p>
          <div className="mt-10 grid grid-cols-3 divide-x divide-border border-y border-border">
            {stats.map(([a, b]) => (
              <div key={a} className="px-3 py-6 text-center">
                <p className="font-serif text-2xl text-primary md:text-3xl">{a}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
          <Btn href="#why" variant="outline" className="mt-10">Learn More About Us</Btn>
        </Reveal>
      </div>
    </section>
  );
}
