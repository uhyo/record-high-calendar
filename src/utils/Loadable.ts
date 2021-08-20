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
    return new Loadable(Promise.resolve(value));
  }

  #state: State<T>;
  constructor(promise: Promise<T>) {
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
