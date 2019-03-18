import 'whatwg-fetch';
import * as types from './actionTypes';

export function authorizationRequest() {
  return {
    type: types.AUTH_REQUEST
  };
}

export function authorizationSuccess(token) {
  sessionStorage.setItem('token', token);

  return {
    type: types.AUTH_SUCCESS,
    payload: {
      isLogged: true
    }
  };
}

export function authorizationFailure(error) {
  let errorMsg = error;

  if (error === 'Unauthorized')
    errorMsg = 'The user name or password is incorrect. Please try again.';

  return {
    type: types.AUTH_FAILURE,
    payload: {
      error: errorMsg
    }
  };
}

export const authorization = (username, password) => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(authorizationRequest());

    fetch('http://playground.tesonet.lt/v1/tokens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(response => {
        if (response.ok) {
          response.json().then(result => {
            setTimeout(() => {
              dispatch(authorizationSuccess(result.token));
              resolve(result);
            }, 300);
          });
        } else {
          let error = new Error(response.statusText);
          error.response = response;
          setTimeout(() => {
            dispatch(authorizationFailure(response.statusText));
            reject(error);
          }, 300);
        }
      })
      .catch(error => console.log(error));
  });

export function logUserOut() {
  sessionStorage.clear();

  return {
    type: types.LOG_OUT,
    payload: {
      isLogged: false
    }
  };
}
