import {LOCAL_STORAGE_TOKEN} from './constants';

export function isLoggedIn() {
	return !!localStorage.getItem(LOCAL_STORAGE_TOKEN) || false;
}

export function authHeader() {
	const token = localStorage.getItem(LOCAL_STORAGE_TOKEN) || '';
	if (token) {
		return {'Authorization': `Bearer ${token}`};
	}
}