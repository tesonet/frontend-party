import axios from 'axios';

const AUTH_TOKEN_URL = 'http://playground.tesonet.lt/v1/tokens';

const getAuthToken = (username, password) => axios.post(AUTH_TOKEN_URL, {
    username,
    password
});

export default getAuthToken;
