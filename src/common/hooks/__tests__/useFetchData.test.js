import { renderHook } from '@testing-library/react-hooks';

import useFetchData from '../useFetchData';

const renderUseFetchDataHook = (action, resolveErrorMessage = null) => {
  const errorHandlerMock = {
    hideError: jest.fn(),
    showError: jest.fn(),
  };

  const { result, waitForNextUpdate } = renderHook(() => useFetchData(
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

describe('useFetchData', () => {
  test('should fetch data', async () => {
    const expectedResult = 'message from server';
    const action = () => Promise.resolve(expectedResult);
    const { result, waitForNextUpdate } = renderUseFetchDataHook(action);

    expect(result.current.loaded).toStrictEqual(false);

    await waitForNextUpdate();

    expect(result.current.loaded).toStrictEqual(true);
    expect(result.current.result).toStrictEqual(expectedResult);
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
    } = renderUseFetchDataHook(action, () => errorMessage);

    expect(result.current.loaded).toStrictEqual(false);

    await waitForNextUpdate();

    expect(errorHandlerMock.showError).toBeCalledTimes(1);
    expect(errorHandlerMock.showError).toBeCalledWith(errorMessage);
    expect(result.current.loaded).toStrictEqual(true);
  });
});
