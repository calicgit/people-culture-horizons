import { Users, Brain, TrendingUp, Shield, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TopicCard = ({ topic, t }: { topic: { icon: any; titleKey: string; subtitleKey: string; descKey: string; color: string }; t: (key: string) => string }) => {
  const title = t(topic.titleKey);
  const subtitle = t(topic.subtitleKey);
  const description = t(topic.descKey);

  return (
    <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-elevated transition-all duration-500 overflow-hidden text-center">
      <div className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300 mx-auto">
          <topic.icon className="w-7 h-7 text-accent" />
        </div>
        <h3 className="mb-1 min-h-[1.75rem] text-xl font-bold text-card-foreground font-display">{title || "\u00A0"}</h3>
        {subtitle && <p className="mb-3 text-sm text-accent font-medium">{subtitle}</p>}
        <p className="min-h-[4.5rem] text-muted-foreground leading-relaxed font-light">{description || "\u00A0"}</p>
      </div>
    </div>
  );
};

const TopicsSection = () => {
  const { t } = useLanguage();

  const topics = [
    { icon: Shield, titleKey: "topics.foundations.title", subtitleKey: "topics.foundations.subtitle", descKey: "topics.foundations.desc", color: "from-accent/20 to-accent/5" },
    { icon: TrendingUp, titleKey: "topics.functioning.title", subtitleKey: "topics.functioning.subtitle", descKey: "topics.functioning.desc", color: "from-accent/15 to-accent/5" },
    { icon: Users, titleKey: "topics.results.title", subtitleKey: "topics.results.subtitle", descKey: "topics.results.desc", color: "from-accent/20 to-accent/5" },
    { icon: Brain, titleKey: "topics.people.title", subtitleKey: "topics.people.subtitle", descKey: "topics.people.desc", color: "from-accent/15 to-accent/5" },
    { icon: Globe, titleKey: "topics.future.title", subtitleKey: "topics.future.subtitle", descKey: "topics.future.desc", color: "from-accent/20 to-accent/5" },
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
          {topics.slice(0, 3).map((topic) => (
            <TopicCard key={topic.titleKey} topic={topic} t={t} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
          {topics.slice(3).map((topic) => (
            <TopicCard key={topic.titleKey} topic={topic} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
