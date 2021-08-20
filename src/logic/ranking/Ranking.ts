import type { DayCharacteristic } from "../characteristics/dayCharacteristics";

export type Ranking = Map<
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
>;

export type RankingCalculationResult = {
  ranking: Ranking;
  characteristicRevMap: Map<
    string,
    {
      rarity: number;
      count: number;
      characteristic: Partial<DayCharacteristic>;
    }
  >;
};
