import { generateRanking } from ".";

const data = [
  { date: "2021-08-01", num: 99 },
  { date: "2021-08-02", num: 864 },
  { date: "2021-08-03", num: 210 },
  { date: "2021-08-04", num: 661 },
  { date: "2021-08-05", num: 264 },
  { date: "2021-08-06", num: 340 },
  { date: "2021-08-07", num: 163 },
  { date: "2021-08-08", num: 19 },
  { date: "2021-08-09", num: 346 },
  { date: "2021-08-10", num: 433 },
  { date: "2021-08-11", num: 864 },
  { date: "2021-08-12", num: 240 },
  { date: "2021-08-13", num: 19 },
  { date: "2021-08-14", num: 643 },
  { date: "2021-08-15", num: 512 },
  { date: "2021-08-16", num: 283 },
  { date: "2021-08-17", num: 891 },
  { date: "2021-08-18", num: 328 },
  { date: "2021-08-19", num: 353 },
  { date: "2021-08-20", num: 314 },
  { date: "2021-08-21", num: 76 },
  { date: "2021-08-22", num: 320 },
  { date: "2021-08-23", num: 607 },
  { date: "2021-08-24", num: 956 },
  { date: "2021-08-25", num: 363 },
  { date: "2021-08-26", num: 93 },
  { date: "2021-08-27", num: 788 },
  { date: "2021-08-28", num: 508 },
  { date: "2021-08-29", num: 283 },
  { date: "2021-08-30", num: 499 },
  { date: "2021-08-31", num: 611 },
];

it("generateRanking", () => {
  expect(generateRanking(data)).toMatchInlineSnapshot(`
Object {
  "characteristicRevMap": Map {
    "---" => Object {
      "characteristic": Object {},
      "count": 31,
      "rarity": 1,
    },
    "-month:8--" => Object {
      "characteristic": Object {
        "month": "month:8",
      },
      "count": 31,
      "rarity": 12,
    },
    "year:2021---" => Object {
      "characteristic": Object {
        "year": "year:2021",
      },
      "count": 31,
      "rarity": 1.01,
    },
    "year:2021-month:8--" => Object {
      "characteristic": Object {
        "month": "month:8",
        "year": "year:2021",
      },
      "count": 31,
      "rarity": 12.120000000000001,
    },
    "---rokuyou:仏滅" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:仏滅",
      },
      "count": 6,
      "rarity": 6,
    },
    "-month:8--rokuyou:仏滅" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:仏滅",
      },
      "count": 6,
      "rarity": 72,
    },
    "year:2021---rokuyou:仏滅" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:仏滅",
        "year": "year:2021",
      },
      "count": 6,
      "rarity": 6.0600000000000005,
    },
    "year:2021-month:8--rokuyou:仏滅" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:仏滅",
        "year": "year:2021",
      },
      "count": 6,
      "rarity": 72.72,
    },
    "--weekday:sunday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:sunday",
      },
      "count": 5,
      "rarity": 7,
    },
    "-month:8-weekday:sunday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:sunday",
      },
      "count": 5,
      "rarity": 84,
    },
    "year:2021--weekday:sunday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:sunday",
        "year": "year:2021",
      },
      "count": 5,
      "rarity": 7.07,
    },
    "year:2021-month:8-weekday:sunday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:sunday",
        "year": "year:2021",
      },
      "count": 5,
      "rarity": 84.84,
    },
    "--weekday:sunday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:sunday",
      },
      "count": 2,
      "rarity": 42,
    },
    "-month:8-weekday:sunday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:sunday",
      },
      "count": 2,
      "rarity": 504,
    },
    "year:2021--weekday:sunday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:sunday",
        "year": "year:2021",
      },
      "count": 2,
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:sunday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:sunday",
        "year": "year:2021",
      },
      "count": 2,
      "rarity": 509.04,
    },
    "---rokuyou:大安" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:大安",
      },
      "count": 5,
      "rarity": 6,
    },
    "-month:8--rokuyou:大安" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:大安",
      },
      "count": 5,
      "rarity": 72,
    },
    "year:2021---rokuyou:大安" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:大安",
        "year": "year:2021",
      },
      "count": 5,
      "rarity": 6.0600000000000005,
    },
    "year:2021-month:8--rokuyou:大安" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:大安",
        "year": "year:2021",
      },
      "count": 5,
      "rarity": 72.72,
    },
    "--weekday:monday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:monday",
      },
      "count": 5,
      "rarity": 7,
    },
    "-month:8-weekday:monday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:monday",
      },
      "count": 5,
      "rarity": 84,
    },
    "year:2021--weekday:monday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:monday",
        "year": "year:2021",
      },
      "count": 5,
      "rarity": 7.07,
    },
    "year:2021-month:8-weekday:monday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:monday",
        "year": "year:2021",
      },
      "count": 5,
      "rarity": 84.84,
    },
    "--weekday:monday-rokuyou:大安" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:大安",
        "weekDay": "weekday:monday",
      },
      "count": 2,
      "rarity": 42,
    },
    "-month:8-weekday:monday-rokuyou:大安" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:大安",
        "weekDay": "weekday:monday",
      },
      "count": 2,
      "rarity": 504,
    },
    "year:2021--weekday:monday-rokuyou:大安" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:大安",
        "weekDay": "weekday:monday",
        "year": "year:2021",
      },
      "count": 2,
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:monday-rokuyou:大安" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:大安",
        "weekDay": "weekday:monday",
        "year": "year:2021",
      },
      "count": 2,
      "rarity": 509.04,
    },
    "---rokuyou:赤口" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:赤口",
      },
      "count": 5,
      "rarity": 6,
    },
    "-month:8--rokuyou:赤口" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:赤口",
      },
      "count": 5,
      "rarity": 72,
    },
    "year:2021---rokuyou:赤口" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:赤口",
        "year": "year:2021",
      },
      "count": 5,
      "rarity": 6.0600000000000005,
    },
    "year:2021-month:8--rokuyou:赤口" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:赤口",
        "year": "year:2021",
      },
      "count": 5,
      "rarity": 72.72,
    },
    "--weekday:tuesday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:tuesday",
      },
      "count": 5,
      "rarity": 7,
    },
    "-month:8-weekday:tuesday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:tuesday",
      },
      "count": 5,
      "rarity": 84,
    },
    "year:2021--weekday:tuesday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:tuesday",
        "year": "year:2021",
      },
      "count": 5,
      "rarity": 7.07,
    },
    "year:2021-month:8-weekday:tuesday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:tuesday",
        "year": "year:2021",
      },
      "count": 5,
      "rarity": 84.84,
    },
    "--weekday:tuesday-rokuyou:赤口" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:赤口",
        "weekDay": "weekday:tuesday",
      },
      "count": 2,
      "rarity": 42,
    },
    "-month:8-weekday:tuesday-rokuyou:赤口" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:赤口",
        "weekDay": "weekday:tuesday",
      },
      "count": 2,
      "rarity": 504,
    },
    "year:2021--weekday:tuesday-rokuyou:赤口" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:赤口",
        "weekDay": "weekday:tuesday",
        "year": "year:2021",
      },
      "count": 2,
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:tuesday-rokuyou:赤口" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:赤口",
        "weekDay": "weekday:tuesday",
        "year": "year:2021",
      },
      "count": 2,
      "rarity": 509.04,
    },
    "---rokuyou:先勝" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先勝",
      },
      "count": 5,
      "rarity": 6,
    },
    "-month:8--rokuyou:先勝" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先勝",
      },
      "count": 5,
      "rarity": 72,
    },
    "year:2021---rokuyou:先勝" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先勝",
        "year": "year:2021",
      },
      "count": 5,
      "rarity": 6.0600000000000005,
    },
    "year:2021-month:8--rokuyou:先勝" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先勝",
        "year": "year:2021",
      },
      "count": 5,
      "rarity": 72.72,
    },
    "--weekday:wednesday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:wednesday",
      },
      "count": 4,
      "rarity": 7,
    },
    "-month:8-weekday:wednesday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:wednesday",
      },
      "count": 4,
      "rarity": 84,
    },
    "year:2021--weekday:wednesday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:wednesday",
        "year": "year:2021",
      },
      "count": 4,
      "rarity": 7.07,
    },
    "year:2021-month:8-weekday:wednesday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:wednesday",
        "year": "year:2021",
      },
      "count": 4,
      "rarity": 84.84,
    },
    "---rokuyou:友引" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:友引",
      },
      "count": 5,
      "rarity": 6,
    },
    "-month:8--rokuyou:友引" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:友引",
      },
      "count": 5,
      "rarity": 72,
    },
    "year:2021---rokuyou:友引" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:友引",
        "year": "year:2021",
      },
      "count": 5,
      "rarity": 6.0600000000000005,
    },
    "year:2021-month:8--rokuyou:友引" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:友引",
        "year": "year:2021",
      },
      "count": 5,
      "rarity": 72.72,
    },
    "--weekday:thursday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:thursday",
      },
      "count": 4,
      "rarity": 7,
    },
    "-month:8-weekday:thursday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:thursday",
      },
      "count": 4,
      "rarity": 84,
    },
    "year:2021--weekday:thursday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:thursday",
        "year": "year:2021",
      },
      "count": 4,
      "rarity": 7.07,
    },
    "year:2021-month:8-weekday:thursday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:thursday",
        "year": "year:2021",
      },
      "count": 4,
      "rarity": 84.84,
    },
    "---rokuyou:先負" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先負",
      },
      "count": 5,
      "rarity": 6,
    },
    "-month:8--rokuyou:先負" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先負",
      },
      "count": 5,
      "rarity": 72,
    },
    "year:2021---rokuyou:先負" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先負",
        "year": "year:2021",
      },
      "count": 5,
      "rarity": 6.0600000000000005,
    },
    "year:2021-month:8--rokuyou:先負" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先負",
        "year": "year:2021",
      },
      "count": 5,
      "rarity": 72.72,
    },
    "--weekday:friday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:friday",
      },
      "count": 4,
      "rarity": 7,
    },
    "-month:8-weekday:friday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:friday",
      },
      "count": 4,
      "rarity": 84,
    },
    "year:2021--weekday:friday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:friday",
        "year": "year:2021",
      },
      "count": 4,
      "rarity": 7.07,
    },
    "year:2021-month:8-weekday:friday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:friday",
        "year": "year:2021",
      },
      "count": 4,
      "rarity": 84.84,
    },
    "--weekday:saturday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:saturday",
      },
      "count": 4,
      "rarity": 7,
    },
    "-month:8-weekday:saturday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:saturday",
      },
      "count": 4,
      "rarity": 84,
    },
    "year:2021--weekday:saturday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:saturday",
        "year": "year:2021",
      },
      "count": 4,
      "rarity": 7.07,
    },
    "year:2021-month:8-weekday:saturday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:saturday",
        "year": "year:2021",
      },
      "count": 4,
      "rarity": 84.84,
    },
  },
  "ranking": Map {
    "2021-08-13" => Map {
      "---" => Object {
        "currentRank": 31,
        "thenRank": 13,
      },
      "-month:8--" => Object {
        "currentRank": 31,
        "thenRank": 13,
      },
      "year:2021---" => Object {
        "currentRank": 31,
        "thenRank": 13,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 31,
        "thenRank": 13,
      },
      "---rokuyou:赤口" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "-month:8--rokuyou:赤口" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "year:2021---rokuyou:赤口" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "year:2021-month:8--rokuyou:赤口" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "--weekday:friday-" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "-month:8-weekday:friday-" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "year:2021--weekday:friday-" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "year:2021-month:8-weekday:friday-" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
    },
    "2021-08-08" => Map {
      "---" => Object {
        "currentRank": 30,
        "thenRank": 8,
      },
      "-month:8--" => Object {
        "currentRank": 30,
        "thenRank": 8,
      },
      "year:2021---" => Object {
        "currentRank": 30,
        "thenRank": 8,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 30,
        "thenRank": 8,
      },
      "--weekday:sunday-" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "-month:8-weekday:sunday-" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "year:2021--weekday:sunday-" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "year:2021-month:8-weekday:sunday-" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "---rokuyou:先勝" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "-month:8--rokuyou:先勝" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "year:2021---rokuyou:先勝" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "year:2021-month:8--rokuyou:先勝" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
    },
    "2021-08-21" => Map {
      "---" => Object {
        "currentRank": 29,
        "thenRank": 19,
      },
      "-month:8--" => Object {
        "currentRank": 29,
        "thenRank": 19,
      },
      "year:2021---" => Object {
        "currentRank": 29,
        "thenRank": 19,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 29,
        "thenRank": 19,
      },
      "---rokuyou:友引" => Object {
        "currentRank": 5,
        "thenRank": 4,
      },
      "-month:8--rokuyou:友引" => Object {
        "currentRank": 5,
        "thenRank": 4,
      },
      "year:2021---rokuyou:友引" => Object {
        "currentRank": 5,
        "thenRank": 4,
      },
      "year:2021-month:8--rokuyou:友引" => Object {
        "currentRank": 5,
        "thenRank": 4,
      },
      "--weekday:saturday-" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
      "-month:8-weekday:saturday-" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
      "year:2021--weekday:saturday-" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
      "year:2021-month:8-weekday:saturday-" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
    },
    "2021-08-26" => Map {
      "---" => Object {
        "currentRank": 28,
        "thenRank": 23,
      },
      "-month:8--" => Object {
        "currentRank": 28,
        "thenRank": 23,
      },
      "year:2021---" => Object {
        "currentRank": 28,
        "thenRank": 23,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 28,
        "thenRank": 23,
      },
      "---rokuyou:先勝" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
      "-month:8--rokuyou:先勝" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
      "year:2021---rokuyou:先勝" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
      "year:2021-month:8--rokuyou:先勝" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
      "--weekday:thursday-" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
      "-month:8-weekday:thursday-" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
      "year:2021--weekday:thursday-" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
      "year:2021-month:8-weekday:thursday-" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
    },
    "2021-08-01" => Map {
      "---" => Object {
        "currentRank": 27,
        "thenRank": 1,
      },
      "-month:8--" => Object {
        "currentRank": 27,
        "thenRank": 1,
      },
      "year:2021---" => Object {
        "currentRank": 27,
        "thenRank": 1,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 27,
        "thenRank": 1,
      },
      "---rokuyou:仏滅" => Object {
        "currentRank": 6,
        "thenRank": 1,
      },
      "-month:8--rokuyou:仏滅" => Object {
        "currentRank": 6,
        "thenRank": 1,
      },
      "year:2021---rokuyou:仏滅" => Object {
        "currentRank": 6,
        "thenRank": 1,
      },
      "year:2021-month:8--rokuyou:仏滅" => Object {
        "currentRank": 6,
        "thenRank": 1,
      },
      "--weekday:sunday-" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "-month:8-weekday:sunday-" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "year:2021--weekday:sunday-" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "year:2021-month:8-weekday:sunday-" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "--weekday:sunday-rokuyou:仏滅" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-month:8-weekday:sunday-rokuyou:仏滅" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021--weekday:sunday-rokuyou:仏滅" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021-month:8-weekday:sunday-rokuyou:仏滅" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
    },
    "2021-08-07" => Map {
      "---" => Object {
        "currentRank": 26,
        "thenRank": 6,
      },
      "-month:8--" => Object {
        "currentRank": 26,
        "thenRank": 6,
      },
      "year:2021---" => Object {
        "currentRank": 26,
        "thenRank": 6,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 26,
        "thenRank": 6,
      },
      "---rokuyou:仏滅" => Object {
        "currentRank": 5,
        "thenRank": 1,
      },
      "-month:8--rokuyou:仏滅" => Object {
        "currentRank": 5,
        "thenRank": 1,
      },
      "year:2021---rokuyou:仏滅" => Object {
        "currentRank": 5,
        "thenRank": 1,
      },
      "year:2021-month:8--rokuyou:仏滅" => Object {
        "currentRank": 5,
        "thenRank": 1,
      },
      "--weekday:saturday-" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "-month:8-weekday:saturday-" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "year:2021--weekday:saturday-" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "year:2021-month:8-weekday:saturday-" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
    },
    "2021-08-03" => Map {
      "---" => Object {
        "currentRank": 25,
        "thenRank": 2,
      },
      "-month:8--" => Object {
        "currentRank": 25,
        "thenRank": 2,
      },
      "year:2021---" => Object {
        "currentRank": 25,
        "thenRank": 2,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 25,
        "thenRank": 2,
      },
      "---rokuyou:赤口" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "-month:8--rokuyou:赤口" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "year:2021---rokuyou:赤口" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "year:2021-month:8--rokuyou:赤口" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "--weekday:tuesday-" => Object {
        "currentRank": 5,
        "thenRank": 1,
      },
      "-month:8-weekday:tuesday-" => Object {
        "currentRank": 5,
        "thenRank": 1,
      },
      "year:2021--weekday:tuesday-" => Object {
        "currentRank": 5,
        "thenRank": 1,
      },
      "year:2021-month:8-weekday:tuesday-" => Object {
        "currentRank": 5,
        "thenRank": 1,
      },
      "--weekday:tuesday-rokuyou:赤口" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-month:8-weekday:tuesday-rokuyou:赤口" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021--weekday:tuesday-rokuyou:赤口" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021-month:8-weekday:tuesday-rokuyou:赤口" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
    },
    "2021-08-12" => Map {
      "---" => Object {
        "currentRank": 24,
        "thenRank": 8,
      },
      "-month:8--" => Object {
        "currentRank": 24,
        "thenRank": 8,
      },
      "year:2021---" => Object {
        "currentRank": 24,
        "thenRank": 8,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 24,
        "thenRank": 8,
      },
      "---rokuyou:大安" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "-month:8--rokuyou:大安" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "year:2021---rokuyou:大安" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "year:2021-month:8--rokuyou:大安" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "--weekday:thursday-" => Object {
        "currentRank": 3,
        "thenRank": 2,
      },
      "-month:8-weekday:thursday-" => Object {
        "currentRank": 3,
        "thenRank": 2,
      },
      "year:2021--weekday:thursday-" => Object {
        "currentRank": 3,
        "thenRank": 2,
      },
      "year:2021-month:8-weekday:thursday-" => Object {
        "currentRank": 3,
        "thenRank": 2,
      },
    },
    "2021-08-05" => Map {
      "---" => Object {
        "currentRank": 23,
        "thenRank": 3,
      },
      "-month:8--" => Object {
        "currentRank": 23,
        "thenRank": 3,
      },
      "year:2021---" => Object {
        "currentRank": 23,
        "thenRank": 3,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 23,
        "thenRank": 3,
      },
      "---rokuyou:友引" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "-month:8--rokuyou:友引" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "year:2021---rokuyou:友引" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "year:2021-month:8--rokuyou:友引" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "--weekday:thursday-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-month:8-weekday:thursday-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021--weekday:thursday-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021-month:8-weekday:thursday-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
    },
    "2021-08-29" => Map {
      "---" => Object {
        "currentRank": 22,
        "thenRank": 20,
      },
      "-month:8--" => Object {
        "currentRank": 22,
        "thenRank": 20,
      },
      "year:2021---" => Object {
        "currentRank": 22,
        "thenRank": 20,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 22,
        "thenRank": 20,
      },
      "---rokuyou:仏滅" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
      "-month:8--rokuyou:仏滅" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
      "year:2021---rokuyou:仏滅" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
      "year:2021-month:8--rokuyou:仏滅" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
      "--weekday:sunday-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "-month:8-weekday:sunday-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "year:2021--weekday:sunday-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "year:2021-month:8-weekday:sunday-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "--weekday:sunday-rokuyou:仏滅" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-month:8-weekday:sunday-rokuyou:仏滅" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021--weekday:sunday-rokuyou:仏滅" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021-month:8-weekday:sunday-rokuyou:仏滅" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
    },
    "2021-08-16" => Map {
      "---" => Object {
        "currentRank": 21,
        "thenRank": 9,
      },
      "-month:8--" => Object {
        "currentRank": 21,
        "thenRank": 9,
      },
      "year:2021---" => Object {
        "currentRank": 21,
        "thenRank": 9,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 21,
        "thenRank": 9,
      },
      "--weekday:monday-" => Object {
        "currentRank": 5,
        "thenRank": 3,
      },
      "-month:8-weekday:monday-" => Object {
        "currentRank": 5,
        "thenRank": 3,
      },
      "year:2021--weekday:monday-" => Object {
        "currentRank": 5,
        "thenRank": 3,
      },
      "year:2021-month:8-weekday:monday-" => Object {
        "currentRank": 5,
        "thenRank": 3,
      },
      "---rokuyou:先負" => Object {
        "currentRank": 5,
        "thenRank": 3,
      },
      "-month:8--rokuyou:先負" => Object {
        "currentRank": 5,
        "thenRank": 3,
      },
      "year:2021---rokuyou:先負" => Object {
        "currentRank": 5,
        "thenRank": 3,
      },
      "year:2021-month:8--rokuyou:先負" => Object {
        "currentRank": 5,
        "thenRank": 3,
      },
    },
    "2021-08-20" => Map {
      "---" => Object {
        "currentRank": 20,
        "thenRank": 12,
      },
      "-month:8--" => Object {
        "currentRank": 20,
        "thenRank": 12,
      },
      "year:2021---" => Object {
        "currentRank": 20,
        "thenRank": 12,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 20,
        "thenRank": 12,
      },
      "---rokuyou:先勝" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "-month:8--rokuyou:先勝" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "year:2021---rokuyou:先勝" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "year:2021-month:8--rokuyou:先勝" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "--weekday:friday-" => Object {
        "currentRank": 3,
        "thenRank": 2,
      },
      "-month:8-weekday:friday-" => Object {
        "currentRank": 3,
        "thenRank": 2,
      },
      "year:2021--weekday:friday-" => Object {
        "currentRank": 3,
        "thenRank": 2,
      },
      "year:2021-month:8-weekday:friday-" => Object {
        "currentRank": 3,
        "thenRank": 2,
      },
    },
    "2021-08-22" => Map {
      "---" => Object {
        "currentRank": 19,
        "thenRank": 12,
      },
      "-month:8--" => Object {
        "currentRank": 19,
        "thenRank": 12,
      },
      "year:2021---" => Object {
        "currentRank": 19,
        "thenRank": 12,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 19,
        "thenRank": 12,
      },
      "--weekday:sunday-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "-month:8-weekday:sunday-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "year:2021--weekday:sunday-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "year:2021-month:8-weekday:sunday-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "---rokuyou:先負" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
      "-month:8--rokuyou:先負" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
      "year:2021---rokuyou:先負" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
      "year:2021-month:8--rokuyou:先負" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
    },
    "2021-08-18" => Map {
      "---" => Object {
        "currentRank": 18,
        "thenRank": 10,
      },
      "-month:8--" => Object {
        "currentRank": 18,
        "thenRank": 10,
      },
      "year:2021---" => Object {
        "currentRank": 18,
        "thenRank": 10,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 18,
        "thenRank": 10,
      },
      "---rokuyou:大安" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "-month:8--rokuyou:大安" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "year:2021---rokuyou:大安" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "year:2021-month:8--rokuyou:大安" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "--weekday:wednesday-" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
      "-month:8-weekday:wednesday-" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
      "year:2021--weekday:wednesday-" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
      "year:2021-month:8-weekday:wednesday-" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
    },
    "2021-08-06" => Map {
      "---" => Object {
        "currentRank": 17,
        "thenRank": 3,
      },
      "-month:8--" => Object {
        "currentRank": 17,
        "thenRank": 3,
      },
      "year:2021---" => Object {
        "currentRank": 17,
        "thenRank": 3,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 17,
        "thenRank": 3,
      },
      "---rokuyou:先負" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "-month:8--rokuyou:先負" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "year:2021---rokuyou:先負" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "year:2021-month:8--rokuyou:先負" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "--weekday:friday-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-month:8-weekday:friday-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021--weekday:friday-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021-month:8-weekday:friday-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
    },
    "2021-08-09" => Map {
      "---" => Object {
        "currentRank": 16,
        "thenRank": 3,
      },
      "-month:8--" => Object {
        "currentRank": 16,
        "thenRank": 3,
      },
      "year:2021---" => Object {
        "currentRank": 16,
        "thenRank": 3,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 16,
        "thenRank": 3,
      },
      "--weekday:monday-" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "-month:8-weekday:monday-" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "year:2021--weekday:monday-" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "year:2021-month:8-weekday:monday-" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "---rokuyou:友引" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "-month:8--rokuyou:友引" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "year:2021---rokuyou:友引" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "year:2021-month:8--rokuyou:友引" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
    },
    "2021-08-19" => Map {
      "---" => Object {
        "currentRank": 15,
        "thenRank": 8,
      },
      "-month:8--" => Object {
        "currentRank": 15,
        "thenRank": 8,
      },
      "year:2021---" => Object {
        "currentRank": 15,
        "thenRank": 8,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 15,
        "thenRank": 8,
      },
      "---rokuyou:赤口" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "-month:8--rokuyou:赤口" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "year:2021---rokuyou:赤口" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "year:2021-month:8--rokuyou:赤口" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "--weekday:thursday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-month:8-weekday:thursday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021--weekday:thursday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021-month:8-weekday:thursday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
    },
    "2021-08-25" => Map {
      "---" => Object {
        "currentRank": 14,
        "thenRank": 10,
      },
      "-month:8--" => Object {
        "currentRank": 14,
        "thenRank": 10,
      },
      "year:2021---" => Object {
        "currentRank": 14,
        "thenRank": 10,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 14,
        "thenRank": 10,
      },
      "---rokuyou:赤口" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-month:8--rokuyou:赤口" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021---rokuyou:赤口" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021-month:8--rokuyou:赤口" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "--weekday:wednesday-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "-month:8-weekday:wednesday-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "year:2021--weekday:wednesday-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "year:2021-month:8-weekday:wednesday-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
    },
    "2021-08-10" => Map {
      "---" => Object {
        "currentRank": 13,
        "thenRank": 3,
      },
      "-month:8--" => Object {
        "currentRank": 13,
        "thenRank": 3,
      },
      "year:2021---" => Object {
        "currentRank": 13,
        "thenRank": 3,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 13,
        "thenRank": 3,
      },
      "--weekday:tuesday-" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "-month:8-weekday:tuesday-" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "year:2021--weekday:tuesday-" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "year:2021-month:8-weekday:tuesday-" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "---rokuyou:先負" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-month:8--rokuyou:先負" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021---rokuyou:先負" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021-month:8--rokuyou:先負" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
    },
    "2021-08-30" => Map {
      "---" => Object {
        "currentRank": 12,
        "thenRank": 11,
      },
      "-month:8--" => Object {
        "currentRank": 12,
        "thenRank": 11,
      },
      "year:2021---" => Object {
        "currentRank": 12,
        "thenRank": 11,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 12,
        "thenRank": 11,
      },
      "---rokuyou:大安" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "-month:8--rokuyou:大安" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "year:2021---rokuyou:大安" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "year:2021-month:8--rokuyou:大安" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "--weekday:monday-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "-month:8-weekday:monday-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "year:2021--weekday:monday-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "year:2021-month:8-weekday:monday-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "--weekday:monday-rokuyou:大安" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "-month:8-weekday:monday-rokuyou:大安" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "year:2021--weekday:monday-rokuyou:大安" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "year:2021-month:8-weekday:monday-rokuyou:大安" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
    },
    "2021-08-28" => Map {
      "---" => Object {
        "currentRank": 11,
        "thenRank": 10,
      },
      "-month:8--" => Object {
        "currentRank": 11,
        "thenRank": 10,
      },
      "year:2021---" => Object {
        "currentRank": 11,
        "thenRank": 10,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 11,
        "thenRank": 10,
      },
      "---rokuyou:先負" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-month:8--rokuyou:先負" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021---rokuyou:先負" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021-month:8--rokuyou:先負" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "--weekday:saturday-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "-month:8-weekday:saturday-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "year:2021--weekday:saturday-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "year:2021-month:8-weekday:saturday-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
    },
    "2021-08-15" => Map {
      "---" => Object {
        "currentRank": 10,
        "thenRank": 5,
      },
      "-month:8--" => Object {
        "currentRank": 10,
        "thenRank": 5,
      },
      "year:2021---" => Object {
        "currentRank": 10,
        "thenRank": 5,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 10,
        "thenRank": 5,
      },
      "--weekday:sunday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-month:8-weekday:sunday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021--weekday:sunday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021-month:8-weekday:sunday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "---rokuyou:友引" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-month:8--rokuyou:友引" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021---rokuyou:友引" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021-month:8--rokuyou:友引" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
    },
    "2021-08-23" => Map {
      "---" => Object {
        "currentRank": 9,
        "thenRank": 6,
      },
      "-month:8--" => Object {
        "currentRank": 9,
        "thenRank": 6,
      },
      "year:2021---" => Object {
        "currentRank": 9,
        "thenRank": 6,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 9,
        "thenRank": 6,
      },
      "---rokuyou:仏滅" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "-month:8--rokuyou:仏滅" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "year:2021---rokuyou:仏滅" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "year:2021-month:8--rokuyou:仏滅" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "--weekday:monday-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "-month:8-weekday:monday-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "year:2021--weekday:monday-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "year:2021-month:8-weekday:monday-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
    },
    "2021-08-31" => Map {
      "---" => Object {
        "currentRank": 8,
        "thenRank": 8,
      },
      "-month:8--" => Object {
        "currentRank": 8,
        "thenRank": 8,
      },
      "year:2021---" => Object {
        "currentRank": 8,
        "thenRank": 8,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 8,
        "thenRank": 8,
      },
      "---rokuyou:赤口" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-month:8--rokuyou:赤口" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021---rokuyou:赤口" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021-month:8--rokuyou:赤口" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "--weekday:tuesday-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "-month:8-weekday:tuesday-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "year:2021--weekday:tuesday-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "year:2021-month:8-weekday:tuesday-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "--weekday:tuesday-rokuyou:赤口" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-month:8-weekday:tuesday-rokuyou:赤口" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021--weekday:tuesday-rokuyou:赤口" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021-month:8-weekday:tuesday-rokuyou:赤口" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
    },
    "2021-08-14" => Map {
      "---" => Object {
        "currentRank": 7,
        "thenRank": 4,
      },
      "-month:8--" => Object {
        "currentRank": 7,
        "thenRank": 4,
      },
      "year:2021---" => Object {
        "currentRank": 7,
        "thenRank": 4,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 7,
        "thenRank": 4,
      },
      "---rokuyou:先勝" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "-month:8--rokuyou:先勝" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "year:2021---rokuyou:先勝" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "year:2021-month:8--rokuyou:先勝" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "--weekday:saturday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-month:8-weekday:saturday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021--weekday:saturday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021-month:8-weekday:saturday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
    },
    "2021-08-04" => Map {
      "---" => Object {
        "currentRank": 6,
        "thenRank": 2,
      },
      "-month:8--" => Object {
        "currentRank": 6,
        "thenRank": 2,
      },
      "year:2021---" => Object {
        "currentRank": 6,
        "thenRank": 2,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 6,
        "thenRank": 2,
      },
      "---rokuyou:先勝" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-month:8--rokuyou:先勝" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021---rokuyou:先勝" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021-month:8--rokuyou:先勝" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "--weekday:wednesday-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-month:8-weekday:wednesday-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021--weekday:wednesday-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021-month:8-weekday:wednesday-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
    },
    "2021-08-27" => Map {
      "---" => Object {
        "currentRank": 5,
        "thenRank": 5,
      },
      "-month:8--" => Object {
        "currentRank": 5,
        "thenRank": 5,
      },
      "year:2021---" => Object {
        "currentRank": 5,
        "thenRank": 5,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 5,
        "thenRank": 5,
      },
      "---rokuyou:友引" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-month:8--rokuyou:友引" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021---rokuyou:友引" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021-month:8--rokuyou:友引" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "--weekday:friday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-month:8-weekday:friday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021--weekday:friday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021-month:8-weekday:friday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
    },
    "2021-08-11" => Map {
      "---" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "-month:8--" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "year:2021---" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "---rokuyou:仏滅" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-month:8--rokuyou:仏滅" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021---rokuyou:仏滅" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021-month:8--rokuyou:仏滅" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "--weekday:wednesday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-month:8-weekday:wednesday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021--weekday:wednesday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021-month:8-weekday:wednesday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
    },
    "2021-08-02" => Map {
      "---" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "-month:8--" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "year:2021---" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "---rokuyou:大安" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-month:8--rokuyou:大安" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021---rokuyou:大安" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021-month:8--rokuyou:大安" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "--weekday:monday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-month:8-weekday:monday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021--weekday:monday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021-month:8-weekday:monday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "--weekday:monday-rokuyou:大安" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-month:8-weekday:monday-rokuyou:大安" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021--weekday:monday-rokuyou:大安" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021-month:8-weekday:monday-rokuyou:大安" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
    },
    "2021-08-17" => Map {
      "---" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-month:8--" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021---" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "---rokuyou:仏滅" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-month:8--rokuyou:仏滅" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021---rokuyou:仏滅" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021-month:8--rokuyou:仏滅" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "--weekday:tuesday-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-month:8-weekday:tuesday-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021--weekday:tuesday-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "year:2021-month:8-weekday:tuesday-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
    },
    "2021-08-24" => Map {
      "---" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-month:8--" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021---" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021-month:8--" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "---rokuyou:大安" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-month:8--rokuyou:大安" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021---rokuyou:大安" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021-month:8--rokuyou:大安" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "--weekday:tuesday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-month:8-weekday:tuesday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021--weekday:tuesday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "year:2021-month:8-weekday:tuesday-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
    },
  },
}
`);
});
