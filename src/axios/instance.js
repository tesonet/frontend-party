import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://playground.tesonet.lt/v1/',
    timeout: 1000,
});

instance.defaults.headers.common['Authorization'] = localStorage.getItem('token');

export default instance