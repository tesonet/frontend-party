import axios from 'axios';
import { getFromLocalStorage } from './common/util/localStorage.util';

const baseURL = 'http://playground.tesonet.lt/v1';

const getToken = () => {
   const session = getFromLocalStorage('session');
   return session ? session.token : '';
};

const axiosProxy = () => {
    const defaultOptions = {
        baseURL: baseURL,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    let instance = axios.create(defaultOptions);

    instance.interceptors.request.use(function (config) {
        config.headers.Authorization = getToken();
        return config;
    });

    return instance;
};

export default axiosProxy();
