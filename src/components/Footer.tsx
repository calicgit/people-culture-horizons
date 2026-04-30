import { Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const privacyTexts = {
  hr: `POLITIKA PRIVATNOSTI
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
Komentari posjetitelja mogu se provjeriti putem automatizirane usluge otkrivanja neželjene pošte.`,
  en: `PRIVACY POLICY
WHO WE ARE
Our website address is: https://peopleandculture.hr

COMMENTS
When visitors leave comments on the site, we collect the data shown in the comments form, as well as the visitor's IP address and browser user agent string to help spam detection.

An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.

CONTENT
If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS). Visitors to the website can download and extract any location data from images on the website with the explicit permission of the authority responsible for the site. For more information please contact horizons@peopleandculture.hr.

COOKIES
If you leave a comment on our website, you may opt in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.

If you visit our login page, we will set a temporary cookie to determine whether your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.

If you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks. If you log out of your account, the login cookies will be removed.

If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.

EMBEDDED CONTENT FROM OTHER WEBSITES
Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.

These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.

WHO WE SHARE YOUR DATA WITH
If you request a password reset, your IP address will be included in the reset email.

HOW LONG WE RETAIN YOUR DATA
If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.

For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.

WHAT RIGHTS YOU HAVE OVER YOUR DATA
If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.

WHERE YOUR DATA IS SENT
Visitor comments may be checked through an automated spam detection service.`,
};

const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const { t, lang } = useLanguage();

  return (
    <footer className="border-t border-primary-foreground/5 bg-hero py-7 md:py-8">
      <div className="container mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 text-primary-foreground/80 mb-6">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-primary-foreground">{t("footer.followUs")}</h3>
            <a
              href="https://www.linkedin.com/company/103946511"
              target="_blank"
              rel="noreferrer"
              aria-label="People & Culture HORIZONS na LinkedInu"
              className="inline-flex items-center justify-center md:justify-start"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" className="h-10 w-10" aria-hidden="true">
                <rect width="72" height="72" rx="8" fill="#0A66C2" />
                <path d="M20.1 29.2h6.13V51.2H20.1zM23.17 18.48a3.56 3.56 0 1 1 0 7.12 3.56 3.56 0 0 1 0-7.12M31.63 29.2h5.87v3h.08a6.44 6.44 0 0 1 5.8-3.19c6.21 0 7.36 4.09 7.36 9.4V51.2h-6.13V39.81c0-2.72-.05-6.22-3.79-6.22s-4.37 2.96-4.37 6.02V51.2h-6.13V29.2z" fill="#fff" />
              </svg>
            </a>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-primary-foreground">{t("footer.contact")}</h3>
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
            <h3 className="font-semibold text-primary-foreground">{t("footer.programOrgMedia")}</h3>
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
            <h3 className="font-semibold text-primary-foreground">{t("footer.orgTitle")}</h3>
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
          <span className="sm:absolute sm:left-1/2 sm:-translate-x-1/2">{t("footer.copyright")}</span>
          <button
            type="button"
            onClick={() => setIsPrivacyOpen(true)}
            className="text-primary-foreground/30 underline underline-offset-4 transition-colors hover:text-primary sm:ml-auto"
          >
            {t("footer.privacyPolicy")}
          </button>
        </div>
      </div>

      <Dialog open={isPrivacyOpen} onOpenChange={setIsPrivacyOpen}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border-border p-0">
          <DialogHeader className="border-b border-border px-6 py-5">
            <DialogTitle className="text-2xl font-display text-foreground">{t("footer.privacyModalTitle")}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {t("footer.privacyModalDesc")}
            </DialogDescription>
          </DialogHeader>
          <div className="px-6 py-5">
            <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-7 text-foreground">
              {privacyTexts[lang]}
            </pre>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
