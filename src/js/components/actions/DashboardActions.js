import fetch from 'isomorphic-fetch';

const API = 'http://playground.tesonet.lt/v1/servers';

export function ServerList() {
  return fetch(API, {
    headers: new Headers({
      'Authorization': 'Bearer ' + localStorage.getItem('auth_token'), 
      'Content-Type': 'application/json'
    })
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    })
    .catch(err => {});
}