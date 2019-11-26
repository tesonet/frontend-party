import axios from "axios";
import { history } from "../_helpers/history";
import {
  LOGIN_IN_PROCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  SET_USERNAME,
  SET_PASSWORD,
  AUTH_SERVER_ERROR
} from "../_constants/types";

export const login = ({ username, password }) => dispatch => {
  dispatch({
    type: LOGIN_IN_PROCESS
  });
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ username, password });
  axios
    .post("http://playground.tesonet.lt/v1/tokens", body, config)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      history.push("/dashboard");
      dispatch({
        type: LOGIN_SUCCESS
      });
    })
    .catch(err => {
      try {
        if (err.response.status === 401) {
          dispatch({
            type: LOGIN_FAIL
          });
        }
      } catch (error) {
        dispatch({
          type: AUTH_SERVER_ERROR
        });
      }
    });
};

export const logout = () => {
  localStorage.removeItem("token");
  history.push("/login");
  return {
    type: LOGOUT_SUCCESS
  };
};

export const setUsername = username => {
  return {
    type: SET_USERNAME,
    payload: username
  };
};

export const setPassword = password => {
  return {
    type: SET_PASSWORD,
    payload: password
  };
};
