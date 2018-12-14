import axios from "axios";

const URL = "http://playground.tesonet.lt";

const getToken = async credentials => {
  const { data } = await axios.post(`${URL}/v1/tokens`, credentials, {
    headers: {
      "Content-Type": "application/json"
    }
  });

  return data;
};

const getTasks = async () => {
  const { data } = await axios.get(`${URL}/v1/servers`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
    }
  });
  return data;
};

export { getToken, getTasks };
