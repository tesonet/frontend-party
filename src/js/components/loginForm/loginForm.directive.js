function loginForm() {
	return {
		restrict: 'E',
		scope: true,
		template: require('html!./loginForm.html'),
		controller: 'LoginController',
		controllerAs: 'login'
	}
}

export default loginForm;