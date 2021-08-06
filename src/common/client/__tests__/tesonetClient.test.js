import axios from 'axios';

import { createTesonetClient } from '../tesonetClient';
import { TOKENS_ENDPOINT, SERVERS_ENDPOINT } from '../config/constants';

jest.mock('axios');

const token = '132465ABC';

describe('tesonetClient', () => {
  it('should get token with data and headers', async () => {
    const postMock = jest.fn(() => ({ data: { token } }));
    axios.create.mockImplementationOnce(() => ({ post: postMock }));

    const username = 'tesonet';
    const password = 'tesonetpassword';

    const response = await createTesonetClient().getToken(username, password);

    expect(response).toStrictEqual(token);
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toBeCalledWith(TOKENS_ENDPOINT, { username, password }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  it('should get servers with headers', async () => {
    const data = 'someServers';
    const getMock = jest.fn(() => ({ data }));
    axios.create.mockImplementationOnce(() => ({ get: getMock }));

    const response = await createTesonetClient().getServers(token);

    expect(response).toStrictEqual(data);
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toBeCalledWith(SERVERS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  });
});
