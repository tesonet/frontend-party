import axios from 'axios';
import { API_URL } from '../common/constants';

export const login = (username: string, password: string): any =>
    axios.post(`${API_URL}/tokens`, { username, password });
