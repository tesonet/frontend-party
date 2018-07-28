import mockAxios from 'axios';
import api from './api';
import servers from '../tests/fixtures/servers';

it('has a `servers` and `servers.get` properties', () => {
  expect(api).toHaveProperty('servers');
  expect(api).toHaveProperty('servers.get');
});

describe('`servers.get`', () => {
  it('returns a promise that resolves with a list of servers', () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: servers }));
    return api.servers.get().then(result => { expect(result).toEqual(servers); });
  });
});
