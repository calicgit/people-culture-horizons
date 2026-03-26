import venueImage from "@/assets/venue.jpg";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const VenueSection = () => {
  const { t } = useLanguage();

  const details = [
    { icon: MapPin, label: t("venue.address"), value: "Slavonska avenija 6/2, Zagreb" },
  ];

  return (
    <section id="venue" className="bg-background py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-14 text-center md:mb-16">
          <span className="text-accent font-semibold text-xs uppercase tracking-[0.25em]">{t("venue.label")}</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-4 mb-5">{t("venue.title")}</h2>
          <div className="section-divider mb-6" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-elevated mb-6 max-w-3xl mx-auto">
            <img src={venueImage} alt="Mozaik Event Centar, Zagreb" className="w-full h-full object-cover aspect-[4/3]" />
          </div>
          <div className="grid gap-4 max-w-md mx-auto">
            {details.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col items-center text-center gap-4 p-5 rounded-2xl bg-secondary border border-border">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{label}</p>
                  <p className="text-muted-foreground text-sm font-light">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
