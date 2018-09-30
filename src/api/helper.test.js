import { isNonEmptyObject, sortByTwoColumns } from './helper';

describe('isNonEmptyObject', () => {
  test('isNonEmptyObject(null) equal false', () => {
    expect(isNonEmptyObject(null)).toBeFalsy();
  });

  test('isNonEmptyObject(true) equal false', () => {
    expect(isNonEmptyObject(true)).toBeFalsy();
  });

  test('isNonEmptyObject(\'\') equal false', () => {
    expect(isNonEmptyObject('')).toBeFalsy();
  });

  test('isNonEmptyObject({}) equal false', () => {
    expect(isNonEmptyObject({})).toBeFalsy();
  });

  test('isNonEmptyObject({a: 1}) equal true', () => {
    expect(isNonEmptyObject({ a: 1 })).toBeTruthy();
  });
});

describe('sortByTwoColumns outer', () => {
  test('sortByTwoColumns(null, null) equal null', () => {
    expect(sortByTwoColumns(null, null)).toBe(null);
  });
  test('sortByTwoColumns(\'name\', null) equal null', () => {
    expect(sortByTwoColumns('name', null)).toBe(null);
  });
  test('sortByTwoColumns(null, \'distance\') equal null', () => {
    expect(sortByTwoColumns(null, 'distance')).toBe(null);
  });
  test('sortByTwoColumns(\'name\', \'distance\') return function', () => {
    expect(sortByTwoColumns('name', 'distance')).toBeDefined();
  });

  describe('sortByTwoColumns inner', () => {
    const fn = sortByTwoColumns('name', 'distance');

    test('sortByTwoColumns(null, null) equal null', () => {
      expect(fn(null, null)).toBe(null);
    });

    test('sortByTwoColumns(obj, null) equal null', () => {
      expect(fn({ a: 1 }, null)).toBe(null);
    });

    test('sortByTwoColumns(null, obj) equal null', () => {
      expect(fn(null, { a: 1 })).toBe(null);
    });

    test('sortByTwoColumns(a:1, a:1) equal 0', () => {
      const a = { name: 'a', distance: 1 };
      const b = { name: 'a', distance: 1 };
      expect(fn(a, b)).toBe(0);
    });

    test('sortByTwoColumns(a:2, a:1) equal 1', () => {
      const a = { name: 'a', distance: 2 };
      const b = { name: 'a', distance: 1 };
      expect(fn(a, b)).toBe(1);
    });

    test('sortByTwoColumns(a:1, a:2) equal -1', () => {
      const a = { name: 'a', distance: 1 };
      const b = { name: 'a', distance: 2 };
      expect(fn(a, b)).toBe(-1);
    });

    test('sortByTwoColumns(b:1, a:1) equal 1', () => {
      const a = { name: 'b', distance: 1 };
      const b = { name: 'a', distance: 1 };
      expect(fn(a, b)).toBe(1);
    });

    test('sortByTwoColumns(b:2, a:1) equal 1', () => {
      const a = { name: 'b', distance: 2 };
      const b = { name: 'a', distance: 1 };
      expect(fn(a, b)).toBe(1);
    });

    test('sortByTwoColumns(b:1, a:2) equal 1', () => {
      const a = { name: 'b', distance: 1 };
      const b = { name: 'a', distance: 2 };
      expect(fn(a, b)).toBe(1);
    });

    test('sortByTwoColumns(a:1, b:1) equal -1', () => {
      const a = { name: 'a', distance: 1 };
      const b = { name: 'b', distance: 1 };
      expect(fn(a, b)).toBe(-1);
    });

    test('sortByTwoColumns(a:2, b:1) equal -1', () => {
      const a = { name: 'a', distance: 2 };
      const b = { name: 'b', distance: 1 };
      expect(fn(a, b)).toBe(-1);
    });

    test('sortByTwoColumns(a:1, b:2) equal -1', () => {
      const a = { name: 'a', distance: 1 };
      const b = { name: 'b', distance: 2 };
      expect(fn(a, b)).toBe(-1);
    });
  });
});
