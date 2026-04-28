import { User, Mic2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Speaker {
  name: string;
  title: string;
  company: string;
}

const speakers: Speaker[] = [
  { name: "Seni Staničić", title: "Head of Human Resources", company: "ENNA Group" },
  { name: "Stefan Vukajlović", title: "Group HR Director for Compensation and Benefits", company: "Fortenova Group" },
  { name: "Krešimir Barić", title: "CFO", company: "Erste&Steiermärkische Bank Croatia" },
  { name: "Mirela Kotarac", title: "HR Director & Member of the Management Board", company: "Cemex Croatia" },
  { name: "Mirta Pađen Lee", title: "Senior Director of Reward and Operations", company: "Infobip" },
  { name: "Marija Felkel", title: "Group HR Director & Member of the Executive Committee", company: "Perutnina Ptuj Group" },
  { name: "Marina Regjo", title: "HR Director", company: "FNG Property HR (Fortenova Group)" },
  { name: "Iva Rogović Lekić", title: "CEO", company: "GrECo Specialty" },
  { name: "Suzana Plečko", title: "Human Resources Director", company: "Franck" },
  { name: "Martina Skorin", title: "Head of Human Resources", company: "HAKOM" },
  { name: "Branimir Spajić", title: "Director | Strategic Human Resources Management", company: "Hrvatski Telekom" },
];

const SpeakersSection = () => {
  const { t } = useLanguage();

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
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative flex items-center gap-5 rounded-2xl border-2 border-accent/40 bg-gradient-to-r from-accent/10 via-accent/5 to-transparent p-5 shadow-elevated">
            <div className="absolute -top-2.5 left-5 flex items-center gap-1 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground shadow-sm">
              <Mic2 className="w-3 h-3" />
              {t("speakers.host.badge")}
            </div>
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <User className="w-8 h-8" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-bold text-foreground font-display leading-tight">{t("speakers.host.name")}</h3>
              <p className="mt-1 text-sm font-semibold text-accent leading-snug">{t("speakers.host.role")}</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:shadow-elevated hover:border-accent/40"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <User className="w-7 h-7" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-foreground font-display leading-tight">{speaker.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground font-light leading-snug">{speaker.title}</p>
                <p className="mt-1 text-sm font-semibold text-accent leading-snug">{speaker.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
