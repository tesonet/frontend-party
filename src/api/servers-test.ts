jest.mock('../servers')

import * as user from 'servers'

// The assertion for a promise must be returned.
it('works with promises', () => {
  expect.assertions(1)
  return user.getUserName(4).then(data => expect(data).toEqual('Mark'))
})
