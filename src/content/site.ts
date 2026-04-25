// Centralized i18n content. Kept in one place so EN + DE pages share identical structure.

export type Lang = "en" | "de";

export const partners = [
  { name: "AlphaRose RareLabs", url: "https://www.alpharose.com/" },
  { name: "CHU Sainte-Justine", url: "https://research.chusj.org/en/Home" },
  { name: "IGBMC", url: "https://www.igbmc.fr" },
  { name: "N=1 Collaborative", url: "https://www.n1collaborative.org/" },
  { name: "Pro Rare Austria", url: "https://www.prorare-austria.org/" },
  { name: "EURORDIS", url: "https://www.eurordis.org/" },
  { name: "A Cure for Sophia & Friends", url: "https://www.acureforsophiaandfriends.com/" },
  { name: "A Cure for Sienna", url: "https://www.facebook.com/acureforsienna/" },
];

export const socials = {
  linkedin: "https://www.linkedin.com/company/cure-mcops12/",
  facebook: "https://www.facebook.com/cureMCOPS12/",
  twitter: "https://twitter.com/CureMcops12",
  gofundme: "https://www.gofundme.com/f/seeking-a-cure-for-simon",
  email: "rpell@rarbmutation.org",
};

export const donationGoal = { raised: 235000, goal: 600000 };

export const kids = [
  {
    name: "Simon", year: 2017, place: "Salzburg, Austria",
    parents: "Edith & Reinhard", siblings: "—",
    storyEn:
      "Simon is the heart of our mission. Diagnosed with MCOPS12 shortly after birth, he is a bright, joyful boy who loves swimming with his dad and being held close. His courage drives every step of our work.",
    storyDe:
      "Simon ist das Herz unserer Mission. Kurz nach seiner Geburt mit MCOPS12 diagnostiziert, ist er ein fröhlicher, lebensfroher Junge, der das Schwimmen mit seinem Papa liebt. Sein Mut treibt jeden Schritt unserer Arbeit an.",
    dreamEn: "A future where Simon can communicate, move freely, and live with dignity and joy.",
    dreamDe: "Eine Zukunft, in der Simon kommunizieren, sich frei bewegen und in Würde und Freude leben kann.",
  },
  {
    name: "Rhett", year: 2018, place: "Atlanta, GA, USA",
    parents: "Matt & Sarah", siblings: "—",
    storyEn:
      "Rhett brings light into every room. His giggles are contagious and his determination in therapy inspires his whole family every single day.",
    storyDe:
      "Rhett bringt Licht in jeden Raum. Sein Lachen ist ansteckend und seine Entschlossenheit in der Therapie inspiriert seine ganze Familie jeden Tag.",
    dreamEn: "To see Rhett take steps, say words, and chase his older brother through the yard.",
    dreamDe: "Rhett dabei zu sehen, wie er Schritte macht, Worte spricht und seinem Bruder durch den Garten nachläuft.",
  },
  {
    name: "Rayne", year: 2009, place: "New Jersey, USA",
    parents: "Oren & Emily", siblings: "Isla",
    storyEn:
      "Rayne is the eldest in our community — a teenager full of personality, music and love. She has shown families that MCOPS12 children can grow, learn and bring deep joy.",
    storyDe:
      "Rayne ist die Älteste in unserer Community – ein Teenager voller Persönlichkeit, Musik und Liebe. Sie zeigt Familien, dass MCOPS12-Kinder wachsen, lernen und große Freude bringen können.",
    dreamEn: "Independence, communication and a treatment that protects the future for the next generation.",
    dreamDe: "Unabhängigkeit, Kommunikation und eine Therapie, die die Zukunft der nächsten Generation schützt.",
  },
  {
    name: "Troy", year: 2021, place: "Oak Park, Illinois, USA",
    parents: "Melissa & Paul", siblings: "—",
    storyEn:
      "Troy is curious, snuggly and stubborn — in the best way. His parents fight every day to give him every possible chance.",
    storyDe:
      "Troy ist neugierig, verschmust und – im besten Sinne – willensstark. Seine Eltern kämpfen jeden Tag dafür, ihm jede Chance zu geben.",
    dreamEn: "A treatment in time to change the trajectory of his life.",
    dreamDe: "Eine Therapie, die rechtzeitig den Verlauf seines Lebens verändert.",
  },
  {
    name: "Sienna", year: 2019, place: "Melbourne, Australia",
    parents: "Annina & Anthony", siblings: "Ava, Bailey",
    storyEn:
      "Sienna is the spark of her family. Through 'A Cure for Sienna', her parents have rallied an entire community behind MCOPS12 research.",
    storyDe:
      "Sienna ist der Funke ihrer Familie. Mit 'A Cure for Sienna' haben ihre Eltern eine ganze Community hinter die MCOPS12-Forschung versammelt.",
    dreamEn: "To dance with her sisters and grow up alongside them.",
    dreamDe: "Mit ihren Schwestern zu tanzen und gemeinsam mit ihnen aufzuwachsen.",
  },
  {
    name: "Zayd", year: 2018, place: "London, UK",
    parents: "Sadia", siblings: "—",
    storyEn:
      "Zayd is gentle, observant and deeply loved. His mother's tireless advocacy is a model of strength for every parent in our network.",
    storyDe:
      "Zayd ist sanft, aufmerksam und tief geliebt. Die unermüdliche Fürsprache seiner Mutter ist ein Vorbild an Stärke für jedes Elternteil in unserem Netzwerk.",
    dreamEn: "A world where rare doesn't mean forgotten.",
    dreamDe: "Eine Welt, in der 'selten' nicht 'vergessen' bedeutet.",
  },
];

export const t = {
  en: {
    nav: {
      home: "Home",
      about: "About", whoWeAre: "Who We Are", whatIs: "What is MCOPS12?",
      kids: "Meet Our Kids", ourWork: "Our Work",
      achievements: "Achievements", research: "Research & Drug Development",
      naturalHistory: "Natural History Study", network: "The Network",
      news: "News", donate: "Donate",
    },
    cta: { donate: "Donate", donateNow: "Donate Now", learnMore: "Learn More",
      gofundme: "GoFundMe Campaign", viewAll: "View All News", readMore: "Read More",
      donateOnline: "Donate Online", subscribe: "Subscribe" },
    home: {
      slides: [
        { title: "How far would you go if someone you loved had a rare disease —", sub: "your husband, your wife…", sub2: "…your child?" },
        { title: "A Personalized Medicine for Simon.", sub: "Pioneering RNA Therapies for MCOPS12." },
        { title: "Together, we are closer than ever.", sub: "Join the families, scientists and supporters working for a cure." },
      ],
      storyTitle: "Our Story",
      storyP1: "Soon after Edith and Reinhard Pell's son Simon was born in 2017, they knew something was wrong. Simon had microphthalmia and did not meet any developmental milestones in his first months of life. In a desperate search for a cause, Simon underwent genetic testing — and was diagnosed with a mutation in the RARB gene causing a disease called Syndromic Microphthalmia 12 (MCOPS12). A severe neurodevelopmental disorder so rare that only 20 patients at the time were known worldwide.",
      storyP2: "No options for treatment. No hope.",
      storyP3: "Reinhard and Edith refused to accept the status quo. Driven by determination, they founded the nonprofit organization Cure MCOPS12, establishing a global scientific network and funding research to decode this complex disease. In 2023 they started their project of a lifetime — developing a patient-customized RNA therapy for Simon to silence his gene mutation. With a dream to create a better and brighter future for not only their son, but for all MCOPS12 patients in the world.",
      asoTitle: "Simon's Personalized Antisense Oligonucleotide (ASO) Therapy",
      asoP1: "In collaboration with a biotech partner in the US and scientists in France and Canada, we are developing an ASO therapy to selectively silence Simon's pathogenic mutation in the RARB gene. In a tremendous effort, we identified six efficacious and safe ASO candidates in a cellular disease model. We are now entering the last and crucial step — performing a toxicity study to identify the safest ASO for Simon.",
      asoP2: "Though this drug is tailor-made to Simon, the development concept is amenable to other MCOPS12 patients.",
      stats: [
        { n: "52", l: "MCOPS12 patients documented worldwide (2023 systematic review)" },
        { n: "€235,000+", l: "raised for research and drug development" },
        { n: "6", l: "safe ASO candidates identified" },
      ],
      donateBar: "Every euro brings Simon — and every MCOPS12 child — closer to a treatment.",
      newsTitle: "Latest News",
      partnersTitle: "Cure MCOPS12 partners with",
    },
    footer: {
      tagline: "An Austrian nonprofit racing to find a cure for MCOPS12.",
      contact: "Contact us",
      org: "Cure MCOPS12 — Verein zur Förderung einer Therapieentwicklung für MCOPS12 Patienten",
      reg: "ZVR: 1002067031 | 4963 St. Peter am Hart, Austria",
      rights: "© 2025 Cure MCOPS12",
      imprint: "Imprint",
      follow: "Follow us",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      about: "Über uns", whoWeAre: "Wer wir sind", whatIs: "Was ist MCOPS12?",
      kids: "Unsere Kinder", ourWork: "Unsere Arbeit",
      achievements: "Erfolge", research: "Forschung & Wirkstoffentwicklung",
      naturalHistory: "Natural History Study", network: "Das Netzwerk",
      news: "Aktuelles", donate: "Spenden",
    },
    cta: { donate: "Spenden", donateNow: "Jetzt spenden", learnMore: "Mehr erfahren",
      gofundme: "GoFundMe-Kampagne", viewAll: "Alle Beiträge", readMore: "Weiterlesen",
      donateOnline: "Online spenden", subscribe: "Abonnieren" },
    home: {
      slides: [
        { title: "Wie weit würdest du gehen, wenn ein geliebter Mensch eine seltene Krankheit hätte –", sub: "dein Mann, deine Frau…", sub2: "…dein Kind?" },
        { title: "Eine personalisierte Therapie für Simon.", sub: "Wegweisende RNA-Therapien für MCOPS12." },
        { title: "Gemeinsam sind wir näher dran als je zuvor.", sub: "Schließen Sie sich den Familien, Forschenden und Unterstützern an." },
      ],
      storyTitle: "Unsere Geschichte",
      storyP1: "Kurz nach der Geburt ihres Sohnes Simon im Jahr 2017 wussten Edith und Reinhard Pell, dass etwas nicht stimmte. Simon hatte Mikrophthalmie und erreichte in seinen ersten Lebensmonaten keine Entwicklungsmeilensteine. Eine genetische Untersuchung brachte schließlich die Diagnose: eine Mutation im RARB-Gen – Syndromale Mikrophthalmie 12 (MCOPS12). Eine schwere neurologische Entwicklungsstörung, von der damals weltweit nur rund 20 Patient:innen bekannt waren.",
      storyP2: "Keine Behandlung. Keine Hoffnung.",
      storyP3: "Reinhard und Edith wollten den Status quo nicht akzeptieren. Sie gründeten den Verein Cure MCOPS12, bauten ein weltweites Forschungsnetzwerk auf und finanzierten Forschung, um diese komplexe Krankheit zu entschlüsseln. 2023 starteten sie ihr Lebensprojekt – die Entwicklung einer patientenspezifischen RNA-Therapie für Simon. Mit dem Traum von einer besseren Zukunft – nicht nur für ihren Sohn, sondern für alle MCOPS12-Kinder weltweit.",
      asoTitle: "Simons personalisierte Antisense-Oligonukleotid (ASO) Therapie",
      asoP1: "In Zusammenarbeit mit einem Biotech-Partner in den USA und Forschenden in Frankreich und Kanada entwickeln wir eine ASO-Therapie, die gezielt die krankheitsauslösende Mutation in Simons RARB-Gen ausschaltet. In einer enormen Anstrengung haben wir sechs wirksame und sichere ASO-Kandidaten in einem zellulären Krankheitsmodell identifiziert. Nun folgt der letzte, entscheidende Schritt – eine Toxizitätsstudie, um den sichersten ASO für Simon auszuwählen.",
      asoP2: "Obwohl dieses Medikament maßgeschneidert für Simon ist, lässt sich das Entwicklungskonzept auf weitere MCOPS12-Patient:innen übertragen.",
      stats: [
        { n: "52", l: "weltweit dokumentierte MCOPS12-Patient:innen (Review 2023)" },
        { n: "€235.000+", l: "für Forschung und Wirkstoffentwicklung gesammelt" },
        { n: "6", l: "sichere ASO-Kandidaten identifiziert" },
      ],
      donateBar: "Jeder Euro bringt Simon – und jedes MCOPS12-Kind – der Therapie näher.",
      newsTitle: "Aktuelles",
      partnersTitle: "Cure MCOPS12 kooperiert mit",
    },
    footer: {
      tagline: "Ein österreichischer Verein im Wettlauf um eine Therapie für MCOPS12.",
      contact: "Kontaktieren Sie uns",
      org: "Cure MCOPS12 – Verein zur Förderung einer Therapieentwicklung für MCOPS12-Patient:innen",
      reg: "ZVR: 1002067031 | 4963 St. Peter am Hart, Österreich",
      rights: "© 2025 Cure MCOPS12",
      imprint: "Impressum",
      follow: "Folgen Sie uns",
    },
  },
} as const;
