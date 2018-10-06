import axios from 'axios';

import {
    store,
} from 'app/store';

class RestService {
    constructor() {
        this.baseURL = 'http://playground.tesonet.lt/v1';
        this.instance = axios.create({
            baseURL: this.baseURL,
        });

        this.instance.interceptors.response.use((response) => {
            if (response && response.data) {
                return response.data;
            }

            return Promise.reject(response);
        }, ((error) => {
            if (error && error.response && error.response.status === 401) {
                // Unauthorized
                // window.location.href = '/public/login';
            }

            return Promise.reject(error);
        }));
    }

    static getConfigs(configs) {
        const {
            session,
        } = store.getState();

        return {
            ...configs,
            headers: {
                Authorization: session.token,
            },
        };
    }

    get(url, configs) {
        return this.instance.get(url, RestService.getConfigs(configs));
    }

    post(url, data, configs) {
        return this.instance.post(url, data, RestService.getConfigs(configs));
    }

    // TODO implement put and delete methods
}

export default new RestService();
