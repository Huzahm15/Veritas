import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Btn, Eyebrow, PageHero } from "../components/ui-bits";
import { Check, Clock, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Veritas Consultation" },
      {
        name: "description",
        content:
          "Tell us what you're building, improving, or planning and we'll help you shape the right digital solution.",
      },
      { property: "og:title", content: "Contact Veritas Consultation" },
      {
        property: "og:description",
        content: "Start a focused conversation about your digital authority and presence.",
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

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSent(true);
    setForm({ name: "", email: "", service: "", message: "" });
  };

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={<>Let's shape your <span className="gold-text">digital presence.</span></>}
        subtitle="Tell us what you're building, improving, or planning and we'll help you shape the right digital solution."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          {/* Form */}
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[0_30px_80px_-50px_rgba(180,140,60,0.4)] lg:p-12">
            {sent ? (
              <div className="flex flex-col items-center py-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full gold-gradient text-white">
                  <Check size={28} />
                </div>
                <h2 className="mt-6 font-display text-3xl">Message received.</h2>
                <p className="mt-3 max-w-md text-muted-foreground">
                  Thank you for reaching out. A member of the Veritas team will reply within one
                  business day.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 text-sm font-medium text-gold-deep hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field
                    label="Your name"
                    id="name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    required
                  />
                  <Field
                    label="Email"
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    required
                  />
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
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
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
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="A few sentences about your goals, your audience, and what you'd like to build or improve."
                    className="mt-2 w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-charcoal placeholder:text-muted-foreground/70 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-muted-foreground">
                    Replies within 1 business day. All conversations are confidential.
                  </p>
                  <Btn type="submit">Send Message</Btn>
                </div>
              </form>
            )}
          </div>

          {/* Side info */}
          <div className="space-y-8">
            <div>
              <Eyebrow>What happens next</Eyebrow>
              <ol className="mt-5 space-y-5">
                {[
                  { t: "Reply within a day", d: "We respond personally so no automated funnels." },
                  { t: "30-minute consultation", d: "Scheduled at a time that suits you, by video or phone." },
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
              <InfoRow icon={Mail} label="Email" value="hello@veritasconsultation.com" />
              <InfoRow icon={Clock} label="Hours" value="24/7 - Globally" />
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
    </>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
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
