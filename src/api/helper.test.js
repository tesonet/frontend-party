import { isNonEmptyObject } from './helper';

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
