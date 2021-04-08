import { joinTruthy, sortArrayOfObjectsByKey } from "./utils";

describe("utils", () => {
  describe("joinTruthy", () => {
    it("should join strings and numbers only if they are truthy", () => {
      const TEST_DATA = [
        [["a", "b", 1], "a b 1"],
        [["a", "b", 0], "a b"],
        [["a", "", 0], "a"],
        [["a", "", 1], "a 1"],
        [["a", "b", false], "a b"],
        [["a", null, "c"], "a c"],
        [["a", undefined, "c"], "a c"],
        [["a", true, "c"], "a true c"],
      ];

      TEST_DATA.forEach(data => expect(joinTruthy(data[0])).toBe(data[1]));
    });

    it("should join strings and numbers with custom delimiter if passed", () => {
      expect(joinTruthy(["a", "b", "c"], "*")).toBe("a*b*c");
    });

    it("should return empty string if no items are passed", () => {
      expect(joinTruthy([], "*")).toBe("");
    });
  });
});

describe("sortArrayOfObjectsByKey", () => {
  it("should return empty array if empty array is passed", () => {
    const sortedArray = sortArrayOfObjectsByKey([]);
    expect(sortedArray.length).toBe(0);
  });

  it("should return unsorted array if not existing key is passed", () => {
    const UNSORTED_ARRAY = [
      { name: "nameC" },
      { name: "nameB" },
      { name: "nameA" }
    ];
    const sortedArray = sortArrayOfObjectsByKey([...UNSORTED_ARRAY], "notExistingKey");
    expect(JSON.stringify(sortedArray)).toBe(JSON.stringify(UNSORTED_ARRAY));
  });

  it("should return sorted descending array if isAscending is not passed but other arguments valid", () => {
    const UNSORTED_ARRAY = [
      { name: "nameB" },
      { name: "nameA" },
      { name: "nameC" }
    ];
    const EXPECTED_RESULT = [
      { name: "nameC" },
      { name: "nameB" },
      { name: "nameA" }
    ];
    const sortedArray = sortArrayOfObjectsByKey([...UNSORTED_ARRAY], "name");
    expect(JSON.stringify(sortedArray)).toBe(JSON.stringify(EXPECTED_RESULT));
  });

  it("should return sorted ascending array if isAscending is  passed and other arguments valid", () => {
    const UNSORTED_ARRAY = [
      { name: "nameB" },
      { name: "nameA" },
      { name: "nameC" }
    ];
    const EXPECTED_RESULT = [
      { name: "nameA" },
      { name: "nameB" },
      { name: "nameC" }
    ];
    const sortedArray = sortArrayOfObjectsByKey([...UNSORTED_ARRAY], "name", true);
    expect(JSON.stringify(sortedArray)).toBe(JSON.stringify(EXPECTED_RESULT));
  });
});