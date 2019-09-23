import { API_URL } from '../constants/api';

export const getUserToken = async user => {
    const response = await fetch(`${API_URL}/tokens`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...user })
    });

    return response.json();
};
