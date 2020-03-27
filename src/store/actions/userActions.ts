import {UserActions} from '../reducers/userReducer/enums';

interface ILoginProps {
	username: string | null;
	password: string| null;
}

export function login({username, password}: ILoginProps) {
	return async (dispatch: any) => {
		const response = await fetch('http://playground.tesonet.lt/v1/tokens', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password }),
		});
		if(response?.ok) {
			const {token} = await response.json();
			localStorage.setItem('user', token);
			return dispatch({type: UserActions.LoginSuccess, payload: token});
		}
	};
}

export function logout() {
	localStorage.removeItem('user');
	return{type: UserActions.Logout};
}