import { useState } from "react";
import { User } from "lucide-react";
import { Clock, MapPin, Mic2, Coffee, Utensils, ChevronDown, Presentation, Users, Wrench, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type SessionType = "keynote" | "talk" | "panel" | "workshop" | "break" | "networking";

interface Session {
  time: string;
  endTime: string;
  titleKey?: string;
  speaker?: string;
  locationKey?: string;
  type: SessionType;
  trackKey?: string;
  descKey?: string;
  keynoteKind?: "talk" | "panel";
}

const agendaData: Record<string, Session[]> = {
  day1: [
    { time: "08:00", endTime: "09:00", titleKey: "agenda.d1.s1.title", type: "break" },
    { time: "09:00", endTime: "09:10", titleKey: "agenda.d1.s2.title", type: "talk", descKey: "agenda.d1.s2.desc", locationKey: "agenda.loc.main" },
    { time: "09:15", endTime: "09:45", titleKey: "agenda.d1.s3.title", speaker: "Josip Funda - Senior Economist, World Bank Group", type: "keynote", keynoteKind: "talk", locationKey: "agenda.loc.main" },
    { time: "09:50", endTime: "10:35", titleKey: "agenda.d1.s4.title", type: "keynote", keynoteKind: "panel", locationKey: "agenda.loc.main" },
    { time: "10:35", endTime: "10:55", titleKey: "agenda.d1.s5.title", type: "break" },
    { time: "10:55", endTime: "11:15", titleKey: "agenda.d1.s6.title", type: "talk", locationKey: "agenda.loc.main" },
    { time: "11:20", endTime: "12:05", titleKey: "agenda.d1.s7.title", type: "panel", locationKey: "agenda.loc.main" },
    { time: "12:05", endTime: "13:35", titleKey: "agenda.d1.s8.title", type: "networking" },
    { time: "13:35", endTime: "13:55", titleKey: "agenda.d1.s9.title", speaker: "Stefan Vukajlović - Group HR Director for Compensation and Benefits, Fortenova Group", type: "talk", locationKey: "agenda.loc.main" },
    { time: "14:00", endTime: "14:45", titleKey: "agenda.d1.s10.title", type: "panel", locationKey: "agenda.loc.main" },
    { time: "14:45", endTime: "15:05", titleKey: "agenda.d1.s11.title", type: "break" },
    { time: "15:05", endTime: "15:25", titleKey: "agenda.d1.s12.title", speaker: "Suzana Plečko - Human Resources Director, Franck", type: "talk", locationKey: "agenda.loc.main" },
    { time: "15:30", endTime: "16:15", titleKey: "agenda.d1.s13.title", type: "panel", locationKey: "agenda.loc.main" },
  ],
  day2: [
    { time: "08:00", endTime: "09:00", titleKey: "agenda.d2.s1.title", type: "break" },
    { time: "09:00", endTime: "09:30", titleKey: "agenda.d2.s2.title", type: "keynote", keynoteKind: "talk", locationKey: "agenda.loc.main" },
    { time: "09:35", endTime: "10:20", titleKey: "agenda.d2.s3.title", type: "keynote", keynoteKind: "panel", locationKey: "agenda.loc.main" },
    { time: "10:20", endTime: "10:40", titleKey: "agenda.d2.s4.title", type: "break" },
    { time: "10:45", endTime: "11:05", titleKey: "agenda.d2.s5.title", speaker: "Sanja Škrinjar - Human Resources Consultant, DeeP Project", type: "talk", locationKey: "agenda.loc.main" },
    { time: "11:10", endTime: "11:55", titleKey: "agenda.d2.s6.title", type: "panel", locationKey: "agenda.loc.main" },
    { time: "11:55", endTime: "12:15", titleKey: "agenda.d2.s7.title", type: "break" },
    { time: "12:15", endTime: "13:00", titleKey: "agenda.d2.s8.title", type: "panel", locationKey: "agenda.loc.main" },
    { time: "13:05", endTime: "13:20", titleKey: "agenda.d2.s9.title", type: "talk", locationKey: "agenda.loc.main" },
    { time: "13:20", endTime: "15:00", titleKey: "agenda.d2.s10.title", type: "networking", descKey: "agenda.d2.s10.desc" },
  ],
};

const typeStyles: Record<SessionType, { dot: string; border: string }> = {
  keynote: { dot: "bg-accent", border: "border-l-accent" },
  talk: { dot: "bg-primary", border: "border-l-primary" },
  panel: { dot: "bg-foreground/60", border: "border-l-foreground/40" },
  workshop: { dot: "bg-chart-4", border: "border-l-chart-4" },
  break: { dot: "bg-muted-foreground/30", border: "border-l-muted-foreground/20" },
  networking: { dot: "bg-chart-2", border: "border-l-chart-2" },
};

const TypeIcon = ({ type }: { type: SessionType }) => {
  switch (type) {
    case "keynote": return <Mic2 className="w-4 h-4" />;
    case "talk": return <Presentation className="w-4 h-4" />;
    case "panel": return <Users className="w-4 h-4" />;
    case "workshop": return <Wrench className="w-4 h-4" />;
    case "break": return <Coffee className="w-4 h-4" />;
    case "networking": return <Utensils className="w-4 h-4" />;
    default: return null;
  }
};

const AgendaSection = () => {
  const { t } = useLanguage();
  const dayKeys = ["day1", "day2"];
  const dayLabels = [t("agenda.day1"), t("agenda.day2")];
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const typeLabels: Record<SessionType, string> = {
    keynote: t("agenda.type.keynote"),
    talk: t("agenda.type.talk"),
    panel: t("agenda.type.panel"),
    workshop: t("agenda.type.workshop"),
    break: t("agenda.type.break"),
    networking: t("agenda.type.networking"),
  };

  const toggleItem = (key: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) { next.delete(key); } else { next.add(key); }
      return next;
    });
  };

  const sessions = agendaData[dayKeys[activeDayIdx]];

  return (
    <section id="agenda" className="bg-background py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-4 text-center md:mb-6">
          <span className="text-accent font-semibold text-xs uppercase tracking-[0.25em]">{t("agenda.label")}</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-4 mb-5 font-display">{t("agenda.title")}</h2>
          <div className="section-divider mb-4" />
        </div>

        <p className="mb-6 text-center text-xs md:text-sm italic text-muted-foreground">{t("agenda.disclaimer")}</p>

        <div className="mb-12 flex justify-center gap-3 md:mb-14">
          {dayLabels.map((label, idx) => (
            <button
              key={idx}
              onClick={() => setActiveDayIdx(idx)}
              className={`px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeDayIdx === idx
                  ? "bg-accent text-accent-foreground shadow-lg"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {sessions.map((session, i) => {
            const style = typeStyles[session.type];
            const isBreak = session.type === "break" || session.type === "networking";
            const itemKey = `${dayKeys[activeDayIdx]}-${session.time}-${i}`;
            const isExpanded = expandedItems.has(itemKey);
            const hasDescription = !!session.descKey;
            const isPlaceholder = !session.titleKey && !session.speaker && !session.locationKey && !session.trackKey && !session.descKey;
            const title = session.titleKey ? t(session.titleKey) : "";
            const timeRange = session.time && session.endTime ? `${session.time} – ${session.endTime}` : "";

            return (
              <div
                key={itemKey}
                className={`relative rounded-xl border bg-card transition-all duration-300 hover:shadow-card ${hasDescription ? "cursor-pointer" : ""} ${
                  session.type === "keynote"
                    ? "border-accent/30 border-l-[6px] border-l-accent bg-gradient-to-r from-accent/5 to-transparent shadow-sm"
                    : `border-border border-l-4 ${style.border}`
                }`}
                onClick={() => hasDescription && toggleItem(itemKey)}
              >
                {session.type === "keynote" && (
                  <div className="absolute -top-2.5 right-4 flex items-center gap-1 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground shadow-sm">
                    <Star className="w-3 h-3 fill-current" />
                    Keynote
                  </div>
                )}
                <div className="flex gap-4 p-5">
                  {session.speaker && (
                    <div className="flex-shrink-0 self-center">
                      <div className="w-12 h-12 rounded-full bg-muted border-2 border-border flex items-center justify-center overflow-hidden">
                        <User className="w-6 h-6 text-muted-foreground/50" />
                      </div>
                    </div>
                  )}
                  <div className="flex-shrink-0 pt-0.5">
                    <div className="flex items-center gap-1.5 text-muted-foreground whitespace-nowrap">
                      <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="text-sm font-medium">{timeRange || "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className={`font-semibold ${isBreak ? "text-muted-foreground" : "text-foreground"}`}>
                          {title ? (() => {
                            const m = title.match(/^(.*?)(\s*Powered by .+)$/i);
                            return m ? (<>{m[1]}<em className="font-normal italic text-muted-foreground">{m[2]}</em></>) : title;
                          })() : "\u00A0"}
                        </h3>
                        {session.speaker && (
                          <p className="text-muted-foreground text-sm mt-0.5 font-light">{session.speaker}</p>
                        )}
                        <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                          {session.locationKey && (
                            <span className="flex items-center gap-1 text-xs text-muted-foreground/70">
                              <MapPin className="w-3 h-3" /> {t(session.locationKey)}
                            </span>
                          )}
                          {session.trackKey && (
                            <span className="text-xs px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
                              {t(session.trackKey)}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
                        {!isPlaceholder && (() => {
                          const displayType: SessionType =
                            session.type === "keynote" && session.keynoteKind
                              ? session.keynoteKind
                              : session.type;
                          return (
                            <span className="flex items-center gap-1 text-xs text-muted-foreground/60">
                              <TypeIcon type={displayType} />
                              {typeLabels[displayType]}
                            </span>
                          );
                        })()}
                        {hasDescription && (
                          <ChevronDown
                            className={`w-4 h-4 text-muted-foreground/50 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {hasDescription && (
                  <div className={`grid transition-all duration-300 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pl-[6.5rem]">
                        <p className="text-sm text-muted-foreground leading-relaxed font-light whitespace-pre-line">{t(session.descKey!)}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
