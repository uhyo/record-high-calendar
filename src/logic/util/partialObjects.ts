export function* partialObjects<T>(
  obj: T,
  remainingKeys: (keyof T)[] = Object.keys(obj) as (keyof T)[],
  baseObj: Partial<T> = {}
): IterableIterator<Partial<T>> {
  const key = remainingKeys[0];
  if (key === undefined) {
    yield baseObj;
    return;
  }

  const remainingKeysCopy = remainingKeys.slice(1);
  yield* partialObjects(obj, remainingKeysCopy, baseObj);
  yield* partialObjects(obj, remainingKeysCopy, {
    ...baseObj,
    [key]: obj[key],
  });
}
