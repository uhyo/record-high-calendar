import { DayCharacteristic } from "../characteristics/dayCharacteristics";

export function getPartialCharacteristicsId(
  characteristics: Partial<DayCharacteristic>
): string {
  return [
    characteristics.year,
    characteristics.month,
    characteristics.weekDay,
    characteristics.rokuyou,
  ].join("-");
}
