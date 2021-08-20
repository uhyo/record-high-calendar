import { Temporal } from "@js-temporal/polyfill";

// Convert from 1=Monday... 7=Sunday to 0=Sunday... 6=Saturday
const weekConv = [0, 1, 2, 3, 4, 5, 6, 0];

/**
 * Split list of days into calendar rows.
 */
export function toCalendarRows<T extends { day: Temporal.PlainDate }>(
  data: readonly T[]
) {
  // undefined means empty calendar cell
  const rows: (readonly (T | undefined)[])[] = [];

  let currentWeek: (T | undefined)[] = [];
  for (const obj of data) {
    const w = weekConv[obj.day.dayOfWeek] ?? 0;
    if (currentWeek.length > w) {
      // Move to next week
      rows.push(currentWeek);
      currentWeek = [];
    }
    while (currentWeek.length < w) {
      currentWeek.push(undefined);
    }
    currentWeek.push(obj);
  }

  if (currentWeek.length) {
    rows.push(currentWeek);
  }
  return rows;
}
