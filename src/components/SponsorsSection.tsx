import { useLanguage } from "@/contexts/LanguageContext";
import deepProjectLogo from "@/assets/deep-project-logo.png";
import partnerGreco from "@/assets/partner-greco.png";
import partnerJenz from "@/assets/partner-jenz.png";
import partnerCognipulse from "@/assets/partner-cognipulse.png";
import sponsorAtlantic from "@/assets/sponsor-atlantic.png";
import patronMrms from "@/assets/patron-mrms.png";
import patronHpk from "@/assets/patron-hpk.png";
import patronPchub from "@/assets/patron-pchub.svg";

type LogoEntry = { name: string; logo: string; scale?: number; url: string };

const platinumPartners: LogoEntry[] = [
  { name: "Greco", logo: partnerGreco, scale: 1, url: "https://greco.services/greco-specijalisti-u-osiguranju-i-upravljanju-rizicima/" },
  { name: "Jenz", logo: partnerJenz, scale: 1.45, url: "https://jenz.app/" },
  { name: "CogniPulse", logo: partnerCognipulse, scale: 1.8, url: "https://cognipulse.io/" },
];

const patrons: LogoEntry[] = [
  { name: "Ministarstvo rada, mirovinskoga sustava, obitelji i socijalne politike", logo: patronMrms, scale: 1, url: "https://mrosp.gov.hr/" },
  { name: "Hrvatska psihološka komora", logo: patronHpk, scale: 1, url: "https://www.psiholoska-komora.hr/" },
  { name: "People & Culture HUB", logo: patronPchub, scale: 1.3, url: "https://hub.peopleandculture.hr/" },
];

const sponsors: LogoEntry[] = [
  { name: "Atlantic Grupa", logo: sponsorAtlantic, scale: 1.65, url: "https://www.atlanticgrupa.com/hr/" },
];

const PartnerLogo = ({ name, logo, scale = 1, url, size = "lg" }: LogoEntry & { size?: "lg" | "md" | "sm" }) => {
  const sizeClasses = {
    lg: "h-28 w-48 md:h-32 md:w-56",
    md: "h-24 w-40 md:h-28 md:w-48",
    sm: "h-20 w-32 md:h-24 md:w-40",
  };
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`flex ${sizeClasses[size]} items-center justify-center p-4 hover:opacity-80 transition-opacity`} title={name}>
      <img src={logo} alt={name} className="max-h-full max-w-full object-contain" style={{ transform: `scale(${scale})` }} />
    </a>
  );
};

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
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-8">{t("sponsors.platinum")}</p>
          <div className="flex flex-wrap items-center justify-center">
            {platinumPartners.map((p) => (
              <div key={p.name} className="w-1/2 flex justify-center md:w-auto">
                <PartnerLogo {...p} size="lg" />
              </div>
            ))}
          </div>
        </div>

        {sponsors.length > 0 && (
          <div className="mb-12 md:mb-14">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-8">{t("sponsors.community")}</p>
            <div className="flex flex-wrap items-center justify-center">
              {sponsors.map((s) => <div key={s.name} className="w-1/2 flex justify-center md:w-auto"><PartnerLogo {...s} size="md" /></div>)}
            </div>
          </div>
        )}

        {patrons.length > 0 && (
          <div className="mb-12 md:mb-14">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-8">{t("sponsors.gold")}</p>
            <div className="flex flex-wrap items-center justify-center">
              {patrons.map((p) => <div key={p.name} className="w-1/2 flex justify-center md:w-auto"><PartnerLogo {...p} size="md" /></div>)}
            </div>
          </div>
        )}

        <div className="border-t border-border pt-6 md:pt-8">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground md:text-sm">{t("sponsors.organizer")}</p>
          <div className="flex items-center justify-center">
            <a href="https://deepproject.hr/" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
              <img src={deepProjectLogo} alt="DeeP Project" className="object-contain" style={{ height: "8.25rem" }} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SponsorsSection;

