const create = jest.fn();
const instance = jest.fn();

create.mockReturnValue(instance);
jest.mock('axios', () => ({
  default: {
    create,
  },
}));

import RequestHTTP from '../../src/services/RequestHTTP';

test('should test if auto instance was created', () => {
  expect(RequestHTTP).toBe(instance);
  expect(create).toHaveBeenCalledWith({
    baseURL: 'http://playground.tesonet.lt',
    timeout: 10 * 1000,
  });
});
