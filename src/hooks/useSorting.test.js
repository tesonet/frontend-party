import { renderHook, act } from '@testing-library/react-hooks';
import useSorting from './useSorting';

describe('UseSorting', () => {
  const data = [
    { anyName: 2, anyName2: 'C' },
    { anyName: 3, anyName2: 'A' },
    { anyName: 1, anyName2: 'B' },
  ];
  let hookResult;
  beforeEach(() => {
    const { result } = renderHook(() => useSorting(data));
    hookResult = result;
  });

  it('should create config on first action', () => {
    expect(hookResult.current.sortConfig).toEqual({});

    act(() => {
      hookResult.current.sortData('anyName');
    });

    expect(hookResult.current.sortConfig).toEqual(
      expect.objectContaining(
        {
          direction: expect.any(String),
          key: expect.any(String),
        },
      ),
    );
  });

  it('should set values to sortConfig', () => {
    const keyName = 'anyName';
    act(() => {
      hookResult.current.sortData(keyName);
    });
    expect(hookResult.current.sortConfig).toEqual({ direction: 'asc', key: keyName });
  });

  it('should sort data asc', () => {
    act(() => {
      hookResult.current.sortData('anyName');
    });
    expect(hookResult.current.items[0]).toEqual(data[2]);
    expect(hookResult.current.items[1]).toEqual(data[0]);
    expect(hookResult.current.items[2]).toEqual(data[1]);
  });

  it('should sort data desc', () => {
    act(() => {
      hookResult.current.sortData('anyName');
    });
    act(() => {
      hookResult.current.sortData('anyName');
    });
    expect(hookResult.current.items[0]).toEqual(data[1]);
    expect(hookResult.current.items[1]).toEqual(data[0]);
    expect(hookResult.current.items[2]).toEqual(data[2]);
  });

  it('should sort any key entry in array', () => {
    act(() => {
      hookResult.current.sortData('anyName2');
    });
    expect(hookResult.current.items[0]).toEqual(data[1]);
    expect(hookResult.current.items[1]).toEqual(data[2]);
    expect(hookResult.current.items[2]).toEqual(data[0]);
  });
});
