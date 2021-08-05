import tesonetClient from '@Common/client/tesonetClient';

import getServers from '../getServers';

jest.mock('@Common/client/tesonetClient', () => ({
  getServers: jest.fn(),
}));

describe('getServers', () => {
  it('should get servers', async () => {
    const token = '456465A';

    await getServers(token);

    expect(tesonetClient.getServers).toHaveBeenCalledTimes(1);
    expect(tesonetClient.getServers).toHaveBeenCalledWith(token);
  });
});
