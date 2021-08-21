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
    "-8--" => Object {
      "characteristic": Object {
        "month": 8,
      },
      "count": 31,
      "rarity": 12,
    },
    "2021---" => Object {
      "characteristic": Object {
        "year": 2021,
      },
      "count": 31,
      "rarity": 1.01,
    },
    "2021-8--" => Object {
      "characteristic": Object {
        "month": 8,
        "year": 2021,
      },
      "count": 31,
      "rarity": 12.120000000000001,
    },
    "---仏滅" => Object {
      "characteristic": Object {
        "rokuyou": "仏滅",
      },
      "count": 6,
      "rarity": 6,
    },
    "-8--仏滅" => Object {
      "characteristic": Object {
        "month": 8,
        "rokuyou": "仏滅",
      },
      "count": 6,
      "rarity": 72,
    },
    "2021---仏滅" => Object {
      "characteristic": Object {
        "rokuyou": "仏滅",
        "year": 2021,
      },
      "count": 6,
      "rarity": 6.0600000000000005,
    },
    "2021-8--仏滅" => Object {
      "characteristic": Object {
        "month": 8,
        "rokuyou": "仏滅",
        "year": 2021,
      },
      "count": 6,
      "rarity": 72.72,
    },
    "--7-" => Object {
      "characteristic": Object {
        "weekDay": 7,
      },
      "count": 5,
      "rarity": 7,
    },
    "-8-7-" => Object {
      "characteristic": Object {
        "month": 8,
        "weekDay": 7,
      },
      "count": 5,
      "rarity": 84,
    },
    "2021--7-" => Object {
      "characteristic": Object {
        "weekDay": 7,
        "year": 2021,
      },
      "count": 5,
      "rarity": 7.07,
    },
    "2021-8-7-" => Object {
      "characteristic": Object {
        "month": 8,
        "weekDay": 7,
        "year": 2021,
      },
      "count": 5,
      "rarity": 84.84,
    },
    "--7-仏滅" => Object {
      "characteristic": Object {
        "rokuyou": "仏滅",
        "weekDay": 7,
      },
      "count": 2,
      "rarity": 42,
    },
    "-8-7-仏滅" => Object {
      "characteristic": Object {
        "month": 8,
        "rokuyou": "仏滅",
        "weekDay": 7,
      },
      "count": 2,
      "rarity": 504,
    },
    "2021--7-仏滅" => Object {
      "characteristic": Object {
        "rokuyou": "仏滅",
        "weekDay": 7,
        "year": 2021,
      },
      "count": 2,
      "rarity": 42.42,
    },
    "2021-8-7-仏滅" => Object {
      "characteristic": Object {
        "month": 8,
        "rokuyou": "仏滅",
        "weekDay": 7,
        "year": 2021,
      },
      "count": 2,
      "rarity": 509.04,
    },
    "---大安" => Object {
      "characteristic": Object {
        "rokuyou": "大安",
      },
      "count": 5,
      "rarity": 6,
    },
    "-8--大安" => Object {
      "characteristic": Object {
        "month": 8,
        "rokuyou": "大安",
      },
      "count": 5,
      "rarity": 72,
    },
    "2021---大安" => Object {
      "characteristic": Object {
        "rokuyou": "大安",
        "year": 2021,
      },
      "count": 5,
      "rarity": 6.0600000000000005,
    },
    "2021-8--大安" => Object {
      "characteristic": Object {
        "month": 8,
        "rokuyou": "大安",
        "year": 2021,
      },
      "count": 5,
      "rarity": 72.72,
    },
    "--1-" => Object {
      "characteristic": Object {
        "weekDay": 1,
      },
      "count": 5,
      "rarity": 7,
    },
    "-8-1-" => Object {
      "characteristic": Object {
        "month": 8,
        "weekDay": 1,
      },
      "count": 5,
      "rarity": 84,
    },
    "2021--1-" => Object {
      "characteristic": Object {
        "weekDay": 1,
        "year": 2021,
      },
      "count": 5,
      "rarity": 7.07,
    },
    "2021-8-1-" => Object {
      "characteristic": Object {
        "month": 8,
        "weekDay": 1,
        "year": 2021,
      },
      "count": 5,
      "rarity": 84.84,
    },
    "--1-大安" => Object {
      "characteristic": Object {
        "rokuyou": "大安",
        "weekDay": 1,
      },
      "count": 2,
      "rarity": 42,
    },
    "-8-1-大安" => Object {
      "characteristic": Object {
        "month": 8,
        "rokuyou": "大安",
        "weekDay": 1,
      },
      "count": 2,
      "rarity": 504,
    },
    "2021--1-大安" => Object {
      "characteristic": Object {
        "rokuyou": "大安",
        "weekDay": 1,
        "year": 2021,
      },
      "count": 2,
      "rarity": 42.42,
    },
    "2021-8-1-大安" => Object {
      "characteristic": Object {
        "month": 8,
        "rokuyou": "大安",
        "weekDay": 1,
        "year": 2021,
      },
      "count": 2,
      "rarity": 509.04,
    },
    "---赤口" => Object {
      "characteristic": Object {
        "rokuyou": "赤口",
      },
      "count": 5,
      "rarity": 6,
    },
    "-8--赤口" => Object {
      "characteristic": Object {
        "month": 8,
        "rokuyou": "赤口",
      },
      "count": 5,
      "rarity": 72,
    },
    "2021---赤口" => Object {
      "characteristic": Object {
        "rokuyou": "赤口",
        "year": 2021,
      },
      "count": 5,
      "rarity": 6.0600000000000005,
    },
    "2021-8--赤口" => Object {
      "characteristic": Object {
        "month": 8,
        "rokuyou": "赤口",
        "year": 2021,
      },
      "count": 5,
      "rarity": 72.72,
    },
    "--2-" => Object {
      "characteristic": Object {
        "weekDay": 2,
      },
      "count": 5,
      "rarity": 7,
    },
    "-8-2-" => Object {
      "characteristic": Object {
        "month": 8,
        "weekDay": 2,
      },
      "count": 5,
      "rarity": 84,
    },
    "2021--2-" => Object {
      "characteristic": Object {
        "weekDay": 2,
        "year": 2021,
      },
      "count": 5,
      "rarity": 7.07,
    },
    "2021-8-2-" => Object {
      "characteristic": Object {
        "month": 8,
        "weekDay": 2,
        "year": 2021,
      },
      "count": 5,
      "rarity": 84.84,
    },
    "--2-赤口" => Object {
      "characteristic": Object {
        "rokuyou": "赤口",
        "weekDay": 2,
      },
      "count": 2,
      "rarity": 42,
    },
    "-8-2-赤口" => Object {
      "characteristic": Object {
        "month": 8,
        "rokuyou": "赤口",
        "weekDay": 2,
      },
      "count": 2,
      "rarity": 504,
    },
    "2021--2-赤口" => Object {
      "characteristic": Object {
        "rokuyou": "赤口",
        "weekDay": 2,
        "year": 2021,
      },
      "count": 2,
      "rarity": 42.42,
    },
    "2021-8-2-赤口" => Object {
      "characteristic": Object {
        "month": 8,
        "rokuyou": "赤口",
        "weekDay": 2,
        "year": 2021,
      },
      "count": 2,
      "rarity": 509.04,
    },
    "---先勝" => Object {
      "characteristic": Object {
        "rokuyou": "先勝",
      },
      "count": 5,
      "rarity": 6,
    },
    "-8--先勝" => Object {
      "characteristic": Object {
        "month": 8,
        "rokuyou": "先勝",
      },
      "count": 5,
      "rarity": 72,
    },
    "2021---先勝" => Object {
      "characteristic": Object {
        "rokuyou": "先勝",
        "year": 2021,
      },
      "count": 5,
      "rarity": 6.0600000000000005,
    },
    "2021-8--先勝" => Object {
      "characteristic": Object {
        "month": 8,
        "rokuyou": "先勝",
        "year": 2021,
      },
      "count": 5,
      "rarity": 72.72,
    },
    "--3-" => Object {
      "characteristic": Object {
        "weekDay": 3,
      },
      "count": 4,
      "rarity": 7,
    },
    "-8-3-" => Object {
      "characteristic": Object {
        "month": 8,
        "weekDay": 3,
      },
      "count": 4,
      "rarity": 84,
    },
    "2021--3-" => Object {
      "characteristic": Object {
        "weekDay": 3,
        "year": 2021,
      },
      "count": 4,
      "rarity": 7.07,
    },
    "2021-8-3-" => Object {
      "characteristic": Object {
        "month": 8,
        "weekDay": 3,
        "year": 2021,
      },
      "count": 4,
      "rarity": 84.84,
    },
    "---友引" => Object {
      "characteristic": Object {
        "rokuyou": "友引",
      },
      "count": 5,
      "rarity": 6,
    },
    "-8--友引" => Object {
      "characteristic": Object {
        "month": 8,
        "rokuyou": "友引",
      },
      "count": 5,
      "rarity": 72,
    },
    "2021---友引" => Object {
      "characteristic": Object {
        "rokuyou": "友引",
        "year": 2021,
      },
      "count": 5,
      "rarity": 6.0600000000000005,
    },
    "2021-8--友引" => Object {
      "characteristic": Object {
        "month": 8,
        "rokuyou": "友引",
        "year": 2021,
      },
      "count": 5,
      "rarity": 72.72,
    },
    "--4-" => Object {
      "characteristic": Object {
        "weekDay": 4,
      },
      "count": 4,
      "rarity": 7,
    },
    "-8-4-" => Object {
      "characteristic": Object {
        "month": 8,
        "weekDay": 4,
      },
      "count": 4,
      "rarity": 84,
    },
    "2021--4-" => Object {
      "characteristic": Object {
        "weekDay": 4,
        "year": 2021,
      },
      "count": 4,
      "rarity": 7.07,
    },
    "2021-8-4-" => Object {
      "characteristic": Object {
        "month": 8,
        "weekDay": 4,
        "year": 2021,
      },
      "count": 4,
      "rarity": 84.84,
    },
    "---先負" => Object {
      "characteristic": Object {
        "rokuyou": "先負",
      },
      "count": 5,
      "rarity": 6,
    },
    "-8--先負" => Object {
      "characteristic": Object {
        "month": 8,
        "rokuyou": "先負",
      },
      "count": 5,
      "rarity": 72,
    },
    "2021---先負" => Object {
      "characteristic": Object {
        "rokuyou": "先負",
        "year": 2021,
      },
      "count": 5,
      "rarity": 6.0600000000000005,
    },
    "2021-8--先負" => Object {
      "characteristic": Object {
        "month": 8,
        "rokuyou": "先負",
        "year": 2021,
      },
      "count": 5,
      "rarity": 72.72,
    },
    "--5-" => Object {
      "characteristic": Object {
        "weekDay": 5,
      },
      "count": 4,
      "rarity": 7,
    },
    "-8-5-" => Object {
      "characteristic": Object {
        "month": 8,
        "weekDay": 5,
      },
      "count": 4,
      "rarity": 84,
    },
    "2021--5-" => Object {
      "characteristic": Object {
        "weekDay": 5,
        "year": 2021,
      },
      "count": 4,
      "rarity": 7.07,
    },
    "2021-8-5-" => Object {
      "characteristic": Object {
        "month": 8,
        "weekDay": 5,
        "year": 2021,
      },
      "count": 4,
      "rarity": 84.84,
    },
    "--6-" => Object {
      "characteristic": Object {
        "weekDay": 6,
      },
      "count": 4,
      "rarity": 7,
    },
    "-8-6-" => Object {
      "characteristic": Object {
        "month": 8,
        "weekDay": 6,
      },
      "count": 4,
      "rarity": 84,
    },
    "2021--6-" => Object {
      "characteristic": Object {
        "weekDay": 6,
        "year": 2021,
      },
      "count": 4,
      "rarity": 7.07,
    },
    "2021-8-6-" => Object {
      "characteristic": Object {
        "month": 8,
        "weekDay": 6,
        "year": 2021,
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
      "-8--" => Object {
        "currentRank": 31,
        "thenRank": 13,
      },
      "2021---" => Object {
        "currentRank": 31,
        "thenRank": 13,
      },
      "2021-8--" => Object {
        "currentRank": 31,
        "thenRank": 13,
      },
      "---赤口" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "-8--赤口" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "2021---赤口" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "2021-8--赤口" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "--5-" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "-8-5-" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "2021--5-" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "2021-8-5-" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
    },
    "2021-08-08" => Map {
      "---" => Object {
        "currentRank": 30,
        "thenRank": 8,
      },
      "-8--" => Object {
        "currentRank": 30,
        "thenRank": 8,
      },
      "2021---" => Object {
        "currentRank": 30,
        "thenRank": 8,
      },
      "2021-8--" => Object {
        "currentRank": 30,
        "thenRank": 8,
      },
      "--7-" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "-8-7-" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "2021--7-" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "2021-8-7-" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "---先勝" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "-8--先勝" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "2021---先勝" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "2021-8--先勝" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
    },
    "2021-08-21" => Map {
      "---" => Object {
        "currentRank": 29,
        "thenRank": 19,
      },
      "-8--" => Object {
        "currentRank": 29,
        "thenRank": 19,
      },
      "2021---" => Object {
        "currentRank": 29,
        "thenRank": 19,
      },
      "2021-8--" => Object {
        "currentRank": 29,
        "thenRank": 19,
      },
      "---友引" => Object {
        "currentRank": 5,
        "thenRank": 4,
      },
      "-8--友引" => Object {
        "currentRank": 5,
        "thenRank": 4,
      },
      "2021---友引" => Object {
        "currentRank": 5,
        "thenRank": 4,
      },
      "2021-8--友引" => Object {
        "currentRank": 5,
        "thenRank": 4,
      },
      "--6-" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
      "-8-6-" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
      "2021--6-" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
      "2021-8-6-" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
    },
    "2021-08-26" => Map {
      "---" => Object {
        "currentRank": 28,
        "thenRank": 23,
      },
      "-8--" => Object {
        "currentRank": 28,
        "thenRank": 23,
      },
      "2021---" => Object {
        "currentRank": 28,
        "thenRank": 23,
      },
      "2021-8--" => Object {
        "currentRank": 28,
        "thenRank": 23,
      },
      "---先勝" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
      "-8--先勝" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
      "2021---先勝" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
      "2021-8--先勝" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
      "--4-" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
      "-8-4-" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
      "2021--4-" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
      "2021-8-4-" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
    },
    "2021-08-01" => Map {
      "---" => Object {
        "currentRank": 27,
        "thenRank": 1,
      },
      "-8--" => Object {
        "currentRank": 27,
        "thenRank": 1,
      },
      "2021---" => Object {
        "currentRank": 27,
        "thenRank": 1,
      },
      "2021-8--" => Object {
        "currentRank": 27,
        "thenRank": 1,
      },
      "---仏滅" => Object {
        "currentRank": 6,
        "thenRank": 1,
      },
      "-8--仏滅" => Object {
        "currentRank": 6,
        "thenRank": 1,
      },
      "2021---仏滅" => Object {
        "currentRank": 6,
        "thenRank": 1,
      },
      "2021-8--仏滅" => Object {
        "currentRank": 6,
        "thenRank": 1,
      },
      "--7-" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "-8-7-" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "2021--7-" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "2021-8-7-" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "--7-仏滅" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-8-7-仏滅" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021--7-仏滅" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021-8-7-仏滅" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
    },
    "2021-08-07" => Map {
      "---" => Object {
        "currentRank": 26,
        "thenRank": 6,
      },
      "-8--" => Object {
        "currentRank": 26,
        "thenRank": 6,
      },
      "2021---" => Object {
        "currentRank": 26,
        "thenRank": 6,
      },
      "2021-8--" => Object {
        "currentRank": 26,
        "thenRank": 6,
      },
      "---仏滅" => Object {
        "currentRank": 5,
        "thenRank": 1,
      },
      "-8--仏滅" => Object {
        "currentRank": 5,
        "thenRank": 1,
      },
      "2021---仏滅" => Object {
        "currentRank": 5,
        "thenRank": 1,
      },
      "2021-8--仏滅" => Object {
        "currentRank": 5,
        "thenRank": 1,
      },
      "--6-" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "-8-6-" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "2021--6-" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "2021-8-6-" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
    },
    "2021-08-03" => Map {
      "---" => Object {
        "currentRank": 25,
        "thenRank": 2,
      },
      "-8--" => Object {
        "currentRank": 25,
        "thenRank": 2,
      },
      "2021---" => Object {
        "currentRank": 25,
        "thenRank": 2,
      },
      "2021-8--" => Object {
        "currentRank": 25,
        "thenRank": 2,
      },
      "---赤口" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "-8--赤口" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "2021---赤口" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "2021-8--赤口" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "--2-" => Object {
        "currentRank": 5,
        "thenRank": 1,
      },
      "-8-2-" => Object {
        "currentRank": 5,
        "thenRank": 1,
      },
      "2021--2-" => Object {
        "currentRank": 5,
        "thenRank": 1,
      },
      "2021-8-2-" => Object {
        "currentRank": 5,
        "thenRank": 1,
      },
      "--2-赤口" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-8-2-赤口" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021--2-赤口" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021-8-2-赤口" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
    },
    "2021-08-12" => Map {
      "---" => Object {
        "currentRank": 24,
        "thenRank": 8,
      },
      "-8--" => Object {
        "currentRank": 24,
        "thenRank": 8,
      },
      "2021---" => Object {
        "currentRank": 24,
        "thenRank": 8,
      },
      "2021-8--" => Object {
        "currentRank": 24,
        "thenRank": 8,
      },
      "---大安" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "-8--大安" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "2021---大安" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "2021-8--大安" => Object {
        "currentRank": 5,
        "thenRank": 2,
      },
      "--4-" => Object {
        "currentRank": 3,
        "thenRank": 2,
      },
      "-8-4-" => Object {
        "currentRank": 3,
        "thenRank": 2,
      },
      "2021--4-" => Object {
        "currentRank": 3,
        "thenRank": 2,
      },
      "2021-8-4-" => Object {
        "currentRank": 3,
        "thenRank": 2,
      },
    },
    "2021-08-05" => Map {
      "---" => Object {
        "currentRank": 23,
        "thenRank": 3,
      },
      "-8--" => Object {
        "currentRank": 23,
        "thenRank": 3,
      },
      "2021---" => Object {
        "currentRank": 23,
        "thenRank": 3,
      },
      "2021-8--" => Object {
        "currentRank": 23,
        "thenRank": 3,
      },
      "---友引" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "-8--友引" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "2021---友引" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "2021-8--友引" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "--4-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-8-4-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021--4-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021-8-4-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
    },
    "2021-08-29" => Map {
      "---" => Object {
        "currentRank": 22,
        "thenRank": 20,
      },
      "-8--" => Object {
        "currentRank": 22,
        "thenRank": 20,
      },
      "2021---" => Object {
        "currentRank": 22,
        "thenRank": 20,
      },
      "2021-8--" => Object {
        "currentRank": 22,
        "thenRank": 20,
      },
      "---仏滅" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
      "-8--仏滅" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
      "2021---仏滅" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
      "2021-8--仏滅" => Object {
        "currentRank": 4,
        "thenRank": 4,
      },
      "--7-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "-8-7-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "2021--7-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "2021-8-7-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "--7-仏滅" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-8-7-仏滅" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021--7-仏滅" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021-8-7-仏滅" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
    },
    "2021-08-16" => Map {
      "---" => Object {
        "currentRank": 21,
        "thenRank": 9,
      },
      "-8--" => Object {
        "currentRank": 21,
        "thenRank": 9,
      },
      "2021---" => Object {
        "currentRank": 21,
        "thenRank": 9,
      },
      "2021-8--" => Object {
        "currentRank": 21,
        "thenRank": 9,
      },
      "--1-" => Object {
        "currentRank": 5,
        "thenRank": 3,
      },
      "-8-1-" => Object {
        "currentRank": 5,
        "thenRank": 3,
      },
      "2021--1-" => Object {
        "currentRank": 5,
        "thenRank": 3,
      },
      "2021-8-1-" => Object {
        "currentRank": 5,
        "thenRank": 3,
      },
      "---先負" => Object {
        "currentRank": 5,
        "thenRank": 3,
      },
      "-8--先負" => Object {
        "currentRank": 5,
        "thenRank": 3,
      },
      "2021---先負" => Object {
        "currentRank": 5,
        "thenRank": 3,
      },
      "2021-8--先負" => Object {
        "currentRank": 5,
        "thenRank": 3,
      },
    },
    "2021-08-20" => Map {
      "---" => Object {
        "currentRank": 20,
        "thenRank": 12,
      },
      "-8--" => Object {
        "currentRank": 20,
        "thenRank": 12,
      },
      "2021---" => Object {
        "currentRank": 20,
        "thenRank": 12,
      },
      "2021-8--" => Object {
        "currentRank": 20,
        "thenRank": 12,
      },
      "---先勝" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "-8--先勝" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "2021---先勝" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "2021-8--先勝" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "--5-" => Object {
        "currentRank": 3,
        "thenRank": 2,
      },
      "-8-5-" => Object {
        "currentRank": 3,
        "thenRank": 2,
      },
      "2021--5-" => Object {
        "currentRank": 3,
        "thenRank": 2,
      },
      "2021-8-5-" => Object {
        "currentRank": 3,
        "thenRank": 2,
      },
    },
    "2021-08-22" => Map {
      "---" => Object {
        "currentRank": 19,
        "thenRank": 12,
      },
      "-8--" => Object {
        "currentRank": 19,
        "thenRank": 12,
      },
      "2021---" => Object {
        "currentRank": 19,
        "thenRank": 12,
      },
      "2021-8--" => Object {
        "currentRank": 19,
        "thenRank": 12,
      },
      "--7-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "-8-7-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "2021--7-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "2021-8-7-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "---先負" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
      "-8--先負" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
      "2021---先負" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
      "2021-8--先負" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
    },
    "2021-08-18" => Map {
      "---" => Object {
        "currentRank": 18,
        "thenRank": 10,
      },
      "-8--" => Object {
        "currentRank": 18,
        "thenRank": 10,
      },
      "2021---" => Object {
        "currentRank": 18,
        "thenRank": 10,
      },
      "2021-8--" => Object {
        "currentRank": 18,
        "thenRank": 10,
      },
      "---大安" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "-8--大安" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "2021---大安" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "2021-8--大安" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "--3-" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
      "-8-3-" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
      "2021--3-" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
      "2021-8-3-" => Object {
        "currentRank": 4,
        "thenRank": 3,
      },
    },
    "2021-08-06" => Map {
      "---" => Object {
        "currentRank": 17,
        "thenRank": 3,
      },
      "-8--" => Object {
        "currentRank": 17,
        "thenRank": 3,
      },
      "2021---" => Object {
        "currentRank": 17,
        "thenRank": 3,
      },
      "2021-8--" => Object {
        "currentRank": 17,
        "thenRank": 3,
      },
      "---先負" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "-8--先負" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "2021---先負" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "2021-8--先負" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "--5-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-8-5-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021--5-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021-8-5-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
    },
    "2021-08-09" => Map {
      "---" => Object {
        "currentRank": 16,
        "thenRank": 3,
      },
      "-8--" => Object {
        "currentRank": 16,
        "thenRank": 3,
      },
      "2021---" => Object {
        "currentRank": 16,
        "thenRank": 3,
      },
      "2021-8--" => Object {
        "currentRank": 16,
        "thenRank": 3,
      },
      "--1-" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "-8-1-" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "2021--1-" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "2021-8-1-" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "---友引" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "-8--友引" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "2021---友引" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "2021-8--友引" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
    },
    "2021-08-19" => Map {
      "---" => Object {
        "currentRank": 15,
        "thenRank": 8,
      },
      "-8--" => Object {
        "currentRank": 15,
        "thenRank": 8,
      },
      "2021---" => Object {
        "currentRank": 15,
        "thenRank": 8,
      },
      "2021-8--" => Object {
        "currentRank": 15,
        "thenRank": 8,
      },
      "---赤口" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "-8--赤口" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "2021---赤口" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "2021-8--赤口" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "--4-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-8-4-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021--4-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021-8-4-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
    },
    "2021-08-25" => Map {
      "---" => Object {
        "currentRank": 14,
        "thenRank": 10,
      },
      "-8--" => Object {
        "currentRank": 14,
        "thenRank": 10,
      },
      "2021---" => Object {
        "currentRank": 14,
        "thenRank": 10,
      },
      "2021-8--" => Object {
        "currentRank": 14,
        "thenRank": 10,
      },
      "---赤口" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-8--赤口" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021---赤口" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021-8--赤口" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "--3-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "-8-3-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "2021--3-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "2021-8-3-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
    },
    "2021-08-10" => Map {
      "---" => Object {
        "currentRank": 13,
        "thenRank": 3,
      },
      "-8--" => Object {
        "currentRank": 13,
        "thenRank": 3,
      },
      "2021---" => Object {
        "currentRank": 13,
        "thenRank": 3,
      },
      "2021-8--" => Object {
        "currentRank": 13,
        "thenRank": 3,
      },
      "--2-" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "-8-2-" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "2021--2-" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "2021-8-2-" => Object {
        "currentRank": 4,
        "thenRank": 1,
      },
      "---先負" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-8--先負" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021---先負" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021-8--先負" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
    },
    "2021-08-30" => Map {
      "---" => Object {
        "currentRank": 12,
        "thenRank": 11,
      },
      "-8--" => Object {
        "currentRank": 12,
        "thenRank": 11,
      },
      "2021---" => Object {
        "currentRank": 12,
        "thenRank": 11,
      },
      "2021-8--" => Object {
        "currentRank": 12,
        "thenRank": 11,
      },
      "---大安" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "-8--大安" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "2021---大安" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "2021-8--大安" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "--1-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "-8-1-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "2021--1-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "2021-8-1-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "--1-大安" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "-8-1-大安" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "2021--1-大安" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "2021-8-1-大安" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
    },
    "2021-08-28" => Map {
      "---" => Object {
        "currentRank": 11,
        "thenRank": 10,
      },
      "-8--" => Object {
        "currentRank": 11,
        "thenRank": 10,
      },
      "2021---" => Object {
        "currentRank": 11,
        "thenRank": 10,
      },
      "2021-8--" => Object {
        "currentRank": 11,
        "thenRank": 10,
      },
      "---先負" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-8--先負" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021---先負" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021-8--先負" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "--6-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "-8-6-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "2021--6-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "2021-8-6-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
    },
    "2021-08-15" => Map {
      "---" => Object {
        "currentRank": 10,
        "thenRank": 5,
      },
      "-8--" => Object {
        "currentRank": 10,
        "thenRank": 5,
      },
      "2021---" => Object {
        "currentRank": 10,
        "thenRank": 5,
      },
      "2021-8--" => Object {
        "currentRank": 10,
        "thenRank": 5,
      },
      "--7-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-8-7-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021--7-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021-8-7-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "---友引" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-8--友引" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021---友引" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021-8--友引" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
    },
    "2021-08-23" => Map {
      "---" => Object {
        "currentRank": 9,
        "thenRank": 6,
      },
      "-8--" => Object {
        "currentRank": 9,
        "thenRank": 6,
      },
      "2021---" => Object {
        "currentRank": 9,
        "thenRank": 6,
      },
      "2021-8--" => Object {
        "currentRank": 9,
        "thenRank": 6,
      },
      "---仏滅" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "-8--仏滅" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "2021---仏滅" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "2021-8--仏滅" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "--1-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "-8-1-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "2021--1-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "2021-8-1-" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
    },
    "2021-08-31" => Map {
      "---" => Object {
        "currentRank": 8,
        "thenRank": 8,
      },
      "-8--" => Object {
        "currentRank": 8,
        "thenRank": 8,
      },
      "2021---" => Object {
        "currentRank": 8,
        "thenRank": 8,
      },
      "2021-8--" => Object {
        "currentRank": 8,
        "thenRank": 8,
      },
      "---赤口" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-8--赤口" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021---赤口" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021-8--赤口" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "--2-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "-8-2-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "2021--2-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "2021-8-2-" => Object {
        "currentRank": 3,
        "thenRank": 3,
      },
      "--2-赤口" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-8-2-赤口" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021--2-赤口" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021-8-2-赤口" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
    },
    "2021-08-14" => Map {
      "---" => Object {
        "currentRank": 7,
        "thenRank": 4,
      },
      "-8--" => Object {
        "currentRank": 7,
        "thenRank": 4,
      },
      "2021---" => Object {
        "currentRank": 7,
        "thenRank": 4,
      },
      "2021-8--" => Object {
        "currentRank": 7,
        "thenRank": 4,
      },
      "---先勝" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "-8--先勝" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "2021---先勝" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "2021-8--先勝" => Object {
        "currentRank": 2,
        "thenRank": 2,
      },
      "--6-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-8-6-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021--6-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021-8-6-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
    },
    "2021-08-04" => Map {
      "---" => Object {
        "currentRank": 6,
        "thenRank": 2,
      },
      "-8--" => Object {
        "currentRank": 6,
        "thenRank": 2,
      },
      "2021---" => Object {
        "currentRank": 6,
        "thenRank": 2,
      },
      "2021-8--" => Object {
        "currentRank": 6,
        "thenRank": 2,
      },
      "---先勝" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-8--先勝" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021---先勝" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021-8--先勝" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "--3-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-8-3-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021--3-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021-8-3-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
    },
    "2021-08-27" => Map {
      "---" => Object {
        "currentRank": 5,
        "thenRank": 5,
      },
      "-8--" => Object {
        "currentRank": 5,
        "thenRank": 5,
      },
      "2021---" => Object {
        "currentRank": 5,
        "thenRank": 5,
      },
      "2021-8--" => Object {
        "currentRank": 5,
        "thenRank": 5,
      },
      "---友引" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-8--友引" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021---友引" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021-8--友引" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "--5-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-8-5-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021--5-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021-8-5-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
    },
    "2021-08-11" => Map {
      "---" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "-8--" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "2021---" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "2021-8--" => Object {
        "currentRank": 4,
        "thenRank": 2,
      },
      "---仏滅" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-8--仏滅" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021---仏滅" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021-8--仏滅" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "--3-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-8-3-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021--3-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021-8-3-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
    },
    "2021-08-02" => Map {
      "---" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "-8--" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "2021---" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "2021-8--" => Object {
        "currentRank": 3,
        "thenRank": 1,
      },
      "---大安" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-8--大安" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021---大安" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021-8--大安" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "--1-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-8-1-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021--1-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021-8-1-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "--1-大安" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-8-1-大安" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021--1-大安" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021-8-1-大安" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
    },
    "2021-08-17" => Map {
      "---" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-8--" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021---" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021-8--" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "---仏滅" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-8--仏滅" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021---仏滅" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021-8--仏滅" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "--2-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "-8-2-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021--2-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
      "2021-8-2-" => Object {
        "currentRank": 2,
        "thenRank": 1,
      },
    },
    "2021-08-24" => Map {
      "---" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-8--" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021---" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021-8--" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "---大安" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-8--大安" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021---大安" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021-8--大安" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "--2-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "-8-2-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021--2-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
      "2021-8-2-" => Object {
        "currentRank": 1,
        "thenRank": 1,
      },
    },
  },
}
`);
});
