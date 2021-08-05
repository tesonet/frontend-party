import { renderHook } from '@testing-library/react-hooks';

import { errorMessages } from '@Common';

import { getServers } from '../../services';
import useFetchServers from '../useFetchServers';

const token = '465465AC';

jest.mock('../../services/getServers');
jest.mock('../../../../hooks/useLocalStorage', () => () => ({
  value: token,
}));

const renderUseFetchServersHook = () => {
  const errorHandlerMock = {
    hideError: jest.fn(),
    showError: jest.fn(),
  };
  const { result, waitForNextUpdate } = renderHook(() => useFetchServers(errorHandlerMock));

  return {
    result,
    waitForNextUpdate,
    errorHandlerMock,
  };
};

describe('useFetchServers', () => {
  test('should fetch servers', async () => {
    const servers = 'test';
    getServers.mockResolvedValue(servers);

    const { result, waitForNextUpdate } = renderUseFetchServersHook();

    expect(result.current.serversLoaded).toStrictEqual(false);

    await waitForNextUpdate();

    expect(result.current.serversLoaded).toStrictEqual(true);
    expect(result.current.servers).toStrictEqual(servers);
    expect(getServers).toBeCalledWith(token);
  });

  test('should return default error message on fetch fail', async () => {
    getServers.mockRejectedValue({ response: { status: 404 } });

    const { result, waitForNextUpdate, errorHandlerMock } = renderUseFetchServersHook();

    expect(result.current.serversLoaded).toStrictEqual(false);

    await waitForNextUpdate();

    expect(result.current.serversLoaded).toStrictEqual(true);
    expect(errorHandlerMock.showError).toBeCalledWith(errorMessages.DEFAULT_ERROR);
  });
});
