export function Placeholder({ label, className = "aspect-[4/3]", src, objectPosition }: { label: string; className?: string; src?: string; objectPosition?: string }) {
  if (src) {
    return (
      <div className={`${className} w-full overflow-hidden rounded-2xl bg-muted`}>
        <img
          src={src}
          alt={label}
          loading="lazy"
          className="w-full h-full object-cover"
          style={objectPosition ? { objectPosition } : undefined}
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

export function ProgressBar({ raised, goal }: { raised: number; goal: number }) {
  const pct = Math.min(100, Math.round((raised / goal) * 100));
  return (
    <div>
      <div className="flex items-end justify-between mb-2 text-sm font-medium">
        <span><span className="text-2xl font-display font-bold text-navy">€{raised.toLocaleString("de-AT")}</span> <span className="text-muted-foreground">raised</span></span>
        <span className="text-muted-foreground">of €{goal.toLocaleString("de-AT")} goal</span>
      </div>
      <div className="h-3 rounded-full bg-muted overflow-hidden">
        <div className="h-full bg-gradient-to-r from-teal to-amber transition-all duration-1000" style={{ width: `${pct}%` }} />
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
      <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold text-balance ${light ? "text-white" : "text-navy"}`}>{title}</h2>
    </div>
  );
}
