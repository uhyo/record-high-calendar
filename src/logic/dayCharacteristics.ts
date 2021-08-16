import { Rokuyou } from "./rokuyou";

/**
 * Characteristic that expresses the week day of a day.
 */
export type WeekDayCharacteristic =
  | "weekday:monday"
  | "weekday:tuesday"
  | "weekday:wednesday"
  | "weekday:thursday"
  | "weekday:friday"
  | "weekday:saturday"
  | "weekday:sunday";

/**
 * Characteristic that expresses 六曜 of a day.
 */
export type RokuyouCharacteristic = `rokuyou:${Rokuyou}`;

/** Characteristic that expresses the year of a day. */
export type YearCharacteristic = `year:${number}`;

/**
 * Characteristic that expresses the month of a day. (1-12)
 */
export type MonthCharacteristic = `month:${number}`;

export type DayCharacteristic =
  | WeekDayCharacteristic
  | RokuyouCharacteristic
  | YearCharacteristic
  | MonthCharacteristic;
