import axios from 'axios';
import { API_URL } from '../common/constants';

export const get = (token): any =>
    axios.get(`${API_URL}/servers`, {
        headers: { Authorization: `Bearer ${token}` },
    });
