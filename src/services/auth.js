import axios from "axios";

const AUTH_URL = "http://playground.tesonet.lt/v1/tokens";

export const getAuthToken = (username, password) => {
  return axios.post(`${AUTH_URL}`, {
    username: "tesonet",
    password: "partyanimal"
  });
};
