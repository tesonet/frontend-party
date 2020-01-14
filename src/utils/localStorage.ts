const getToken = (): string | null => {
  return localStorage.getItem("token");
};

const setToken = (token: string): void => {
  localStorage.setItem("token", token);
};

const destroyToken = (): void => {
  localStorage.removeItem("token");
};

export default {
  getToken,
  setToken,
  destroyToken
};
