import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-cta py-20 md:py-24">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full border border-primary-foreground/20" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full border border-primary-foreground/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary-foreground/5" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-8 max-w-4xl mx-auto leading-tight font-display">
          {t("cta.title")}
        </h2>
        <p className="text-primary-foreground/50 text-lg max-w-xl mx-auto mb-12 font-light">{t("cta.subtitle")}</p>
        <div className="flex justify-center">
          <a href="#pricing">
            <Button variant="hero" size="lg" className="text-base px-12 py-6 rounded-full">{t("cta.buyNow")}</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
