import { PageHero, HeroAccent } from "@/pages/WhoWeAre";
import type { Lang } from "@/content/site";

export default function Privacy({ lang }: { lang: Lang }) {
  const de = lang === "de";
  return (
    <>
      <PageHero
        eyebrow={de ? "Rechtliches" : "Legal"}
        title={de ? <><HeroAccent>Datenschutzerklärung</HeroAccent></> : <><HeroAccent>Privacy Policy</HeroAccent></>}
        sub={de
          ? "Information gemäß Art. 13 und 14 DSGVO sowie § 4 Abs. 1 DSG. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Vorschriften."
          : "Information pursuant to Art. 13 and 14 GDPR and § 4 (1) Austrian Data Protection Act. We process your personal data confidentially and in line with applicable law."}
      />
      <section className="container-tight pb-24 prose prose-slate max-w-none">
        <p className="text-sm text-foreground/60">
          {de ? "Stand: Juni 2026" : "Last updated: June 2026"}
        </p>

        <h2 className="font-display text-2xl font-bold text-navy mt-8">{de ? "1. Verantwortlicher" : "1. Data controller"}</h2>
        <p>
          {de ? "Verantwortlich für die Datenverarbeitung im Sinne der DSGVO ist:" : "The data controller within the meaning of the GDPR is:"}<br />
          Cure MCOPS12 — 4963 St. Peter am Hart, {de ? "Österreich" : "Austria"}<br />
          ZVR: 1002067031<br />
          {de ? "E-Mail" : "Email"}: <a className="text-teal hover:underline" href="mailto:rpell@rarbmutation.org">rpell@rarbmutation.org</a>
        </p>

        <h2 className="font-display text-2xl font-bold text-navy mt-8">{de ? "2. Allgemeine Grundsätze" : "2. General principles"}</h2>
        <p>
          {de
            ? "Wir verarbeiten personenbezogene Daten nur auf Grundlage der gesetzlichen Bestimmungen (DSGVO, DSG, TKG). Eine Weitergabe an Dritte erfolgt nur, wenn dies zur Vertragserfüllung erforderlich ist, eine gesetzliche Verpflichtung besteht oder Sie ausdrücklich eingewilligt haben."
            : "We process personal data only on the basis of legal provisions (GDPR, Austrian Data Protection Act, Telecommunications Act). Data is shared with third parties only where necessary for contract performance, required by law, or where you have explicitly consented."}
        </p>

        <h2 className="font-display text-2xl font-bold text-navy mt-8">{de ? "3. Zugriffsdaten / Server-Logfiles" : "3. Access data / server log files"}</h2>
        <p>
          {de
            ? "Beim Besuch dieser Website werden durch unseren Hosting-Anbieter automatisch technische Daten in Logdateien erfasst: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Referrer-URL, verwendeter Browser und Betriebssystem. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb der Website). Die Daten werden nach maximal 30 Tagen gelöscht, sofern keine Sicherheitsvorfälle eine längere Speicherung erfordern."
            : "When you visit this website, our hosting provider automatically records technical data in log files: IP address, date and time of access, page requested, referrer URL, browser and operating system used. The legal basis is Art. 6 (1) (f) GDPR (legitimate interest in a secure and stable website). Data is deleted after a maximum of 30 days unless security incidents require longer retention."}
        </p>

        <h2 className="font-display text-2xl font-bold text-navy mt-8">{de ? "4. Kontaktaufnahme" : "4. Contact requests"}</h2>
        <p>
          {de
            ? "Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, werden Ihre Angaben (Name, E-Mail-Adresse, Inhalt der Nachricht) zur Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche bzw. vertragliche Kommunikation) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung). Die Daten werden gelöscht, sobald sie für den Zweck nicht mehr erforderlich sind, längstens jedoch nach Ablauf gesetzlicher Aufbewahrungsfristen."
            : "If you contact us by email or via a contact form, your information (name, email address, content of the message) will be stored for the purpose of processing your inquiry and possible follow-up questions. The legal basis is Art. 6 (1) (b) GDPR (pre-contractual or contractual communication) or Art. 6 (1) (f) GDPR (legitimate interest in responding). Data is deleted once it is no longer needed, at the latest upon expiry of statutory retention periods."}
        </p>

        <h2 className="font-display text-2xl font-bold text-navy mt-8">{de ? "5. Spenden" : "5. Donations"}</h2>
        <p>
          {de
            ? "Bei Spenden verarbeiten wir die für die Abwicklung notwendigen Daten (Name, Anschrift, Kontaktdaten, Zahlungsinformationen, Spendenbetrag). Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und c DSGVO (Vertragserfüllung sowie Erfüllung gesetzlicher Aufzeichnungs- und Aufbewahrungspflichten, insb. § 132 BAO — 7 Jahre). Spendenbestätigungen werden auf Wunsch ausgestellt; die Daten werden nicht für Werbezwecke verwendet."
            : "For donations we process the data necessary to handle the transaction (name, address, contact details, payment information, donation amount). The legal basis is Art. 6 (1) (b) and (c) GDPR (contract performance and compliance with statutory record-keeping obligations, in particular § 132 BAO — 7 years). Donation receipts are issued on request; data is not used for marketing purposes."}
        </p>

        <h2 className="font-display text-2xl font-bold text-navy mt-8">{de ? "6. Auftragsverarbeiter & Empfänger" : "6. Processors & recipients"}</h2>
        <p>
          {de
            ? "Zur Bereitstellung dieser Website und zur Abwicklung unserer Tätigkeit setzen wir sorgfältig ausgewählte Dienstleister ein, mit denen — soweit erforderlich — Auftragsverarbeitungsverträge gemäß Art. 28 DSGVO bestehen:"
            : "To operate this website and our activities we use carefully selected service providers with whom data processing agreements pursuant to Art. 28 GDPR are in place where required:"}
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>{de ? "Hosting & Backend-Infrastruktur (Website-Hosting, Datenbank, E-Mail-Versand für Spendenbestätigungen)" : "Hosting & backend infrastructure (website hosting, database, email delivery for donation confirmations)"}</li>
          <li>{de ? "Zahlungsdienstleister für die Abwicklung von Spenden" : "Payment service providers for processing donations"}</li>
          <li>{de ? "Steuerberatung und Buchhaltung im Rahmen gesetzlicher Verpflichtungen" : "Tax and accounting services within the scope of statutory obligations"}</li>
        </ul>
        <p className="mt-4">
          {de
            ? "Eine Übermittlung in Drittländer außerhalb des EWR findet nur statt, wenn ein angemessenes Datenschutzniveau gewährleistet ist (z. B. EU-Standardvertragsklauseln gemäß Art. 46 DSGVO)."
            : "Transfers to third countries outside the EEA only take place where an adequate level of data protection is ensured (e.g. EU Standard Contractual Clauses pursuant to Art. 46 GDPR)."}
        </p>

        <h2 className="font-display text-2xl font-bold text-navy mt-8">{de ? "7. Cookies & lokale Speicherung" : "7. Cookies & local storage"}</h2>
        <p>
          {de
            ? "Diese Website verwendet ausschließlich technisch notwendige Cookies bzw. lokalen Speicher (z. B. zur Speicherung der Spracheinstellung). Rechtsgrundlage ist § 165 Abs. 3 TKG 2021 sowie Art. 6 Abs. 1 lit. f DSGVO. Es werden keine Tracking-, Analyse- oder Marketing-Cookies eingesetzt und es findet kein Profiling statt."
            : "This website uses only technically necessary cookies and local storage (e.g. to remember your language preference). The legal basis is § 165 (3) Austrian Telecommunications Act 2021 and Art. 6 (1) (f) GDPR. No tracking, analytics or marketing cookies are used and no profiling takes place."}
        </p>

        <h2 className="font-display text-2xl font-bold text-navy mt-8">{de ? "8. SSL-/TLS-Verschlüsselung" : "8. SSL/TLS encryption"}</h2>
        <p>
          {de
            ? "Diese Website nutzt eine SSL-/TLS-Verschlüsselung, um die Übertragung vertraulicher Inhalte zu schützen. Eine verschlüsselte Verbindung erkennen Sie am Präfix „https://“ in der Adresszeile Ihres Browsers."
            : "This website uses SSL/TLS encryption to protect the transmission of confidential content. You can recognise an encrypted connection by the “https://” prefix in your browser’s address bar."}
        </p>

        <h2 className="font-display text-2xl font-bold text-navy mt-8">{de ? "9. Ihre Rechte" : "9. Your rights"}</h2>
        <p>
          {de
            ? "Ihnen stehen nach der DSGVO folgende Rechte zu: Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch gegen die Verarbeitung (Art. 21). Erteilte Einwilligungen können Sie jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3 DSGVO). Wenden Sie sich dazu formlos an die oben genannten Kontaktdaten."
            : "Under the GDPR you have the following rights: access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20), and objection to processing (Art. 21). You may withdraw any consent at any time with effect for the future (Art. 7 (3) GDPR). To exercise these rights, please contact us using the details above."}
        </p>

        <h2 className="font-display text-2xl font-bold text-navy mt-8">{de ? "10. Beschwerderecht" : "10. Right to lodge a complaint"}</h2>
        <p>
          {de
            ? <>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, insbesondere bei der österreichischen Datenschutzbehörde, Barichgasse 40–42, 1030 Wien, <a className="text-teal hover:underline" href="https://www.dsb.gv.at" target="_blank" rel="noreferrer">www.dsb.gv.at</a>.</>
            : <>You have the right to lodge a complaint with a data protection supervisory authority, in particular the Austrian Data Protection Authority, Barichgasse 40–42, 1030 Vienna, <a className="text-teal hover:underline" href="https://www.dsb.gv.at" target="_blank" rel="noreferrer">www.dsb.gv.at</a>.</>}
        </p>

        <h2 className="font-display text-2xl font-bold text-navy mt-8">{de ? "11. Keine automatisierte Entscheidungsfindung" : "11. No automated decision-making"}</h2>
        <p>
          {de
            ? "Es findet keine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne des Art. 22 DSGVO statt."
            : "No automated decision-making, including profiling, within the meaning of Art. 22 GDPR takes place."}
        </p>

        <h2 className="font-display text-2xl font-bold text-navy mt-8">{de ? "12. Aktualität & Änderungen" : "12. Updates & changes"}</h2>
        <p>
          {de
            ? "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslage oder bei Änderungen unserer Leistungen anzupassen. Die aktuelle Version finden Sie jederzeit auf dieser Seite."
            : "We reserve the right to update this privacy policy to reflect changes in the legal framework or in our services. The current version is always available on this page."}
        </p>
      </section>
    </>
  );
}
