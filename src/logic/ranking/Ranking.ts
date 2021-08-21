import type { DayCharacteristic } from "../characteristics/dayCharacteristics";

export type Ranking = Map<
  // date
  string,
  {
    num: number;
    ranks: Map<
      // characteristic
      string,
      {
        thenRank: number;
        currentRank: number;
      }
    >;
  }
>;

export type CharacteristicRevMap = Map<
  string,
  {
    rarity: number;
    count: number;
    characteristic: Partial<DayCharacteristic>;
  }
>;

export type RankingCalculationResult = {
  ranking: Ranking;
  characteristicRevMap: CharacteristicRevMap;
};
