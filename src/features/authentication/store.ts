import AuthenticationService from './authentication.service';
import { runInAction, decorate, action, observable } from 'mobx';
import routeStore from '../../routing/store';

export interface ILoginData {
	[index: string]: string;
}

export class AuthStore {
	public isLoggingIn: boolean;
	public isLoggedIn: boolean;
	private authService: AuthenticationService;

	constructor() {
		this.isLoggingIn = false;
		this.authService = new AuthenticationService();
		this.isLoggedIn = this.authService.isUserLoggedIn();
	}

	public loginUser = async (loginData: ILoginData) => {
		this.isLoggingIn = true;

		this.isLoggedIn = await this.authService.login(loginData);
		runInAction(() => {
			this.isLoggingIn = this.authService.isUserLoggedIn();
			console.log(this.authService.isUserLoggedIn());
			if (this.isLoggedIn) {
				routeStore.changeRoute('/servers')
			}
		});
	}

	public logOutUser = async () => {
		this.authService.logout();

		runInAction(() => {
			this.isLoggedIn = this.authService.isUserLoggedIn();
			routeStore.changeRouteToDefault()
		})
	}
}


decorate(AuthStore, {
	loginUser: action,
	isLoggingIn: observable,
	isLoggedIn: observable,
	logOutUser: action
})

const authStore = new AuthStore();
export default authStore;
