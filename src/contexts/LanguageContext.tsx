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
    "topics.foundations.desc": "Kako postaviti jasnu organizacijsku strukturu i definirati odgovornosti koje omogućuju brže donošenje odluka i stabilan rast.",
    "topics.functioning.title": "Funkcioniranje",
    "topics.functioning.desc": "Kako organizacije upravljaju ljudima i promjenama – od HR praksi do uspješnog vođenja transformacija u dinamičnom okruženju.",
    "topics.results.title": "Rezultati",
    "topics.results.desc": "Kako mjeriti i unaprijediti rezultate kroz pravedne sustave nagrađivanja i povećanje produktivnosti timova.",
    "topics.people.title": "Ljudi",
    "topics.people.desc": "Razumijevanje ponašanja zaposlenika i razvoj njihovih potencijala kao ključ dugoročnog uspjeha organizacije.",
    "topics.future.title": "Budućnost",
    "topics.future.desc": "Kako umjetna inteligencija i regulatorni okvir oblikuju budućnost rada i poslovanja – te što to znači za organizacije danas.",

    // Keynote
    "keynote.label": "KEYNOTE PREDAVANJE",
    "keynote.title": "",
    "keynote.p1": "",
    "keynote.p2": "",
    "keynote.cta": "Rezerviraj svoje mjesto →",
    "keynote.years": "Godina istraživanja",
    "keynote.speakerAlt": "Glavna govornica",

    // Speakers
    "speakers.label": "",
    "speakers.title": "Govornici",
    "speakers.subtitle": "",
    "speakers.s1.role": "Chief People Officer, Horizon Global",
    "speakers.s1.topic": "Glavna govornica",
    "speakers.s2.role": "VP of Talent, Atlas Corp",
    "speakers.s2.topic": "Akvizicija talenata",
    "speakers.s3.role": "Osnivačica, WorkWell Institute",
    "speakers.s3.topic": "Iskustvo zaposlenika",
    "speakers.s4.role": "CTO, PeopleStack",
    "speakers.s4.topic": "HR tehnologija",

    // Agenda
    "agenda.label": "Raspored",
    "agenda.title": "Program konferencije",
    "agenda.subtitle": "",
    "agenda.day1": "1. dan - 26.11.2026.",
    "agenda.day2": "2. dan - 27.11.2026.",
    "agenda.type.keynote": "Predavanje",
    "agenda.type.talk": "Govor",
    "agenda.type.panel": "Panel",
    "agenda.type.workshop": "Radionica",
    "agenda.type.break": "Pauza",
    "agenda.type.networking": "Networking",
    // Day 1 sessions
    "agenda.d1.s1.title": "Registracija i kava dobrodošlice",
    "agenda.d1.s1.desc": "Prijavite se na recepciji, preuzmite akreditaciju i paket dobrodošlice te uživajte u svježe kuhanoj kavi prije početka programa.",
    "agenda.d1.s2.title": "Uvodno predavanje: Nova era rada",
    "agenda.d1.s2.desc": "Istražite kako hibridni modeli, usvajanje AI-ja i promjenjiva očekivanja zaposlenika temeljito mijenjaju radno mjesto. Dr. Mitchell dijeli istraživanjima potkrijepljene uvide i hrabru viziju budućnosti.",
    "agenda.d1.s3.title": "Pauza za kavu",
    "agenda.d1.s3.desc": "Napunite baterije i povežite se s ostalim sudionicima u prostoru za networking.",
    "agenda.d1.s4.title": "Zapošljavanje pomoću AI-ja: Izvan životopisa",
    "agenda.d1.s4.desc": "Tradicionalni životopisi pričaju samo dio priče. Saznajte kako vodeće organizacije koriste AI za procjenu vještina, kulturalne usklađenosti i potencijala — uz zadržavanje ljudskog elementa.",
    "agenda.d1.s4.track": "Akvizicija talenata",
    "agenda.d1.s5.title": "Izgradnja kulture pripadnosti",
    "agenda.d1.s5.desc": "Raznolikost je činjenica; uključivost je izbor; pripadnost je rezultat. Otkrijte okvire za stvaranje radnih mjesta gdje svaki glas vrijedi i svaka osoba napreduje.",
    "agenda.d1.s5.track": "Iskustvo zaposlenika",
    "agenda.d1.s6.title": "Ručak i networking",
    "agenda.d1.s6.desc": "Uživajte u ručku dok se povezujete s govornicima, sponzorima i kolegama za tematskim stolovima za raspravu.",
    "agenda.d1.s7.title": "Panel: Navigacija globalnom usklađenošću",
    "agenda.d1.s7.desc": "Međunarodni panel pravnih i HR stručnjaka raspravlja o evoluciji zakona o radu, propisa o privatnosti podataka i etičkih pitanja pri implementaciji AI-ja u HR procesima.",
    "agenda.d1.s7.track": "HR usklađenost",
    "agenda.d1.s8.title": "Radionica: OKR-ovi koji stvarno funkcioniraju",
    "agenda.d1.s8.desc": "Praktična sesija u kojoj ćete izraditi stvarne OKR-ove za svoj tim, naučiti uobičajene zamke i otići s planom implementacije za 90 dana. Ponesite laptop!",
    "agenda.d1.s8.track": "Učinak i rast",
    "agenda.d1.s9.title": "Popodnevna pauza",
    "agenda.d1.s9.desc": "Lagani osvježavajući napici i prilika za posjet štandovima sponzora u izložbenoj dvorani.",
    "agenda.d1.s10.title": "Razgovor uz kamin: Vodstvo u neizvjesnosti",
    "agenda.d1.s10.desc": "Intimni razgovor o tome što je stvarno potrebno za vođenje timova kroz ekonomske promjene, organizacijske transformacije i nepoznato — s iskrenim pričama s prve linije.",
    "agenda.d1.s11.title": "Prijem dobrodošlice i networking",
    "agenda.d1.s11.desc": "Proslavite kraj prvog dana uz piće, živu glazbu i brojne prilike za stvaranje značajnih veza.",
    // Day 2 sessions
    "agenda.d2.s1.title": "Jutarnja kava i susreti kolega",
    "agenda.d2.s1.desc": "Započnite dan uz kavu i pridružite se stolu za upoznavanje organiziranom prema industriji, ulozi ili području interesa.",
    "agenda.d2.s2.title": "Predavanje: Budućnost HR tehnologije",
    "agenda.d2.s2.desc": "Od analitike ljudi do AI kopilota za HR timove — David otkriva tehnološke trendove koji će definirati sljedeće desetljeće ljudskih resursa i kako pripremiti svoju organizaciju.",
    "agenda.d2.s3.title": "Pauza za kavu",
    "agenda.d2.s3.desc": "Uzmite kavu i istražite interaktivne demo stanice naših tehnoloških partnera.",
    "agenda.d2.s4.title": "Distribuirani timovi: Kako rad na daljinu funkcionira",
    "agenda.d2.s4.desc": "Upravljanje kroz vremenske zone, kulture i komunikacijske stilove. Priya dijeli provjerene strategije iz skaliranja tima od 2.000 ljudi raspoređenih u 30 zemalja.",
    "agenda.d2.s4.track": "Globalna radna snaga",
    "agenda.d2.s5.title": "Programi dobrobiti koji čine razliku",
    "agenda.d2.s5.desc": "Većina programa dobrobiti ne uspijeva jer liječe simptome, a ne sustave. Naučite kako dizajnirati holističke strategije dobrobiti koje poboljšavaju zadržavanje, angažman i učinak.",
    "agenda.d2.s5.track": "Iskustvo zaposlenika",
    "agenda.d2.s6.title": "Ručak i izložba sponzora",
    "agenda.d2.s6.desc": "Uživajte u ručku dok istražujete najnovija HR rješenja naših sponzora u izložbenom prostoru.",
    "agenda.d2.s7.title": "Radionica: Brendiranje poslodavca",
    "agenda.d2.s7.desc": "Vaš brend poslodavca najmoćniji je alat za zapošljavanje. Ova interaktivna radionica pokriva razvoj EVP-a, strategiju društvenih mreža i mjerenje utjecaja brenda na rezultate zapošljavanja.",
    "agenda.d2.s7.track": "Akvizicija talenata",
    "agenda.d2.s8.title": "Panel: Adaptivni lider",
    "agenda.d2.s8.desc": "Što odvaja dobre lidere od sjajnih u svijetu koji se brzo mijenja? Panelisti dijele perspektive o emocionalnoj inteligenciji, adaptivnom razmišljanju i izgradnji otpornih timova.",
    "agenda.d2.s8.track": "Budućnost vodstva",
    "agenda.d2.s9.title": "Završno predavanje: Ljudi na prvom mjestu",
    "agenda.d2.s9.desc": "Dr. Mitchell spaja teme konferencije u snažnom završnom predavanju, ostavljajući sudionike s konkretnim obvezama i obnovljenim osjećajem svrhe.",
    "agenda.d2.s10.title": "Završne riječi i oproštaj",
    "agenda.d2.s10.desc": "Završna razmišljanja organizatora, nagradne igre i topao oproštaj do ElevateHR 2027.",
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
    "topics.foundations.desc": "How to establish a clear organisational structure and define responsibilities that enable faster decision-making and stable growth.",
    "topics.functioning.title": "Functioning",
    "topics.functioning.desc": "How organisations manage people and change – from HR practices to successfully leading transformations in a dynamic environment.",
    "topics.results.title": "Results",
    "topics.results.desc": "How to measure and improve results through fair reward systems and increased team productivity.",
    "topics.people.title": "People",
    "topics.people.desc": "Understanding employee behaviour and developing their potential as the key to long-term organisational success.",
    "topics.future.title": "Future",
    "topics.future.desc": "How artificial intelligence and the regulatory framework are shaping the future of work and business – and what it means for organisations today.",

    // Keynote
    "keynote.label": "KEYNOTE ADDRESS",
    "keynote.title": "",
    "keynote.p1": "",
    "keynote.p2": "",
    "keynote.cta": "Reserve Your Seat →",
    "keynote.years": "Years of Research",
    "keynote.speakerAlt": "Keynote Speaker",

    // Speakers
    "speakers.label": "",
    "speakers.title": "Speakers",
    "speakers.subtitle": "",
    "speakers.s1.role": "Chief People Officer, Horizon Global",
    "speakers.s1.topic": "Keynote Speaker",
    "speakers.s2.role": "VP of Talent, Atlas Corp",
    "speakers.s2.topic": "Talent Acquisition",
    "speakers.s3.role": "Founder, WorkWell Institute",
    "speakers.s3.topic": "Employee Experience",
    "speakers.s4.role": "CTO, PeopleStack",
    "speakers.s4.topic": "HR Technology",

    // Agenda
    "agenda.label": "Schedule",
    "agenda.title": "Conference Program",
    "agenda.subtitle": "",
    "agenda.day1": "Day 1 - 26.11.2026.",
    "agenda.day2": "Day 2 - 27.11.2026.",
    "agenda.type.keynote": "Keynote",
    "agenda.type.talk": "Talk",
    "agenda.type.panel": "Panel",
    "agenda.type.workshop": "Workshop",
    "agenda.type.break": "Break",
    "agenda.type.networking": "Networking",
    // Day 1
    "agenda.d1.s1.title": "Registration & Welcome Coffee",
    "agenda.d1.s1.desc": "Check in at the reception, collect your badge and welcome pack, and enjoy freshly brewed coffee before the program begins.",
    "agenda.d1.s2.title": "Opening Keynote: The New Era of Work",
    "agenda.d1.s2.desc": "Explore how hybrid models, AI adoption, and shifting employee expectations are fundamentally changing the workplace. Dr. Mitchell shares research-backed insights and a bold vision for the future.",
    "agenda.d1.s3.title": "Coffee Break",
    "agenda.d1.s3.desc": "Recharge and connect with fellow attendees in the networking lounge.",
    "agenda.d1.s4.title": "AI-Powered Hiring: Beyond the Resume",
    "agenda.d1.s4.desc": "Traditional resumes tell only part of the story. Learn how leading organizations use AI to assess skills, cultural fit, and potential — while keeping the human element.",
    "agenda.d1.s4.track": "Talent Acquisition",
    "agenda.d1.s5.title": "Building a Culture of Belonging",
    "agenda.d1.s5.desc": "Diversity is a fact; inclusion is a choice; belonging is an outcome. Discover frameworks for creating workplaces where every voice matters and every person thrives.",
    "agenda.d1.s5.track": "Employee Experience",
    "agenda.d1.s6.title": "Lunch & Networking",
    "agenda.d1.s6.desc": "Enjoy lunch while connecting with speakers, sponsors, and peers at themed discussion tables.",
    "agenda.d1.s7.title": "Panel: Navigating Global Compliance",
    "agenda.d1.s7.desc": "An international panel of legal and HR experts discusses the evolution of labor laws, data privacy regulations, and ethical considerations when implementing AI in HR processes.",
    "agenda.d1.s7.track": "HR Compliance",
    "agenda.d1.s8.title": "Workshop: OKRs That Actually Work",
    "agenda.d1.s8.desc": "A hands-on session where you'll build real OKRs for your team, learn common pitfalls, and leave with a 90-day implementation plan. Bring your laptop!",
    "agenda.d1.s8.track": "Performance & Growth",
    "agenda.d1.s9.title": "Afternoon Break",
    "agenda.d1.s9.desc": "Light refreshments and an opportunity to visit sponsor booths in the exhibition hall.",
    "agenda.d1.s10.title": "Fireside Chat: Leadership in Uncertainty",
    "agenda.d1.s10.desc": "An intimate conversation about what it really takes to lead teams through economic shifts, organizational transformations, and the unknown — with candid stories from the front lines.",
    "agenda.d1.s11.title": "Welcome Reception & Networking",
    "agenda.d1.s11.desc": "Celebrate the end of day one with drinks, live music, and plenty of opportunities to build meaningful connections.",
    // Day 2
    "agenda.d2.s1.title": "Morning Coffee & Peer Meetups",
    "agenda.d2.s1.desc": "Start the day with coffee and join a meetup table organized by industry, role, or area of interest.",
    "agenda.d2.s2.title": "Keynote: The Future of HR Technology",
    "agenda.d2.s2.desc": "From people analytics to AI copilots for HR teams — David reveals the technology trends that will define the next decade of human resources and how to prepare your organization.",
    "agenda.d2.s3.title": "Coffee Break",
    "agenda.d2.s3.desc": "Grab a coffee and explore interactive demo stations from our technology partners.",
    "agenda.d2.s4.title": "Distributed Teams: Making Remote Work Work",
    "agenda.d2.s4.desc": "Managing across time zones, cultures, and communication styles. Priya shares proven strategies from scaling a 2,000-person team across 30 countries.",
    "agenda.d2.s4.track": "Global Workforce",
    "agenda.d2.s5.title": "Well-Being Programs That Make a Difference",
    "agenda.d2.s5.desc": "Most well-being programs fail because they treat symptoms, not systems. Learn how to design holistic well-being strategies that improve retention, engagement, and performance.",
    "agenda.d2.s5.track": "Employee Experience",
    "agenda.d2.s6.title": "Lunch & Sponsor Exhibition",
    "agenda.d2.s6.desc": "Enjoy lunch while exploring the latest HR solutions from our sponsors in the exhibition space.",
    "agenda.d2.s7.title": "Workshop: Employer Branding",
    "agenda.d2.s7.desc": "Your employer brand is your most powerful hiring tool. This interactive workshop covers EVP development, social media strategy, and measuring brand impact on hiring results.",
    "agenda.d2.s7.track": "Talent Acquisition",
    "agenda.d2.s8.title": "Panel: The Adaptive Leader",
    "agenda.d2.s8.desc": "What separates good leaders from great ones in a rapidly changing world? Panelists share perspectives on emotional intelligence, adaptive thinking, and building resilient teams.",
    "agenda.d2.s8.track": "Future of Leadership",
    "agenda.d2.s9.title": "Closing Keynote: People First",
    "agenda.d2.s9.desc": "Dr. Mitchell weaves together the conference themes in a powerful closing keynote, leaving attendees with concrete commitments and a renewed sense of purpose.",
    "agenda.d2.s10.title": "Closing Remarks & Farewell",
    "agenda.d2.s10.desc": "Final reflections from the organizers, prize drawings, and a warm farewell until ElevateHR 2027.",
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
