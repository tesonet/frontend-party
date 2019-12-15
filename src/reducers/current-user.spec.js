import currentUser from './current-user';

test('initially state should not contain token', () => {
  expect(currentUser().token).toBe(undefined);
});

test('token should be put to the state after "set-token" is dispatched', () => {
  const testToken = 'my-super-token';
  expect(currentUser({}, {
    payload: testToken,
    type: 'set-token'
  }).token).toBe(testToken);
});

test('token should persist between actions', () => {
  const myToken = 'im-token';
  expect(currentUser({
    token: myToken
  }, {
    type: 'some-action'
  }).token).toBe(myToken);
});

test('dispatching "logout" should clear session', () => {
  expect(currentUser({
    token: 'totally-defined'
  }, {
    type: 'logout'
  }).token).toBe(undefined);
});