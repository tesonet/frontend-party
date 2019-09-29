import { API_URL, LOCAL_STORAGE_TOKEN } from '../../../common/constants/api.config';
import { ILoginData } from '../store';

export class AuthenticationService {
	public login(credentials: ILoginData): Promise<boolean> {
		return new Promise<boolean>(resolve => fetch(
			`${API_URL}tokens`,
			this.setParams(credentials, 'POST')
		)
			.then(response => response.json())
			.then(data => {
				if (!data) {
					resolve(false)
				}
				if (data.token) {
					this.setLocalStorage(data.token);
					resolve(true);

				} else if (data.message) {
					resolve(false);
				}
			})
		);
	}

	private setParams(credentials: ILoginData, method: string) {
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

	private setLocalStorage(token: any) {
		localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
	}

	public isUserLoggedIn(): boolean {
		return !!localStorage.getItem(LOCAL_STORAGE_TOKEN);
	}
}
