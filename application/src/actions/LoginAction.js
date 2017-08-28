import axios from 'axios';
import { LOGIN_REQUEST } from './Actions';

export function Login(username, password) {
  return {
    type: LOGIN_REQUEST,
    payload: axios.post('http://playground.tesonet.lt/v1/tokens',
        {
        username: "tesonet",
        password: "partyanimal",
        headers: {
        "Content-Type": "application/json"
      }
    })
  }
}
