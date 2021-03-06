import React, { Suspense, useCallback } from "react";
import classes from "./App.module.css";
import { DataInput } from "./components/DataInput";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { LoadingIndicator } from "./components/LoadingIndicator";
import { RankingCalendar } from "./components/RankingCalendar";
import { useRanking } from "./hooks/useRanking";

function App() {
  const { ranking, requestId, pending, calculateRanking } = useRanking();
  const onChange = useCallback(
    (data: string) => {
      calculateRanking(data);
    },
    [calculateRanking]
  );

  return (
    <div className={classes.App}>
      <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
        <header className={classes.header}>
          <h1>過去最高カレンダー</h1>
        </header>
        <main className={classes.main}>
          <DataInput onChange={onChange} changeDisabled={pending} />
          <hr className={classes.separator} />
          <div aria-live="polite">
            {pending ? (
              <LoadingIndicator />
            ) : (
              <ErrorBoundary key={requestId}>
                <RankingCalendar rankingLoadable={ranking} />
              </ErrorBoundary>
            )}
          </div>
        </main>
        <footer className={classes.footer}>
          <p>
            <a
              href="https://github.com/uhyo/record-high-calendar"
              rel="external noopener"
            >
              GitHub
            </a>
          </p>
        </footer>
      </Suspense>
    </div>
  );
}

export default App;
