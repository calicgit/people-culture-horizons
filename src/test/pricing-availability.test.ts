import { describe, expect, it } from "vitest";
import { pricingTiers } from "@/components/PricingSection";

describe("pricing availability", () => {
  it("locks and grays the Regular tier at €349,00", () => {
    const regular = pricingTiers.find((tier) => tier.name === "Regular");

    expect(regular).toMatchObject({
      price: "€349,00",
      registrationOpen: false,
      expired: true,
    });
  });

  it("opens the Last minute tier at €499,00 as the only active tier", () => {
    const lastMinute = pricingTiers.find((tier) => tier.name === "Last minute");

    expect(lastMinute).toMatchObject({
      price: "€499,00",
      registrationOpen: true,
      expired: false,
    });
    expect(pricingTiers.filter((tier) => tier.registrationOpen)).toHaveLength(1);
  });
});
