import servers from '../../tests/fixtures/servers';

export default {
  servers: {
    get: jest.fn(() => Promise.resolve(servers))
  }
};
