export function Placeholder({ label, className = "aspect-[4/3]", src, objectPosition, objectFit }: { label: string; className?: string; src?: string; objectPosition?: string; objectFit?: "cover" | "contain" }) {
  if (src) {
    return (
      <div className={`${className} w-full overflow-hidden rounded-2xl bg-muted`}>
        <img
          src={src}
          alt={label}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: objectFit || "cover",
            objectPosition: objectPosition || "center",
            display: "block",
          }}
        />
      </div>
    );
  }
  return (
    <div className={`placeholder-img ${className} w-full`}>
      <span className="px-4 text-center">{label}</span>
    </div>
  );
}

import { useInView, Counter } from "@/components/site/Reveal";

export function ProgressBar({ raised, goal, light }: { raised: number; goal: number; light?: boolean }) {
  const pct = Math.min(100, Math.round((raised / goal) * 100));
  const { ref, inView } = useInView<HTMLDivElement>();
  const textPrimary = light ? "text-white" : "text-navy";
  const textMuted = light ? "text-white/80" : "text-navy/70";
  const trackBg = light ? "bg-white/20" : "bg-muted";
  return (
    <div ref={ref}>
      <div className="flex items-end justify-between mb-2 text-sm font-medium">
        <div className="flex flex-col">
          <Counter to={raised} prefix="€" duration={1500} className={`text-2xl font-display font-bold ${textPrimary}`} />
          <span className={`${textMuted} mt-0.5`}>raised</span>
        </div>
        <span className={textMuted}>of €{goal.toLocaleString("de-AT")} goal</span>
      </div>
      <div className={`h-3 rounded-full ${trackBg} overflow-hidden`}>
        <div
          className="h-full bg-gradient-to-r from-amber via-amber-deep to-emerald-400"
          style={{
            width: inView ? `${pct}%` : "0%",
            transition: "width 1.5s ease-out",
          }}
        />
      </div>
      <p className={`text-xs ${textMuted} mt-2`}>{pct}%</p>
    </div>
  );
}

export function SectionTitle({ eyebrow, title, center, light }: { eyebrow?: string; title: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`${center ? "text-center" : ""} mb-10`}>
      {eyebrow && (
        <p className={`text-xs uppercase tracking-[0.2em] font-semibold mb-3 ${light ? "text-amber" : "text-teal"}`}>{eyebrow}</p>
      )}
      <h2 className={`font-display sm:text-4xl md:text-5xl font-bold text-balance text-6xl ${light ? "text-white" : "text-navy"}`}>{title}</h2>
    </div>
  );
}

import type { LucideIcon } from "lucide-react";

export function PageHeroIllustrated({
  eyebrow,
  title,
  sub,
  icon: Icon,
  badgeLabel,
  imageSrc,
  imageAlt,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  icon: LucideIcon;
  badgeLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 via-background to-background pt-16 pb-16">
      <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-teal/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-amber/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-navy/5 blur-3xl" />
      <div className="container-wide relative">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-center">
          <div className="fade-in">
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-4">{eyebrow}</p>
            )}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-balance text-navy leading-[1.05]">
              {title}
            </h1>
            {sub && (
              <p className="mt-6 text-lg md:text-xl text-foreground/75 max-w-2xl leading-relaxed">
                {sub}
              </p>
            )}
          </div>
          <div className="hidden md:flex justify-center fade-in fade-in-delay-1">
            <div className="relative">
              <div aria-hidden className="absolute inset-0 -m-6 rounded-[2.5rem] bg-gradient-to-br from-teal/20 via-amber/10 to-transparent blur-2xl" />
              <div className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-[2.5rem] bg-gradient-to-br from-card to-muted border border-border shadow-[var(--shadow-card)] flex flex-col items-center justify-center gap-4 p-6">
                {imageSrc ? (
                  <img src={imageSrc} alt={imageAlt ?? ""} className="max-w-full max-h-full object-contain" />
                ) : (
                  <>
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-teal to-teal/70 text-white flex items-center justify-center shadow-[var(--shadow-amber)]">
                      <Icon className="w-12 h-12" strokeWidth={1.6} />
                    </div>
                    {badgeLabel && (
                      <p className="text-xs uppercase tracking-[0.2em] font-semibold text-teal text-center px-4">
                        {badgeLabel}
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export function LeadParagraph({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-soft)] overflow-hidden">
      <div aria-hidden className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-teal to-amber" />
      <p className="text-lg md:text-xl text-foreground/85 leading-relaxed pl-3">{children}</p>
    </div>
  );
}
