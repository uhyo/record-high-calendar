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
Map {
  "---" => Map {
    "2021-08-13" => Object {
      "currentRank": 31,
      "thenRank": 13,
    },
    "2021-08-08" => Object {
      "currentRank": 30,
      "thenRank": 8,
    },
    "2021-08-21" => Object {
      "currentRank": 29,
      "thenRank": 19,
    },
    "2021-08-26" => Object {
      "currentRank": 28,
      "thenRank": 23,
    },
    "2021-08-01" => Object {
      "currentRank": 27,
      "thenRank": 1,
    },
    "2021-08-07" => Object {
      "currentRank": 26,
      "thenRank": 6,
    },
    "2021-08-03" => Object {
      "currentRank": 25,
      "thenRank": 2,
    },
    "2021-08-12" => Object {
      "currentRank": 24,
      "thenRank": 8,
    },
    "2021-08-05" => Object {
      "currentRank": 23,
      "thenRank": 3,
    },
    "2021-08-29" => Object {
      "currentRank": 22,
      "thenRank": 20,
    },
    "2021-08-16" => Object {
      "currentRank": 21,
      "thenRank": 9,
    },
    "2021-08-20" => Object {
      "currentRank": 20,
      "thenRank": 12,
    },
    "2021-08-22" => Object {
      "currentRank": 19,
      "thenRank": 12,
    },
    "2021-08-18" => Object {
      "currentRank": 18,
      "thenRank": 10,
    },
    "2021-08-06" => Object {
      "currentRank": 17,
      "thenRank": 3,
    },
    "2021-08-09" => Object {
      "currentRank": 16,
      "thenRank": 3,
    },
    "2021-08-19" => Object {
      "currentRank": 15,
      "thenRank": 8,
    },
    "2021-08-25" => Object {
      "currentRank": 14,
      "thenRank": 10,
    },
    "2021-08-10" => Object {
      "currentRank": 13,
      "thenRank": 3,
    },
    "2021-08-30" => Object {
      "currentRank": 12,
      "thenRank": 11,
    },
    "2021-08-28" => Object {
      "currentRank": 11,
      "thenRank": 10,
    },
    "2021-08-15" => Object {
      "currentRank": 10,
      "thenRank": 5,
    },
    "2021-08-23" => Object {
      "currentRank": 9,
      "thenRank": 6,
    },
    "2021-08-31" => Object {
      "currentRank": 8,
      "thenRank": 8,
    },
    "2021-08-14" => Object {
      "currentRank": 7,
      "thenRank": 4,
    },
    "2021-08-04" => Object {
      "currentRank": 6,
      "thenRank": 2,
    },
    "2021-08-27" => Object {
      "currentRank": 5,
      "thenRank": 5,
    },
    "2021-08-11" => Object {
      "currentRank": 4,
      "thenRank": 2,
    },
    "2021-08-02" => Object {
      "currentRank": 3,
      "thenRank": 1,
    },
    "2021-08-17" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-24" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8--" => Map {
    "2021-08-13" => Object {
      "currentRank": 31,
      "thenRank": 13,
    },
    "2021-08-08" => Object {
      "currentRank": 30,
      "thenRank": 8,
    },
    "2021-08-21" => Object {
      "currentRank": 29,
      "thenRank": 19,
    },
    "2021-08-26" => Object {
      "currentRank": 28,
      "thenRank": 23,
    },
    "2021-08-01" => Object {
      "currentRank": 27,
      "thenRank": 1,
    },
    "2021-08-07" => Object {
      "currentRank": 26,
      "thenRank": 6,
    },
    "2021-08-03" => Object {
      "currentRank": 25,
      "thenRank": 2,
    },
    "2021-08-12" => Object {
      "currentRank": 24,
      "thenRank": 8,
    },
    "2021-08-05" => Object {
      "currentRank": 23,
      "thenRank": 3,
    },
    "2021-08-29" => Object {
      "currentRank": 22,
      "thenRank": 20,
    },
    "2021-08-16" => Object {
      "currentRank": 21,
      "thenRank": 9,
    },
    "2021-08-20" => Object {
      "currentRank": 20,
      "thenRank": 12,
    },
    "2021-08-22" => Object {
      "currentRank": 19,
      "thenRank": 12,
    },
    "2021-08-18" => Object {
      "currentRank": 18,
      "thenRank": 10,
    },
    "2021-08-06" => Object {
      "currentRank": 17,
      "thenRank": 3,
    },
    "2021-08-09" => Object {
      "currentRank": 16,
      "thenRank": 3,
    },
    "2021-08-19" => Object {
      "currentRank": 15,
      "thenRank": 8,
    },
    "2021-08-25" => Object {
      "currentRank": 14,
      "thenRank": 10,
    },
    "2021-08-10" => Object {
      "currentRank": 13,
      "thenRank": 3,
    },
    "2021-08-30" => Object {
      "currentRank": 12,
      "thenRank": 11,
    },
    "2021-08-28" => Object {
      "currentRank": 11,
      "thenRank": 10,
    },
    "2021-08-15" => Object {
      "currentRank": 10,
      "thenRank": 5,
    },
    "2021-08-23" => Object {
      "currentRank": 9,
      "thenRank": 6,
    },
    "2021-08-31" => Object {
      "currentRank": 8,
      "thenRank": 8,
    },
    "2021-08-14" => Object {
      "currentRank": 7,
      "thenRank": 4,
    },
    "2021-08-04" => Object {
      "currentRank": 6,
      "thenRank": 2,
    },
    "2021-08-27" => Object {
      "currentRank": 5,
      "thenRank": 5,
    },
    "2021-08-11" => Object {
      "currentRank": 4,
      "thenRank": 2,
    },
    "2021-08-02" => Object {
      "currentRank": 3,
      "thenRank": 1,
    },
    "2021-08-17" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-24" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021---" => Map {
    "2021-08-13" => Object {
      "currentRank": 31,
      "thenRank": 13,
    },
    "2021-08-08" => Object {
      "currentRank": 30,
      "thenRank": 8,
    },
    "2021-08-21" => Object {
      "currentRank": 29,
      "thenRank": 19,
    },
    "2021-08-26" => Object {
      "currentRank": 28,
      "thenRank": 23,
    },
    "2021-08-01" => Object {
      "currentRank": 27,
      "thenRank": 1,
    },
    "2021-08-07" => Object {
      "currentRank": 26,
      "thenRank": 6,
    },
    "2021-08-03" => Object {
      "currentRank": 25,
      "thenRank": 2,
    },
    "2021-08-12" => Object {
      "currentRank": 24,
      "thenRank": 8,
    },
    "2021-08-05" => Object {
      "currentRank": 23,
      "thenRank": 3,
    },
    "2021-08-29" => Object {
      "currentRank": 22,
      "thenRank": 20,
    },
    "2021-08-16" => Object {
      "currentRank": 21,
      "thenRank": 9,
    },
    "2021-08-20" => Object {
      "currentRank": 20,
      "thenRank": 12,
    },
    "2021-08-22" => Object {
      "currentRank": 19,
      "thenRank": 12,
    },
    "2021-08-18" => Object {
      "currentRank": 18,
      "thenRank": 10,
    },
    "2021-08-06" => Object {
      "currentRank": 17,
      "thenRank": 3,
    },
    "2021-08-09" => Object {
      "currentRank": 16,
      "thenRank": 3,
    },
    "2021-08-19" => Object {
      "currentRank": 15,
      "thenRank": 8,
    },
    "2021-08-25" => Object {
      "currentRank": 14,
      "thenRank": 10,
    },
    "2021-08-10" => Object {
      "currentRank": 13,
      "thenRank": 3,
    },
    "2021-08-30" => Object {
      "currentRank": 12,
      "thenRank": 11,
    },
    "2021-08-28" => Object {
      "currentRank": 11,
      "thenRank": 10,
    },
    "2021-08-15" => Object {
      "currentRank": 10,
      "thenRank": 5,
    },
    "2021-08-23" => Object {
      "currentRank": 9,
      "thenRank": 6,
    },
    "2021-08-31" => Object {
      "currentRank": 8,
      "thenRank": 8,
    },
    "2021-08-14" => Object {
      "currentRank": 7,
      "thenRank": 4,
    },
    "2021-08-04" => Object {
      "currentRank": 6,
      "thenRank": 2,
    },
    "2021-08-27" => Object {
      "currentRank": 5,
      "thenRank": 5,
    },
    "2021-08-11" => Object {
      "currentRank": 4,
      "thenRank": 2,
    },
    "2021-08-02" => Object {
      "currentRank": 3,
      "thenRank": 1,
    },
    "2021-08-17" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-24" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8--" => Map {
    "2021-08-13" => Object {
      "currentRank": 31,
      "thenRank": 13,
    },
    "2021-08-08" => Object {
      "currentRank": 30,
      "thenRank": 8,
    },
    "2021-08-21" => Object {
      "currentRank": 29,
      "thenRank": 19,
    },
    "2021-08-26" => Object {
      "currentRank": 28,
      "thenRank": 23,
    },
    "2021-08-01" => Object {
      "currentRank": 27,
      "thenRank": 1,
    },
    "2021-08-07" => Object {
      "currentRank": 26,
      "thenRank": 6,
    },
    "2021-08-03" => Object {
      "currentRank": 25,
      "thenRank": 2,
    },
    "2021-08-12" => Object {
      "currentRank": 24,
      "thenRank": 8,
    },
    "2021-08-05" => Object {
      "currentRank": 23,
      "thenRank": 3,
    },
    "2021-08-29" => Object {
      "currentRank": 22,
      "thenRank": 20,
    },
    "2021-08-16" => Object {
      "currentRank": 21,
      "thenRank": 9,
    },
    "2021-08-20" => Object {
      "currentRank": 20,
      "thenRank": 12,
    },
    "2021-08-22" => Object {
      "currentRank": 19,
      "thenRank": 12,
    },
    "2021-08-18" => Object {
      "currentRank": 18,
      "thenRank": 10,
    },
    "2021-08-06" => Object {
      "currentRank": 17,
      "thenRank": 3,
    },
    "2021-08-09" => Object {
      "currentRank": 16,
      "thenRank": 3,
    },
    "2021-08-19" => Object {
      "currentRank": 15,
      "thenRank": 8,
    },
    "2021-08-25" => Object {
      "currentRank": 14,
      "thenRank": 10,
    },
    "2021-08-10" => Object {
      "currentRank": 13,
      "thenRank": 3,
    },
    "2021-08-30" => Object {
      "currentRank": 12,
      "thenRank": 11,
    },
    "2021-08-28" => Object {
      "currentRank": 11,
      "thenRank": 10,
    },
    "2021-08-15" => Object {
      "currentRank": 10,
      "thenRank": 5,
    },
    "2021-08-23" => Object {
      "currentRank": 9,
      "thenRank": 6,
    },
    "2021-08-31" => Object {
      "currentRank": 8,
      "thenRank": 8,
    },
    "2021-08-14" => Object {
      "currentRank": 7,
      "thenRank": 4,
    },
    "2021-08-04" => Object {
      "currentRank": 6,
      "thenRank": 2,
    },
    "2021-08-27" => Object {
      "currentRank": 5,
      "thenRank": 5,
    },
    "2021-08-11" => Object {
      "currentRank": 4,
      "thenRank": 2,
    },
    "2021-08-02" => Object {
      "currentRank": 3,
      "thenRank": 1,
    },
    "2021-08-17" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-24" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "---rokuyou:仏滅" => Map {
    "2021-08-01" => Object {
      "currentRank": 6,
      "thenRank": 1,
    },
    "2021-08-07" => Object {
      "currentRank": 5,
      "thenRank": 1,
    },
    "2021-08-29" => Object {
      "currentRank": 4,
      "thenRank": 4,
    },
    "2021-08-23" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-11" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-17" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8--rokuyou:仏滅" => Map {
    "2021-08-01" => Object {
      "currentRank": 6,
      "thenRank": 1,
    },
    "2021-08-07" => Object {
      "currentRank": 5,
      "thenRank": 1,
    },
    "2021-08-29" => Object {
      "currentRank": 4,
      "thenRank": 4,
    },
    "2021-08-23" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-11" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-17" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021---rokuyou:仏滅" => Map {
    "2021-08-01" => Object {
      "currentRank": 6,
      "thenRank": 1,
    },
    "2021-08-07" => Object {
      "currentRank": 5,
      "thenRank": 1,
    },
    "2021-08-29" => Object {
      "currentRank": 4,
      "thenRank": 4,
    },
    "2021-08-23" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-11" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-17" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8--rokuyou:仏滅" => Map {
    "2021-08-01" => Object {
      "currentRank": 6,
      "thenRank": 1,
    },
    "2021-08-07" => Object {
      "currentRank": 5,
      "thenRank": 1,
    },
    "2021-08-29" => Object {
      "currentRank": 4,
      "thenRank": 4,
    },
    "2021-08-23" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-11" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-17" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:sunday-" => Map {
    "2021-08-08" => Object {
      "currentRank": 5,
      "thenRank": 2,
    },
    "2021-08-01" => Object {
      "currentRank": 4,
      "thenRank": 1,
    },
    "2021-08-29" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-22" => Object {
      "currentRank": 2,
      "thenRank": 2,
    },
    "2021-08-15" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:sunday-" => Map {
    "2021-08-08" => Object {
      "currentRank": 5,
      "thenRank": 2,
    },
    "2021-08-01" => Object {
      "currentRank": 4,
      "thenRank": 1,
    },
    "2021-08-29" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-22" => Object {
      "currentRank": 2,
      "thenRank": 2,
    },
    "2021-08-15" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:sunday-" => Map {
    "2021-08-08" => Object {
      "currentRank": 5,
      "thenRank": 2,
    },
    "2021-08-01" => Object {
      "currentRank": 4,
      "thenRank": 1,
    },
    "2021-08-29" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-22" => Object {
      "currentRank": 2,
      "thenRank": 2,
    },
    "2021-08-15" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:sunday-" => Map {
    "2021-08-08" => Object {
      "currentRank": 5,
      "thenRank": 2,
    },
    "2021-08-01" => Object {
      "currentRank": 4,
      "thenRank": 1,
    },
    "2021-08-29" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-22" => Object {
      "currentRank": 2,
      "thenRank": 2,
    },
    "2021-08-15" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:sunday-rokuyou:仏滅" => Map {
    "2021-08-01" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-29" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:sunday-rokuyou:仏滅" => Map {
    "2021-08-01" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-29" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:sunday-rokuyou:仏滅" => Map {
    "2021-08-01" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-29" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:sunday-rokuyou:仏滅" => Map {
    "2021-08-01" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-29" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "---rokuyou:大安" => Map {
    "2021-08-12" => Object {
      "currentRank": 5,
      "thenRank": 2,
    },
    "2021-08-18" => Object {
      "currentRank": 4,
      "thenRank": 2,
    },
    "2021-08-30" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-02" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-24" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8--rokuyou:大安" => Map {
    "2021-08-12" => Object {
      "currentRank": 5,
      "thenRank": 2,
    },
    "2021-08-18" => Object {
      "currentRank": 4,
      "thenRank": 2,
    },
    "2021-08-30" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-02" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-24" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021---rokuyou:大安" => Map {
    "2021-08-12" => Object {
      "currentRank": 5,
      "thenRank": 2,
    },
    "2021-08-18" => Object {
      "currentRank": 4,
      "thenRank": 2,
    },
    "2021-08-30" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-02" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-24" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8--rokuyou:大安" => Map {
    "2021-08-12" => Object {
      "currentRank": 5,
      "thenRank": 2,
    },
    "2021-08-18" => Object {
      "currentRank": 4,
      "thenRank": 2,
    },
    "2021-08-30" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-02" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-24" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:monday-" => Map {
    "2021-08-16" => Object {
      "currentRank": 5,
      "thenRank": 3,
    },
    "2021-08-09" => Object {
      "currentRank": 4,
      "thenRank": 2,
    },
    "2021-08-30" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-23" => Object {
      "currentRank": 2,
      "thenRank": 2,
    },
    "2021-08-02" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:monday-" => Map {
    "2021-08-16" => Object {
      "currentRank": 5,
      "thenRank": 3,
    },
    "2021-08-09" => Object {
      "currentRank": 4,
      "thenRank": 2,
    },
    "2021-08-30" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-23" => Object {
      "currentRank": 2,
      "thenRank": 2,
    },
    "2021-08-02" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:monday-" => Map {
    "2021-08-16" => Object {
      "currentRank": 5,
      "thenRank": 3,
    },
    "2021-08-09" => Object {
      "currentRank": 4,
      "thenRank": 2,
    },
    "2021-08-30" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-23" => Object {
      "currentRank": 2,
      "thenRank": 2,
    },
    "2021-08-02" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:monday-" => Map {
    "2021-08-16" => Object {
      "currentRank": 5,
      "thenRank": 3,
    },
    "2021-08-09" => Object {
      "currentRank": 4,
      "thenRank": 2,
    },
    "2021-08-30" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-23" => Object {
      "currentRank": 2,
      "thenRank": 2,
    },
    "2021-08-02" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:monday-rokuyou:大安" => Map {
    "2021-08-30" => Object {
      "currentRank": 2,
      "thenRank": 2,
    },
    "2021-08-02" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:monday-rokuyou:大安" => Map {
    "2021-08-30" => Object {
      "currentRank": 2,
      "thenRank": 2,
    },
    "2021-08-02" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:monday-rokuyou:大安" => Map {
    "2021-08-30" => Object {
      "currentRank": 2,
      "thenRank": 2,
    },
    "2021-08-02" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:monday-rokuyou:大安" => Map {
    "2021-08-30" => Object {
      "currentRank": 2,
      "thenRank": 2,
    },
    "2021-08-02" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "---rokuyou:赤口" => Map {
    "2021-08-13" => Object {
      "currentRank": 5,
      "thenRank": 2,
    },
    "2021-08-03" => Object {
      "currentRank": 4,
      "thenRank": 1,
    },
    "2021-08-19" => Object {
      "currentRank": 3,
      "thenRank": 1,
    },
    "2021-08-25" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-31" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8--rokuyou:赤口" => Map {
    "2021-08-13" => Object {
      "currentRank": 5,
      "thenRank": 2,
    },
    "2021-08-03" => Object {
      "currentRank": 4,
      "thenRank": 1,
    },
    "2021-08-19" => Object {
      "currentRank": 3,
      "thenRank": 1,
    },
    "2021-08-25" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-31" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021---rokuyou:赤口" => Map {
    "2021-08-13" => Object {
      "currentRank": 5,
      "thenRank": 2,
    },
    "2021-08-03" => Object {
      "currentRank": 4,
      "thenRank": 1,
    },
    "2021-08-19" => Object {
      "currentRank": 3,
      "thenRank": 1,
    },
    "2021-08-25" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-31" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8--rokuyou:赤口" => Map {
    "2021-08-13" => Object {
      "currentRank": 5,
      "thenRank": 2,
    },
    "2021-08-03" => Object {
      "currentRank": 4,
      "thenRank": 1,
    },
    "2021-08-19" => Object {
      "currentRank": 3,
      "thenRank": 1,
    },
    "2021-08-25" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-31" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:tuesday-" => Map {
    "2021-08-03" => Object {
      "currentRank": 5,
      "thenRank": 1,
    },
    "2021-08-10" => Object {
      "currentRank": 4,
      "thenRank": 1,
    },
    "2021-08-31" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-17" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-24" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:tuesday-" => Map {
    "2021-08-03" => Object {
      "currentRank": 5,
      "thenRank": 1,
    },
    "2021-08-10" => Object {
      "currentRank": 4,
      "thenRank": 1,
    },
    "2021-08-31" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-17" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-24" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:tuesday-" => Map {
    "2021-08-03" => Object {
      "currentRank": 5,
      "thenRank": 1,
    },
    "2021-08-10" => Object {
      "currentRank": 4,
      "thenRank": 1,
    },
    "2021-08-31" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-17" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-24" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:tuesday-" => Map {
    "2021-08-03" => Object {
      "currentRank": 5,
      "thenRank": 1,
    },
    "2021-08-10" => Object {
      "currentRank": 4,
      "thenRank": 1,
    },
    "2021-08-31" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-17" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-24" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:tuesday-rokuyou:赤口" => Map {
    "2021-08-03" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-31" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:tuesday-rokuyou:赤口" => Map {
    "2021-08-03" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-31" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:tuesday-rokuyou:赤口" => Map {
    "2021-08-03" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-31" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:tuesday-rokuyou:赤口" => Map {
    "2021-08-03" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-31" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "---rokuyou:先勝" => Map {
    "2021-08-08" => Object {
      "currentRank": 5,
      "thenRank": 2,
    },
    "2021-08-26" => Object {
      "currentRank": 4,
      "thenRank": 4,
    },
    "2021-08-20" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-14" => Object {
      "currentRank": 2,
      "thenRank": 2,
    },
    "2021-08-04" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8--rokuyou:先勝" => Map {
    "2021-08-08" => Object {
      "currentRank": 5,
      "thenRank": 2,
    },
    "2021-08-26" => Object {
      "currentRank": 4,
      "thenRank": 4,
    },
    "2021-08-20" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-14" => Object {
      "currentRank": 2,
      "thenRank": 2,
    },
    "2021-08-04" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021---rokuyou:先勝" => Map {
    "2021-08-08" => Object {
      "currentRank": 5,
      "thenRank": 2,
    },
    "2021-08-26" => Object {
      "currentRank": 4,
      "thenRank": 4,
    },
    "2021-08-20" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-14" => Object {
      "currentRank": 2,
      "thenRank": 2,
    },
    "2021-08-04" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8--rokuyou:先勝" => Map {
    "2021-08-08" => Object {
      "currentRank": 5,
      "thenRank": 2,
    },
    "2021-08-26" => Object {
      "currentRank": 4,
      "thenRank": 4,
    },
    "2021-08-20" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-14" => Object {
      "currentRank": 2,
      "thenRank": 2,
    },
    "2021-08-04" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:wednesday-" => Map {
    "2021-08-18" => Object {
      "currentRank": 4,
      "thenRank": 3,
    },
    "2021-08-25" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-04" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-11" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:wednesday-" => Map {
    "2021-08-18" => Object {
      "currentRank": 4,
      "thenRank": 3,
    },
    "2021-08-25" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-04" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-11" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:wednesday-" => Map {
    "2021-08-18" => Object {
      "currentRank": 4,
      "thenRank": 3,
    },
    "2021-08-25" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-04" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-11" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:wednesday-" => Map {
    "2021-08-18" => Object {
      "currentRank": 4,
      "thenRank": 3,
    },
    "2021-08-25" => Object {
      "currentRank": 3,
      "thenRank": 3,
    },
    "2021-08-04" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-11" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:wednesday-rokuyou:先勝" => Map {
    "2021-08-04" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:wednesday-rokuyou:先勝" => Map {
    "2021-08-04" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:wednesday-rokuyou:先勝" => Map {
    "2021-08-04" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:wednesday-rokuyou:先勝" => Map {
    "2021-08-04" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "---rokuyou:友引" => Map {
    "2021-08-21" => Object {
      "currentRank": 5,
      "thenRank": 4,
    },
    "2021-08-05" => Object {
      "currentRank": 4,
      "thenRank": 1,
    },
    "2021-08-09" => Object {
      "currentRank": 3,
      "thenRank": 1,
    },
    "2021-08-15" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-27" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8--rokuyou:友引" => Map {
    "2021-08-21" => Object {
      "currentRank": 5,
      "thenRank": 4,
    },
    "2021-08-05" => Object {
      "currentRank": 4,
      "thenRank": 1,
    },
    "2021-08-09" => Object {
      "currentRank": 3,
      "thenRank": 1,
    },
    "2021-08-15" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-27" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021---rokuyou:友引" => Map {
    "2021-08-21" => Object {
      "currentRank": 5,
      "thenRank": 4,
    },
    "2021-08-05" => Object {
      "currentRank": 4,
      "thenRank": 1,
    },
    "2021-08-09" => Object {
      "currentRank": 3,
      "thenRank": 1,
    },
    "2021-08-15" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-27" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8--rokuyou:友引" => Map {
    "2021-08-21" => Object {
      "currentRank": 5,
      "thenRank": 4,
    },
    "2021-08-05" => Object {
      "currentRank": 4,
      "thenRank": 1,
    },
    "2021-08-09" => Object {
      "currentRank": 3,
      "thenRank": 1,
    },
    "2021-08-15" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-27" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:thursday-" => Map {
    "2021-08-26" => Object {
      "currentRank": 4,
      "thenRank": 4,
    },
    "2021-08-12" => Object {
      "currentRank": 3,
      "thenRank": 2,
    },
    "2021-08-05" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-19" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:thursday-" => Map {
    "2021-08-26" => Object {
      "currentRank": 4,
      "thenRank": 4,
    },
    "2021-08-12" => Object {
      "currentRank": 3,
      "thenRank": 2,
    },
    "2021-08-05" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-19" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:thursday-" => Map {
    "2021-08-26" => Object {
      "currentRank": 4,
      "thenRank": 4,
    },
    "2021-08-12" => Object {
      "currentRank": 3,
      "thenRank": 2,
    },
    "2021-08-05" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-19" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:thursday-" => Map {
    "2021-08-26" => Object {
      "currentRank": 4,
      "thenRank": 4,
    },
    "2021-08-12" => Object {
      "currentRank": 3,
      "thenRank": 2,
    },
    "2021-08-05" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-19" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:thursday-rokuyou:友引" => Map {
    "2021-08-05" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:thursday-rokuyou:友引" => Map {
    "2021-08-05" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:thursday-rokuyou:友引" => Map {
    "2021-08-05" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:thursday-rokuyou:友引" => Map {
    "2021-08-05" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "---rokuyou:先負" => Map {
    "2021-08-16" => Object {
      "currentRank": 5,
      "thenRank": 3,
    },
    "2021-08-22" => Object {
      "currentRank": 4,
      "thenRank": 3,
    },
    "2021-08-06" => Object {
      "currentRank": 3,
      "thenRank": 1,
    },
    "2021-08-10" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-28" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8--rokuyou:先負" => Map {
    "2021-08-16" => Object {
      "currentRank": 5,
      "thenRank": 3,
    },
    "2021-08-22" => Object {
      "currentRank": 4,
      "thenRank": 3,
    },
    "2021-08-06" => Object {
      "currentRank": 3,
      "thenRank": 1,
    },
    "2021-08-10" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-28" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021---rokuyou:先負" => Map {
    "2021-08-16" => Object {
      "currentRank": 5,
      "thenRank": 3,
    },
    "2021-08-22" => Object {
      "currentRank": 4,
      "thenRank": 3,
    },
    "2021-08-06" => Object {
      "currentRank": 3,
      "thenRank": 1,
    },
    "2021-08-10" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-28" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8--rokuyou:先負" => Map {
    "2021-08-16" => Object {
      "currentRank": 5,
      "thenRank": 3,
    },
    "2021-08-22" => Object {
      "currentRank": 4,
      "thenRank": 3,
    },
    "2021-08-06" => Object {
      "currentRank": 3,
      "thenRank": 1,
    },
    "2021-08-10" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-28" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:friday-" => Map {
    "2021-08-13" => Object {
      "currentRank": 4,
      "thenRank": 2,
    },
    "2021-08-20" => Object {
      "currentRank": 3,
      "thenRank": 2,
    },
    "2021-08-06" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-27" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:friday-" => Map {
    "2021-08-13" => Object {
      "currentRank": 4,
      "thenRank": 2,
    },
    "2021-08-20" => Object {
      "currentRank": 3,
      "thenRank": 2,
    },
    "2021-08-06" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-27" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:friday-" => Map {
    "2021-08-13" => Object {
      "currentRank": 4,
      "thenRank": 2,
    },
    "2021-08-20" => Object {
      "currentRank": 3,
      "thenRank": 2,
    },
    "2021-08-06" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-27" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:friday-" => Map {
    "2021-08-13" => Object {
      "currentRank": 4,
      "thenRank": 2,
    },
    "2021-08-20" => Object {
      "currentRank": 3,
      "thenRank": 2,
    },
    "2021-08-06" => Object {
      "currentRank": 2,
      "thenRank": 1,
    },
    "2021-08-27" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:friday-rokuyou:先負" => Map {
    "2021-08-06" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:friday-rokuyou:先負" => Map {
    "2021-08-06" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:friday-rokuyou:先負" => Map {
    "2021-08-06" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:friday-rokuyou:先負" => Map {
    "2021-08-06" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:saturday-" => Map {
    "2021-08-21" => Object {
      "currentRank": 4,
      "thenRank": 3,
    },
    "2021-08-07" => Object {
      "currentRank": 3,
      "thenRank": 1,
    },
    "2021-08-28" => Object {
      "currentRank": 2,
      "thenRank": 2,
    },
    "2021-08-14" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:saturday-" => Map {
    "2021-08-21" => Object {
      "currentRank": 4,
      "thenRank": 3,
    },
    "2021-08-07" => Object {
      "currentRank": 3,
      "thenRank": 1,
    },
    "2021-08-28" => Object {
      "currentRank": 2,
      "thenRank": 2,
    },
    "2021-08-14" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:saturday-" => Map {
    "2021-08-21" => Object {
      "currentRank": 4,
      "thenRank": 3,
    },
    "2021-08-07" => Object {
      "currentRank": 3,
      "thenRank": 1,
    },
    "2021-08-28" => Object {
      "currentRank": 2,
      "thenRank": 2,
    },
    "2021-08-14" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:saturday-" => Map {
    "2021-08-21" => Object {
      "currentRank": 4,
      "thenRank": 3,
    },
    "2021-08-07" => Object {
      "currentRank": 3,
      "thenRank": 1,
    },
    "2021-08-28" => Object {
      "currentRank": 2,
      "thenRank": 2,
    },
    "2021-08-14" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:saturday-rokuyou:仏滅" => Map {
    "2021-08-07" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:saturday-rokuyou:仏滅" => Map {
    "2021-08-07" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:saturday-rokuyou:仏滅" => Map {
    "2021-08-07" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:saturday-rokuyou:仏滅" => Map {
    "2021-08-07" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:sunday-rokuyou:先勝" => Map {
    "2021-08-08" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:sunday-rokuyou:先勝" => Map {
    "2021-08-08" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:sunday-rokuyou:先勝" => Map {
    "2021-08-08" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:sunday-rokuyou:先勝" => Map {
    "2021-08-08" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:monday-rokuyou:友引" => Map {
    "2021-08-09" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:monday-rokuyou:友引" => Map {
    "2021-08-09" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:monday-rokuyou:友引" => Map {
    "2021-08-09" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:monday-rokuyou:友引" => Map {
    "2021-08-09" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:tuesday-rokuyou:先負" => Map {
    "2021-08-10" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:tuesday-rokuyou:先負" => Map {
    "2021-08-10" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:tuesday-rokuyou:先負" => Map {
    "2021-08-10" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:tuesday-rokuyou:先負" => Map {
    "2021-08-10" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:wednesday-rokuyou:仏滅" => Map {
    "2021-08-11" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:wednesday-rokuyou:仏滅" => Map {
    "2021-08-11" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:wednesday-rokuyou:仏滅" => Map {
    "2021-08-11" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:wednesday-rokuyou:仏滅" => Map {
    "2021-08-11" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:thursday-rokuyou:大安" => Map {
    "2021-08-12" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:thursday-rokuyou:大安" => Map {
    "2021-08-12" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:thursday-rokuyou:大安" => Map {
    "2021-08-12" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:thursday-rokuyou:大安" => Map {
    "2021-08-12" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:friday-rokuyou:赤口" => Map {
    "2021-08-13" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:friday-rokuyou:赤口" => Map {
    "2021-08-13" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:friday-rokuyou:赤口" => Map {
    "2021-08-13" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:friday-rokuyou:赤口" => Map {
    "2021-08-13" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:saturday-rokuyou:先勝" => Map {
    "2021-08-14" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:saturday-rokuyou:先勝" => Map {
    "2021-08-14" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:saturday-rokuyou:先勝" => Map {
    "2021-08-14" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:saturday-rokuyou:先勝" => Map {
    "2021-08-14" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:sunday-rokuyou:友引" => Map {
    "2021-08-15" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:sunday-rokuyou:友引" => Map {
    "2021-08-15" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:sunday-rokuyou:友引" => Map {
    "2021-08-15" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:sunday-rokuyou:友引" => Map {
    "2021-08-15" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:monday-rokuyou:先負" => Map {
    "2021-08-16" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:monday-rokuyou:先負" => Map {
    "2021-08-16" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:monday-rokuyou:先負" => Map {
    "2021-08-16" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:monday-rokuyou:先負" => Map {
    "2021-08-16" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:tuesday-rokuyou:仏滅" => Map {
    "2021-08-17" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:tuesday-rokuyou:仏滅" => Map {
    "2021-08-17" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:tuesday-rokuyou:仏滅" => Map {
    "2021-08-17" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:tuesday-rokuyou:仏滅" => Map {
    "2021-08-17" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:wednesday-rokuyou:大安" => Map {
    "2021-08-18" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:wednesday-rokuyou:大安" => Map {
    "2021-08-18" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:wednesday-rokuyou:大安" => Map {
    "2021-08-18" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:wednesday-rokuyou:大安" => Map {
    "2021-08-18" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:thursday-rokuyou:赤口" => Map {
    "2021-08-19" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:thursday-rokuyou:赤口" => Map {
    "2021-08-19" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:thursday-rokuyou:赤口" => Map {
    "2021-08-19" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:thursday-rokuyou:赤口" => Map {
    "2021-08-19" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:friday-rokuyou:先勝" => Map {
    "2021-08-20" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:friday-rokuyou:先勝" => Map {
    "2021-08-20" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:friday-rokuyou:先勝" => Map {
    "2021-08-20" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:friday-rokuyou:先勝" => Map {
    "2021-08-20" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:saturday-rokuyou:友引" => Map {
    "2021-08-21" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:saturday-rokuyou:友引" => Map {
    "2021-08-21" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:saturday-rokuyou:友引" => Map {
    "2021-08-21" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:saturday-rokuyou:友引" => Map {
    "2021-08-21" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:sunday-rokuyou:先負" => Map {
    "2021-08-22" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:sunday-rokuyou:先負" => Map {
    "2021-08-22" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:sunday-rokuyou:先負" => Map {
    "2021-08-22" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:sunday-rokuyou:先負" => Map {
    "2021-08-22" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:monday-rokuyou:仏滅" => Map {
    "2021-08-23" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:monday-rokuyou:仏滅" => Map {
    "2021-08-23" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:monday-rokuyou:仏滅" => Map {
    "2021-08-23" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:monday-rokuyou:仏滅" => Map {
    "2021-08-23" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:tuesday-rokuyou:大安" => Map {
    "2021-08-24" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:tuesday-rokuyou:大安" => Map {
    "2021-08-24" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:tuesday-rokuyou:大安" => Map {
    "2021-08-24" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:tuesday-rokuyou:大安" => Map {
    "2021-08-24" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:wednesday-rokuyou:赤口" => Map {
    "2021-08-25" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:wednesday-rokuyou:赤口" => Map {
    "2021-08-25" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:wednesday-rokuyou:赤口" => Map {
    "2021-08-25" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:wednesday-rokuyou:赤口" => Map {
    "2021-08-25" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:thursday-rokuyou:先勝" => Map {
    "2021-08-26" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:thursday-rokuyou:先勝" => Map {
    "2021-08-26" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:thursday-rokuyou:先勝" => Map {
    "2021-08-26" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:thursday-rokuyou:先勝" => Map {
    "2021-08-26" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:friday-rokuyou:友引" => Map {
    "2021-08-27" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:friday-rokuyou:友引" => Map {
    "2021-08-27" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:friday-rokuyou:友引" => Map {
    "2021-08-27" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:friday-rokuyou:友引" => Map {
    "2021-08-27" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "--weekday:saturday-rokuyou:先負" => Map {
    "2021-08-28" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "-month:8-weekday:saturday-rokuyou:先負" => Map {
    "2021-08-28" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021--weekday:saturday-rokuyou:先負" => Map {
    "2021-08-28" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
  "year:2021-month:8-weekday:saturday-rokuyou:先負" => Map {
    "2021-08-28" => Object {
      "currentRank": 1,
      "thenRank": 1,
    },
  },
}
`);
});
