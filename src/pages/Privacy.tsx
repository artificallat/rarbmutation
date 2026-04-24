import { PageHero } from "@/pages/WhoWeAre";
import type { Lang } from "@/content/site";

export default function Privacy({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHero
        eyebrow={de ? "Rechtliches" : "Legal"}
        title={de ? "Datenschutz" : "Privacy Policy"}
        sub={de
          ? "Wir nehmen den Schutz Ihrer personenbezogenen Daten ernst und behandeln diese gemäß DSGVO und österreichischem Datenschutzgesetz."
          : "We take the protection of your personal data seriously and process it in accordance with the GDPR and Austrian data protection law."}
      />
      <section className="container-tight pb-24 prose prose-slate max-w-none">
        <h2 className="font-display text-2xl font-bold text-navy mt-2">{de ? "Verantwortlicher" : "Data controller"}</h2>
        <p>
          Cure MCOPS12 — 4963 St. Peter am Hart, {de ? "Österreich" : "Austria"}<br />
          E-Mail: <a className="text-teal hover:underline" href="mailto:rpell@rarbmutation.org">rpell@rarbmutation.org</a>
        </p>

        <h2 className="font-display text-2xl font-bold text-navy mt-8">{de ? "Erhebung & Verarbeitung von Daten" : "Collection & processing of data"}</h2>
        <p>
          {de
            ? "Beim Besuch unserer Website werden technisch notwendige Daten (z. B. IP-Adresse, Browsertyp, Datum/Uhrzeit) automatisch verarbeitet, um die Auslieferung der Inhalte zu ermöglichen. Es erfolgt keine personenbezogene Auswertung."
            : "When you visit our website, technically necessary data (e.g. IP address, browser type, date/time) is automatically processed to deliver the content. No personal evaluation takes place."}
        </p>

        <h2 className="font-display text-2xl font-bold text-navy mt-8">{de ? "Kontaktaufnahme" : "Contacting us"}</h2>
        <p>
          {de
            ? "Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage und für mögliche Anschlussfragen gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter."
            : "If you contact us by email, your information will be stored to process the inquiry and for possible follow-up questions. We do not pass on this data without your consent."}
        </p>

        <h2 className="font-display text-2xl font-bold text-navy mt-8">{de ? "Spenden" : "Donations"}</h2>
        <p>
          {de
            ? "Bei Spenden werden die für die Abwicklung notwendigen Daten (Name, Kontaktdaten, Zahlungsinformationen) verarbeitet. Die Verarbeitung erfolgt zur Erfüllung gesetzlicher Aufbewahrungspflichten und zur Ausstellung von Spendenbestätigungen."
            : "For donations, the data necessary for processing (name, contact details, payment information) is processed. Processing is carried out to fulfil legal retention obligations and to issue donation receipts."}
        </p>

        <h2 className="font-display text-2xl font-bold text-navy mt-8">{de ? "Cookies" : "Cookies"}</h2>
        <p>
          {de
            ? "Diese Website verwendet ausschließlich technisch notwendige Cookies. Es werden keine Tracking- oder Marketing-Cookies eingesetzt."
            : "This website uses only technically necessary cookies. No tracking or marketing cookies are used."}
        </p>

        <h2 className="font-display text-2xl font-bold text-navy mt-8">{de ? "Ihre Rechte" : "Your rights"}</h2>
        <p>
          {de
            ? "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Beschwerden können Sie bei der österreichischen Datenschutzbehörde (dsb.gv.at) einreichen."
            : "You have the right to information, correction, deletion, restriction of processing, data portability and objection. Complaints can be submitted to the Austrian Data Protection Authority (dsb.gv.at)."}
        </p>

        <h2 className="font-display text-2xl font-bold text-navy mt-8">{de ? "Hosting" : "Hosting"}</h2>
        <p>
          {de
            ? "Diese Website wird auf Servern unseres Hosting-Anbieters gehostet. Der Anbieter verarbeitet Daten ausschließlich zur Bereitstellung des Webhostings."
            : "This website is hosted on our hosting provider's servers. The provider processes data solely to provide web hosting."}
        </p>
      </section>
    </>
  );
}
