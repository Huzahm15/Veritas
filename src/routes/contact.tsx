import { createFileRoute } from "@tanstack/react-router";
import { Btn, Eyebrow, PageHero } from "../components/ui-bits";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Clock,
  Code2,
  FileText,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const PAGE_URL = "https://veritasconsultation.com/contact";
const PAGE_TITLE =
  "Contact Veritas Consultation | Wikipedia, Ebook, AI Bot & Web Development Services";
const PAGE_DESC =
  "Talk to Veritas Consultation about Wikipedia page creation, ebook development, custom AI bots and full-stack web development. Free 30-minute consultation, reply within 1 business day.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "contact Veritas Consultation, Wikipedia page creation, Wikipedia editing service, ebook ghostwriting, custom AI chatbot, full-stack web development, digital authority consulting",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:site_name", content: "Veritas Consultation" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ContactPage",
              name: PAGE_TITLE,
              url: PAGE_URL,
              description: PAGE_DESC,
            },
            {
              "@type": "ProfessionalService",
              name: "Veritas Consultation",
              description: PAGE_DESC,
              url: "https://veritasconsu.netlify.app/",
              areaServed: "Worldwide",
              email: "sales@veritasconsultation.com",
              priceRange: "$$$",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "sales@veritasconsultation.com",
                availableLanguage: ["English"],
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How quickly will you reply?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We respond personally within one business day — no automated funnels.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the consultation really free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The initial 30-minute consultation is complimentary and carries no obligation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you work with clients outside the US?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes — Veritas is remote-first and works with clients globally across time zones.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is my information confidential?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Every conversation is confidential. Whatever you share with us stays with us.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: Contact,
});

const serviceOptions = [
  "Wikipedia Page Creation & Editing",
  "Ebook Services",
  "AI Bot Services",
  "Full-stack Web Development",
  "Not sure yet — advise me",
];

const services = [
  {
    icon: FileText,
    title: "Wikipedia Page Creation & Editing",
    blurb:
      "Notability assessment, independent source research, neutral drafting and submission — fully aligned with Wikipedia's editorial standards.",
  },
  {
    icon: BookOpen,
    title: "Ebook Development",
    blurb:
      "Concept, structure, ghostwriting, editing and polished presentation. A citable authority asset that compounds for years.",
  },
  {
    icon: Bot,
    title: "Custom AI Bot Services",
    blurb:
      "Branded assistants trained on your research, services and knowledge base — accurate retrieval, your voice, your interface.",
  },
  {
    icon: Code2,
    title: "Full-stack Web Development",
    blurb:
      "Fast, accessible, beautifully typeset websites and platforms engineered to scale with your reputation.",
  },
] as const;

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch · Free 30-minute consultation"
        title={
          <>
            Let's shape your <span className="gold-text">digital presence.</span>
          </>
        }
        subtitle="Tell us what you're building, improving, or planning — we'll help you shape the right digital solution. Reply within 1 business day, completely confidential."
      />

      <ServicesSection />
      <ContactFormSection />
      <TrustStrip />
      <WhySection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}

/* ---------------- TRUST STRIP ---------------- */

function TrustStrip() {
  const items = [
    "Harvard",
    "MD Anderson",
    "Stanford",
    "Mayo Clinic",
    "Cambridge",
    "Johns Hopkins",
    "University of Washington",
  ];

  return (
    <section
      aria-label="Trusted by professionals from leading institutions"
      className="border-b border-border bg-ivory/40"
    >
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <p className="text-center text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          Trusted by professionals from
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-display text-lg text-charcoal/70">
          {items.map((i) => (
            <span key={i}>{i}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT FORM ---------------- */

function ContactFormSection() {
  return (
    <section id="contact" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
        {/* Form */}
        <div className="rounded-3xl border border-border bg-card p-8 shadow-[0_30px_80px_-50px_rgba(180,140,60,0.4)] lg:p-12">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/contact-success.html"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            <p className="hidden">
              <label>
                Do not fill this out:
                <input name="bot-field" />
              </label>
            </p>

            <div>
              <h2 className="font-display text-3xl md:text-4xl">
                Request your <span className="gold-text">consultation</span>
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Takes under a minute. We reply within 1 business day.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Your name" id="name" required />
              <Field label="Email" id="email" type="email" required />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-xs uppercase tracking-[0.2em] text-muted-foreground"
              >
                Service of interest
              </label>
              <select
                id="service"
                name="service"
                className="mt-2 w-full appearance-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-charcoal transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              >
                <option value="">Select a service…</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-[0.2em] text-muted-foreground"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="A few sentences about your goals, your audience, and what you'd like to build or improve."
                className="mt-2 w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-charcoal placeholder:text-muted-foreground/70 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <p className="text-xs text-muted-foreground">
                Replies within 1 business day. All conversations are confidential.
              </p>
              <Btn type="submit">
                Send Message <ArrowRight size={16} />
              </Btn>
            </div>
          </form>
        </div>

        {/* Side info */}
        <div className="space-y-8">
          <div>
            <Eyebrow>What happens next</Eyebrow>
            <ol className="mt-5 space-y-5">
              {[
                { t: "Reply within a day", d: "We respond personally — no automated funnels." },
                {
                  t: "30-minute consultation",
                  d: "Scheduled at a time that suits you, by video or phone.",
                },
                { t: "Tailored proposal", d: "A clear, scoped plan with timeline and investment." },
              ].map((step, i) => (
                <li key={step.t} className="flex gap-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-champagne font-display text-sm text-gold-deep">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display text-lg leading-tight">{step.t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="hairline" />

          <div className="space-y-4 text-sm">
            <InfoRow icon={Mail} label="Email" value="sales@veritasconsultation.com" />
            <InfoRow icon={Clock} label="Hours" value="Mon–Fri · 9:00 – 18:00" />
            <InfoRow icon={MapPin} label="Working with clients" value="Globally · Remote-first" />
          </div>

          <div className="rounded-2xl border border-gold/30 bg-ivory/60 p-6">
            <p className="font-display text-lg leading-snug">
              "Discretion is part of the service. Whatever you share with us stays with us."
            </p>
            <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
              — The Veritas Team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */

function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-y border-border bg-ivory/40 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">
            Four focused services for{" "}
            <span className="gold-text">authority and presence.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            A deliberately narrow practice — each engagement engineered for professionals and
            institutions whose digital footprint must hold up to scrutiny.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_30px_60px_-40px_rgba(180,140,60,0.5)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gold-gradient text-white shadow-md">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-2xl leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-deep transition-transform group-hover:translate-x-1"
                >
                  Discuss this service <ArrowRight size={14} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY ---------------- */

function WhySection() {
  const pillars = [
    {
      t: "Editorial rigor",
      d: "Every word is fact-checked, sourced, and written to a publishable standard — not marketing copy.",
    },
    {
      t: "Discretion",
      d: "Confidential by default. What you share with us never leaves the engagement.",
    },
    {
      t: "Built to last",
      d: "We design assets that compound — pages, books and platforms that still serve you in five years.",
    },
  ];

  return (
    <section className="border-b border-border py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.t}>
              <div className="hairline w-12" />
              <h3 className="mt-4 font-display text-2xl">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */

function ProcessSection() {
  const steps = [
    {
      t: "Free consultation",
      d: "A 30-minute call to understand your goals, audience and constraints.",
    },
    {
      t: "Tailored proposal",
      d: "A scoped plan with deliverables, timeline and investment — clearly written.",
    },
    {
      t: "Crafted execution",
      d: "Senior practitioners produce the work, with checkpoints at every stage.",
    },
    {
      t: "Long-term care",
      d: "Optional maintenance, monitoring and iteration as your reputation grows.",
    },
  ];

  return (
    <section className="border-b border-border bg-ivory/40 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">
            A simple, considered <span className="gold-text">four-step process.</span>
          </h2>
        </div>

        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.t} className="relative rounded-2xl border border-border bg-card p-7">
              <span className="font-display text-4xl gold-text">0{i + 1}</span>
              <h3 className="mt-3 font-display text-xl">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */

function TestimonialsSection() {
  const quotes = [
    {
      q: "Veritas delivered a Wikipedia page that finally reflects the breadth of my research. The process was meticulous and entirely above board.",
      a: "Professor of Clinical Medicine",
      i: "Harvard Medical School",
    },
    {
      q: "The AI assistant they built for our practice answers patient questions in our exact tone. It has materially reduced front-desk load.",
      a: "Director, Specialty Clinic",
      i: "United States",
    },
    {
      q: "From manuscript to typeset ebook, the editorial standard was the highest I have worked with.",
      a: "Founder & Author",
      i: "London",
    },
  ];

  return (
    <section className="border-b border-border py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <Eyebrow>Client voices</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">
            What clients say about{" "}
            <span className="gold-text">working with Veritas.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quotes.map((t) => (
            <figure
              key={t.a}
              className="flex flex-col rounded-2xl border border-gold/30 bg-card p-7 shadow-[0_20px_50px_-40px_rgba(180,140,60,0.5)]"
            >
              <div className="flex gap-1 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-4 font-display text-lg leading-snug text-charcoal">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <p className="font-medium text-charcoal">{t.a}</p>
                <p className="text-muted-foreground">{t.i}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

function FaqSection() {
  const faqs = [
    {
      q: "How quickly will you reply?",
      a: "We respond personally within one business day — no automated funnels. Most enquiries receive a thoughtful reply the same day.",
    },
    {
      q: "Is the initial consultation really free?",
      a: "Yes. The first 30-minute consultation is complimentary and carries no obligation. We use it to understand your goals and recommend the right path forward.",
    },
    {
      q: "Do you work with clients outside the US?",
      a: "Yes — Veritas is remote-first and works with clients globally across time zones.",
    },
    {
      q: "Is my information confidential?",
      a: "Every conversation is confidential. Whatever you share with us stays with us — discretion is built into how we operate.",
    },
  ];

  return (
    <section id="faq" className="scroll-mt-24 border-b border-border bg-ivory/40 py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          <Eyebrow>Frequently asked</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">
            Answers to common <span className="gold-text">questions.</span>
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <h3 className="font-display text-lg text-charcoal">{f.q}</h3>
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-gold text-gold-deep transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */

function FinalCtaSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full gold-gradient text-white shadow-md">
          <Sparkles size={20} />
        </div>
        <h2 className="mt-6 text-4xl md:text-5xl text-balance">
          Ready to build something <span className="gold-text">lasting?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Send a short message and we'll reply within one business day with the right next step —
          completely confidential, no obligation.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Btn href="#contact">
            Book Your Free Consultation <ArrowRight size={16} />
          </Btn>
          <Btn href="#services" variant="outline">
            Explore Services
          </Btn>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-gold-deep" /> Discreet
          </span>
          <span className="flex items-center gap-2">
            <Sparkles size={14} className="text-gold-deep" /> Hand-crafted
          </span>
          <span className="flex items-center gap-2">
            <Star size={14} className="text-gold-deep" /> Global
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SHARED FIELDS ---------------- */

function Field({
  label,
  id,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs uppercase tracking-[0.2em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-charcoal transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
      />
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-champagne text-gold-deep">
        <Icon size={16} />
      </span>
      <div>
        <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="text-charcoal">{value}</p>
      </div>
    </div>
  );
}
