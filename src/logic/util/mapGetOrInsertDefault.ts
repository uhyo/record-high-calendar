export function mapGetOrInsertDefault<K, V>(
  map: Map<K, V>,
  key: K,
  defaultValue: () => V
): V {
  const value = map.get(key);
  if (value !== undefined) {
    return value;
  }
  const newValue = defaultValue();
  map.set(key, newValue);
  return newValue;
}
