import { getAuthorizationToken } from '../utils/authorization.js';

function getHeaders(withAuth) {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json; charset=utf-8');
  if (withAuth) {
    const token = getAuthorizationToken();
    headers.append('Authorization', token);
  }
  return headers;
}

export function ApiUtil(url, method, body, withAuth) {
  const fullUrl = `${process.env.REACT_APP_API_URL}${url}`
  return fetch(fullUrl, {
    method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: getHeaders(withAuth),
    body: body ? JSON.stringify(body) : undefined,
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Something went wrong');
    }
  })
}