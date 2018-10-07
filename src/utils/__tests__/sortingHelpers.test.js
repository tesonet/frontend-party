import { sortAlphabetically, sortByNumbers } from '../sortingHelpers';

describe('sorting helpers', () => {
    const testArray = [
        { name: 'b', distance: 3 },
        { name: 'a', distance: 2 },
        { name: 'c', distance: 1 },
        { name: 'e', distance: 4 },
        { name: 'd', distance: 5 },
    ];

    const alphAsc = [
        { name: 'a', distance: 2 },
        { name: 'b', distance: 3 },
        { name: 'c', distance: 1 },
        { name: 'd', distance: 5 },
        { name: 'e', distance: 4 },
    ];

    const alphDesc = [
        { name: 'e', distance: 4 },
        { name: 'd', distance: 5 },
        { name: 'c', distance: 1 },
        { name: 'b', distance: 3 },
        { name: 'a', distance: 2 },
    ];

    const numDesc = [
        { name: 'd', distance: 5 },
        { name: 'e', distance: 4 },
        { name: 'b', distance: 3 },
        { name: 'a', distance: 2 },
        { name: 'c', distance: 1 },
    ];

    const numAsc = [
        { name: 'c', distance: 1 },
        { name: 'a', distance: 2 },
        { name: 'b', distance: 3 },
        { name: 'e', distance: 4 },
        { name: 'd', distance: 5 },
    ];

    it("should sort array alphabetically (asc)", () => {
        expect(sortAlphabetically(testArray, 'name', true)).toEqual(alphAsc);
    });

    it("should sort array alphabetically (desc)", () => {
        expect(sortAlphabetically(testArray, 'name', false)).toEqual(alphDesc);
    });

    it("should sort array by numbers (asc)", () => {
        expect(sortByNumbers(testArray, 'distance', true)).toEqual(numAsc);
    });

    it("should sort array by numbers (desc)", () => {
        expect(sortByNumbers(testArray, 'distance', false)).toEqual(numDesc);
    });
});