function loginForm() {
	return {
		restrict: 'E',
		scope: true,
		template: require('html!./loginForm.html'),
		controller: LoginFormController,
		controllerAs: 'login'
	}
}

class LoginFormController {
	constructor(AuthService, $timeout, $localStorage) {
		this.AuthService = AuthService;
		this.$timeout = $timeout;
		this.$localStorage = $localStorage;

		this.errorMessage = 'Wrong username or password. Please try again.';
		this.error = false;
		this.user = {};
	}

	login() {
		this.AuthService.login(this.user, () => {
			//Failed login, error callback
			this.user = {};
			this.error = true;
			this.$timeout(()=> {
				this.error = false;
			}, 3000);
		});
	}
}

LoginFormController.$inject = ['AuthService', '$timeout', '$localStorage'];


export default loginForm;