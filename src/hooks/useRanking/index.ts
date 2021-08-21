import { useCallback, useState, useTransition } from "react";
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
  requestId: string | undefined;
  pending: boolean;
  calculateRanking: (data: string) => void;
};

export function useRanking(): UseRankingResult {
  const [pending, startTransition] = useTransition();
  const [rankingWorker] = useState<Worker>(() => new Worker());

  const [ranking, setRanking] = useState<{
    ranking: Loadable<RankingCalculationResult | undefined>;
    requestId: string | undefined;
  }>(() => ({ ranking: Loadable.fulfill(undefined), requestId: undefined }));

  const calculateRanking = useCallback((data: string) => {
    const requestId = `calculateRanking-${Date.now()}`;
    const message = {
      requestId,
      data,
    };
    console.info("request", message);
    rankingWorker.postMessage(message);
    startTransition(() => {
      setRanking({
        ranking: new Loadable(
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
        ),
        requestId,
      });
    });
  }, []);

  return {
    ranking: ranking.ranking,
    requestId: ranking.requestId,
    pending,
    calculateRanking,
  };
}
