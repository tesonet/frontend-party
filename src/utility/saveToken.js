export const saveToken = token => {
  const expirationDate = new Date(new Date().getTime() + 3600000);
  localStorage.setItem('token', token);
  localStorage.setItem('expirationDate', expirationDate);
};
