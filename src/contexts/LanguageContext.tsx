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
      "speakers.bio.mladen_pejkovic": "Mladen Pejković je iskusni poslovni i tehnološki lider s više od 25 godina iskustva u ICT industriji i vođenju velikih organizacijskih transformacija. Trenutno obnaša funkciju starijeg izvršnog direktora za transformaciju i ICT u Atlantic Grupi, gdje je odgovoran za digitalnu transformaciju, tehnološki razvoj te upravljanje ključnim poslovnim i IT procesima na razini Grupe.\n\nTijekom karijere obnašao je niz vodećih pozicija u međunarodnim kompanijama, uključujući Telekom Austria Grupu i Vipnet, gdje je bio odgovoran za strategiju, razvoj tehnologije, operativno upravljanje te implementaciju kompleksnih transformacijskih projekata i akvizicija. Ima bogato iskustvo u razvoju telekomunikacijskih i IT sustava te vođenju organizacija kroz tehnološke i poslovne promjene.\n\nDiplomirao je na Fakultetu elektrotehnike i računarstva u Zagrebu, a dodatno se usavršavao na prestižnim institucijama poput Harvard Business School, INSEAD-a i Chicago Booth School of Business. Aktivno doprinosi zajednici kroz angažmane u znanstvenim i obrazovnim institucijama te je čest predavač na međunarodnim konferencijama.",

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
    "agenda.type.workshop": "Masterclass",
    "agenda.type.break": "Pauza",
    "agenda.type.networking": "Networking",
    // Day 1 sessions
    "agenda.d1.s1.title": "Registracija / kava / doručak",
    "agenda.d1.s2.title": "Otvaranje konferencije, pozdravna riječ",
    "agenda.d1.s2.desc": "Danas imamo više podataka nego ikad, više alata nego ikad i više inicijativa nego ikad.\n\nI unatoč tome, sve veći broj organizacija djeluje kao da se bori s istim stvarima: sporim odlukama, neprovedenim promjenama i rezultatima koji ne prate očekivanja.\n\nZato ovo nije konferencija o trendovima.\n\nOvo je konferencija o jednom puno neugodnijem pitanju: što se događa između onoga što znamo i onoga što stvarno radimo?\n\nTijekom ova dva dana nećemo pričati o idealima, nego o stvarnosti: kako organizacije donose odluke, gdje se one gube i što se događa kada u sve to uključimo ljude, sa svim njihovim ograničenjima.\n\nJer možda najveći problem danas nije nedostatak znanja.\n\nNego to što više nismo sigurni što zapravo razumijemo.",
    "agenda.d1.s3.title": "Kako organizacije donose odluke kada se pravila igre mijenjaju",
    "agenda.d1.s3.desc": "U okruženju u kojem se ekonomska, tehnološka i društvena pravila ubrzano mijenjaju, organizacije se sve teže mogu oslanjati na obrasce odlučivanja koji su funkcionirali u stabilnijim razdobljima. Ključno pitanje više nije samo kako rasti, nego kako ostati funkcionalan dok se mijenjaju tržišta, očekivanja zaposlenika, regulatorni okvir, tehnologija i struktura rizika.\n\nOvo keynote predavanje otvara konferenciju iz šire poslovne i makroekonomske perspektive. Fokus nije na trendovima kao izoliranim pojavama, nego na tome kako promjene u okruženju mijenjaju logiku poslovnog odlučivanja. Kada pravila igre više nisu stabilna, organizacije moraju drugačije procjenjivati rizik, drugačije donositi odluke i drugačije razumjeti vlastitu sposobnost prilagodbe.\n\nPredavanje postavlja temeljno pitanje konferencije: što se događa između onoga što organizacije znaju i onoga što stvarno rade? Jer u trenutku kada je dostupno više podataka, alata i analiza nego ikad, problem sve rjeđe leži u nedostatku informacija, a sve češće u kvaliteti prosudbe, jasnoći odluka i sposobnosti provedbe.",
    "agenda.d1.s4.title": "Kad pravila više ne vrijede: Igraju li organizacije i dalje staru igru? Powered by GrECo",
    "agenda.d1.s4.desc": "Mnoge organizacije danas posluju u novim okolnostima, ali se i dalje oslanjaju na stare pretpostavke o rastu, upravljanju, riziku, ljudima i tržištu. Upravo u tome nastaje jedan od najvećih izazova suvremenog poslovanja: organizacije pokušavaju riješiti nove probleme alatima, navikama i mentalnim modelima iz razdoblja koje više ne postoji.\n\nOvaj panel otvara pitanje organizacijske prilagodbe u vremenu u kojem se stabilnost više ne može podrazumijevati. Ako su promjene postale stalne, ako su rizici sve povezaniji, a odluke sve složenije, tada se i način vođenja organizacija mora promijeniti. No pitanje je jesu li organizacije zaista promijenile način razmišljanja ili su samo dodale nove inicijative na stare obrasce rada.\n\nPanel će povezati perspektivu upravljanja, rizika, organizacijske otpornosti i poslovne odgovornosti. Cilj nije govoriti o promjenama kao apstraktnom pojmu, nego otvoriti pitanje koliko su organizacije stvarno spremne promijeniti način na koji odlučuju, planiraju i reagiraju kada pravila više nisu ista.",
    "agenda.d1.s5.title": "Pauza za kavu",
    "agenda.d1.s6.title": "Rast ne ubija organizacije. Nejasne odluke, da.",
    "agenda.d1.s6.desc": "Rast se često prikazuje kao znak uspjeha, ali rast sam po sebi ne uništava organizacije. Ono što ih destabilizira jest trenutak u kojem se povećaju opseg posla, broj ljudi, broj odluka i kompleksnost koordinacije, dok način odlučivanja ostane isti. Organizacija tada više ne puca zato što je velika, nego zato što odluke nisu dovoljno jasne, odgovornosti nisu dovoljno precizne, a provedba ovisi o improvizaciji.\n\nOvo predavanje bavi se jednom od najčešćih slabih točaka rastućih organizacija: nejasnoćom odluka. U malim sustavima mnogo toga može funkcionirati kroz osobne dogovore, bliskost, brzinu i neformalnu komunikaciju. No kada organizacija naraste, isti obrasci počinju proizvoditi zastoje, ponavljanja, prebacivanje odgovornosti i gubitak vrijednosti.\n\nPredavanje otvara pitanje što se događa kada organizacija raste brže od svoje sposobnosti da jasno odlučuje. Poseban naglasak stavlja se na razliku između odluke koja je izgovorena i odluke koja je stvarno provediva. Jer odluka nije dovršena onda kada se svi slože oko smjera, nego tek onda kada je jasno tko što radi, do kada, s kojim ovlastima i kako se zatvara provedba.",
    "agenda.d1.s7.title": "Zašto organizacije ne provedu odluke koje same donesu?",
    "agenda.d1.s7.desc": "Organizacije često znaju što bi trebale napraviti. Odluke se donesu, prioriteti se usuglase, zaključci se zapišu, a smjer se naizgled potvrdi. Ipak, velik broj odluka nikada ne prijeđe u stvarnu provedbu ili se tijekom provedbe razvodni, uspori, preoblikuje ili izgubi u svakodnevnom radu.\n\nOvaj panel bavi se prostorom između odluke i ponašanja. To je prostor u kojem se najčešće gubi vrijednost: kada nije jasno tko je vlasnik odluke, kada se odgovornost podrazumijeva, kada provedba ovisi o dobroj volji pojedinaca ili kada se odluke stalno vraćaju na dodatna usklađivanja. Problem tada nije u tome da organizacija nema ideje, nego u tome da nema dovoljno dobre mehanizme za pretvaranje odluka u konkretno ponašanje.\n\nPanel otvara pitanje zašto se organizacije često ponašaju kao da je donošenje odluke isto što i njezina provedba. Posebno će se razgovarati o odgovornosti, koordinaciji, brzini, organizacijskim zastojima i kulturi u kojoj se neprovedene odluke toleriraju kao normalan dio poslovanja.",
    "agenda.d1.s8.title": "Ručak",
    "agenda.d1.s9.title": "Rastu plaće. Raste li vrijednost?",
    "agenda.d1.s9.desc": "Rast plaća postao je jedna od najvidljivijih tema suvremenog poslovanja. Organizacije se suočavaju s pritiskom tržišta rada, inflacijom očekivanja, borbom za ljude i sve većom potrebom da zadrže ključne zaposlenike. No uz pitanje koliko plaće trebaju rasti, sve važnije postaje i drugo pitanje: raste li istovremeno vrijednost koju organizacija stvara?\n\nOvo predavanje otvara osjetljivu, ali nužnu temu odnosa između plaća, produktivnosti i stvarne poslovne vrijednosti. Plaća nije samo trošak, ali nije ni automatska garancija većeg učinka. Ako organizacija povećava ulaganja u ljude, a istovremeno ne mijenja način rada, kvalitetu odlučivanja, odgovornost i provedbu, tada rast troška ne mora značiti rast vrijednosti.\n\nPredavanje ne problematizira plaće kao takve, nego odnos između nagrađivanja i organizacijske funkcionalnosti. Ključno pitanje nije trebaju li ljudi biti bolje plaćeni, nego može li organizacija istovremeno razvijati sustav u kojem veća ulaganja u ljude stvarno proizvode veću vrijednost, bolju provedbu i kvalitetnije rezultate.",
    "agenda.d1.s10.title": "Zašto organizacije toleriraju probleme koje već razumiju?",
    "agenda.d1.s10.desc": "U mnogim organizacijama problemi nisu nepoznati. Ljudi ih znaju imenovati, uprave ih prepoznaju, zaposlenici ih ponavljaju u anketama, a menadžeri ih opisuju na sastancima. Ipak, isti problemi često ostaju prisutni mjesecima ili godinama. Organizacija ih razumije dovoljno da o njima govori, ali ne dovoljno da ih stvarno riješi.\n\nOvaj panel bavi se jednim od najvažnijih paradoksa organizacijskog života: zašto znanje o problemu često ne vodi do promjene ponašanja. Ponekad je razlog u nedostatku vlasništva. Ponekad u političkoj cijeni rješavanja problema. Ponekad u tome što je problem postao toliko normaliziran da se više ne doživljava kao nešto što zahtijeva odlučnu intervenciju.\n\nPanel otvara pitanje organizacijske tolerancije na poznate probleme. Ako svi znaju da nešto ne funkcionira, zašto sustav to nastavlja dopuštati? Razgovor se usmjerava prema odgovornosti, odlučnosti, stvarnoj spremnosti na promjenu i razlici između razumijevanja problema i sposobnosti da ga se ukloni iz svakodnevnog rada.",
    "agenda.d1.s11.title": "Pauza za kavu",
    "agenda.d1.s12.title": "Jesmo li počeli učiti ljude stvari koje im ne koriste?",
    "agenda.d1.s12.desc": "Razvoj ljudi postao je gotovo obvezan dio suvremenog poslovanja. Organizacije ulažu u edukacije, treninge, akademije, programe razvoja i različite oblike učenja. No sve češće se otvara pitanje koliko se ono što ljudi uče zaista povezuje s onim što im treba u stvarnom radu.\n\nOvo predavanje propituje odnos između razvoja ljudi i korisnosti tog razvoja, a posebno adopcije za organizaciju i zaposlenike. Problem nije u tome da učenje nije važno. Problem nastaje kada se razvoj pretvori u niz dobro zamišljenih aktivnosti koje nisu povezane s konkretnim ponašanjima, stvarnim poslovnim problemima i sposobnostima koje organizaciji zaista nedostaju.\n\nPredavanje otvara pitanje učimo li ljude kompetencijama koje lijepo zvuče ili vještinama koje stvarno mijenjaju način rada. U vremenu u kojem se mijenjaju tehnologija, očekivanja, pažnja, odlučivanje i odgovornost, razvoj ljudi mora prestati biti popis tema i postati sustav za promjenu ponašanja koje stvara vrijednost.",
    "agenda.d1.s13.title": "Učimo li ljude ono što organizaciji stvarno treba?",
    "agenda.d1.s13.desc": "Organizacije često govore o razvoju zaposlenika, ali rjeđe dovoljno precizno definiraju što se nakon tog razvoja treba promijeniti u stvarnom ponašanju. Edukacije se održavaju, zadovoljstvo polaznika se mjeri, programi se ponavljaju, ali poslovni učinak često ostaje nejasan. Tada razvoj ljudi postaje aktivnost, a ne intervencija, a pogotovo ne rješenje.\n\nOvaj panel otvara pitanje kako razlikovati razvoj koji dobro izgleda od razvoja koji stvarno mijenja organizaciju. Ako ljudi prolaze edukacije, ali se odluke i dalje ne provode, komunikacija i dalje zapinje, odgovornost ostaje nejasna, a vrijednost se i dalje gubi u koordinaciji, tada treba postaviti pitanje učimo li ljude ono što im stvarno treba.\n\nPanel će se baviti vezom između razvoja ljudi, poslovnih potreba i promjene ponašanja. Poseban naglasak je na tome kako People & Culture, menadžment i poslovne funkcije mogu zajedno definirati koje sposobnosti organizacija mora razvijati da bi bila funkcionalnija, brža, odgovornija i otpornija.",
    // Day 2 sessions
    "agenda.d2.s1.title": "Kava i doručak",
    "agenda.d2.s2.title": "Znamo više nego ikad. Razumijemo manje nego ikad.",
    "agenda.d2.s2.desc": "Nikada nismo imali više dostupnih informacija, podataka, istraživanja, analiza i alata za učenje. Ipak, sve češće se čini da veća dostupnost znanja ne znači nužno i dublje razumijevanje. U organizacijama, obrazovanju i društvu sve je vidljiviji raskorak između informiranosti i sposobnosti prosudbe.\n\nOvo keynote predavanje drugog dana širi temu konferencije iz poslovnog sustava prema čovjeku koji u tom sustavu odlučuje, uči i pokušava razumjeti svijet oko sebe. U vremenu preopterećenosti informacijama, pitanje više nije samo što znamo, nego kako znamo da nešto razumijemo. To je posebno važno za organizacije koje se oslanjaju na ljude da donose odluke, procjenjuju rizike, uče nove stvari i razlikuju bitno od nebitnog.\n\nPredavanje otvara pitanje granica znanja u vremenu u kojem je dostupnost informacija često zamijenila stvarno razumijevanje. Time postavlja temelj za drugi dan konferencije, u kojem se fokus prebacuje na psihologiju čovjeka, ponašanje, People & Culture i AI kao sustav koji dodatno ubrzava i dobre i loše oblike prosudbe.",
    "agenda.d2.s3.title": "Zašto psihologija čovjeka često nestane u poslovnoj praksi?",
    "agenda.d2.s3.desc": "Biznis često govori da su ljudi najvažniji dio organizacije, ali istovremeno sustave rada oblikuje kao da su ljudi uvijek racionalni, stabilni, dostupni, motivirani i sposobni procesuirati beskonačnu količinu informacija. U praksi se zato često zanemaruju osnovna ograničenja ljudskog ponašanja: pažnja, umor, motivacija, strah, navike, pritisak, odnosi i kvaliteta prosudbe.\n\nOvaj panel otvara pitanje zašto se psihologija čovjeka tako često izgubi kada se prijeđe iz teorije u poslovnu praksu. Organizacije uvode procese, alate, sustave, promjene i tehnologije, ali ne uzimaju uvijek dovoljno ozbiljno činjenicu da ih ljudi moraju razumjeti, prihvatiti, koristiti i pretvoriti u ponašanje.\n\nPanel povezuje psihološku i poslovnu perspektivu. Cilj je pokazati da razumijevanje ljudi nije dekorativni dodatak poslovanju, nego preduvjet kvalitetnijeg odlučivanja, vođenja, razvoja i organizacijske učinkovitosti. Ako poslovna praksa zanemari kako ljudi stvarno funkcioniraju, tada ni najbolji sustavi ne proizvode očekivane rezultate.",
    "agenda.d2.s4.title": "Pauza za kavu",
    "agenda.d2.s5.title": "Ako People & Culture ne mijenja ponašanje, što onda mijenja?",
    "agenda.d2.s5.desc": "People & Culture funkcija sve češće želi biti strateški partner biznisu. No strateška uloga ne može se temeljiti samo na inicijativama, programima, komunikaciji i dobrim namjerama. Ako People & Culture želi imati stvaran poslovni utjecaj, mora se moći povezati s promjenom ponašanja u organizaciji.\n\nOvo predavanje postavlja jednostavno, ali neugodno pitanje: ako People & Culture ne mijenja ponašanje, što zapravo mijenja? Zadovoljstvo, angažiranost i dojam važni su pokazatelji, ali nisu dovoljni ako se ne vidi kako se mijenjaju odluke, odgovornost, suradnja, provedba, učenje i način rada.\n\nPredavanje zagovara pomak od People & Culture funkcije koja mjeri raspoloženje prema funkciji koja razumije kako organizacija stvarno radi. To znači manje oslanjanja na deklarativne odgovore, a više fokusa na ponašajne obrasce, organizacijske zastoje i konkretne točke u kojima se vrijednost stvara ili gubi.",
    "agenda.d2.s6.title": "Što biznis očekuje od People & Culture, a ne dobiva? Smije li se dati negativni feedback za People & Culture?",
    "agenda.d2.s6.desc": "People & Culture sve češće traži mjesto za strateškim stolom, ali biznis od te funkcije očekuje više od brige o zadovoljstvu, procesima i komunikaciji. Očekuje razumijevanje poslovanja, brzinu, odgovornost, konkretnu podršku menadžmentu i sposobnost da se ljudi i kultura povežu s rezultatima.\n\nOvaj panel otvara pitanje koje se rijetko postavlja dovoljno izravno: što biznis očekuje od People & Culture, a ne dobiva? Smije li se People & Culture funkciji dati negativni feedback na isti način na koji se očekuje da ona razvija feedback kulturu u ostatku organizacije? Ako People & Culture želi biti strateška funkcija, mora moći izdržati i stratešku razinu odgovornosti.\n\nPanel će razgovarati o raskoraku između onoga što People & Culture misli da isporučuje i onoga što biznis stvarno treba. Fokus je na korisnosti, poslovnoj relevantnosti, razumijevanju brojeva, sposobnosti utjecaja na ponašanje i spremnosti da se People & Culture odmakne od jezika inicijativa prema jeziku vrijednosti.",
    "agenda.d2.s7.title": "Pauza za kavu",
    "agenda.d2.s8.title": "AI ubrzava odluke. Što ako ubrzava i pogreške?",
    "agenda.d2.s8.desc": "AI sve brže ulazi u poslovanje, javne usluge i upravljačke procese. U privatnom sektoru već mijenja način analize, planiranja i donošenja odluka, dok javna uprava postupno gradi kapacitete za njegovu odgovornu primjenu. Zato pravo pitanje nije tko AI danas koristi više, nego hoćemo li ga kao društvo, država i kompanije uvesti dovoljno zrelo.\n\nOvaj završni panel povezuje sve glavne teme konferencije: odluke, razumijevanje, odgovornost, provedbu, ljude i tehnologiju. AI neće automatski popraviti loše odlučivanje. Naprotiv, ako se uvede u organizacije koje već imaju nejasne odluke, slabu provedbu, loše definiranu odgovornost i nisku kvalitetu prosudbe, može ubrzati upravo te slabosti.\n\nPanel otvara pitanje kako osigurati da AI ne postane samo akcelerator postojećih pogrešaka. Ako AI ubrzava analizu, preporuke i odluke, tada organizacije moraju ozbiljnije nego ikad razumjeti vlastite kriterije odlučivanja, izvore podataka, granice ljudske prosudbe i odgovornost za posljedice. Jer AI neće biti samo test tehnološke spremnosti. Bit će test zrelosti odlučivanja.",
    "agenda.d2.s9.title": "Zatvaranje konferencije i podjela nagrada",
    "agenda.d2.s10.title": "Ručak & networking",
    "agenda.d2.s9.desc": "U ova dva dana dotaknuli smo puno tema: odluke, promjene, plaće, mjerenje, razvoj ljudi i na kraju AI.\n\nI sve se na kraju svodi na istu stvar: organizacije ne funkcioniraju loše zato što ne znaju što treba napraviti.\n\nFunkcioniraju loše zato što se odluke ne donose kako treba, ne provode kako treba i ne razumiju kako zapravo nastaju rezultati. A kada na to dodamo AI, ne dobivamo rješenje.\n\nDobivamo katalizator. Ubrzanje svega što već radimo, dobrog i lošeg.\n\nZato možda najvažnije pitanje koje ostaje nakon ove konferencije nije: što ćemo raditi drugačije?\n\nnego: što ćemo napokon početi razumijevati prije nego što donesemo sljedeću odluku.",
    // Agenda locations
    "agenda.loc.main": "Glavna dvorana",
    "agenda.loc.air": "Dvorana Zrak",
    "agenda.loc.earth": "Dvorana Zemlja",
    "agenda.loc.fire": "Dvorana Vatra",
    "agenda.loc.hallA": "Dvorana A",
    "agenda.loc.hallB": "Dvorana B",
    "agenda.loc.workshop": "Dvorana za radionice",
    "agenda.track.masterclass": "Masterclass • Paralelno",
    "agenda.masterclass.label": "Paralelni program",
    "agenda.masterclass.title": "Masterclass blok",
    "agenda.masterclass.subtitle": "Tijekom programa u glavnoj dvorani održavaju se 3 paralelna masterclassa u manjim dvoranama.",

    // Day 1 — Masterclass blok (paralelno 10:55–12:05)
    "agenda.d1.mc1.title": "Kako to znamo, kako to mjerimo i kako razlikujemo dojam od uzroka? Powered by CogniPulse",
    "agenda.d1.mc1.desc": "Je li People & Culture predugo mjerio raspoloženje, a premalo način rada?\n\nOrganizacije danas mjere gotovo sve: angažiranost, zadovoljstvo, iskustvo zaposlenika, leadership, kulturu, komunikaciju i dobrobit. No pitanje je koliko često ti podaci stvarno objašnjavaju zašto organizacija funkcionira ili ne funkcionira. Visoko zadovoljstvo ne znači nužno da organizacija dobro odlučuje. Niska angažiranost ne govori automatski što je uzrok problema. Dobar rezultat u anketi ne znači da se posao odvija bez problema.\n\nOvaj masterclass postavlja metodološku osnovu cijelog programa. Fokus nije na tome treba li „mjeriti ljude\", nego što točno mjerimo kada kažemo da „mjerimo organizaciju\". Klasične ankete često bilježe dojam, raspoloženje ili posljedicu. Ono što organizacijama sve više treba jest sposobnost razlikovanja simptoma od uzroka: gdje se odluke usporavaju, gdje se odgovornost gubi, gdje se dogovoreno ne rješava i gdje se vrijednost gubi u načinu rada.\n\nPeople & Culture ovdje izlazi iz logike mjerenja raspoloženja i ulazi u logiku razumijevanja ponašanja. To znači da se ne promatra samo kako se ljudi osjećaju u organizaciji, nego što organizacija svakodnevno proizvodi kroz svoje procese, odluke, odnose, očekivanja i neformalna pravila.\n\nFokus masterclassa:\n• razlika između dojma, simptoma i uzroka\n• što klasične ankete vide, a što propuštaju\n• zašto zadovoljstvo, angažiranost i kultura nisu dovoljni bez razumijevanja načina rada\n• kako mjeriti odluke, odgovornost, provedbu i organizacijske zastoje\n• kako povezati People Analytics s ponašajnim tumačenjem\n• kako razlikovati podatak koji opisuje problem od podatka koji objašnjava uzrok",
    "agenda.d1.mc2.title": "Stvarna kultura nije ono što piše. Stvarna kultura je ono što se ponavlja.",
    "agenda.d1.mc2.desc": "Organizacije često misle da poznaju vlastitu kulturu zato što imaju definirane vrijednosti, interne poruke, leadership principe ili komunikacijske kampanje. No stvarna kultura nije ono što organizacija kaže o sebi. Stvarna kultura je ono što se ponavlja kada treba donijeti odluku, riješiti konflikt, preuzeti odgovornost, dati neugodan feedback ili zatvoriti dogovoreno.\n\nOvaj masterclass polazi od jednostavne pretpostavke: kultura nije deklaracija, nego obrazac. Vidi se u tome što se tolerira, što se nagrađuje, što se prešućuje, tko smije otvoriti problem, što se događa kada netko ne isporuči dogovoreno i kako se organizacija ponaša pod pritiskom. Upravo zato kultura nije samo tema komunikacije ili employer brandinga, nego jedno od ključnih pitanja organizacijske funkcionalnosti.\n\nFokus masterclassa:\n• razlika između deklarativne i operativne kulture\n• kako prepoznati neformalna pravila organizacije\n• zašto se kultura vidi u ponavljajućim ponašanjima, a ne u službenim porukama\n• što organizacija stvarno nagrađuje, tolerira i prešućuje\n• kako mapirati kulturu kroz odluke, konflikte, odgovornost i provedbu\n• kako intervenirati u kulturu bez velikih kampanja i praznih slogana",
    "agenda.d1.mc3.title": "Behavioral debt: nevidljivi dug koji organizacije gomilaju",
    "agenda.d1.mc3.desc": "Organizacije se rijetko destabiliziraju preko noći. Češće godinama gomilaju male kompromise koji u početku izgledaju bezopasno: konflikt koji se nije riješio, odgovornost koja nije precizirana, odluka koja se nije zatvorila, menadžer koji nije dobio povratnu informaciju, loš obrazac ponašanja koji se tolerirao jer je osoba donosila rezultat. Svaka od tih stvari pojedinačno može izgledati mala. Zajedno stvaraju ponašajni dug.\n\nBehavioral debt je nevidljivi organizacijski dug koji nastaje kada sustav izbjegava riješiti ponašajne probleme u trenutku kada su još mali. Kao što tehnički dug s vremenom otežava razvoj proizvoda, tako ponašajni dug s vremenom otežava odlučivanje, suradnju, provedbu i promjenu. Problem je u tome što ga klasični KPI-jevi često ne pokazuju na vrijeme. Organizacija može izgledati stabilno sve dok ne dođe do rasta, krize, akvizicije, promjene vodstva, uvođenja AI-a ili pritiska tržišta.\n\nOvaj masterclass uvodi ponašajni dug kao poslovni koncept, ne kao psihološku metaforu. Cilj je pokazati gdje se behavioral debt akumulira, kako se prepoznaje i kako ga adresirati bez destabilizacije sustava. Jer organizacije često ne trebaju još jednu inicijativu, nego hrabrost da zatvore obrasce ponašanja koje već predugo toleriraju.\n\nFokus masterclassa:\n• što je behavioral debt i kako nastaje\n• gdje se najčešće akumulira: odluke, odgovornost, konflikti, leadership, komunikacija\n• zašto behavioral debt često nije vidljiv u KPI-jevima\n• kako male iznimke postaju neformalna pravila\n• kako razlikovati stabilnost od potisnutog problema\n• kako adresirati ponašajni dug bez stvaranja dodatnog otpora i kaosa",

    // Day 2 — Masterclass blok (paralelno 10:45–11:55)
    "agenda.d2.mc1.title": "Jesmo li svjesni koliko su se ljudi promijenili?",
    "agenda.d2.mc1.desc": "Metakognicija, prospektivna memorija, prosudba i odlučivanje u novoj organizacijskoj stvarnosti.\n\nOrganizacije se često ponašaju kao da su se promijenili samo tržište, tehnologija, poslovni modeli i očekivanja zaposlenika. No možda se jednako važno pitanje nalazi dublje: jesu li se promijenili i sami ljudi, odnosno način na koji održavaju pažnju, procjenjuju vlastito znanje, pamte dogovoreno, donose odluke i pretvaraju namjeru u ponašanje?\n\nMnogi organizacijski problemi danas više nisu samo pitanje motivacije, angažiranosti ili kompetencija. Sve češće su povezani s kognitivnim i ponašajnim kapacitetima ljudi u okruženju stalnih prekida, informacijske preopterećenosti, brzih promjena, digitalnih alata i sve veće količine odluka koje treba donositi u kratkom vremenu. Organizacije traže više fokusa, više samostalnosti, više odgovornosti i bržu prilagodbu, ali rijetko dovoljno ozbiljno provjeravaju imaju li ljudi uvjete za takav način rada.\n\nMetakognicija nam govori koliko dobro ljudi procjenjuju što znaju, što ne znaju i koliko mogu vjerovati vlastitoj prosudbi. Prospektivna memorija pokazuje prelazi li namjera u ponašanje u pravom trenutku: hoće li osoba zaista napraviti ono što je rekla da će napraviti. Kvaliteta prosudbe i odlučivanja pokazuje kako ljudi biraju između opcija kada su pod pritiskom, kada informacije nisu potpune i kada je odgovornost nejasna.\n\nOvaj masterclass otvara pitanje jesu li organizacije dovoljno ozbiljno shvatile da današnji rad ne traži samo više znanja, nego bolju samoregulaciju, bolju procjenu vlastitih ograničenja, jasnije zatvaranje dogovorenog i kvalitetnije odlučivanje. Ako ljudi sve teže razlikuju znanje od dojma, namjeru od izvršenja i brzinu od kvalitete odluke, tada People & Culture mora prestati govoriti samo o iskustvu zaposlenika i početi govoriti o stvarnim uvjetima u kojima ljudi pokušavaju funkcionirati.\n\nFokus masterclassa:\n• jesu li se promijenili ljudi ili samo okruženje u kojem rade\n• metakognicija kao sposobnost procjene vlastitog znanja, sigurnosti i ograničenja\n• prospektivna memorija kao prijelaz iz namjere u izvršenje\n• zašto namjera, motivacija i kompetencija nisu isto što i provedba\n• kako kognitivno opterećenje, digitalni prekidi i nejasne odgovornosti utječu na odluke\n• kako razlikovati brzinu odlučivanja od kvalitete prosudbe\n• što People & Culture mora početi mjeriti ako želi razumjeti stvarni način rada ljudi",
    "agenda.d2.mc2.title": "Zašto razvoj ljudi ne mijenja ponašanje?",
    "agenda.d2.mc2.desc": "Organizacije ulažu u edukacije, treninge, coaching, leadership programe, akademije i razvojne planove. No jedno pitanje ostaje neugodno otvoreno: koliko se nakon svega toga stvarno mijenja ponašanje? Ljudi često izađu zadovoljni s edukacije, razumiju koncept, prepoznaju korisnost i slože se s porukom. Ipak, nakon nekoliko tjedana organizacija se često vrati na stare obrasce rada.\n\nProblem nije nužno u kvaliteti edukacije ni u motivaciji pojedinca. Problem je u tome što ponašanje nije izolirana navika koja se mijenja jednim uvidom ili jednim treningom. Ponašanje je dio sustava: odnosa, očekivanja, nagrada, pritisaka, identiteta, neformalnih pravila i svakodnevnih situacija. Ako sustav ostane isti, pojedinac se često vraća na staro ponašanje, čak i kada je razvojni program bio dobro osmišljen.\n\nOvaj masterclass propituje zašto razvoj ljudi često ostaje na razini znanja, ali ne prelazi u promjenu načina rada. Pitanje više nije samo što ljude učimo, nego u kakav sustav se vraćaju nakon učenja. Ako se od ljudi očekuje da komuniciraju bolje, odlučuju brže, preuzimaju više odgovornosti ili daju jasniji feedback, tada organizacija mora dizajnirati uvjete u kojima je takvo ponašanje stvarno moguće, očekivano i podržano.\n\nFokus masterclassa:\n• zašto znanje ne prelazi automatski u ponašanje\n• zašto edukacije i coaching često daju kratkoročni učinak\n• ponašanje kao dio sustava, a ne izolirana osobina\n• kako organizacijski kontekst vraća ljude na stare obrasce\n• kako dizajnirati razvoj koji mijenja svakodnevni rad\n• kako povezati razvoj ljudi s odlukama, odgovornošću, provedbom i vrijednošću\n• kako mjeriti promjenu ponašanja nakon edukacije",
    "agenda.d2.mc3.title": "AI kao ogledalo organizacije: što radimo kad vidimo obrazac?",
    "agenda.d2.mc3.desc": "AI se često predstavlja kao alat koji će ubrzati procese, povećati produktivnost i pomoći organizacijama da bolje koriste podatke. No u People & Culture i organizacijskom kontekstu njegova prva vrijednost može biti puno neugodnija: AI može pokazati obrasce koje organizacija dosad nije htjela, znala ili mogla vidjeti.\n\nAI može razotkriti gdje komunikacija zapinje, gdje se odluke vraćaju u krug, gdje se odgovornost prebacuje, gdje menadžeri stvaraju uska grla, gdje razvoj ne mijenja ponašanje i gdje se podaci koriste kao dekoracija, a ne kao osnova za odluke. No pitanje nije samo može li AI prepoznati obrazac. Pitanje je što organizacija radi kada taj obrazac vidi.\n\nOvaj masterclass povezuje AI s organizacijskom zrelošću. AI ne rješava automatski problem odlučivanja, odgovornosti ili ponašanja. Ako se uvede u sustav koji već ima nejasne odluke, slabu provedbu i nisku kvalitetu prosudbe, može samo ubrzati postojeće slabosti. Zato AI nije samo tehnološka tema, nego test zrelosti organizacije: zna li interpretirati ono što vidi, zna li preuzeti odgovornost za odluke i zna li razlikovati automatizaciju od razumijevanja.\n\nFokus masterclassa:\n• AI kao alat za prepoznavanje obrazaca, a ne samo automatizaciju\n• što organizacije rade kada dobiju neugodnu analitiku\n• zašto AI ne popravlja loše odlučivanje, nego ga može ubrzati\n• odgovornost nakon AI outputa: tko tumači, tko odlučuje i tko snosi posljedice\n• rizik delegiranja prosudbe na sustav\n• kako AI povezati s boljim odlučivanjem, a ne samo bržim procesima\n• kako pripremiti People & Culture za AI koji otkriva način rada organizacije",

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
    "footer.followUs": "Pratite nas:",
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
         "speakers.bio.mladen_pejkovic": "Mladen Pejković is an experienced business and technology leader with over 25 years of experience in the ICT industry and leading large organizational transformations. He currently serves as Senior Executive Director for Transformation and ICT at Atlantic Grupa, where he is responsible for digital transformation, technology development, and management of key business and IT processes at the Group level.\n\nThroughout his career, he has held a number of leading positions in international companies, including Telekom Austria Group and Vipnet, where he was responsible for strategy, technology development, operational management, and implementation of complex transformation projects and acquisitions. He has extensive experience in developing telecommunications and IT systems and leading organizations through technological and business changes.\n\nHe graduated from the Faculty of Electrical Engineering and Computing in Zagreb, and furthered his education at prestigious institutions such as Harvard Business School, INSEAD, and Chicago Booth School of Business. He actively contributes to the community through engagements in scientific and educational institutions and is a frequent speaker at international conferences.",

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
    "agenda.d1.s3.desc": "In an environment where economic, technological and social rules are changing rapidly, organisations can less and less rely on decision-making patterns that worked in more stable times. The key question is no longer just how to grow, but how to remain functional while markets, employee expectations, the regulatory framework, technology and the structure of risk all shift.\n\nThis keynote opens the conference from a broader business and macroeconomic perspective. The focus is not on trends as isolated phenomena, but on how changes in the environment alter the logic of business decision-making. When the rules of the game are no longer stable, organisations must assess risk differently, decide differently and understand their own capacity to adapt differently.\n\nThe talk poses the conference's core question: what happens between what organisations know and what they actually do? Because at a moment when more data, tools and analyses are available than ever before, the problem rarely lies in a lack of information, and increasingly in the quality of judgment, the clarity of decisions and the capacity to execute.",
    "agenda.d1.s4.title": "When the rules no longer apply: Are organisations still playing the old game? Powered by GrECo",
    "agenda.d1.s4.desc": "Many organisations today operate in new circumstances but still rely on old assumptions about growth, governance, risk, people and the market. This is precisely where one of the greatest challenges of modern business arises: organisations try to solve new problems with tools, habits and mental models from a period that no longer exists.\n\nThis panel opens the question of organisational adaptation in a time when stability can no longer be taken for granted. If change has become constant, if risks are increasingly interconnected and decisions ever more complex, then the way organisations are led must also change. The question is whether organisations have truly changed their thinking or simply added new initiatives on top of old patterns.\n\nThe panel will combine perspectives on governance, risk, organisational resilience and business responsibility. The aim is not to talk about change as an abstract concept, but to ask how ready organisations really are to change the way they decide, plan and react when the rules are no longer the same.",
    "agenda.d1.s5.title": "Coffee break",
    "agenda.d1.s6.title": "Growth doesn't kill organisations. Unclear decisions do.",
    "agenda.d1.s6.desc": "Growth is often portrayed as a sign of success, but growth itself does not destroy organisations. What destabilises them is the moment when the volume of work, the number of people, the number of decisions and the complexity of coordination all increase, while the way of deciding stays the same. The organisation then breaks down not because it is large, but because decisions are not clear enough, responsibilities are not precise enough, and execution depends on improvisation.\n\nThis talk addresses one of the most common weak spots of growing organisations: unclear decisions. In small systems much can work through personal arrangements, closeness, speed and informal communication. But when an organisation grows, the same patterns start to produce delays, repetition, shifting of responsibility and loss of value.\n\nThe talk asks what happens when an organisation grows faster than its capacity to decide clearly. Special emphasis is placed on the difference between a decision that has been spoken and a decision that is actually executable. Because a decision is not finished when everyone agrees on the direction, but only when it is clear who does what, by when, with what authority, and how execution is closed.",
    "agenda.d1.s7.title": "Why don't organisations implement the decisions they make themselves?",
    "agenda.d1.s7.desc": "Organisations often know what they should do. Decisions are made, priorities are agreed, conclusions are written down and the direction is seemingly confirmed. Yet a great many decisions never make it into actual execution, or get diluted, slowed down, reshaped or lost in everyday work.\n\nThis panel deals with the space between decision and behaviour. This is the space where value is most often lost: when it is unclear who owns the decision, when responsibility is taken for granted, when execution depends on the goodwill of individuals, or when decisions are constantly sent back for further alignment. The problem then is not that the organisation lacks ideas, but that it lacks good enough mechanisms to translate decisions into concrete behaviour.\n\nThe panel asks why organisations often act as if making a decision is the same as carrying it out. The discussion will focus on responsibility, coordination, speed, organisational bottlenecks and a culture in which unimplemented decisions are tolerated as a normal part of doing business.",
    "agenda.d1.s8.title": "Lunch",
    "agenda.d1.s9.title": "Salaries are rising. Is value rising too?",
    "agenda.d1.s9.desc": "Rising salaries have become one of the most visible topics in modern business. Organisations face pressure from the labour market, inflation of expectations, the war for talent and a growing need to retain key employees. But alongside the question of how much salaries should rise, another question is becoming more important: is the value the organisation creates rising at the same time?\n\nThis talk opens a sensitive but necessary topic: the relationship between pay, productivity and real business value. A salary is not only a cost, but it is not an automatic guarantee of higher performance either. If an organisation increases its investment in people but does not change the way it works, the quality of decision-making, accountability and execution, then rising costs do not necessarily mean rising value.\n\nThe talk does not question pay as such, but the relationship between rewards and organisational functioning. The key question is not whether people should be paid better, but whether the organisation can simultaneously develop a system in which greater investment in people genuinely produces greater value, better execution and higher-quality results.",
    "agenda.d1.s10.title": "Why do organisations tolerate problems they already understand?",
    "agenda.d1.s10.desc": "In many organisations, problems are not unknown. People can name them, leadership recognises them, employees repeat them in surveys and managers describe them in meetings. Yet the same problems often remain present for months or years. The organisation understands them well enough to talk about them, but not well enough to actually solve them.\n\nThis panel addresses one of the most important paradoxes of organisational life: why knowledge of a problem so often fails to lead to a change in behaviour. Sometimes the reason is a lack of ownership. Sometimes it is the political cost of solving the problem. Sometimes it is that the problem has become so normalised that it is no longer perceived as something requiring decisive intervention.\n\nThe panel asks about organisational tolerance for known problems. If everyone knows that something doesn't work, why does the system continue to allow it? The discussion turns to responsibility, decisiveness, real readiness for change, and the difference between understanding a problem and being able to remove it from everyday work.",
    "agenda.d1.s11.title": "Coffee break",
    "agenda.d1.s12.title": "Have we started teaching people things that don't help them?",
    "agenda.d1.s12.desc": "People development has become an almost mandatory part of modern business. Organisations invest in education, training, academies, development programmes and various forms of learning. But more and more often the question arises of how much of what people learn is genuinely connected to what they need in real work.\n\nThis talk examines the relationship between people development and the actual usefulness of that development, and especially adoption for the organisation and employees. The problem is not that learning is unimportant. The problem arises when development becomes a series of well-intended activities that are not connected to concrete behaviours, real business problems and the capabilities the organisation actually lacks.\n\nThe talk asks whether we are teaching people competencies that sound nice or skills that genuinely change the way work is done. In a time of changing technology, expectations, attention, decision-making and responsibility, people development must stop being a list of topics and become a system for changing behaviour that creates value.",
    "agenda.d1.s13.title": "Are we teaching people what the organisation really needs?",
    "agenda.d1.s13.desc": "Organisations often talk about employee development, but rarely define precisely enough what should change in actual behaviour after that development. Trainings are held, participant satisfaction is measured, programmes are repeated, but the business impact often remains unclear. People development then becomes an activity, not an intervention, and certainly not a solution.\n\nThis panel asks how to distinguish development that looks good from development that actually changes the organisation. If people go through training but decisions still aren't implemented, communication still gets stuck, accountability remains unclear and value is still lost in coordination, then we must ask whether we are really teaching people what they need.\n\nThe panel will explore the link between people development, business needs and behaviour change. Special emphasis is placed on how People & Culture, management and business functions can jointly define which capabilities the organisation must develop in order to be more functional, faster, more accountable and more resilient.",
    // Day 2
    "agenda.d2.s1.title": "Coffee & Breakfast",
    "agenda.d2.s2.title": "We know more than ever. We understand less than ever.",
    "agenda.d2.s2.desc": "We have never had more available information, data, research, analyses and learning tools. And yet, it increasingly seems that greater availability of knowledge does not necessarily mean deeper understanding. In organisations, education and society, the gap between being informed and the capacity for judgment is becoming ever more visible.\n\nThis day-two keynote broadens the conference theme from the business system towards the human being who decides, learns and tries to understand the world within that system. In a time of information overload, the question is no longer just what we know, but how we know that we understand something. This is especially important for organisations that rely on people to make decisions, assess risks, learn new things and tell what matters from what doesn't.\n\nThe talk explores the limits of knowledge in a time when the availability of information has often replaced real understanding. It thereby sets the foundation for the second day of the conference, in which the focus shifts to human psychology, behaviour, People & Culture and AI as a system that further accelerates both good and bad forms of judgment.",
    "agenda.d2.s3.title": "Why does human psychology often disappear in business practice?",
    "agenda.d2.s3.desc": "Business often says that people are the most important part of the organisation, while at the same time designing work systems as if people are always rational, stable, available, motivated and able to process an infinite amount of information. In practice, the basic limits of human behaviour are often overlooked: attention, fatigue, motivation, fear, habits, pressure, relationships and the quality of judgment.\n\nThis panel asks why human psychology is so often lost when moving from theory into business practice. Organisations introduce processes, tools, systems, changes and technologies, but do not always take seriously enough the fact that people have to understand them, accept them, use them and turn them into behaviour.\n\nThe panel connects the psychological and business perspectives. The aim is to show that understanding people is not a decorative add-on to business, but a precondition for better decision-making, leadership, development and organisational effectiveness. If business practice ignores how people actually function, then even the best systems do not produce the expected results.",
    "agenda.d2.s4.title": "Coffee Break",
    "agenda.d2.s5.title": "If People & Culture doesn't change behavior, what does?",
    "agenda.d2.s5.desc": "The People & Culture function increasingly wants to be a strategic partner to the business. But a strategic role cannot be based only on initiatives, programmes, communication and good intentions. If People & Culture wants to have real business impact, it must be able to connect to changes in behaviour within the organisation.\n\nThis talk poses a simple but uncomfortable question: if People & Culture doesn't change behaviour, what does it actually change? Satisfaction, engagement and impressions are important indicators, but they are not enough if it is not visible how decisions, accountability, collaboration, execution, learning and ways of working are changing.\n\nThe talk advocates a shift from a People & Culture function that measures mood to one that understands how the organisation actually works. That means relying less on declarative answers and focusing more on behavioural patterns, organisational bottlenecks and the concrete points where value is created or lost.",
    "agenda.d2.s6.title": "What does the business expect from People & Culture but doesn't get? Is it allowed to give negative feedback to People & Culture?",
    "agenda.d2.s6.desc": "People & Culture increasingly seeks a seat at the strategic table, but the business expects more from this function than care for satisfaction, processes and communication. It expects an understanding of the business, speed, accountability, concrete support to management and the ability to connect people and culture to results.\n\nThis panel raises a question that is rarely asked directly enough: what does the business expect from People & Culture but doesn't get? Is it acceptable to give negative feedback to the People & Culture function in the same way it is expected to develop a feedback culture in the rest of the organisation? If People & Culture wants to be a strategic function, it must also be able to bear a strategic level of accountability.\n\nThe panel will discuss the gap between what People & Culture believes it delivers and what the business actually needs. The focus is on usefulness, business relevance, understanding the numbers, the ability to influence behaviour and the willingness of People & Culture to move from the language of initiatives to the language of value.",
    "agenda.d2.s7.title": "Coffee Break",
    "agenda.d2.s8.title": "AI accelerates decisions. What if it accelerates mistakes too?",
    "agenda.d2.s8.desc": "AI is entering business, public services and management processes ever faster. In the private sector it is already changing how analysis, planning and decision-making are done, while public administration is gradually building capacity for its responsible use. The real question is therefore not who uses AI more today, but whether we will introduce it as a society, state and companies maturely enough.\n\nThis closing panel ties together all the main conference themes: decisions, understanding, accountability, execution, people and technology. AI will not automatically fix poor decision-making. On the contrary, if introduced into organisations that already have unclear decisions, weak execution, poorly defined accountability and low-quality judgment, it can accelerate exactly those weaknesses.\n\nThe panel asks how to ensure that AI does not become merely an accelerator of existing mistakes. If AI speeds up analysis, recommendations and decisions, then organisations must, more than ever, seriously understand their own decision criteria, their data sources, the limits of human judgment and the responsibility for consequences. Because AI will not just be a test of technological readiness. It will be a test of decision-making maturity.",
    "agenda.d2.s9.title": "Closing of the conference and award ceremony",
    "agenda.d2.s10.title": "Lunch & networking",
    "agenda.d2.s9.desc": "Over these two days we touched on many topics: decisions, change, salaries, measurement, people development, and finally AI.\n\nAnd it all comes down to the same thing: organizations don't function poorly because they don't know what to do.\n\nThey function poorly because decisions aren't made properly, aren't carried out properly, and there's no understanding of how results actually come about. And when we add AI to that, we don't get a solution.\n\nWe get a catalyst. An acceleration of everything we already do, the good and the bad.\n\nSo perhaps the most important question that remains after this conference is not: what will we do differently?\n\nbut: what will we finally start to understand before we make the next decision.",
    // Locations
    "agenda.loc.main": "Main Hall",
    "agenda.loc.air": "Hall Zrak",
    "agenda.loc.earth": "Hall Zemlja",
    "agenda.loc.fire": "Hall Vatra",
    "agenda.loc.hallA": "Hall A",
    "agenda.loc.hallB": "Hall B",
    "agenda.loc.workshop": "Workshop Room",
    "agenda.track.masterclass": "Masterclass • Parallel",
    "agenda.masterclass.label": "Parallel programme",
    "agenda.masterclass.title": "Masterclass block",
    "agenda.masterclass.subtitle": "While the main hall programme runs, 3 parallel masterclasses take place in smaller halls. Participants choose one.",

    // Day 1 — Masterclass block (parallel 10:55–12:05)
    "agenda.d1.mc1.title": "How do we know it, how do we measure it, and how do we tell impression from cause? Powered by CogniPulse",
    "agenda.d1.mc1.desc": "Has People & Culture spent too long measuring mood and too little the way of working?\n\nOrganisations today measure almost everything: engagement, satisfaction, employee experience, leadership, culture, communication and well-being. But the question is how often that data actually explains why an organisation works or doesn't. High satisfaction does not necessarily mean the organisation decides well. Low engagement does not automatically tell us what is causing the problem. A good survey result does not mean work runs smoothly.\n\nThis masterclass sets the methodological foundation for the whole programme. The focus is not on whether to \"measure people\", but on what exactly we measure when we say we are \"measuring the organisation\". Classic surveys often record impression, mood or consequence. What organisations increasingly need is the ability to distinguish symptoms from causes: where decisions slow down, where accountability is lost, where what was agreed is not resolved, and where value is lost in the way of working.\n\nPeople & Culture here moves from the logic of measuring mood into the logic of understanding behaviour. That means looking not only at how people feel in the organisation, but at what the organisation produces every day through its processes, decisions, relationships, expectations and informal rules.\n\nMasterclass focus:\n• the difference between impression, symptom and cause\n• what classic surveys see and what they miss\n• why satisfaction, engagement and culture aren't enough without understanding the way of working\n• how to measure decisions, accountability, execution and organisational bottlenecks\n• how to connect People Analytics with behavioural interpretation\n• how to tell data that describes a problem from data that explains its cause",
    "agenda.d1.mc2.title": "Real culture isn't what's written. Real culture is what gets repeated.",
    "agenda.d1.mc2.desc": "Organisations often think they know their own culture because they have defined values, internal messages, leadership principles or communication campaigns. But real culture is not what an organisation says about itself. Real culture is what gets repeated when a decision must be made, a conflict resolved, accountability taken, uncomfortable feedback given, or what was agreed actually closed.\n\nThis masterclass starts from a simple premise: culture is not a declaration, it is a pattern. It shows in what is tolerated, what is rewarded, what is left unsaid, who is allowed to surface a problem, what happens when someone fails to deliver, and how the organisation behaves under pressure. That is why culture is not just a topic for communication or employer branding, but one of the key questions of organisational functioning.\n\nMasterclass focus:\n• the difference between declarative and operational culture\n• how to recognise the informal rules of an organisation\n• why culture shows in repeated behaviour, not in official messages\n• what an organisation actually rewards, tolerates and silences\n• how to map culture through decisions, conflicts, accountability and execution\n• how to intervene in culture without big campaigns and empty slogans",
    "agenda.d1.mc3.title": "Behavioural debt: the invisible debt organisations keep accumulating",
    "agenda.d1.mc3.desc": "Organisations rarely destabilise overnight. More often they spend years accumulating small compromises that look harmless at first: a conflict that wasn't resolved, accountability that wasn't pinned down, a decision that wasn't closed, a manager who didn't get feedback, a poor pattern of behaviour tolerated because the person delivered results. Each of those things alone can look small. Together they create behavioural debt.\n\nBehavioural debt is the invisible organisational debt that builds up when the system avoids tackling behavioural problems while they are still small. Just as technical debt makes product development harder over time, behavioural debt makes decision-making, collaboration, execution and change harder. The problem is that classic KPIs often don't show it in time. An organisation can look stable until growth, a crisis, an acquisition, a change of leadership, the introduction of AI or market pressure arrives.\n\nThis masterclass introduces behavioural debt as a business concept, not a psychological metaphor. The aim is to show where it accumulates, how it can be recognised and how to address it without destabilising the system.\n\nMasterclass focus:\n• what behavioural debt is and how it forms\n• where it most often accumulates: decisions, accountability, conflicts, leadership, communication\n• why behavioural debt is often not visible in KPIs\n• how small exceptions become informal rules\n• how to tell stability from a suppressed problem\n• how to address behavioural debt without creating extra resistance and chaos",

    // Day 2 — Masterclass block (parallel 10:45–11:55)
    "agenda.d2.mc1.title": "Are we aware of how much people have changed?",
    "agenda.d2.mc1.desc": "Metacognition, prospective memory, judgment and decision-making in the new organisational reality.\n\nOrganisations often act as if only the market, technology, business models and employee expectations have changed. But an equally important question lies deeper: have people themselves changed — the way they hold attention, judge their own knowledge, remember what was agreed, make decisions and turn intention into behaviour?\n\nMany organisational problems today are no longer just a question of motivation, engagement or competence. They are increasingly tied to the cognitive and behavioural capacity of people in an environment of constant interruptions, information overload, fast change, digital tools and a growing number of decisions that must be made in a short time. Organisations ask for more focus, more autonomy, more accountability and faster adaptation, but rarely check seriously enough whether people have the conditions for such a way of working.\n\nMetacognition tells us how well people judge what they know, what they don't, and how much they can trust their own judgment. Prospective memory shows whether intention turns into behaviour at the right moment: will the person actually do what they said they would. The quality of judgment and decision-making shows how people choose between options under pressure, with incomplete information and unclear accountability.\n\nMasterclass focus:\n• have people changed, or only the environment they work in\n• metacognition as the capacity to assess one's own knowledge, certainty and limits\n• prospective memory as the bridge from intention to execution\n• why intention, motivation and competence are not the same as execution\n• how cognitive load, digital interruptions and unclear accountability affect decisions\n• how to tell speed of decision-making from quality of judgment\n• what People & Culture must start measuring to understand the real way people work",
    "agenda.d2.mc2.title": "Why doesn't people development change behaviour?",
    "agenda.d2.mc2.desc": "Organisations invest in education, training, coaching, leadership programmes, academies and development plans. But one question remains uncomfortably open: how much does behaviour really change after all of that? People often leave a training satisfied, understanding the concept and agreeing with the message. Yet within a few weeks the organisation often returns to its old patterns of work.\n\nThe problem is not necessarily the quality of the training or the individual's motivation. The problem is that behaviour is not an isolated habit changed by one insight or one training. Behaviour is part of a system: relationships, expectations, rewards, pressures, identity, informal rules and everyday situations. If the system stays the same, the individual often returns to the old behaviour, even when the development programme was well designed.\n\nMasterclass focus:\n• why knowledge does not automatically become behaviour\n• why training and coaching often deliver only short-term effects\n• behaviour as part of a system, not an isolated trait\n• how organisational context pulls people back to old patterns\n• how to design development that changes everyday work\n• how to connect people development to decisions, accountability, execution and value\n• how to measure behavioural change after training",
    "agenda.d2.mc3.title": "AI as a mirror of the organisation: what do we do when we see the pattern?",
    "agenda.d2.mc3.desc": "AI is often presented as a tool that will speed up processes, increase productivity and help organisations use their data better. But in a People & Culture and organisational context its first value can be far more uncomfortable: AI can show patterns the organisation has so far been unwilling, unable or simply not equipped to see.\n\nAI can expose where communication gets stuck, where decisions loop back, where accountability gets passed around, where managers create bottlenecks, where development fails to change behaviour, and where data is used as decoration rather than as a basis for decisions. But the question is not just whether AI can recognise the pattern. The question is what the organisation does once it sees it.\n\nThis masterclass connects AI with organisational maturity. AI does not automatically solve the problem of decision-making, accountability or behaviour. If introduced into a system that already has unclear decisions, weak execution and low-quality judgment, it can only accelerate existing weaknesses.\n\nMasterclass focus:\n• AI as a tool for recognising patterns, not just automation\n• what organisations do when they receive uncomfortable analytics\n• why AI does not fix poor decision-making — it can speed it up\n• accountability after AI output: who interprets, who decides, who bears the consequences\n• the risk of delegating judgment to a system\n• how to connect AI with better decision-making, not just faster processes\n• how to prepare People & Culture for AI that reveals the organisation's way of working",

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
    "footer.followUs": "Follow us:",
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
