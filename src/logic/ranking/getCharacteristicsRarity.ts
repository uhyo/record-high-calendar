import { DayCharacteristic } from "../characteristics/dayCharacteristics";

/**
 * Higher score means rarer.
 * Undefined means unapplicable.
 */
export function getCharacteristicsRarity(
  characteristics: Partial<DayCharacteristic>
): number | undefined {
  let rarity = 1;
  if (characteristics.year) {
    rarity *= 1.01;
  }
  if (characteristics.month) {
    rarity *= 12;
  }
  if (characteristics.weekDay) {
    rarity *= 7;
  }
  if (characteristics.rokuyou) {
    rarity *= 6;
  }
  return rarity;
}
