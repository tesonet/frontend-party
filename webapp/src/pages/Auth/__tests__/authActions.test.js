import { doLogin, doLogout, TYPE_LOG_IN, TYPE_LOG_OUT } from '../authActions';

describe('doLogin', () => {
  it('returns the correct type', () => {
    expect(doLogin().type).toBe(TYPE_LOG_IN);
  });
});

describe('doLogout', () => {
  it('returns the correct type', () => {
    expect(doLogout().type).toBe(TYPE_LOG_OUT);
  });
});
