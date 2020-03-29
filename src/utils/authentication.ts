import {TOKEN} from './constants';

export function isLoggedIn() {
	return localStorage.getItem(TOKEN) || false;
}

export function authHeader() {
	const token = localStorage.getItem(TOKEN) || '';
	if (token) {
		return {'Authorization': 'Bearer ' + token};
	}
}