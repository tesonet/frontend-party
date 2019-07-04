import fetch from 'cross-fetch';
import { promisify } from '../promisify/promisify';
import { FAKE_DATA } from './FAKE_DATA';

const USE_API = process.env.REACT_APP_USE_API;
const API_BASE = process.env.REACT_APP_API_BASE;

export function fetchWrapper(resource: 'tokens' | 'servers', body?: {}, token?: string): Promise<Response> {
  if (USE_API === true.toString()) {
    return fetchWrapperReal(resource, body, token);
  }
  return fetchWrapperFake(resource, body, token);
}

export function fetchWrapperReal(resource: 'tokens' | 'servers', body?: {}, token?: string): Promise<Response> {
  return resource === 'servers' 
    ? fetch(`${API_BASE}${resource}`, {
      method: 'GET',
      headers: new Headers({ 
        'content-type': 'application/json',
        'authorization': `Bearer ${token}`,
      }),
    })
    : fetch(`${API_BASE}${resource}`, {
      method: 'POST',
      headers: new Headers({ 
        'content-type': 'application/json',
      }),
      body: JSON.stringify(body),
    });
}

export function fetchWrapperFake(resource: 'tokens' | 'servers', body?: {}, token?: string): Promise<Response> {
  return resource === 'servers'
    ? promisify((resolve, reject) => {
      resolve({
        status: 200,
        json: () => Promise.resolve(FAKE_DATA)
      } as Response);
    }, 2000)
    : promisify((resolve, reject) => {
      resolve({
        status: 200,
        json: () => Promise.resolve({token: 'fake token'})
      } as Response)
    }, 2000);
}