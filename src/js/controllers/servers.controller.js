import angular from 'angular';

export default class ServersController {
	constructor($scope, $localStorage, $location, ServersService) {
		this.$scope = $scope;
		this.$localStorage = $localStorage;
		this.$location = $location;
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
			this.ServersService.getServersList(this.token, function (data) {
				if (data.content) {
					_this.list = data.list;
				} else {
					_this.logout();
				}
			});
		}
	}
}

ServersController.$inject = ['$scope', '$localStorage', '$location', 'ServersService'];

