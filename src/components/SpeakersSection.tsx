import { useLanguage } from "@/contexts/LanguageContext";

const SpeakersSection = () => {
  const { t } = useLanguage();

  const speakers = Array.from({ length: 4 }, (_, idx) => ({ id: idx }));

  return (
    <section id="speakers" className="bg-section-alt py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-14 text-center md:mb-16">
          {t("speakers.label") && (
            <span className="text-accent font-semibold text-xs uppercase tracking-[0.25em]">{t("speakers.label")}</span>
          )}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-4 mb-5">{t("speakers.title")}</h2>
          <div className="section-divider mb-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="group">
              <div className="relative mb-6 overflow-hidden rounded-3xl aspect-[3/4] border border-border bg-card shadow-card group-hover:shadow-elevated transition-shadow duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="mb-2 inline-block min-h-[1.75rem] rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{"\u00A0"}</span>
                  <h3 className="min-h-[1.75rem] text-lg font-bold text-foreground font-display">{"\u00A0"}</h3>
                  <p className="mt-0.5 min-h-[1.25rem] text-sm font-light text-muted-foreground">{"\u00A0"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
