import { Temporal } from "@js-temporal/polyfill";
import { DayCharacteristic } from "../characteristics/dayCharacteristics";
import { getDayCharacteristics } from "../characteristics/getDayCharacteristics";
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
  const rankingDataByCharacteristics = new Map<
    string,
    {
      characteristic: Partial<DayCharacteristic>;
      arr: {
        day: Temporal.PlainDate;
        num: number;
        thenRank: number;
        currentRank: number;
      }[];
    }
  >();
  // Generate ranking data before sorting.
  for (const { day, num } of sorted) {
    const allCharacteristics = getDayCharacteristics(day);
    for (const partialCharacteristics of partialObjects(allCharacteristics)) {
      const rarity = getCharacteristicsRarity(partialCharacteristics);
      if (rarity === undefined) {
        // non-applicable combination of characteristics
        continue;
      }
      const pid = getPartialCharacteristicsId(partialCharacteristics);
      const rawData = mapGetOrInsertDefault(
        rankingDataByCharacteristics,
        pid,
        () => ({ characteristic: partialCharacteristics, arr: [] })
      );
      const insertIndex = binarySearch(rawData.arr, num);
      const rankEntry = {
        day,
        num,
        thenRank: rawData.arr.length - insertIndex + 1,
        currentRank: -1,
      };

      rawData.arr.splice(insertIndex, 0, rankEntry);
    }
  }
  // Sort each ranking data to set current rank to each item.
  for (const [, { arr }] of rankingDataByCharacteristics) {
    for (const [i, item] of arr.entries()) {
      item.currentRank = arr.length - i;
    }
  }
  // Generate map from date to rank.
  const rankingMap = new Map<
    // date
    string,
    Map<
      // characteristic
      string,
      {
        thenRank: number;
        currentRank: number;
      }
    >
  >();
  const characteristicRevMap = new Map<
    string,
    {
      rarity: number;
      count: number;
      characteristic: Partial<DayCharacteristic>;
    }
  >();

  for (const [characteristicId, rawData] of rankingDataByCharacteristics) {
    const rarity = getCharacteristicsRarity(rawData.characteristic);
    if (rarity === undefined) {
      continue;
    }
    const count = rawData.arr.length;
    if (count < 2) {
      // not ranking
      continue;
    }
    characteristicRevMap.set(characteristicId, {
      rarity,
      count: rawData.arr.length,
      characteristic: rawData.characteristic,
    });
    for (const { day, thenRank, currentRank } of rawData.arr) {
      mapGetOrInsertDefault(rankingMap, day.toString(), () => new Map()).set(
        characteristicId,
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
