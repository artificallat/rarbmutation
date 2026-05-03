import { Mail } from "lucide-react";
import { PageHero } from "@/pages/WhoWeAre";
import { socials, type Lang } from "@/content/site";
import nhsImage from "@/assets/natural-history.jpg";

export default function NaturalHistory({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHero
        eyebrow={de ? "Patientenregister" : "Patient registry"}
        title={de ? "Natural History Study" : "Natural History Study"}
        sub={de
          ? "Eine umfassende Längsschnittstudie, die medizinische Daten von MCOPS12-Familien weltweit sammelt – als Grundlage für klinische Studien und neue Therapien."
          : "A comprehensive longitudinal study collecting medical data from MCOPS12 families worldwide — the foundation for clinical trials and new therapies."}
      />

      <section className="container-tight pb-16">
        <figure className="rounded-3xl overflow-hidden border border-border mb-10">
          <img
            src={nhsImage}
            alt={de ? "Natural History Study – Patientenregister und longitudinale Daten" : "Natural History Study – patient registry and longitudinal data"}
            className="w-full h-auto object-cover"
            loading="lazy"
            width={1920}
            height={1080}
          />
        </figure>

        <p className="text-lg leading-relaxed text-foreground/80">
          {de
            ? "Eine Natural History Study ist eine behördliche Voraussetzung für jede klinische Studie. Unsere Studie baut ein Patientenregister auf – mit umfassenden longitudinalen medizinischen Daten von MCOPS12-Familien weltweit. Sie ermöglicht es Forschenden, Fälle zu vergleichen, neue Phänotypen zu entdecken und Familien bei neuen Erkenntnissen erneut zu kontaktieren."
            : "A natural history study is required by health authorities before a clinical trial can be conducted. Our study is building a patient registry — collecting comprehensive longitudinal medical data from MCOPS12 families worldwide. This allows researchers to compare cases, discover new phenotypes, and re-contact families as discoveries are made."}
        </p>

        <div className="mt-10 bg-teal text-white rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
          <p className="font-medium">{de ? "Mehr erfahren oder teilnehmen?" : "Want more information or to participate?"}</p>
          <a href={`mailto:${socials.email}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber text-navy font-semibold hover:bg-amber-deep transition">
            <Mail className="w-4 h-4" /> {socials.email}
          </a>
        </div>
      </section>
    </>
  );
}
