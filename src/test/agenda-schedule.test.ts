import { describe, expect, it } from "vitest";
import { agendaData, masterclassData } from "@/components/AgendaSection";

describe("November 26, 2026 schedule", () => {
  it.each([
    ["s1", "08:00", "09:00"],
    ["s2", "09:00", "09:20"],
    ["s3", "09:20", "09:50"],
    ["s4", "09:50", "10:30"],
    ["tbd", "10:30", "10:50"],
    ["s5", "10:50", "11:10"],
    ["s6", "11:10", "11:30"],
    ["s7", "11:30", "12:15"],
    ["s8", "12:15", "13:45"],
    ["s10", "13:45", "14:30"],
    ["s11", "14:30", "14:50"],
    ["s12", "14:50", "15:10"],
    ["s13", "15:10", "15:55"],
  ])("runs %s from %s to %s", (id, time, endTime) => {
    expect(agendaData.day1.find(s => s.titleKey === `agenda.d1.${id}.title`))
      .toMatchObject({ time, endTime });
  });

  it("places Gordana Kuterovac Jagodić's talk in the 09:00 day-one slot", () => {
    const session = agendaData.day1.find(s => s.titleKey === "agenda.d1.s2.title");
    expect(session).toMatchObject({
      time: "09:00",
      endTime: "09:20",
      type: "talk",
      speakerKey: "agenda.d1.s2.speaker",
      descKey: "agenda.d1.s2.desc",
    });
  });

  it("gives the 10:30 talk its title, speaker and description", () => {
    const session = agendaData.day1.find(s => s.titleKey === "agenda.d1.tbd.title");
    expect(session?.type).toBe("talk");
    expect(session?.speaker).toBe("Dario Car - Co-founder & Organizational Development Expert, DeeP Project");
    expect(session?.descKey).toBe("agenda.d1.tbd.desc");
    expect(session?.panelists).toBeUndefined();
    expect(session?.moderator).toBeUndefined();
    expect(session?.keynoteKind).toBeUndefined();
  });

  it("shortens the GrECo panel to 40 minutes", () => {
    const session = agendaData.day1.find(s => s.titleKey === "agenda.d1.s4.title");
    expect(session).toMatchObject({ time: "09:50", endTime: "10:30" });
  });

  it("assigns Iva Repač as moderator of the d1.s13 panel", () => {
    const session = agendaData.day1.find(s => s.titleKey === "agenda.d1.s13.title");
    expect(session?.moderator).toBe("Iva Repač - Brand & Communications Director, SPAN");
    expect(session?.moderatorLabel).toBe("moderatorica");
    expect(session?.panelists).toContain("Erna Tomiša - Organizational Development and Consulting Team Lead, SELECTIO");
  });

  it("adds Drago Cmuk to the d1.s7 panel", () => {
    const session = agendaData.day1.find(s => s.titleKey === "agenda.d1.s7.title");
    expect(session?.panelists).toContain("Drago Cmuk - Founder & Partner, Forvis Mazars");
  });

  it("replaces Maja Bušljeta with Emira Duratbegović as the d1.s7 moderator", () => {
    const session = agendaData.day1.find(s => s.titleKey === "agenda.d1.s7.title");
    expect(session?.moderator).toBe("Emira Duratbegović - Strategic Leadership & Organizational Effectiveness Advisor");
    expect(session?.moderatorLabel).toBe("moderatorica");
    expect(session?.moderator).not.toContain("Maja Bušljeta");
  });

  it("keeps the main sessions in chronological order without gaps or overlaps", () => {
    agendaData.day1.forEach((session, i, sessions) => {
      expect(session.time < session.endTime).toBe(true);
      const previous = sessions[i - 1];
      if (previous) expect(session.time).toBe(previous.endTime);
    });
  });

  it("removes the day-one behavioural debt masterclass while retaining the other two rooms", () => {
    expect(masterclassData.day1.some(s => s.titleKey === "agenda.d1.mc3.title")).toBe(false);
    expect(masterclassData.day1.map(s => s.locationKey)).toEqual(["agenda.loc.earth", "agenda.loc.air"]);
  });

  it.each(["earth", "air"])("runs the %s masterclass immediately after coffee", room => {
    const session = masterclassData.day1.find(s => s.locationKey === `agenda.loc.${room}`);
    expect(session).toMatchObject({ time: "11:10", endTime: "12:20" });
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

  it("restores the GrECo fireside chat in the 09:50 day-two slot", () => {
    const session = agendaData.day2.find(s => s.titleKey === "agenda.d2.s2.title");
    expect(session).toMatchObject({
      time: "09:50",
      endTime: "10:20",
      type: "fireside",
      descKey: "agenda.d2.s2.desc",
    });
    expect(session?.speaker).toBe("Ewelina Jaworska-Bień - Head of People Solutions, GrECo Specialty GmbH SEE/CEE");
    expect(session?.speakerKey).toBeUndefined();
    expect(session?.panelists).toBeUndefined();
    expect(session?.moderator).toBeUndefined();
  });

  it("assigns the 10:25 talk to Leo Lokas from Certilia", () => {
    const session = agendaData.day2.find(s => s.titleKey === "agenda.d2.akd.title");
    expect(session?.type).toBe("talk");
    expect(session?.speaker).toBe("Leo Lokas - Business Development Director, Certilia");
    expect(session?.panelists).toBeUndefined();
    expect(session?.moderator).toBeUndefined();
  });

  it("removes the day-two AI mirror masterclass while retaining the other two rooms", () => {
    expect(masterclassData.day2.some(s => s.titleKey === "agenda.d2.mc3.title")).toBe(false);
    expect(masterclassData.day2.map(s => s.locationKey)).toEqual(["agenda.loc.earth", "agenda.loc.air"]);
  });

  it.each(["earth", "air"])("runs the %s masterclass immediately after coffee", room => {
    const session = masterclassData.day2.find(s => s.locationKey === `agenda.loc.${room}`);
    expect(session).toMatchObject({ time: "11:05", endTime: "12:15" });
    expect(agendaData.day2.find(s => s.titleKey === "agenda.d2.s4.title")?.endTime).toBe(session?.time);
  });
});