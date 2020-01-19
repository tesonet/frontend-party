import sort from "./sort";

const initialArr= [
    {number: 15, country: "UK"},
    {number: 25, country: "LT"},
    {number: 85, country: "LT"},
    {number: 12, country: "UK"}
]

test("should sort array by given value(ascending order)", () => {
    const expectedAscArr = [
        {number: 12, country: "UK"},
        {number: 15, country: "UK"},
        {number: 25, country: "LT"},
        {number: 85, country: "LT"}
    ];

    expect(sort(initialArr, "number", "asc")).toEqual(expectedAscArr)
})

test("should sort array by given value(descending)", () => {
    const expectedDescArr = [
        {number: 85, country: "LT"},
        {number: 25, country: "LT"},
        {number: 15, country: "UK"},
        {number: 12, country: "UK"}
    ];

    expect(sort(initialArr, "number", "desc")).toEqual(expectedDescArr)
})
