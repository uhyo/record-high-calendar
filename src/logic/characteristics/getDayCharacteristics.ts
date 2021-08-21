import { Temporal } from "@js-temporal/polyfill";
import { getRokuyouOfDay } from "../rokuyou";
import { DayCharacteristic } from "./dayCharacteristics";

export function getDayCharacteristics(
  day: Temporal.PlainDate
): DayCharacteristic {
  const rokuyou = getRokuyouOfDay(day);
  return {
    weekDay: day.dayOfWeek,
    ...(rokuyou !== undefined ? { rokuyou } : {}),
    year: day.year,
    month: day.month,
  };
}
