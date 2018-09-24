import { loginAction, logoutAction } from './userActions';

describe('userActions', () => {
  const payload = {
    username: 'username',
    password: 'password',
  };
  it('creates a login action', () => {
    expect(loginAction(payload)).toEqual({
      type: 'LOGIN_ACTION',
      payload,
    });
  });

  it('creates a logout action', () => {
    expect(logoutAction()).toEqual({
      type: 'LOGOUT_ACTION',
    });
  });
});
