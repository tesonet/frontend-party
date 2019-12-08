import { AnyAction, Dispatch } from 'redux';
import axios, { AxiosRequestConfig } from 'axios';
import { AuthActions } from '../redux/containers/auth/authActions';

export const TOKEN_KEY = 'auth_token';

const wrapRequest = async (options: Partial<AxiosRequestConfig>) => {
  let headers: Record<string, string> = {
    accept: 'application/json',
    'Content-Type': 'application/json'
  };

  const authInfo = localStorage.getItem(TOKEN_KEY);
  if (authInfo != null) {
    headers['Authorization'] = `Bearer ${authInfo}`;
  }

  return await axios({ headers, ...options });
};

export async function apiCall<T>(options: Partial<AxiosRequestConfig>, dispatch: Dispatch<AnyAction>) {
  try {
    const response = await wrapRequest(options);
    return response.data as T;
  } catch (ex) {
    if (axios.isCancel(ex)) {
      console.warn('Request cancelled.');
    }

    if (ex.response && ex.response.status && [401, 403].includes(ex.response.status)) {
      dispatch(AuthActions.logout());   // read about using Redux middleware
    }

    throw ex;
  }
};