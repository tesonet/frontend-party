class ServersService {
	constructor($http, $localStorage, AuthService, config) {
		this.$http = $http;
		this.$localStorage = $localStorage;
		this.AuthService = AuthService;

		this.serversEndpoint = config.serversUrl;
		this.servers = [];
	}

	getServersList(token, callback) {
		let _this = this;
		this.$http({
				method: 'GET',
				url: this.serversEndpoint,
				headers: {
					'Authorization': token
				}
			})
			.then(function (e) {
				callback({
					content: true,
					list: e.data
				});
			}, function () {
				callback({
					content: false
				})
			});
	}
}

ServersService.$inject = ['$http', '$localStorage', 'AuthService', 'config'];

export default ServersService;
