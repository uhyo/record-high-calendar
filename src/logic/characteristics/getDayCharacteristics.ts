import { Temporal } from "@js-temporal/polyfill";
import { DayCharacteristic, WeekDayCharacteristic } from "./dayCharacteristics";
import { getRokuyouOfDay } from "../rokuyou";

export function getDayCharacteristics(
  day: Temporal.PlainDate
): DayCharacteristic {
  const rokuyouC = getRokuyouOfDay(day);
  return {
    weekDay: getWeekdayCharacteristics(day),
    ...(rokuyouC !== undefined ? { rokuyou: `rokuyou:${rokuyouC}` } : {}),
    year: `year:${day.year}`,
    month: `month:${day.month}`,
  };
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
