import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold-deep">
      <span className="h-px w-6 bg-gold" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-4xl leading-[1.1] md:text-5xl text-balance">{title}</h2>
      {subtitle && (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}

type BtnProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  hash?: string;
  variant?: "primary" | "ghost" | "outline";
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
};

export function Btn({
  children,
  to,
  href,
  hash,
  variant = "primary",
  type,
  onClick,
  className = "",
}: BtnProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";
  const styles = {
    primary:
      "gold-gradient text-white shadow-[0_10px_30px_-12px_rgba(180,140,60,0.7)] hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-12px_rgba(180,140,60,0.85)]",
    outline:
      "border border-gold text-charcoal hover:bg-champagne/60",
    ghost: "text-charcoal hover:text-gold-deep",
  }[variant];

  const cls = `${base} ${styles} ${className}`;

  if (to) {
    return (
      <Link to={to} hash={hash} className={cls}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-ivory via-background to-background">
      <div className="absolute -top-32 -right-20 h-[420px] w-[420px] rounded-full bg-gold-soft/30 blur-3xl" />
      <div className="absolute top-40 -left-32 h-[360px] w-[360px] rounded-full bg-champagne/60 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl text-5xl leading-[1.05] md:text-6xl lg:text-7xl text-balance">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
