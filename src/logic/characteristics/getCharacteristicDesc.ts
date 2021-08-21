import { DayCharacteristic } from "./dayCharacteristics";

export function getCharacteristicDesc(
  characteristic: Partial<DayCharacteristic>
) {
  let dateStr = "";
  if (characteristic.year) {
    dateStr += characteristic.year + "年";
  }
  if (characteristic.month) {
    dateStr += characteristic.month + "月";
  }
  let rekichuStr = "";
  if (characteristic.weekDay) {
    rekichuStr += weekDayStr[characteristic.weekDay];
  }
  if (characteristic.rokuyou) {
    if (rekichuStr) {
      rekichuStr += "・";
    }
    rekichuStr += characteristic.rokuyou;
  }

  let result = dateStr;
  if (rekichuStr) {
    if (result) {
      result += "の";
    }
    result += rekichuStr;
  }
  return result;
}

const weekDayStr = [
  "",
  "月曜日",
  "火曜日",
  "水曜日",
  "木曜日",
  "金曜日",
  "土曜日",
  "日曜日",
];
