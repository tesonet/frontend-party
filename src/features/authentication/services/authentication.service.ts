import { API_URL, LOCAL_STORAGE_TOKEN } from 'common/constants/api.config';
import { ILoginData } from '../store';

export class AuthenticationService {
	public async login(credentials: ILoginData): Promise<void> {
		const response = await fetch(`${API_URL}tokens`, this.getFetchParams(credentials, 'POST'));

		console.log(1);
		if (!response.ok) {
			const { message } = await response.json().catch(e => e);
			console.log(message);
			throw new Error(`Login failed: ${message}`);
		}

		const { token } = await response.json().catch(e => e);
		console.log(token);

		if (!token) {
			console.log(2);
			throw new Error('No token')
		}

		this.storeToken(token)
	}

	private getFetchParams(credentials: ILoginData, method: string) {
		const { username, password } = credentials;

		return {
			method: method,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				password
			})
		}
	}

	public logout() {
		const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
		if (token) {
			localStorage.removeItem(LOCAL_STORAGE_TOKEN);
		}
	}

	private storeToken(token: any) {
		localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
	}

	public isUserLoggedIn(): boolean {
		return !!localStorage.getItem(LOCAL_STORAGE_TOKEN);
	}
}
