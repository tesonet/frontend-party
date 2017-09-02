import {required} from './validations';


describe('required', () => {
  it('handles invalid values', () => {
    expect(required()).toBe(false);
    expect(required(undefined)).toBe(false);
    expect(required(null)).toBe(false);
    expect(required('')).toBe(false);
    expect(required({})).toBe(false);
    expect(required([])).toBe(false);
  });

  it('handles valid values', () => {
    expect(required('1')).toBe(true);
    expect(required(1)).toBe(true);
    expect(required(0)).toBe(true);
    expect(required(true)).toBe(true);
    expect(required(false)).toBe(true);
  });
});
