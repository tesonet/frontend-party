import axios from 'axios';
import { LOGIN_REQUEST, FETCH_SERVERS } from './Actions';

export function Login(values) {
console.log(values);
  return {
    type: LOGIN_REQUEST,
    payload: axios.post('http://playground.tesonet.lt/v1/tokens',
        {
    username: values.username,
    password: values.password,
    headers: {
        "Content-Type": "application/json"
      }
    })
  }
}
