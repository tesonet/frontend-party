export default class ServersController {
	constructor($localStorage, $location, AuthService, ServersService) {
		this.$localStorage = $localStorage;
		this.$location = $location;
		this.AuthService = AuthService;
		this.ServersService = ServersService;
		this.checkToken();
		
		this.list = [];
	}

	checkToken() {
		let _this = this;
		this.token = this.$localStorage['testio-token'];
		if (angular.isUndefined(this.token) || this.token == '' || this.token == null) {
			this.$location.path('/');
		} else {
			this.ServersService.getServersList(this.token, function(data){
				_this.list = data;
			});
		}
	}

	logout() {
		let _this = this;
		this.AuthService.logout(function() {
			_this.$location.path('/');
		});
	}
}

ServersController.$inject = ['$localStorage', '$location', 'AuthService', 'ServersService'];
