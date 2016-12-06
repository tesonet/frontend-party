export default ['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
	$routeProvider
		.when('/', {
			template: require('html!../templates/login.html')
		})
		.when('/servers', {
			template: require('html!../templates/servers.html'),
			controller: 'ServersController as servers'
		})
		.otherwise('/');
	$locationProvider.html5Mode(true);
}];