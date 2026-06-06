import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import type { Lang } from "@/content/site";

const SITE = "https://rarbmutation.lovable.app";

type Meta = { title: string; description: string };

const meta: Record<string, { en: Meta; de: Meta }> = {
  "/": {
    en: { title: "Cure MCOPS12 — Hope for Every MCOPS12 Child", description: "Austrian nonprofit funding RNA therapy research for Syndromic Microphthalmia 12 (RARB). Help bring a treatment to Simon and every MCOPS12 child." },
    de: { title: "Cure MCOPS12 — Hoffnung für jedes MCOPS12-Kind", description: "Österreichischer Verein, der RNA-Therapieforschung für Syndromales Mikrophthalmie 12 (RARB) finanziert. Hilf uns, eine Behandlung für Simon zu finden." },
  },
  "who-we-are": {
    en: { title: "Who We Are — Cure MCOPS12", description: "Meet the Austrian nonprofit driving research and treatment development for MCOPS12, an ultra-rare RARB-linked neurodevelopmental disease." },
    de: { title: "Über uns — Cure MCOPS12", description: "Lerne den österreichischen Verein kennen, der Forschung und Therapieentwicklung für die ultra-seltene RARB-Erkrankung MCOPS12 vorantreibt." },
  },
  "what-is-mcops12": {
    en: { title: "What is MCOPS12? — Syndromic Microphthalmia 12", description: "MCOPS12 (Syndromic Microphthalmia 12) is a rare RARB-linked disorder affecting eyes, muscles and the brain. Symptoms, genetics and outlook explained." },
    de: { title: "Was ist MCOPS12? — Syndromale Mikrophthalmie 12", description: "MCOPS12 ist eine seltene RARB-bedingte Erkrankung, die Augen, Muskeln und Gehirn betrifft. Symptome, Genetik und Verlauf erklärt." },
  },
  "rarb-gene": {
    en: { title: "The RARB Gene and MCOPS12", description: "How mutations in the RARB gene disrupt retinoic acid signalling and cause MCOPS12. Genetic background, references and resources." },
    de: { title: "Das RARB-Gen und MCOPS12", description: "Wie Mutationen im RARB-Gen die Retinsäure-Signalwege stören und MCOPS12 verursachen. Genetischer Hintergrund und Referenzen." },
  },
  "mcops12-disease": {
    en: { title: "MCOPS12 Disease — Symptoms and Course", description: "Clinical symptoms, organ involvement and disease course of MCOPS12 — visual, motor, cognitive and developmental impact." },
    de: { title: "Die MCOPS12-Erkrankung — Symptome und Verlauf", description: "Klinische Symptome, betroffene Organe und Krankheitsverlauf von MCOPS12 — visuelle, motorische, kognitive Auswirkungen." },
  },
  "meet-our-kids": {
    en: { title: "Meet Our Kids — MCOPS12 Children", description: "Stories and photos of children worldwide living with MCOPS12. The faces behind our mission for a treatment." },
    de: { title: "Unsere Kinder — Kinder mit MCOPS12", description: "Geschichten und Fotos von Kindern weltweit, die mit MCOPS12 leben. Die Gesichter hinter unserer Mission." },
  },
  "achievements": {
    en: { title: "Our Achievements — Cure MCOPS12", description: "Milestones in research, fundraising and patient community building since the founding of Cure MCOPS12." },
    de: { title: "Unsere Erfolge — Cure MCOPS12", description: "Meilensteine in Forschung, Fundraising und Aufbau der Patientengemeinschaft seit Gründung von Cure MCOPS12." },
  },
  "research": {
    en: { title: "Research — Path to a MCOPS12 Treatment", description: "Two complementary scientific strategies for MCOPS12: drug repurposing for symptoms and ASO/RNA therapy targeting the genetic cause." },
    de: { title: "Forschung — Weg zur MCOPS12-Therapie", description: "Zwei wissenschaftliche Strategien für MCOPS12: Wirkstoff-Repurposing für Symptome und ASO/RNA-Therapie für die genetische Ursache." },
  },
  "network": {
    en: { title: "Our Network — Research Partners and Patient Community", description: "Clinicians, scientists, patient organisations and partners collaborating with Cure MCOPS12 across Europe, North America and beyond." },
    de: { title: "Unser Netzwerk — Forschungspartner und Community", description: "Kliniker, Wissenschaftler und Patientenorganisationen, die mit Cure MCOPS12 weltweit zusammenarbeiten." },
  },
  "natural-history": {
    en: { title: "MCOPS12 Natural History Study", description: "Understanding the natural progression of MCOPS12 — the foundation for measuring future treatment effects in clinical trials." },
    de: { title: "MCOPS12 Natural History Study", description: "Verständnis des natürlichen Verlaufs von MCOPS12 — die Grundlage zur Messung künftiger Therapieeffekte in klinischen Studien." },
  },
  "donate": {
    en: { title: "Donate — Fund the Cure for MCOPS12", description: "Your donation funds RNA therapy research and drug repurposing studies for MCOPS12. Every euro brings Simon closer to a treatment." },
    de: { title: "Spenden — Finanziere die Therapie für MCOPS12", description: "Deine Spende finanziert RNA-Therapieforschung und Wirkstoff-Repurposing für MCOPS12. Jeder Euro bringt Simon der Behandlung näher." },
  },
  "news": {
    en: { title: "News and Updates — Cure MCOPS12", description: "Latest news on MCOPS12 research, fundraising events, and milestones from Cure MCOPS12 and our partner organisations." },
    de: { title: "News und Updates — Cure MCOPS12", description: "Aktuelles zu MCOPS12-Forschung, Spendenaktionen und Meilensteinen von Cure MCOPS12 und unseren Partnerorganisationen." },
  },
  "vereinsorgane": {
    en: { title: "Association Organs — Cure MCOPS12", description: "Board, committees and governance bodies of the Cure MCOPS12 nonprofit association." },
    de: { title: "Vereinsorgane — Cure MCOPS12", description: "Vorstand, Ausschüsse und Organe des Vereins Cure MCOPS12." },
  },
  "organisation": {
    en: { title: "Organisation — Cure MCOPS12", description: "Governance and organisational structure of the Cure MCOPS12 nonprofit association." },
    de: { title: "Organisation — Cure MCOPS12", description: "Aufbau und Organisationsstruktur des Vereins Cure MCOPS12." },
  },
  "scientific-advisory-board": {
    en: { title: "Scientific Advisory Board — Cure MCOPS12", description: "World-class scientists and clinicians guiding our research strategy for MCOPS12 and RARB-related disorders." },
    de: { title: "Wissenschaftlicher Beirat — Cure MCOPS12", description: "Internationale Wissenschaftler und Kliniker, die unsere Forschungsstrategie für MCOPS12 leiten." },
  },
  "plain-language-mcops12": {
    en: { title: "MCOPS12 in Plain Language", description: "A clear, plain-language introduction to MCOPS12 for families, friends and supporters — without medical jargon." },
    de: { title: "MCOPS12 einfach erklärt", description: "Eine verständliche Einführung zu MCOPS12 für Familien, Freunde und Unterstützer — ohne Fachjargon." },
  },
  "funded-rd-programs": {
    en: { title: "Funded R&D Programs — Cure MCOPS12", description: "Research and drug-development programs funded by Cure MCOPS12, A Cure for Sophia and Friends, and A Cure for Sienna since 2019." },
    de: { title: "Geförderte Forschungsprogramme — Cure MCOPS12", description: "Forschungs- und Wirkstoffentwicklungs­programme, die von Cure MCOPS12 und Schwestervereinen seit 2019 finanziert werden." },
  },
  "a-cure-for-sophia-and-friends": {
    en: { title: "A Cure for Sophia and Friends — Sister Nonprofit", description: "Our US-based sister nonprofit A Cure for Sophia and Friends, co-funding MCOPS12 research and drug development." },
    de: { title: "A Cure for Sophia and Friends — Schwesterverein", description: "Unser US-Schwesterverein A Cure for Sophia and Friends, der MCOPS12-Forschung mitfinanziert." },
  },
  "a-cure-for-sienna": {
    en: { title: "A Cure for Sienna — Sister Nonprofit", description: "Our Australian sister nonprofit A Cure for Sienna, co-funding research and drug development for MCOPS12." },
    de: { title: "A Cure for Sienna — Schwesterverein", description: "Unser australischer Schwesterverein A Cure for Sienna, der MCOPS12-Forschung mitfinanziert." },
  },
  "drug-repurposing": {
    en: { title: "Drug Repurposing for MCOPS12", description: "Testing existing approved drugs in MCOPS12 mouse and cell models to fast-track symptomatic treatments for patients." },
    de: { title: "Wirkstoff-Repurposing für MCOPS12", description: "Test zugelassener Wirkstoffe in MCOPS12-Maus- und Zellmodellen für eine schnelle symptomatische Therapie." },
  },
  "aso-therapy": {
    en: { title: "Simon's ASO Therapy — RNA Treatment for MCOPS12", description: "An antisense oligonucleotide (ASO) therapy designed to silence the mutated RARB allele and treat the genetic cause of MCOPS12." },
    de: { title: "Simons ASO-Therapie — RNA-Behandlung für MCOPS12", description: "Eine Antisense-Oligonukleotid-Therapie, die das mutierte RARB-Allel ausschaltet und die genetische Ursache von MCOPS12 behandelt." },
  },
  "our-story": {
    en: { title: "Our Story — How Cure MCOPS12 Started", description: "How a family's diagnosis became a global nonprofit working to cure MCOPS12 — Simon's story and the founding of Cure MCOPS12." },
    de: { title: "Unsere Geschichte — Wie Cure MCOPS12 entstand", description: "Wie aus einer Familiendiagnose ein internationaler Verein zur Heilung von MCOPS12 wurde — Simons Geschichte." },
  },
  "join-natural-history-study": {
    en: { title: "Join the MCOPS12 Natural History Study", description: "Information for MCOPS12 families on how to participate in the international Natural History Study at CHU Sainte-Justine." },
    de: { title: "An der MCOPS12 Natural History Study teilnehmen", description: "Informationen für MCOPS12-Familien zur Teilnahme an der internationalen Natural History Study am CHU Sainte-Justine." },
  },
  "natural-history-study": {
    en: { title: "Natural History Study — MCOPS12", description: "Goals, design and partners of the international MCOPS12 Natural History Study, the foundation for future clinical trials." },
    de: { title: "Natural History Study — MCOPS12", description: "Ziele, Design und Partner der internationalen MCOPS12 Natural History Study, Grundlage für klinische Studien." },
  },
  "newly-diagnosed": {
    en: { title: "Newly Diagnosed with MCOPS12 — A Family Guide", description: "A practical guide for families just receiving an MCOPS12 diagnosis: first steps, resources, community and hope." },
    de: { title: "Neu diagnostiziert mit MCOPS12 — Familienratgeber", description: "Praktischer Leitfaden für Familien nach einer MCOPS12-Diagnose: erste Schritte, Ressourcen, Community und Hoffnung." },
  },
  "imprint": {
    en: { title: "Imprint — Cure MCOPS12", description: "Legal imprint and contact information for the Austrian nonprofit association Cure MCOPS12." },
    de: { title: "Impressum — Cure MCOPS12", description: "Impressum und Kontaktinformationen des österreichischen Vereins Cure MCOPS12." },
  },
  "privacy": {
    en: { title: "Privacy Policy — Cure MCOPS12", description: "How Cure MCOPS12 handles personal data on this website, in accordance with GDPR." },
    de: { title: "Datenschutz — Cure MCOPS12", description: "Wie Cure MCOPS12 personenbezogene Daten auf dieser Website gemäß DSGVO verarbeitet." },
  },
};

function keyFromPath(pathname: string, lang: Lang): string {
  let p = pathname.replace(/\/+$/, "");
  if (lang === "de") p = p.replace(/^\/de/, "");
  if (p === "" || p === "/") return "/";
  return p.replace(/^\//, "");
}

export default function RouteSeo({ lang }: { lang: Lang }) {
  const { pathname } = useLocation();
  const key = keyFromPath(pathname, lang);
  const entry = meta[key]?.[lang] ?? meta["/"][lang];
  const canonical = `${SITE}${pathname.replace(/\/+$/, "") || "/"}`;
  return (
    <Helmet>
      <html lang={lang} />
      <title>{entry.title}</title>
      <meta name="description" content={entry.description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={entry.title} />
      <meta property="og:description" content={entry.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={entry.title} />
      <meta name="twitter:description" content={entry.description} />
    </Helmet>
  );
}
