import axios from 'axios';

class RestClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    post(path, data, headers) {
        return axios.post(`${this.baseURL}${path}`, data, headers);
    }

    get(path, config) {
        return axios.get(`${this.baseURL}${path}`, {
            ...config,
        });
    }
}

export default RestClient;
