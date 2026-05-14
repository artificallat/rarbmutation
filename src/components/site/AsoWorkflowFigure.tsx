import { Dna, Microscope, Rat, Stethoscope, ArrowRight, type LucideIcon } from "lucide-react";
import { useInView } from "@/components/site/Reveal";
import type { Lang } from "@/content/site";

type Status = "done" | "ongoing" | "planned";

type Col = {
  icon: LucideIcon;
  title: string;
  blocks: { heading: string; body: React.ReactNode }[];
  status: Status;
  statusLabel: string;
};

export function AsoWorkflowFigure({ lang, caption = true }: { lang: Lang; caption?: boolean }) {
  const de = lang === "de";

  const cols: Col[] = de
    ? [
        {
          icon: Dna,
          title: "Zielidentifikation & ASO-Design",
          status: "done",
          statusLabel: "Abgeschlossen",
          blocks: [
            { heading: "Long-Read-Sequenzierung", body: <>der <em>RARB</em>-Allele</> },
            { heading: "Zielstellen-Identifikation", body: <>Zusätzliche Mutationen auf der mutierten <em>RARB</em>-Kopie</> },
            { heading: "ASO-Design & in-silico-Bewertung", body: <>möglicher Off-Target-Effekte</> },
          ],
        },
        {
          icon: Microscope,
          title: "Wirksamkeit & Sicherheit in Simons Zellmodell",
          status: "done",
          statusLabel: "Abgeschlossen",
          blocks: [
            { heading: "Wirksamkeits-Screening", body: <>{">"} 110 ASOs auf allelspezifischen Knockdown getestet</> },
            { heading: "Sicherheitsprüfung", body: <>Immuntoxizität · Zytotoxizität · Off-Target-Effekte</> },
          ],
        },
        {
          icon: Rat,
          title: "In-vivo-Sicherheitsstudien",
          status: "ongoing",
          statusLabel: "Laufend, 2. Hälfte 2026",
          blocks: [
            { heading: "1. Studie · 6 ASO-Kandidaten", body: <>Akute Toxizität · Bioverteilung</> },
            { heading: "2. Studie · Lead-Kandidat", body: <>Chronische Toxizität · Pharmakokinetik · Maximaldosis für die klinische Studie</> },
          ],
        },
        {
          icon: Stethoscope,
          title: "Klinische Studie & erwartete Wirkung",
          status: "planned",
          statusLabel: "In Vorbereitung",
          blocks: [
            { heading: "Klinische Studie", body: <>Named-Patient-Use-Programm in Österreich · intrathekale Verabreichung</> },
            { heading: "Erwartete Wirkung", body: <>Sichere, gut verträgliche Behandlung · verbesserte Hirnfunktion durch Knockdown des mutierten <em>RARB</em> · weniger Bewegungsstörungen · bessere kognitive Fähigkeiten</> },
          ],
        },
      ]
    : [
        {
          icon: Dna,
          title: "Target identification & ASO design",
          status: "done",
          statusLabel: "Completed",
          blocks: [
            { heading: "Long-read sequencing", body: <>of <em>RARB</em> alleles</> },
            { heading: "Target site identification", body: <>Additional mutations on the mutant <em>RARB</em> allele</> },
            { heading: "ASO design & in-silico evaluation", body: <>of off-target effects</> },
          ],
        },
        {
          icon: Microscope,
          title: "Efficacy & safety testing in Simon's cell model",
          status: "done",
          statusLabel: "Completed",
          blocks: [
            { heading: "Efficacy testing", body: <>{">"} 110 ASOs screened for allele-specific knockdown</> },
            { heading: "Safety testing", body: <>Immunotoxicity · Cytotoxicity · Off-target effects</> },
          ],
        },
        {
          icon: Rat,
          title: "In vivo safety studies",
          status: "ongoing",
          statusLabel: "Ongoing, 2nd half of 2026",
          blocks: [
            { heading: "1st study · 6 ASO candidates", body: <>Acute toxicity · Biodistribution</> },
            { heading: "2nd study · lead ASO candidate", body: <>Chronic toxicity · Pharmacokinetics · Maximum dose for the clinical trial</> },
          ],
        },
        {
          icon: Stethoscope,
          title: "Clinical trial & expected outcomes",
          status: "planned",
          statusLabel: "In preparation",
          blocks: [
            { heading: "Clinical trial", body: <>Named patient use programme in Austria · intrathecal injection</> },
            { heading: "Expected outcomes", body: <>Treatment expected to be safe and well-tolerated · improved brain function via knockdown of mutant <em>RARB</em> · reduction in movement disorders · improved cognitive skills</> },
          ],
        },
      ];

  const statusClass = (s: Status) =>
    s === "done"
      ? "bg-teal/10 text-teal border-teal/30"
      : s === "ongoing"
      ? "bg-amber/15 text-amber-deep border-amber/40"
      : "bg-muted text-foreground/70 border-border";

  const dotClass = (s: Status) =>
    s === "done"
      ? "bg-teal"
      : s === "ongoing"
      ? "bg-amber animate-pulse"
      : "bg-foreground/40";

  const { ref, inView } = useInView<HTMLDivElement>();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  // Top progress rail (2 of 4 done = 50%)
  const progressPct = 50;

  return (
    <figure ref={ref} className="rounded-3xl border border-border bg-card overflow-hidden shadow-sm">
      {/* Animated top progress rail */}
      <div className="relative h-2 w-full bg-muted">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-teal via-teal to-amber"
          style={{
            width: inView ? `${progressPct}%` : "0%",
            transition: "width 1600ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      </div>

      <div className="relative grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
        {/* Connector arrows between columns (desktop) */}
        <div className="hidden md:block pointer-events-none absolute inset-0">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute top-[112px] -translate-y-1/2 z-10"
              style={{ left: `calc(${(i / 4) * 100}% - 14px)` }}
            >
              <div
                className={`w-7 h-7 rounded-full bg-card border border-border flex items-center justify-center text-teal shadow-sm transition-all duration-700`}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "scale(1)" : "scale(0.6)",
                  transitionDelay: `${600 + i * 250}ms`,
                }}
              >
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </div>
            </div>
          ))}
        </div>

        {cols.map((c, i) => {
          const Icon = c.icon;
          const isOpen = openIdx === i;
          return (
            <div
              key={c.title}
              className="group relative p-6 flex flex-col cursor-pointer transition-colors hover:bg-muted/30"
              onClick={() => setOpenIdx(isOpen ? null : i)}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 700ms ease ${i * 180}ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 180}ms`,
              }}
            >
              {/* Step number badge */}
              <div className="absolute top-4 right-4 text-[10px] font-display font-bold text-teal/60 tracking-widest">
                0{i + 1}
              </div>

              <h4 className="font-display text-base font-bold text-teal text-center leading-snug min-h-[3rem] pr-6">
                {c.title}
              </h4>

              <div className="my-5 flex justify-center">
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-2xl bg-teal/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden
                  />
                  <div className="relative w-16 h-16 rounded-2xl bg-teal/10 text-teal flex items-center justify-center transition-all duration-300 group-hover:bg-teal group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="w-8 h-8" strokeWidth={1.6} />
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm text-foreground/80 leading-relaxed flex-1">
                {c.blocks.map((b, bi) => (
                  <div
                    key={bi}
                    className="border-l-2 border-transparent group-hover:border-teal/40 pl-3 transition-colors duration-300"
                  >
                    <p className="font-semibold text-navy">{b.heading}</p>
                    <p>{b.body}</p>
                  </div>
                ))}
              </div>

              <div
                className={`mt-5 self-center inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold rounded-full px-3 py-1 border ${statusClass(c.status)}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${dotClass(c.status)}`} />
                {c.statusLabel}
              </div>
            </div>
          );
        })}
      </div>

      {caption && (
        <figcaption className="text-sm text-foreground/70 p-4 border-t border-border">
          <strong className="text-navy">{de ? "Abbildung 2:" : "Figure 2:"}</strong>{" "}
          {de
            ? "Entwicklungs-Workflow der allelspezifischen ASO-Therapie — personalisiert für Simon, übertragbar auf viele MCOPS12-Patient:innen."
            : "Allele-specific ASO therapy development workflow — personalised for Simon, transferable to many MCOPS12 patients."}
        </figcaption>
      )}
    </figure>
  );
}
