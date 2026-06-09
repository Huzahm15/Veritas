import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/70 shadow-[0_1px_30px_-15px_rgba(120,90,30,0.25)]"
          : "bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
  src="/Initial-V.png"
  alt="Veritas Consultation"
  className="h-12 w-12 object-contain"
/>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg text-charcoal">Veritas</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Consultation
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative text-sm text-charcoal/80 transition-colors hover:text-charcoal"
              activeProps={{ className: "text-charcoal font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-gold transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full gold-gradient px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_25px_-10px_rgba(180,140,60,0.7)] transition-transform hover:-translate-y-0.5"
          >
            Book a Consultation
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-md p-2 text-charcoal"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-charcoal/90"
                activeProps={{ className: "text-gold-deep font-medium" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full gold-gradient px-5 py-3 text-sm font-medium text-white"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
