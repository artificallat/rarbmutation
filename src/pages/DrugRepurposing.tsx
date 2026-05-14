import { Mouse, FlaskConical, TestTube2, Pill, BrainCircuit, ScanSearch, CheckCircle2, Clock } from "lucide-react";
import { PageHero } from "./WhoWeAre";
import { SectionTitle } from "@/components/site/Bits";
import { Reveal, Counter } from "@/components/site/Reveal";
import type { Lang } from "@/content/site";

export default function DrugRepurposing({ lang }: { lang: Lang }) {
  const de = lang === "de";

  const path1 = de
    ? {
        tag: "Pfad 1",
        title: "Mausmodell-Studien",
        institute: "IGBMC, Frankreich · Dr. Wojciech Krezel",
        intro: "Fünf bereits zugelassene oder in klinischer Prüfung befindliche Wirkstoffe werden im MCOPS12-Mausmodell auf Wirksamkeit gegen Hypotonie, Dystonie und kognitive Beeinträchtigungen getestet.",
        steps: [
          { icon: Mouse, t: "Mausmodell", d: "MCOPS12-Mausmodell mit Patientenmutation." },
          { icon: Pill, t: "5 Wirkstoffe", d: "Bekannt aus anderen neurologischen Indikationen." },
          { icon: BrainCircuit, t: "Bewertung", d: "Verhalten, Motorik und Kognition." },
          { icon: CheckCircle2, t: "Klinische Übertragung", d: "Schneller Weg in die Klinik." },
        ],
        chips: ["IGBMC", "5 Wirkstoffe", "in vivo"],
        status: { label: de ? "Laufend" : "Ongoing", icon: Clock, tone: "amber" as const },
      }
    : {
        tag: "Path 1",
        title: "Mouse model studies",
        institute: "IGBMC, France · Dr. Wojciech Krezel",
        intro: "Five drugs already approved or in clinical trials for other neurological diseases are being evaluated in MCOPS12 mouse models for improvement of hypotonia, dystonia and cognitive impairment.",
        steps: [
          { icon: Mouse, t: "Mouse model", d: "MCOPS12 mouse model carrying the patient mutation." },
          { icon: Pill, t: "5 candidate drugs", d: "Drawn from other neurological indications." },
          { icon: BrainCircuit, t: "Read-outs", d: "Behaviour, motor function and cognition." },
          { icon: CheckCircle2, t: "Clinical translation", d: "Fast path to the clinic." },
        ],
        chips: ["IGBMC", "5 drugs", "in vivo"],
        status: { label: "Ongoing", icon: Clock, tone: "amber" as const },
      };

  const path2 = de
    ? {
        tag: "Pfad 2",
        title: "iPSC-basiertes Wirkstoff-Screening",
        institute: "RareLabs (AlphaRose Therapeutics) / NCATS · finanziert von A Cure for Sophia and Friends",
        intro: "Ein Screening in Simons patientenabgeleitetem neuralen Stammzellmodell. Sobald die Auslese-Parameter etabliert sind, werden rund 10.000 Verbindungen automatisiert getestet — zugelassene Medikamente, Wirkstoffe in klinischen Studien und Naturstoffe.",
        steps: [
          { icon: FlaskConical, t: "iPSC-Modell", d: "Simons patientenabgeleitete neurale Stammzellen." },
          { icon: ScanSearch, t: "Readouts etablieren", d: "Stabile, messbare Auslese-Parameter." },
          { icon: TestTube2, t: "~10.000 Verbindungen", d: "Automatisiertes Hochdurchsatz-Screening." },
          { icon: CheckCircle2, t: "Treffer validieren", d: "Vielversprechende Kandidaten weitertesten." },
        ],
        chips: ["RareLabs", "NCATS", "~10.000 Verbindungen"],
        status: { label: de ? "Aktiv" : "Active", icon: Clock, tone: "teal" as const },
      }
    : {
        tag: "Path 2",
        title: "iPSC-derived cell model screening",
        institute: "RareLabs (AlphaRose Therapeutics) / NCATS · funded by A Cure for Sophia and Friends",
        intro: "A drug repurposing study in Simon's patient-derived neural stem cell model. Once read-outs are established, automated screening of about 10,000 compounds (approved drugs, drugs in clinical trials, natural compounds) will be performed.",
        steps: [
          { icon: FlaskConical, t: "iPSC model", d: "Simon's patient-derived neural stem cells." },
          { icon: ScanSearch, t: "Establish read-outs", d: "Stable, measurable assay parameters." },
          { icon: TestTube2, t: "~10,000 compounds", d: "Automated high-throughput screening." },
          { icon: CheckCircle2, t: "Hit validation", d: "Advance the most promising candidates." },
        ],
        chips: ["RareLabs", "NCATS", "~10,000 compounds"],
        status: { label: "Active", icon: Clock, tone: "teal" as const },
      };

  return (
    <>
      <PageHero
        eyebrow={de ? "Fachkreise" : "Professionals"}
        title="Drug Repurposing"
        sub={de
          ? "Wirkstoff-Repurposing identifiziert neue therapeutische Anwendungen für bereits zugelassene oder klinisch getestete Medikamente. Bei ultra-seltenen Erkrankungen wie MCOPS12 verkürzt der bekannte Sicherheitsstatus den Weg zur Behandlung dramatisch."
          : "Drug repurposing identifies new therapeutic uses for already approved or clinically tested drugs. For ultra-rare diseases like MCOPS12, known safety profiles dramatically shorten the path to treatment."}
      />

      <section className="container-wide pb-20">
        <Reveal>
          <SectionTitle
            eyebrow={de ? "Zwei parallele Wege" : "Two parallel paths"}
            title={de ? "Wir verfolgen zwei Repurposing-Programme gleichzeitig" : "We pursue two repurposing programmes in parallel"}
            center
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6">
          {[path1, path2].map((path, idx) => {
            const StatusIcon = path.status.icon;
            const accent = idx === 0 ? "teal" : "amber";
            return (
              <Reveal key={path.title} delay={idx * 150}>
                <div className="bg-card border border-border rounded-3xl p-7 sm:p-8 h-full hover:-translate-y-2 hover:shadow-2xl hover:border-teal transition-all duration-300 group flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <p className={`text-xs uppercase tracking-[0.2em] font-semibold ${accent === "teal" ? "text-teal" : "text-amber"}`}>{path.tag}</p>
                    <span className={`inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold rounded-full px-3 py-1 ${path.status.tone === "teal" ? "bg-teal/10 text-teal" : "bg-amber/15 text-amber"}`}>
                      <StatusIcon className="w-3.5 h-3.5" /> {path.status.label}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy">{path.title}</h3>
                  <p className="text-sm text-teal font-semibold mt-1">{path.institute}</p>
                  <p className="mt-4 text-foreground/80 leading-relaxed">{path.intro}</p>

                  {/* Pipeline */}
                  <div className="mt-6 relative">
                    <div className="grid grid-cols-4 gap-2 sm:gap-3">
                      {path.steps.map((step, sIdx) => {
                        const Icon = step.icon;
                        return (
                          <div key={step.t} className="relative flex flex-col items-center text-center group/step">
                            {sIdx < path.steps.length - 1 && (
                              <span className={`hidden sm:block absolute top-6 left-[60%] right-[-40%] h-0.5 ${accent === "teal" ? "bg-teal/30" : "bg-amber/30"}`} />
                            )}
                            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center relative z-10 transition-all duration-300 ${accent === "teal" ? "bg-teal/10 text-teal group-hover/step:bg-teal group-hover/step:text-white" : "bg-amber/15 text-amber group-hover/step:bg-amber group-hover/step:text-navy"} group-hover/step:scale-110 group-hover/step:rotate-3`}>
                              <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                            </div>
                            <p className="mt-2 font-display text-xs sm:text-sm font-bold text-navy leading-tight">{step.t}</p>
                            <p className="hidden sm:block mt-1 text-[11px] text-foreground/65 leading-snug">{step.d}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Chips */}
                  <div className="mt-auto pt-6 flex flex-wrap gap-2">
                    {path.chips.map(c => (
                      <span key={c} className={`text-xs font-semibold px-3 py-1 rounded-full ${accent === "teal" ? "bg-teal/10 text-teal" : "bg-amber/15 text-amber"}`}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Why this matters */}
        <Reveal>
          <div className="mt-12 bg-gradient-to-br from-navy to-navy-deep text-white rounded-3xl p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-amber font-semibold mb-3">
              {de ? "Warum Repurposing?" : "Why repurposing?"}
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-balance">
              {de
                ? "Bekannte Sicherheitsprofile verkürzen den Weg zur Behandlung — entscheidend bei ultra-seltenen Erkrankungen."
                : "Known safety profiles shorten the path to treatment — critical for ultra-rare diseases."}
            </h3>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                { to: 5, prefix: "", l: de ? "Wirkstoffe in der Maus" : "drugs tested in mouse", duration: 1400 },
                { to: 10000, prefix: "~", l: de ? "Verbindungen im Screening" : "compounds in screening", duration: 2400 },
                { to: 2, prefix: "", l: de ? "parallele Programme" : "parallel programmes", duration: 1200 },
              ].map((s, i) => (
                <Reveal key={s.l} delay={i * 120}>
                  <div className="text-center">
                    <Counter
                      to={s.to}
                      prefix={s.prefix}
                      duration={s.duration}
                      format={(n) => n.toLocaleString(de ? "de-AT" : "en-US")}
                      className="font-display text-4xl font-bold text-amber"
                    />
                    <p className="text-sm text-white/85 mt-1">{s.l}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
