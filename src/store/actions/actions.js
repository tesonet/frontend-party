import axios from "axios";

export const authSuccess = token => {
  return {
    type: "AUTH_SUCCESS",
    token
  };
};

export const authStart = () => {
  return {
    type: "AUTH_START"
  };
};

export const authFail = error => {
  return {
    type: "AUTH_FAIL",
    error
  };
};

export const setCountriesList = list => {
  return {
    type: "SET_LIST",
    list
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: "AUTH_LOGOUT"
  };
};

export const auth = (username, password) => {
  return async dispatch => {
    dispatch(authStart());
    const authData = {
      username,
      password
    };

    const url = `http://playground.tesonet.lt/v1/tokens`;

    let config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post(url, authData, config);
      localStorage.setItem('token', res.data.token)
      dispatch(authSuccess(res.data.token));
    } catch (e) {
      dispatch(authFail(e.message));
    }
  };
};

export const getServerList = () => {
  return async dispatch => {
    const token = localStorage.getItem("token");

    let config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    const url = `http://playground.tesonet.lt/v1/servers`;

    const res = await axios.get(url, config);

    dispatch(setCountriesList(res.data));
  };
};
