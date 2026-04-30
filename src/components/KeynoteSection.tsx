import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const KeynoteSection = () => {
  const { t } = useLanguage();
  const title = t("keynote.title");
  const paragraphOne = t("keynote.p1");
  const paragraphTwo = t("keynote.p2");

  return (
    <section className="relative overflow-hidden bg-hero py-20 md:py-24">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full border border-primary-foreground/20" />
        <div className="absolute bottom-1/4 -left-16 w-64 h-64 rounded-full border border-primary-foreground/10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div>
            <span className="text-accent font-semibold text-xs uppercase tracking-[0.25em]">{t("keynote.label")}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-4 mb-8 leading-tight">
              {title || "\u00A0"}
            </h2>
            <p className="text-primary-foreground/60 text-lg leading-relaxed mb-4 font-light min-h-[5.5rem]">{paragraphOne || "\u00A0"}</p>
            <p className="text-primary-foreground/40 text-base mb-10 font-light min-h-[4rem]">{paragraphTwo || "\u00A0"}</p>
            <div className="flex items-center gap-5 mb-10">
              <div className="h-16 w-16 rounded-full border border-primary-foreground/15 bg-primary-foreground/5" />
              <div>
                <p className="text-primary-foreground font-semibold text-lg leading-tight">{t("keynote.speakerName")}</p>
                <p className="text-primary-foreground/60 text-sm mt-0.5 leading-tight">{t("keynote.speakerTitle")}</p>
              </div>
            </div>
            <a href="#pricing">
              <Button variant="hero" size="lg" className="text-base px-10 py-6 rounded-full">{t("keynote.cta")}</Button>
            </a>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeynoteSection;
