export const validateLoginAttempt = payload => {
  if (typeof payload.data.token !== "undefined") {
    localStorage.setItem("userToken", payload.data.token);

    return true;
  }

  return false;
};
