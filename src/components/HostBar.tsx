import { User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HostBar = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border-y border-accent/20">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-center gap-3 text-center">
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-accent">
            <User className="w-5 h-5" />
          </div>
          <div className="flex flex-wrap items-baseline justify-center gap-x-2 leading-tight">
            <span className="text-xs uppercase tracking-wider font-semibold text-accent">{t("hero.host.label")}</span>
            <span className="text-sm md:text-base font-bold text-foreground font-display">{t("speakers.host.name")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostBar;
