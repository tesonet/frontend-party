import { compareNumbers, compareStrings } from './comparer';

it('should compare numbers [2, 4]', () => {
    expect(compareNumbers(2, 4)).toBeLessThan(0);
});

it('should compare numbers [4, 2]', () => {
    expect(compareNumbers(4, 2)).toBeGreaterThan(0);
});

it('should compare strings ["Estonia", "Lithuania"]', () => {
    expect(compareStrings('Estonia', 'Lithuania')).toBeLessThan(0);
});

it('should compare strings ["Lithuania", "Estonia"]', () => {
    expect(compareStrings('Lithuania', 'Estonia')).toBeGreaterThan(0);
});
