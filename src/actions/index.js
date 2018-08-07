import { GET_SERVERS, LOGIN, LOGOUT } from './types';

export function login(payload) {
    return {
        type: LOGIN,
        payload: {
            request: {
                url: '/tokens',
                method: 'POST',
                data: payload
            }
        }
    }
}

export function getServers() {
    return {
        type: GET_SERVERS,
        payload: {
            request: {
                url: '/servers'
            }
        }
    }
}

export const logout = () => ({
    type: LOGOUT
});