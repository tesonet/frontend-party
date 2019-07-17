import { getAuthToken } from "../services/auth";
import { AUTH_USER } from ".";

export const submitLoginForm = (username, password) => async (
  dispatch,
  getState,
  { storageClient }
) => {
  const token = await getAuthToken(username, password);
  if (token) {
    storageClient.set("token", token);
    dispatch({ type: AUTH_USER });
  }
};
