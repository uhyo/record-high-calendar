import type { DayCharacteristic } from "../characteristics/dayCharacteristics";

export type Ranking = Map<
  string,
  Map<
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
      characteristic: Partial<DayCharacteristic>;
    }
  >;
};
