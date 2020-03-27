import {UserActions} from '../enums';
import {TOKEN} from '../../utils/constants';
import {routerHistory} from '../../index';

interface ILoginProps {
	username: string | null;
	password: string | null;
}

export function login({username, password}: ILoginProps) {
	return async () => {
		const response = await fetch('http://playground.tesonet.lt/v1/tokens', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({username, password}),
		});
		if (response?.ok) {
			const {token} = await response.json();
			await localStorage.setItem(TOKEN, token);
			routerHistory.push('/');
			return token;
		}
	};
}

export function logout() {
	localStorage.removeItem(TOKEN);
	routerHistory.push('/login');
	return {type: UserActions.Logout};
}