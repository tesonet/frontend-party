import {classNames} from '../utils';

describe('classNames', () => {
  it('should join strings and numbers only if they are truthy', () => {
    const testData: Array<[Array<string | number | boolean | null | undefined>, string]> = [
      [['a', 'b', 1], 'a b 1'],
      [['a', 'b', 0], 'a b'],
      [['a', '', 0], 'a'],
      [['a', '', 1], 'a 1'],
      [['a', 'b', false], 'a b'],
      [['a', null, 'c'], 'a c'],
      [['a', undefined, 'c'], 'a c'],
      [['a', true, 'c'], 'a true c'],
    ];

    testData.forEach(data => expect(classNames(...data[0])).toBe(data[1]));
  });

  it('should return empty string if no items are passed', () => {
    expect(classNames(null)).toBe('');
  });
});
