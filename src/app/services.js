import { setAuthenticationFailed, setIsLoginInProgress } from "../components/LoginBox/services/slice";
import {
  setIsServersListLoading,
  setServersList,
  setServersListLoadingFailed
} from "../components/ServersList/services/slice";

export const logoutHandler = (history) => {
  localStorage.removeItem("token");
  history.push("/");
}

export const loginHandler = (values, dispatch, history) => {
  dispatch(setIsLoginInProgress(true));
  fetch("https://playground.tesonet.lt/v1/tokens", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: values.username,
      password: values.password,
    })
  }).then(response => response.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        history.push("/servers");
      } else {
        dispatch(setAuthenticationFailed(true));
      }
      dispatch(setIsLoginInProgress(false));
    })
    .catch(() => {
      dispatch(setIsLoginInProgress(false));
      dispatch(setAuthenticationFailed(true));
    });
};

export const fetchServersList = (token, dispatch) => {
  dispatch(setIsServersListLoading(true));
  fetch("https://playground.tesonet.lt/v1/servers", {
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then(response => response.json())
    .then(data => {
      if (data?.length > 0) {
        dispatch(setIsServersListLoading(false));
        dispatch(setServersList(data));
      }
    })
    .catch(() => {
      dispatch(setIsServersListLoading(false));
      dispatch(setServersListLoadingFailed(true));
    });
};