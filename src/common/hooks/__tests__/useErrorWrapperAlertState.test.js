import { renderHook, act } from '@testing-library/react-hooks';

import useErrorWrapperAlertState from '../useErrorWrapperAlertState';

describe('useErrorWrapperAlertState', () => {
  test('should show and hide error', () => {
    const { result } = renderHook(() => useErrorWrapperAlertState());
    const errorMessage = 'errorMessage';

    act(() => {
      result.current.showError(errorMessage);
    });

    expect(result.current.isErrorShown).toBe(true);
    expect(result.current.errorMessage).toBe(errorMessage);

    act(() => {
      result.current.hideError();
    });

    expect(result.current.isErrorShown).toBe(false);
    expect(result.current.errorMessage).toBe(null);
  });
});
