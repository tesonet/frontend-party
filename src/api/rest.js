// Constants
import {
    API_URL
} from '../lib/constants';

/**
 * REST API call Wrapper
 * @param method
 * @param url
 * @param token
 * @returns {Promise<{error, result}>}
 */
const restWrapper = async (method, url = '', token, params) => {
    const requestUrl = `${API_URL}${url}`;
    try {
        const response = await fetch(requestUrl, {
            method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: params ? JSON.stringify(params) : undefined,
        });
        if (response.status === 200) {
            return { result: await response.json() };
        } else if (response.status === 401) {
            return { error: 'unauthorized' };
        } else {
            return { error: await response.json() };
        }
    } catch (e) {
        console.log('Error from restWrapper call ', e);
        return { error: e };
    }
};

/**
 * Login User Handler
 * @param username
 * @param password
 * @returns {Promise<{userToken, error}>}
 */
const login = async ({ username, password }) => {
    const requestUrl = `${API_URL}/v1/tokens`;
    try {
        const response = await fetch(requestUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ username, password })
        });

        if (response.status === 200) {
            return { result: await response.json() };
        } else if (response.status === 401) {
            return { error: 'unauthorized' };
        } else {
            return { error: await response.json() };
        }
    } catch (e) {
        console.log('Error from restWrapper call ', e);
        return { error: e };
    }
};

const REST = {
    login,
    validateUser: restWrapper.bind(this, 'GET', '/v1/servers'), // because validate user URL is not provided, using same url as to get servers
    getServers: restWrapper.bind(this, 'GET', '/v1/servers'),
};

export default REST;
