import fetch from 'isomorphic-fetch';

const API = 'http://playground.tesonet.lt/v1/';


export function Login(data) {
  return fetch(API + 'tokens', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.json();
  }).catch(err => {});
}

export function Logout() {
  localStorage.removeItem('auth_token');
}

export function IsAuth() {
  return localStorage.getItem('auth_token') !== null;
}