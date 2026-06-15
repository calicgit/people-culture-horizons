import { useState } from "react";
import { User, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import hostAntonija from "@/assets/host-antonija-mandic.jpg";
import speakerSanjaSkrinjar from "@/assets/speaker-sanja-skrinjar.jpg";
import speakerMarijaFelkel from "@/assets/speaker-marija-felkel.jpg";
import speakerMirelaKotarac from "@/assets/speaker-mirela-kotarac.jpg";
import speakerIvanZubak from "@/assets/speaker-ivan-zubak.png";
import speakerIvanBeslic from "@/assets/speaker-ivan-beslic.png";
import speakerMladenPejkovic from "@/assets/speaker-mladen-pejkovic.png";
import speakerIvaRogovicLekic from "@/assets/speaker-iva-rogovic-lekic.jpg";
import speakerIngridTenaGrgic from "@/assets/speaker-ingrid-tena-grgic.png";

import speakerBornaLoncar from "@/assets/speaker-borna-loncar.png";
import speakerMarinaRegjo from "@/assets/speaker-marina-regjo.jpg";
import speakerSnjezanaLohninger from "@/assets/speaker-snjezana-lohninger.jpg";
import speakerTihanaMarusic from "@/assets/speaker-tihana-marusic.png";
import speakerMajaDarijaSkrljak from "@/assets/speaker-maja-darija-skrljak.jpg";
import speakerMartinaSkorin from "@/assets/speaker-martina-skorin.jpg";
import speakerAndreaTomsic from "@/assets/speaker-andrea-tomsic.jpg";
import speakerSeniStanicic from "@/assets/speaker-seni-stanicic.jpg";
import speakerAntonBarbir from "@/assets/speaker-anton-barbir.jpg";
import speakerVjekoslavGolubovicAsset from "@/assets/speaker-vjekoslav-golubovic.png.asset.json";
import speakerPetarCalicAsset from "@/assets/speaker-petar-calic.jpg.asset.json";
import speakerNikolaMilosavljevicAsset from "@/assets/speaker-nikola-milosavljevic.jpg.asset.json";
import speakerJelicaRadovicAsset from "@/assets/speaker-jelica-radovic.jpg.asset.json";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Speaker {
  name: string;
  title: string;
  company: string;
  photo?: string;
  photoPosition?: string;
  photoScale?: number;
  bioKey?: string;
}

const speakers: Speaker[] = [
  { name: "Ivan Bešlić", title: "Co-founder & CSO", company: "Sofascore", photo: speakerIvanBeslic, photoPosition: "center center", photoScale: 1.0, bioKey: "speakers.bio.ivan_beslic" },
  { name: "Seni Staničić", title: "Head of Human Resources", company: "ENNA Group", photo: speakerSeniStanicic, photoPosition: "center top", photoScale: 1.0, bioKey: "speakers.bio.seni_stanicic" },
  { name: "Stefan Vukajlović", title: "Group HR Director for Compensation and Benefits", company: "Fortenova Group" },
  { name: "Krešimir Barić", title: "CFO", company: "Erste&Steiermärkische Bank Croatia" },
  { name: "Mirela Kotarac", title: "HR Director & Member of the Management Board", company: "Cemex Croatia", photo: speakerMirelaKotarac, photoPosition: "center 30%", photoScale: 1.35, bioKey: "speakers.bio.mirela_kotarac" },
  { name: "Mirta Pađen Lee", title: "Senior Director of Reward and Operations", company: "Infobip" },
  { name: "Marija Felkel", title: "Group HR Director & Member of the Executive Committee", company: "Perutnina Ptuj Group", photo: speakerMarijaFelkel, photoPosition: "65% 25%", bioKey: "speakers.bio.marija_felkel" },
  { name: "Marina Regjo", title: "Human Resources Director", company: "FNG Property HR (Fortenova Group)", photo: speakerMarinaRegjo, photoPosition: "center 20%", photoScale: 1.0, bioKey: "speakers.bio.marina_regjo" },
  { name: "Iva Rogović Lekić", title: "CEO", company: "GrECo Specialty", photo: speakerIvaRogovicLekic, photoPosition: "center 20%", photoScale: 1.0, bioKey: "speakers.bio.iva_rogovic_lekic" },
  { name: "Suzana Plečko", title: "Human Resources Director", company: "Franck" },
  { name: "Martina Skorin", title: "Head of Human Resources", company: "HAKOM", photo: speakerMartinaSkorin, photoPosition: "center 20%", photoScale: 1.0, bioKey: "speakers.bio.martina_skorin" },
  { name: "Branimir Spajić", title: "Director of Strategic Human Resources Management", company: "Hrvatski Telekom" },
  { name: "Ivan Zubak", title: "CEO", company: "Zubak Group", photo: speakerIvanZubak, photoPosition: "38% 24%", photoScale: 1.0, bioKey: "speakers.bio.ivan_zubak" },
  { name: "Mladen Pejković", title: "Senior Executive Director, Transformation & ICT", company: "Atlantic Group", photo: speakerMladenPejkovic, photoPosition: "center 15%", photoScale: 1.0, bioKey: "speakers.bio.mladen_pejkovic" },
  { name: "Sanja Škrinjar", title: "Team Lead & HR Consultant", company: "DeeP Project", photo: speakerSanjaSkrinjar, photoPosition: "center 8%", bioKey: "speakers.bio.sanja_skrinjar" },
  { name: "Snježana M. Lohninger", title: "CFO", company: "Porsche Inter Auto", photo: speakerSnjezanaLohninger, photoPosition: "center 15%", photoScale: 1.0, bioKey: "speakers.bio.snjezana_lohninger" },
  { name: "Ivan Artuković", title: "CEO", company: "Franck" },
  { name: "Vjekoslav Golubović", title: "Principal HR Consultant", company: "DeeP Project", photo: speakerVjekoslavGolubovicAsset.url, photoPosition: "center 15%", photoScale: 1.0, bioKey: "speakers.bio.vjekoslav_golubovic" },
  { name: "Andrea Tomšić", title: "Head of Human Resources", company: "Aircash", photo: speakerAndreaTomsic, photoPosition: "center 40%", photoScale: 1.1, bioKey: "speakers.bio.andrea_tomsic" },
  { name: "Jelena Novačić", title: "Head of People & Culture, Marketing and Internal Communications", company: "Lürssen" },
  { name: "Petar Čalić", title: "CEO", company: "DeeP Project", photo: speakerPetarCalicAsset.url, photoPosition: "center 40%", photoScale: 1.0, bioKey: "speakers.bio.petar_calic" },
  { name: "Željko Tandarić", title: "Member of the Management Board", company: "Abysalto" },
  { name: "Ingrid Tena Grgić", title: "Human Resources Consultant", company: "DeeP Project", photo: speakerIngridTenaGrgic, photoPosition: "center 15%", photoScale: 1.0, bioKey: "speakers.bio.ingrid_tena_grgic" },
  { name: "Tihana Marušić", title: "Talent Management Lead", company: "Atlantic Group", photo: speakerTihanaMarusic, photoPosition: "center 15%", photoScale: 1.0, bioKey: "speakers.bio.tihana_marusic" },
  { name: "Nikola Milosavljević", title: "Managing Partner & Senior HR Consultant", company: "HR Fabrika", photo: speakerNikolaMilosavljevicAsset.url, photoPosition: "center top", photoScale: 1.0, bioKey: "speakers.bio.nikola_milosavljevic" },
  { name: "Maja Darija Škrljak", title: "Group Talent Attraction and Acquisition Manager", company: "Vetropack Group", photo: speakerMajaDarijaSkrljak, photoPosition: "center 15%", photoScale: 1.0, bioKey: "speakers.bio.maja_darija_skrljak" },
  { name: "Borna Lončar", title: "HR Consultant & Researcher", company: "DeeP Project", photo: speakerBornaLoncar, photoPosition: "center 15%", photoScale: 1.0, bioKey: "speakers.bio.borna_loncar" },
  { name: "Anton Barbir", title: "Member of Management Board", company: "ENNA Group", photo: speakerAntonBarbir, photoPosition: "center 20%", photoScale: 1.0, bioKey: "speakers.bio.anton_barbir" },
  { name: "Jelica Radović", title: "Managing Partner & HR Consultant", company: "HR Fabrika", photo: speakerJelicaRadovicAsset.url, photoPosition: "center 5%", photoScale: 1.0, bioKey: "speakers.bio.jelica_radovic" },
  { name: "Tina Balenović", title: "Human Resources Director", company: "SPAN" },
  { name: "Siniša Krajnović", title: "President of the Management Board", company: "Ericsson Nikola Tesla" },
];

const SpeakersSection = () => {
  const { t } = useLanguage();
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <section id="speakers" className="bg-section-alt py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-14 text-center md:mb-16">
          {t("speakers.label") && (
            <span className="text-accent font-semibold text-xs uppercase tracking-[0.25em]">{t("speakers.label")}</span>
          )}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-4 mb-5 font-display">{t("speakers.title")}</h2>
          <div className="section-divider mb-6" />
        </div>

        {/* Featured: Conference Host */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-4 rounded-2xl border-2 border-accent/40 bg-gradient-to-r from-accent/10 via-accent/5 to-transparent px-5 py-3 shadow-elevated">
            <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden ring-2 ring-accent/40 bg-muted">
              <img
                src={hostAntonija}
                alt={t("speakers.host.name")}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left leading-tight">
              <h3 className="text-base font-bold text-foreground font-display">{t("speakers.host.name")}</h3>
              <p className="mt-0.5 text-xs font-semibold text-accent">{t("speakers.host.role")}</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {speakers.map((speaker) => {
            const hasBio = !!speaker.bioKey;

            return (
              <div
                key={speaker.name}
                className={`group rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-elevated hover:border-accent/40 ${hasBio ? "cursor-pointer" : ""}`}
                onClick={() => hasBio && setSelectedSpeaker(speaker)}
              >
                <div className="flex items-start gap-4 p-6">
                  {speaker.photo ? (
                    <div className="flex-shrink-0 w-28 h-28 rounded-full overflow-hidden bg-muted">
                      <img
                        src={speaker.photo}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: speaker.photoPosition || "center", transform: speaker.photoScale ? `scale(${speaker.photoScale})` : undefined }}
                      />
                    </div>
                  ) : (
                    <div className="flex-shrink-0 w-28 h-28 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <User className="w-12 h-12" />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-foreground font-display leading-tight">{speaker.name}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground font-light leading-snug">{speaker.title}</p>
                    <p className="mt-1.5 text-sm font-semibold text-accent leading-snug">{speaker.company}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bio Dialog */}
      <Dialog open={!!selectedSpeaker} onOpenChange={(open) => !open && setSelectedSpeaker(null)}>
        <DialogContent className="sm:max-w-lg p-0 max-h-[85vh] overflow-y-auto">
          {selectedSpeaker && (
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-5 mb-6">
                {selectedSpeaker.photo ? (
                  <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden bg-muted ring-2 ring-accent/30">
                    <img
                      src={selectedSpeaker.photo}
                      alt={selectedSpeaker.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: selectedSpeaker.photoPosition || "center", transform: selectedSpeaker.photoScale ? `scale(${selectedSpeaker.photoScale})` : undefined }}
                    />
                  </div>
                ) : (
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center text-accent ring-2 ring-accent/30">
                    <User className="w-10 h-10" />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-foreground font-display">{selectedSpeaker.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground font-light">{selectedSpeaker.title}</p>
                  <p className="mt-0.5 text-sm font-semibold text-accent">{selectedSpeaker.company}</p>
                </div>
              </div>
              {selectedSpeaker.bioKey && (
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {t(selectedSpeaker.bioKey)}
                </p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SpeakersSection;
