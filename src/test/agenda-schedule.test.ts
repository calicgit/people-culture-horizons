import { describe, expect, it } from "vitest";
import { agendaData, masterclassData } from "@/components/AgendaSection";

describe("November 26, 2026 schedule", () => {
  it.each([
    ["s1", "08:00", "09:00"],
    ["s2", "09:00", "09:10"],
    ["s3", "09:15", "09:45"],
    ["s4", "09:50", "10:35"],
    ["tbd", "10:40", "11:00"],
    ["s5", "11:00", "11:20"],
    ["s6", "11:20", "11:40"],
    ["s7", "11:45", "12:30"],
    ["s8", "12:30", "14:00"],
    ["s9", "14:00", "14:20"],
    ["s10", "14:25", "15:10"],
    ["s11", "15:10", "15:30"],
    ["s12", "15:30", "15:50"],
    ["s13", "15:55", "16:40"],
  ])("runs %s from %s to %s", (id, time, endTime) => {
    expect(agendaData.day1.find(s => s.titleKey === `agenda.d1.${id}.title`))
      .toMatchObject({ time, endTime });
  });

  it("keeps TBD a standard talk without a speaker or keynote label", () => {
    const session = agendaData.day1.find(s => s.titleKey === "agenda.d1.tbd.title");
    expect(session?.type).toBe("talk");
    expect(session?.speaker).toBeUndefined();
    expect(session?.panelists).toBeUndefined();
    expect(session?.moderator).toBeUndefined();
    expect(session?.keynoteKind).toBeUndefined();
  });

  it("keeps the main sessions in chronological order without overlaps", () => {
    agendaData.day1.forEach((session, i, sessions) => {
      expect(session.time < session.endTime).toBe(true);
      const previous = sessions[i - 1];
      if (previous) expect(previous.endTime <= session.time).toBe(true);
    });
  });

  it.each(["earth", "air", "fire"])("runs the %s masterclass immediately after coffee", room => {
    const session = masterclassData.day1.find(s => s.locationKey === `agenda.loc.${room}`);
    expect(session).toMatchObject({ time: "11:20", endTime: "12:30" });
    expect(agendaData.day1.find(s => s.titleKey === "agenda.d1.s5.title")?.endTime).toBe(session?.time);
  });
});

describe("November 27, 2026 schedule", () => {
  it.each([
    ["s1", "08:00", "09:00"],
    ["s3", "09:00", "09:45"],
    ["s2", "09:50", "10:20"],
    ["akd", "10:25", "10:45"],
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

  it("assigns the 10:25 talk to Leo Lokas from AKD", () => {
    const session = agendaData.day2.find(s => s.titleKey === "agenda.d2.akd.title");
    expect(session?.type).toBe("talk");
    expect(session?.speaker).toBe("Leo Lokas - Business Development Director, AKD");
    expect(session?.panelists).toBeUndefined();
    expect(session?.moderator).toBeUndefined();
  });

  it.each(["earth", "air", "fire"])("runs the %s masterclass immediately after coffee", room => {
    const session = masterclassData.day2.find(s => s.locationKey === `agenda.loc.${room}`);
    expect(session).toMatchObject({ time: "11:05", endTime: "12:15" });
    expect(agendaData.day2.find(s => s.titleKey === "agenda.d2.s4.title")?.endTime).toBe(session?.time);
  });
});