import axios from 'axios';

const createAuthMethods = () => ({
    login(credentials) {
        return axios.post(
            'https://playground.tesonet.lt/v1/tokens',
            { ...credentials },
            { headers: { 'Content-Type': 'application/json' } },
        );
    },
});

export default createAuthMethods;
