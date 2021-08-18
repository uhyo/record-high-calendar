import { partialObjects } from "./partialObjects";

describe("partialObjects", () => {
  it("foo, bar, baz", () => {
    const arr = Array.from(
      partialObjects({
        foo: "foo",
        bar: "bar",
        baz: "baz",
      })
    );
    expect(arr).toMatchInlineSnapshot(`
Array [
  Object {},
  Object {
    "baz": "baz",
  },
  Object {
    "bar": "bar",
  },
  Object {
    "bar": "bar",
    "baz": "baz",
  },
  Object {
    "foo": "foo",
  },
  Object {
    "baz": "baz",
    "foo": "foo",
  },
  Object {
    "bar": "bar",
    "foo": "foo",
  },
  Object {
    "bar": "bar",
    "baz": "baz",
    "foo": "foo",
  },
]
`);
  });
  it("empty object", () => {
    const arr = Array.from(partialObjects({}));
    expect(arr).toEqual([{}]);
  });
});
