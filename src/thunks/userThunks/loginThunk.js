import axios from "axios";
import { authUser } from "../../actions/userActions/authAction";
import {
  onLoginLoading,
  onLoginError,
  onLoginSuccess
} from "../../actions/userActions/loginActions";
import { setToLocalStorage } from "../../utils/localStorage";
import { SERVER_URL } from "../../constants/api";
import { HOME } from "../../constants/routes";

export const onLoginSubmit = (user, history) => dispatch => {
  dispatch(onLoginLoading());

  if (user.username === "" || user.password === "") {
    return dispatch(onLoginError("Please fill empty fields"));
  }

  const loginJson = {
    username: user.username,
    password: user.password
  };

  axios
    .post(`${SERVER_URL}/tokens`, loginJson)
    .then(res => {
      dispatch(onLoginSuccess());
      dispatch(authUser(loginJson.username, res.data.token));

      setToLocalStorage("isAuth", true);
      setToLocalStorage("user", JSON.stringify(loginJson.username));
      setToLocalStorage("authToken", `Bearer ${res.data.token}`);

      history.push(HOME);
    })
    .catch(err => {
      if (err.response) {
        if (err.response.status && err.response.status === 401) {
          dispatch(onLoginError("Incorrect login details. Try again."));
        } else {
          dispatch(onLoginError("Something went wrong. Try again later"));
        }
      }
    });
};
