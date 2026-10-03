import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote, ArrowRight, MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import { PageHeader } from "@/components/site/PageHeader";
import { TestimonialCarousel, TrustSection } from "@/components/site/Sections";
import { Btn, Reveal } from "@/components/site/primitives";

const title = `Testimonials | ${SITE.name} - Client Reviews & Feedback`;
const description = `Read testimonials and verified customer reviews from chefs, wholesale agro distributors, and retailers who source their mushrooms from ${SITE.name}.`;

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: TestimonialsPage,
});

const reviews = [
  {
    name: "Chef Vikram M.",
    role: "Executive Chef",
    org: "Saffron & Sage Fine Dining",
    location: "Mumbai",
    rating: 5,
    quote:
      "The fresh oyster mushrooms from Shiva Agro have elevated our pan-Asian appetizers. Their delicate texture, vibrant freshness, and uniform sizing save our kitchen team valuable prep time every single morning.",
  },
  {
    name: "Neha R.",
    role: "Procurement Manager",
    org: "GreenEarth Organics",
    location: "Bengaluru",
    rating: 5,
    quote:
      "We have partnered with Shiva Agro for bulk dehydrated mushrooms for 8 months. Logistics are always punctual, the moisture-lock packaging is airtight, and customer service is exceptionally proactive.",
  },
  {
    name: "Rajesh Sharma",
    role: "Agro Wholesaler & Distributor",
    org: "Apex Produce Mandi",
    location: "Delhi NCR",
    rating: 5,
    quote:
      "Finding dependable agricultural suppliers with guaranteed weekly bulk allocations was always challenging until we met Shiva Agro. Full marks for transparency, consistency, and competitive wholesale pricing.",
  },
  {
    name: "Ananya Sen",
    role: "Culinary Enthusiast",
    org: "Home Kitchen",
    location: "Kolkata",
    rating: 5,
    quote:
      "The white oyster mushrooms are simply exquisite. So tender and clean right out of the box, with that rich umami flavor that grocery store varieties never seem to match.",
  },
  {
    name: "Chef Arvind P.",
    role: "Culinary Director",
    org: "NoodleCraft Cloud Kitchens",
    location: "Hyderabad",
    rating: 5,
    quote:
      "Their dried oyster mushrooms rehydrate beautifully with deep, woodsy flavor. It has become a foundational staple in our signature ramen broths and sautéed toppings.",
  },
  {
    name: "Kunal Verma",
    role: "Store Owner",
    org: "Gourmet Naturals Supermarket",
    location: "Pune",
    rating: 5,
    quote:
      "Retail customers repeatedly seek out Shiva Agro packages. The shelf-life under our refrigerated produce displays is noticeably better than previous farm vendors we've used.",
  },
];

const metrics = [
  { stat: "99.4%", label: "On-Time Dispatch", sub: "Pan-India logistics compliance" },
  { stat: "4.9 / 5", label: "Average Partner Rating", sub: "Over 50+ commercial buyers" },
  { stat: "100%", label: "Pure & Organic", sub: "Zero synthetic pesticides used" },
  { stat: "85%+", label: "Repeat Order Rate", sub: "High recurring client satisfaction" },
];

function TestimonialsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Client Stories"
        title="Trusted by Chefs, Wholesalers"
        titleAccent="& Households."
        subtitle="Read what commercial buyers, restaurant owners, and food enthusiasts across India say about our quality and service."
        breadcrumb="Testimonials"
      />

      {/* Featured Carousel */}
      <TestimonialCarousel />

      {/* Trust & Satisfaction Metrics */}
      <section className="border-y border-border bg-secondary/30 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4">
            {metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 90} className="text-center p-2">
                <p className="font-serif text-3xl sm:text-4xl text-primary md:text-5xl">{m.stat}</p>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-semibold text-foreground">{m.label}</p>
                <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-muted-foreground">{m.sub}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Reviews Grid */}
      <section className="bg-background py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-[0.68rem] sm:text-xs">Verified Feedback</p>
            <h2 className="mt-3 text-3xl font-medium leading-[1.08] sm:mt-4 sm:text-4xl md:text-5xl break-words">
              Real Experiences From <em className="text-earth">Our Partners</em>
            </h2>
            <p className="mt-3 sm:mt-5 text-base sm:text-lg text-muted-foreground">
              Here is what culinary professionals and distributors say about working with {SITE.name}.
            </p>
          </Reveal>

          <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 80} className="flex flex-col justify-between rounded-2xl border border-border bg-card p-5 sm:p-8 shadow-soft">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-gold" aria-label={`${r.rating} stars`}>
                      {Array.from({ length: r.rating }).map((_, s) => (
                        <Star key={s} size={15} fill="currentColor" />
                      ))}
                    </div>
                    <Quote size={22} className="text-earth/25" />
                  </div>
                  <blockquote className="mt-4 sm:mt-5 text-xs sm:text-sm leading-relaxed text-muted-foreground italic break-words">
                    “{r.quote}”
                  </blockquote>
                </div>

                <div className="mt-6 sm:mt-8 border-t border-border pt-4">
                  <p className="font-semibold text-foreground text-sm sm:text-base break-words">{r.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {r.role} · {r.org}
                  </p>
                  <p className="mt-1 text-xs font-medium text-earth">{r.location}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />

      {/* Page CTA */}
      <section className="grain relative overflow-hidden bg-forest py-16 sm:py-20 text-forest-foreground md:py-28">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center md:px-8">
          <Reveal>
            <p className="eyebrow text-[0.68rem] sm:text-xs">Join Our Partners</p>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl break-words">
              Experience the Standard of <em className="text-gold">{SITE.name}</em>
            </h2>
            <p className="mx-auto mt-4 sm:mt-5 max-w-xl text-base sm:text-lg text-forest-foreground/80">
              Reach out for trial sample crates, wholesale distribution quotes, or custom recurring orders.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Btn href="/contact" variant="gold" className="w-full sm:w-auto justify-center">
                Enquire Now <ArrowRight size={16} />
              </Btn>
              <Btn href={waLink("Hello, I would like to order samples.")} target="_blank" rel="noreferrer" variant="ghostLight" className="w-full sm:w-auto justify-center">
                <MessageCircle size={16} /> WhatsApp Sales
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
