export const SET_USER_LOGIN = "SET_USER_LOGIN";
export const SET_USER_LOGOUT = "SET_USER_LOGOUT";

export const setUserLogin = () => {
  return {
    type: SET_USER_LOGIN,
  };
};

export const setUserLogout = () => {
  return {
    type: SET_USER_LOGOUT,
  };
};
