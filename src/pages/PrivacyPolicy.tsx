import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-28 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
            Politika privatnosti
          </h1>
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6 text-sm leading-7">
            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">TKO SMO MI</h2>
              <p>Adresa naše web stranice je:</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">KOMENTARI</h2>
              <p>
                Kada posjetitelji ostave komentare na web mjestu, prikupljamo podatke prikazane u obrascu za komentare, kao i IP adresu posjetitelja i niz korisničkog agenta preglednika kako bismo pomogli u otkrivanju neželjene pošte.
              </p>
              <p>
                Anonimizirani niz stvoren iz vaše adrese e-pošte (koji se naziva i hash) može se dostaviti usluzi Gravatar kako bi se vidjelo koristite li ga. Pravila o privatnosti usluge Gravatar dostupna su ovdje:{" "}
                <a href="https://automattic.com/privacy/" target="_blank" rel="noreferrer" className="text-primary underline">
                  https://automattic.com/privacy/
                </a>
                . Nakon odobrenja vašeg komentara, vaša profilna slika vidljiva je javnosti u kontekstu vašeg komentara.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">SADRŽAJ</h2>
              <p>
                Ako prenosite slike na web stranicu, trebali biste izbjegavati učitavanje slika s ugrađenim podacima o lokaciji (EXIF GPS). Posjetitelji web stranice mogu preuzeti i izdvojiti sve podatke o lokaciji sa slika na web stranici uz eksplicitno dopuštenje autoriteta nadležnog za navedenu stranicu. Za više informacija molimo Vas da se obratite na{" "}
                <a href="mailto:hub@peopleandculture.hr" className="text-primary underline">hub@peopleandculture.hr</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">KOLAČIĆI</h2>
              <p>
                Ako ostavite komentar na našoj web stranici, možete se odlučiti za spremanje svog imena, adrese e-pošte i web stranice u kolačiće. Ovo je za vašu udobnost kako ne biste morali ponovno ispunjavati svoje podatke kada ostavite drugi komentar. Ovi kolačići će trajati godinu dana.
              </p>
              <p>
                Ako posjetite našu stranicu za prijavu, postavit ćemo privremeni kolačić kako bismo utvrdili prihvaća li vaš preglednik kolačiće. Ovaj kolačić ne sadrži osobne podatke i odbacuje se kada zatvorite preglednik.
              </p>
              <p>
                Ako se prijavite, također ćemo postaviti nekoliko kolačića za spremanje vaših podataka za prijavu i izbora prikaza zaslona. Kolačići za prijavu traju dva dana, a kolačići s opcijama zaslona godinu dana. Ako odaberete &quot;Zapamti me&quot;, vaša će prijava trajati dva tjedna. Ako se odjavite sa svog računa, kolačići za prijavu bit će uklonjeni.
              </p>
              <p>
                Ako uredite ili objavite članak, dodatni kolačić bit će spremljen u vaš preglednik. Ovaj kolačić ne sadrži osobne podatke i jednostavno označava ID objave članka koji ste upravo uredili. Istječe nakon 1 dana.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">UGRAĐENI SADRŽAJ S DRUGIH WEB STRANICA</h2>
              <p>
                Članci na ovoj stranici mogu sadržavati ugrađeni sadržaj (npr. videozapise, slike, članke itd.). Ugrađeni sadržaj s drugih web stranica ponaša se na potpuno isti način kao da je posjetitelj posjetio drugu web stranicu.
              </p>
              <p>
                Te web stranice mogu prikupljati podatke o vama, koristiti kolačiće, ugrađivati dodatno praćenje trećih strana i nadzirati vašu interakciju s tim ugrađenim sadržajem, uključujući praćenje vaše interakcije s ugrađenim sadržajem ako imate račun i prijavljeni ste na tu web stranicu.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">S KIM DIJELIMO VAŠE PODATKE</h2>
              <p>Ako zatražite ponovno postavljanje lozinke, vaša IP adresa bit će uključena u e-poštu za ponovno postavljanje.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">KOLIKO DUGO ZADRŽAVAMO VAŠE PODATKE</h2>
              <p>
                Ako ostavite komentar, komentar i njegovi metapodaci zadržavaju se na neodređeno vrijeme. To je tako da možemo automatski prepoznati i odobriti sve naknadne komentare umjesto da ih držimo u redu za moderiranje.
              </p>
              <p>
                Za korisnike koji se registriraju na našoj web stranici (ako postoje), također pohranjujemo osobne podatke koje daju u svom korisničkom profilu. Svi korisnici mogu vidjeti, urediti ili izbrisati svoje osobne podatke u bilo kojem trenutku (osim što ne mogu promijeniti svoje korisničko ime). Administratori web-mjesta također mogu vidjeti i uređivati te podatke.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">KOJA PRAVA IMATE NAD SVOJIM PODACIMA</h2>
              <p>
                Ako imate račun na ovoj stranici ili ste ostavili komentare, možete zatražiti primanje izvezene datoteke osobnih podataka koje imamo o vama, uključujući sve podatke koje ste nam dali. Također možete zatražiti da izbrišemo sve osobne podatke koje imamo o vama. To ne uključuje podatke koje smo dužni čuvati u administrativne, pravne ili sigurnosne svrhe.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">GDJE SE ŠALJU VAŠI PODACI</h2>
              <p>Komentari posjetitelja mogu se provjeriti putem automatizirane usluge otkrivanja neželjene pošte.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
