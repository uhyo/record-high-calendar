import { Temporal } from "@js-temporal/polyfill";
import { getDayCharacteristics } from "./getDayCharacteristics";

describe("getDayCharacteristics", () => {
  it("2021-08-19", () => {
    expect(
      getDayCharacteristics(Temporal.PlainDate.from("2021-08-19"))
    ).toEqual({
      month: "month:8",
      rokuyou: "rokuyou:赤口",
      weekDay: "weekday:thursday",
      year: "year:2021",
    });
  });
  it("2021-01-01", () => {
    expect(
      getDayCharacteristics(Temporal.PlainDate.from("2021-01-01"))
    ).toEqual({
      month: "month:1",
      rokuyou: "rokuyou:仏滅",
      weekDay: "weekday:friday",
      year: "year:2021",
    });
  });
  it("2042-04-28", () => {
    expect(
      getDayCharacteristics(Temporal.PlainDate.from("2042-04-28"))
    ).toEqual({
      month: "month:4",
      weekDay: "weekday:monday",
      year: "year:2042",
    });
  });
});
