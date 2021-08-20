import { useCallback, useState } from "react";
import { Loadable } from "../../utils/Loadable";

type Ranking = Map<
  string,
  Map<
    string,
    {
      thenRank: number;
      currentRank: number;
    }
  >
>;

type UseRankingResult = {
  ranking: Loadable<Ranking | undefined>;
  calculateRanking: (data: string) => void;
};

export function useRanking(): UseRankingResult {
  const [ranking, setRanking] = useState<Loadable<Ranking | undefined>>(() =>
    Loadable.fulfill(undefined)
  );

  const calculateRanking = useCallback((date: string) => {
    console.log(date);
  }, []);

  return {
    ranking,
    calculateRanking,
  };
}
