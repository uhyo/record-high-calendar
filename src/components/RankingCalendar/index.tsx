import React from "react";
import { RankingCalculationResult } from "../../logic/ranking/Ranking";
import { Loadable } from "../../utils/Loadable";

type Props = {
  rankingLoadable: Loadable<RankingCalculationResult | undefined>;
};

export const RankingCalendar: React.FC<Props> = ({ rankingLoadable }) => {
  const result = rankingLoadable.getOrThrow();
  if (result === undefined) {
    return null;
  }

  const { ranking, characteristicRevMap } = result;

  const sortedRanking = Array.from(ranking.entries()).sort((a, b) =>
    a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0
  );

  return <div>{String(sortedRanking)}</div>;
};
