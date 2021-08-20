import React from "react";
import { Ranking } from "../../logic/ranking/Ranking";
import { Loadable } from "../../utils/Loadable";

type Props = {
  rankingLoadable: Loadable<Ranking | undefined>;
};

export const RankingCalendar: React.FC<Props> = ({ rankingLoadable }) => {
  const ranking = rankingLoadable.getOrThrow();
  if (ranking === undefined) {
    return null;
  }
  return <div>{String(ranking)}</div>;
};
