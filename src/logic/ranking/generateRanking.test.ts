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
      "rarity": 1,
    },
    "-month:8--" => Object {
      "characteristic": Object {
        "month": "month:8",
      },
      "rarity": 12,
    },
    "year:2021---" => Object {
      "characteristic": Object {
        "year": "year:2021",
      },
      "rarity": 1.01,
    },
    "year:2021-month:8--" => Object {
      "characteristic": Object {
        "month": "month:8",
        "year": "year:2021",
      },
      "rarity": 12.120000000000001,
    },
    "---rokuyou:仏滅" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:仏滅",
      },
      "rarity": 6,
    },
    "-month:8--rokuyou:仏滅" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:仏滅",
      },
      "rarity": 72,
    },
    "year:2021---rokuyou:仏滅" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:仏滅",
        "year": "year:2021",
      },
      "rarity": 6.0600000000000005,
    },
    "year:2021-month:8--rokuyou:仏滅" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:仏滅",
        "year": "year:2021",
      },
      "rarity": 72.72,
    },
    "--weekday:sunday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:sunday",
      },
      "rarity": 7,
    },
    "-month:8-weekday:sunday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:sunday",
      },
      "rarity": 84,
    },
    "year:2021--weekday:sunday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:sunday",
        "year": "year:2021",
      },
      "rarity": 7.07,
    },
    "year:2021-month:8-weekday:sunday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:sunday",
        "year": "year:2021",
      },
      "rarity": 84.84,
    },
    "--weekday:sunday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:sunday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:sunday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:sunday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:sunday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:sunday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:sunday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:sunday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "---rokuyou:大安" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:大安",
      },
      "rarity": 6,
    },
    "-month:8--rokuyou:大安" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:大安",
      },
      "rarity": 72,
    },
    "year:2021---rokuyou:大安" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:大安",
        "year": "year:2021",
      },
      "rarity": 6.0600000000000005,
    },
    "year:2021-month:8--rokuyou:大安" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:大安",
        "year": "year:2021",
      },
      "rarity": 72.72,
    },
    "--weekday:monday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:monday",
      },
      "rarity": 7,
    },
    "-month:8-weekday:monday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:monday",
      },
      "rarity": 84,
    },
    "year:2021--weekday:monday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:monday",
        "year": "year:2021",
      },
      "rarity": 7.07,
    },
    "year:2021-month:8-weekday:monday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:monday",
        "year": "year:2021",
      },
      "rarity": 84.84,
    },
    "--weekday:monday-rokuyou:大安" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:大安",
        "weekDay": "weekday:monday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:monday-rokuyou:大安" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:大安",
        "weekDay": "weekday:monday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:monday-rokuyou:大安" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:大安",
        "weekDay": "weekday:monday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:monday-rokuyou:大安" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:大安",
        "weekDay": "weekday:monday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "---rokuyou:赤口" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:赤口",
      },
      "rarity": 6,
    },
    "-month:8--rokuyou:赤口" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:赤口",
      },
      "rarity": 72,
    },
    "year:2021---rokuyou:赤口" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:赤口",
        "year": "year:2021",
      },
      "rarity": 6.0600000000000005,
    },
    "year:2021-month:8--rokuyou:赤口" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:赤口",
        "year": "year:2021",
      },
      "rarity": 72.72,
    },
    "--weekday:tuesday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:tuesday",
      },
      "rarity": 7,
    },
    "-month:8-weekday:tuesday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:tuesday",
      },
      "rarity": 84,
    },
    "year:2021--weekday:tuesday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:tuesday",
        "year": "year:2021",
      },
      "rarity": 7.07,
    },
    "year:2021-month:8-weekday:tuesday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:tuesday",
        "year": "year:2021",
      },
      "rarity": 84.84,
    },
    "--weekday:tuesday-rokuyou:赤口" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:赤口",
        "weekDay": "weekday:tuesday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:tuesday-rokuyou:赤口" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:赤口",
        "weekDay": "weekday:tuesday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:tuesday-rokuyou:赤口" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:赤口",
        "weekDay": "weekday:tuesday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:tuesday-rokuyou:赤口" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:赤口",
        "weekDay": "weekday:tuesday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "---rokuyou:先勝" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先勝",
      },
      "rarity": 6,
    },
    "-month:8--rokuyou:先勝" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先勝",
      },
      "rarity": 72,
    },
    "year:2021---rokuyou:先勝" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先勝",
        "year": "year:2021",
      },
      "rarity": 6.0600000000000005,
    },
    "year:2021-month:8--rokuyou:先勝" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先勝",
        "year": "year:2021",
      },
      "rarity": 72.72,
    },
    "--weekday:wednesday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:wednesday",
      },
      "rarity": 7,
    },
    "-month:8-weekday:wednesday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:wednesday",
      },
      "rarity": 84,
    },
    "year:2021--weekday:wednesday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:wednesday",
        "year": "year:2021",
      },
      "rarity": 7.07,
    },
    "year:2021-month:8-weekday:wednesday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:wednesday",
        "year": "year:2021",
      },
      "rarity": 84.84,
    },
    "--weekday:wednesday-rokuyou:先勝" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先勝",
        "weekDay": "weekday:wednesday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:wednesday-rokuyou:先勝" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先勝",
        "weekDay": "weekday:wednesday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:wednesday-rokuyou:先勝" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先勝",
        "weekDay": "weekday:wednesday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:wednesday-rokuyou:先勝" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先勝",
        "weekDay": "weekday:wednesday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "---rokuyou:友引" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:友引",
      },
      "rarity": 6,
    },
    "-month:8--rokuyou:友引" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:友引",
      },
      "rarity": 72,
    },
    "year:2021---rokuyou:友引" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:友引",
        "year": "year:2021",
      },
      "rarity": 6.0600000000000005,
    },
    "year:2021-month:8--rokuyou:友引" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:友引",
        "year": "year:2021",
      },
      "rarity": 72.72,
    },
    "--weekday:thursday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:thursday",
      },
      "rarity": 7,
    },
    "-month:8-weekday:thursday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:thursday",
      },
      "rarity": 84,
    },
    "year:2021--weekday:thursday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:thursday",
        "year": "year:2021",
      },
      "rarity": 7.07,
    },
    "year:2021-month:8-weekday:thursday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:thursday",
        "year": "year:2021",
      },
      "rarity": 84.84,
    },
    "--weekday:thursday-rokuyou:友引" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:友引",
        "weekDay": "weekday:thursday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:thursday-rokuyou:友引" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:友引",
        "weekDay": "weekday:thursday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:thursday-rokuyou:友引" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:友引",
        "weekDay": "weekday:thursday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:thursday-rokuyou:友引" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:友引",
        "weekDay": "weekday:thursday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "---rokuyou:先負" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先負",
      },
      "rarity": 6,
    },
    "-month:8--rokuyou:先負" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先負",
      },
      "rarity": 72,
    },
    "year:2021---rokuyou:先負" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先負",
        "year": "year:2021",
      },
      "rarity": 6.0600000000000005,
    },
    "year:2021-month:8--rokuyou:先負" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先負",
        "year": "year:2021",
      },
      "rarity": 72.72,
    },
    "--weekday:friday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:friday",
      },
      "rarity": 7,
    },
    "-month:8-weekday:friday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:friday",
      },
      "rarity": 84,
    },
    "year:2021--weekday:friday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:friday",
        "year": "year:2021",
      },
      "rarity": 7.07,
    },
    "year:2021-month:8-weekday:friday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:friday",
        "year": "year:2021",
      },
      "rarity": 84.84,
    },
    "--weekday:friday-rokuyou:先負" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先負",
        "weekDay": "weekday:friday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:friday-rokuyou:先負" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先負",
        "weekDay": "weekday:friday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:friday-rokuyou:先負" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先負",
        "weekDay": "weekday:friday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:friday-rokuyou:先負" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先負",
        "weekDay": "weekday:friday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "--weekday:saturday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:saturday",
      },
      "rarity": 7,
    },
    "-month:8-weekday:saturday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:saturday",
      },
      "rarity": 84,
    },
    "year:2021--weekday:saturday-" => Object {
      "characteristic": Object {
        "weekDay": "weekday:saturday",
        "year": "year:2021",
      },
      "rarity": 7.07,
    },
    "year:2021-month:8-weekday:saturday-" => Object {
      "characteristic": Object {
        "month": "month:8",
        "weekDay": "weekday:saturday",
        "year": "year:2021",
      },
      "rarity": 84.84,
    },
    "--weekday:saturday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:saturday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:saturday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:saturday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:saturday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:saturday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:saturday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:saturday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "--weekday:sunday-rokuyou:先勝" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先勝",
        "weekDay": "weekday:sunday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:sunday-rokuyou:先勝" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先勝",
        "weekDay": "weekday:sunday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:sunday-rokuyou:先勝" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先勝",
        "weekDay": "weekday:sunday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:sunday-rokuyou:先勝" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先勝",
        "weekDay": "weekday:sunday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "--weekday:monday-rokuyou:友引" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:友引",
        "weekDay": "weekday:monday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:monday-rokuyou:友引" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:友引",
        "weekDay": "weekday:monday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:monday-rokuyou:友引" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:友引",
        "weekDay": "weekday:monday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:monday-rokuyou:友引" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:友引",
        "weekDay": "weekday:monday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "--weekday:tuesday-rokuyou:先負" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先負",
        "weekDay": "weekday:tuesday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:tuesday-rokuyou:先負" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先負",
        "weekDay": "weekday:tuesday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:tuesday-rokuyou:先負" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先負",
        "weekDay": "weekday:tuesday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:tuesday-rokuyou:先負" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先負",
        "weekDay": "weekday:tuesday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "--weekday:wednesday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:wednesday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:wednesday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:wednesday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:wednesday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:wednesday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:wednesday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:wednesday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "--weekday:thursday-rokuyou:大安" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:大安",
        "weekDay": "weekday:thursday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:thursday-rokuyou:大安" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:大安",
        "weekDay": "weekday:thursday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:thursday-rokuyou:大安" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:大安",
        "weekDay": "weekday:thursday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:thursday-rokuyou:大安" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:大安",
        "weekDay": "weekday:thursday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "--weekday:friday-rokuyou:赤口" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:赤口",
        "weekDay": "weekday:friday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:friday-rokuyou:赤口" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:赤口",
        "weekDay": "weekday:friday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:friday-rokuyou:赤口" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:赤口",
        "weekDay": "weekday:friday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:friday-rokuyou:赤口" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:赤口",
        "weekDay": "weekday:friday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "--weekday:saturday-rokuyou:先勝" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先勝",
        "weekDay": "weekday:saturday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:saturday-rokuyou:先勝" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先勝",
        "weekDay": "weekday:saturday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:saturday-rokuyou:先勝" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先勝",
        "weekDay": "weekday:saturday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:saturday-rokuyou:先勝" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先勝",
        "weekDay": "weekday:saturday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "--weekday:sunday-rokuyou:友引" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:友引",
        "weekDay": "weekday:sunday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:sunday-rokuyou:友引" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:友引",
        "weekDay": "weekday:sunday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:sunday-rokuyou:友引" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:友引",
        "weekDay": "weekday:sunday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:sunday-rokuyou:友引" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:友引",
        "weekDay": "weekday:sunday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "--weekday:monday-rokuyou:先負" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先負",
        "weekDay": "weekday:monday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:monday-rokuyou:先負" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先負",
        "weekDay": "weekday:monday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:monday-rokuyou:先負" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先負",
        "weekDay": "weekday:monday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:monday-rokuyou:先負" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先負",
        "weekDay": "weekday:monday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "--weekday:tuesday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:tuesday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:tuesday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:tuesday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:tuesday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:tuesday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:tuesday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:tuesday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "--weekday:wednesday-rokuyou:大安" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:大安",
        "weekDay": "weekday:wednesday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:wednesday-rokuyou:大安" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:大安",
        "weekDay": "weekday:wednesday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:wednesday-rokuyou:大安" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:大安",
        "weekDay": "weekday:wednesday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:wednesday-rokuyou:大安" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:大安",
        "weekDay": "weekday:wednesday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "--weekday:thursday-rokuyou:赤口" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:赤口",
        "weekDay": "weekday:thursday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:thursday-rokuyou:赤口" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:赤口",
        "weekDay": "weekday:thursday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:thursday-rokuyou:赤口" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:赤口",
        "weekDay": "weekday:thursday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:thursday-rokuyou:赤口" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:赤口",
        "weekDay": "weekday:thursday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "--weekday:friday-rokuyou:先勝" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先勝",
        "weekDay": "weekday:friday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:friday-rokuyou:先勝" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先勝",
        "weekDay": "weekday:friday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:friday-rokuyou:先勝" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先勝",
        "weekDay": "weekday:friday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:friday-rokuyou:先勝" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先勝",
        "weekDay": "weekday:friday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "--weekday:saturday-rokuyou:友引" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:友引",
        "weekDay": "weekday:saturday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:saturday-rokuyou:友引" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:友引",
        "weekDay": "weekday:saturday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:saturday-rokuyou:友引" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:友引",
        "weekDay": "weekday:saturday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:saturday-rokuyou:友引" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:友引",
        "weekDay": "weekday:saturday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "--weekday:sunday-rokuyou:先負" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先負",
        "weekDay": "weekday:sunday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:sunday-rokuyou:先負" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先負",
        "weekDay": "weekday:sunday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:sunday-rokuyou:先負" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先負",
        "weekDay": "weekday:sunday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:sunday-rokuyou:先負" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先負",
        "weekDay": "weekday:sunday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "--weekday:monday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:monday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:monday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:monday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:monday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:monday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:monday-rokuyou:仏滅" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:仏滅",
        "weekDay": "weekday:monday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "--weekday:tuesday-rokuyou:大安" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:大安",
        "weekDay": "weekday:tuesday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:tuesday-rokuyou:大安" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:大安",
        "weekDay": "weekday:tuesday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:tuesday-rokuyou:大安" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:大安",
        "weekDay": "weekday:tuesday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:tuesday-rokuyou:大安" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:大安",
        "weekDay": "weekday:tuesday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "--weekday:wednesday-rokuyou:赤口" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:赤口",
        "weekDay": "weekday:wednesday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:wednesday-rokuyou:赤口" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:赤口",
        "weekDay": "weekday:wednesday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:wednesday-rokuyou:赤口" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:赤口",
        "weekDay": "weekday:wednesday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:wednesday-rokuyou:赤口" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:赤口",
        "weekDay": "weekday:wednesday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "--weekday:thursday-rokuyou:先勝" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先勝",
        "weekDay": "weekday:thursday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:thursday-rokuyou:先勝" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先勝",
        "weekDay": "weekday:thursday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:thursday-rokuyou:先勝" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先勝",
        "weekDay": "weekday:thursday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:thursday-rokuyou:先勝" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先勝",
        "weekDay": "weekday:thursday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "--weekday:friday-rokuyou:友引" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:友引",
        "weekDay": "weekday:friday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:friday-rokuyou:友引" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:友引",
        "weekDay": "weekday:friday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:friday-rokuyou:友引" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:友引",
        "weekDay": "weekday:friday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:friday-rokuyou:友引" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:友引",
        "weekDay": "weekday:friday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
    "--weekday:saturday-rokuyou:先負" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先負",
        "weekDay": "weekday:saturday",
      },
      "rarity": 42,
    },
    "-month:8-weekday:saturday-rokuyou:先負" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先負",
        "weekDay": "weekday:saturday",
      },
      "rarity": 504,
    },
    "year:2021--weekday:saturday-rokuyou:先負" => Object {
      "characteristic": Object {
        "rokuyou": "rokuyou:先負",
        "weekDay": "weekday:saturday",
        "year": "year:2021",
      },
      "rarity": 42.42,
    },
    "year:2021-month:8-weekday:saturday-rokuyou:先負" => Object {
      "characteristic": Object {
        "month": "month:8",
        "rokuyou": "rokuyou:先負",
        "weekDay": "weekday:saturday",
        "year": "year:2021",
      },
      "rarity": 509.04,
    },
  },
  "ranking": Map {
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
  },
}
`);
});
