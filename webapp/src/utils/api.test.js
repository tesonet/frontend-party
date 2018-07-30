import mockAxios from 'axios';
import api, { LS_TOKEN_KEY } from './api';
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
  it('exists in the API', () => {
    expect(api).toHaveProperty('servers.get');
  });

  it('returns a promise that resolves with a list of servers', () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: servers }));
    return api.servers.get().then(result => { expect(result).toEqual(servers); });
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
