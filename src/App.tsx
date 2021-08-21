import React, { Suspense, useCallback } from "react";
import classes from "./App.module.css";
import { DataInput } from "./components/DataInput";
import { RankingCalendar } from "./components/RankingCalendar";
import { useRanking } from "./hooks/useRanking";

function App() {
  const { ranking, calculateRanking } = useRanking();
  const onChange = useCallback(
    (data: string) => {
      calculateRanking(data);
    },
    [calculateRanking]
  );

  return (
    <div className={classes.App}>
      <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
        <header className={classes["App-header"]}>
          <h1>過去最高カレンダー</h1>
        </header>
        <main className={classes.main}>
          <DataInput onChange={onChange} />
          <hr className={classes.separator} />
          <div aria-live="polite">
            <RankingCalendar rankingLoadable={ranking} />
          </div>
        </main>
      </Suspense>
    </div>
  );
}

export default App;
