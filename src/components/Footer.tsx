import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-ivory/60">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full gold-gradient font-display text-lg text-white">
                V
              </span>

              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg">
                  Veritas Consultation
                </span>

                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Authority · Credibility · Presence
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Premium consultancy helping professionals, academics, founders,
              and institutions build digital authority and lasting credibility
              through refined, ethical execution.
            </p>

            <div className="mt-5 flex flex-col items-start gap-3">
              <a
                href="mailto:sales@veritasconsultation.com"
                className="inline-flex items-center gap-2 text-sm text-charcoal transition-colors hover:text-gold-deep"
              >
                <Mail size={14} />
                <span>sales@veritasconsultation.com</span>
              </a>

              <a
                href="https://wa.me/14709738976"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Veritas Consultation on WhatsApp"
                className="inline-flex items-center gap-2 text-sm text-charcoal transition-colors hover:text-gold-deep"
              >
                <MessageCircle size={14} />
                <span>+1-470-973-8976</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display text-base">Navigate</h4>

            <ul className="space-y-2.5 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground transition-colors hover:text-charcoal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-base">Services</h4>

            <ul className="space-y-2.5 text-sm">
              {[
                {
                  hash: "wikipedia",
                  label: "Wikipedia Page Creation",
                },
                {
                  hash: "ebook",
                  label: "Ebook Services",
                },
                {
                  hash: "ai-bot",
                  label: "AI Bot Services",
                },
                {
                  hash: "web",
                  label: "Web Development",
                },
              ].map((link) => (
                <li key={link.hash}>
                  <Link
                    to="/services"
                    hash={link.hash}
                    className="text-muted-foreground transition-colors hover:text-charcoal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline mt-14" />

        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} Veritas Consultation. All rights
            reserved.
          </p>

          <p className="uppercase tracking-wider">
            Crafted with discretion & precision
          </p>
        </div>
      </div>
    </footer>
  );
}
