import { getFromLocalStorage } from "../../utils/localStorage/localStorage";

const url = "http://playground.tesonet.lt/v1/servers";

const fetchServers = async () => {
  const token = getFromLocalStorage("token");

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });

  if (response.ok) {
    return await response.json();
  } else {
    const errMessage = `${response.status} ${response.statusText}`;
    throw new Error(errMessage);
  }
};

export default fetchServers;
