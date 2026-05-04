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
    "keynote.speakerName": "Josip Funda",
    "keynote.speakerTitle": "Senior Economist, World Bank Group",

    // Speakers
     "speakers.label": "",
     "speakers.title": "Govornici",
     "speakers.subtitle": "",
      "speakers.bio.marija_felkel": "Marija Felkel je HR stručnjakinja s više od 25 godina međunarodnog iskustva u visokotehnološkim inovativnim industrijama. Jedna je od autoriteta na području ljudskih potencijala s izvrsnim poznavanjem globalnih trendova. Posebnu pažnju pridaje identifikaciji i razvoju talenata, stvaranju uspješnog partnerstva između poslovanja i funkcije ljudskih potencijala te upravljanju kulturom i iskustvom zaposlenika. Aktivno promiče STEM područja, ravnopravnost žena u biznisu i jednake zastupljenosti na upravljačkim pozicijama te ističe vrijednosti uključivog i odgovornog vodstva. Od 1. veljače 2026. godine, nakon četiri godine rada u Nomad Foods kompaniji pridružila se Perutnina Ptuj Grupi gdje će njezin fokus biti na omogućavanju poslovne uspještnosti, jačanju organizacijskih struktura, podršci učinkovitosti vodstva te osiguravnju da ljudski potencijali djeluju kao pravi partner poslovanju na svim tržištima na kojima Grupa djeluje.",
     "speakers.bio.sanja_skrinjar": "Sanja Škrinjar svoju profesionalnu karijeru razvija u području ljudskih potencijala i organizacijske psihologije, s posebnim interesom za razumijevanje odnosa između ljudi, njihovih uloga i organizacijskog konteksta.\n\nKroz rad na projektima privlačenja i zapošljavanja talenata, razvoja zaposlenika, organizacijskih procesa i različitih HR inicijativa razvila je interes za psihološku procjenu, razumijevanje organizacijskih dinamika te analitički pristup u sagledavanju organizacijskih izazova.\n\nU svom radu nastoji povezati razumijevanje ljudskog ponašanja s konkretnim organizacijskim potrebama, s ciljem razvoja kvalitetnijih praksi i radnih okruženja u kojima pojedinci i timovi mogu ostvariti svoj potencijal. Vjeruje da kvalitetna organizacijska rješenja najčešće počinju dobrim razumijevanjem problema i postavljanjem pravih pitanja.",
     "speakers.bio.mirela_kotarac": "Mirela Kotarac je direktorica ljudskih resursa i članica uprave u tvrtki Cemex Hrvatska. Karijeru je započela 1997. godine u IT industriji na poslovima marketinga i prodaje. 2007. godine dolazi u CEMEX u IT odjel, a 2013. godine prelazi u ljudske resurse iste tvrtke gdje je pokrivala gotovo sva područja HR-a, od organizacije i restrukturiranja, preko procjene učinka, do radno-pravnih odnosa.\n\nU sektoru ljudskih resursa započela je na poziciji voditeljice plaća, planiranja i razvoja s fokusom na uvođenje procesa procjene talenata, modela procjene radnog učinka te procjene radnih mjesta s usklađivanjem plaća i platnih razreda.\n\nOd 2017. godine kao direktorica ljudskih resursa sa svojim timom radi na unaprjeđenju cjelovitog sustava upravljanja ljudskim resursima temeljenom na životnom ciklusu zaposlenika, s naglaskom na razvoj modela nagrađivanja ali i posebne brige za zdravlje zaposlenika kroz programe pomoći za zdravstvene potrebe.\n\nPosebno podržava razvoj žena u organizaciji i zajednici, te je 2023. godine pokrenula projekt Mentorstva za žene između više poslodavaca. Diplomirala je i magistrirala ekonomiju na Ekonomskom fakultetu u Splitu.",
      "speakers.bio.ivan_zubak": "Ivan Zubak je CEO Zubak Grupe, obiteljske tvrtke koja uspješno posluje već gotovo 50 godina. Nakon završetka srednje škole u Philadelphia-i, vraća se u Hrvatsku i upisuje ZŠEM te 2006.g. diplomira kao najbolji student generacije. U obiteljski biznis, pokrenut od strane njegovog oca još 1978.g., uključen je od najranije dobi te je prošao gotovo sve odjele, od autopraonice, servisa, skladišta, prodaje, računovodstva, marketinga, ljudskih potencijala te istraživanja i razvoja.\n\nDanas, sa gotovo 20 godina poslovnog iskustva, kao CEO tvrtke koja zapošljava više od 600 zaposlenika i svoje usluge pruža u Hrvatskoj, ali i Austriji, BiH, Crnoj Gori, Italiji, Sjevernoj Makedoniji, Sloveniji i Srbiji, zadužen je za izradu strategije i provedbu iste za cijelu grupu. Uz to direktno je zadužen za diviziju ORYX Asistencije, te odjele Internog auditiranja i Ljudskih potencijala.\n\nPoziciju CEO-a preuzeo je od svoga oca 2020.g., čime je završena tranzicija poslovanja na iduću obiteljsku generaciju, a o čemu voli dijeliti svoja iskustva. Glavna strast u poslu su mu projekti povezani s digitalnom transformacijom te ljudskim potencijalima. Pored ovoga od 2021.g. služi kao član Programskog savjeta ZŠEM-a.",
      "speakers.bio.ivan_beslic": "Ivan Bešlić je osnovao Sofascore sa Zlatkom Hrkaćem, svojim prijateljem iz djetinjstva, kada su shvatili da sport povezuje ljude s više emocija nego bilo što drugo. Vođena ovim spoznajom, tvrtka Sofascore je brzo postala vodeća platforma za naprednu sportsku statistiku, koja se koristi u svim zemljama svijeta. Kao Chief Strategy Officer, Ivan je zadužen za širenje i jačanje tvrtke na ključnim svjetskim tržištima. Uz zaposlenike čiji će broj ubrzo prijeći 300 na četiri kontinenta, Ivanova strategija trebala bi osigurati ključni cilj Sofascorea – pratiti sve sportove i sve utakmice na jednom mjestu.",
      "speakers.bio.iva_rogovic_lekic": "Iva, rođena u Pazinu, po zanimanju je profesionalna pilotkinja i diplomirana inženjerka zračnog prometa. Nakon uspješne karijere u zrakoplovstvu i brokerskim poslovima u poslovnoj avijaciji, \"slučajno\" je završila u osiguranju – najprije u Triglavu, gdje je vodila brokerski kanal, a potom obnašala upravljačke funkcije u brokerskim društvima.\n\nUspješna je poslovna liderica s bogatim iskustvom u zrakoplovnoj i osiguravajućoj industriji. Karijeru je započela sudjelovanjem u pokretanju prve hrvatske poslovne aviokompanije, gdje je kao suvlasnica, izvršna direktorica i pilotkinja postavila temelje modernog pristupa u avijaciji.\n\nPotom energiju usmjerava prema osiguravajućem sektoru. Kao izvršna direktorica u Marsh McLennanu, ostvarila je značajne rezultate – pod njezinim vodstvom Marsh Croatia doživio je četverostruki porast prihoda. Njezino prepoznavanje tržišnih prilika i implementacije učinkovitih strategija rezultiralo je osvajanjem HUM CROMA nagrade 2023., čime je prepoznata kao jedna od najuglednijih žena u hrvatskom poslovnom svijetu.\n\nDanas vodi novu fazu svoje profesionalne priče kao CEO GrECo specialty, zadužena za specialty business u 21. zemlji. Portfolio obuhvaća područja energetike, avijacije, hrane i poljoprivrede, transporta i logistike, osiguranja kredita, financijskih linija, cyber sigurnosti i drugih specijaliziranih segmenata. S više od 20 godina iskustva, dokazano pokazuje da inovativan pristup i prilagodljivost tržišnim izazovima mogu dovesti do poslovnih uspjeha i ostaviti značajan trag na tržištu.\n\nOsim poslovnih uspjeha, ističe svoju svestranost i u privatnom životu. Strastvena je ljetna kite surferica i zimska skijašica. Kako bi bila sigurna da će situaciju uvijek imati pod kontrolom, jutra je rezervirala za dobar trening kick boxa. \"Mirniju\" stranu je ostavila za uživanje u dizajnu interijera, kroz što oslobađa i kreativnu energiju.",

    // Agenda
    "agenda.label": "Raspored",
    "agenda.title": "Program konferencije",
    "agenda.subtitle": "",
    "agenda.disclaimer": "*program je podložan promjenama",
    "agenda.day1": "1. dan - 26.11.2026.",
    "agenda.day2": "2. dan - 27.11.2026.",
    
    "speakers.host.badge": "Voditeljica konferencije",
    "speakers.host.name": "Antonija Mandić",
    "speakers.host.role": "Voditeljica konferencije",
    "hero.host.label": "Vodi konferenciju:",
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
    "agenda.loc.air": "Dvorana zrak",
    "agenda.loc.earth": "Dvorana zemlja",
    "agenda.loc.fire": "Dvorana vatra",
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
    "footer.followUs": "Pratite nas",
    "footer.contact": "Kontakt",
    "footer.programOrgMedia": "Program, organizacija, mediji i sponzori",
    "footer.orgTitle": "People & Culture HORIZONS. - DeeP Project",
    "footer.copyright": "© 2026 People & Culture HORIZONS. Sva prava pridržana.",
    "footer.privacyPolicy": "Politika privatnosti",
    "footer.privacyModalTitle": "Politika privatnosti",
    "footer.privacyModalDesc": "Detalji o privatnosti i korištenju kolačića.",
    "footer.parking": "u sklopu HOB centra",

    // Gallery
    "gallery.title": "",
    "gallery.subtitle": "Pogledajte trenutke s prošlogodišnje konferencije People & Culture HORIZONS.",

    // Registration Dialog
    "reg.title": "Obrazac za prijavu",
    "reg.desc": "Polja označena zvjezdicom (*) potrebno je obavezno ispuniti.",
    "reg.descNote": "Molimo provjerite točnost upisanih podataka jer će se isti koristiti za potrebe tiskane akreditacije.",
    "reg.ticket": "Kotizacija",
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
    "reg.ok": "U redu",
    "reg.mailSubjectPrefix": "Prijava",
    "reg.mailTicket": "Kotizacija",
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
    "keynote.speakerName": "Josip Funda",
    "keynote.speakerTitle": "Senior Economist, World Bank Group",

    // Speakers
     "speakers.label": "",
     "speakers.title": "Speakers",
     "speakers.subtitle": "",
      "speakers.bio.marija_felkel": "Marija Felkel is an HR professional with over 25 years of international experience in high-tech innovative industries. She is one of the authorities in the field of human resources with excellent knowledge of global trends. She pays special attention to talent identification and development, creating successful partnerships between business and the HR function, and managing employee culture and experience. She actively promotes STEM fields, gender equality in business, and equal representation in management positions, highlighting the values of inclusive and responsible leadership. As of February 1, 2026, after four years at Nomad Foods, she joined the Perutnina Ptuj Group where her focus will be on enabling business success, strengthening organizational structures, supporting leadership effectiveness, and ensuring that human resources act as a true business partner across all markets where the Group operates.",
       "speakers.bio.sanja_skrinjar": "Sanja Škrinjar develops her professional career in the field of human resources and organizational psychology, with a special interest in understanding the relationships between people, their roles, and organizational context.\n\nThrough her work on talent attraction and recruitment projects, employee development, organizational processes, and various HR initiatives, she has developed an interest in psychological assessment, understanding organizational dynamics, and an analytical approach to viewing organizational challenges.\n\nIn her work, she strives to connect the understanding of human behavior with concrete organizational needs, with the aim of developing better practices and work environments where individuals and teams can reach their potential. She believes that quality organizational solutions most often begin with a good understanding of the problem and asking the right questions.",
        "speakers.bio.mirela_kotarac": "Mirela Kotarac is the HR Director and Member of the Management Board at Cemex Croatia. She began her career in 1997 in the IT industry in marketing and sales. In 2007, she joined CEMEX's IT department, and in 2013, she transitioned to human resources, where she covered nearly all HR areas, from organization and restructuring to performance evaluation and labor law relations.\n\nIn the HR sector, she started as Head of Payroll, Planning and Development, focusing on introducing talent assessment processes, performance evaluation models, and job evaluation with salary and pay grade alignment.\n\nSince 2017, as HR Director, she and her team have been working on improving the comprehensive HR management system based on the employee lifecycle, with emphasis on developing reward models and special care for employee health through health assistance programs.\n\nShe particularly supports the development of women in organizations and the community, and in 2023, she launched a Mentorship for Women project across multiple employers. She holds a master's degree in economics from the Faculty of Economics in Split.",
         "speakers.bio.ivan_zubak": "Ivan Zubak is the CEO of Zubak Group, a family business that has been successfully operating for nearly 50 years. After completing high school in Philadelphia, he returned to Croatia and enrolled at ZSEM, graduating in 2006 as the top student of his generation. He has been involved in the family business, founded by his father in 1978, from an early age, working through nearly every department — from the car wash, service, warehouse, sales, accounting, marketing, human resources, to research and development.\n\nToday, with nearly 20 years of business experience, as CEO of a company employing over 600 people and providing services in Croatia, Austria, Bosnia and Herzegovina, Montenegro, Italy, North Macedonia, Slovenia, and Serbia, he is responsible for creating and implementing strategy for the entire group. He is also directly responsible for the ORYX Assistance division and the Internal Audit and Human Resources departments.\n\nHe took over the CEO position from his father in 2020, completing the business transition to the next family generation — an experience he enjoys sharing. His main professional passions are projects related to digital transformation and human resources. Since 2021, he has also served as a member of the ZSEM Program Council.",
         "speakers.bio.ivan_beslic": "Ivan Bešlić co-founded Sofascore with Zlatko Hrkać, his childhood friend, when they realized that sport connects people with more emotion than anything else. Driven by this insight, Sofascore quickly became a leading platform for advanced sports statistics, used in every country in the world. As Chief Strategy Officer, Ivan is responsible for expanding and strengthening the company in key global markets. With employees soon to exceed 300 across four continents, Ivan's strategy should ensure Sofascore's key goal — tracking all sports and all matches in one place.",
         "speakers.bio.iva_rogovic_lekic": "Iva, born in Pazin, is a professional pilot and graduate engineer of air traffic by profession. After a successful career in aviation and brokerage in business aviation, she 'accidentally' ended up in insurance – first at Triglav, where she led the brokerage channel, and then held management positions in brokerage companies.\n\nShe is a successful business leader with extensive experience in the aviation and insurance industries. She began her career by participating in the launch of the first Croatian business airline, where as co-owner, executive director, and pilot, she laid the foundations of a modern approach to aviation.\n\nShe then directed her energy toward the insurance sector. As executive director at Marsh McLennan, she achieved significant results – under her leadership, Marsh Croatia experienced a fourfold increase in revenue. Her recognition of market opportunities and implementation of effective strategies resulted in winning the HUM CROMA Award 2023, recognizing her as one of the most prominent women in the Croatian business world.\n\nToday she leads a new phase of her professional story as CEO of GrECo specialty, responsible for specialty business in 21 countries. The portfolio covers areas of energy, aviation, food and agriculture, transport and logistics, credit insurance, financial lines, cyber security, and other specialized segments. With over 20 years of experience, she demonstrably shows that an innovative approach and adaptability to market challenges can lead to business success and leave a significant mark on the market.\n\nBeyond business achievements, she highlights her versatility in private life as well. She is a passionate summer kite surfer and winter skier. To make sure she always has the situation under control, she reserves her mornings for a good kickboxing workout. The 'calmer' side she has left for enjoying interior design, through which she also releases creative energy.",

    // Agenda
    "agenda.label": "Schedule",
    "agenda.title": "Conference Program",
    "agenda.subtitle": "",
    "agenda.disclaimer": "*program is subject to change",
    "agenda.day1": "Day 1 - 26.11.2026.",
    "agenda.day2": "Day 2 - 27.11.2026.",
    
    "speakers.host.badge": "Conference Host",
    "speakers.host.name": "Antonija Mandić",
    "speakers.host.role": "Conference Host",
    "hero.host.label": "Hosted by:",
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
    "agenda.loc.air": "Hall Zrak",
    "agenda.loc.earth": "Hall Zemlja",
    "agenda.loc.fire": "Hall Vatra",
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
    "footer.followUs": "Follow us",
    "footer.contact": "Contact",
    "footer.programOrgMedia": "Program, organization, media & sponsors",
    "footer.orgTitle": "People & Culture HORIZONS. - DeeP Project",
    "footer.copyright": "© 2026 People & Culture HORIZONS. All rights reserved.",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.privacyModalTitle": "Privacy Policy",
    "footer.privacyModalDesc": "Details about privacy and cookie usage.",
    "footer.parking": "within the HOB Center complex",

    // Gallery
    "gallery.title": "Take a look at moments from last year's People & Culture HORIZONS conference.",
    "gallery.subtitle": "",

    // Registration Dialog
    "reg.title": "Registration Form",
    "reg.desc": "Fields marked with an asterisk (*) are required.",
    "reg.descNote": "Please verify the accuracy of your data as it will be used for printed accreditation.",
    "reg.ticket": "Registration",
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
    "reg.ok": "OK",
    "reg.mailSubjectPrefix": "Registration",
    "reg.mailTicket": "Registration",
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
