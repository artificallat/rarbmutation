import { ExternalLink, Heart, Landmark, CreditCard, FileSignature, Maximize2 } from "lucide-react";
import { ProgressBar, SectionTitle } from "@/components/site/Bits";
import { PageHero } from "@/pages/WhoWeAre";
import { DonationConfirmationForm } from "@/components/site/DonationConfirmationForm";
import { donationGoal, socials, type Lang } from "@/content/site";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import bankQr from "@/assets/bank-qr.svg";
import taxLogo from "@/assets/tax-deductible-logo.png";

const DONORBOX_URL = "https://donorbox.org/cure-mcops12";

export default function Donate({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHero eyebrow={de ? "Spenden" : "Donate"}
        title={de
          ? "Mit Ihrer Hilfe kommen wir einer lebensverändernden Therapie näher. Jede Spende macht einen Unterschied."
          : "With your help, we can move closer to a life-changing therapy. Every donation makes a difference."} />

      <section className="container-tight pb-12">
        <div className="bg-teal rounded-3xl p-8 sm:p-10 shadow-[var(--shadow-card)]">
          <ProgressBar raised={donationGoal.raised} goal={donationGoal.goal} light />
          <p className="text-sm text-white/90 mt-4 leading-relaxed">
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
                    {de ? "Mit Ihrer Banking-App scannen – alle Überweisungsdaten werden automatisch ausgefüllt." : "Scan with your banking app — all transfer details fill in automatically."}
                  </DialogDescription>
                  <img src={bankQr} alt="SEPA QR" className="w-full h-auto rounded-xl bg-white p-4 border border-border" />
                </DialogContent>
              </Dialog>
              <p className="text-xs text-foreground/70 leading-relaxed">
                {de ? "Mit Banking-App scannen – tippen Sie auf den QR-Code, um ihn zu vergrößern." : "Scan with your banking app — tap the QR code to enlarge it."}
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


      <section className="container-tight pb-16">
        <div className="bg-amber/20 border border-amber rounded-3xl p-8 sm:p-10 mb-12">
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
              <a href="https://service.bmf.gv.at/service/allg/spenden/show_mast.asp#aw" target="_blank" rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-teal underline">BMF Registry <ExternalLink className="w-3.5 h-3.5"/></a>
            </div>
          </div>
        </div>

        <SectionTitle
          eyebrow={de ? "Spendenbestätigung" : "Tax confirmation"}
          title={de ? "Spendenbestätigung anfordern" : "Request Your Donation Confirmation"}
        />
        <div className="-mt-2 mb-8 flex gap-4 items-start text-foreground/85 leading-relaxed">
          <div className="w-11 h-11 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
            <FileSignature className="w-5 h-5" />
          </div>
          <p>
            {de
              ? "Als steuerlich absetzbare Organisation in Österreich (FW-22429) sind wir verpflichtet, Spenderdaten ans Finanzamt zu übermitteln. Bitte füllen Sie dieses Formular nach Ihrer Spende aus, damit wir Ihre Spendenbestätigung ausstellen können."
              : "As a registered tax-deductible organization in Austria (FW-22429), we are required to submit donor information to the Austrian tax authorities. Please fill out this form after your donation so we can process your official donation confirmation (Spendenbestätigung)."}
          </p>
        </div>
        <DonationConfirmationForm lang={lang} />

        <p className="mt-8 text-sm text-foreground/75 leading-relaxed">
          {de
            ? <>Info: Vorlage von debra Austria: <a href="https://www.debra-austria.org/spenden-helfen/spendenabsetzbarkeit/formular-spendenabsetzbarkeit/" target="_blank" rel="noreferrer" className="text-teal hover:underline">debra-austria.org</a></>
            : <>Info: Template by debra Austria: <a href="https://www.debra-austria.org/spenden-helfen/spendenabsetzbarkeit/formular-spendenabsetzbarkeit/" target="_blank" rel="noreferrer" className="text-teal hover:underline">debra-austria.org</a></>}
        </p>
        <p className="mt-4 text-sm text-foreground/85 leading-relaxed">
          {de
            ? <>Wenn Ihr <strong>Unternehmen</strong> in Österreich körperschaftsteuerpflichtig ist und Sie Ihre Spende geltend machen möchten, können Sie diese als Betriebsausgabe in Ihrer jährlichen Steuererklärung absetzen.</>
            : <>If your <strong>company</strong> is subject to corporate income tax in Austria and you wish to claim your donation, you can deduct it as a business expense ("Betriebsausgabe") in your annual tax return.</>}
        </p>
      </section>


      <section className="container-tight pb-20">
        <div className="bg-gradient-to-br from-navy to-navy-deep text-white rounded-3xl p-8 sm:p-10 shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-7 h-7 text-amber" />
            <h3 className="font-display text-2xl md:text-3xl font-bold">
              {de ? "Danke — und unsere GoFundMe-Kampagne läuft weiter" : "Thank you — and our GoFundMe campaign continues"}
            </h3>
          </div>
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              {de
                ? "Wir können unsere Dankbarkeit für die enorme Unterstützung, die Sie ALLEN MCOPS12-Patient:innen entgegengebracht haben, kaum in Worte fassen. Ihre Großzügigkeit hat es uns ermöglicht, nicht nur den Proof-of-Concept für eine ASO-Therapie zu finanzieren — die Kindern mit MCOPS12 eines Tages erlauben könnte, frei zu sitzen oder sogar zu gehen — sondern auch eine Natural History Study. Diese Studie ist ein entscheidender erster Schritt für die zukünftige Medikamentenentwicklung und Behandlung ALLER MCOPS12-PATIENT:INNEN!"
                : "We cannot express enough gratitude for the tremendous support you have shown for ALL MCOPS12 patients. Your kindness and generosity have enabled us to not only fund the proof of concept for an ASO therapy — which has the potential to give children with MCOPS12 the ability to sit unassisted or even walk someday — but also a Natural History Study. This study is a crucial first step in future drug development and treatment for ALL MCOPS12 PATIENTS!"}
            </p>
            <p className="italic text-amber">
              {de
                ? "„Alleine können wir so wenig tun; gemeinsam können wir so viel bewegen.“ — Helen Keller"
                : "\"Alone, we can do so little; together, we can do so much.\" — Helen Keller"}
            </p>
            <p>
              {de
                ? "Wir laden Sie ein, unsere gemeinnützige Organisation Cure MCOPS12 weiter zu unterstützen — auf unserer Mission, das Leben ALLER MCOPS12-Patient:innen und ihrer Familien zu verändern. Unsere GoFundMe-Seite bleibt geöffnet, denn dieser Proof-of-Concept und die Natural History Study sind nur die ersten Schritte hin zu einer Therapie, die eines Tages zur Heilung von MCOPS12 führen könnte."
                : "We invite you to continue supporting our non-profit organization, Cure MCOPS12, in our mission to transform the lives of ALL MCOPS12 patients and their families. Our GoFundMe page remains open and active, as this proof of concept and natural history study are only the initial steps in developing a treatment or therapy that may one day lead to a cure for MCOPS12."}
            </p>
          </div>
          <a
            href="https://www.gofundme.com/f/seeking-a-cure-for-simon"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber text-navy font-semibold hover:bg-amber-deep transition"
          >
            {de ? "Seeking A Cure for Simon — auf GoFundMe" : "Seeking A Cure for Simon on GoFundMe"} <ExternalLink className="w-4 h-4" />
          </a>
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
