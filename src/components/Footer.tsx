import { Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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

Ako se prijavite, također ćemo postaviti nekoliko kolačića za spremanje vaših podataka za prijavu i izbora prikaza zaslona. Kolačići za prijavu traju dva dana, a kolačići s opcijama zaslona godinu dana. Ako odaberete "Zapamti me", vaša će prijava trajati dva tjedna. Ako se odjavite sa svog računa, kolačići za prijavu bit će uklonjeni.

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

const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  return (
    <footer className="border-t border-primary-foreground/5 bg-hero py-7 md:py-8">
      <div className="container mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 text-primary-foreground/80 mb-6">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-primary-foreground">Pratite nas</h3>
            <a
              href="https://www.linkedin.com/company/103946511"
              target="_blank"
              rel="noreferrer"
              aria-label="People & Culture HORIZONS na LinkedInu"
              className="inline-flex items-center justify-center rounded-full border border-primary-foreground/15 p-3 text-primary-foreground transition-colors hover:text-primary hover:border-primary md:justify-start"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-9.5 6.5H7V17h2.5zM8.25 6.56a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88M17 12.03c0-2.5-1.33-3.66-3.1-3.66-1.43 0-2.07.79-2.43 1.34V9.5H9V17h2.47v-4.18c0-1.1.21-2.17 1.57-2.17 1.34 0 1.36 1.25 1.36 2.24V17H17z" />
              </svg>
            </a>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-primary-foreground">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <a href="mailto:horizons@peopleandculture.hr" className="flex items-center justify-center gap-3 hover:text-primary transition-colors md:justify-start">
                <Mail className="h-4 w-4 shrink-0" />
                <span>horizons@peopleandculture.hr</span>
              </a>
              <a href="tel:+38514103734" className="flex items-center justify-center gap-3 hover:text-primary transition-colors md:justify-start">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+385 1 4103 734</span>
              </a>
            </div>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-primary-foreground">Program, organizacija, mediji i sponzori</h3>
            <div className="space-y-3 text-sm">
              <a href="mailto:dario.perak@deepproject.hr" className="flex items-center justify-center gap-3 hover:text-primary transition-colors md:justify-start">
                <Mail className="h-4 w-4 shrink-0" />
                <span>dario.perak@deepproject.hr</span>
              </a>
              <a href="tel:+385981628349" className="flex items-center justify-center gap-3 hover:text-primary transition-colors md:justify-start">
                <Smartphone className="h-4 w-4 shrink-0" />
                <span>+385 98 1628 349</span>
              </a>
            </div>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-primary-foreground">People &amp; Culture HORIZONS. - DeeP Project</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Kamenarka 37, Zagreb</span>
              </div>
              <a href="mailto:info@deepproject.hr" className="flex items-center justify-center gap-3 hover:text-primary transition-colors md:justify-start">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@deepproject.hr</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/5 pt-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-primary-foreground/30 relative">
          <span className="sm:absolute sm:left-1/2 sm:-translate-x-1/2">© 2026 People &amp; Culture HORIZONS.</span>
          <button
            type="button"
            onClick={() => setIsPrivacyOpen(true)}
            className="text-primary-foreground/30 underline underline-offset-4 transition-colors hover:text-primary"
          >
            Politika privatnosti
          </button>
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
    </footer>
  );
};

export default Footer;
