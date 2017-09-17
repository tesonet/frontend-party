const post = jest.fn();
jest.mock('../../src/services/RequestHTTP', () => ({ default: { post } }));

import { fetchTokenByUsernameAndPassword } from '../../src/services/RequestToken';

test('should throw error if response is not valid', async () => {
  post.mockReturnValueOnce(Promise.resolve({ data: { } }));
  await expect(fetchTokenByUsernameAndPassword('username', 'password')).rejects.toMatchObject(expect.any(Error));
});

test('should return valid token string', async () => {
  post.mockReturnValueOnce(Promise.resolve({ data: { token: 'token' } }));
  const token = await fetchTokenByUsernameAndPassword('username', 'password');
  expect(post).toHaveBeenLastCalledWith('v1/tokens', { username: 'username', password: 'password' });
  expect(token).toBe('token');
});
