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

	public loginUser = async (loginData: ILoginData) => {
		this.isLoggedIn = false

		try {
			const lel = await this.authService.login(loginData);
			console.log(lel);
			runInAction(() => {
				this.isLoggedIn = this.authService.isUserLoggedIn();
			});

			if (this.isLoggedIn) {
				routeStore.changeRoute('/')
			}
		} catch(e) {
			this.isLoggedIn = false;
			throw new Error('wait wat');
		}
	}

	public logOutUser = () => {
		this.authService.logout();


			this.isLoggedIn = this.authService.isUserLoggedIn();
			routeStore.changeRoute('/log-in');

	}
}

decorate(AuthStore, {
	loginUser: action,
	isLoggedIn: observable,
	logOutUser: action
})

export const authStore = new AuthStore();
