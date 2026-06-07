import { useState, type ReactNode } from "react";
import { ChevronDown, Linkedin, Sparkles } from "lucide-react";

import { Placeholder, SectionTitle } from "@/components/site/Bits";
import communityImage from "@/assets/whoweare-community.jpg";
import type { Lang } from "@/content/site";
import { geneFmt } from "@/lib/gene";
import reinhardPhoto from "@/assets/reinhard-pell-portrait.jpg";
import edithPhoto from "@/assets/edith-pell-portrait.jpg";
import katriPhoto from "@/assets/katri-rouvali.jpg";
import edithRockenschaubPhoto from "@/assets/edith-rockenschaub.jpeg";
import krezelPhoto from "@/assets/krezel-simon.jpg";
import bowlingPhoto from "@/assets/rodney-bowling.png";
import michaudPhoto from "@/assets/jacques-michaud.jpg";
import ivanaPhoto from "@/assets/volunteers/ivana.jpeg";
import wittneyPhoto from "@/assets/volunteers/wittney.jpeg";
import biswadipPhoto from "@/assets/volunteers/biswadip.jpeg";
import kathiPhoto from "@/assets/volunteers/kathi.jpeg";

const photos: Record<string, string> = {
  "Reinhard Pell": reinhardPhoto,
  "Edith Pell": edithPhoto,
  "Katri Rouvali": katriPhoto,
  "Edith Rockenschaub": edithRockenschaubPhoto,
};

const volunteerPhotos: Record<string, string> = {
  "Ivana Ursić Ivić": ivanaPhoto,
  "Wittney Sadler": wittneyPhoto,
  "Biswadip Sinha": biswadipPhoto,
  "Kathi Carl": kathiPhoto,
};

import ingePhoto from "@/assets/inge-meijer.jpeg";
import valeriePhoto from "@/assets/sab/valerie-chu.jpg";

const sabPhotos: Record<string, string> = {
  "Dr. Wojciech Krezel": krezelPhoto,
  "Rodney A. Bowling Jr, PhD": bowlingPhoto,
  "Prof. Jacques L. Michaud, MD, FRCP": michaudPhoto,
  "Inge Meijer, MD, PhD, FRCP": ingePhoto,
  "Valerie Chu, MD": valeriePhoto,
};

const board = [
  { name: "Reinhard Pell", role: { en: "Founder & Chairman", de: "Gründer & Vorsitzender" },
    bio: { en: "Reinhard is from Salzburg, Austria. He earned his Ph.D. in Analytical Chemistry from the University of Vienna and has built a long-standing career in the pharmaceutical industry. Over the years, he has led development units working on novel drugs progressing in clinical trials, including RNA therapeutics.\n\nThe devastating diagnosis of Simon's ultra-rare and debilitating disease — without any available treatment options — profoundly changed his life. Together with his wife, Edith, Reinhard founded Cure MCOPS12 with a bold and deeply personal mission: to make the impossible possible by finding a therapy for MCOPS12 patients and enabling them to live better and brighter lives. In his spare time Reinhard loves doing sports and spending time in nature — alpine hiking, skiing, or having a swim with his children.",
            de: "Reinhard stammt aus Salzburg, Österreich. Er promovierte in Analytischer Chemie an der Universität Wien und hat eine langjährige Karriere in der pharmazeutischen Industrie aufgebaut. Über die Jahre hat er Entwicklungsabteilungen geleitet, die an neuartigen Arzneimitteln in klinischen Studien arbeiten, darunter RNA-Therapeutika.\n\nDie verheerende Diagnose der ultra-seltenen und schwer beeinträchtigenden Erkrankung seines Sohnes — ohne verfügbare Behandlungsoptionen — veränderte sein Leben tiefgreifend. Gemeinsam mit seiner Frau Edith gründete Reinhard Cure MCOPS12 mit einer mutigen und zutiefst persönlichen Mission: das Unmögliche möglich zu machen, indem eine Therapie für MCOPS12-Patient:innen gefunden wird, damit sie ein besseres und helleres Leben führen können. In seiner Freizeit liebt es Reinhard, Sport zu treiben und Zeit in der Natur zu verbringen — Bergwandern, Skifahren oder Schwimmen mit seinen Kindern." },
    linkedin: "https://www.linkedin.com/in/reinhard-pell-88a1657b/", featured: true },
  { name: "Edith Pell", role: { en: "Co-Founder & Vice Chairwoman", de: "Mitgründerin & Stellv. Vorsitzende" },
    bio: { en: "Edith holds a master's degree in Social Sciences and has worked as a social worker for over a decade. Together with her husband Reinhard, she manages a busy family life raising their two children Simon and his little sister. Driven by a deep love for her family, Edith is fully committed to providing the best possible life for Simon. She strongly believes that her husband's expertise in drug development, combined with the vital support of family and friends, will successfully lead to a cure for MCOPS12.\n\nIn her free time, she clears her mind by hiking and running in the beautiful mountains surrounding Salzburg.",
            de: "Edith hat einen Master in Sozialwissenschaften und arbeitet seit über einem Jahrzehnt als Sozialarbeiterin. Gemeinsam mit ihrem Mann Reinhard meistert sie einen geschäftigen Familienalltag und zieht ihre beiden Kinder Simon und seine kleine Schwester groß. Getragen von einer tiefen Liebe zu ihrer Familie ist Edith voll und ganz dafür engagiert, Simon das bestmögliche Leben zu ermöglichen. Sie ist fest davon überzeugt, dass die Expertise ihres Mannes in der Wirkstoffentwicklung, verbunden mit der wichtigen Unterstützung von Familie und Freunden, erfolgreich zu einer Therapie für MCOPS12 führen wird.\n\nIn ihrer Freizeit klärt sie ihren Kopf beim Wandern und Laufen in den schönen Bergen rund um Salzburg." },
    linkedin: "https://www.linkedin.com/in/edith-pell-17149b411/", featured: true },
  { name: "Edith Rockenschaub", role: { en: "Treasurer", de: "Kassierin" },
    bio: { en: "Edith is from Hagenberg, Austria. She serves as the treasurer of Cure MCOPS12, bringing valuable knowledge and experience in accounting to the role. Professionally, Edith works as an accounting clerk at a construction company.\n\nEdith and Simon's mom have known each other since childhood, so when she learned about Simon's situation, she and her partner immediately stepped in to support the Pell family in every way they could. Outside of work, when she needs a break from numbers and invoices, Edith enjoys gardening and baking homemade bread.",
            de: "Edith stammt aus Hagenberg, Österreich. Sie ist Kassierin von Cure MCOPS12 und bringt wertvolles Wissen und Erfahrung im Rechnungswesen in diese Rolle ein. Beruflich arbeitet Edith als Buchhalterin in einem Bauunternehmen.\n\nEdith und Simons Mama kennen sich seit Kindertagen, sodass sie und ihr Partner, als sie von Simons Situation erfuhren, sofort einsprangen, um die Familie Pell auf jede erdenkliche Weise zu unterstützen. Außerhalb der Arbeit, wenn sie eine Pause von Zahlen und Rechnungen braucht, genießt Edith das Gärtnern und das Backen von selbstgemachtem Brot." },
    linkedin: "https://www.linkedin.com/in/edith-rockenschaub-8272b1231/", featured: true },
  { name: "Katri Rouvali", role: { en: "Secretary", de: "Schriftführerin" },
    bio: { en: "Katri is a Finnish expatriate based in Salzburg, Austria, with over 20 years of experience in pharmaceutical product development as a scientist and leader. Her international career brought her to the same company as Reinhard, forming a lifelong friendship with the Pell family. Specializing in parenteral drug products, she is driven by a passion for turning seemingly impossible challenges into achievable outcomes. This dedication fuels her strong commitment to supporting Cure MCOPS12.\n\nOutside of work, Katri enjoys sports especially alpine skiing, participating in international sports event management, and knitting at home. Despite living abroad, she remains deeply connected to her Finnish roots, which continue to shape her values, resilience, and outlook on life.",
            de: "Katri ist eine finnische Auswanderin und lebt in Salzburg, Österreich. Sie verfügt über mehr als 20 Jahre Erfahrung in der pharmazeutischen Produktentwicklung als Wissenschaftlerin und Führungskraft. Ihre internationale Karriere führte sie in dasselbe Unternehmen wie Reinhard und begründete eine lebenslange Freundschaft mit der Familie Pell. Spezialisiert auf parenterale Arzneimittel, wird sie von der Leidenschaft angetrieben, scheinbar unmögliche Herausforderungen in erreichbare Ergebnisse zu verwandeln. Dieses Engagement nährt ihre starke Verbundenheit mit Cure MCOPS12.\n\nAußerhalb der Arbeit liebt Katri den Sport, insbesondere alpines Skifahren, engagiert sich im internationalen Sportevent-Management und strickt zu Hause. Trotz ihres Lebens im Ausland bleibt sie ihren finnischen Wurzeln tief verbunden, die ihre Werte, Widerstandskraft und Lebenseinstellung weiterhin prägen." },
    linkedin: "https://www.linkedin.com/in/rouvalikatri/", featured: true },
];

const volunteers = [
  { name: "Ivana Ursić Ivić", role: { en: "Volunteer", de: "Volontärin" },
    bio: { en: "Ivana is from Split, Croatia. She is an engineer and drug development specialist and currently works as a project manager. After meeting Reinhard, she was inspired by his dedication to securing a therapy not only for his son but for all MCOPS12 patients, and felt motivated to contribute. In her free time, Ivana enjoys traveling, bouldering, and spending time with her husband and cats.",
            de: "Ivana stammt aus Split, Kroatien. Sie ist Ingenieurin und Spezialistin für Wirkstoffentwicklung und arbeitet derzeit als Projektmanagerin. Nachdem sie Reinhard kennengelernt hatte, war sie inspiriert von seinem Engagement, nicht nur für seinen Sohn, sondern für alle MCOPS12-Patient:innen eine Therapie zu sichern, und fühlte sich motiviert, einen Beitrag zu leisten. In ihrer Freizeit reist Ivana gerne, geht bouldern und verbringt Zeit mit ihrem Mann und ihren Katzen." },
    linkedin: "https://www.linkedin.com/in/ivana-ursi%C4%87-ivi%C4%87-7ba114113/" },
  { name: "Kathi Carl", role: { en: "Volunteer", de: "Volontärin" },
    bio: { en: "Kathi is from Thuringia, Germany. Trained as a chemist, she currently works as a project manager. She became involved with Cure MCOPS12 after being touched by the Pell family's story and, as a mother herself, feeling a deep connection to their determination to do everything possible for their family. In her free time, Kathi enjoys hiking with her family, playing basketball, and reading.",
            de: "Kathi stammt aus Thüringen, Deutschland. Ausgebildet als Chemikerin arbeitet sie derzeit als Projektmanagerin. Sie engagiert sich bei Cure MCOPS12, nachdem sie von der Geschichte der Familie Pell berührt war und als Mutter selbst eine tiefe Verbundenheit mit ihrer Entschlossenheit empfand, alles Mögliche für ihre Familie zu tun. In ihrer Freizeit wandert Kathi gerne mit ihrer Familie, spielt Basketball und liest." } },
];


const sab = [
  { name: "Dr. Wojciech Krezel", title: "Research Director, IGBMC", url: "https://www.igbmc.fr/en/recherche/teams/brain-development-and-physiology", bio: "Dr. Wojciech Krezel is a Research Director at the French National Institute of Health and Medical Research (INSERM) and leads a research team at the IGBMC focused on brain development and function. He obtained his Ph.D. from the University of Strasbourg under the mentorship of Prof. Pierre Chambon, where he investigated the role of vitamin A signaling in vertebrate development. He subsequently pursued postdoctoral training in the laboratory of Prof. Paul Chapman at Cardiff University (Wales, UK), expanding his expertise into neurobiology.\n\nOver the course of his career, Dr. Krezel provided the first evidence for a critical role of vitamin A in brain function. Using specialized mouse models, his work demonstrated that different receptors of retinoic acid (the biologically active form of vitamin A) play distinct roles in regulating motor function, memory, and emotional processing. Uncovering the mechanisms underlying this regulation remains a central focus of his team, with the goal of improving our understanding, treatment, and prevention of human neurological disorders.\n\nHis research has delivered the first insights into the function of retinoic acid receptor beta (RARB) and the pathogenic impact of rare RARB variants that cause MCOPS12. In close collaboration with Dr. Jacques Michaud, his team has developed mouse models of MCOPS12 that faithfully reproduce key features of the disease, including progressive neurological symptoms. These models provide an essential platform for studying disease mechanisms and identifying biomarkers needed for improved patient stratification and for monitoring therapeutic efficacy prior to clinical trials.\n\nThe findings directly support the development of Simon's personalized ASO therapy, as well as broader drug repurposing efforts for all MCOPS12 patients. This work is made possible through very close and mutually stimulating partnerships with the patient advocacy organizations Cure MCOPS12 and A Cure for Sophia and Friends." },
  { name: "Rodney A. Bowling Jr, PhD", title: "Chief Scientific Officer, RareLabs (A Division of AlphaRose Therapeutics)", bio: "Dr. Rodney A. Bowling Jr. serves as the Chief Science Officer of RareLabs (A division of AlphaRose Therapeutics) and To Cure A Rose Foundation (TCAR), dedicating his career to leading scientific strategy and therapeutic development for children with rare monogenic diseases. He earned his Ph.D. in Medical Sciences in 2008 from the Texas A&M University Health Science Center, Institute of Biosciences and Technology. Over his career, Dr. Bowling has directed large scientific teams through the complex design, optimization, and advancement of RNA- and gene-based therapies, successfully guiding numerous programs through FDA and international clinical trials. In addition to his executive leadership, he actively advises patient-led rare disease foundations, including serving on the Scientific Advisory Board for the Saving Sasha from SLC6A1 and Cure for Casey Foundation.\n\nApplying his extensive translational expertise to MCOPS12, Dr. Bowling and his team delivered critical foundational work for Simon's ASO therapy. Using long-read sequencing, they identified insertions and deletions (indels) within Simon's mutant RARB allele, revealing ideal and highly specific target sites for ASO development. Building on this key genetic insight, the team successfully designed and screened allele-specific ASOs, resulting in several promising candidates for further therapeutic development.\n\nBeyond Simon's personalized ASO therapy, Dr. Bowling and his team are also developing functional readouts in a MCOPS12 patient-derived neuronal cell model. This model will form the basis for a large-scale drug repurposing screen aimed at identifying additional therapeutic opportunities for MCOPS12." },
  { name: "Prof. Jacques L. Michaud, MD, FRCP", title: "Director, Centre de recherche Azrieli du CHU Sainte-Justine; Professor of Pediatrics and Neurosciences, Université de Montréal", url: "https://www.chusj.org/Biography?id=66412bca-6e3c-4bee-b1e6-30d8c88d07d7&lang=en" },
  { name: "Inge Meijer, MD, PhD, FRCP", title: "Child Neurologist, CHU Sainte-Justine; Assistant Clinical Professor, Department of Neurosciences and Department of Pediatrics, Université de Montréal", url: "https://www.chusj.org/Biography?id=a9ea81e4-2dfc-4d16-9d9c-fb47fa484f65&lang=en" },
];


export default function WhoWeAre({ lang }: { lang: Lang }) {
  return (
    <>
      <PageHero
        eyebrow={lang === "de" ? "Über uns" : "About us"}
        title={lang === "de" ? <>Wer wir <HeroAccent>sind</HeroAccent></> : <>Who We <HeroAccent>Are</HeroAccent></>}
        sub={lang === "de"
          ? "Cure MCOPS12 ist ein österreichischer Verein, der das Leben von MCOPS12-Patient:innen verbessert und die Forschung zu einer Therapie beschleunigt. Wir sind außerdem eine Plattform für Familien, Forschende und medizinische Fachkräfte."
          : "Cure MCOPS12 is an Austrian nonprofit organization dedicated to improving the lives of those affected by syndromic microphthalmia 12 (MCOPS12) and accelerating research to find a cure. We also provide a platform for connection between families, researchers, and healthcare professionals."} />

      <section className="container-tight pb-16">
        <div className="bg-gradient-to-br from-teal to-[hsl(173_58%_28%)] text-white rounded-3xl p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-amber font-semibold">{lang === "de" ? "Unsere Mission" : "Our Mission"}</p>
          <p className="mt-3 font-display text-2xl md:text-3xl leading-snug text-balance">
            {lang === "de"
              ? "Unsere Mission ist es, Bewusstsein zu schaffen und Forschung für eine Heilung von MCOPS12 zu finanzieren."
              : "Our mission is to raise awareness and fund research toward a cure for MCOPS12."}
          </p>
        </div>
      </section>

      {/* Featured board */}
      <section className="container-wide py-16">
        <SectionTitle eyebrow={lang === "de" ? "Vorstand" : "Board"} title={lang === "de" ? "Vorstandsmitglieder" : "Board Members"} />
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {board.filter(b => b.featured).map(b => (
            <BoardCard key={b.name} b={b} lang={lang} />
          ))}
        </div>
      </section>

      {/* Volunteers */}
      <section className="bg-muted/40 py-20">
        <div className="container-wide">
          <SectionTitle eyebrow={lang === "de" ? "Team" : "Team"} title={lang === "de" ? "Unsere Volontär:innen" : "Volunteers"} />
          <div className="grid md:grid-cols-2 gap-8">
            {volunteers.map(v => (
              <VolunteerCard key={v.name} v={v} lang={lang} />
            ))}
          </div>
        </div>
      </section>


      {/* SAB */}
      <section className="container-wide py-20">
        <SectionTitle eyebrow={lang === "de" ? "Wissenschaft" : "Science"} title={lang === "de" ? "Wissenschaftlicher Beirat" : "Scientific Advisory Board"} />
        <div className="grid sm:grid-cols-2 gap-6">
          {sab.map(s => (
            <SabCard key={s.name} s={s} lang={lang} photo={sabPhotos[s.name]} />
          ))}
        </div>
      </section>
    </>
  );
}

function SabCard({ s, lang, photo }: { s: any; lang: Lang; photo?: string }) {
  const [open, setOpen] = useState(false);
  const de = lang === "de";
  const hasBio = !!s.bio;
  const Tag: any = s.url ? "a" : "div";
  const props = s.url ? { href: s.url, target: "_blank", rel: "noreferrer" } : {};
  return (
    <Tag {...props}
      className={`bg-card rounded-2xl border border-border p-6 flex gap-5 items-start ${s.url ? "hover:border-teal hover:shadow-[var(--shadow-card)]" : ""} transition`}>
      {photo ? (
        <img src={photo} alt={s.name}
          style={{ width: 88, height: 88, objectFit: "cover", objectPosition: "center top", borderRadius: "9999px" }}
          className="shrink-0" />
      ) : (
        <div className="placeholder-img shrink-0 text-xs" style={{ width: 88, height: 88, borderRadius: "9999px" }}>
          {s.name.split(" ")[0]}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h4 className="font-display text-xl font-bold text-navy">{s.name}</h4>
        <p className="text-sm text-foreground/75 mt-2">{s.title}</p>
        {hasBio && (
          <>
            <div className={`grid transition-all ${open ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="text-sm text-foreground/70 leading-relaxed whitespace-pre-line">{geneFmt(s.bio ?? "")}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(o => !o); }}
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-teal"
            >
              {open ? (de ? "Weniger" : "Show less") : (de ? "Mehr lesen" : "Read more")}
              <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
          </>
        )}
      </div>
    </Tag>
  );
}

function BoardCard({ b, lang }: { b: typeof board[number]; lang: Lang }) {
  const [open, setOpen] = useState(false);
  const de = lang === "de";
  const bioText = b.bio[lang];
  const collapsed = bioText.length > 220 ? bioText.slice(0, 220).trimEnd() + "…" : bioText;
  const needsToggle = bioText.length > 220;
  return (
    <div className="bg-card rounded-3xl overflow-hidden border border-border flex flex-col h-full">
      <Placeholder
        label={b.name}
        src={photos[b.name]}
        objectFit="contain"
        objectPosition="center"
        className="aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] max-h-[280px] sm:max-h-[300px] md:max-h-[320px] !rounded-none shrink-0 bg-muted"
      />
      <div className="p-7 flex flex-col flex-1">
        <h3 className="font-display text-2xl font-bold text-navy">{b.name}</h3>
        <p className="text-teal font-semibold mt-1">{b.role[lang]}</p>
        <p className="text-foreground/75 mt-4 leading-relaxed whitespace-pre-line">
          {geneFmt(needsToggle && !open ? collapsed : bioText)}
        </p>
        {needsToggle && (
          <button
            type="button"
            onClick={() => setOpen(o => !o)}
            className="mt-3 self-start inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-teal"
          >
            {open ? (de ? "Weniger" : "Show less") : (de ? "Mehr lesen" : "Read more")}
            <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        )}
        {b.linkedin && (
          <a href={b.linkedin} target="_blank" rel="noreferrer" className="mt-4 self-start inline-flex items-center gap-1 text-xs font-semibold text-navy hover:text-teal"><Linkedin className="w-3.5 h-3.5"/> LinkedIn</a>
        )}
      </div>
    </div>
  );
}

function VolunteerCard({ v, lang }: { v: typeof volunteers[number]; lang: Lang }) {
  const [open, setOpen] = useState(false);
  const photo = volunteerPhotos[v.name];
  const de = lang === "de";
  return (
    <div className="bg-card rounded-3xl border border-border p-8 flex flex-col sm:flex-row gap-6 items-start hover:shadow-[var(--shadow-card)] transition-shadow">
      {photo ? (
        <img src={photo} alt={v.name}
          style={{ width: 160, height: 160, objectFit: "cover", objectPosition: "center top", borderRadius: "9999px" }}
          className="shrink-0 mx-auto sm:mx-0" />
      ) : (
        <div className="placeholder-img shrink-0 mx-auto sm:mx-0 text-xs" style={{ width: 160, height: 160, borderRadius: "9999px" }}>
          {v.name.split(" ")[0]}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h4 className="font-display text-2xl font-bold text-navy">{v.name}</h4>
        <p className="text-sm text-teal font-semibold mt-1">{v.role[lang]}</p>
        <div className={`grid transition-all ${open ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden">
            <p className="text-sm leading-relaxed text-foreground/80 whitespace-pre-line">{geneFmt(v.bio[lang])}</p>
            {v.linkedin && (
              <a href={v.linkedin} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-navy hover:text-teal"><Linkedin className="w-3.5 h-3.5"/> LinkedIn</a>
            )}
          </div>
        </div>
        <button onClick={() => setOpen(o => !o)} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-teal">
          {open ? (de ? "Weniger" : "Show less") : (de ? "Mehr lesen" : "Read more")}
          <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
    </div>
  );
}


export function HeroAccent({ children }: { children: ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-amber to-amber/70 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

export function PageHero({ eyebrow, title, sub, tags }: { eyebrow?: string; title: ReactNode; sub?: ReactNode; tags?: string[] }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/40 via-background to-background">
      <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-teal/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-32 w-[32rem] h-[32rem] rounded-full bg-amber/15 blur-3xl" />
      <div className="container-wide relative pt-20 pb-20 md:pt-24 md:pb-24">
        <div className="max-w-3xl space-y-6 animate-fade-in">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-teal/30 px-4 py-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-teal" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-teal">{eyebrow}</span>
            </div>
          )}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance text-navy">
            {title}
          </h1>
          {sub && (
            <p className="text-lg sm:text-xl text-foreground/75 max-w-2xl leading-relaxed">
              {sub}
            </p>
          )}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-navy">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" /> {b}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
