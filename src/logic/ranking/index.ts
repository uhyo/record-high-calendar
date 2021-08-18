import { Temporal } from "@js-temporal/polyfill";
import { getDayCharacteristics } from "../characteristics/getDayCharacteristics";
import { mapGetOrInsertDefault } from "../util/mapGetOrInsertDefault";
import { partialObjects } from "../util/partialObjects";
import { getPartialCharacteristicsId } from "./getPartialCharacteristicsId";

/**
 * Generate ranking of days.
 */
export function generateRanking(
  data: readonly {
    date: string;
    num: number;
  }[]
) {
  const rankingData = new Map<
    string,
    { date: string; num: number; rank: number }[]
  >();
  // Generate ranking data before sorting.
  for (const { date, num } of data) {
    const day = Temporal.PlainDate.from(date);
    const allCharacteristics = getDayCharacteristics(day);
    for (const partialCharacteristics of partialObjects(allCharacteristics)) {
      const rawData = mapGetOrInsertDefault(
        rankingData,
        getPartialCharacteristicsId(partialCharacteristics),
        []
      );
      rawData.push({
        date,
        num,
        rank: -1,
      });
    }
  }
  // Sort each ranking data.
  // Also, set rank to each item.
  for (const [, rawData] of rankingData) {
    rawData.sort((a, b) => b.num - a.num);
    for (const [i, item] of rawData.entries()) {
      item.rank = i + 1;
    }
  }
  // Generate map from date to rank.
  const rankingMap = new Map<string, Map<string, number>>();
  for (const [characteristicId, rawData] of rankingData) {
    for (const { date, rank } of rawData) {
      mapGetOrInsertDefault(rankingMap, characteristicId, new Map()).set(
        date,
        rank
      );
    }
  }
  return rankingMap;
}
