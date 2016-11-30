export default ['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            template: require('html!../templates/login.html'),
            controller: 'LoginController as login'
        })
        .when('/servers', {
            template: require('html!../templates/servers.html'),
            controller: 'ServersController as servers'
        })
        .otherwise('/');
    $locationProvider.html5Mode(true);
}];