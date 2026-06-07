import { ExternalLink, Heart, Landmark, CreditCard, Maximize2, ChevronDown } from "lucide-react";
import { ProgressBar, SectionTitle } from "@/components/site/Bits";
import { PageHero, HeroAccent } from "@/pages/WhoWeAre";
import { DonationConfirmationForm } from "@/components/site/DonationConfirmationForm";
import { donationGoal, socials, type Lang } from "@/content/site";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import bankQr from "@/assets/bank-qr.png";
import taxLogo from "@/assets/tax-deductible-logo.png";

const DONORBOX_URL = "https://donorbox.org/cure-mcops12";

export default function Donate({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHero eyebrow={de ? "Spenden" : "Donate"}
        title={de
          ? <>Mit Ihrer Hilfe kommen wir einer lebensverändernden <HeroAccent>Therapie</HeroAccent> näher. Jede Spende macht einen Unterschied.</>
          : <>With your help, we can move closer to a life-changing <HeroAccent>therapy</HeroAccent>. Every donation makes a difference.</>} />

      <section className="container-tight pb-12">
        <div className="bg-card border border-border rounded-3xl p-8 sm:p-10 shadow-[var(--shadow-card)]">
          <ProgressBar raised={donationGoal.raised} goal={donationGoal.goal} />
          <p className="text-sm text-foreground/80 mt-4 leading-relaxed">
            {de
              ? "Mit Ihrer finanziellen Unterstützung können wir die Toxizitätsstudien abschließen und ein ASO-Medikament in klinischer Qualität für Simon herstellen."
              : "With your financial support, we can complete the toxicology studies and produce a clinical grade ASO drug for Simon."}
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
            <div className="mt-5 flex items-center gap-3 pt-5 border-t border-border">
              <Dialog>
                <DialogTrigger asChild>
                  <button type="button" className="group relative shrink-0" aria-label={de ? "QR-Code vergrößern" : "Enlarge QR code"}>
                    <img src={bankQr} alt={de ? "SEPA QR-Code für Banküberweisung" : "SEPA QR code for bank transfer"} className="w-24 h-24 rounded-lg bg-white p-1.5 border border-border" />
                    <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-teal text-white flex items-center justify-center shadow-md group-hover:bg-teal-deep transition">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogTitle className="font-display text-xl text-navy">{de ? "SEPA QR-Code" : "SEPA QR code"}</DialogTitle>
                  <DialogDescription>
                    {de
                      ? "Öffnen Sie Ihre Banking-App (z. B. George, Bank Austria, Erste, Revolut) und nutzen Sie dort die QR-Scan-Funktion. IBAN, BIC und Empfänger werden automatisch ausgefüllt – nur den Betrag tragen Sie selbst ein. Hinweis: Mit Kamera oder Notizen-App wird nur der SEPA-Text angezeigt, keine Überweisung gestartet."
                      : "Open your banking app (e.g. George, Bank Austria, Erste, Revolut) and use its built-in QR scanner. IBAN, BIC and recipient are filled in automatically — you only enter the amount. Note: a generic Camera or Notes app will only show the raw SEPA text, not start a transfer."}
                  </DialogDescription>
                  <img src={bankQr} alt="SEPA QR" className="w-full h-auto rounded-xl bg-white p-4 border border-border" />
                </DialogContent>
              </Dialog>
              <p className="text-xs text-foreground/70 leading-relaxed">
                {de
                  ? <><strong className="text-navy">Bitte in Ihrer Banking-App scannen</strong> – nicht mit Kamera, Notizen oder einem normalen QR-Scanner. Tippen Sie zum Vergrößern auf den Code.</>
                  : <><strong className="text-navy">Please scan inside your banking app</strong> — not with the Camera, Notes or a generic QR scanner. Tap the code to enlarge.</>}
              </p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-7">
            <CreditCard className="w-7 h-7 text-teal" />
            <h3 className="font-display text-xl font-bold text-navy mt-4">{de ? "Kreditkarte / PayPal" : "Credit Card / PayPal"}</h3>
            <p className="text-sm text-foreground/75 mt-3">{de ? "Schnell und sicher über Donorbox." : "Fast and secure via Donorbox."}</p>
            <a href={DONORBOX_URL} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber text-navy font-semibold hover:bg-amber-deep transition">
              {de ? "Online spenden" : "Donate Online"} <ExternalLink className="w-4 h-4"/>
            </a>
          </div>
          <div className="bg-gradient-to-br from-navy to-navy-deep text-white rounded-2xl p-7">
            <Heart className="w-7 h-7 text-amber" />
            <h3 className="font-display text-xl font-bold mt-4">GoFundMe</h3>
            <p className="text-white/85 text-sm mt-3">{de ? "Internationale Spenden bequem online." : "Donate online from anywhere in the world."}</p>
            <a href={socials.gofundme} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber text-navy font-semibold hover:bg-amber-deep transition">
              {de ? "Über GoFundMe spenden" : "Donate via GoFundMe"} <ExternalLink className="w-4 h-4"/>
            </a>
          </div>
        </div>
      </section>


      <section className="container-tight pb-20">
        <div className="bg-amber/20 border border-amber rounded-3xl p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
            <img
              src={taxLogo}
              alt={de ? "Ihre Spende ist steuerlich absetzbar – Reg. Nr. FW-22429" : "Your donation is tax-deductible – Reg. No. FW-22429"}
              className="w-36 h-auto rounded-xl bg-white p-3 border border-border shadow-sm shrink-0"
            />
            <div className="flex-1">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-navy">
                {de
                  ? "Für Privatpersonen und Unternehmen in Österreich — Ihre Spende ist steuerlich absetzbar!"
                  : "For individuals and companies in Austria — your donation is tax-deductible!"}
              </h3>
              <p className="mt-4 text-foreground/85 leading-relaxed">
                {de
                  ? "Cure MCOPS12 ist eine in Österreich registrierte gemeinnützige Organisation und ist berechtigt, steuerlich absetzbare Spenden zu empfangen (Registrierungsnummer: FW-22429)."
                  : "Cure MCOPS12 is a registered nonprofit organization in Austria and is authorized to receive tax-deductible donations (registration number: FW-22429)."}
              </p>
              <p className="mt-3 text-foreground/85 leading-relaxed">
                {de
                  ? <>Wenn Sie eine <strong>Privatperson</strong> sind, die in Österreich einkommensteuerpflichtig ist, und Ihre Spende geltend machen möchten, füllen Sie bitte das folgende Formular aus:</>
                  : <>If you are an <strong>individual</strong> liable for income tax in Austria and would like to claim your donation, please complete the following form:</>}
              </p>

              <Collapsible className="mt-5">
                <CollapsibleTrigger className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber text-navy font-semibold hover:bg-amber-deep transition shadow-sm">
                  {de ? "Spendenbestätigung anfordern" : "Request Your Donation Confirmation"}
                  <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-5">
                  <DonationConfirmationForm lang={lang} />
                </CollapsibleContent>
              </Collapsible>

              <p className="mt-6 text-sm text-foreground/85 leading-relaxed">
                {de
                  ? <>Wenn Ihr <strong>Unternehmen</strong> in Österreich körperschaftsteuerpflichtig ist und Sie Ihre Spende geltend machen möchten, können Sie diese als Betriebsausgabe in Ihrer jährlichen Steuererklärung absetzen.</>
                  : <>If your <strong>company</strong> is subject to corporate income tax in Austria and you wish to claim your donation, you can deduct it as a business expense ("Betriebsausgabe") in your annual tax return.</>}
              </p>

              <p className="mt-4 text-sm text-foreground/85 leading-relaxed">
                {de
                  ? <>Hinweis: Nur Spenden per <strong>Banküberweisung</strong>, <strong>Kreditkarte</strong> oder <strong>PayPal</strong> sind steuerlich absetzbar.</>
                  : <>Please note that only donations made via <strong>bank transfer</strong>, <strong>credit card</strong>, or <strong>PayPal</strong> are eligible for tax deduction.</>}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
