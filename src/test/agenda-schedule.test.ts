import { describe, expect, it } from "vitest";
import { agendaData, masterclassData } from "@/components/AgendaSection";

describe("November 27, 2026 schedule", () => {
  it.each([
    ["s1", "08:00", "09:00"],
    ["s3", "09:00", "09:45"],
    ["s2", "09:50", "10:20"],
    ["tbd", "10:25", "10:45"],
    ["s4", "10:45", "11:05"],
    ["s5", "11:05", "11:25"],
    ["s6", "11:30", "12:15"],
    ["s7", "12:15", "12:35"],
    ["s8", "12:35", "13:20"],
    ["s9", "13:25", "13:40"],
    ["s10", "13:40", "15:00"],
  ])("runs %s from %s to %s", (id, time, endTime) => {
    expect(agendaData.day2.find(s => s.titleKey === `agenda.d2.${id}.title`))
      .toMatchObject({ time, endTime });
  });

  it("keeps TBD a standard talk without a speaker", () => {
    const session = agendaData.day2.find(s => s.titleKey === "agenda.d2.tbd.title");
    expect(session?.type).toBe("talk");
    expect(session?.speaker).toBeUndefined();
    expect(session?.panelists).toBeUndefined();
    expect(session?.moderator).toBeUndefined();
  });

  it.each(["earth", "air", "fire"])("runs the %s masterclass immediately after coffee", room => {
    const session = masterclassData.day2.find(s => s.locationKey === `agenda.loc.${room}`);
    expect(session).toMatchObject({ time: "11:05", endTime: "12:15" });
    expect(agendaData.day2.find(s => s.titleKey === "agenda.d2.s4.title")?.endTime).toBe(session?.time);
  });
});