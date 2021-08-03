import { act, renderHook } from '@testing-library/react-hooks';

import { errorMessages } from '@Common';

import getToken from '../../services/getToken';
import useLogin from '../useLogin';

jest.mock('../../services/getToken');

const renderUseLoginHook = () => {
  const errorHandlerMock = {
    hideError: jest.fn(),
    showError: jest.fn(),
  };
  const { result, waitForNextUpdate } = renderHook(() => useLogin(errorHandlerMock));

  return {
    result,
    waitForNextUpdate,
    errorHandlerMock,
  };
};

describe('useLogin', () => {
  test('should login on action call', async () => {
    const username = 'tesonet';
    const password = 'tesonetpass';

    const { result, waitForNextUpdate } = renderUseLoginHook();

    act(() => {
      result.current.sendAction(username, password);
    });

    expect(result.current.loaded).toStrictEqual(false);

    await waitForNextUpdate();

    expect(result.current.loaded).toStrictEqual(true);
    expect(getToken).toHaveBeenCalledTimes(1);
    expect(getToken).toHaveBeenCalledWith(username, password);
  });

  it.each([
    ['auth', 401, errorMessages.AUTH_ERROR],
    ['default', 404, errorMessages.DEFAULT_ERROR],
  ])(
    'should return %s error message on %s error status',
    async (errorType, errorStatus, errorMessage) => {
      getToken.mockRejectedValue({ response: { status: errorStatus } });

      const { result, waitForNextUpdate, errorHandlerMock } = renderUseLoginHook();

      act(() => {
        result.current.sendAction();
      });

      await waitForNextUpdate();

      expect(errorHandlerMock.showError).toBeCalledWith(errorMessage);
    },
  );
});
