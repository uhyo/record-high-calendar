import { Temporal } from "@js-temporal/polyfill";
import React, { useMemo } from "react";
import { RankingCalculationResult } from "../../logic/ranking/Ranking";
import { Loadable } from "../../utils/Loadable";
import { toCalendarRows } from "./logic/toCalendarRows";

type Props = {
  rankingLoadable: Loadable<RankingCalculationResult | undefined>;
};

export const RankingCalendar: React.FC<Props> = ({ rankingLoadable }) => {
  const result = rankingLoadable.getOrThrow();
  if (result === undefined) {
    return null;
  }

  const { ranking, characteristicRevMap } = result;

  const weeks = useMemo(() => {
    const sortedRanking = Array.from(ranking.entries())
      .sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0))
      .map(([date, value]) => ({
        day: Temporal.PlainDate.from(date),
        value,
      }));
    return toCalendarRows(sortedRanking);
  }, [ranking]);

  return <div>{String(weeks)}</div>;
};
