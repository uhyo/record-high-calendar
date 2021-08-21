import { Temporal } from "@js-temporal/polyfill";
import { getDayCharacteristics } from "./getDayCharacteristics";

describe("getDayCharacteristics", () => {
  it("2021-08-19", () => {
    expect(
      getDayCharacteristics(Temporal.PlainDate.from("2021-08-19"))
    ).toEqual({
      month: 8,
      rokuyou: "赤口",
      weekDay: 4,
      year: 2021,
    });
  });
  it("2021-01-01", () => {
    expect(
      getDayCharacteristics(Temporal.PlainDate.from("2021-01-01"))
    ).toEqual({
      month: 1,
      rokuyou: "仏滅",
      weekDay: 5,
      year: 2021,
    });
  });
  it("2042-04-28", () => {
    expect(
      getDayCharacteristics(Temporal.PlainDate.from("2042-04-28"))
    ).toEqual({
      month: 4,
      weekDay: 1,
      year: 2042,
    });
  });
});
