import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-ivory/60">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full gold-gradient text-white font-display text-lg">
                V
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg">Veritas Consultation</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Authority · Credibility · Presence
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Premium consultancy helping professionals, academics, founders, and institutions build
              digital authority and lasting credibility through refined, ethical execution.
            </p>
            <a
              href="mailto:hello@veritasconsultation.com"
              className="mt-5 inline-flex items-center gap-2 text-sm text-charcoal hover:text-gold-deep transition-colors"
            >
              <Mail size={14} />
              <span>hello@veritasconsultation.com</span>
            </a>
          </div>

          <div>
            <h4 className="font-display text-base mb-4">Navigate</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-muted-foreground hover:text-charcoal transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { hash: "wikipedia", label: "Wikipedia Page Creation" },
                { hash: "ebook", label: "Ebook Services" },
                { hash: "ai-bot", label: "AI Bot Services" },
                { hash: "web", label: "Web Development" },
              ].map((l) => (
                <li key={l.hash}>
                  <Link
                    to="/services"
                    hash={l.hash}
                    className="text-muted-foreground hover:text-charcoal transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline mt-14" />
        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Veritas Consultation. All rights reserved.</p>
          <p className="tracking-wider uppercase">Crafted with discretion & precision</p>
        </div>
      </div>
    </footer>
  );
}
