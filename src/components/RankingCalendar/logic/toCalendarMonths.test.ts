import { Temporal } from "@js-temporal/polyfill";
import { toCalendarMonths } from "./toCalendarMonths";

it("one month", () => {
  const data = [];
  for (let day = 1; day <= 20; day++) {
    data.push({
      day: Temporal.PlainDate.from({ year: 2021, month: 6, day }),
    });
  }
  expect(toCalendarMonths(data)).toMatchInlineSnapshot(`
Array [
  Object {
    "month": "2021-06",
    "weeks": Array [
      Array [
        undefined,
        undefined,
        Object {
          "day": "2021-06-01",
        },
        Object {
          "day": "2021-06-02",
        },
        Object {
          "day": "2021-06-03",
        },
        Object {
          "day": "2021-06-04",
        },
        Object {
          "day": "2021-06-05",
        },
      ],
      Array [
        Object {
          "day": "2021-06-06",
        },
        Object {
          "day": "2021-06-07",
        },
        Object {
          "day": "2021-06-08",
        },
        Object {
          "day": "2021-06-09",
        },
        Object {
          "day": "2021-06-10",
        },
        Object {
          "day": "2021-06-11",
        },
        Object {
          "day": "2021-06-12",
        },
      ],
      Array [
        Object {
          "day": "2021-06-13",
        },
        Object {
          "day": "2021-06-14",
        },
        Object {
          "day": "2021-06-15",
        },
        Object {
          "day": "2021-06-16",
        },
        Object {
          "day": "2021-06-17",
        },
        Object {
          "day": "2021-06-18",
        },
        Object {
          "day": "2021-06-19",
        },
      ],
      Array [
        Object {
          "day": "2021-06-20",
        },
      ],
    ],
  },
]
`);
});
it("two months", () => {
  const data = [];
  for (let day = 25; day <= 30; day++) {
    data.push({
      day: Temporal.PlainDate.from({ year: 2021, month: 6, day }),
    });
  }
  for (let day = 1; day <= 10; day++) {
    data.push({
      day: Temporal.PlainDate.from({ year: 2021, month: 7, day }),
    });
  }
  expect(toCalendarMonths(data)).toMatchInlineSnapshot(`
Array [
  Object {
    "month": "2021-06",
    "weeks": Array [
      Array [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        Object {
          "day": "2021-06-25",
        },
        Object {
          "day": "2021-06-26",
        },
      ],
      Array [
        Object {
          "day": "2021-06-27",
        },
        Object {
          "day": "2021-06-28",
        },
        Object {
          "day": "2021-06-29",
        },
        Object {
          "day": "2021-06-30",
        },
      ],
    ],
  },
  Object {
    "month": "2021-07",
    "weeks": Array [
      Array [
        undefined,
        undefined,
        undefined,
        undefined,
        Object {
          "day": "2021-07-01",
        },
        Object {
          "day": "2021-07-02",
        },
        Object {
          "day": "2021-07-03",
        },
      ],
      Array [
        Object {
          "day": "2021-07-04",
        },
        Object {
          "day": "2021-07-05",
        },
        Object {
          "day": "2021-07-06",
        },
        Object {
          "day": "2021-07-07",
        },
        Object {
          "day": "2021-07-08",
        },
        Object {
          "day": "2021-07-09",
        },
        Object {
          "day": "2021-07-10",
        },
      ],
    ],
  },
]
`);
});
