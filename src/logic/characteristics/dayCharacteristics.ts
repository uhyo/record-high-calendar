import { Rokuyou } from "../rokuyou";

/**
 * Characteristic that expresses the week day of a day. (1 - 7)
 */
export type WeekDayCharacteristic = number;

/**
 * Characteristic that expresses 六曜 of a day.
 */
export type RokuyouCharacteristic = Rokuyou;

/** Characteristic that expresses the year of a day. */
export type YearCharacteristic = number;

/**
 * Characteristic that expresses the month of a day. (1-12)
 */
export type MonthCharacteristic = number;

export type DayCharacteristic = {
  weekDay: WeekDayCharacteristic;
  rokuyou?: RokuyouCharacteristic;
  year: YearCharacteristic;
  month: MonthCharacteristic;
};
