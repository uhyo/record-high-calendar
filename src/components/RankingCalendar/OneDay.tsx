import { Temporal } from "@js-temporal/polyfill";
import React, { useMemo } from "react";
import { CharacteristicRevMap } from "../../logic/ranking/Ranking";
import { classList } from "../../utils/classList";
import classes from "./OneDay.module.css";

export type Day = {
  day: Temporal.PlainDate;
  rankings: Map<
    string,
    {
      thenRank: number;
      currentRank: number;
    }
  >;
};

type Props = {
  day: Day;
  characteristicRevMap: CharacteristicRevMap;
};

export const OneDay: React.FC<Props> = ({ day, characteristicRevMap }) => {
  const rank = useRankOfDay(day, characteristicRevMap);
  const isSaturday = day.day.dayOfWeek === 6;
  const isSunday = day.day.dayOfWeek === 7;

  return (
    <div className={classes.day}>
      <span
        className={classList(
          classes.dateDisplay,
          isSaturday && classes.saturday,
          isSunday && classes.sunday
        )}
      >
        {day.day.day}
      </span>
    </div>
  );
};

function useRankOfDay(day: Day, characteristicRevMap: CharacteristicRevMap) {
  // sort rankings by current rank. Same rank is sorted by characteristic score
  const sortedRankings = useMemo(() => {
    return [...day.rankings.entries()].sort((a, b) => {
      const rankDiff = a[1].currentRank - b[1].currentRank;
      if (rankDiff !== 0) {
        return rankDiff;
      }
      const ac = characteristicRevMap.get(a[0]);
      const bc = characteristicRevMap.get(b[0]);
      const acRarity = ac?.rarity ?? 0;
      const bcRarity = bc?.rarity ?? 0;
      return acRarity - bcRarity;
    });
  }, [day.rankings]);
  const ranking = sortedRankings[0];
  if (!ranking) {
    return undefined;
  }
  const characteristic = characteristicRevMap.get(ranking[0]);
  if (!characteristic) {
    return undefined;
  }
  return {
    characteristic,
    currentRank: ranking[1].currentRank,
    thenRank: ranking[1].thenRank,
  };
}
