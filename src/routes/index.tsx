import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Bot, Code2, FileText, ShieldCheck, Sparkles, TrendingUp, Eye, Layers, Target } from "lucide-react";
import { Btn, Eyebrow, SectionHeading } from "../components/ui-bits";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Veritas Consultation — Build Authority. Strengthen Reputation." },
      {
        name: "description",
        content:
          "Premium consultancy supporting professionals and institutions with Wikipedia pages, ebooks, AI bots, and full-stack web development.",
      },
      { property: "og:title", content: "Veritas Consultation" },
      {
        property: "og:description",
        content: "Build authority. Strengthen reputation. Create digital assets that last.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: FileText,
    hash: "wikipedia",
    title: "Wikipedia Page Creation & Editing",
    desc: "From notability assessment and independent source research to neutral drafting, submission, and post-publication monitoring, fully aligned with Wikipedia's editorial guidelines.",
  },
  {
    icon: BookOpen,
    hash: "ebook",
    title: "Ebook Services",
    desc: "Professional ebook development for experts, academics, founders, and thought leaders, including concept shaping, structure, writing support, editing, and polished final presentation.",
  },
  {
    icon: Bot,
    hash: "ai-bot",
    title: "AI Bot Services",
    desc: "Custom AI assistants trained on your business, services, research, or knowledge base to provide intelligent, accurate, and branded user interaction.",
  },
  {
    icon: Code2,
    hash: "web",
    title: "Full-stack Web Development",
    desc: "High-performance websites and web platforms designed for credibility, modern user experience, functionality, and long-term scalability.",
  },
];

const institutions = [
  "University of Colorado Boulder",
  "Harvard",
  "Carnegie Mellon",
  "University of Utah",
  "MD Anderson Cancer Center",
];

const values = [
  {
    icon: ShieldCheck,
    title: "Credibility-first execution",
    desc: "Every deliverable is shaped by editorial standards, neutrality, and the long-term reputation of the people we serve.",
  },
  {
    icon: Sparkles,
    title: "Polished digital presence",
    desc: "Refined design, careful writing, and considered structure — the small details that signal a serious operator.",
  },
  {
    icon: Target,
    title: "Strategic communication",
    desc: "We work as advisors first, helping you decide what to publish, where, and in what voice.",
  },
  {
    icon: Layers,
    title: "Built to scale",
    desc: "Web platforms and AI tools engineered for performance, maintainability, and growth over years, not months.",
  },
];

const outcomes = [
  { icon: TrendingUp, label: "Stronger authority" },
  { icon: Eye, label: "Improved discoverability" },
  { icon: Sparkles, label: "Cleaner online presence" },
  { icon: ShieldCheck, label: "Higher trust with media & institutions" },
  { icon: Layers, label: "Scalable digital assets" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ivory via-background to-background" />
        <div className="absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-gold-soft/30 blur-3xl" />
        <div className="absolute top-1/3 -left-32 h-[420px] w-[420px] rounded-full bg-champagne/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.1fr_1fr] lg:px-10 lg:py-32">
          <div>
            <Eyebrow>Premium Digital Consultancy</Eyebrow>
            <h1 className="mt-6 text-5xl leading-[1.02] md:text-6xl lg:text-7xl text-balance">
              Build Authority.<br />
              Strengthen Reputation.<br />
              <span className="gold-text">Create digital assets that last.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Veritas Consultation helps professionals and institutions establish lasting digital
              credibility through Wikipedia page creation, ebook development, custom AI bots, and
              full-stack web platforms.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Btn to="/contact">
                Book a Consultation <ArrowRight size={16} />
              </Btn>
              <Btn to="/services" variant="outline">
                Explore Services
              </Btn>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "5+", v: "Years" },
                { k: "120+", v: "Engagements" },
                { k: "98%", v: "Retention" },
              ].map((s) => (
                <div key={s.v}>
                  <p className="font-display text-3xl gold-text">{s.k}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.v}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial visual */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/5] w-full">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-champagne via-ivory to-gold-soft/40 shadow-[0_30px_80px_-30px_rgba(180,140,60,0.45)]" />
              <div className="absolute inset-6 rounded-[1.5rem] border border-gold/30 bg-background/60 backdrop-blur-sm" />

              <div className="absolute left-10 top-12 w-44 rounded-xl border border-border bg-card/95 p-5 shadow-xl">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-deep">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Wikipedia
                </div>
                <p className="mt-3 font-display text-base leading-tight">Notability secured</p>
                <div className="mt-3 space-y-1.5">
                  <div className="h-1.5 w-full rounded-full bg-champagne" />
                  <div className="h-1.5 w-3/4 rounded-full bg-champagne" />
                  <div className="h-1.5 w-1/2 rounded-full bg-gold/70" />
                </div>
              </div>

              <div className="absolute right-6 top-32 w-48 rounded-xl gold-gradient p-5 text-white shadow-2xl">
                <Bot size={20} className="opacity-90" />
                <p className="mt-3 font-display text-lg leading-tight">AI assistant deployed</p>
                <p className="mt-1 text-xs opacity-85">Trained on your knowledge base</p>
              </div>

              <div className="absolute bottom-12 left-12 w-56 rounded-xl border border-border bg-card/95 p-5 shadow-xl">
                <BookOpen size={18} className="text-gold-deep" />
                <p className="mt-3 font-display text-base">The Authority Playbook</p>
                <p className="mt-1 text-xs text-muted-foreground">A Veritas Ebook · 184pp</p>
                <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-champagne">
                  <div className="h-full w-4/5 rounded-full gold-gradient" />
                </div>
              </div>

              <div className="absolute bottom-6 right-10 flex h-16 w-16 items-center justify-center rounded-full gold-gradient text-white shadow-2xl">
                <Sparkles size={22} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutions */}
      <section className="border-y border-border bg-ivory/70 py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-center text-[11px] uppercase tracking-[0.35em] text-gold-deep">
            Supporting professionals at
          </p>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-5">
            {institutions.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center text-center font-display text-base text-charcoal/80 md:text-lg"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="What we do"
          title={<>Four focused services. <span className="gold-text">One standard.</span></>}
          subtitle="Each engagement is delivered with the same care: ethical, editorial, and built for the long term."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, desc, hash }) => (
            <a
              key={title}
              href={`/services#${hash}`}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_25px_60px_-30px_rgba(180,140,60,0.5)]"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold-soft/0 transition-all duration-500 group-hover:bg-gold-soft/40" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-champagne text-gold-deep transition-colors group-hover:gold-gradient group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 font-display text-2xl">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-deep">
                  Learn more
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Why Veritas */}
      <section className="bg-ivory/70 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
            <SectionHeading
              eyebrow="Why Veritas"
              title={<>A consultancy built around <span className="gold-text">credibility.</span></>}
              subtitle="We serve clients whose reputation matters — academics, doctors, founders, executives, and institutions. Every recommendation we make is shaped by that standard."
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-gold/60"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-champagne text-gold-deep">
                    <Icon size={20} />
                  </div>
                  <h4 className="mt-5 font-display text-xl">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Outcomes"
          title={<>What clients gain.</>}
          subtitle="The work is detailed and quiet — the results are visible."
          center
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {outcomes.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lg"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-champagne text-gold-deep transition-colors group-hover:gold-gradient group-hover:text-white">
                <Icon size={20} />
              </div>
              <p className="mt-4 font-display text-lg leading-tight">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 pb-8 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-charcoal via-charcoal to-[oklch(0.28_0.03_70)] px-8 py-20 text-center lg:px-16">
          <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-gold-soft/20 blur-3xl" />
          <div className="relative">
            <Eyebrow>Get Started</Eyebrow>
            <h2 className="mt-5 font-display text-4xl text-white md:text-5xl text-balance">
              Ready to build a more <span className="gold-text">credible digital presence?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">
              A focused first conversation to understand your goals, audience, and the assets that
              would serve you best.
            </p>
            <div className="mt-8 flex justify-center">
              <Btn to="/contact">
                Schedule a Consultation <ArrowRight size={16} />
              </Btn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
