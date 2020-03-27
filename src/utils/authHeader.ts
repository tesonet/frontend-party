import {TOKEN} from './constants';

export function authHeader() {
	const token = localStorage.getItem(TOKEN) || '';
	if (token) {
		return {'Authorization': 'Bearer ' + token};
	}
}