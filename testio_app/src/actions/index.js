export const authorize = (username, password) => ({
  type: "AUTH_REQUEST",
  payload: { username, password }
});