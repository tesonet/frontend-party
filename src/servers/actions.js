import 'whatwg-fetch';

import * as types from './actionTypes';

export const clearServers = () => ({
  type: types.CLEAR_SERVERS
});

export const getServersRequest = servers => ({
  type: types.GET_SERVERS_REQUEST
});

export const getServersSuccess = servers => ({
  type: types.GET_SERVERS_SUCCESS,
  payload: {
    servers: servers
  }
});

export function getServersFailure(error) {
  let errorMsg = error;

  if (error === 'Unauthorized')
    errorMsg = 'Something went wrong. Try logging out and then back in.';

  return {
    type: types.GET_SERVERS_FAILURE,
    payload: {
      error: errorMsg
    }
  };
}

export const getServers = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(getServersRequest());

    fetch('http://playground.tesonet.lt/v1/servers', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    })
      .then(response => {
        if (response.ok) {
          response.json().then(servers => {
            setTimeout(() => {
              dispatch(getServersSuccess(servers));
              resolve();
            }, 500);
          });
        } else {
          let error = new Error(response.statusText);
          error.response = response;
          setTimeout(() => {
            dispatch(getServersFailure(response.statusText, 'servers'));
            reject(error);
          }, 500);
        }
      })
      .catch(error => console.log(error));
  });
