import { Temporal } from "@js-temporal/polyfill";
import { DayCharacteristic } from "../characteristics/dayCharacteristics";
import { getDayCharacteristics } from "../characteristics/getDayCharacteristics";
import { mapEnsure } from "../util/mapEnsure";
import { mapGetOrInsertDefault } from "../util/mapGetOrInsertDefault";
import { partialObjects } from "../util/partialObjects";
import { getCharacteristicsRarity } from "./getCharacteristicsRarity";
import { getPartialCharacteristicsId } from "./getPartialCharacteristicsId";
import { RankingCalculationResult } from "./Ranking";

/**
 * Generate ranking of days.
 */
export function generateRanking(
  data: readonly {
    date: string;
    num: number;
  }[]
): RankingCalculationResult {
  const sorted = data
    .map(({ date, num }) => ({
      day: Temporal.PlainDate.from(date),
      num,
    }))
    .sort((a, b) => Temporal.PlainDate.compare(a.day, b.day));
  const rankingData = new Map<
    string,
    {
      day: Temporal.PlainDate;
      num: number;
      thenRank: number;
      currentRank: number;
    }[]
  >();
  const characteristicRevMap = new Map<
    string,
    {
      rarity: number;
      characteristic: Partial<DayCharacteristic>;
    }
  >();

  // Generate ranking data before sorting.
  for (const { day, num } of sorted) {
    const allCharacteristics = getDayCharacteristics(day);
    for (const partialCharacteristics of partialObjects(allCharacteristics)) {
      const pid = getPartialCharacteristicsId(partialCharacteristics);
      mapEnsure(characteristicRevMap, pid, () => ({
        rarity: getCharacteristicsRarity(partialCharacteristics),
        characteristic: partialCharacteristics,
      }));
      const rawData = mapGetOrInsertDefault(rankingData, pid, []);
      const insertIndex = binarySearch(rawData, num);
      rawData.splice(insertIndex, 0, {
        day,
        num,
        thenRank: rawData.length - insertIndex + 1,
        currentRank: -1,
      });
    }
  }
  // Sort each ranking data to set current rank to each item.
  for (const [, rawData] of rankingData) {
    for (const [i, item] of rawData.entries()) {
      item.currentRank = rawData.length - i;
    }
  }
  // Generate map from date to rank.
  const rankingMap = new Map<
    string,
    Map<
      string,
      {
        thenRank: number;
        currentRank: number;
      }
    >
  >();
  for (const [characteristicId, rawData] of rankingData) {
    for (const { day, thenRank, currentRank } of rawData) {
      mapGetOrInsertDefault(rankingMap, characteristicId, new Map()).set(
        day.toString(),
        {
          thenRank,
          currentRank,
        }
      );
    }
  }
  return {
    ranking: rankingMap,
    characteristicRevMap,
  };
}

/**
 * Binary search. Returns the largest index such that
 * all elements before the returned index are less than the target.
 */
function binarySearch(arr: readonly { num: number }[], target: number) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.ceil((start + end) / 2);
    if (arr[mid]!.num < target) {
      start = mid + 1;
    } else if (arr[mid]!.num >= target) {
      end = mid - 1;
    }
  }
  return start;
}
