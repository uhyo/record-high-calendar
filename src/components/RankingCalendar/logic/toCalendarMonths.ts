import { Temporal } from "@js-temporal/polyfill";

// Convert from 1=Monday... 7=Sunday to 0=Sunday... 6=Saturday
const weekConv = [0, 1, 2, 3, 4, 5, 6, 0];

type Month<T> = {
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

  let currentWeek: (T | undefined)[] = [];
  for (const obj of data) {
    const objYearMonth = obj.day.toPlainYearMonth();
    if (!currentMonth?.month.equals(objYearMonth)) {
      // New month
      if (currentWeek.length > 0) {
        // Add previous week
        currentMonth?.weeks.push(currentWeek);
      }
      if (currentMonth) {
        months.push(currentMonth);
      }
      currentMonth = {
        month: objYearMonth,
        weeks: [],
      };
      currentWeek = [];
    }
    const w = weekConv[obj.day.dayOfWeek] ?? 0;
    if (currentWeek.length > w) {
      // Move to next week
      currentMonth.weeks.push(currentWeek);
      currentWeek = [];
    }
    while (currentWeek.length < w) {
      currentWeek.push(undefined);
    }
    currentWeek.push(obj);
  }

  if (currentWeek.length) {
    currentMonth?.weeks.push(currentWeek);
  }
  if (currentMonth) {
    months.push(currentMonth);
  }
  return months;
}
