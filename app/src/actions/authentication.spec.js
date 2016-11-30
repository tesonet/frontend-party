import { expect } from 'chai';
import { AUTHENTICATE, AUTHENTICATION_ERROR } from '../constants/types';
import {
  authenticationError,
  signinUserWithToken,
  signoutUser,
} from './authentication';

describe('authentication', () => {
  it('returns correct action for authenticationError action creator', () => {
    const expected = {
      type: AUTHENTICATION_ERROR,
      payload: 'code',
    };
    expect(authenticationError('code')).to.eql(expected);
  });

  it('returns correct action for signinUserWithToken action creator', () => {
    const expected = {
      type: AUTHENTICATE,
      payload: true,
    };
    expect(signinUserWithToken()).to.eql(expected);
  });

  it('returns correct action for signoutUser action creator', () => {
    const expected = {
      type: AUTHENTICATE,
      payload: false,
    };
    expect(signoutUser()).to.eql(expected);
  });
});
