import mockAxios from 'axios';
import api, { ERROR_MISSING_TOKEN, LS_TOKEN_KEY } from './api';
import servers from '../tests/fixtures/servers';
import tokens from '../tests/fixtures/tokens';

describe('setToken()', () => {
  it('will erase the token from the local storage if called with `null`', () => {
    api.setToken(null);
    expect(localStorage.removeItem).toHaveBeenCalledWith(LS_TOKEN_KEY);
  });

  it('will set the token in the local storage', () => {
    api.setToken(tokens.token);
    expect(localStorage.setItem).toHaveBeenCalledWith(LS_TOKEN_KEY, tokens.token);
  });
});

describe('getToken()', () => {
  it('returns a token from the local storage', () => {
    localStorage.getItem.mockImplementationOnce(() => tokens.token);
    expect(api.getToken()).toBe(tokens.token);
  });
});

describe('servers.get', () => {
  beforeEach(() => {
    jest.spyOn(api, 'getToken').mockImplementation(() => tokens.token);
  });

  afterEach(() => {
    api.getToken.mockRestore();
  });

  it('exists in the API', () => {
    expect(api).toHaveProperty('servers.get');
  });

  it('throws an exception if no token exists', () => {
    api.getToken.mockImplementationOnce(() => null);
    expect(() => api.servers.get()).toThrow(ERROR_MISSING_TOKEN);
  });

  it('uses the token to fetch a list of servers', () => {
    api.servers.get();
    expect(mockAxios.get).toHaveBeenCalledWith(expect.any(String), { headers: { 'Authorization': `Bearer ${tokens.token}` } })
  });

  it('returns a promise that resolves with a list of servers', () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: servers }));
    return api.servers.get().then(result => { expect(result).toEqual(servers); });
  });

  it('sorts the data by distance and name', () => {
    const data = [
      { name: 'AB', distance: 15 },
      { name: 'AA', distance: 10 },
      { name: 'AA', distance: 15 }
    ];

    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data }));

    return api.servers.get().then(result => {
      expect(result[0]).toBe(data[1]);
      expect(result[1]).toBe(data[2]);
      expect(result[2]).toBe(data[0]);
    });
  });
});

describe('tokens.post', () => {
  it('exists in the API', () => {
    expect(api).toHaveProperty('tokens.post');
  });

  it('passes a username and password to the API', () => {
    const data = { username: 'my_username', password: 'my_password' };
    api.tokens.post(data.username, data.password);
    expect(mockAxios.post).toHaveBeenCalledWith(expect.any(String), data);
  });

  it('returns a promise that resolves with a token', () => {
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data: tokens }));
    return api.tokens.post().then(result => { expect(result).toEqual(tokens) })
  });
});
