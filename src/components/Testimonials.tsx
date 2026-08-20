import type { ReactNode } from "react";
import { Quote } from "lucide-react";

export type Testimonial = {
  quote: ReactNode;
  title: string;
  org?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Your team did an excellent job. My article was well-written and ahead of schedule.",
    title: "Principal Investigator",
    org: "MD Anderson Cancer Center",
  },
  {
    quote:
      "Your service was excellent: very responsive to my suggestions, and thorough in terms of making sure the references and citations were correct.",
    title: "Associate Dean for Master’s Programs in the School of Computer Science",
    org: "Carnegie Mellon University",
  },
  {
    quote:
      "They were very professional and know all the rules that Wikipedia enforces. I highly recommend them.",
    title: "Physician-Scientist",
    org: "University of Michigan Medical School",
  },
  {
    quote:
      "The web page looks terrific!",
    title: "Professor of Medicine",
    org: "Emory School of Medicine",
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
          {items.map((t, index) => (
            <div
              key={`${t.title}-${index}`}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_25px_60px_-30px_rgba(180,140,60,0.35)]"
            >
              <Quote
                size={28}
                className="text-gold/40 transition-colors group-hover:text-gold/70"
              />

              <blockquote className="mt-5 text-[15px] leading-relaxed text-charcoal/85">
                “{t.quote}”
              </blockquote>

              <div className="mt-7">
                <p className="font-display text-base leading-tight">
                  {t.title}
                </p>

                {t.org && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {t.org}
                  </p>
                )}
              </div>

              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold-soft/0 transition-all duration-500 group-hover:bg-gold-soft/25" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
