import { Temporal } from "@js-temporal/polyfill";
import React, { startTransition, useEffect, useMemo } from "react";
import { render } from "react-dom";
import { RankingCalculationResult } from "../../logic/ranking/Ranking";
import { Loadable } from "../../utils/Loadable";
import { toCalendarMonths } from "./logic/toCalendarMonths";
import { OneMonth } from "./OneMonth";

type Props = {
  rankingLoadable: Loadable<RankingCalculationResult | undefined>;
};

export const RankingCalendar: React.FC<Props> = ({ rankingLoadable }) => {
  const result = rankingLoadable.getOrThrow();

  const months = useMemo(() => {
    if (result === undefined) {
      return undefined;
    }
    const { ranking } = result;
    const sortedRanking = Array.from(ranking.entries())
      .sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0))
      .map(([date, rankings]) => ({
        day: Temporal.PlainDate.from(date),
        num: rankings.num,
        ranks: rankings.ranks,
      }));
    return toCalendarMonths(sortedRanking);
  }, [result]);

  // two-step rendering: first render last month only for faster initial rendering
  const [renderingMode, setRenderingMode] = React.useState<"full" | "last">(
    "last"
  );
  useEffect(() => {
    if (months !== undefined && renderingMode === "last") {
      startTransition(() => {
        setRenderingMode("full");
      });
    }
  }, [months, render]);

  return (
    <div>
      {months &&
        result &&
        months.map((month, index) => (
          <OneMonth
            key={month.month.toString()}
            renderDetail={
              renderingMode === "full" || index === months.length - 1
            }
            month={month}
            characteristicRevMap={result.characteristicRevMap}
          />
        ))}
    </div>
  );
};
