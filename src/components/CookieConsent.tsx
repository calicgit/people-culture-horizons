import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const COOKIE_STORAGE_KEY = "people-culture-cookie-consent";

const privacyText = `POLITIKA PRIVATNOSTI
TKO SMO MI
Adresa naše web stranice je: https://peopleandculture.hr

KOMENTARI
Kada posjetitelji ostave komentare na web mjestu, prikupljamo podatke prikazane u obrascu za komentare, kao i IP adresu posjetitelja i niz korisničkog agenta preglednika kako bismo pomogli u otkrivanju neželjene pošte.

Anonimizirani niz stvoren iz vaše adrese e-pošte (koji se naziva i hash) može se dostaviti usluzi Gravatar kako bi se vidjelo koristite li ga. Pravila o privatnosti usluge Gravatar dostupna su ovdje: https://automattic.com/privacy/. Nakon odobrenja vašeg komentara, vaša profilna slika vidljiva je javnosti u kontekstu vašeg komentara.

SADRŽAJ
Ako prenosite slike na web stranicu, trebali biste izbjegavati učitavanje slika s ugrađenim podacima o lokaciji (EXIF GPS). Posjetitelji web stranice mogu preuzeti i izdvojiti sve podatke o lokaciji sa slika na web stranici uz eksplicitno dopuštenje autoriteta nadležnog za navedenu stranicu. Za više informacija molimo Vas da se obratite na horizons@peopleandculture.hr.

KOLAČIĆI
Ako ostavite komentar na našoj web stranici, možete se odlučiti za spremanje svog imena, adrese e-pošte i web stranice u kolačiće. Ovo je za vašu udobnost kako ne biste morali ponovno ispunjavati svoje podatke kada ostavite drugi komentar. Ovi kolačići će trajati godinu dana.

Ako posjetite našu stranicu za prijavu, postavit ćemo privremeni kolačić kako bismo utvrdili prihvaća li vaš preglednik kolačiće. Ovaj kolačić ne sadrži osobne podatke i odbacuje se kada zatvorite preglednik.

Ako se prijavite, također ćemo postaviti nekoliko kolačića za spremanje vaših podataka za prijavu i izbora prikaza zaslona. Kolačići za prijavu traju dva dana, a kolačići s opcijama zaslona godinu dana. Ako odaberete “Zapamti me”, vaša će prijava trajati dva tjedna. Ako se odjavite sa svog računa, kolačići za prijavu bit će uklonjeni.

Ako uredite ili objavite članak, dodatni kolačić bit će spremljen u vaš preglednik. Ovaj kolačić ne sadrži osobne podatke i jednostavno označava ID objave članka koji ste upravo uredili. Istječe nakon 1 dana.

UGRAĐENI SADRŽAJ S DRUGIH WEB STRANICA
Članci na ovoj stranici mogu sadržavati ugrađeni sadržaj (npr. videozapise, slike, članke itd.). Ugrađeni sadržaj s drugih web stranica ponaša se na potpuno isti način kao da je posjetitelj posjetio drugu web stranicu.

Te web stranice mogu prikupljati podatke o vama, koristiti kolačiće, ugrađivati dodatno praćenje trećih strana i nadzirati vašu interakciju s tim ugrađenim sadržajem, uključujući praćenje vaše interakcije s ugrađenim sadržajem ako imate račun i prijavljeni ste na tu web stranicu.

S KIM DIJELIMO VAŠE PODATKE
Ako zatražite ponovno postavljanje lozinke, vaša IP adresa bit će uključena u e-poštu za ponovno postavljanje.

KOLIKO DUGO ZADRŽAVAMO VAŠE PODATKE
Ako ostavite komentar, komentar i njegovi metapodaci zadržavaju se na neodređeno vrijeme. To je tako da možemo automatski prepoznati i odobriti sve naknadne komentare umjesto da ih držimo u redu za moderiranje.

Za korisnike koji se registriraju na našoj web stranici (ako postoje), također pohranjujemo osobne podatke koje daju u svom korisničkom profilu. Svi korisnici mogu vidjeti, urediti ili izbrisati svoje osobne podatke u bilo kojem trenutku (osim što ne mogu promijeniti svoje korisničko ime). Administratori web-mjesta također mogu vidjeti i uređivati te podatke.

KOJA PRAVA IMATE NAD SVOJIM PODACIMA
Ako imate račun na ovoj stranici ili ste ostavili komentare, možete zatražiti primanje izvezene datoteke osobnih podataka koje imamo o vama, uključujući sve podatke koje ste nam dali. Također možete zatražiti da izbrišemo sve osobne podatke koje imamo o vama. To ne uključuje podatke koje smo dužni čuvati u administrativne, pravne ili sigurnosne svrhe.

GDJE SE ŠALJU VAŠI PODACI
Komentari posjetitelja mogu se provjeriti putem automatizirane usluge otkrivanja neželjene pošte.`;

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  useEffect(() => {
    const accepted = window.localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!accepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    window.localStorage.setItem(COOKIE_STORAGE_KEY, "accepted");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-x-4 bottom-4 z-50 mx-auto w-auto max-w-2xl rounded-3xl border border-border bg-background/95 p-5 shadow-elevated backdrop-blur-sm sm:inset-x-6 sm:p-6">
        <p className="text-sm leading-relaxed text-foreground">
          Koristimo kolačiće kako bismo vam pružili bolje korisničko iskustvo i analizirali promet na stranici. Korištenjem naše stranice slažete se s našim pravilima o korištenju kolačića.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => setIsPrivacyOpen(true)}
            className="text-left text-sm font-semibold text-foreground underline underline-offset-4 transition-colors hover:text-accent sm:text-center"
          >
            Politika privatnosti
          </button>
          <Button type="button" variant="hero" onClick={acceptCookies} className="rounded-full px-6">
            Razumijem
          </Button>
        </div>
      </div>

      <Dialog open={isPrivacyOpen} onOpenChange={setIsPrivacyOpen}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border-border p-0">
          <DialogHeader className="border-b border-border px-6 py-5">
            <DialogTitle className="text-2xl font-display text-foreground">Politika privatnosti</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Detalji o privatnosti i korištenju kolačića.
            </DialogDescription>
          </DialogHeader>
          <div className="px-6 py-5">
            <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-7 text-foreground">
              {privacyText}
            </pre>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;