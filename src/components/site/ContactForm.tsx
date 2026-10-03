import { useState, type FormEvent } from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock, CheckCircle2, User } from "lucide-react";
import { PRODUCTS, SITE, waLink } from "@/lib/site";
import { Btn, Reveal } from "./primitives";

const field =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-ring/30";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  const info = [
    [Phone, "Phone", SITE.phone, `tel:${SITE.phone.replace(/\s/g, "")}`],
    [MessageCircle, "WhatsApp", SITE.phone, waLink()],
    [Mail, "Email", SITE.email, `mailto:${SITE.email}`],
    [MapPin, "Address", SITE.address, undefined],
    [Clock, "Business Hours", SITE.hours, undefined],
    [User, "Contact Person", SITE.founder, undefined],
  ] as const;

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:px-8 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className="eyebrow text-[0.68rem] sm:text-xs">Contact</p>
          <h2 className="mt-3 text-3xl font-medium leading-[1.08] tracking-tight sm:mt-4 sm:text-4xl md:text-6xl break-words">
            Let's Work <em className="text-earth">Together</em>
          </h2>
          <p className="mt-4 sm:mt-6 max-w-md text-base sm:text-lg text-muted-foreground">
            Have a product requirement, bulk order or business enquiry? Get in touch with our team at{" "}
            <strong>{SITE.name}</strong>, Varanasi.
          </p>
          <ul className="mt-8 space-y-4 sm:space-y-5">
            {info.map(([Icon, k, v, href]) => (
              <li key={k} className="flex items-start gap-3 sm:gap-4">
                <span className="grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                  <Icon size={18} strokeWidth={1.5} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-[0.2em] text-muted-foreground">{k}</p>
                  {href ? (
                    <a href={href} className="font-medium hover:text-earth break-all sm:break-normal text-sm sm:text-base">
                      {v}
                    </a>
                  ) : (
                    <p className="font-medium break-words text-sm sm:text-base">{v}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <Btn href={waLink()} target="_blank" rel="noreferrer" variant="gold" className="mt-8 w-full sm:w-auto justify-center">
            <MessageCircle size={16} /> Chat on WhatsApp
          </Btn>
        </Reveal>

        <Reveal delay={150}>
          <div className="rounded-2xl bg-card p-5 sm:p-7 shadow-soft md:p-10">
            {sent ? (
              <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
                <CheckCircle2 size={52} strokeWidth={1.2} className="text-earth" />
                <p className="mt-6 font-serif text-3xl">
                  Thank you! {SITE.founder} and the team will get back to you shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm text-muted-foreground underline underline-offset-4"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium">
                  Full Name *
                  <input required maxLength={100} name="name" className={`${field} mt-1.5`} />
                </label>
                <label className="text-sm font-medium">
                  Mobile Number *
                  <input
                    required
                    type="tel"
                    pattern="[0-9+\s\-]{7,15}"
                    name="phone"
                    className={`${field} mt-1.5`}
                  />
                </label>
                <label className="text-sm font-medium">
                  Email
                  <input type="email" maxLength={255} name="email" className={`${field} mt-1.5`} />
                </label>
                <label className="text-sm font-medium">
                  Company / Organization
                  <input maxLength={120} name="company" className={`${field} mt-1.5`} />
                </label>
                <label className="text-sm font-medium">
                  Product Required *
                  <select required name="product" defaultValue="" className={`${field} mt-1.5`}>
                    <option value="" disabled>
                      Select a product
                    </option>
                    {PRODUCTS.map((p) => (
                      <option key={p.id}>{p.name}</option>
                    ))}
                    <option>Other / Multiple</option>
                  </select>
                </label>
                <label className="text-sm font-medium">
                  Estimated Quantity
                  <input maxLength={60} name="qty" placeholder="e.g. 10 kg / month" className={`${field} mt-1.5`} />
                </label>
                <label className="text-sm font-medium">
                  Purpose of Requirement
                  <select name="purpose" defaultValue="reselling" className={`${field} mt-1.5`}>
                    <option value="reselling">Reselling</option>
                    <option value="end-use">End Use</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                <label className="text-sm font-medium sm:col-span-2">
                  Requirement Details *
                  <textarea
                    required
                    maxLength={1000}
                    rows={4}
                    name="message"
                    defaultValue="I am interested. Kindly send the quotation for the same."
                    className={`${field} mt-1.5 resize-none`}
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 rounded-full bg-primary py-4 text-sm font-semibold tracking-wide text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-forest sm:col-span-2"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
