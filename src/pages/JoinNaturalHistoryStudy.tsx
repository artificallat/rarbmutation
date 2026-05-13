import { ClipboardList, Activity, Users, Mail, FileText } from "lucide-react";
import { PageHero } from "./WhoWeAre";
import { SectionTitle } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { AsoWorkflowFigure } from "@/components/site/AsoWorkflowFigure";
import type { Lang } from "@/content/site";

export default function JoinNaturalHistoryStudy({ lang }: { lang: Lang }) {
  const de = lang === "de";

  const features = de
    ? [
        { icon: ClipboardList, t: "Jährliche Fragebögen", d: "Teilnehmer- und Arzt-Fragebögen sowie das Hochladen von MRT-Bildern und Patientenvideos." },
        { icon: Activity, t: "Erweiterte Biomarker (ab 2026)", d: "EEG sowie metabolomische und proteomische Analysen aus Blutplasmaproben." },
        { icon: Users, t: "Offen für alle Altersgruppen", d: "Personen jeden Alters, aus jedem Land, mit pathogenen oder wahrscheinlich pathogenen RARB-Varianten können teilnehmen." },
      ]
    : [
        { icon: ClipboardList, t: "Annual questionnaires", d: "Participant and physician questionnaires plus uploads of brain MRIs and short participant videos." },
        { icon: Activity, t: "Expanded biomarkers (from 2026)", d: "EEG together with metabolomic and proteomic analyses of patient blood plasma samples." },
        { icon: Users, t: "Open to all ages", d: "Individuals of any age, from any country, carrying pathogenic or likely pathogenic variants in the RARB gene are eligible." },
      ];

  return (
    <>
      <PageHero
        eyebrow={de ? "Familien" : "Families"}
        title={de ? "Nimm an der Natural History Study teil" : "Join the Natural History Study"}
        sub={de
          ? "In Zusammenarbeit mit A Cure for Sophia and Friends, A Cure for Sienna und Cure MCOPS12 hat das CHU Sainte-Justine 2024 die MCOPS12 (RARB) Natural History Study gestartet."
          : "In collaboration with A Cure for Sophia and Friends, A Cure for Sienna and Cure MCOPS12, CHU Sainte-Justine launched the MCOPS12 (RARB) Natural History Study in 2024."}
      />

      <section className="container-tight pb-12 space-y-6 text-foreground/85 leading-relaxed text-lg">
        <p>
          {de
            ? "Eine Natural History Study ist eine medizinische Studie, die untersucht, wie sich eine Erkrankung über die Zeit entwickelt. Sie testet keine neuen Medikamente — stattdessen wird der natürliche Verlauf der Krankheit sorgfältig dokumentiert."
            : "A natural history study is a type of medical study that helps researchers understand how a disease develops and changes over time. It does not involve testing new drugs — instead, it carefully observes and documents the disease as it naturally progresses."}
        </p>
        <p>
          {de
            ? "Gerade bei seltenen Erkrankungen wie MCOPS12 sind solche Studien entscheidend. Da nur wenige Betroffene bekannt sind und die Symptome stark variieren können, schaffen sie die Basis für bessere Versorgung — und liefern die Daten, die für jede zukünftige klinische Studie zwingend gebraucht werden."
            : "Natural history studies are especially important for rare diseases like MCOPS12. With few affected individuals and widely varying symptoms, they are a promising path to better care and provide the baseline data that any future clinical trial will rely on."}
        </p>
      </section>

      <section className="container-wide pb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.t} delay={i * 120}>
              <div className="bg-card border border-border rounded-2xl p-6 h-full hover:-translate-y-1 hover:shadow-xl hover:border-teal transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-4 group-hover:bg-teal group-hover:text-white transition-colors">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy">{f.t}</h3>
                <p className="text-foreground/80 mt-2 leading-relaxed text-base">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-tight pb-12">
        <Reveal>
          <div className="bg-gradient-to-br from-navy to-navy-deep text-white rounded-3xl p-10 shadow-[var(--shadow-card)]">
            <SectionTitle eyebrow={de ? "Interessiert?" : "Interested?"} title={de ? "Werde Teil der Studie" : "Become part of the study"} />
            <p className="text-white/90 leading-relaxed -mt-2">
              {de
                ? "Kontaktiere Valerie Chu, genetische Beraterin und Studienkoordinatorin am CHU Sainte-Justine."
                : "Reach out to Valerie Chu, genetic counsellor and study coordinator at CHU Sainte-Justine."}
            </p>
            <a
              href="mailto:valerie.chu.hsj@ssss.gouv.qc.ca"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3 font-semibold text-navy hover:brightness-95 transition"
            >
              <Mail className="w-4 h-4" />
              valerie.chu.hsj@ssss.gouv.qc.ca
            </a>
          </div>
        </Reveal>
      </section>

      <section className="container-wide pb-20">
        <div className="grid sm:grid-cols-2 gap-6">
          <a
            href="https://ern-ithaca.eu/our-research-activities/calls-for-collaboration/rarb-natural-history-study/"
            target="_blank"
            rel="noreferrer"
            className="bg-card border border-border rounded-2xl p-6 hover:border-teal hover:shadow-xl transition-all flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-navy">{de ? "Studien-Übersicht (ERN-ITHACA)" : "Study overview (ERN-ITHACA)"}</h4>
              <p className="text-sm text-teal font-semibold mt-1 break-all">ern-ithaca.eu/.../rarb-natural-history-study</p>
            </div>
          </a>
          <a
            href="https://www.chusj.org/en/centre-recherche"
            target="_blank"
            rel="noreferrer"
            className="bg-card border border-border rounded-2xl p-6 hover:border-teal hover:shadow-xl transition-all flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-navy">CHU Sainte-Justine</h4>
              <p className="text-sm text-teal font-semibold mt-1">{de ? "Studienzentrum, Université de Montréal" : "Host research centre, Université de Montréal"}</p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
