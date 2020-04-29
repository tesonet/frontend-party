import axios from 'axios';

const SERVER_URL = 'http://playground.tesonet.lt/v1';
const DEFAULT_HEADERS = {
  'Content-Type': 'application/json'
};

class API {
  constructor() {
    this.serverURL = SERVER_URL;
  }

  get(domain, headers) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(`${this.serverURL}/${domain}`, {
          headers: { ...DEFAULT_HEADERS, ...headers }
        });

        resolve(response.data);
      } catch (error) {
        reject(error.response.data.message);
      }
    });
  }

  post(domain, payload, headers) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(
          `${this.serverURL}/${domain}`,
          payload,
          { headers: { ...DEFAULT_HEADERS, ...headers } }
        );

        resolve(response.data);
      } catch (error) {
        reject(error.response.data.message);
      }
    });
  }
}

export default API;
