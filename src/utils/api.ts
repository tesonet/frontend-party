import {authHeader} from './authentication';

export function httpFetchServers() {
	return fetch('http://playground.tesonet.lt/v1/servers', {
		method: 'GET',
		headers: authHeader()
	});
}

export interface ILoginUserProps {
	username: string | null;
	password: string | null;
}

export function httpLoginUser({username, password}: ILoginUserProps) {
	return fetch('http://playground.tesonet.lt/v1/tokens', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({username, password}),
	});
}