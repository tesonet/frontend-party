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

            return Promise.resolve(response);
        }, ((error) => {
            if (axios.isCancel(error)) {
                console.log('Request canceled', error.message);
            }

            if (error && error.response && error.response.status === 401) {
                // TODO
                // Unauthorized
                // window.location.href = '/public/login'; user should be redirected?
            }

            return Promise.reject(error);
        }));
    }

    getConfigs(configs) {
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
        return this.instance.get(url, this.getConfigs(configs));
    }

    post(url, data, configs) {
        return this.instance.post(url, data, this.getConfigs(configs));
    }

    // TODO implement put and delete methods

    cancelRequest(source, message = 'No message') {
        source.cancel(message);
    }

    getRequestSource() {
        return axios.CancelToken.source();
    }

    isCanceledRequest(error) {
        return axios.isCancel(error);
    }
}

export default new RestService();
