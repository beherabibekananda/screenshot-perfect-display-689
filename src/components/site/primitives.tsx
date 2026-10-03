import { useEffect, useRef, type ReactNode, type AnchorHTMLAttributes } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const variants = {
  gold: "bg-gold text-accent-foreground hover:brightness-105 hover:-translate-y-0.5 shadow-soft",
  primary: "bg-primary text-primary-foreground hover:bg-forest hover:-translate-y-0.5 shadow-soft",
  ghostLight: "border border-forest-foreground/40 text-forest-foreground hover:bg-forest-foreground/10",
  outline: "border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground",
};

export function Btn({
  variant = "primary",
  className,
  children,
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: keyof typeof variants }) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300",
    variants[variant],
    className,
  );

  if (href && href.startsWith("/") && !props.target) {
    return (
      <Link to={href} className={classes} {...(props as any)}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}

export function SectionHead({ eyebrow, title, sub, center = true }: { eyebrow: string; title: ReactNode; sub?: string; center?: boolean }) {
  return (
    <Reveal className={cn("max-w-2xl", center && "mx-auto text-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl leading-[1.05] md:text-6xl">{title}</h2>
      {sub && <p className="mt-5 text-lg text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

export function Leaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1" className={className} aria-hidden>
      <path d="M100 190C100 120 60 60 10 20c60 10 150 40 180 120-30 20-60 40-90 50z" />
      <path d="M100 190C90 130 60 80 10 20" />
      <path d="M60 80c20 0 40 5 55 20M80 120c20-5 40 0 60 15M40 50c15 0 30 3 40 12" />
    </svg>
  );
}
