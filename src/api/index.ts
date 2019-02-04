import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { ILoginState } from '../interfaces';

const api: string = 'http://playground.tesonet.lt';

export async function apiLogin(loginData: ILoginState): Promise<any> {
  const config: AxiosRequestConfig = {
    method: 'post',
    url: `${api}/v1/tokens`,
    data: loginData,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const response: AxiosResponse | AxiosError = await axios(config).then((resp: AxiosResponse) => {
    return resp;
  }).catch((resp: AxiosError) => {
    return resp;
  });

  return response;
}

export async function apiGetServers(): Promise<any> {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: `${api}/v1/servers`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('apitoken')
    }
  };

  const response: AxiosResponse | AxiosError = await axios(config).then((resp: AxiosResponse) => {
    return resp;
  }).catch((resp: AxiosError) => {
    return resp;
  });

  return response;
}
