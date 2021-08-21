import React, { memo, useEffect, useMemo, useRef } from "react";
import { CharacteristicRevMap } from "../../logic/ranking/Ranking";
import { classList } from "../../utils/classList";
import { Month } from "./logic/toCalendarMonths";
import { Day, OneDay } from "./OneDay";
import classes from "./OneMonth.module.css";

type Props = {
  /**
   * Whether to render children.
   */
  renderDetail: boolean;
  /**
   * Whether to scroll to this month.
   */
  scrollTo?: boolean;
  month: Month<Day>;
  characteristicRevMap: CharacteristicRevMap;
};

export const OneMonth: React.FC<Props> = memo(
  ({ month, characteristicRevMap, renderDetail }) => {
    // estimate height of this component to reduce layout time
    const estimatedGridHeight = useMemo(() => {
      // cell has aspect-ratio: 1 / 1
      const cellHeight = `((min(1260px, 100vw) - 2rem - 0.5rem * 6) / 7)`;
      const calendarPartHeight = `(${cellHeight} * ${
        month.weeks.length
      } + 0.5rem * ${month.weeks.length - 1})`;
      const headerHeight = "5rem";
      return `calc(${headerHeight} + ${calendarPartHeight})`;
    }, [month]);
    const estimatedChestHeight = useMemo(() => {
      const cellHeight = "3rem";
      const cellCount = month.weeks.reduce(
        (acc, week) => acc + week.filter((d) => d).length,
        0
      );
      const calendarPartHeight = `(${cellHeight} * ${cellCount} + 3px * ${
        cellCount - 1
      })`;
      const headerHeight = "3rem";
      return `calc(${headerHeight} + ${calendarPartHeight})`;
    }, [month]);
    const styleObject = useMemo<Record<string, string>>(
      () => ({
        "--calendar-grid-height": estimatedGridHeight,
        "--calendar-chest-height": estimatedChestHeight,
      }),
      [estimatedGridHeight, estimatedChestHeight]
    );

    const sectionRef = useRef<HTMLElement | null>(null);
    const scrolledFlag = useRef(false);
    useEffect(() => {
      if (sectionRef.current && !scrolledFlag.current) {
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        scrolledFlag.current = true;
      }
    }, []);

    return (
      <section ref={sectionRef} style={styleObject} className={classes.section}>
        <h1 className={classes.monthTitle}>
          <time dateTime={month.month.toString()}>
            {month.month.year}年{month.month.month}月
          </time>
        </h1>
        {renderDetail ? (
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
        ) : (
          <div className={classes.monthSkeleton} />
        )}
      </section>
    );
  }
);
