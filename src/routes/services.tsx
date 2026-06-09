import { createFileRoute } from "@tanstack/react-router";
import { Btn, Eyebrow, PageHero } from "../components/ui-bits";
import { ArrowRight, BookOpen, Bot, Check, Code2, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Veritas Consultation" },
      {
        name: "description",
        content:
          "Wikipedia pages, ebook development, AI bot services, and full-stack web development for professionals and institutions.",
      },
      { property: "og:title", content: "Services — Veritas Consultation" },
      {
        property: "og:description",
        content:
          "Four focused solutions for professionals who want to strengthen authority and digital presence.",
      },
    ],
  }),
  component: Services,
});

type Service = {
  id: string;
  num: string;
  icon: LucideIcon;
  title: string;
  lede: string;
  body: string;
  points: string[];
  cta: string;
};

const services: Service[] = [
  {
    id: "wikipedia",
    num: "01",
    icon: FileText,
    title: "Wikipedia Page Creation & Editing",
    lede: "From notability assessment and independent source research to neutral drafting, submission, and post-publication monitoring, fully aligned with Wikipedia's editorial guidelines.",
    body: "A Wikipedia page is one of the most visible and most scrutinized digital assets a professional can hold. We approach every engagement as editors first; verifying notability, sourcing rigorously, drafting in a neutral encyclopedic voice, and shepherding the article through submission and ongoing maintenance.",
    points: [
      "Notability assessment grounded in Wikipedia's criteria",
      "Independent, reliable source research and curation",
      "Neutral, encyclopedic drafting, no promotional language",
      "Submission support and reviewer communication",
      "Editorial guideline awareness across every revision",
      "Post-publication monitoring and considered updates",
    ],
    cta: "Discuss Your Eligibility",
  },
  {
    id: "ebook",
    num: "02",
    icon: BookOpen,
    title: "Ebook Services",
    lede: "Professional ebook development for experts, academics, founders, and thought leaders, including concept shaping, structure, writing support, editing, and polished final presentation.",
    body: "A well-made ebook is an authority asset; a structured, citable expression of expertise that compounds over years. We help you shape the idea, plan the architecture, write or refine the manuscript, and deliver a polished final artifact your audience will take seriously.",
    points: [
      "Topic and concept refinement",
      "Outline and chapter-level structure",
      "Drafting and ghostwriting support",
      "Substantive editing and proofreading",
      "Formatting, typography, and presentation",
      "Cover design and reader-ready delivery",
    ],
    cta: "Start Your Ebook Project",
  },
  {
    id: "ai-bot",
    num: "03",
    icon: Bot,
    title: "AI Bot Services",
    lede: "Custom AI assistants trained on your business, services, research, or knowledge base to provide intelligent, accurate, and branded user interaction.",
    body: "Off-the-shelf AI is generic. We build assistants trained on your material, your research, your offerings, your guidelines; wrapped in an interface that matches your brand and answers in your voice. Used as website concierges, research aides, or internal knowledge tools.",
    points: [
      "Website assistant for visitor questions and routing",
      "Research assistant trained on your publications",
      "Service guidance bot for clients and patients",
      "Knowledge-base assistant for teams and members",
      "Internal information assistant for staff workflows",
      "Branded interface, accurate retrieval, custom data training",
    ],
    cta: "Build Your AI Bot",
  },
  {
    id: "web",
    num: "04",
    icon: Code2,
    title: "Full-stack Web Development",
    lede: "High-performance websites and web platforms designed for credibility, modern user experience, functionality, and long-term scalability.",
    body: "Your website is, for most stakeholders, the first impression. We design and build sites that hold up to scrutiny; fast, accessible, beautifully typeset, and engineered cleanly enough to grow with you for years.",
    points: [
      "Personal authority sites for founders, executives, and consultants",
      "Profiles and platforms for academics and medical professionals",
      "Business websites with clear positioning and conversion paths",
      "Custom digital platforms and member portals",
      "Responsive front-end with robust back-end architecture",
      "Performance, accessibility, and scalability as defaults",
    ],
    cta: "Build Your Website",
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Four focused solutions for <span className="gold-text">authority and presence.</span></>}
        subtitle="Veritas Consultation offers a deliberately narrow set of services, each engineered for professionals and institutions who want their digital presence to match the quality of their work."
      />

      {/* Anchor nav */}
      <section className="sticky top-[68px] z-30 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-6 py-3 lg:px-10">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-champagne hover:text-charcoal"
            >
              {s.num} · {s.title.split(" ")[0]}
            </a>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {services.map((s, idx) => {
          const Icon = s.icon;
          const reverse = idx % 2 === 1;
          return (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-32 border-b border-border py-20 lg:py-28 last:border-b-0"
            >
              <div
                className={`grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Visual */}
                <div className="relative">
                  <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-champagne/60 via-ivory to-gold-soft/30 blur-2xl opacity-70" />
                  <div className="relative aspect-[4/3] rounded-3xl border border-gold/30 bg-card p-8 shadow-[0_30px_80px_-40px_rgba(180,140,60,0.45)]">
                    <span className="font-display text-5xl gold-text">{s.num}</span>
                    <div className="absolute right-8 top-8 flex h-14 w-14 items-center justify-center rounded-2xl gold-gradient text-white shadow-lg">
                      <Icon size={24} />
                    </div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="hairline mb-4" />
                      <p className="font-display text-xl leading-tight">{s.title}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <Eyebrow>Service {s.num}</Eyebrow>
                  <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
                    {s.title}
                  </h2>
                  <p className="mt-5 rounded-xl border-l-2 border-gold bg-ivory/70 p-5 text-[15px] italic leading-relaxed text-charcoal/85">
                    {s.lede}
                  </p>
                  <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>

                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-champagne text-gold-deep">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span className="text-charcoal/85">{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9">
                    <Btn to="/contact">
                      {s.cta} <ArrowRight size={16} />
                    </Btn>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Closing */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-gold/30 bg-ivory/70 p-12 text-center lg:p-16">
          <Eyebrow>Not sure where to start?</Eyebrow>
          <h2 className="mt-5 font-display text-3xl md:text-4xl text-balance">
            We'll help you choose the <span className="gold-text">right place to begin.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            A focused consultation to map your goals, audience, and the asset that would serve you
            most.
          </p>
          <div className="mt-7 flex justify-center">
            <Btn to="/contact">
              Book a Consultation <ArrowRight size={16} />
            </Btn>
          </div>
        </div>
      </section>
    </>
  );
}
