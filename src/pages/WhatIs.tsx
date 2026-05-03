import { ExternalLink } from "lucide-react";
import { SectionTitle } from "@/components/site/Bits";
import { PageHero } from "@/pages/WhoWeAre";
import type { Lang } from "@/content/site";
import rarbProtein from "@/assets/rarb-protein.jpg";
import rarbMutation from "@/assets/rarb-mutation.jpg";

export default function WhatIs({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHero eyebrow={de ? "Die Krankheit" : "The disease"} title={de ? "Was ist MCOPS12?" : "What is MCOPS12?"}
        sub={de
          ? "Syndromale Mikrophthalmie 12 (MCOPS12) ist eine ultra-seltene neurologische Entwicklungsstörung, ausgelöst durch Mutationen im RARB-Gen. Erstmals 2013 in der wissenschaftlichen Literatur beschrieben, fasst das jüngste systematische Review (2023) klinische Daten von 52 Patient:innen weltweit zusammen – damit zählt MCOPS12 zu den seltensten bekannten Erkrankungen. Da viele Kinder fälschlich mit Zerebralparese oder einer unspezifischen Entwicklungsstörung diagnostiziert werden, ist die tatsächliche Zahl wahrscheinlich höher."
          : "Syndromic Microphthalmia 12 (MCOPS12) is an ultra-rare neurodevelopmental disorder caused by mutations in the retinoic acid receptor beta (RARB) gene. First described in scientific literature in 2013, the most recent systematic review (2023) compiled clinical data from 52 individuals worldwide — making MCOPS12 one of the rarest disorders known. Because many children may be misdiagnosed with cerebral palsy or an unspecified neurodevelopmental disorder, the true number of affected individuals is likely higher."} />

      <section className="container-tight pb-20">
        <div className="bg-navy text-white rounded-3xl p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-amber font-semibold mb-4">{de ? "Wichtige Fakten" : "Key Facts"}</p>
          <ul className="grid sm:grid-cols-2 gap-3 text-white/90">
            {(de ? [
              "Ultra-seltene neurologische Entwicklungsstörung durch RARB-Genmutationen",
              "Auch RARB-assoziierte Erkrankung genannt",
              "Häufigste Mutation: p.R387C (~1/3 der Patient:innen)",
              "Typisch: Augenfehlbildungen, Hypotonie, progressive Dystonie/Spastik, Sprachverzögerung, Fütterprobleme",
              "Schweregrad sehr unterschiedlich",
              "Bislang keine zugelassene Therapie",
            ] : [
              "Ultra-rare neurodevelopmental disorder caused by RARB gene mutations",
              "Also referred to as RARB-related disorder",
              "Most frequent mutation: p.R387C (found in ~1/3 of patients)",
              "Common features: eye defects, hypotonia, progressive dystonia/spasticity, language delay, feeding difficulties",
              "Severity varies widely between patients",
              "No approved treatment currently exists",
            ]).map(k => (
              <li key={k} className="flex gap-3"><span className="text-amber font-bold">●</span><span>{k}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-tight pb-20">
        <SectionTitle eyebrow="RARB" title={de ? "Das RARB-Gen" : "The RARB Gene"} />
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <p className="text-lg leading-relaxed text-foreground/80">
            {de
              ? "Das Gen für den Retinsäure-Rezeptor Beta (RARB) liegt auf Chromosom 3 (3p24.2) und kodiert das RARβ-Protein – einen nukleären Rezeptor und Transkriptionsfaktor, der durch Retinsäure (ein Vitamin-A-Metabolit) aktiviert wird. RARβ steuert die Expression vieler Gene und ist zentral für die Entwicklung von Augen, Zwerchfell, Herz, Verdauungstrakt und Gehirn."
              : "The retinoic acid receptor beta (RARB) gene is located on chromosome 3 (3p24.2). It encodes the RARβ protein — a nuclear receptor and transcription factor activated by retinoic acid (a metabolite of vitamin A). RARβ regulates the expression of many genes, playing a pivotal role in the development of the eyes, diaphragm, heart, digestive tract, and brain."}
          </p>
          <div className="rounded-2xl overflow-hidden border border-border aspect-square bg-muted">
            <img src={rarbProtein} alt={de ? "RARβ-Protein an DNA gebunden" : "RARβ protein bound to DNA"} className="w-full h-full object-cover" loading="lazy" width={1024} height={1024} />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          {[
            { l: "NIH National Library of Medicine", h: "https://ghr.nlm.nih.gov/gene/RARB#conditions" },
            { l: "GeneCards: RARB", h: "https://www.genecards.org/cgi-bin/carddisp.pl?gene=RARB" },
          ].map(r => (
            <a key={r.h} href={r.h} target="_blank" rel="noreferrer" className="bg-card border border-border rounded-2xl p-5 flex items-center justify-between hover:border-teal transition">
              <span className="font-semibold text-navy">{r.l}</span><ExternalLink className="w-4 h-4 text-teal"/>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container-tight">
          <SectionTitle eyebrow={de ? "Pathophysiologie" : "Pathophysiology"} title={de ? "Die Krankheit" : "The Disease"} />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden border border-border aspect-square bg-muted">
              <img src={rarbMutation} alt={de ? "Punktmutation im RARB-Gen" : "Point mutation in the RARB gene"} className="w-full h-full object-cover" loading="lazy" width={1024} height={1024} />
            </div>
            <p className="text-lg leading-relaxed text-foreground/80">
              {de
                ? "MCOPS12 wird in der Regel autosomal-dominant vererbt – eine Mutation in nur einer Genkopie genügt. In den meisten Familien entsteht die Mutation spontan (de novo). Das mutierte RARβ-Protein stört die Transkription wichtiger Zielgene, besonders im Striatum und präfrontalen Kortex – das erklärt die Bewegungsstörungen und kognitiven Beeinträchtigungen der Patient:innen."
                : "MCOPS12 is usually an autosomal dominant condition — a mutation in just one copy of the RARB gene is enough to cause the disorder. In most families, the gene change happens spontaneously (de novo variant). The mutated RARβ protein causes impaired transcription of genes in various target cells — affecting eye development, the diaphragm, heart, and critically, the striatum and prefrontal cortex in the brain, which explains the movement disorders and cognitive impairment seen in patients."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
