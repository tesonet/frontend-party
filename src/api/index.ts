import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { ILoginValues } from '../interfaces';

const api: string = 'http://playground.tesonet.lt';

export async function apiLogin(loginData: ILoginValues): Promise<any> {
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
