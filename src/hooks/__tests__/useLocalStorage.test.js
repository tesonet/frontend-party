import { renderHook, act } from '@testing-library/react-hooks';

import useLocalStorage from '../useLocalStorage';
import { TOKEN } from '../../config/constants';

const newToken = '46546AA';

const mockLocalStorage = () => {
  const setItemMock = jest.fn();
  const removeItemMock = jest.fn();

  global.Storage.prototype.setItem = setItemMock;
  global.Storage.prototype.removeItem = removeItemMock;

  return {
    setItemMock,
    removeItemMock,
  };
};

describe('useLocalStorage', () => {
  it('should update key and local storage', () => {
    const { setItemMock } = mockLocalStorage();
    const { result } = renderHook(() => useLocalStorage(TOKEN));

    act(() => {
      result.current.updateKey(newToken);
    });

    expect(setItemMock).toBeCalledWith(TOKEN, newToken);
    expect(result.current.value).toStrictEqual(newToken);
  });

  it('should remove key from state and local storage', () => {
    const { removeItemMock } = mockLocalStorage();
    const { result } = renderHook(() => useLocalStorage(TOKEN));

    act(() => {
      result.current.updateKey(newToken);
    });

    expect(result.current.value).toStrictEqual(newToken);

    act(() => {
      result.current.removeValue(TOKEN);
    });

    expect(result.current.value).toStrictEqual(null);
    expect(removeItemMock).toBeCalled();
  });
});
