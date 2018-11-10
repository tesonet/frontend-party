import axios from 'axios';

import { BASE_URL } from '../../app/constants';

const AUTH_TOKEN_URL = `${BASE_URL}/v1/tokens`;

const getAuthToken = (username, password) => axios.post(AUTH_TOKEN_URL, {
    username,
    password
});

export default getAuthToken;
