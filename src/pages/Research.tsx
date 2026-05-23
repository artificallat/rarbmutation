import { FlaskConical, Microscope, Wrench } from "lucide-react";
import { PageHeroIllustrated } from "@/components/site/Bits";
import type { Lang } from "@/content/site";

export default function Research({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHeroIllustrated
        eyebrow={de ? "Forschung" : "Research"}
        title={de ? "Forschung" : "Research"}
        sub={de
          ? "Dieser Bereich wird derzeit überarbeitet — bald finden Sie hier eine vollständige Übersicht unserer Forschungsprogramme."
          : "This section is currently under revision — a full overview of our research programmes is coming soon."}
        icon={FlaskConical}
        badgeLabel={de ? "In Arbeit" : "In progress"}
      />
      <section className="container-tight py-20">
        <div className="relative overflow-hidden bg-gradient-to-br from-card to-muted border border-border rounded-3xl p-10 sm:p-14 text-center shadow-[var(--shadow-card)]">
          <div aria-hidden className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-teal/15 blur-3xl" />
          <div aria-hidden className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-amber/15 blur-3xl" />
          <div className="relative">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-teal to-teal/70 text-white flex items-center justify-center shadow-[var(--shadow-amber)] mb-6">
              <Wrench className="w-8 h-8" strokeWidth={1.6} />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-teal mb-3">
              {de ? "Hinweis" : "Notice"}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
              {de ? "Diese Seite wird gerade überarbeitet." : "Currently under revision."}
            </h2>
            <p className="mt-4 text-foreground/75 max-w-xl mx-auto leading-relaxed">
              {de
                ? "Wir aktualisieren unsere Forschungsübersicht. In Kürze finden Sie hier detaillierte Informationen zu unseren laufenden Programmen."
                : "We are updating our research overview. Detailed information about our ongoing programmes will be available here shortly."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
