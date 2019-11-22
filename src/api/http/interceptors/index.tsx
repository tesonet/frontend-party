import { AxiosResponse } from 'axios';

export const mapApiResponse = (response: AxiosResponse): any => ({
  response: response && response.data,
});

export const mapApiError = (error: any) : any => {
  const { response: { status, statusText, data: { message = '' } = {} } } = error;
  return ({
    error: {
      status,
      message: message || statusText,
    },
  });
};
