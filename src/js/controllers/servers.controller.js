export default class ServersController {
	constructor($scope, $localStorage, $location, AuthService, ServersService, config) {
		this.$scope = $scope;
		this.$localStorage = $localStorage;
		this.$location = $location;
		this.AuthService = AuthService;
		this.ServersService = ServersService;
		this.checkToken();

		this.distanceMeasurement = config.distanceMeasurement;
		this.list = [];
	}

	orderBy(type) {
		let _this = this;
		if (typeof type == 'string') {
			if (type == _this.$scope.order) {
				_this.$scope.order = '-' + type;
			} else {
				_this.$scope.order = type;
			}
		}
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

	logout() {
		let _this = this;
		this.AuthService.logout(function () {
			_this.$location.path('/');
		});
	}
}

ServersController.$inject = ['$scope', '$localStorage', '$location', 'AuthService', 'ServersService', 'config'];
