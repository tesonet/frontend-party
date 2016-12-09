function logoutButton() {
	return {
		restrict: 'E',
		scope: true,
		template: require('html!./logoutButton.html'),
		controller: LogoutButtonController,
		controllerAs: 'logout'
	}
}

class LogoutButtonController {
	constructor(AuthService, $location, $log) {
		this.AuthService = AuthService;
		this.$location = $location;

		$log.log(AuthService);
		$log.log('asdasd');
	}

	logout() {
		let _this = this;
		this.AuthService.logout(function () {
			_this.$location.path('/');
		});
	}
}

LogoutButtonController.$inject = ['AuthService', '$location', '$log'];

export default logoutButton;