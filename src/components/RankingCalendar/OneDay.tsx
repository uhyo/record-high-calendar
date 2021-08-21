import { Temporal } from "@js-temporal/polyfill";
import React, { useMemo } from "react";
import { getCharacteristicDesc } from "../../logic/characteristics/getCharacteristicDesc";
import { CharacteristicRevMap } from "../../logic/ranking/Ranking";
import { classList } from "../../utils/classList";
import classes from "./OneDay.module.css";

export type Day = {
  day: Temporal.PlainDate;
  num: number;
  ranks: Map<
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

  const rankDesc = useMemo(() => {
    if (!rank) {
      return undefined;
    }
    const desc = getCharacteristicDesc(rank.characteristic.characteristic);
    const desc1 = desc ? `${desc}では` : "";
    const desc2 =
      rank.currentRank === 1
        ? "過去最高"
        : `${!desc1 ? "過去" : ""}${rank.currentRank}位`;
    const subDesc =
      rank.currentRank <= rank.thenRank
        ? undefined
        : `（当時${rank.thenRank}位）`;
    return {
      text: `${desc1}${desc2}`,
      isTop: rank.currentRank === 1,
      subDesc,
    };
  }, [rank]);

  return (
    <div className={classes.day}>
      <time
        className={classList(
          classes.dateDisplay,
          isSaturday && classes.saturday,
          isSunday && classes.sunday
        )}
        dateTime={day.day.toString()}
        title={`${day.day.year}年${day.day.month}月${day.day.day}日`}
      >
        <span aria-hidden>{day.day.day}</span>
      </time>
      <span className={classes.numberDisplay}>{day.num}</span>
      {rankDesc && (
        <p className={classes.rankDesc}>
          <span>
            {rankDesc.isTop ? <strong>{rankDesc.text}</strong> : rankDesc.text}
            {rankDesc.subDesc && <small>{rankDesc.subDesc}</small>}
          </span>
        </p>
      )}
    </div>
  );
};

function useRankOfDay(day: Day, characteristicRevMap: CharacteristicRevMap) {
  // sort rankings by current rank. Same rank is sorted by characteristic score
  const sortedRankings = useMemo(() => {
    return [...day.ranks.entries()].sort((a, b) => {
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
  }, [day.ranks]);
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
