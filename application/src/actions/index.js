import axios from 'axios';
import { LOGIN_REQUEST, FETCH_SERVERS, LOGOUT, SORT_LIST } from './Actions';

const API_URL = 'http://playground.tesonet.lt/v1';

export function Login(values) {
console.log(values);
  return {
    type: LOGIN_REQUEST,
    payload: axios.post(`${API_URL}/tokens`,
        {
    username: values.username,
    password: values.password,
    headers: {
        "Content-Type": "application/json"
      }
    })
  }
}

export function fetchServers() {
  return {
    type: FETCH_SERVERS,
    payload: axios.get(`${API_URL}/servers`,
    {
        headers: {
          Authorization: JSON.parse(localStorage.getItem('reduxPersist:LoginReducer')).token
        }
    })
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}
