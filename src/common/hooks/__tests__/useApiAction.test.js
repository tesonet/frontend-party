import { renderHook, act } from '@testing-library/react-hooks';

import useApiAction from '../useApiAction';

const renderApiActionHook = (action, resolveErrorMessage = null) => {
  const errorHandlerMock = {
    hideError: jest.fn(),
    showError: jest.fn(),
  };

  const { result, waitForNextUpdate } = renderHook(() => useApiAction(
    action,
    errorHandlerMock,
    resolveErrorMessage,
  ));

  return {
    result,
    waitForNextUpdate,
    errorHandlerMock,
  };
};

describe('useApiAction', () => {
  test('should fetch action on request', async () => {
    const action = (message) => Promise.resolve(message);
    const { result, waitForNextUpdate } = renderApiActionHook(action);

    act(() => {
      result.current.sendAction();
    });

    expect(result.current.loaded).toStrictEqual(false);
    await waitForNextUpdate();
    expect(result.current.loaded).toStrictEqual(true);
  });

  test('should show error on request fail', async () => {
    const errorStatus = 404;
    const errorMessage = `got error with status ${errorStatus}`;
    // eslint-disable-next-line prefer-promise-reject-errors
    const action = () => Promise.reject({ response: { status: errorStatus } });

    const {
      result,
      waitForNextUpdate,
      errorHandlerMock,
    } = renderApiActionHook(action, () => errorMessage);

    act(() => {
      result.current.sendAction();
    });

    expect(result.current.loaded).toStrictEqual(false);

    await waitForNextUpdate();

    expect(errorHandlerMock.showError).toBeCalledTimes(1);
    expect(errorHandlerMock.showError).toBeCalledWith(errorMessage);
    expect(result.current.loaded).toStrictEqual(true);
  });
});
