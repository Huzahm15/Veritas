import { createFileRoute } from "@tanstack/react-router";
import { Btn, Eyebrow, PageHero, SectionHeading } from "../components/ui-bits";
import { ArrowRight, BadgeCheck, Compass, HeartHandshake, Microscope, Users } from "lucide-react";
import { Testimonials } from "../components/Testimonials";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Veritas Consultation" },
      {
        name: "description",
        content:
          "A modern consultancy at the intersection of reputation, content, technology, visibility, and public credibility.",
      },
      { property: "og:title", content: "About Veritas Consultation" },
      {
        property: "og:description",
        content:
          "We help professionals and institutions build digital authority through refined, ethical execution.",
      },
    ],
  }),
  component: About,
});

const helps = [
  { icon: Microscope, t: "Academics & Researchers", d: "Scholars seeking visibility and a structured public footprint for their work." },
  { icon: HeartHandshake, t: "Doctors & Clinicians", d: "Medical professionals building credible patient-facing and peer-facing presence." },
  { icon: BadgeCheck, t: "Founders & Executives", d: "Leaders translating private accomplishment into public authority." },
  { icon: Users, t: "Institutions", d: "Universities, clinics, and organizations whose reputation is a long-term asset." },
];

const pillars = [
  "Reputation",
  "Content",
  "Technology",
  "Visibility",
  "Public Credibility",
];

const approach = [
  { n: "01", t: "Listen", d: "We start by understanding your audience, your record, and what 'credible' looks like in your field." },
  { n: "02", t: "Assess", d: "An honest read on what's possible — what to publish, what to build, and where effort earns the best return." },
  { n: "03", t: "Build", d: "Quiet, careful execution. Editorial discipline. Engineering rigor. No shortcuts that compromise trust." },
  { n: "04", t: "Sustain", d: "Monitoring, maintenance, and considered updates so the work compounds rather than decays." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Veritas"
        title={<>A consultancy for people whose <span className="gold-text">reputation matters.</span></>}
        subtitle="Veritas Consultation is a modern firm working at the intersection of reputation, content, technology, visibility, and public credibility — building digital assets that endure."
      />

      {/* Pillars strip */}
      <section className="border-b border-border bg-ivory/60 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {pillars.map((p, i) => (
              <div key={p} className="flex items-center gap-10">
                <span className="font-display text-xl text-charcoal/80">{p}</span>
                {i < pillars.length - 1 && (
                  <span className="hidden h-1 w-1 rounded-full bg-gold md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Who we help"
          title={<>Serious people doing <span className="gold-text">serious work.</span></>}
          subtitle="Our clients are professionals and institutions whose work deserves to be found, understood, and trusted."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {helps.map(({ icon: Icon, t, d }) => (
            <div
              key={t}
              className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-champagne text-gold-deep">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-2xl">{t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What we do + Why credibility */}
      <section className="bg-ivory/70 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
              Four services. One <span className="gold-text">editorial standard.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We focus on the digital assets that most directly shape how a professional or
              institution is perceived: Wikipedia pages, ebooks, custom AI assistants, and
              full-stack websites. Narrow scope. Deep craft.
            </p>
            <div className="mt-8">
              <Btn to="/services" variant="outline">
                Explore the work <ArrowRight size={16} />
              </Btn>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -right-6 h-40 w-40 rounded-full bg-gold-soft/40 blur-3xl" />
            <div className="relative rounded-2xl border border-gold/30 bg-card p-8 shadow-[0_30px_70px_-40px_rgba(180,140,60,0.5)]">
              <Compass className="text-gold-deep" />
              <h3 className="mt-5 font-display text-2xl">Why credibility matters</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                Decisions about hiring, funding, partnership, and care increasingly start with a
                search. Credibility online isn't vanity — it's how stakeholders evaluate whether to
                trust the person or institution behind the work.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                We help close the gap between the substance someone has built privately and how
                that substance is represented publicly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Our approach"
          title={<>Considered. Sequenced. <span className="gold-text">Built to last.</span></>}
          subtitle="No noise, no shortcuts. We move deliberately because reputation is built that way."
          center
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {approach.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-card p-7">
              <span className="font-display text-3xl gold-text">{s.n}</span>
              <h4 className="mt-4 font-display text-xl">{s.t}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-4 text-center">
          <p className="font-display text-2xl text-balance max-w-2xl">
            If your work is serious, the way it shows up online should be, too.
          </p>
          <Btn to="/contact">
            Start a conversation <ArrowRight size={16} />
          </Btn>
        </div>
      </section>
    </>
  );
}
