import { Helmet } from "react-helmet-async";
import { Trophy, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import onaNetworkImage from "@/assets/awards-ona-network.jpg";


const Awards = () => {
  const { lang } = useLanguage();

  const content = lang === "hr"
    ? {
        eyebrow: "HUB People & Culture Awards",
        title: "Priznanja utemeljena na stvarnom utjecaju",
        intro: [
          "HUB People & Culture Awards pokrenute su s jasnim ciljem - prepoznati pojedince koji svojim radom ostvaruju stvaran i prepoznatljiv utjecaj u People & Culture zajednici.",
          "Kroz transparentan i metodološki utemeljen proces želimo istaknuti stručnjake čiji doprinos svakodnevno potvrđuju ljudi i organizacije s kojima surađuju.",
          "Nagrade će biti dodijeljene na konferenciji People & Culture HORIZONS.",
        ],
        categoriesTitle: "Kategorije",
        categories: [
          {
            name: "People & Culture Lider Godine",
            desc: "Priznanje osobi koja svojim vodstvom, inicijativama i doprinosom oblikuje razvoj People & Culture prakse unutar organizacija i zajednice.",
          },
          {
            name: "People & Culture Autoritet Godine",
            desc: "Priznanje stručnjaku kojeg profesionalna zajednica prepoznaje kao relevantan izvor znanja, savjeta i stručne podrške.",
          },
        ],
        nominationsTitle: "Kako funkcioniraju nominacije?",
        nominations: [
          "Za razliku od klasičnih nagrada koje se temelje na prijavama i prezentacijama kandidata, HUB People & Culture Awards u potpunosti se oslanjaju na mišljenje profesionalne zajednice.",
          "Kandidate nominiraju kolege, suradnici, klijenti, partneri i polaznici edukacija - ljudi koji su izravno upoznati s njihovim radom i utjecajem.",
        ],
        methodologyTitle: "Metodologija temeljena na stvarnom utjecaju",
        methodology: [
          "Proces odabira inspiriran je principima Organizacijske analize mreža (ONA - Organizational Network Analysis).",
          "ONA polazi od ideje da se stvarni profesionalni utjecaj ne mjeri samo titulom ili pozicijom, već odnosima koje pojedinac gradi kroz suradnju, dijeljenje znanja i podršku drugima.",
        ],
        valuesIntro: "Naš model vrednuje:",
        values: [
          "prepoznatljivost unutar stručne zajednice",
          "širinu profesionalne mreže",
          "utjecaj kroz različite organizacije i okruženja",
          "kvalitetu i raznolikost profesionalnih odnosa",
        ],
        valuesOutro:
          "Time osiguravamo da nagrada odražava stvaran doprinos zajednici, neovisno o veličini organizacije iz koje kandidat dolazi.",
        integrityTitle: "Integritet i transparentnost procesa",
        integrityIntro: "Kako bismo osigurali vjerodostojnost nagrada:",
        integrity: [
          "svaka nominacija prolazi verifikaciju e-mail adrese",
          "jedna osoba može poslati samo jednu nominaciju po kategoriji",
          "Savjetodavno vijeće nadzire provedbu metodologije i tehničku ispravnost procesa",
          "vijeće nema glasačku ulogu u odabiru dobitnika",
        ],
        soonTitle: "Uskoro otvaramo nominacije",
        soon: [
          "Pozivamo cijelu People & Culture zajednicu da sudjeluje u prepoznavanju pojedinaca koji svojim znanjem, suradnjom i utjecajem pomiču struku naprijed.",
          "Dobitnici će biti proglašeni na konferenciji People & Culture HORIZONS 2026.",
        ],
      }
    : {
        eyebrow: "HUB People & Culture Awards",
        title: "Recognition based on real impact",
        intro: [
          "The HUB People & Culture Awards were launched with a clear goal - to recognise individuals whose work creates real and distinctive impact in the People & Culture community.",
          "Through a transparent, methodology-driven process we highlight professionals whose contribution is confirmed every day by the people and organisations they work with.",
          "The awards will be presented at the People & Culture HORIZONS conference.",
        ],
        categoriesTitle: "Categories",
        categories: [
          {
            name: "People & Culture Leader of the Year",
            desc: "Recognition for a person whose leadership, initiatives and contribution shape the development of People & Culture practice within organisations and the community.",
          },
          {
            name: "People & Culture Authority of the Year",
            desc: "Recognition for a professional whom the community sees as a relevant source of knowledge, advice and expert support.",
          },
        ],
        nominationsTitle: "How do nominations work?",
        nominations: [
          "Unlike traditional awards based on applications and candidate presentations, the HUB People & Culture Awards rely entirely on the opinion of the professional community.",
          "Candidates are nominated by colleagues, collaborators, clients, partners and training participants - people directly familiar with their work and impact.",
        ],
        methodologyTitle: "A methodology grounded in real impact",
        methodology: [
          "The selection process is inspired by the principles of Organizational Network Analysis (ONA).",
          "ONA is based on the idea that real professional influence is not measured by title or position alone, but by the relationships an individual builds through collaboration, knowledge-sharing and support for others.",
        ],
        valuesIntro: "Our model evaluates:",
        values: [
          "recognition within the professional community",
          "the breadth of the professional network",
          "impact across different organisations and environments",
          "the quality and diversity of professional relationships",
        ],
        valuesOutro:
          "This ensures that the award reflects a real contribution to the community, regardless of the size of the organisation the candidate comes from.",
        integrityTitle: "Process integrity and transparency",
        integrityIntro: "To guarantee the credibility of the awards:",
        integrity: [
          "every nomination goes through email verification",
          "one person can submit only one nomination per category",
          "an Advisory Council oversees the methodology and technical correctness of the process",
          "the council has no voting role in selecting the winners",
        ],
        soonTitle: "Nominations open soon",
        soon: [
          "We invite the entire People & Culture community to take part in recognising individuals who, through their knowledge, collaboration and influence, move the profession forward.",
          "The winners will be announced at the People & Culture HORIZONS 2026 conference.",
        ],
      };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{content.eyebrow} — People & Culture HORIZONS</title>
        <meta name="description" content={content.intro[0].slice(0, 160)} />
        <link rel="canonical" href="https://peopleandculture.hr/nagrade" />
        <meta property="og:title" content={`${content.eyebrow} — People & Culture HORIZONS`} />
        <meta property="og:description" content={content.intro[0].slice(0, 160)} />
        <meta property="og:url" content="https://peopleandculture.hr/nagrade" />
      </Helmet>
      <Navbar />
      <main className="pt-28 pb-20">
        <article className="container mx-auto max-w-3xl px-6">
          <header className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-accent">
              {content.eyebrow}
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {content.title}
            </h1>
          </header>

          <section className="space-y-4 text-base leading-relaxed text-foreground/85 md:text-lg">
            {content.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

          <section className="mt-14">
            <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
              {content.categoriesTitle}
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {content.categories.map((c, idx) => {
                const Icon = idx === 0 ? Trophy : Award;
                return (
                  <div
                    key={c.name}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-accent/40 hover:shadow-elevated"
                  >
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent ring-1 ring-accent/30">
                      <Icon className="h-7 w-7" strokeWidth={1.75} />
                    </div>
                    <h3 className="mb-3 text-lg font-semibold text-foreground">
                      {c.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-foreground/75">
                      {c.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              {content.nominationsTitle}
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-foreground/85 md:text-lg">
              {content.nominations.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              {content.methodologyTitle}
            </h2>
            <div className="mb-8 overflow-hidden rounded-2xl border border-border bg-[#0a1a3a] shadow-elevated">
              <img
                src={onaNetworkImage}
                alt={lang === "hr" ? "Organizacijska analiza mreža (ONA) — vizualizacija" : "Organizational Network Analysis (ONA) visualization"}
                className="w-full h-auto"
                width={1280}
                height={1024}
                loading="lazy"
              />
            </div>
            <div className="space-y-4 text-base leading-relaxed text-foreground/85 md:text-lg">
              {content.methodology.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p>{content.valuesIntro}</p>
              <ul className="ml-5 list-disc space-y-2">
                {content.values.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
              <p>{content.valuesOutro}</p>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              {content.integrityTitle}
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-foreground/85 md:text-lg">
              <p>{content.integrityIntro}</p>
              <ul className="ml-5 list-disc space-y-2">
                {content.integrity.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-14 rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              {content.soonTitle}
            </h2>
            <div className="space-y-3 text-base leading-relaxed text-foreground/85 md:text-lg">
              {content.soon.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Awards;
