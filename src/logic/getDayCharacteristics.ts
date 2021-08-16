import { Temporal } from "@js-temporal/polyfill";
import { DayCharacteristic, WeekDayCharacteristic } from "./dayCharacteristics";
import { getRokuyouOfDay } from "./rokuyou";

export function getDayCharacteristics(
  day: Temporal.PlainDate
): Set<DayCharacteristic> {
  const result = new Set<DayCharacteristic>();
  // weekday
  result.add(getWeekdayCharacteristics(day));
  // 六曜
  const rokuyouC = getRokuyouOfDay(day);
  if (rokuyouC !== undefined) {
    result.add(`rokuyou:${rokuyouC}`);
  }
  // year
  result.add(`year:${day.year}`);
  // month
  result.add(`month:${day.month}`);
  return result;
}

function getWeekdayCharacteristics(
  day: Temporal.PlainDate
): WeekDayCharacteristic {
  return (
    (
      [
        "weekday:monday",
        "weekday:tuesday",
        "weekday:wednesday",
        "weekday:thursday",
        "weekday:friday",
        "weekday:saturday",
        "weekday:sunday",
      ] as const
    )[day.dayOfWeek - 1] ||
    (() => {
      throw new Error(`Unknown dayOfWeek: ${day.dayOfWeek}`);
    })()
  );
}
