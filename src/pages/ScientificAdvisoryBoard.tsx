import { PageHero, HeroAccent } from "./WhoWeAre";
import type { Lang } from "@/content/site";

const advisors = [
  { name: "Dr. Wojciech Krezel", title: "Research Director, IGBMC", url: "https://www.igbmc.fr/en/igbmc/a-propos-de-ligbmc/directory/wojciech-krezel" },
  { name: "Rodney A. Bowling Jr, PhD", title: "Chief Scientific Officer, RareLabs (AlphaRose Therapeutics)", url: "https://hopeatrarelabs.com/" },
  { name: "Jacques L. Michaud, MD, FRCP", title: "Director, Centre de recherche Azrieli du CHU Sainte-Justine; Professor of Pediatrics and Neurosciences, Université de Montréal", url: "https://www.chusj.org/Biography?id=66412bca-6e3c-4bee-b1e6-30d8c88d07d7&lang=en" },
  { name: "Inge Meijer, MD, PhD", title: "Child Neurologist, CHU Sainte-Justine; Assistant Clinical Professor, Université de Montréal", url: "https://www.chusj.org/Biography?id=a9ea81e4-2dfc-4d16-9d9c-fb47fa484f65&lang=en" },
  { name: "Valerie Chu, MD", title: "Scientific Advisor — RARB Natural History Study" },
];

export default function ScientificAdvisoryBoard({ lang }: { lang: Lang }) {
  return (
    <>
      <PageHero
        eyebrow={lang === "de" ? "Wissenschaft" : "Science"}
        title={<>Scientific <HeroAccent>Advisory</HeroAccent> Board</>}
        sub={lang === "de"
          ? "Biografien und Porträtfotos folgen in Kürze."
          : "Biographies and portrait photos will be added soon."}
      />
      <section className="container-wide pb-20">
        <div className="grid sm:grid-cols-2 gap-6">
          {advisors.map(a => (
            <a key={a.name} href={a.url} target="_blank" rel="noreferrer"
              className="bg-card rounded-2xl border border-border p-6 hover:border-teal hover:shadow-[var(--shadow-card)] transition block overflow-hidden break-words">
              <h4 className="font-display text-xl font-bold text-navy">{a.name}</h4>
              <p className="text-sm text-foreground/75 mt-2">{a.title}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
