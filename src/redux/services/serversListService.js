import axios from 'axios';

export const serversListService = () => {
    const token = JSON.parse(localStorage.getItem('token'));

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const url = 'http://playground.tesonet.lt/v1/servers';

    return axios.get(url, config)
        .then((response) => {
            if (response.status !== 200) {
                return Promise.reject(new Error('Something went wrong'));
            }

            return response.data;
        });
};

export default serversListService;
