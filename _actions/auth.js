import { getAuthToken } from "./services/auth";

export const loginUser = ({ email, password }) => async (
  dispatch,
  getState,
  { storageClient }
) => {
  getAuthToken()
    .then(response => {
      // dispatch({ type: AUTH_USER });
      console.log(response);
      // setItem("token", response.data.token);
    })
    .catch(() => {
      dispatch(authError("Bad Login Info"));
    });
};
