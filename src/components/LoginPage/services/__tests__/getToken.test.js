import tesonetClient from '../../../../common/client/tesonetClient';

import getToken from '../getToken';

jest.mock('../../../../common/client/tesonetClient', () => ({
  __esModule: true,
  default: 'mockedDefaultExport',
}));

describe('getToken', () => {
  it('should get token', async () => {
    const username = 'tesonet';
    const password = 'tesonetpassword';

    await getToken(username, password);

    // expect(getTokenMock).toHaveBeenCalledTimes(1);
    // expect(getTokenMock).toHaveBeenCalledWith(username, password);
  });
});

/// COME BACK
