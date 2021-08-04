import { renderHook } from '@testing-library/react-hooks';

import { errorMessages } from '@Common';

import { getServers } from '../../services';
import useFetchServers from '../useFetchServers';
import { useLocalStorage } from '../../../../hooks';

jest.mock('../../services/getServers');
jest.mock('../../../../hooks/useLocalStorage');

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

const mockLocalStorage = () => {
  const token = '465465AC';
  useLocalStorage.mockImplementation(() => ({
    value: token,
  }));

  return token;
};

describe('useFetchServers', () => {
  test('should fetch servers', async () => {
    const servers = 'test';
    getServers.mockResolvedValue(servers);
    const token = mockLocalStorage();

    const { result, waitForNextUpdate } = renderUseFetchServersHook();

    expect(result.current.serversLoaded).toStrictEqual(false);

    await waitForNextUpdate();

    expect(result.current.serversLoaded).toStrictEqual(true);
    expect(result.current.servers).toStrictEqual(servers);
    expect(getServers).toBeCalledWith(token);
  });

  test('should return default error message on fetch fail', async () => {
    getServers.mockRejectedValue({ response: { status: 404 } });
    mockLocalStorage();

    const { result, waitForNextUpdate, errorHandlerMock } = renderUseFetchServersHook();

    expect(result.current.serversLoaded).toStrictEqual(false);

    await waitForNextUpdate();

    expect(result.current.serversLoaded).toStrictEqual(true);
    expect(errorHandlerMock.showError).toBeCalledWith(errorMessages.DEFAULT_ERROR);
  });
});
