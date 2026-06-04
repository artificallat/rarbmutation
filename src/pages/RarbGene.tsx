import { ExternalLink } from "lucide-react";
import { SectionTitle } from "@/components/site/Bits";
import { PageHero } from "@/pages/WhoWeAre";
import type { Lang } from "@/content/site";
import rarbProtein from "@/assets/rarb-protein.jpg";

export default function RarbGene({ lang }: { lang: Lang }) {
  const de = lang === "de";

  return (
    <>
      <PageHero
        eyebrow="RARB"
        title={de ? <>Das <em>RARB</em>-Gen</> : <>The <em>RARB</em> gene</>}
        sub={de
          ? "Diese Seite erklärt das Gen hinter MCOPS12: wo es liegt, wofür es codiert und warum es für die frühe Entwicklung so wichtig ist."
          : "This page focuses on the gene behind MCOPS12: where it is located, what it encodes and why it matters during early development."}
      />

      <section className="container-tight pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              {de
                ? <><em>RARB</em> steht für Retinoic Acid Receptor Beta. Das Gen liegt auf Chromosom 3p24.2 und enthält die Bauanleitung für das RARβ-Protein. Dieses Protein gehört zu den nukleären Rezeptoren: Es wirkt im Zellkern und beeinflusst dort, welche Gene aktiv oder inaktiv sind.</>
                : <><em>RARB</em> stands for retinoic acid receptor beta. The gene is located on chromosome 3p24.2 and provides the instructions for making the RARβ protein. This protein belongs to the nuclear receptor family: it acts inside the cell nucleus and influences which genes are switched on or off.</>}
            </p>
            <p>
              {de
                ? "Aktiviert wird RARβ durch Retinsäure, einen Metaboliten von Vitamin A. Während der Entwicklung steuert dieser Signalweg wichtige Programme in verschiedenen Organen — besonders in Augen, Gehirn, Herz, Zwerchfell und Verdauungstrakt."
                : "RARβ is activated by retinoic acid, a metabolite of vitamin A. During development, this signalling pathway helps coordinate important genetic programs in several organs — especially the eyes, brain, heart, diaphragm and digestive tract."}
            </p>
            <p>
              {de
                ? <>Wenn eine krankheitsverursachende Variante im <em>RARB</em>-Gen vorliegt, kann diese präzise Regulation gestört werden. Genau deshalb kann eine einzelne Veränderung in diesem Gen weitreichende Auswirkungen auf Entwicklung, Bewegung, Sehen, Schlucken und Sprache haben.</>
                : <>When a disease-causing variant affects <em>RARB</em>, this precise regulation can be disrupted. That is why a single change in this gene can have wide-ranging effects on development, movement, vision, swallowing and speech.</>}
            </p>
          </div>
          <figure className="rounded-2xl overflow-hidden border border-border bg-muted">
            <img src={rarbProtein} alt={de ? "RARβ-Protein an DNA gebunden" : "RARβ protein bound to DNA"} className="w-full aspect-square object-cover" loading="lazy" />
          </figure>
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="container-tight">
          <SectionTitle eyebrow={de ? "Mehr erfahren" : "Learn more"} title={de ? "Genetische Referenzen" : "Genetic references"} />
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "NIH National Library of Medicine", href: "https://www.ncbi.nlm.nih.gov/gene/5915" },
              { label: "GeneCards: RARB", href: "https://www.genecards.org/cgi-bin/carddisp.pl?gene=RARB" },
            ].map(ref => (
              <a key={ref.href} href={ref.href} target="_blank" rel="noreferrer" className="bg-card border border-border rounded-2xl p-5 flex items-center justify-between hover:border-teal transition">
                <span className="font-semibold text-navy">{ref.label}</span>
                <ExternalLink className="w-4 h-4 text-teal shrink-0 ml-3" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}