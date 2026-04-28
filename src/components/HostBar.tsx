import { User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HostBar = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-accent text-accent-foreground shadow-md">
      <div className="container mx-auto px-6 py-3.5">
        <div className="flex items-center justify-center gap-3 text-center">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-foreground/15 flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
          <div className="flex flex-wrap items-baseline justify-center gap-x-2 leading-tight">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold opacity-90">{t("hero.host.label")}</span>
            <span className="text-base md:text-lg font-bold font-display">{t("speakers.host.name")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostBar;
