type State<T> =
  | {
      state: "pending";
      promise: Promise<T>;
    }
  | {
      state: "fulfilled";
      value: T;
    }
  | {
      state: "rejected";
      reason: unknown;
    };

export class Loadable<T> {
  static fulfill<T>(value: T): Loadable<T> {
    const result = new Loadable<T>(undefined);
    result.#state = {
      state: "fulfilled",
      value,
    };
    return result;
  }

  #state: State<T>;
  constructor(promise: Promise<T> | undefined) {
    if (promise === undefined) {
      this.#state = {
        state: "pending",
        promise: new Promise<T>(() => {}),
      };
      return;
    }
    const thenPromise = promise.then(
      (value) => {
        this.#state = {
          state: "fulfilled",
          value,
        };
        return value;
      },
      (reason) => {
        this.#state = {
          state: "rejected",
          reason,
        };
        throw reason;
      }
    );
    this.#state = {
      state: "pending",
      promise: thenPromise,
    };
  }

  getOrThrow(): T {
    if (this.#state.state === "fulfilled") {
      return this.#state.value;
    } else if (this.#state.state === "rejected") {
      throw this.#state.reason;
    } else {
      throw this.#state.promise;
    }
  }
}
