import axios from "axios";

const AUTH_URL = "http://playground.tesonet.lt/v1/servers";

const getConfig = token => ({
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export const getServerList = async token => {
  try {
    const { data } = await axios.get(`${AUTH_URL}`, getConfig(token));
    return data;
  } catch (err) {
    return null;
  }
};
