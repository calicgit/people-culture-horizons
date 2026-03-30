import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CONFERENCE_DATE = new Date("2026-11-26T09:00:00");

const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = targetDate.getTime() - Date.now();
    return {
      days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor(diff / (1000 * 60 * 60) % 24)),
      minutes: Math.max(0, Math.floor(diff / (1000 * 60) % 60)),
      seconds: Math.max(0, Math.floor(diff / 1000 % 60))
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) { clearInterval(timer); return; }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor(diff / (1000 * 60 * 60) % 24),
        minutes: Math.floor(diff / (1000 * 60) % 60),
        seconds: Math.floor(diff / 1000 % 60)
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};

const HeroSection = () => {
  const { days, hours, minutes, seconds } = useCountdown(CONFERENCE_DATE);
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src="/videos/hero.mp4"
        />
        <div className="absolute inset-0 bg-hero opacity-70" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-44 pb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <span className="text-primary-foreground/60">{t("hero.title1")}</span>{" "}
            <span className="text-gradient-accent">{t("hero.title2")}</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/60 max-w-2xl mb-9 leading-relaxed animate-fade-up font-light" style={{ animationDelay: "0.3s" }}>
            {t("hero.subtitle")}
          </p>

          <div
            className="mb-9 inline-flex rounded-[2rem] border border-primary-foreground/20 bg-background/10 px-4 py-3 shadow-elevated backdrop-blur-md animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {[
                { value: days, label: t("hero.days") },
                { value: hours, label: t("hero.hours") },
                { value: minutes, label: t("hero.minutes") },
                { value: seconds, label: t("hero.seconds") }
              ].map((unit) => (
                <div key={unit.label} className="min-w-[60px] text-center sm:min-w-[76px]">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-primary-foreground tabular-nums leading-none">
                    {String(unit.value).padStart(2, "0")}
                  </div>
                  <div className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-primary-foreground/60 sm:text-xs">
                    {unit.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-10 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <a href="#pricing">
              <Button variant="hero" size="lg" className="text-base px-8 py-5 rounded-full">
                {t("hero.buyTicket")}
              </Button>
            </a>
            <a href="#agenda">
              <Button variant="heroOutline" size="lg" className="text-base px-8 py-5 rounded-full">
                {t("hero.viewAgenda")}
              </Button>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-primary-foreground/80 text-base md:text-lg animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-2 font-semibold">
              <CalendarDays className="w-5 h-5 text-accent" />
              <span>{t("hero.date")}</span>
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <MapPin className="w-5 h-5 text-accent" />
              <span>{t("hero.location")}</span>
            </div>
          </div>
        </div>
      </div>

      <a href="#topics" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors animate-bounce">
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default HeroSection;
