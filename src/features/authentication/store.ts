import routeStore from '../../routing/store';
import {
	action,
	decorate,
	observable,
	runInAction
	} from 'mobx';
import { AuthenticationService } from './services/authentication.service';

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
		});

		if (this.isLoggedIn) {
			routeStore.changeRoute('/')
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
	isLoggingIn: observable,
	isLoggedIn: observable,
	logOutUser: action
})

const authStore = new AuthStore();
export default authStore;
