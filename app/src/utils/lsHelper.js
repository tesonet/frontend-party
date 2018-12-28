export function setAuthorizationToken({ token }) {
  if(!!token) {
    localStorage.setItem('token', token);
  } else {
    localStorage.removeItem('token');
  }
}

export function getAuthorizationToken() {
  return localStorage.getItem('token');
}