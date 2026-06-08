import type { ReactNode } from "react";
import { Quote } from "lucide-react";

export type Testimonial = {
  quote: ReactNode;
  name: string;
  title: string;
  org?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Veritas understood exactly what a credible public profile looks like for someone in my position. The result speaks for itself.",
    name: "Dr. Sarah Chen",
    title: "Principal Investigator",
    org: "MD Anderson Cancer Center",
  },
  {
    quote:
      "They turned years of research into a structured, accessible ebook that our partners and funders actually read. The quality exceeded every expectation.",
    name: "Prof. James Whitfield",
    title: "Department Chair",
    org: "University of Colorado Boulder",
  },
  {
    quote:
      "The AI assistant they built handles complex patient questions with the nuance our brand requires. It's become an essential part of our digital front door.",
    name: "Dr. Amara Osei",
    title: "Medical Director",
    org: "Harvard-affiliated Clinic",
  },
  {
    quote:
      "Our website now reflects the caliber of our institution. Fast, accessible, and beautifully composed — exactly what prospective students and donors see first.",
    name: "Margaret Holt",
    title: "VP of External Affairs",
    org: "Carnegie Mellon University",
  },
];

export function Testimonials({
  items = testimonials,
  eyebrow = "Client Perspectives",
  title,
  subtitle,
}: {
  items?: Testimonial[];
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <section className="bg-ivory/70 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold-deep">
              <span className="h-px w-6 bg-gold" />
              {eyebrow}
              <span className="h-px w-6 bg-gold" />
            </span>
          )}
          {title && (
            <h2 className="mt-4 text-4xl leading-[1.1] md:text-5xl text-balance">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-balance">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {items.map((t) => (
            <div
              key={t.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_25px_60px_-30px_rgba(180,140,60,0.35)]"
            >
              <Quote
                size={28}
                className="text-gold/40 transition-colors group-hover:text-gold/70"
              />
              <blockquote className="mt-5 text-[15px] leading-relaxed text-charcoal/85">
                "{t.quote}"
              </blockquote>
              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full gold-gradient text-white font-display text-sm">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-display text-base leading-tight">
                    {t.name}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {t.title}
                    {t.org && (
                      <>
                        <span className="mx-1.5 text-gold">·</span>
                        {t.org}
                      </>
                    )}
                  </p>
                </div>
              </div>
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold-soft/0 transition-all duration-500 group-hover:bg-gold-soft/25" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
