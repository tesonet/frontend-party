import { API_URL } from '../constants/api';

export const getUserToken = user =>
    fetch(`${API_URL}/tokens`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

export const getServersList = userToken =>
    fetch(`${API_URL}/servers`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userToken}`
        }
    });
