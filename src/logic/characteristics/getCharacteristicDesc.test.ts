import { getCharacteristicDesc } from "./getCharacteristicDesc";

it("nothing", () => {
  expect(getCharacteristicDesc({})).toBe("");
});
it("year", () => {
  expect(
    getCharacteristicDesc({
      year: 2021,
    })
  ).toBe("2021年");
});
it("month", () => {
  expect(
    getCharacteristicDesc({
      month: 11,
    })
  ).toBe("11月");
});
it("year & month", () => {
  expect(
    getCharacteristicDesc({
      year: 2021,
      month: 9,
    })
  ).toBe("2021年9月");
});
it("rokuyou", () => {
  expect(
    getCharacteristicDesc({
      rokuyou: "仏滅",
    })
  ).toBe("仏滅");
});
it("weekday", () => {
  expect(
    getCharacteristicDesc({
      weekDay: 2,
    })
  ).toBe("火曜日");
});
it("rokuyou & weekday", () => {
  expect(
    getCharacteristicDesc({
      rokuyou: "友引",
      weekDay: 2,
    })
  ).toBe("火曜日かつ友引");
});
it("year & month & weekDay", () => {
  expect(
    getCharacteristicDesc({
      year: 2021,
      month: 8,
      weekDay: 6,
    })
  ).toBe("2021年8月の土曜日");
});
it("year & rokuyou", () => {
  expect(
    getCharacteristicDesc({
      year: 2000,
      rokuyou: "大安",
    })
  ).toBe("2000年の大安");
});
it("full", () => {
  expect(
    getCharacteristicDesc({
      year: 2021,
      month: 8,
      weekDay: 6,
      rokuyou: "先勝",
    })
  ).toBe("2021年8月の土曜日かつ先勝");
});
