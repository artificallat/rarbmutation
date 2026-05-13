import { FileText, Database, Microscope, Activity, Mail, FlaskConical } from "lucide-react";
import { PageHero } from "./WhoWeAre";
import { SectionTitle } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { AsoWorkflowFigure } from "@/components/site/AsoWorkflowFigure";
import type { Lang } from "@/content/site";

export default function NaturalHistoryStudy({ lang }: { lang: Lang }) {
  const de = lang === "de";

  const dataset = de
    ? [
        { i: Database, t: "Genotyp", d: "RARB-Variante (HGVS), Vererbungsmuster, segregierende Familienmitglieder, ergänzende Long-Read-Sequenzierung zur Allel-Phasing-Analyse." },
        { i: Microscope, t: "Phänotyp & Bildgebung", d: "Strukturierte neurologische Untersuchung, MRT des Gehirns (T1/T2/FLAIR), ophthalmologische Befunde (Mikrophthalmie, Sehnerv, Retina), Krampfanfälle, Ernährung." },
        { i: Activity, t: "Funktionelle Outcomes", d: "GMFM, MAS, BFMDRS-M; standardisierte Entwicklungs- und Sprachtests; Patient-/Caregiver-Reported Outcomes (Schlaf, Schmerz, Lebensqualität)." },
        { i: FlaskConical, t: "Biomarker (ab 2026)", d: "EEG, Plasma-Metabolomik und -Proteomik zur Identifikation longitudinaler Krankheitsmarker." },
      ]
    : [
        { i: Database, t: "Genotype", d: "RARB variant (HGVS), inheritance pattern, segregating family members, complementary long-read sequencing for allele phasing." },
        { i: Microscope, t: "Phenotype & imaging", d: "Structured neurological examination, brain MRI (T1/T2/FLAIR), ophthalmological findings (microphthalmia, optic nerve, retina), seizures, feeding." },
        { i: Activity, t: "Functional outcomes", d: "GMFM, MAS, BFMDRS-M; standardised developmental and language assessments; patient/caregiver-reported outcomes (sleep, pain, quality of life)." },
        { i: FlaskConical, t: "Biomarkers (from 2026)", d: "EEG, plasma metabolomics and proteomics to identify longitudinal disease markers." },
      ];

  return (
    <>
      <PageHero
        eyebrow={de ? "Fachkreise" : "Professionals"}
        title={de ? "Natural History Study" : "Natural History Study"}
        sub={de
          ? "Internationales Patientenregister und prospektive Längsschnittstudie zur Charakterisierung des Krankheitsverlaufs bei MCOPS12 — koordiniert am CHU Sainte-Justine, Université de Montréal."
          : "International patient registry and prospective longitudinal study characterising disease course in MCOPS12 — coordinated at CHU Sainte-Justine, Université de Montréal."}
      />

      <section className="container-tight pb-12 pt-12">
        <SectionTitle eyebrow={de ? "Hintergrund" : "Background"} title={de ? "Regulatorische Notwendigkeit" : "Regulatory rationale"} />
        <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
          <Reveal>
            <p>
              {de
                ? "MCOPS12 (OMIM #615524) ist eine ultra-seltene, durch heterozygote Varianten im RARB-Gen verursachte neurodevelopmentale Erkrankung mit weltweit etwa 52 dokumentierten Fällen (Caron et al. 2023). Sowohl EMA als auch FDA verlangen für die Zulassung neuer Therapien — insbesondere für ASO-basierte und andere genspezifische Ansätze — belastbare Naturverlaufsdaten, gegen die eine Behandlungswirkung quantifizierbar ist."
                : "MCOPS12 (OMIM #615524) is an ultra-rare neurodevelopmental disorder caused by heterozygous variants in the RARB gene, with roughly 52 documented cases worldwide (Caron et al. 2023). Both the EMA and FDA require robust natural history data — particularly for ASO-based and other gene-targeted programmes — against which any treatment effect can be quantified."}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              {de
                ? "Die MCOPS12 (RARB) Natural History Study wurde 2024 am CHU Sainte-Justine in Kooperation mit Cure MCOPS12, A Cure for Sophia and Friends sowie A Cure for Sienna initiiert. Ziel ist die prospektive, multizentrische Erfassung standardisierter klinischer, bildgebender und molekularer Endpunkte über mindestens fünf Jahre."
                : "The MCOPS12 (RARB) Natural History Study was launched in 2024 at CHU Sainte-Justine in collaboration with Cure MCOPS12, A Cure for Sophia and Friends, and A Cure for Sienna. It is a prospective multi-centre study capturing standardised clinical, imaging and molecular endpoints over a minimum five-year horizon."}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container-tight">
          <SectionTitle eyebrow={de ? "Studiendesign" : "Study design"} title={de ? "Endpunkte & Datensätze" : "Endpoints & datasets"} />
          <div className="grid sm:grid-cols-2 gap-5">
            {dataset.map((c, i) => (
              <Reveal key={c.t} delay={i * 100}>
                <div className="bg-card border border-border rounded-2xl p-7 h-full hover:-translate-y-1 hover:shadow-xl hover:border-teal transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-teal/10 text-teal flex items-center justify-center mb-4 group-hover:bg-teal group-hover:text-white transition-colors">
                    <c.i className="w-7 h-7" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-navy mb-2">{c.t}</h4>
                  <p className="text-foreground/75 leading-relaxed">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-tight py-20">
        <SectionTitle eyebrow={de ? "Einschluss" : "Eligibility"} title={de ? "Wer kann eingeschlossen werden?" : "Who can be enrolled?"} />
        <ul className="space-y-4 text-lg leading-relaxed text-foreground/85">
          {(de
            ? [
                "Genetisch bestätigte pathogene oder wahrscheinlich pathogene Variante im RARB-Gen (ACMG-Kriterien).",
                "Personen jeden Alters, jedes Geschlechts und aus jedem Land.",
                "Schriftliche Einwilligung von Patient:innen bzw. Erziehungsberechtigten gemäß DSGVO und lokalen Vorgaben.",
                "Bestehende klinische Befunde können retrospektiv eingebracht werden; prospektive Datenerhebung erfolgt jährlich.",
              ]
            : [
                "Genetically confirmed pathogenic or likely pathogenic variant in RARB (ACMG criteria).",
                "Individuals of any age, sex and country of residence.",
                "Written informed consent from patients or legal guardians, in line with GDPR and local regulations.",
                "Existing clinical records may be contributed retrospectively; prospective data collection is annual.",
              ]
          ).map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <li className="flex gap-4 bg-card border border-border rounded-2xl p-5">
                <span className="font-display text-2xl font-bold text-amber leading-none w-8 shrink-0">{i + 1}</span>
                <span>{s}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container-wide">
          <SectionTitle
            eyebrow={de ? "Einbettung" : "How it fits in"}
            title={de ? "Beitrag zum ASO-Entwicklungsprogramm" : "Contribution to the ASO development programme"}
          />
          <div className="space-y-5 text-lg leading-relaxed text-foreground/80 mb-10 max-w-3xl">
            <Reveal>
              <p>
                {de
                  ? "Die Natural History Study liefert die quantitativen Endpunkte (motorisch, kognitiv, ophthalmologisch, biomarkerbasiert), gegen die der Effekt der allelspezifischen ASO-Therapie in der späteren klinischen Phase gemessen wird. Sie verbindet damit die präklinische Pipeline mit dem geplanten Named-Patient-Use-Programm."
                  : "The natural history study provides the quantitative endpoints — motor, cognitive, ophthalmological and biomarker-based — against which the effect of the allele-specific ASO therapy will be measured in the upcoming clinical phase. It connects the preclinical pipeline to the planned named-patient-use programme."}
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <AsoWorkflowFigure lang={lang} />
          </Reveal>
        </div>
      </section>

      <section className="container-wide py-20">
        <SectionTitle eyebrow={de ? "Kollaboration" : "Collaboration"} title={de ? "Studienleitung & Kontakt" : "Study leadership & contact"} />
        <div className="grid md:grid-cols-2 gap-5">
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
            href="mailto:valerie.chu.hsj@ssss.gouv.qc.ca"
            className="bg-card border border-border rounded-2xl p-6 hover:border-teal hover:shadow-xl transition-all flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-navy">Valerie Chu, MSc, CGC</h4>
              <p className="text-sm text-foreground/75 mt-1">{de ? "Genetische Beraterin & Studienkoordinatorin, CHU Sainte-Justine" : "Genetic counsellor & study coordinator, CHU Sainte-Justine"}</p>
              <p className="text-sm text-teal font-semibold mt-2 break-all">valerie.chu.hsj@ssss.gouv.qc.ca</p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
