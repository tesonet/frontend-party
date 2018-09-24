import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { handleLoginSaga, handleLogout } from './userSaga';
import { API_URL } from '../../constants/constants';
import { LOGIN_SUCCESS } from '../actions/constants';

describe('userSaga', () => {
  const payload = {
    username: 'username',
    password: 'password',
  };
  it('logs user in', () => {
    const generator = handleLoginSaga({
      type: 'LOGIN_ACTION',
      payload,
    });
    const data = {
      token: '123',
    };
    expect(generator.next().value).toEqual(
      call(axios.post, `${API_URL}/tokens`, {
        ...payload,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    );
    generator.next({ data });
    expect(localStorage.token).toBe('123');
    expect(generator.next().value).toEqual(put({ type: LOGIN_SUCCESS }));
    expect(generator.next().done).toBeTruthy();
  });

  it('logs user out', () => {
    expect(localStorage.token).toBe('123');
    handleLogout();
    expect(localStorage.token).toBe(undefined);
  });
});
