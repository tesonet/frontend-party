import servers from '../../tests/fixtures/servers';
import tokens from '../../tests/fixtures/tokens';

export default {
  setToken: jest.fn(),
  getToken: jest.fn(() => tokens.token),

  servers: {
    get: jest.fn(() => Promise.resolve(servers))
  },

  tokens: {
    post: jest.fn(() => Promise.resolve())
  }
};
