import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import josipFunda from "@/assets/speaker-josip-funda.jpg";

const KeynoteSection = () => {
  const { t } = useLanguage();
  const [bioOpen, setBioOpen] = useState(false);
  const title = t("keynote.title");
  const paragraphOne = t("keynote.p1");
  const paragraphTwo = t("keynote.p2");

  return (
    <section className="relative overflow-hidden bg-conference-blue py-20 md:py-24">
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
            <div
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-expanded={bioOpen}
              onClick={() => setBioOpen(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setBioOpen(true);
                }
              }}
              className="flex items-center gap-5 mb-10 cursor-pointer rounded-xl outline-none transition-opacity duration-200 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <div className="h-16 w-16 rounded-full overflow-hidden border border-primary-foreground/15 bg-primary-foreground/5 flex-shrink-0">
                <img src={josipFunda} alt={t("keynote.speakerAlt")} className="w-full h-full object-cover" style={{ objectPosition: "center 20%" }} loading="lazy" decoding="async" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold text-lg leading-tight">{t("keynote.speakerName")}</p>
                <p className="text-primary-foreground/60 text-sm mt-0.5 leading-tight">{t("keynote.speakerTitle")}</p>
              </div>
            </div>
            <a href="#pricing">
              <Button variant="hero" size="lg" className="text-base px-10 py-6 rounded-full">{t("keynote.cta")}</Button>
            </a>
          </div>
        </div>
      </div>

      {/* Speaker bio dialog */}
      <Dialog open={bioOpen} onOpenChange={setBioOpen}>
        <DialogContent className="sm:max-w-lg p-0 max-h-[85vh] overflow-y-auto">
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-5 mb-6">
              <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden bg-muted ring-2 ring-accent/30">
                <img
                  src={josipFunda}
                  alt={t("keynote.speakerAlt")}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground font-display">{t("keynote.speakerName")}</h3>
                <p className="mt-1 text-sm text-muted-foreground font-light">{t("keynote.speakerTitle")}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-light whitespace-pre-line">
              {t("keynote.bio")}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default KeynoteSection;
