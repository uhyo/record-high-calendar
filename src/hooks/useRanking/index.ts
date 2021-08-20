import { useCallback, useState } from "react";
import type { RankingCalculationResult } from "../../logic/ranking/Ranking";
import { Loadable } from "../../utils/Loadable";
import Worker from "./worker?worker";

type WorkerResponse =
  | {
      success: true;
      requestId: string;
      result: RankingCalculationResult;
    }
  | {
      success: false;
      requestId: string;
      error: string;
    };

type UseRankingResult = {
  ranking: Loadable<RankingCalculationResult | undefined>;
  calculateRanking: (data: string) => void;
};

export function useRanking(): UseRankingResult {
  const [rankingWorker] = useState<Worker>(() => new Worker());

  const [ranking, setRanking] = useState<
    Loadable<RankingCalculationResult | undefined>
  >(() => Loadable.fulfill(undefined));

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
              resolve(data.result);
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
