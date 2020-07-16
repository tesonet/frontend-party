import axios from "axios";
import { toast } from "react-toastify";
const httpClient = axios.create();

const api = {
  post: (url, data, headers = {}) => {
    const config = {
      headers: {
        ...headers,
      },
    };
    return httpClient.post(url, data, config);
  },

  get: (url, headers = {}) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    };
    return httpClient.get(url, config);
  },
};

export function handleError(error, customErrorText) {
  if (error && customErrorText) {
    toast.error(customErrorText);
  }
  //debug only in dev env
  if (process.env.NODE_ENV === "development") {
    const consoleStyle = "background: red; color: white; font-size: 18px";
    console.log("%c Error ", consoleStyle);
    console.log("error: ", error);
    console.log("error.response: ", error.response);
    console.log("error.message: ", error.message);
  }
}

export default api;
