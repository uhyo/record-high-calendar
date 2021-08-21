import { Temporal } from "@js-temporal/polyfill";
import React, { useMemo } from "react";
import { RankingCalculationResult } from "../../logic/ranking/Ranking";
import { Loadable } from "../../utils/Loadable";
import { toCalendarMonths } from "./logic/toCalendarMonths";
import { OneMonth } from "./OneMonth";

type Props = {
  rankingLoadable: Loadable<RankingCalculationResult | undefined>;
};

export const RankingCalendar: React.FC<Props> = ({ rankingLoadable }) => {
  const result = rankingLoadable.getOrThrow();
  if (result === undefined) {
    return null;
  }

  const { ranking, characteristicRevMap } = result;

  const months = useMemo(() => {
    const sortedRanking = Array.from(ranking.entries())
      .sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0))
      .map(([date, rankings]) => ({
        day: Temporal.PlainDate.from(date),
        num: rankings.num,
        ranks: rankings.ranks,
      }));
    return toCalendarMonths(sortedRanking);
  }, [ranking]);

  return (
    <div>
      {months.map((month) => (
        <OneMonth
          key={month.month.toString()}
          month={month}
          characteristicRevMap={characteristicRevMap}
        />
      ))}
    </div>
  );
};
