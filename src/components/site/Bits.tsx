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

export function ProgressBar({ raised, goal }: { raised: number; goal: number }) {
  const pct = Math.min(100, Math.round((raised / goal) * 100));
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref}>
      <div className="flex items-end justify-between mb-2 text-sm font-medium">
        <div className="flex flex-col">
          <Counter to={raised} prefix="€" duration={1500} className="text-2xl font-display font-bold text-navy" />
          <span className="text-muted-foreground mt-0.5">raised</span>
        </div>
        <span className="text-muted-foreground">of €{goal.toLocaleString("de-AT")} goal</span>
      </div>
      <div className="h-3 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-amber via-lime-400 to-emerald-500"
          style={{
            width: inView ? `${pct}%` : "0%",
            transition: "width 1.5s ease-out",
          }}
        />
      </div>
      <p className="text-xs text-muted-foreground mt-2">{pct}% — together we keep going.</p>
    </div>
  );
}

export function SectionTitle({ eyebrow, title, center, light }: { eyebrow?: string; title: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`${center ? "text-center" : ""} mb-10`}>
      {eyebrow && (
        <p className={`text-xs uppercase tracking-[0.2em] font-semibold mb-3 ${light ? "text-amber" : "text-teal"}`}>{eyebrow}</p>
      )}
      <h2 className={`font-display sm:text-4xl md:text-5xl font-bold text-balance text-navy text-slate-50 text-6xl ${light ? "text-white" : ""}`}>{title}</h2>
    </div>
  );
}
