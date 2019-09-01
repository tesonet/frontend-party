import { getAuthToken } from "../services/auth";
import { AUTH_USER, LOGOUT } from "./index";

export const submitLoginForm = (username, password) => async (
  dispatch,
  getState,
  { storageClient }
) => {
  const token = await getAuthToken(username, password);
  if (token) {
    storageClient.set("token", token);
    dispatch({ type: AUTH_USER });
    return { alertMessage: "" };
  }
  return { alertMessage: "🤷‍  Incorrect username or password" };
};

export const logoutAction = () => (dispatch, getState, { storageClient }) => {
  storageClient.remove("token");
  dispatch({ type: LOGOUT });
};
