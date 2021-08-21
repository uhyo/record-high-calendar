import React from "react";
import { CharacteristicRevMap } from "../../logic/ranking/Ranking";
import { classList } from "../../utils/classList";
import { Month } from "./logic/toCalendarMonths";
import { Day, OneDay } from "./OneDay";
import classes from "./OneMonth.module.css";

type Props = {
  month: Month<Day>;
  characteristicRevMap: CharacteristicRevMap;
};

export const OneMonth: React.FC<Props> = ({ month, characteristicRevMap }) => {
  return (
    <section>
      <h1 className={classes.monthTitle}>
        {month.month.year}年{month.month.month}月
      </h1>
      <div className={classes.month}>
        {month.weeks.map((week, i) => (
          <div key={i} className={classes.week}>
            {week.map((day, j) => (
              <div
                key={j}
                className={classList(
                  classes.day,
                  day === undefined ? classes.empty : undefined
                )}
              >
                {day ? (
                  <OneDay
                    day={day}
                    characteristicRevMap={characteristicRevMap}
                  />
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
