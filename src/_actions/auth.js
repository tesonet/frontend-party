import { getAuthToken } from "../services/auth";
import { AUTH_USER, LOGOUT } from ".";

export const submitLoginForm = (username, password) => async (
  dispatch,
  getState,
  { storageClient }
) => {
  const token = await getAuthToken(username, password);
  if (token) {
    storageClient.set("token", token);
    dispatch({ type: AUTH_USER });
    return { allertMessage: "" };
  }
  return { allertMessage: "Incorrect username or password" };
};

export const logoutAction = () => (dispatch, getState, { storageClient }) => {
  storageClient.remove("token");
  dispatch({ type: LOGOUT });
};
