import axios from "axios";

const URL = "http://playground.tesonet.lt";

// { username: "tesonet", password: "partyanimal" }
const login = async credentials => {
  const { data } = await axios.post(`${URL}/v1/tokens`, credentials, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return data;
};

const getTasks = () => {
  const { data } = await axios.get(`${URL}/v1/servers`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
    }
  });
  return data;
};

export default {
  login,
  getTasks
};
