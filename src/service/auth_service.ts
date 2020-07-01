import axios, { AxiosPromise } from 'axios'
const loginUrl = 'https://playground.tesonet.lt/v1/tokens'
const serversUrl = 'https://playground.tesonet.lt/v1/servers'

export const authLogin = (username: string | null, password: string | null) => {
  return axios.post(loginUrl, { username, password })
}

export const requestServerList = () => {
  return axios.get(serversUrl, {
    headers: { Authorization: window.localStorage.getItem('token') },
  })
}
