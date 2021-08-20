import { useCallback, useState } from "react";
import type { Ranking } from "../../logic/ranking/Ranking";
import { Loadable } from "../../utils/Loadable";
import Worker from "./worker?worker";

type WorkerResponse =
  | {
      success: true;
      requestId: string;
      rankings: Ranking;
    }
  | {
      success: false;
      requestId: string;
      error: string;
    };

type UseRankingResult = {
  ranking: Loadable<Ranking | undefined>;
  calculateRanking: (data: string) => void;
};

export function useRanking(): UseRankingResult {
  const [rankingWorker] = useState<Worker>(() => new Worker());

  const [ranking, setRanking] = useState<Loadable<Ranking | undefined>>(() =>
    Loadable.fulfill(undefined)
  );

  const calculateRanking = useCallback((data: string) => {
    const requestId = `calculateRanking-${Date.now()}`;
    const message = {
      requestId,
      data,
    };
    console.info("request", message);
    rankingWorker.postMessage(message);
    setRanking(
      new Loadable(
        new Promise((resolve, reject) => {
          const handler = (ev: MessageEvent) => {
            const data: WorkerResponse = ev.data;
            if (data.requestId !== requestId) {
              return;
            }
            console.info("response", data);
            if (data.success) {
              resolve(data.rankings);
            } else {
              reject(data.error);
            }

            rankingWorker.removeEventListener("message", handler);
          };
          rankingWorker.addEventListener("message", handler);
        })
      )
    );
  }, []);

  return {
    ranking,
    calculateRanking,
  };
}
