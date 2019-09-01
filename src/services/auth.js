import axios from "axios";

const AUTH_URL = "http://playground.tesonet.lt/v1/tokens";

export const getAuthToken = async (username, password) => {
  try {
    const { data } = await axios.post(`${AUTH_URL}`, {
      username,
      password
    });
    return data.token;
  } catch (err) {
    return null;
  }
};