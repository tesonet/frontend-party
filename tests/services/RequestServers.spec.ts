const get = jest.fn();
jest.mock('../../src/services/RequestHTTP', () => ({ default: { get } }));

import { fetchServersList } from '../../src/services/RequestServers';

test('should throw error if response is not valid', async () => {
  get.mockReturnValueOnce(Promise.resolve({ data: { } }));
  await expect(fetchServersList()).rejects.toMatchObject(expect.any(Error));
});

test('should return server list', async () => {
  const server1 = { name: 'server', distance: 0 };
  get.mockReturnValueOnce(Promise.resolve({ data: [server1] }));
  const servers = await fetchServersList();
  expect(get).toHaveBeenLastCalledWith('v1/servers');
  expect(servers).toEqual([server1]);
});
