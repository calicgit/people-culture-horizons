import { useState } from "react";
import { User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import hostAntonija from "@/assets/host-antonija-mandic.jpg";
import speakerMarijaFelkel from "@/assets/speaker-marija-felkel-avatar.jpg";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Speaker {
  name: string;
  title: string;
  company: string;
  photo?: string;
  photoPosition?: string;
  bioKey?: string;
}

const speakers: Speaker[] = [
  { name: "Seni Staničić", title: "Head of Human Resources", company: "ENNA Group" },
  { name: "Stefan Vukajlović", title: "Group HR Director for Compensation and Benefits", company: "Fortenova Group" },
  { name: "Krešimir Barić", title: "CFO", company: "Erste&Steiermärkische Bank Croatia" },
  { name: "Mirela Kotarac", title: "HR Director & Member of the Management Board", company: "Cemex Croatia" },
  { name: "Mirta Pađen Lee", title: "Senior Director of Reward and Operations", company: "Infobip" },
  { name: "Marija Felkel", title: "Group HR Director & Member of the Executive Committee", company: "Perutnina Ptuj Group", photo: speakerMarijaFelkel, photoPosition: "center", bioKey: "speakers.bio.marija_felkel" },
  { name: "Marina Regjo", title: "Human Resources Director", company: "FNG Property HR (Fortenova Group)" },
  { name: "Iva Rogović Lekić", title: "CEO", company: "GrECo Specialty" },
  { name: "Suzana Plečko", title: "Human Resources Director", company: "Franck" },
  { name: "Martina Skorin", title: "Head of Human Resources", company: "HAKOM" },
  { name: "Branimir Spajić", title: "Director | Strategic Human Resources Management", company: "Hrvatski Telekom" },
  { name: "Sanja Škrinjar", title: "Human Resources Consultant", company: "DeeP Project" },
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
                    <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden bg-muted">
                      <img
                        src={speaker.photo}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: speaker.photoPosition || "center" }}
                      />
                    </div>
                  ) : (
                    <div className="flex-shrink-0 w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <User className="w-10 h-10" />
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
        <DialogContent className="sm:max-w-lg p-0 overflow-hidden">
          {selectedSpeaker && (
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-5 mb-6">
                {selectedSpeaker.photo ? (
                  <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden bg-muted ring-2 ring-accent/30">
                    <img
                      src={selectedSpeaker.photo}
                      alt={selectedSpeaker.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: selectedSpeaker.photoPosition || "center" }}
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
