import { ExternalLink, Heart, Landmark, CreditCard } from "lucide-react";
import { ProgressBar, SectionTitle } from "@/components/site/Bits";
import { PageHero } from "@/pages/WhoWeAre";
import { donationGoal, socials, type Lang } from "@/content/site";

export default function Donate({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHero eyebrow={de ? "Spenden" : "Donate"}
        title={de ? "Ihre Spende gibt Simon – und jedem MCOPS12-Kind – die Chance auf ein besseres Leben." : "Your donation gives Simon — and every MCOPS12 child — a chance at a better life."} />

      <section className="container-tight pb-16">
        <div className="bg-card rounded-3xl border border-border p-8 sm:p-10 shadow-[var(--shadow-card)]">
          <ProgressBar raised={donationGoal.raised} goal={donationGoal.goal} />
          <p className="text-sm text-muted-foreground mt-4">
            {de
              ? "€600.000–750.000 werden benötigt, um die präklinische Entwicklung abzuschließen und eine klinische Studie / Off-Label-Anwendung vorzubereiten."
              : "€600,000–750,000 needed to complete preclinical development and prepare for clinical trial / off-label use."}
          </p>
        </div>
      </section>

      <section className="container-wide pb-20">
        <SectionTitle eyebrow={de ? "So spenden Sie" : "How to donate"} title={de ? "Drei einfache Wege" : "Three simple ways"} />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-2xl p-7">
            <Landmark className="w-7 h-7 text-teal" />
            <h3 className="font-display text-xl font-bold text-navy mt-4">{de ? "Banküberweisung" : "Bank Transfer"}</h3>
            <dl className="mt-4 text-sm space-y-1 text-foreground/85">
              <div><dt className="inline font-semibold text-navy">Bank: </dt>Raiffeisenbank Region Braunau</div>
              <div><dt className="inline font-semibold text-navy">IBAN: </dt>AT03 3406 0000 0824 3362</div>
              <div><dt className="inline font-semibold text-navy">BIC: </dt>RZOOAT2L060</div>
              <div><dt className="inline font-semibold text-navy">{de ? "Empfänger: " : "Recipient: "}</dt>Cure MCOPS12</div>
            </dl>
          </div>
          <div className="bg-gradient-to-br from-navy to-navy-deep text-white rounded-2xl p-7">
            <Heart className="w-7 h-7 text-amber" />
            <h3 className="font-display text-xl font-bold mt-4">GoFundMe</h3>
            <p className="text-white/85 text-sm mt-3">{de ? "Internationale Spenden bequem online." : "Donate online from anywhere in the world."}</p>
            <a href={socials.gofundme} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber text-navy font-semibold hover:bg-amber-deep transition">
              {de ? "Über GoFundMe spenden" : "Donate via GoFundMe"} <ExternalLink className="w-4 h-4"/>
            </a>
          </div>
          <div className="bg-card border border-border rounded-2xl p-7">
            <CreditCard className="w-7 h-7 text-teal" />
            <h3 className="font-display text-xl font-bold text-navy mt-4">{de ? "Kreditkarte / PayPal" : "Credit Card / PayPal"}</h3>
            <p className="text-sm text-foreground/75 mt-3">{de ? "Schnell und sicher – über unseren Zahlungsdienstleister." : "Fast and secure via our payment provider."}</p>
            <a href={socials.gofundme} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber text-navy font-semibold hover:bg-amber-deep transition">
              {de ? "Online spenden" : "Donate Online"} <ExternalLink className="w-4 h-4"/>
            </a>
          </div>
        </div>
      </section>

      <section className="container-tight pb-20">
        <div className="bg-amber/20 border border-amber rounded-3xl p-8 sm:p-10">
          <span className="inline-block px-3 py-1 rounded-full bg-amber text-navy text-xs font-bold tracking-wider">IHRE SPENDE IST STEUERLICH ABSETZBAR</span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-navy mt-4">{de ? "Spendenabsetzbarkeit (Österreich)" : "Austrian Tax Deductibility"}</h3>
          <p className="mt-4 text-foreground/85 leading-relaxed">
            {de
              ? "Cure MCOPS12 ist in Österreich als steuerlich begünstigter Spendenempfänger registriert. Registrierungsnummer: FW-22429 (gültig ab 01.01.2024). Spenden an Cure MCOPS12 sind für österreichische Steuerzahler:innen absetzbar – bitte verwenden Sie Ihren Kontoauszug als Nachweis für die Steuererklärung."
              : "Cure MCOPS12 is registered as a tax-deductible donation recipient in Austria. Registration number: FW-22429 (valid from 01-01-2024). Donations to Cure MCOPS12 are tax-deductible for Austrian taxpayers — please use your bank statement as proof for your tax return."}
          </p>
          <a href="https://service.bmf.gv.at/service/allg/spenden/show_mast.asp#aw" target="_blank" rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-teal underline">BMF Registry <ExternalLink className="w-3.5 h-3.5"/></a>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container-wide">
          <SectionTitle eyebrow={de ? "Wirkung" : "Impact"} title={de ? "Was Ihre Spende bewirkt" : "What does your donation fund?"} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { a: "€50",     en: "Lab materials for one day of ASO testing", de: "Laborverbrauch für einen Tag ASO-Tests" },
              { a: "€500",    en: "One week of cellular disease model experiments", de: "Eine Woche zelluläre Modell-Experimente" },
              { a: "€5,000",  en: "Contribution to Simon's ASO toxicity study",     de: "Beitrag zur Toxizitätsstudie für Simons ASO" },
              { a: "€50,000", en: "Funds a full research milestone",                  de: "Finanziert einen ganzen Forschungsmeilenstein" },
            ].map(it => (
              <div key={it.a} className="bg-card border border-border rounded-2xl p-6">
                <p className="font-display text-3xl font-bold text-teal">{it.a}</p>
                <p className="text-sm text-foreground/80 mt-2">{de ? it.de : it.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
