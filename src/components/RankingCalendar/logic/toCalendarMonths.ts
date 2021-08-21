import { Temporal } from "@js-temporal/polyfill";
import { range } from "../../../utils/range";

// Convert from 1=Monday... 7=Sunday to 0=Sunday... 6=Saturday
const weekConv = [0, 1, 2, 3, 4, 5, 6, 0];

export type Month<T> = {
  month: Temporal.PlainYearMonth;
  /**
   *  undefined means empty calendar cell
   */
  weeks: (readonly (T | undefined)[])[];
};

/**
 * Split list of days into sequence of months.
 * Passed 'data' should be sorted.
 */
export function toCalendarMonths<T extends { day: Temporal.PlainDate }>(
  data: readonly T[]
): Month<T>[] {
  const months: Month<T>[] = [];
  let currentMonth: Month<T> | undefined;

  for (let index = 0; index < data.length; ) {
    const obj = data[index]!;
    const objYearMonth = obj.day.toPlainYearMonth();
    if (!currentMonth?.month.equals(objYearMonth)) {
      // New month
      if (currentMonth) {
        months.push(currentMonth);
      }
      currentMonth = {
        month: objYearMonth,
        weeks: [],
      };
    }

    let currentWeek: (T | undefined)[] = [];

    const firstDay = objYearMonth.toPlainDate({ day: 1 });
    const firstDayWeek = weekConv[firstDay.dayOfWeek] ?? 0;
    for (const _ of range(0, firstDayWeek)) {
      currentWeek.push(undefined);
    }

    for (const day of range(1, objYearMonth.daysInMonth + 1)) {
      const nextData = data[index];
      if (currentWeek.length === 7) {
        currentMonth.weeks.push(currentWeek);
        currentWeek = [];
      }
      if (
        nextData &&
        nextData.day.year === objYearMonth.year &&
        nextData.day.month === objYearMonth.month &&
        nextData.day.day === day
      ) {
        // has data
        currentWeek.push(nextData);
        index++;
      } else {
        // no data
        currentWeek.push(undefined);
      }
    }
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(undefined);
      }
      currentMonth.weeks.push(currentWeek);
    }
  }

  if (currentMonth) {
    months.push(currentMonth);
  }
  return months;
}
