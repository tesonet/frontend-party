import servers from '../../../__fixtures__/servers';
import tokens from '../../../__fixtures__/tokens';

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
