import store from './store';

it('contains a default state', () => {
  expect(store.getState()).toHaveProperty('auth.isLoggedIn', expect.any(Boolean));
});
