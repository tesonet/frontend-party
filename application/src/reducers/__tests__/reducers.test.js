import LoginReducer from '../../reducers/LoginReducer';
import * as types from '../../actions/Actions';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('Login Reducer', () => {

  let initialState = {
    userAuthenticated: false,
    pending: false,
    errorMessage: false,
    token: false
  }

  const mock = new MockAdapter(axios);

  const correctLogin = { username: 'tesonet', password: 'partyanimal' },
        badLogin = {username: 'username', password: 'password'};

  it('should not affect state', () => {
    expect(LoginReducer(initialState, { type: 'NOT_EXISTING_ACTION' })).toEqual(initialState);
  })

  it('can handle bad LOGIN_REQUEST', () => {
    mock.onPost('/token', {
      params: {
        username: 'tesonet',
        password: 'partyanimal'
      }}).reply(200,{
        token: 'token'
      })
      axios.post('/token', {
        params: {
          username: 'tesonet',
          password: 'partyanimal'
        }
      }).then((response) =>
    {console.log(response.data)}).catch((err) => {
      console.log(err)
    })

  });

  it('can handle LOGOUT', () => {
    expect(LoginReducer(undefined, { type: 'LOGOUT' })).toEqual(initialState);
  });
});
