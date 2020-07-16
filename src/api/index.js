import axios from "axios";
const httpClient = axios.create();

const api = {
  post: (url, data, config = {}) => {
    config = {
      ...config,
      headers: {
        ...config.headers,
      },
    };
    return httpClient.post(url, data, config);
  },
};

export function handleError(error, customErrorText) {
  if (error) {
    if (customErrorText) {
      toast(customErrorText);
    } else if (error.response && error.response.headers["x-padoq-advice"]) {
      toast(error.response.headers["x-padoq-advice"]);
    } else {
      toast("Something went wrong.");
    }
  }
  //debug
  if (process.env.NODE_ENV === "development") {
    const consoleStyle = "background: red; color: white; font-size: 18px";
    console.log("%c Error ", consoleStyle);
    console.log("error: ", error);
    console.log("error.response: ", error.response);
    console.log("error.message: ", error.message);
  }
}

export default api;
