import { Temporal } from "@js-temporal/polyfill";
import { kyurekiTable } from "./kyureki-table";

export type Rokuyou = "大安" | "赤口" | "先勝" | "友引" | "先負" | "仏滅";

export function getRokuyouOfDay(day: Temporal.PlainDate): Rokuyou | undefined {
  if (
    day.year >= 2040 ||
    day.year < 1990 ||
    (day.year === 1990 && day.month === 1)
  ) {
    return undefined;
  }
  const index = binarySearch(day.toString());
  if (index === undefined) {
    return undefined;
  }
  const oldMonth = kyurekiTable[index]?.[1];
  if (oldMonth === undefined) {
    return undefined;
  }
  const startOfOldMonthInCurrentCalendar = kyurekiTable[index]![0];
  const dayInThatMonth =
    day.since(startOfOldMonthInCurrentCalendar, {
      largestUnit: "day",
      smallestUnit: "day",
    }).days + 1;
  const oldMonthObj = Temporal.PlainYearMonth.from(oldMonth);
  return (["大安", "赤口", "先勝", "友引", "先負", "仏滅"] as const)[
    (oldMonthObj.month + dayInThatMonth) % 6
  ];
}

// binary search given date from kyureki table
function binarySearch(day: string): number | undefined {
  let start = 0;
  let end = kyurekiTable.length - 1;
  while (start < end) {
    const mid = Math.ceil((start + end) / 2);
    const midDate = kyurekiTable[mid]![0];
    if (midDate < day) {
      start = mid;
    } else if (midDate > day) {
      end = mid - 1;
    } else {
      start = end = mid;
    }
  }
  return start === end ? start : undefined;
}
