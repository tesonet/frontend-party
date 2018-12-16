export function setAuthorizationToken({ token }) {
  localStorage.setItem('token', token);
}

export function unsetAuthorizationToken() {
  localStorage.removeItem('token');
}

export function getAuthorizationToken() {
  return localStorage.getItem('token');
}