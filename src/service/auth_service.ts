import axios, { AxiosPromise } from 'axios'
const loginUrl = 'https://playground.tesonet.lt/v1/tokens'

export const authLogin = (username: string, password: string) => {
  return axios.post(loginUrl, { username, password })
}
