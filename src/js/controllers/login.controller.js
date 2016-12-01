export default class LoginController {
	constructor(AuthService, $timeout, $localStorage) {
		this.AuthService = AuthService;
		this.$timeout = $timeout;
		this.$localStorage = $localStorage;

		this.errorMessage = 'Wrong username or password. Please try again.';
		this.error = false;
		this.user = {};
	}

	login() {
		this.AuthService.login(this.user, (status, data) => {
			//Failed login, error callback
			this.user = {};
			this.error = true;
			this.$timeout(()=> {
				this.error = false;
			}, 3000);
		});
	}
}

LoginController.$inject = ['AuthService', '$timeout', '$localStorage'];
