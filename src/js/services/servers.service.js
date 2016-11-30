class ServersService {
	constructor($http, $localStorage, AuthService) {
		this.$http = $http;
		this.$localStorage = $localStorage;
		this.AuthService = AuthService;

		this.serversEndpoint = 'http://playground.tesonet.lt/v1/servers';
		this.servers = [];
	}

	getServersList(token, callback) {
		this.$http({
				method: 'GET',
				url: this.serversEndpoint,
				headers: {
					'Authorization': token
				}
			})
			.then(function (e) {
				callback(e.data);
				console.log(e.data);
			}, function () {
				this.AuthService.logout();
				// alert('error');
			});
	}
}

ServersService.$inject = ['$http', '$localStorage', 'AuthService'];

export default ServersService;
