import { createFileRoute } from "@tanstack/react-router";
import { SITE, PRODUCTS } from "@/lib/site";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { AboutSection } from "@/components/site/AboutSection";
import { ProductSection } from "@/components/site/ProductSection";
import { WhyChooseUs, ProcessTimeline, BulkCta, TestimonialCarousel, TrustSection } from "@/components/site/Sections";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";

const title = `${SITE.name} | Premium Agro Products & Agricultural Supplier`;
const description = `Discover quality-focused agricultural products from ${SITE.name}. Explore our products, bulk supply options and get in touch with our team.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE.name,
          slogan: SITE.tagline,
          email: SITE.email,
          telephone: SITE.phone,
          makesOffer: PRODUCTS.map((p) => ({ "@type": "Offer", itemOffered: { "@type": "Product", name: p.name, description: p.description } })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ProductSection />
        <WhyChooseUs />
        <ProcessTimeline />
        <BulkCta />
        <TestimonialCarousel />
        <TrustSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
