import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Lock } from "lucide-react";
import RegistrationDialog from "@/components/RegistrationDialog";
import { useLanguage } from "@/contexts/LanguageContext";

const PricingSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<{ name: string; price: string } | null>(null);
  const { t } = useLanguage();

  const tiers = [
    {
      name: "Blind bird",
      periodKey: "pricing.blindBird.period",
      price: "€249,00",
      featureKeys: ["pricing.common.f1", "pricing.common.f2", "pricing.common.f3", "pricing.common.f4"],
      featured: true,
      registrationOpen: true,
    },
    {
      name: "Early bird",
      periodKey: "pricing.earlyBird.period",
      price: "€349,00",
      featureKeys: ["pricing.common.f1", "pricing.common.f2", "pricing.common.f3", "pricing.common.f4"],
      featured: false,
      registrationOpen: false,
    },
    {
      name: "Regular",
      periodKey: "pricing.regular.period",
      price: "€499,00",
      featureKeys: ["pricing.common.f1", "pricing.common.f2", "pricing.common.f3", "pricing.common.f4"],
      featured: false,
      registrationOpen: false,
    },
  ];

  const openRegistration = (name: string, price: string) => {
    setSelectedTier({ name, price });
    setDialogOpen(true);
  };

  return (
    <section id="pricing" className="bg-section-alt py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-14 text-center md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-4 mb-5">{t("pricing.title")}</h2>
          <div className="section-divider mb-6" />
          <div className="text-lg max-w-3xl mx-auto whitespace-pre-line text-muted-foreground font-light space-y-2">
            <p>{t("pricing.subtitle")}</p>
            <p className="font-semibold text-foreground">{t("pricing.vatNote")}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                tier.featured
                  ? "bg-hero text-primary-foreground shadow-elevated scale-[1.03] ring-2 ring-accent"
                  : "bg-card shadow-card border border-border"
              }`}
            >
              <h3 className={`text-2xl font-bold font-display mb-2 ${tier.featured ? "text-accent" : "text-foreground"}`}>
                {tier.name}
              </h3>
              <p className={`text-sm mb-6 font-medium ${tier.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {t(tier.periodKey)}
              </p>
              <div className="mb-8">
                <span className={`text-4xl font-bold font-display ${tier.featured ? "text-primary-foreground" : "text-foreground"}`}>
                  {tier.price}
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.featureKeys.map((fk) => (
                  <li key={`${tier.name}-${fk}`} className={`flex items-start gap-2.5 text-sm font-light ${tier.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                    {t(fk)}
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.featured ? "hero" : "outline"}
                size="lg"
                className="w-full text-base py-6 rounded-full"
                onClick={() => openRegistration(tier.name, tier.price)}
                disabled={!tier.registrationOpen}
              >
                {tier.registrationOpen ? (
                  t("pricing.apply")
                ) : (
                  <span className="inline-flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    {t("pricing.comingSoon")}
                  </span>
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {selectedTier && (
        <RegistrationDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          tierName={selectedTier.name}
          tierPrice={selectedTier.price}
        />
      )}
    </section>
  );
};

export default PricingSection;
