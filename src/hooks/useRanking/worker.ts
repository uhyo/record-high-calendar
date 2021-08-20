/// <reference lib="webworker" />
import { generateRanking } from "../../logic/ranking";

const ctx = self as DedicatedWorkerGlobalScope;

ctx.addEventListener("message", (e: MessageEvent) => {
  const requestId: string = e.data.requestId;
  try {
    const data: string = e.data.data;

    // parse lines of data of form YYYY-MM-DD,num
    const lines = data.split("\n");
    const dates = lines.flatMap((line) => {
      const [date, num] = line.split(",");
      const n = Number(num);
      if (Number.isNaN(num)) {
        return [];
      }
      return [{ date: date!, num: n }];
    });
    const result = generateRanking(dates);
    // send back to main thread
    ctx.postMessage({
      requestId,
      success: true,
      result,
    });
  } catch (err) {
    console.error(err);
    ctx.postMessage({
      requestId,
      success: false,
      error: String(err),
    });
  }
});
