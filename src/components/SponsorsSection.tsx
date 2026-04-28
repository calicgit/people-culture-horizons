import { useLanguage } from "@/contexts/LanguageContext";
import deepProjectLogo from "@/assets/deep-project-logo.png";
import partnerGreco from "@/assets/partner-greco.png";
import partnerJenz from "@/assets/partner-jenz.png";

const platinumPartners = [
  { name: "Greco", logo: partnerGreco },
  { name: "Jenz", logo: partnerJenz },
];

const goldSponsors = [
  { name: "Apex Solutions", initials: "AS" },
  { name: "BluePeak", initials: "BP" },
  { name: "Catalyst HR", initials: "CH" },
  { name: "DataFlow", initials: "DF" },
];

const communityPartners = [
  { name: "HR Innovators", initials: "HI" },
  { name: "WorkForward", initials: "WF" },
  { name: "TalentHub", initials: "TH" },
  { name: "PeopleFirst", initials: "PF" },
  { name: "FutureWork Lab", initials: "FL" },
];

const SponsorLogo = ({ name, initials, size = "md" }: { name: string; initials: string; size?: "lg" | "md" | "sm" }) => {
  const sizeClasses = { lg: "w-44 h-24", md: "w-36 h-20", sm: "w-28 h-16" };
  const textClasses = { lg: "text-2xl", md: "text-xl", sm: "text-lg" };

  return (
    <div
      className={`${sizeClasses[size]} rounded-2xl border border-border bg-card flex items-center justify-center hover:border-accent/30 hover:shadow-card transition-all duration-300 group cursor-pointer`}
      title={name}
    >
      <span className={`${textClasses[size]} font-display font-bold text-muted-foreground/40 group-hover:text-accent transition-colors tracking-wider`}>
        {initials}
      </span>
    </div>
  );
};

const PartnerLogo = ({ name, logo }: { name: string; logo: string }) => (
  <div className="flex h-28 w-48 items-center justify-center p-4 md:h-32 md:w-56" title={name}>
    <img src={logo} alt={name} className="max-h-full max-w-full object-contain" />
  </div>
);

const SponsorsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="sponsors" className="bg-section-alt pb-6 pt-20 md:pb-8 md:pt-24">
      <div className="container mx-auto px-6">
        <div className="mb-14 text-center md:mb-16">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-4 mb-5">{t("sponsors.title")}</h2>
          <div className="section-divider mb-6" />
        </div>

        <div className="mb-12 md:mb-14">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-8">{t("sponsors.platinum")}</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {platinumPartners.map((p) => <PartnerLogo key={p.name} {...p} />)}
          </div>
        </div>

        <div className="mb-12 md:mb-14">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-8">{t("sponsors.gold")}</p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {goldSponsors.map((s) => <SponsorLogo key={s.name} {...s} size="md" />)}
          </div>
        </div>

        <div className="mb-12 md:mb-14">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-8">{t("sponsors.community")}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {communityPartners.map((s) => <SponsorLogo key={s.name} {...s} size="sm" />)}
          </div>
        </div>

        <div className="border-t border-border pt-6 md:pt-8">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground md:text-sm">{t("sponsors.organizer")}</p>
          <div className="flex items-center justify-center">
            <a href="https://www.deepproject.hr" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
              <img src={deepProjectLogo} alt="DeeP Project" className="object-contain" style={{ height: "8.25rem" }} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SponsorsSection;
