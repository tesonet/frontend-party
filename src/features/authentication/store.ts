import {
	action,
	decorate,
	observable,
	runInAction
} from 'mobx';
import { AuthenticationService } from './services/authentication.service';
import { routeStore } from 'routing/store';

export interface ILoginData {
	[index: string]: string;
}

export class AuthStore {
	private authService: AuthenticationService = new AuthenticationService();
	public isLoggedIn: boolean = this.authService.isUserLoggedIn();
	public loginHasFailed: boolean = false;

	public loginUser = async (loginData: ILoginData) => {
		this.isLoggedIn = false

		try {
			await this.authService.login(loginData);
			runInAction(() => {
				this.isLoggedIn = this.authService.isUserLoggedIn();
			});

			if (this.isLoggedIn) {
				routeStore.changeRoute('/')
			}
		} catch(e) {
			this.isLoggedIn = false;
			this.loginHasFailed = true;
		}
	}

	public logOutUser = () => {
		this.authService.logout();


			this.isLoggedIn = this.authService.isUserLoggedIn();
			routeStore.changeRoute('/log-in');

	}

	public resetValidation = () => {
		this.loginHasFailed = false;
	}
}

decorate(AuthStore, {
	loginUser: action,
	isLoggedIn: observable,
	logOutUser: action,
	loginHasFailed: observable,
	resetValidation: action
})

export const authStore = new AuthStore();
