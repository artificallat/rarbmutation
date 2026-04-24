import { PageHero } from "@/pages/WhoWeAre";
import type { Lang } from "@/content/site";

export default function Imprint({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHero
        eyebrow={de ? "Rechtliches" : "Legal"}
        title={de ? "Impressum" : "Imprint"}
        sub={de ? "Angaben gemäß § 5 ECG und § 25 MedienG." : "Information pursuant to § 5 ECG and § 25 MedienG (Austrian law)."}
      />
      <section className="container-tight pb-24 prose prose-slate max-w-none">
        <h2 className="font-display text-2xl font-bold text-navy mt-2">{de ? "Medieninhaber & Verein" : "Media owner & association"}</h2>
        <p>
          Cure MCOPS12 — {de
            ? "Verein zur Förderung einer Therapieentwicklung für MCOPS12-Patient:innen"
            : "Association for the advancement of therapy development for MCOPS12 patients"}<br />
          4963 St. Peter am Hart, {de ? "Österreich" : "Austria"}<br />
          ZVR: 1002067031
        </p>

        <h2 className="font-display text-2xl font-bold text-navy mt-8">{de ? "Vertretungsberechtigte" : "Authorised representatives"}</h2>
        <p>
          Reinhard Pell ({de ? "Obmann / Vorsitzender" : "Chairman"})<br />
          Edith Pell ({de ? "Stellvertretende Obfrau" : "Vice-Chairwoman"})
        </p>

        <h2 className="font-display text-2xl font-bold text-navy mt-8">{de ? "Kontakt" : "Contact"}</h2>
        <p>
          E-Mail: <a className="text-teal hover:underline" href="mailto:rpell@rarbmutation.org">rpell@rarbmutation.org</a>
        </p>

        <h2 className="font-display text-2xl font-bold text-navy mt-8">{de ? "Vereinszweck" : "Purpose of the association"}</h2>
        <p>
          {de
            ? "Förderung von Bewusstsein, Forschung und Wirkstoffentwicklung für eine Therapie der ultra-seltenen genetischen Erkrankung MCOPS12 (Syndromic Microphthalmia 12)."
            : "Raising awareness, research and drug development for a therapy of the ultra-rare genetic disease MCOPS12 (Syndromic Microphthalmia 12)."}
        </p>

        <h2 className="font-display text-2xl font-bold text-navy mt-8">{de ? "Haftungsausschluss" : "Disclaimer"}</h2>
        <p>
          {de
            ? "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich."
            : "Despite careful content review, we accept no liability for the content of external links. The operators of the linked pages are solely responsible for their content."}
        </p>

        <h2 className="font-display text-2xl font-bold text-navy mt-8">{de ? "Urheberrecht" : "Copyright"}</h2>
        <p>
          {de
            ? "Alle Inhalte dieser Website (Texte, Bilder, Grafiken) sind urheberrechtlich geschützt. Eine Verwendung außerhalb dieser Website ist nur mit ausdrücklicher schriftlicher Zustimmung gestattet."
            : "All content on this website (text, images, graphics) is protected by copyright. Use outside this website is only permitted with express written consent."}
        </p>
      </section>
    </>
  );
}
