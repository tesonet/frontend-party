import axios from 'axios';

const createServersMethods = () => ({
    getServers(token) {
        return axios.get(
            'https://playground.tesonet.lt/v1/servers',
            { headers: { Authorization: `Bearer ${token}` } },
        );
    },
});

export default createServersMethods;
