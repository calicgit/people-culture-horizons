import { Users, Brain, TrendingUp, Shield, Lightbulb, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TopicsSection = () => {
  const { t } = useLanguage();

  const topics = [
    { icon: Users, titleKey: "topics.talent.title", descKey: "topics.talent.desc", color: "from-accent/20 to-accent/5" },
    { icon: Brain, titleKey: "topics.experience.title", descKey: "topics.experience.desc", color: "from-accent/15 to-accent/5" },
    { icon: TrendingUp, titleKey: "topics.performance.title", descKey: "topics.performance.desc", color: "from-accent/20 to-accent/5" },
    { icon: Shield, titleKey: "topics.compliance.title", descKey: "topics.compliance.desc", color: "from-accent/15 to-accent/5" },
    { icon: Lightbulb, titleKey: "topics.leadership.title", descKey: "topics.leadership.desc", color: "from-accent/20 to-accent/5" },
    { icon: Globe, titleKey: "topics.global.title", descKey: "topics.global.desc", color: "from-accent/15 to-accent/5" },
  ];

  return (
    <section id="topics" className="bg-background py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-14 text-center md:mb-16">
          {t("topics.label") && (
            <span className="text-accent font-semibold text-xs uppercase tracking-[0.25em]">{t("topics.label")}</span>
          )}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-4 mb-5">{t("topics.title")}</h2>
          <div className="section-divider mb-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {topics.map((topic) => {
            const title = t(topic.titleKey);
            const description = t(topic.descKey);

            return (
              <div
                key={topic.titleKey}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-elevated transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                    <topic.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="mb-3 min-h-[1.75rem] text-xl font-bold text-card-foreground font-display">{title || "\u00A0"}</h3>
                  <p className="min-h-[4.5rem] text-muted-foreground leading-relaxed font-light">{description || "\u00A0"}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
