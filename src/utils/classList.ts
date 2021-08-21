/**
 * Converts given list of classes into string
 */
export function classList(
  ...classes: readonly (string | false | undefined)[]
): string {
  return classes.filter((c) => c).join(" ");
}
