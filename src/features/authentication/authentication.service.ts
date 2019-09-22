import { LOCAL_STORAGE_TOKEN, API_URL } from '../../common/constants/auth.constant';
import { ILoginData } from './store';

class AuthenticationService {
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

	public async logout() {
		const token = await localStorage.getItem(LOCAL_STORAGE_TOKEN);
		if (token) {
			await localStorage.removeItem(LOCAL_STORAGE_TOKEN);
		}
	}

	public isUserLoggedIn(): boolean {
		return localStorage.getItem(LOCAL_STORAGE_TOKEN) ? true : false;
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

	private setLocalStorage(token: any) {
		localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
	}
}

export default AuthenticationService;
