import tesonetClient from '@Common/client/tesonetClient';

import getToken from '../getToken';

jest.mock('@Common/client/tesonetClient', () => ({
  getToken: jest.fn(),
}));

describe('getToken', () => {
  it('should get token', async () => {
    const username = 'tesonet';
    const password = 'tesonetpassword';

    await getToken(username, password);

    expect(tesonetClient.getToken).toHaveBeenCalledTimes(1);
    expect(tesonetClient.getToken).toHaveBeenCalledWith(username, password);
  });
});
