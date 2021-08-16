import { Temporal } from "@js-temporal/polyfill";
import { getRokuyouOfDay } from "./index";

describe("getRokuyouOfDay", () => {
  describe("random tests", () => {
    it("2021-08-18 is 大安", () => {
      const rokuyou = getRokuyouOfDay(Temporal.PlainDate.from("2021-08-18"));
      expect(rokuyou).toBe("大安");
    });
    it("2021-07-05 is 赤口", () => {
      const rokuyou = getRokuyouOfDay(Temporal.PlainDate.from("2021-07-05"));
      expect(rokuyou).toBe("赤口");
    });
    it("2021-06-02 is 先勝", () => {
      const rokuyou = getRokuyouOfDay(Temporal.PlainDate.from("2021-06-02"));
      expect(rokuyou).toBe("先勝");
    });
    it("2020-11-26 is 先負", () => {
      const rokuyou = getRokuyouOfDay(Temporal.PlainDate.from("2020-11-26"));
      expect(rokuyou).toBe("先負");
    });
    it("2011-11-24 is 友引", () => {
      const rokuyou = getRokuyouOfDay(Temporal.PlainDate.from("2011-11-24"));
      expect(rokuyou).toBe("友引");
    });
    it("2021-08-17 is 仏滅", () => {
      const rokuyou = getRokuyouOfDay(Temporal.PlainDate.from("2021-08-17"));
      expect(rokuyou).toBe("仏滅");
    });
  });
  describe("edge cases", () => {
    it("2022-10-25 is 仏滅 (1st of old month)", () => {
      const rokuyou = getRokuyouOfDay(Temporal.PlainDate.from("2022-10-25"));
      expect(rokuyou).toBe("仏滅");
    });
    it("2016-09-30 is 先勝 (last day of old month)", () => {
      const rokuyou = getRokuyouOfDay(Temporal.PlainDate.from("2016-09-30"));
      expect(rokuyou).toBe("先勝");
    });
    it("2020-05-23 is 仏滅 (1st of 閏4月)", () => {
      const rokuyou = getRokuyouOfDay(Temporal.PlainDate.from("2020-05-23"));
      expect(rokuyou).toBe("仏滅");
    });
    it("2020-05-31 is 赤口 (9th of 閏4月)", () => {
      const rokuyou = getRokuyouOfDay(Temporal.PlainDate.from("2020-05-31"));
      expect(rokuyou).toBe("赤口");
    });
    it("2020-06-20 is 友引 (last day of 閏4月)", () => {
      const rokuyou = getRokuyouOfDay(Temporal.PlainDate.from("2020-06-20"));
      expect(rokuyou).toBe("友引");
    });
    it("2020-06-21 is 大安 (next day of the end of 閏4月)", () => {
      const rokuyou = getRokuyouOfDay(Temporal.PlainDate.from("2020-06-21"));
      expect(rokuyou).toBe("大安");
    });
    it("1990-02-01 is 赤口 (first supported day)", () => {
      const rokuyou = getRokuyouOfDay(Temporal.PlainDate.from("1990-02-01"));
      expect(rokuyou).toBe("赤口");
    });
    it("2039-12-31 is 友引 (last supported day)", () => {
      const rokuyou = getRokuyouOfDay(Temporal.PlainDate.from("2039-12-31"));
      expect(rokuyou).toBe("友引");
    });
  });
  describe("no data", () => {
    it("2040-01-01", () => {
      const rokuyou = getRokuyouOfDay(Temporal.PlainDate.from("2040-01-01"));
      expect(rokuyou).toBe(undefined);
    });
    it("2099-01-02", () => {
      const rokuyou = getRokuyouOfDay(Temporal.PlainDate.from("2099-01-02"));
      expect(rokuyou).toBe(undefined);
    });
    it("1990-01-31", () => {
      const rokuyou = getRokuyouOfDay(Temporal.PlainDate.from("1990-01-31"));
      expect(rokuyou).toBe(undefined);
    });
  });
});
