import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "hr" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  hr: {
    // Navbar
    "nav.topics": "Teme",
    "nav.speakers": "Govornici",
    "nav.agenda": "Program",
    "nav.pricing": "Kotizacije",
    "nav.gallery": "Galerija 2025.",
    "nav.venue": "Lokacija",
    "nav.sponsors": "Partneri & sponzori",
    "nav.buyTicket": "Rezerviraj kotizaciju",

    // Hero
    "hero.badge": "",
    "hero.title1": "Inspiring People,",
    "hero.title2": "Transforming Culture!",
    "hero.subtitle": "Vodeća HR & Business konferencija",
    "hero.buyTicket": "Rezerviraj kotizaciju",
    "hero.viewAgenda": "Pogledaj program",
    "hero.date": "26.-27. studenoga 2026.",
    "hero.location": "Mozaik Event Centar, Zagreb",
    "hero.days": "Dana",
    "hero.hours": "Sati",
    "hero.minutes": "Min",
    "hero.seconds": "Sek",

    // Topics
    "topics.label": "",
    "topics.title": "Teme konferencije",
    "topics.subtitle": "",
    "topics.foundations.title": "Temelji",
    "topics.foundations.subtitle": "struktura, odgovornost",
    "topics.foundations.desc": "Kako postaviti jasnu organizacijsku strukturu i definirati odgovornosti koje omogućuju brže donošenje odluka i stabilan rast.",
    "topics.functioning.title": "Funkcioniranje",
    "topics.functioning.subtitle": "HR, change",
    "topics.functioning.desc": "Kako organizacije upravljaju ljudima i promjenama – od HR praksi do uspješnog vođenja transformacija u dinamičnom okruženju.",
    "topics.results.title": "Rezultati",
    "topics.results.subtitle": "plaće, produktivnost",
    "topics.results.desc": "Kako mjeriti i unaprijediti rezultate kroz pravedne sustave nagrađivanja i povećanje produktivnosti timova.",
    "topics.people.title": "Ljudi",
    "topics.people.subtitle": "ponašanje, razvoj",
    "topics.people.desc": "Razumijevanje ponašanja zaposlenika i razvoj njihovih potencijala kao ključ dugoročnog uspjeha organizacije.",
    "topics.future.title": "Budućnost",
    "topics.future.subtitle": "AI, regulativa",
    "topics.future.desc": "Kako umjetna inteligencija i regulatorni okvir oblikuju budućnost rada i poslovanja – te što to znači za organizacije danas.",

    // Keynote
    "keynote.label": "KEYNOTE PREDAVANJE",
    "keynote.title": "Kako organizacije donose odluke kada se pravila igre mijenjaju",
    "keynote.p1": "Ključno pitanje nije više kako rasti nego kako ostati funkcionalan?",
    "keynote.p2": "",
    "keynote.cta": "Rezerviraj svoje mjesto →",
    "keynote.years": "Godina istraživanja",
    "keynote.speakerAlt": "Glavna govornica",

    // Speakers
    "speakers.label": "",
    "speakers.title": "Govornici",
    "speakers.subtitle": "",

    // Agenda
    "agenda.label": "Raspored",
    "agenda.title": "Program konferencije",
    "agenda.subtitle": "",
    "agenda.disclaimer": "*program je podložan promjenama",
    "agenda.day1": "1. dan - 26.11.2026.",
    "agenda.day2": "2. dan - 27.11.2026.",
    "agenda.host": "Voditeljica konferencije: Antonija Mandić",
    "agenda.type.keynote": "Predavanje",
    "agenda.type.talk": "Predavanje",
    "agenda.type.panel": "Panel",
    "agenda.type.workshop": "Radionica",
    "agenda.type.break": "Pauza",
    "agenda.type.networking": "Networking",
    // Day 1 sessions
    "agenda.d1.s1.title": "Registracija / kava / doručak",
    "agenda.d1.s2.title": "Otvaranje konferencije, pozdravna riječ",
    "agenda.d1.s2.desc": "Danas imamo više podataka nego ikad, više alata nego ikad i više inicijativa nego ikad.\n\nI unatoč tome, sve veći broj organizacija djeluje kao da se bori s istim stvarima: sporim odlukama, neprovedenim promjenama i rezultatima koji ne prate očekivanja.\n\nZato ovo nije konferencija o trendovima.\n\nOvo je konferencija o jednom puno neugodnijem pitanju: što se događa između onoga što znamo i onoga što stvarno radimo?\n\nTijekom ova dva dana nećemo pričati o idealima, nego o stvarnosti: kako organizacije donose odluke, gdje se one gube i što se događa kada u sve to uključimo ljude, sa svim njihovim ograničenjima.\n\nJer možda najveći problem danas nije nedostatak znanja.\n\nNego to što više nismo sigurni što zapravo razumijemo.",
    "agenda.d1.s3.title": "Kako organizacije donose odluke kada se pravila igre mijenjaju",
    "agenda.d1.s3.desc": "Ključno pitanje nije više kako rasti nego kako ostati funkcionalan?",
    "agenda.d1.s4.title": "Kad pravila više ne vrijede – Igraju li organizacije i dalje staru igru? Powered by GrECo",
    "agenda.d1.s5.title": "Pauza za kavu",
    "agenda.d1.s6.title": "Rast ne ubija organizacije. Nejasne odluke, da.",
    "agenda.d1.s7.title": "Zašto organizacije ne provedu odluke koje same donesu?",
    "agenda.d1.s8.title": "Ručak",
    "agenda.d1.s9.title": "Rastu plaće. Raste li vrijednost?",
    "agenda.d1.s10.title": "Ako razumijemo problem, zašto ga onda ne rješavamo?",
    "agenda.d1.s11.title": "Pauza za kavu",
    "agenda.d1.s12.title": "Jesmo li počeli učiti ljude stvari koje im ne koriste?",
    "agenda.d1.s13.title": "Zašto razvoj ljudi ne donosi poslovnu vrijednost?",
    // Day 2 sessions
    "agenda.d2.s1.title": "Kava i doručak",
    "agenda.d2.s2.title": "Znamo više nego ikad. Razumijemo manje nego ikad.",
    "agenda.d2.s3.title": "Od psihologije čovjeka do biznisa: Gdje to prestaje funkcionirati u praksi",
    "agenda.d2.s4.title": "Pauza za kavu",
    "agenda.d2.s5.title": "Ako People & Culture ne mijenja ponašanje, što onda mijenja?",
    "agenda.d2.s6.title": "Što biznis očekuje od People & Culture, a ne dobiva? Smije li se dati negativni feedback za People & Culture?",
    "agenda.d2.s7.title": "Pauza za kavu",
    "agenda.d2.s8.title": "AI ubrzava odluke. Što ako ubrzava i pogreške?",
    "agenda.d2.s9.title": "Zatvaranje konferencije i podjela nagrada",
    "agenda.d2.s10.title": "Ručak & networking",
    "agenda.d2.s10.desc": "U ova dva dana dotaknuli smo puno tema: odluke, promjene, plaće, mjerenje, razvoj ljudi i na kraju AI.\n\nI sve se na kraju svodi na istu stvar: organizacije ne funkcioniraju loše zato što ne znaju što treba napraviti.\n\nFunkcioniraju loše zato što se odluke ne donose kako treba, ne provode kako treba i ne razumiju kako zapravo nastaju rezultati. A kada na to dodamo AI, ne dobivamo rješenje.\n\nDobivamo katalizator. Ubrzanje svega što već radimo, dobrog i lošeg.\n\nZato možda najvažnije pitanje koje ostaje nakon ove konferencije nije: što ćemo raditi drugačije?\n\nnego: što ćemo napokon početi razumijevati prije nego što donesemo sljedeću odluku.",
    // Agenda locations
    "agenda.loc.main": "Glavna dvorana",
    "agenda.loc.hallA": "Dvorana A",
    "agenda.loc.hallB": "Dvorana B",
    "agenda.loc.workshop": "Dvorana za radionice",

    // Pricing
    "pricing.title": "Kotizacije",
    "pricing.subtitle": "Nakon što ispunite i pošaljete obrazac za prijavu, napravili ste registraciju za konferenciju.\nNakon registracije na Vaš e-mail ćete primiti ponudu za kotizaciju koja je obvezujuća.",
    "pricing.vatNote": "*Navedene cijene su bez PDV-a",
    "pricing.apply": "PRIJAVA",
    "pricing.comingSoon": "PRIJAVA",
    "pricing.blindBird.period": "do 30.06.2026.",
    "pricing.earlyBird.period": "01.07.2026. – 06.10.2026.",
    "pricing.regular.period": "od 07.10.2026.",
    "pricing.common.f1": "Poklon dobrodošlice",
    "pricing.common.f2": "Pristup na sve pozornice",
    "pricing.common.f3": "Puni catering za oba dana konferencije (kava, napitci, ručak, finger food…)",
    "pricing.common.f4": "Popusti na hotelski smještaj i taksi",

    // Venue
    "venue.label": "Lokacija",
    "venue.title": "Mozaik Event Centar, Zagreb",
    "venue.desc": "",
    "venue.address": "Adresa",
    "venue.parking": "Parking",
    "venue.parkingDesc": "u sklopu HOB centra",

    // Sponsors
    "sponsors.badge": "",
    "sponsors.title": "Partneri & sponzori",
    "sponsors.subtitle": "",
    "sponsors.platinum": "PARTNERI",
    "sponsors.gold": "POKROVITELJI",
    "sponsors.community": "SPONZORI",
    "sponsors.organizer": "Organizator konferencije",
    "sponsors.interested": "Zainteresirani za sponzorstvo?",
    "sponsors.packages": "Pogledajte sponzorske pakete →",

    // CTA
    "cta.title": "Ne propustite događaj godine",
    "cta.subtitle": "Blind bird ponuda vrijedi do 30. lipnja 2026. Pridružite se 500+ lidera koji transformiraju budućnost rada.",
    "cta.buyNow": "Rezerviraj kotizaciju",
    "cta.groupPricing": "",
    "cta.refund": "",

    // Footer
    "footer.tagline": "Vodeća HR i poslovna konferencija • 26. – 27. studenog 2026.",
    "footer.privacy": "Privatnost",
    "footer.terms": "Uvjeti",
    "footer.contact": "Kontakt",
    "footer.sponsorship": "Sponzorstvo",
    "footer.copyright": "© 2026 ElevateHR konferencija. Sva prava pridržana.",

    // Gallery
    "gallery.title": "",
    "gallery.subtitle": "Pogledajte trenutke s prošlogodišnje konferencije People & Culture HORIZONS.",

    // Registration Dialog
    "reg.title": "Obrazac za prijavu",
    "reg.desc": "Polja označena zvjezdicom (*) potrebno je obavezno ispuniti.",
    "reg.descNote": "Molimo provjerite točnost upisanih podataka jer će se isti koristiti za potrebe tiskane akreditacije.",
    "reg.ticket": "Ulaznica",
    "reg.selectType": "Odaberite tip *",
    "reg.company": "Pravna osoba",
    "reg.individual": "Fizička osoba",
    "reg.personalData": "Osobni podaci",
    "reg.companyData": "Podaci o tvrtki",
    "reg.fullName": "Ime i prezime *",
    "reg.email": "E-mail adresa *",
    "reg.phone": "Kontakt broj telefona *",
    "reg.companyName": "Naziv tvrtke *",
    "reg.companyNameIndividual": "Naziv tvrtke u kojoj radite *",
    "reg.companyAddress": "Adresa tvrtke *",
    "reg.cityPostal": "Grad i poštanski broj *",
    "reg.companyOIB": "OIB tvrtke *",
    "reg.position": "Vaša pozicija *",
    "reg.promoCode": "Promotivni kod",
    "reg.disclaimer": "Popunjavanjem obrasca za prijavu pristajete na obradu Vaših osobnih podataka unesenih u obrazac. Podatke će koristiti isključivo organizator konferencije u svrhu popisa sudionika, izradu akreditacija te slanja važnih informacija i obavijesti vezanih za konferenciju. Organizator će podatke čuvati pet godina nakon završetka konferencije.",
    "reg.note": "Napomena:",
    "reg.submitting": "Slanje...",
    "reg.submit": "Pošalji prijavu",
    "reg.toastTitle": "Zahvaljujemo na Vašoj prijavi!",
    "reg.toastDesc": "Uskoro ćete na Vašu e-mail adresu primiti ponudu za plaćanje.",
    "reg.mailSubjectPrefix": "Prijava",
    "reg.mailTicket": "Ulaznica",
    "reg.mailType": "Tip",
  },
  en: {
    // Navbar
    "nav.topics": "Topics",
    "nav.speakers": "Speakers",
    "nav.agenda": "Program",
    "nav.pricing": "Registration",
    "nav.gallery": "Gallery 2025.",
    "nav.venue": "Venue",
    "nav.sponsors": "Partners & Sponsors",
    "nav.buyTicket": "Reserve Registration",

    // Hero
    "hero.badge": "",
    "hero.title1": "Inspiring People,",
    "hero.title2": "Transforming Culture!",
    "hero.subtitle": "Leading HR & Business conference",
    "hero.buyTicket": "Buy Registration →",
    "hero.viewAgenda": "View Program",
    "hero.date": "November 26-27, 2026",
    "hero.location": "Mozaik Event Center, Zagreb",
    "hero.days": "Days",
    "hero.hours": "Hrs",
    "hero.minutes": "Min",
    "hero.seconds": "Sec",

    // Topics
    "topics.label": "",
    "topics.title": "Conference Topics",
    "topics.subtitle": "",
    "topics.foundations.title": "Foundations",
    "topics.foundations.subtitle": "structure, responsibility",
    "topics.foundations.desc": "How to establish a clear organisational structure and define responsibilities that enable faster decision-making and stable growth.",
    "topics.functioning.title": "Functioning",
    "topics.functioning.subtitle": "HR, change",
    "topics.functioning.desc": "How organisations manage people and change – from HR practices to successfully leading transformations in a dynamic environment.",
    "topics.results.title": "Results",
    "topics.results.subtitle": "salaries, productivity",
    "topics.results.desc": "How to measure and improve results through fair reward systems and increased team productivity.",
    "topics.people.title": "People",
    "topics.people.subtitle": "behaviour, development",
    "topics.people.desc": "Understanding employee behaviour and developing their potential as the key to long-term organisational success.",
    "topics.future.title": "Future",
    "topics.future.subtitle": "AI, regulation",
    "topics.future.desc": "How artificial intelligence and the regulatory framework are shaping the future of work and business – and what it means for organisations today.",

    // Keynote
    "keynote.label": "KEYNOTE ADDRESS",
    "keynote.title": "How organisations make decisions when the rules of the game change",
    "keynote.p1": "The key question is no longer how to grow, but how to remain functional?",
    "keynote.p2": "",
    "keynote.cta": "Reserve Your Seat →",
    "keynote.years": "Years of Research",
    "keynote.speakerAlt": "Keynote Speaker",

    // Speakers
    "speakers.label": "",
    "speakers.title": "Speakers",
    "speakers.subtitle": "",

    // Agenda
    "agenda.label": "Schedule",
    "agenda.title": "Conference Program",
    "agenda.subtitle": "",
    "agenda.disclaimer": "*program is subject to change",
    "agenda.day1": "Day 1 - 26.11.2026.",
    "agenda.day2": "Day 2 - 27.11.2026.",
    "agenda.host": "Conference Host: Antonija Mandić",
    "agenda.type.keynote": "Keynote",
    "agenda.type.talk": "Lecture",
    "agenda.type.panel": "Panel",
    "agenda.type.workshop": "Workshop",
    "agenda.type.break": "Break",
    "agenda.type.networking": "Networking",
    // Day 1
    "agenda.d1.s1.title": "Registration / coffee / breakfast",
    "agenda.d1.s2.title": "Conference opening, welcome address",
    "agenda.d1.s2.desc": "Today we have more data than ever, more tools than ever and more initiatives than ever.\n\nAnd yet, a growing number of organisations seem to be struggling with the same things: slow decisions, unimplemented changes and results that fail to meet expectations.\n\nThat's why this is not a conference about trends.\n\nThis is a conference about a much more uncomfortable question: what happens between what we know and what we actually do?\n\nOver these two days we won't talk about ideals, but about reality: how organisations make decisions, where those decisions get lost, and what happens when we add people into the mix, with all their limitations.\n\nBecause perhaps the biggest problem today is not a lack of knowledge.\n\nIt's that we are no longer sure what we actually understand.",
    "agenda.d1.s3.title": "How organisations make decisions when the rules of the game change",
    "agenda.d1.s3.desc": "The key question is no longer how to grow, but how to remain functional?",
    "agenda.d1.s4.title": "When the rules no longer apply – Are organisations still playing the old game? Powered by GrECo",
    "agenda.d1.s5.title": "Coffee break",
    "agenda.d1.s6.title": "Growth doesn't kill organisations. Unclear decisions do.",
    "agenda.d1.s7.title": "Why don't organisations implement the decisions they make themselves?",
    "agenda.d1.s8.title": "Lunch",
    "agenda.d1.s9.title": "Salaries are rising. Is value rising too?",
    "agenda.d1.s10.title": "If we understand the problem, why aren't we solving it?",
    "agenda.d1.s11.title": "Coffee break",
    "agenda.d1.s12.title": "Have we started teaching people things that don't help them?",
    "agenda.d1.s13.title": "Why doesn't people development deliver business value?",
    // Day 2
    "agenda.d2.s1.title": "Coffee & Breakfast",
    "agenda.d2.s2.title": "We know more than ever. We understand less than ever.",
    "agenda.d2.s3.title": "From human psychology to business: Where it stops working in practice",
    "agenda.d2.s4.title": "Coffee Break",
    "agenda.d2.s5.title": "If People & Culture doesn't change behavior, what does?",
    "agenda.d2.s6.title": "What does the business expect from People & Culture but doesn't get? Is it allowed to give negative feedback to People & Culture?",
    "agenda.d2.s7.title": "Coffee Break",
    "agenda.d2.s8.title": "AI accelerates decisions. What if it accelerates mistakes too?",
    "agenda.d2.s9.title": "Closing of the conference and award ceremony",
    "agenda.d2.s10.title": "Lunch & networking",
    "agenda.d2.s10.desc": "Over these two days we touched on many topics: decisions, change, salaries, measurement, people development, and finally AI.\n\nAnd it all comes down to the same thing: organizations don't function poorly because they don't know what to do.\n\nThey function poorly because decisions aren't made properly, aren't carried out properly, and there's no understanding of how results actually come about. And when we add AI to that, we don't get a solution.\n\nWe get a catalyst. An acceleration of everything we already do, the good and the bad.\n\nSo perhaps the most important question that remains after this conference is not: what will we do differently?\n\nbut: what will we finally start to understand before we make the next decision.",
    // Locations
    "agenda.loc.main": "Main Hall",
    "agenda.loc.hallA": "Hall A",
    "agenda.loc.hallB": "Hall B",
    "agenda.loc.workshop": "Workshop Room",

    // Pricing
    "pricing.title": "Registrations",
    "pricing.subtitle": "After you complete and send the registration form, your conference registration is created.\nAfter registration, you will receive a binding fee offer by email.",
    "pricing.vatNote": "*Listed prices exclude VAT",
    "pricing.apply": "APPLY",
    "pricing.comingSoon": "Coming soon",
    "pricing.blindBird.period": "until 30 June 2026",
    "pricing.earlyBird.period": "1 July 2026 – 6 October 2026",
    "pricing.regular.period": "from 7 October 2026",
    "pricing.common.f1": "Welcome gift",
    "pricing.common.f2": "Access to all stages",
    "pricing.common.f3": "Full catering for both conference days (coffee, beverages, lunch, finger food…)",
    "pricing.common.f4": "Hotel and taxi discounts",

    // Venue
    "venue.label": "Venue",
    "venue.title": "Mozaik Event Center, Zagreb",
    "venue.desc": "",
    "venue.address": "Address",
    "venue.hotels": "Partner Hotels",
    "venue.hotelsDesc": "Hotel Internacional and Hotel Zonar",
    "venue.parking": "Parking",
    "venue.parkingDesc": "within the HOB Center complex",

    // Sponsors
    "sponsors.badge": "",
    "sponsors.title": "Partners & Sponsors",
    "sponsors.subtitle": "",
    "sponsors.platinum": "PARTNERS",
    "sponsors.gold": "PATRONS",
    "sponsors.community": "SPONSORS",
    "sponsors.organizer": "Conference Organizer",
    "sponsors.interested": "Interested in sponsorship?",
    "sponsors.packages": "View sponsorship packages →",

    // CTA
    "cta.title": "Don't Miss the Event of the Year",
    "cta.subtitle": "Blind bird offer valid until June 30, 2026. Join 500+ leaders transforming the future of work.",
    "cta.buyNow": "Reserve Registration",
    "cta.groupPricing": "",
    "cta.refund": "",

    // Footer
    "footer.tagline": "Leading HR & business conference • November 04 – 05, 2026",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.contact": "Contact",
    "footer.sponsorship": "Sponsorship",
    "footer.copyright": "© 2026 ElevateHR Conference. All rights reserved.",

    // Gallery
    "gallery.title": "Take a look at moments from last year's People & Culture HORIZONS conference.",
    "gallery.subtitle": "",

    // Registration Dialog
    "reg.title": "Registration Form",
    "reg.desc": "Fields marked with an asterisk (*) are required.",
    "reg.descNote": "Please verify the accuracy of your data as it will be used for printed accreditation.",
    "reg.ticket": "Ticket",
    "reg.selectType": "Select type *",
    "reg.company": "Company",
    "reg.individual": "Individual",
    "reg.personalData": "Personal Information",
    "reg.companyData": "Company Information",
    "reg.fullName": "Full name *",
    "reg.email": "Email address *",
    "reg.phone": "Phone number *",
    "reg.companyName": "Company name *",
    "reg.companyNameIndividual": "Company you work for *",
    "reg.companyAddress": "Company address *",
    "reg.cityPostal": "City and postal code *",
    "reg.companyOIB": "Company tax ID *",
    "reg.position": "Your position *",
    "reg.promoCode": "Promo code",
    "reg.disclaimer": "By submitting this form, you consent to the processing of your personal data entered in the form. The data will be used exclusively by the conference organizer for the purpose of participant registration, accreditation, and sending important information and notifications related to the conference. The organizer will retain the data for five years after the conference ends.",
    "reg.note": "Note:",
    "reg.submitting": "Submitting...",
    "reg.submit": "Submit Registration",
    "reg.toastTitle": "Thank you for your registration!",
    "reg.toastDesc": "You will soon receive a payment offer at your email address.",
    "reg.mailSubjectPrefix": "Registration",
    "reg.mailTicket": "Ticket",
    "reg.mailType": "Type",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("hr");

  const t = (key: string): string => {
    const currentTranslation = translations[lang][key];
    if (currentTranslation !== undefined) return currentTranslation;

    const fallbackTranslation = translations["hr"][key];
    if (fallbackTranslation !== undefined) return fallbackTranslation;

    return key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
